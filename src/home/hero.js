import React from "react";
import styled from "styled-components";
import { rem } from "polished";

import { Header } from "./_local-components/header";
import HeroImageSrc from "images/hero_image.png";

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  padding: ${rem(210)} ${rem(75)} ${rem(130)};
  margin-bottom:${rem(50)}
  background: #1e1e1e;
`;
const HeroInfo = styled.div`
  max-width: ${rem(416)};
`;
const HeroTitle = styled.h2`
  margin-bottom: ${rem(10)};
  color: #fff;
  font-size: ${rem(36)};
`;
const HeroIntro = styled.p`
  margin-bottom: ${rem(18)};
  font-size: ${rem(26)};
  color: #fff;
`;

const HeroCTA = styled.button`
  padding: ${rem(15)} ${rem(69)};
  border-radius: ${rem(25)};
  border: none;
  background: #2c68f6;
  font-size: ${rem(18)};
  color: #fff;
  cursor: pointer;

  &:hover {
    background: #5081f7;
  }
`;

const HeroImage = styled.img`
  position: absolute;
  bottom: ${rem(-210)};
  right: ${rem(75)};
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
      <HeroImage src={HeroImageSrc} alt="" />
    </HeroContainer>
  </>
);
