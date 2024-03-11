import React, { useContext } from "react";
import { View, Pressable, Text, Image, Linking } from "react-native";

import { ScaledSheet, scale, moderateScale } from "react-native-size-matters";
// import {
//   ArrowLeft,
//   ChevronRight,
//   Document,
//   Heart2,
//   Logout,
//   Show,
// } from "react-native-iconly";

import AppContext from "../context/AppContext";

import Icon from "../components/Icon";
import { TextStyles, Colors } from "../styles/Styles";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";

const Profile = ({ navigation }) => {
  const { user, logout, favourite } = useContext(AppContext);
  // user ? navigation.navigate("Profile") : navigation.navigate("Login");
  return (
    <>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon icon={<></>} bg={true} onPress={navigation.goBack} />
        </View>
        <View style={{ alignItems: "center", marginTop: scale(40) }}>
          <Image
            source={{ uri: user.photoUrl }}
            style={{
              height: scale(120),
              width: scale(120),
              borderRadius: scale(200),
            }}
          />
          <Text style={TextStyles.h3}>{user.name}</Text>
          <Text style={TextStyles.p}>{user.email}</Text>
        </View>
        <View style={styles.settingsContainer}>
          <Pressable
            style={styles.settingsOption}
            onPress={() => navigation.navigate("Favourite")}
          >
            <Icon icon={<></>} bg="#F13FBF" />
            <Text style={styles.settingsTitle}>Favourite Movies</Text>
            <Text
              style={{
                ...TextStyles.p,
                fontSize: moderateScale(20, 0.4),
                marginLeft: "auto",
              }}
            >
              {favourite.length}
            </Text>
          </Pressable>

          {/* <Pressable style={styles.settingsOption}>
            <Icon icon={<Show set="bold" size={scale(24)} />} bg="#3FF171" />
            <Text style={styles.settingsTitle}>Watch History</Text>
            <Text
              style={{
                ...TextStyles.p,
                fontSize: moderateScale(20, 0.4),
                marginLeft: "auto",
              }}
            >
              0
            </Text>
          </Pressable> */}

          <Pressable
            style={styles.settingsOption}
            onPress={async () =>
              await Linking.openURL(
                "https://www.freeprivacypolicy.com/live/1c87c83b-02dc-40a0-beb3-d6879e178dcd"
              )
            }
          >
            {/* <Icon
              icon={<Document set="bold" size={scale(24)} />}
              bg="#F14A3F"
            /> */}
            <Text style={styles.settingsTitle}>Terms And Conditions</Text>
            {/* <Text style={{...TextStyles.p, fontSize:moderateScale(20, 0.4), marginLeft:'auto'}}>0</Text> */}
          </Pressable>

          <Pressable
            style={styles.settingsOption}
            onPress={() => {
              logout();
              navigation.navigate("Home");
            }}
          >
            {/* <Icon icon={<Logout set="bold" size={scale(24)} />} bg="#733FF1" /> */}
            <Text style={styles.settingsTitle}>Logout</Text>
            {/* <ChevronRight
              style={{ marginLeft: "auto" }}
              set="outline"
              size={scale(24)}
              color="white"
            /> */}
          </Pressable>
        </View>
      </View>
    </>
  );
};
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    position: "relative",
    paddingTop: `${40 + Constants.statusBarHeight}@s`,
    paddingHorizontal: "24@s",
    backgroundColor: Colors.background,
  },
  settingsContainer: {
    marginTop: "40@s",
  },
  settingsOption: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "24@s",
  },
  settingsTitle: {
    fontSize: "20@ms0.4",
    fontFamily: "Typold",
    color: "white",
    marginLeft: "24@s",
  },
});

export default Profile;
