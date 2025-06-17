import { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes/Themes.tsx"
import { GlobalStyle } from "./Global/Global.tsx"
import { Transactions } from "./Pages/Transactions/Transactions.tsx";

export function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      < GlobalStyle />
      <Transactions />
    </ThemeProvider>
  )
}


