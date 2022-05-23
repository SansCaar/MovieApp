import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";
import Constants from "expo-constants";

export default function MoviePlayer({ route}) {
  const {movie_id} = route.params
  const movieUrl = `https://www.2embed.ru/embed/tmdb/movie?id=${movie_id}`
  return (
    <>
      <WebView
        style={{ marginTop: Constants.statusBarHeight }}
        javaScriptEnabled={true}
        scrollEnabled={false}
        allowsFullscreenVideo={true}
        source={{ uri: movieUrl }}
        // setBuiltInZoomControls={false}
      />
      <StatusBar style="dark" animated={true} hidden={true} />
    </>
  );
}

