/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", 'sans-serif'],
        poppins: ["Poppins", 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        helvetica: ['Helvetica Neue','sans-serif' ]
      },
      colors: {
        "esc-dark-primary-100": "#E7E4F0",   
        "esc-dark-primary-300": "#A69DC7",
        "esc-dark-primary-700": "#1D192B",
        "esc-dark-secondary-100": "#ADA4C0",
        "esc-dark-secondary-300": "#6F628C",
        "esc-dark-secondary-700": "#332D41",
        "esc-dark-button-100": "#E3B7EF",
        "esc-dark-button-300": "#C462DD",
        "esc-dark-button-700": "#6F1D85",
        "esc-dark-mascot-100": "#FDEEE3",
        "esc-dark-mascot-300": "#ED7D31",
        "esc-dark-mascot-700": "#C15811",
      },
      backgroundColor: {
        'esc-light-main': 'bg-gray-200'
      },
      keyframes: {
        rotateImage: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        rotateZ: {
          '0%': { transform: 'rotateZ(0deg)' },
          '100%': { transform: 'rotateZ(360deg)' }
        },
        rotateY: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' }
        },
        rotateX: {
          '0%': { transform: 'rotateX(0deg)' },
          '100%': { transform: 'rotateX(360deg)' }
        },
        circularRotate: {
          '0%': { transform: 'rotate(0deg) translateX(150px) rotate(0deg)' },
          '25%': { transform: 'rotate(90deg) translateX(150px) rotate(-90deg)' },
          '50%': { transform: 'rotate(180deg) translateX(150px) rotate(-180deg)' },
          '75%': { transform: 'rotate(270deg) translateX(150px) rotate(-270deg)' },
          '100%': { transform: 'rotate(360deg) translateX(150px) rotate(-360deg)' }
        },
        mixedRotate: {
          '0%': { transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)' },
          '100%': { transform: 'rotateX(360deg) rotateY(360deg) rotateZ(360deg)' }
        },
        customAxisRotate: {
          '0%': { transform: 'rotate3d(1, 1, 1, 0deg)' },
          '100%': { transform: 'rotate3d(1, 1, 1, 360deg)' }
        },
      },
      animation: {
        rotate: 'rotateImage 60s linear infinite',
        rotateZ: 'rotateZ 60s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite',
        rotateY: 'rotateY 60s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite',
        rotateX: 'rotateX 60s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite',
        rotateX1: 'rotateX 60s linear infinite',
        rotateY1: 'rotateY 60s linear infinite',
        rotateZ1: 'rotateZ 60s linear infinite',
        combinedRotate: 'rotateZ 60s cubic-bezier(0.68, -0.55, 0.27, 1.55) 1000, rotateY 60s cubic-bezier(0.68, -0.55, 0.27, 1.55) 1000, rotateX 60s cubic-bezier(0.68, -0.55, 0.27, 1.55) 1000',
        circular: 'circularRotate 60s linear infinite',
        mixed: 'mixedRotate 60s linear infinite',
        customAxis: 'customAxisRotate 60s linear infinite',
      },
    },
  },
  plugins: [],
}

