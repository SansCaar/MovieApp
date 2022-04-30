import React from "react";
import { Pressable } from "react-native";
import { IconlyProvider } from "react-native-iconly";
import { ScaledSheet, scale } from "react-native-size-matters";
import { Colors } from "../styles/Styles";

const Icon = ({ onPress, bg, icon, style }) => {
  return (
    <IconlyProvider
      set="outline"
      primaryColor="white"
      stroke='regular'
      size={scale(24)}
    >
      <Pressable
        onPress={onPress}
        style={
          bg
            ? [styles.icon, { backgroundColor: "#0000004D", ...style }]
            : [styles.icon, {borderWidth: 1, borderColor: Colors.white60, ...style }]
        }
      >
        {icon}
      </Pressable>
    </IconlyProvider>
  );
};

const styles = ScaledSheet.create({
  icon: {
    height: '50@s',
    width: '50@s',
    borderRadius: '50@s',
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Icon;
