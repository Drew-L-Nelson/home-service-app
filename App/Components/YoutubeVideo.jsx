
import React from 'react';
import { WebView } from 'react-native-webview';
import YoutubePlayer from 'react-native-youtube-iframe';
import { View, StyleSheet } from 'react-native';

export default function YouTubeVideo ({ videoId }) {
  return (
    // <WebView
    //   style={{ height: 200, margin: 8, borderRadius: 15 }}
    //   source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
    // />


    <View style={styles.container}>
      <YoutubePlayer
        height={250}
        width={400}
        play={false}
        videoId={videoId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 8,
    }
})

  // <WebView
    //   style={{ height: 200, margin: 8, borderRadius: 15 }}
    //   source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
    // />