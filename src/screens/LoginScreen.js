import React, {useContext} from "react";
import { View, Text, SafeAreaView, Image } from "react-native";

import { ScaledSheet, scale } from "react-native-size-matters";
import Button from "../components/Button";
import Icon from "../components/Icon";
import { Colors, TextStyles } from "../styles/Styles";

import * as Facebook from "expo-facebook";
import * as Google from "expo-google-app-auth";
import { ArrowLeft, Home } from "react-native-iconly";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppContext from "../context/AppContext";


const LoginScreen = ({ navigation }) => {
  const {setUser} = useContext(AppContext)
  async function signInWithFacebookAsync() {
    try {
      await Facebook.initializeAsync({
        appId: "382825690428119",
      });
      const { type, token, expirationDate, permissions, declinedPermissions } =
        await Facebook.logInWithReadPermissionsAsync({
          permissions: ["public_profile", "email"],
        });
      if (type === "success") {
        let response = await fetch(
          `https://graph.facebook.com/v13.0/me?fields=id,name,email,picture.height(500)&access_token=${token}`
        );
        let json = await response.json();
        let data = {id:json.id,email:json.email, name:json.name,photoUrl: json.picture.data.url}
        await AsyncStorage.setItem("user", JSON.stringify(data));
        setUser(data)
        console.log(data);
        navigation.navigate("Home");
      }
    } catch (e) {
      console.log(e);
    }
  }
  async function signInWithGoogleAsync() {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "166261557275-bmln0g43sjkknv5i0f03es9v0g8ajhqa.apps.googleusercontent.com",
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        AsyncStorage.setItem("user", JSON.stringify(result.user));
        setUser(result.user)
        navigation.navigate("Home");
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      alert(e);
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Icon
          icon={<ArrowLeft size={scale(24)} />}
          bg={true}
          onPress={navigation.goBack}
        />

        {/* <Text style={[TextStyles.h3, { textAlign: "center" }]}>FilmFare</Text> */}
      </View>
      <View style={styles.bottom}>
        <View
          style={{
            flex: 1,
            zIndex: 10,
            marginVertical: scale(32),
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{
              width: "100%",
              borderRadius: scale(100),
              height: scale(200),
            }}
            source={{
              uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            }}
            resizeMode="cover"
          />
        </View>
        <Text style={TextStyles.h2}>
          One video {"\n"}streaming for daily{"\n"}life entertainment
        </Text>
        <Text style={[TextStyles.p, { marginTop: 16 }]}>
          One video player to play all kind{"\n"}of videos online.
        </Text>
        <View style={styles.buttonContainer}>
          <Button title="Login" style={{ flex: 1 }} />
          <View style={{ flexDirection: "row", marginLeft: scale(24) }}>
            <Icon
              onPress={signInWithGoogleAsync}
              icon={
                <Image
                  source={require("../../assets/Google.png")}
                  style={{ height: scale(24), width: scale(24) }}
                />
              }
            />
            <Icon
              onPress={signInWithFacebookAsync}
              style={{ marginLeft: scale(12) }}
              icon={
                <Image
                  source={require("../../assets/Facebook.png")}
                  style={{ height: scale(24), width: scale(24) }}
                />
              }
            />
          </View>
        </View>
        {/* <Text style={{...TextStyles.p,textAlign:"center", marginTop:scale(8)}}>Skip</Text> */}
      </View>
    </SafeAreaView>
  );
};
const styles = ScaledSheet.create({
  backIcon: {
    position: "absolute",
    marginTop: "50@s",
    marginHorizontal: 24,
  },
  container: {
    flex: 1,
    position: "relative",
    paddingVertical: "40@s",
    paddingHorizontal: "24@s",
    backgroundColor: Colors.background,
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    position: "relative",
    bottom: 0,
  },
  buttonContainer: {
    marginTop: "40@s",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
});
export default LoginScreen;
