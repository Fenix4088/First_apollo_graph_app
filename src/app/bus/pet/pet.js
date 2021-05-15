import React from "react";
import { Counter } from "./counter";
import { List } from "./list";
import { SpecialList } from "./specialList";
import styled from "styled-components";
import { Profile } from "./profile";
import { CheckInPet } from "./checkInPet";
import { SubscriptionPetList } from "./SubscriptionPetList";

export const Pet = () => {
  return (
    <Wrapper>
      <h1>Pet</h1>
      <CheckInPet />
      <SubscriptionPetList />
      <Counter />
      <List />
      <SpecialList />
      <Profile />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 40%;
`;
