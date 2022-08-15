import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Professores } from "./pages/Professores/index";
import { GlobalStyle } from "./styles/global";
import { darkTheme } from "./styles/themes/darkTheme";

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Header />
      <Professores />
      <GlobalStyle />
    </ThemeProvider>

  )
}

