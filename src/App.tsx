import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

import { Users } from "./pages/Users";
import { Home } from "./pages/Home";
import { Regions } from "./pages/Regions";

export function App() {

  return (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <Regions />
  </ThemeProvider>
  )
}
