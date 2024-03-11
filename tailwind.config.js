/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Red-Hat-Display": ["Red Hat Display", "sans-serif"],
        "Comfortaa": ["Comfortaa", "sans-serif"],
      },

      colors:{

        'vulcan': {
          '50': '#f5f7fa',
          '100': '#eaeef4',
          '200': '#d1dae6',
          '300': '#a9bbd0',
          '400': '#7a96b6',
          '500': '#59789e',
          '600': '#466083',
          '700': '#394e6b',
          '800': '#32435a',
          '900': '#2e3a4c',
          '950': '#181e28', // Color de referencia
        },

        'nile-blue': {
          '50': '#f3f8fc',
          '100': '#e7f0f7',
          '200': '#c9dfee',
          '300': '#9ac5df',
          '400': '#64a7cc',
          '500': '#408cb7',
          '600': '#2f709a',
          '700': '#275a7d',
          '800': '#244c68',
          '900': '#203d52',
          '950': '#172a3a',
        },
      
        'yellow-orange': {
          '50': '#fff8eb',
          '100': '#feeac7',
          '200': '#fdd28a',
          '300': '#fcb040',
          '400': '#fb9a24',
          '500': '#f5760b',
          '600': '#d95306',
          '700': '#b43609',
          '800': '#922a0e',
          '900': '#78230f',
          '950': '#450f03',
        },

        'gold-sand': {
          '50': '#fdf7ef',
          '100': '#fbecd9',
          '200': '#f6d6b2',
          '300': '#f1bd86',
          '400': '#e9944e',
          '500': '#e4782b',
          '600': '#d65f20',
          '700': '#b1481d',
          '800': '#8d3a1f',
          '900': '#72321c',
          '950': '#3d170d',
        },
      },

      backgroundImage:{
        'Clasico':"url('../img/slider/Clasico.png')",
        'Fantasia': "url('../img/slider/Fantasia.png')",
        'Cartoon': "url('../img/slider/Cartoon.png')",
        'Paisajes': "url('../img/slider/Paisajes.png')",
        'Fan-Art': "url('../img/slider/FanArt.png')",
        'Ciencia-Ficcion': "url('../img/slider/CienciaFiccion.png')",
        'Madera': "url('../img/Marcos/Madera.svg')",
        'Metal': "url('../img/Marcos/Metal.svg')",
        'Aluminio': "url('../img/Marcos/Aluminio.svg')",
      },

      minWidth: {
        '31': '31%',  // Añade un ancho mínimo del 35%
      },
    },
  },
  plugins:[]
}

