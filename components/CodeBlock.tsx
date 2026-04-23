import React, { useEffect, useRef, useState } from 'react';
import { getHighlighter, Highlighter } from 'shiki';
import copy from 'copy-to-clipboard';

interface CodeBlockProps {
  code: string;
  language: string;
  filename: string;
  lineNumbers?: boolean;
  highlightLines?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language, filename, lineNumbers, highlightLines }) => {
  const [highlighter, setHighlighter] = useState<Highlighter | null>(null);
  const [highlightedCode, setHighlightedCode] = useState<string>('');
  const codeRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    const loadHighlighter = async () => {
      const hl = await getHighlighter({ theme: 'vs-solarized-light' }); // 'vs-solarized-light'
      setHighlighter(hl);
    };

    loadHighlighter();
  }, []);

  useEffect(() => {
    if (highlighter) {
      const lines = code.split('\n');
      const highlightedLines = lines.map((line, index) => {
        const shouldHighlight = highlightLines ? highlightLines.split(',').some(range => {
          const [start, end] = range.split('-').map(Number);
          return index + 1 === start || (end && index + 1 >= start && index + 1 <= end);
        }) : false;
        
        return `<span class="${shouldHighlight ? 'highlight' : ''}">${line}</span>`;
      }).join('\n');

      const codeHtml = highlighter.codeToHtml(highlightedLines, { lang: language });
      setHighlightedCode(codeHtml);
    }
  }, [highlighter, code, language, highlightLines]);

  const handleCopy = () => {
    copy(code);
    alert('Code copied to clipboard!');
  };

  return (
    <div>
      {filename && <div className="filename">{filename}</div>}
      <button onClick={handleCopy}>Copy</button>
      <pre ref={codeRef} dangerouslySetInnerHTML={{ __html: highlightedCode }} />
      {lineNumbers && (
        <div className="line-numbers">
          {code.split('\n').map((_, index) => (
            <div key={index} className="line-number">{index + 1}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CodeBlock;
