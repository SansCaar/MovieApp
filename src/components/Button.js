import React from "react";
import { Text, Pressable} from "react-native";

import { scale } from "react-native-size-matters";
import { Colors, TextStyles } from "../styles/Styles";

const Button = ({ title, style , onPress}) => {
  return (
    <Pressable
    onPress={onPress}
      style={{
        padding: 32,
        backgroundColor:Colors.primary,
        borderRadius:scale(32),
        ...style
      }}
    >
      <Text style={{...TextStyles.buttonText, textAlign:"center"}}>{title}</Text>
    </Pressable>
  );
};
export default Button