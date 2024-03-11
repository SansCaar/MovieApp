import React, { useEffect, useContext, useState, useCallback } from "react";
import { View, Text, ScrollView, Image, Pressable } from "react-native";
import * as SplashScreen from "expo-splash-screen";

import Icon from "../components/Icon";
import { Colors, TextStyles } from "../styles/Styles";
import AppContext from "../context/AppContext";

// import { User } from "react-native-iconly";
import { ScaledSheet, scale, moderateScale } from "react-native-size-matters";
import Constants from "expo-constants";
import { genres, getDiscover, getTrending, POSTER_URL } from "../context/utils";
import BigMovieCard from "../components/BigMovieCard";

const MovieCard = ({ movie, onPress }) => {
  return (
    <Pressable
      style={{
        marginRight: scale(24),
        flex: 1,
        width: scale(142),
      }}
      onPress={onPress}
      key={movie.id}
    >
      <Image
        source={{ uri: `${POSTER_URL}/${movie.poster_path}` }}
        style={{
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
          flex: 1,
          fontSize: moderateScale(12, 0.3),
          color: Colors.white,
          marginTop: scale(10),
        }}
        numberOfLines={1}
      >
        {movie.title}
      </Text>
      <Text
        style={{
          flex: 1,
          fontSize: moderateScale(12, 0.3),
          color: Colors.white60,
        }}
        numberOfLines={1}
      >
        {genres.map((genre) => {
          if (movie.genre_ids.includes(genre.id)) return `${genre.name}, `;
        })}
      </Text>
    </Pressable>
  );
};
const HomeScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [trending, setTrending] = useState([]);
  const [activeGenre, setActiveGenre] = useState(genres[0].id);
  const [genreWiseMovies, setGenreWiseMovies] = useState([]);
  const { user } = useContext(AppContext);
  useEffect(() => {
    const init = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        setLoading(true);
        setTrending(await getTrending());
        setGenreWiseMovies(await getDiscover(activeGenre));
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    init();
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (!loading) {
      await SplashScreen.hideAsync();
    }
  }, [loading]);
  if (loading) return null;
  return (
    <>
      <ScrollView
        style={styles.container}
        stickyHeaderIndices={[4]}
        onLayout={onLayoutRootView}
      >
        <View style={styles.header}>
          <Text style={TextStyles.h2}>
            Hello{user ? " " + user.name.split(" ")[0] : " User"}!
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
                <></>
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
          {trending?.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onPress={() => navigation.navigate("Movie", { movie })}
            />
          ))}
        </ScrollView>
        <Text style={[TextStyles.h3, { marginTop: scale(40) }]}>
          Categories
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            backgroundColor: Colors.background,
            paddingVertical: scale(10),
          }}
        >
          {genres.map((genre) => (
            <Pressable
              style={{
                backgroundColor:
                  genre.id === activeGenre ? Colors.white : Colors.grey,
                paddingHorizontal: scale(24),
                paddingVertical: scale(8),
                borderRadius: scale(16),
                marginRight: scale(8),
              }}
              onPress={async () => {
                setGenreWiseMovies([]);
                setActiveGenre(genre.id);
                setGenreWiseMovies(await getDiscover(genre.id));
              }}
              key={genre.id}
            >
              <Text
                numberOfLines={1}
                style={{
                  flex: 1,
                  fontSize: moderateScale(12, 0.3),
                  color:
                    genre.id === activeGenre ? Colors.background : Colors.white,
                }}
              >
                {genre.name}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
        <View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ marginTop: scale(30), marginBottom: scale(70) }}
          >
            {genreWiseMovies?.map((movie) => (
              <BigMovieCard
                key={movie.id}
                movie={movie}
                onPress={() => navigation.navigate("Movie", { movie })}
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </>
  );
};
const styles = ScaledSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    position: "relative",
    paddingHorizontal: "24@s",
    backgroundColor: Colors.background,
  },
  header: {
    marginTop: "20@s",

    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default HomeScreen;
