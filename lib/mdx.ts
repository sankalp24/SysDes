// MDX Compilation and Frontmatter Parsing Utilities

import { useEffect } from 'react';
import { compile } from '@mdx-js/mdx';
import matter from 'gray-matter';

// Function to compile MDX content
export const compileMDX = async (mdxContent) => {
    const compiledMDX = await compile(mdxContent);
    return compiledMDX;
};

// Function to parse frontmatter
export const parseFrontmatter = (content) => {
    const { data, content: mdxContent } = matter(content);
    return { frontmatter: data, content: mdxContent };
};

// Example usage:
// const { frontmatter, content } = parseFrontmatter(myMDXFile);
// const compiledContent = await compileMDX(content);