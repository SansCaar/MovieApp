import React from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import { Heart2 } from "react-native-iconly";
import { ScaledSheet, scale } from "react-native-size-matters";
import Button from "../components/Button";
import Icon from "../components/Icon";
import { Colors, TextStyles } from "../styles/Styles";

const LoginScreen = ({}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[TextStyles.h3, { textAlign: "center" }]}>FilmFare</Text>
      <View
        style={{
          flex: 1,
          zIndex: 10,
          marginVertical: 32,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{
            width: "100%",
            borderRadius: 200,
            height: 400,
          }}
          source={{
            uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          }}
          resizeMode="cover"
        />
      </View>
      <View style={styles.bottom}>
        <Text style={TextStyles.h2}>
          One video {"\n"}streaming for daily{"\n"}life entertainment
        </Text>
        <Text style={[TextStyles.p, { marginTop: 16 }]}>
          One video player to play all kind{"\n"}of videos online.
        </Text>
        <View style={styles.buttonContainer}>
          <Button title="Login" style={{ flex: 1 }} />
          <View style={{ flexDirection: "row", marginLeft: scale(24) }}>
            <Icon icon={<Heart2 size={scale(24)} />} />
            <Icon
              icon={<Heart2 size={scale(24)} />}
              style={{ marginLeft: scale(12) }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
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
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    position: "relative",
    bottom: 0,
  },
  buttonContainer: {
    marginTop: "58@s",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
});
export default LoginScreen;
