import React from "react";
import { View, Text, Image } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { TextStyles } from "../styles/Styles";

const Cast = ({ name, character, profile_path }) => {
  return (
    <View style={styles.castContainer}>
      <Image source={{ uri: profile_path }} style={styles.image} />
      <View>
        <Text style={TextStyles.h4}>{name}</Text>
        <Text style={TextStyles.p}>{character}</Text>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  castContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginRight: "24@s",
  },
  image: {
    height: "45@s",
    width: "45@s",
    borderRadius: "45@s",
    marginRight: "15@s",
  },
});
export default Cast;
