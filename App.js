import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import axios from "axios";
const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get("https://api.github.com/users/Parrot").then((response) => {
      setData(response.data);
    });
  }, []);
  if (!data) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name: {data.name}</Text>
      <Text style={styles.text}>Username: {data.login}</Text>
      <Image style={styles.image} source={{ uri: data.avatar_url }} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
});
export default App;