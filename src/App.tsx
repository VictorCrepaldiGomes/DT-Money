import { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes/Themes.tsx"
import { GlobalStyle } from "./Global/Global.tsx"
import { Transactions } from "./Pages/Transactions/Transactions.tsx";
import { TransactionsProvider } from "./Contexts/TransactionsContext.tsx";

export function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      < GlobalStyle />
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  )
}


