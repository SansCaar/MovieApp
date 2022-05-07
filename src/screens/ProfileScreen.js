import React, {useContext} from "react";
import { View, Text, Image } from "react-native";

import { ScaledSheet, scale } from "react-native-size-matters";
import { ArrowLeft,  } from "react-native-iconly";

import AppContext from "../context/AppContext";

import Icon from "../components/Icon";
import { TextStyles, Colors } from "../styles/Styles";


const Profile = ({ navigation }) => {
  const {user} = useContext(AppContext);
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
      <View style={{flex:1, alignItems:"center"}}>
        <Image source={{uri: user.photoUrl}} style={{height:scale(120), width:scale(120), borderRadius:scale(200)}} />
      <Text style={TextStyles.h3}>
          {user.name}
      </Text>
      <Text style={TextStyles.p}>
          {user.email}
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
