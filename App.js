import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  // const updateNews = async () => {
  //   const { data } = await axios.patch(
  //     "http://10.0.2.2:8000/api/news/641959738ef4f856316ac446",
  //     { meta: "covid,vaccine,medicine" }
  //   );

  //   console.log("response: " + JSON.parse(data));
  // };

  // updateNews();

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
