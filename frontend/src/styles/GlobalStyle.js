import { createGlobalStyle } from "styled-components";
import "modern-normalize";

import InterRegularWOFF2 from "#assets/fonts/Inter-Regular.woff2";
import InterMediumWOFF2 from "#assets/fonts/Inter-Medium.woff2";
import InterSemiBoldWOFF2 from "#assets/fonts/Inter-SemiBold.woff2";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Inter";
    src: local("Inter"),
      url(${InterRegularWOFF2}) format("woff2");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "Inter";
    src: local("Inter"),
      url(${InterMediumWOFF2}) format("woff2");
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "Inter";
    src: local("Inter"),
      url(${InterSemiBoldWOFF2}) format("woff2");
    font-weight: 600;
    font-style: normal;
  }

  body {
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
  
  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }`;
