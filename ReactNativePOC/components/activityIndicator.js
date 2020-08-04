import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function IndicatorActivity() {
  return (
    <View>
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#00539b" />
        {/* <ActivityIndicator size="small" color="#00539b" />
        <ActivityIndicator size="small" color="#00539b" />
        <ActivityIndicator size="large" color="#00539b" /> */}
      </View>
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading Doctors...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignSelf: 'center',
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
  loadingText: {
    flex: 1,
    fontSize: 30
  },
});
