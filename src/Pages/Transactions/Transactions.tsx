// import { useEffect, useState } from "react";
import { useContext } from "react";
import { Header } from "../../Components/Header/Header";
import { SearchForm } from "../../Components/SearchForm/SearchForm.tsx";
import { Summary } from "../../Components/Summary/Summary";
import {
  TransactionsContainer,
  TransactionsTable,
  PriceHighlight,
} from "./Styles.tsx";
import { TransactionsContext } from "../../Contexts/TransactionsContext.tsx";
import { dateFormatter, priceFormatter } from "../../Formatter/Formatter.tsx";


export function Transactions() {
const { transactions } = useContext(TransactionsContext)

  //Dentro do UseEffect nao pode ser async await
//   useEffect(() => {
//     fetch('http://localhost:3333/transactions')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })
//   }, [])


  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map(transaction => {
                return (
                    <tr key={transaction.id}>
                    <td width="50%">{transaction.description}</td>
                    <td>
                        <PriceHighlight variant={transaction.type}>
                          {transaction.type === 'outcome' && '- '}
                        
                          {priceFormatter.format(transaction.price)}
                        </PriceHighlight>
                    </td>
                    <td>{transaction.category}</td>
                    <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                    </tr>
                )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
