import React, { useContext } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { ScaledSheet, scale } from "react-native-size-matters";
import Icon from "../components/Icon";
import { Login, User } from "react-native-iconly";
import { Colors, TextStyles } from "../styles/Styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppContext from "../context/AppContext";
import Button from "../components/Button";

const HomeScreen = ({ navigation }) => {
  const { user, setUser } = useContext(AppContext);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={TextStyles.h2}>Hello{user?"\n"+user.name.split(' ')[0]:null}!</Text>
        <Icon
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
    
      <Button
        onPress={async () => {
          await AsyncStorage.removeItem("user");
          setUser(null);
          const data = await AsyncStorage.getItem("user");
          console.log(data);
        }}
        title="Logout"
      />
    </ScrollView>
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default HomeScreen;
