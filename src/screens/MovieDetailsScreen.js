import React,{useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  StatusBar,
  ActivityIndicator
} from "react-native";
import { ArrowLeft, Heart, Heart2, Star } from "react-native-iconly";
import { ScaledSheet, scale } from "react-native-size-matters";
import Button from "../components/Button";
import Cast from "../components/Cast";
import Icon from "../components/Icon";
import { genres, getCast, POSTER_URL, PROFILE_URL } from "../context/utils";
import { Colors, TextStyles } from "../styles/Styles";

const sWidth = Dimensions.get("window").width;


const Genre = ({ name }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={styles.genre}>
        <Text style={TextStyles.p2}>{name}</Text>
      </View>
    </View>
  );
};

const MovieDetailsScreen = ({ route, navigation }) => {
  const { movie } = route.params;
  const [casts, setCasts] = useState([]);

  React.useEffect( async()=>{
    setCasts(await getCast(movie.id))
    console.log(casts)
  },[])
  return (
    <>
      <Image
        source={{ uri: `${POSTER_URL}/${movie.poster_path}` }}
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
              <Text style={TextStyles.h3}>{movie.title}</Text>
              <View style={styles.movieData}>
                <Star
                  set="outline"
                  size={24}
                  primaryColor={Colors.yellow}
                  stroke="bold"
                />
                <Text style={{ ...TextStyles.p, color: Colors.yellow }}>
                  {" "}
                  {`${movie.vote_average}(${movie.vote_count})`}
                </Text>
              </View>
            </View>
            <Icon icon={<Heart2 size={scale(24)} />} />
          </View>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {genres.map((genre) => {
          if (movie.genre_ids.includes(genre.id)) return <Genre name={genre.name} key={genre.id}/>;
        })}
          </View>
          <View style={styles.container}>
            <Text style={TextStyles.h4}>Story Line</Text>
            <Text style={{ ...TextStyles.p, marginTop: scale(16) }}>
              {movie.overview}
            </Text>
          </View>
          <View style={[styles.container, { marginBottom: scale(84) }]}>
            <Text style={TextStyles.h4}>Cast</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{ marginTop: scale(16) }}
            >
              {casts != [] && casts.map((cast) => {
                return (
                  <Cast
                    key={cast.cast_id}
                    name={cast.name}
                    character={cast.character}
                    profile_path={PROFILE_URL + cast.profile_path}
                  />
                );
              })}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      <Button
        title="Watch Movie"
        style={styles.playButton}
        onPress={() => navigation.navigate("MoviePlayer", {movie_id:movie.id})}
      />

      <Icon
        style={styles.backIcon}
        bg={true}
        icon={<ArrowLeft size={scale(24)} />}
        onPress={navigation.goBack}
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
    marginBottom:'8@s',
    borderWidth: 1,
    borderColor: Colors.white60,
    borderRadius: "32@s",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    marginTop: "40@s",
  },
  playButton: {
    position: "absolute",
    left: "24@s",
    right: "24@s",
    bottom: "20@s",
  },
});

export default MovieDetailsScreen;
