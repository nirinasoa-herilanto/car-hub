'use client';

import { createGlobalStyle } from 'styled-components';
import { variables } from './variables';

export const GlobalStyle = createGlobalStyle`
  ${variables}

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    background: var(--zinc-50);
  }

  h1 {
    font-size: 42px;
    color: var(--zinc-700);
  }

  p {
    font-size: 16px;
    color: var(--zinc-800);
    text-align: justify;
  }

  a {
    text-decoration: none;
    color: var(--blue-800);
  }

  ul {
    list-style: none;
  }

  .fit {
    margin: auto;
    max-width: 1024px;
  }
`;
