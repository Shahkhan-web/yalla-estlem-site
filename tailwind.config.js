module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
   
    extend: {
      screens: {
        'mini-2': {'max': '630px'},
        'mini': {'max': '1165px'},
        'mini_x': {'min': '1030px'},
      },
      colors: {
        "primary": 'rgb(185 28 28)',
        "secondary": 'rgb(163 163 163)'
         },
       },
  },
  daisyui: {
    styled: true,
    themes: false,
    rtl: false,
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),    
  ],
}
