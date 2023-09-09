import React, { useState, useContext } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

const SearchBox = styled.View`
  padding: ${(props) => props.theme.space[3]};
  backgroundcolor: ${(props) => props.theme.colors.bg.primary};
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = useState(keyword);

  return (
    <SearchBox>
      <Searchbar
        placeholder="Search for a location"
        value={searchQuery}
        onSubmitEditing={() => {
          search(searchQuery);
        }}
        onChangeText={(query) => {
          setSearchQuery(query);
        }}
      />
    </SearchBox>
  );
};
