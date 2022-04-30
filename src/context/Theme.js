import {createTheme, createBox, createText} from '@shopify/restyle';


const theme = createTheme({
  colors: {
    primary: '#733FF1',
    yellow: '#E6B9E1',
    grey:'#202032',
    background: '#121225',
    white:'#FFFFFF',
    white60:'#99FFFFFF',
    white90:'#E6FFFFFF' 

},
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
    xxl:50,
  },
  textVariants:{
      h3:{
        fontFamily: 'Typold-Bold',
        fontSize: 24,
        color:'white'
      },
      h4:{
        
      },
      p:{
        fontFamily: 'Typold',
        fontSize: 16,
        lineHeight:'140%',
        color:'white60',
      },
      buttonText:{
          fontFamily:'Typold-Bold',
          fontSize:16,
          color:'white'
      }
  }
});

const Box = createBox();
const Text = createText();

export {Box, Text};
export default theme;