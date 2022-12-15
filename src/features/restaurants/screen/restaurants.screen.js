import React from "react";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components";

const MainContainer = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => (
  <MainContainer>
    <SearchContainer>
      <Searchbar placeholder="Search!!" elevation={5} style={{ backgroundColor:"white" }}/>
    </SearchContainer>
    <RestaurantList>
      <RestaurantInfoCard />
    </RestaurantList>
  </MainContainer>
);

const styles = StyleSheet.create({
  container: {},
  search: {},
  list: {},
});
