import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ResultDetails = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: result.image_url }} style={styles.imageStyle} />
      <Text style={styles.nameStyle}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count}
      </Text>
    </View>
  );
};

export default ResultDetails;

const styles = StyleSheet.create({
  imageStyle: {
    width: 250,
    height: 150,
    borderRadius: 5,
    marginBottom: 5,
  },
  nameStyle: {
    fontWeight: "bold",
  },
  container: {
    marginLeft: 15,
  },
});
