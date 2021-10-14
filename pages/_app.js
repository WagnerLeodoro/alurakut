import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { AlurakutStyles } from '../src/lib/AluraCommons';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background-image: url("https://i.pinimg.com/originals/d0/80/7f/d0807f47cbdb82fa8c1fe66c69b99f74.jpg");
  }
  #_next {
    display: flex;
    min-height: 180vh;
    flex-direction: column;
  }
  img {
    max-width: 100%;
    height: auto;
    display: block
  }

  ${AlurakutStyles}

`
const theme = {
  colors: {
    primary: 'red',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
