import React, { useContext } from "react";
import { View, Text, ScrollView } from "react-native";
import { scale } from "react-native-size-matters";
import BigMovieCard from "../components/BigMovieCard";
import AppContext from "../context/AppContext";
import Constants from "expo-constants";
import { Colors, TextStyles } from "../styles/Styles";
import Icon from "../components/Icon";
// import { ArrowLeft } from "react-native-iconly";

const FavouriteScreen = ({ navigation }) => {
  const { favourite } = useContext(AppContext);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        position: "relative",
        paddingTop: 40 + Constants.statusBarHeight,
        paddingHorizontal: 24,
        backgroundColor: Colors.background,
      }}
    >
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 40 }}
      >
        <Icon icon={<></>} bg={true} onPress={navigation.goBack} />
        <Text style={{ ...TextStyles.h3, marginLeft: 24 }}>Favourites</Text>
      </View>
      <View style={{ marginBottom: scale(70) }}>
        {favourite.map((movie) => (
          <BigMovieCard
            key={movie.id}
            movie={movie}
            onPress={() => navigation.navigate("Movie", { movie })}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default FavouriteScreen;
