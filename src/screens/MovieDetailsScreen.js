import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  StatusBar,
} from "react-native";
import { ArrowLeft, Heart, Heart2, Star } from "react-native-iconly";
import { ScaledSheet, scale } from "react-native-size-matters";
import Button from "../components/Button";
import Cast from "../components/Cast";
import Icon from "../components/Icon";
import { Colors, TextStyles } from "../styles/Styles";

const sWidth = Dimensions.get("window").width;

let genres = ["Comedy", "Action", "Thriller"];
let casts = [
  {
    name: "Sanskar",
    character: "Moon Knight",
    profile_path:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    name: "dfasdfad",
    character: "Harold",
    profile_path:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    name: "Sadfasdfasfnskar",
    character: "Khai ko ho",
    profile_path:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    name: "dfasdfadsfasf",
    character: "Tyo mareko chai",
    profile_path:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
];
const Genre = ({ name }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={styles.genre}>
        <Text style={TextStyles.p2}>{name}</Text>
      </View>
    </View>
  );
};

const MovieDetailsScreen = ({}) => {
  return (
    <>
      <Image
        source={require("../../assets/backdrop.jpg")}
        style={{
          height: sWidth * 1.5,
          width: sWidth,
          position: "absolute",
          ...StyleSheet.absoluteFill,
          alignItems: "center",
          justifyContent: "center",
        }}
        resizeMode="cover"
      />
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.movieContainer}>
          <View style={styles.movieDataContainer}>
            <View>
              <Text style={TextStyles.h3}>Moon Knight</Text>
              <View style={styles.movieData}>
                <Text style={{ ...TextStyles.p, marginRight: scale(16) }}>
                  Marvel Studios
                </Text>
                <Star
                  set="outline"
                  size={24}
                  primaryColor={Colors.yellow}
                  stroke="bold"
                />
                <Text style={{ ...TextStyles.p, color: Colors.yellow }}>
                  {" "}
                  4.5(897)
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                {genres.map((genre, i) => (
                  <Genre key={i} name={genre} />
                ))}
              </View>
            </View>
            <Icon icon={<Heart2 size={scale(24)} />} />
          </View>
          <View style={styles.container}>
            <Text style={TextStyles.h4}>Story Line</Text>
            <Text style={{ ...TextStyles.p, marginTop: scale(16) }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </Text>
          </View>
          <View style={[styles.container,{marginBottom:scale(104)}]}>
            <Text style={TextStyles.h4}>Cast</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginTop: scale(16) }}>
              {casts.map((cast) => {
                return <Cast
                  name={cast.name}
                  character={cast.character}
                  profile_path={cast.profile_path}
                />;
              })}
            </ScrollView>
          </View>
        </View>

      </ScrollView>
      <Button title="Hello" style={styles.playButton}/>

      <Icon
        style={styles.backIcon}
        bg={true}
        icon={<ArrowLeft size={scale(24)} />}
      />
      <StatusBar />
    </>
  );
};
const styles = ScaledSheet.create({
  backIcon: {
    position: "absolute",
    marginTop: "50@s",
    marginHorizontal: 24,
  },
  heartIcon: {
    alignSelf: "flex-end",
  },
  movieContainer: {
    flex: 1,
    position: "relative",
    paddingVertical: "40@s",
    paddingHorizontal: "24@s",
    borderTopLeftRadius: "32@s",
    borderTopRightRadius: "32@s",
    backgroundColor: Colors.background,
    minHeight: sWidth * 1.5,
    marginTop: sWidth,
  },
  movieDataContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  movieData: {
    flexDirection: "row",
    marginVertical: "16@s",
    alignItems: "center",
  },
  genre: {
    paddingVertical: "4@s",
    paddingHorizontal: "12@s",
    marginRight: "8@s",
    borderWidth: 1,
    borderColor: Colors.white60,
    borderRadius: "32@s",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    marginTop: "40@s",
  },
  playButton:{
    position:'absolute',
    left:24,
    right:24,
    bottom:40
  }
});

export default MovieDetailsScreen;
