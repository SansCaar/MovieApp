import { StyleSheet } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
const Colors  = {
    primary: '#733FF1',
    yellow: '#E6B91E',
    grey:'#202032',
    background: '#121225',
    white:'#FFFFFF',
    white60:'#FFFFFF99',
    white90:'#E6FFFFFF' 
}
const TextStyles = ScaledSheet.create({
    h2:{
      fontFamily: 'Typold-Bold',
      fontSize: '32@ms0.4',
      color:'white'
    },
    h3:{
        fontFamily: 'Typold-Bold',
        fontSize: '24@ms0.4',
        color:'white'
      },
      h4:{
        fontFamily: 'Typold-Medium',
        fontSize: '16@ms0.4',
        color:Colors.white90
      },
      p:{
        fontFamily: 'Typold',
        fontSize: '16@ms0.4',
        color:Colors.white60,
      },
      p2:{
        fontFamily: 'Typold',
        fontSize: '12@ms0.4',
        color:Colors.white,
      
      },
      buttonText:{
          fontFamily:'Typold-Bold',
          fontSize:'16@ms0.4',
          color:'white'
      },
      movieTitle:{
        
      }

})
export {TextStyles, Colors}
