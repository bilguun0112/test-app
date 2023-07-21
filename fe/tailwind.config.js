/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite-react/**/*.ts",
  ],
  theme: {
    extend: {
      'fold': '280px',
      'half': { 'min': '640px', 'max': '661px' },
      'tablets': { 'min': '768px', 'max': '836px' },
      'tm': { 'max': '836px' }
    },
    keyframes: {
      showcontent: {
        from: {
          opacity: 0,
          transform: 'translate(0, 100px)',
          filter: 'blur(33px)',
        },
        to: {
          opacity: 1,
          transform: 'translate(0, 0)',
          filter: 'blur(0)',
        },
      },
    },
    animation: {
      'showcontentName': 'showcontent 1s ease-out 1 forwards', // You can adjust the duration and easing here
      'showcontentDes': 'showcontent 1s ease-out 0.3s 1 forwards', // You can adjust the duration and easing here
    },
    gridTemplateColumns: {
      sidebar: "250px auto", //for sidebar layout
      "sidebar-collapsed": "64px auto", //for sidebar layout
    },
  },
  plugins: [
  ],
}


