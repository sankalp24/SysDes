// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Example primary color
        secondary: '#9333EA', // Example secondary color
        accent: '#FBBF24', // Example accent color
        neutral: '#F3F4F6', // Example neutral color
        'base-100': '#FFFFFF', // Example base background color
        'base-200': '#E5E7EB', // Example base card color
        'base-300': '#D1D5DB', // Example base border color
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#1F2937', // Default text color
            a: {
              color: '#1D4ED8',
              '&:hover': {
                color: '#1E40AF',
              },
            },
            h1: {
              fontSize: '2.25rem', // H1 Font Size
              fontWeight: '700', // H1 Font Weight
            },
            // Add more typography settings as needed
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;