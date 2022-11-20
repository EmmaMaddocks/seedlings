import {
    extendTheme
  } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        brand: {
          'lightgreen': '#DAD768',
          'darkgreen': '#6D8A0C',
          'orange': '#ED965C',
          'paleorange': '#FCBD63',
          'lightbrown': '#D4BF88',
          'redorange': '#F36F09'
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
            body: `'Montserrat', sans-serif`,
        },

        textStyles: {
            h1: {
                letterSpacing: '1pt',
                color: '#ED965C',
                textAlign: 'center'
            },
            input: {
              color: '#6D8A0C' 
            },

            h2: {
              fontSize: 'xl',
              color: '#6D8A0C',
              textAlign: 'center',
              font: `'Montserrat', sans-serif`,
              fontWeight: 'bold',

            },
            cardHeader: {
              fontSize: 'lg',
              color: 'white',
              textAlign: 'center',
              font: `'Montserrat', sans-serif`,
              fontWeight: 'bold',

            },
            h3: {
              fontSize: 'lg',
              color: '#6D8A0C',
              textAlign: 'center',
              font: `'Montserrat', sans-serif`,
              fontWeight: 'bold',
              marginLeft: '40px',
              marginRight: '40px'


            },
            h4: {
              fontSize: '7xl',
              color: 'white',
              textAlign: 'center',
              font: `'Montserrat', sans-serif`,
              fontWeight: 'bold',
  

            },
            h5: {
              fontSize: 'lg',
              color: 'white',
              textAlign: 'center',
              font: `'Montserrat', sans-serif`,
              fontWeight: 'bold',
  

            },
            p: {
              fontSize: 'sm',
              textAlign: 'center',
              marginLeft: '50px',
              marginRight: '50px',

              font: `'Montserrat', sans-serif`,
            }
        }
  })


export default theme