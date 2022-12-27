import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import yelp from "../api/yelp";

const ResultShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");

  const [result, setResult] = useState(null);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) return null;

  console.log("------------");
  console.log(result);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return <Image source={{ uri: item }} style={styles.image} />;
        }}
      />
      <View style={styles.card}>
        <Text>Address</Text>
        <Text>{`${result.location.address1}, ${result.location.city},ZIP-${result.location.zip_code}`}</Text>
      </View>
    </View>
  );
};

export default ResultShowScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
  },
  image: {
    height: 200,
    width: 300,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  card: {
    padding: 25,
    backgroundColor: "#dbaf35",
    marginTop: 20,
    borderRadius: 10,
  },
});
