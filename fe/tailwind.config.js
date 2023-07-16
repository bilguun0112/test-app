/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      'fold': '280px',
      'half': { 'min': '640px', 'max': '661px' },
      'tablets': { 'min': '768px', 'max': '836px' }
    },
    gridTemplateColumns: {
      sidebar: "250px auto", //for sidebar layout
      "sidebar-collapsed": "64px auto", //for sidebar layout
    },
  },
  plugins: [],
}
