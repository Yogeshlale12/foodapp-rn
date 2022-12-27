import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";

import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, error] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => result.price == price);
  };

  return (
    <View style={styles.searchScreen}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ResultsList
          title="Cost Effective"
          results={filterResultsByPrice("$")}
        />
        <ResultsList title="Bit Pricer" results={filterResultsByPrice("$$")} />
        <ResultsList
          title="Big Spender"
          results={filterResultsByPrice("$$$")}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  searchScreen: {
    backgroundColor: "#fff",
    flex: 1,
  },
});

export default SearchScreen;
