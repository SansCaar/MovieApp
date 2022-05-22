import React, { useContext } from "react";
import { View, Text, ScrollView, Image, Pressable } from "react-native";

import Icon from "../components/Icon";
import { Colors, TextStyles } from "../styles/Styles";
import AppContext from "../context/AppContext";

import { User } from "react-native-iconly";
import { ScaledSheet, scale, moderateScale } from "react-native-size-matters";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";

const HomeScreen = ({ navigation }) => {
  const { user, setUser } = useContext(AppContext);
  const trending = [1, 2, 3, 4];
  const genres = ["Action", "Comedy", "Romance", "Drama", "Thriller"];
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={TextStyles.h2}>
            Hello{user ? " " + user.name.split(" ")[0] : null}!
          </Text>
          <Icon
            style={{ marginLeft: "auto" }}
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
            onPress={() =>
              user
                ? navigation.navigate("Profile")
                : navigation.navigate("Login")
            }
          />
        </View>
        <Text style={[TextStyles.h3, { marginTop: scale(40) }]}>
          Trending Movies
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: scale(24) }}
        >
          {trending.map((cast, i) => {
            return (
              <Pressable onPress={() => navigation.navigate("Movie")} key={i}>
                <Image
                  source={require("../../assets/backdrop.jpg")}
                  style={{
                    marginRight: scale(24),
                    width: scale(142),
                    height: scale(213),
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  borderRadius={scale(24)}
                  resizeMode="cover"
                />
                <Text
                  style={{
                    fontSize: moderateScale(12, 0.3),
                    color: Colors.white,
                    marginTop: scale(10),
                  }}
                >
                  Spiderman
                </Text>
                <Text
                  style={{
                    fontSize: moderateScale(12, 0.3),
                    color: Colors.white60,
                  }}
                >
                  Action, Sci-fi, Drama
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
        <Text style={[TextStyles.h3, { marginTop: scale(40) }]}>
          Categories
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: scale(12) }}
        >
          {genres.map((genre, i) => (
            <Pressable
              style={{
                backgroundColor: Colors.grey,
                paddingHorizontal: scale(24),
                paddingVertical: scale(8),
                borderRadius: scale(16),
                marginRight:scale(8)
              }}
              key={i}
            >
              <Text
                style={{
                  fontSize: moderateScale(12, 0.3),
                  color: Colors.white,
                }}
              >
                {genre}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </ScrollView>
      <StatusBar style="light" animated={true} />
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
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default HomeScreen;
