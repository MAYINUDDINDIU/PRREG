/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js',
      'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  plugins: [
    require('tw-elements/dist/plugin'),
     require('flowbite/plugin')
  ]

}
