import React from "react";
import { View, Text } from "react-native";

import { ScaledSheet, scale } from "react-native-size-matters";
import { ArrowLeft, Home } from "react-native-iconly";

import Icon from "../components/Icon";
import { TextStyles, Colors } from "../styles/Styles";


const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
       <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Icon
          icon={<ArrowLeft size={scale(24)} />}
          bg={true}
          onPress={navigation.goBack}
        />

        {/* <Text style={[TextStyles.h3, { textAlign: "center" }]}>FilmFare</Text> */}
      </View>
      <View style={{flex:1,alignItems:"center", justifyContent:"center"}}>
          
      <Text style={TextStyles.h2}>
          ProfileScreen
      </Text>
      </View>
    </View>
  );
};
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    position: "relative",
    paddingVertical: "40@s",
    paddingHorizontal: "24@s",
    backgroundColor: Colors.background,
  },
});

export default Profile;
