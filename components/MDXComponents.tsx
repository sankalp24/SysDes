import React from 'react';

// Custom MDX Components
const MDXComponents = {
  h1: (props) => <h1 style={{...headingStyles, fontSize: '2em'}} {...props} />,
  h2: (props) => <h2 style={{...headingStyles, fontSize: '1.5em'}} {...props} />,
  h3: (props) => <h3 style={{...headingStyles, fontSize: '1.25em'}} {...props} />,
  p: (props) => <p style={{...paragraphStyles}} {...props} />,
  a: (props) => <a style={{...linkStyles}} {...props} />,
  pre: (props) => <pre style={{...codeBlockStyles}} {...props} />,
  code: (props) => <code style={{...inlineCodeStyles}} {...props} />,
  blockquote: (props) => <blockquote style={{...blockquoteStyles}} {...props} />,
  Callout: (props) => <div style={{...calloutStyles}} {...props} />,
  table: (props) => <table style={{...tableStyles}} {...props} />,
  img: (props) => <img style={{...imageStyles}} {...props} />,
};

const headingStyles = { color: '#333', margin: '0.5em 0' };
const paragraphStyles = { margin: '1em 0', lineHeight: '1.5' };
const linkStyles = { color: '#1e90ff', textDecoration: 'none' };
const codeBlockStyles = { backgroundColor: '#f5f5f5', padding: '1em', borderRadius: '4px', overflowX: 'auto' };
const inlineCodeStyles = { backgroundColor: '#eaeaea', padding: '0.2em 0.4em', borderRadius: '3px' };
const blockquoteStyles = { borderLeft: '4px solid #ccc', padding: '0.5em 1em', fontStyle: 'italic' };
const calloutStyles = { border: '1px solid #007acc', backgroundColor: '#f9f9f9', padding: '1em', borderRadius: '5px' };
const tableStyles = { width: '100%', borderCollapse: 'collapse' };
const imageStyles = { maxWidth: '100%', height: 'auto' };

export default MDXComponents;