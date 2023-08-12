import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}

* {
  font-family: 'Noto Sans KR', sans-serif;
  max-width: 100%;
}

body {
  font-family: 'Noto Sans KR', sans-serif;
  background-color:#F3F3F3;
  max-width: 1200px;
  margin: 0 auto; 
}
`;

export default GlobalStyle;
