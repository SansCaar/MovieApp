import React, { useContext } from "react";
import { View, Text, ScrollView, Image } from "react-native";

import Icon from "../components/Icon";
import { Colors, TextStyles } from "../styles/Styles";
import AppContext from "../context/AppContext";

import { User } from "react-native-iconly";
import { ScaledSheet, scale } from "react-native-size-matters";
import { StatusBar } from "expo-status-bar";
import Constants from 'expo-constants';

const HomeScreen = ({ navigation }) => {
  const { user, setUser } = useContext(AppContext);

  return (
    <>

    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={TextStyles.h2}>Hello{user?"\n"+user.name.split(' ')[0]:null}!</Text>
        <Icon
        style={{marginLeft:'auto'}}
          icon={
            user ? (
              <Image
                source={{ uri: user.photoUrl }}
                style={{
                  height: scale(50),
                  width: scale(50),
                  borderRadius: scale(50),
                }}
              />
            ) : (
              <User size={scale(24)} />
            )
          }
          onPress={() => user?navigation.navigate('Profile'):navigation.navigate("Login")}
        />
      </View>
    
    </ScrollView>
    <StatusBar style="light" animated={true} />
    </>
  );
};
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    position: "relative",
    paddingTop: `${40+Constants.statusBarHeight}@s`,
    paddingHorizontal: "24@s",
    backgroundColor: Colors.background,
  },
  header: {
    flex:1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default HomeScreen;
