import {
    extendTheme
  } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        brand: {
          1: '#DAD768',
          2: '#6D8A0C',
          3: '#FA9327',
          4: '#FCBD63',
          5: '#D4BF88',
          6: '#F36F09'
        }
      },

        sizes: {
          max: 'max-content',
          min: 'min-content',
          full: '100%',
          '3xs': '14rem',
          '2xs': '16rem',
          xs: '20rem',
          sm: '24rem',
          md: '28rem',
          lg: '32rem',
          xl: '36rem',
          '2xl': '42rem',
          '3xl': '48rem',
          '4xl': '56rem',
          '5xl': '64rem',
          '6xl': '72rem',
          '7xl': '80rem',
          '8xl': '90rem',
          container: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
          },
        },
      
        fonts: {
            heading: `'Love Ya Like A Sister', cursive`,
            body: `'Montserrat', sans-serif`
        },

        textStyles: {
            h1: {
                letterSpacing: '5pt'
            }
        }
      

  })


export default theme