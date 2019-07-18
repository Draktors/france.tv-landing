import React from "react";
import styled from "styled-components";
import { rem } from "polished";

const HeaderContainer = styled.div`
  width: 100%;
  padding: ${rem(26)} 0;
  background: #000;
  & > p {
    font-size: ${rem(20)};
    color: #fff;
    text-align: center;
  }
`;

export const Header = () => (
  <HeaderContainer>
    <p>france•tv</p>
  </HeaderContainer>
);
