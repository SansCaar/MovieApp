import React from "react";
import { View, Pressable, Image, Text } from "react-native";
import { genres, POSTER_URL } from "../context/utils";
// import { Star } from "react-native-iconly";
import { scale } from "react-native-size-matters";
import { Colors, TextStyles } from "../styles/Styles";

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
          <Text>Star</Text>
          {/* <Star
            set="outline"
            size={20}
            primaryColor={Colors.yellow}
            stroke="bold"
          /> */}
          <Text style={{ ...TextStyles.p, color: Colors.yellow }}>
            {" "}
            {`${movie.vote_average}(${movie.vote_count})`}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};
export default BigMovieCard;
