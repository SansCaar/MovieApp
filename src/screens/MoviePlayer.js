import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";
import Constants from "expo-constants";
import { Colors } from "../styles/Styles";

export default function MoviePlayer({ route }) {
  const { movie_id } = route.params;
  const movieUrl = `https://multiembed.mov/?video_id=${movie_id}&tmdb=1`;
  return (
    <WebView
      style={{
        marginTop: Constants.statusBarHeight,
        backgroundColor: Colors.background,
      }}
      javaScriptEnabled={true}
      scrollEnabled={false}
      allowsFullscreenVideo={true}
      source={{ uri: movieUrl }}
      // setBuiltInZoomControls={false}
    />
  );
}
