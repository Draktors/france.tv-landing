import React from "react";
import styled from "styled-components";
import { rem } from "polished";

import { Header } from "./_local-components/header";

const HeroContainer = styled.div`
  width: 100%;
  padding: ${rem(150)};
  background: #1e1e1e;
`;
const HeroInfo = styled.div`
  max-width: width: ${rem(416)};
`;
const HeroTitle = styled.h2`
  color: #fff;
  font-size: ${rem(36)};
`;
const HeroIntro = styled.p`
  font-size: ${rem(26)};
  color: #fff;
`;

const HeroCTA = styled.button`
  padding: ${rem(15)} ${rem(69)};
  border-radius: ${rem(25)};
  background: #2c68f6;
  color: #fff;
  cursor: pointer;
`;

export const Hero = () => (
  <>
    <Header />
    <HeroContainer>
      <HeroInfo>
        <HeroTitle>Nouvelle interface</HeroTitle>
        <HeroIntro>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </HeroIntro>
        <HeroCTA>Découvrir</HeroCTA>
      </HeroInfo>
    </HeroContainer>
  </>
);
