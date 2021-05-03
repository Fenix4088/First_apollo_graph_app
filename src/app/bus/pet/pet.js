import React from "react";
import { Counter } from "./counter";
import { List } from "./list";
import { SpecialList } from "./specialList";
import styled from "styled-components";

export const Pet = () => {
  return (
    <Wrapper>
      <h1>Pet</h1>
      <Counter />
      <List />
      <SpecialList />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 40%;
`;