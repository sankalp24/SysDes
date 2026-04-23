import React, { useEffect, useState } from 'react';
import './TableOfContents.css';

const TableOfContents = () => {
    const [activeId, setActiveId] = useState('');
    const headings = [];

    const handleScroll = () => {
        const scrollY = window.scrollY;
        headings.forEach((heading) => {
            const element = document.getElementById(heading.id);
            if (element) {
                const { top, height } = element.getBoundingClientRect();
                if (top + height / 2 < window.innerHeight && top + height / 2 > 0) {
                    setActiveId(heading.id);
                }
            }
        });
    };

    useEffect(() => {
        document.querySelectorAll('h2, h3').forEach(heading => {
            headings.push({ id: heading.id, level: heading.tagName });
        });

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="table-of-contents">
            <h2>Table of Contents</h2>
            <ul>
                {headings.map((heading) => (
                    <li key={heading.id} className={activeId === heading.id ? 'active' : ''}>
                        <a href={`#${heading.id}`}>{heading.level === 'H2' ? heading.id : `  ${heading.id}`}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default TableOfContents;