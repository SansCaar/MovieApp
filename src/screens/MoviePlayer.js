import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

export default function MoviePlayer({type,movie}) {

  const movieUrl = `https://www.2embed.ru/embed/tmdb/${type}?id=${movie.id}`
  return (
    <>
      <WebView
        javaScriptEnabled={true}
        scrollEnabled={false}
        allowsFullscreenVideo={true}
        userAgent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 
 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36"
        source={{ uri:movieUrl}}
        setBuiltInZoomControls={false}
      />
    <StatusBar style="light" animated={true} />
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
