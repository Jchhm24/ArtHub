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
        'pickled-bluewood': {
          '50': '#f5f7fa',
          '100': '#eaeef4',
          '200': '#d1dae6',
          '300': '#a8bbd1',
          '400': '#7a96b6',
          '500': '#59799e',
          '600': '#456084',
          '700': '#394e6b',
          '800': '#32435a',
          '900': '#2f3c4f',
          '950': '#1e2633',
        },

        'blue-bayoux': {
          '50': '#f6f8f9',
          '100': '#ebeff3',
          '200': '#d3dce4',
          '300': '#acbfcd',
          '400': '#7f9db1',
          '500': '#5f8098',
          '600': '#506e86',
          '700': '#3e5466',
          '800': '#364856',
          '900': '#303d4a',
          '950': '#202831',
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
      
        'red-damask': {
          '50': '#fdf6ef',
          '100': '#fae9da',
          '200': '#f3d1b5',
          '300': '#ecb185',
          '400': '#e38854',
          '500': '#de703b',
          '600': '#ce5328',
          '700': '#ab4023',
          '800': '#893423',
          '900': '#6f2d1f',
          '950': '#3b140f',
        },
        
        'white': {
          '50': '#ffffff',
          '100': '#efefef',
          '200': '#dcdcdc',
          '300': '#bdbdbd',
          '400': '#989898',
          '500': '#7c7c7c',
          '600': '#656565',
          '700': '#525252',
          '800': '#464646',
          '900': '#3d3d3d',
          '950': '#292929',
        },      
      },

      backgroundImage:{
        'Clasico':"url('../img/slider/Clasico.png')",
        'Fantasia': "url('../img/slider/Fantasia.png')",
        'Cartoon': "url('../img/slider/Cartoon.png')",
        'Paisajes': "url('../img/slider/Paisajes.png')",
        'Fan-Art': "url('../img/slider/FanArt.png')",
        'Ciencia-Ficcion': "url('../img/slider/CienciaFiccion.png')",
      },

      minWidth: {
        '31': '31%',  // Añade un ancho mínimo del 35%
      },
    },
  },
  plugins:[]
}

