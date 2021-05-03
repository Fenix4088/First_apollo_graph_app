import React from "react";
import { List } from "./list";
import styled from "styled-components";

export const Customer = () => {
  return (
    <Wrapper>
      <List />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 40%;
`;