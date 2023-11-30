import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
::before,
::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  height: 100%;
  width: 100%;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(143, 187, 204, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}


`;

export default GlobalStyle;
