import React, { useEffect, useContext, useState } from "react";
import { View, Text, ScrollView, Image, Pressable } from "react-native";

import Icon from "../components/Icon";
import { Colors, TextStyles } from "../styles/Styles";
import AppContext from "../context/AppContext";

import { Heart2, Star, User } from "react-native-iconly";
import { ScaledSheet, scale, moderateScale } from "react-native-size-matters";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { genres, getDiscover, getTrending, POSTER_URL } from "../context/utils";
import AppLoading from "expo-app-loading";

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
const BigMovieCard = ({ movie, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        flexDirection: "row",
        borderRadius: scale(24),
        backgroundColor: Colors.grey,
        paddingRight: 24,
        marginBottom: scale(16),
      }}
    >
      <View>
        <Image
          source={{ uri: `${POSTER_URL}/${movie.poster_path}` }}
          style={{
            // flex: 1,
            width: scale(120),
            height: scale(150),
            resizeMode: "cover",
          }}
          borderBottomLeftRadius={scale(24)}
          borderTopLeftRadius={scale(24)}
        />
      </View>
      <View
        style={{
          flex: 1,
          paddingHorizontal: scale(8),
          paddingVertical: scale(16),
        }}
      >
        <View>
          <Text style={TextStyles.h4} numberOfLines={1}>
            {movie.title}
          </Text>
          <Text style={TextStyles.p2} numberOfLines={1}>
            {genres.map((genre) => {
              if (movie.genre_ids.includes(genre.id)) return `${genre.name}, `;
            })}
          </Text>
          <Text
            style={{ ...TextStyles.p2, color: Colors.white60, marginTop: 8 }}
            numberOfLines={2}
          >
            {movie.overview}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: "auto",
          }}
        >
          <Star
            set="outline"
            size={20}
            primaryColor={Colors.yellow}
            stroke="bold"
          />
          <Text style={{ ...TextStyles.p, color: Colors.yellow }}>
            {" "}
            {`${movie.vote_average}(${movie.vote_count})`}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};
const HomeScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [trending, setTrending] = useState([]);
  const [activeGenre, setActiveGenre] = useState(genres[0].id);
  const [genreWiseMovies, setGenreWiseMovies] = useState([]);
  const { user } = useContext(AppContext);
  useEffect(async () => {
    setLoading(true);
    setTrending(await getTrending());
    setGenreWiseMovies(await getDiscover(activeGenre));
    setLoading(false);
  }, []);

  return loading ? (
    <AppLoading />
  ) : (
    <>
      <ScrollView style={styles.container}>
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
          style={{ marginTop: scale(12) }}
        >
          {genres.map((genre) => (
            <Pressable
              style={{
                backgroundColor: genre.id === activeGenre? Colors.white:Colors.grey ,
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
                  color:genre.id === activeGenre? Colors.background:Colors.white ,
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
            {genreWiseMovies.map((movie) => (
              <BigMovieCard
                key={movie.id}
                movie={movie}
                onPress={() => navigation.navigate("Movie", { movie })}
               />
            ))}
          </ScrollView>
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
