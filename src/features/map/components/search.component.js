import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

const SearchBox = styled.View`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  top: 20px;
  width: 100%;
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = useState(keyword);

  useEffect(() => {
    setSearchQuery(keyword);
  }, [keyword]);

  return (
    <SearchBox>
      <Searchbar
        placeholder="Search for a location"
        value={searchQuery}
        icon="map"
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
