import { Header } from "../../Components/Header/Header";
import { SearchForm } from "../../Components/SearchForm/SearchForm.tsx";
import { Summary } from "../../Components/Summary/Summary";
import { TransactionsContainer, TransactionsTable, PriceHighlight } from './Styles.tsx'
export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                <tbody>
                    <tr>
                        <td width="50%">Desenvolvimento de Site</td>
                        <td>
                        <PriceHighlight variant="income">R$ 700.000</PriceHighlight>
                        </td>
                        <td>Venda</td>
                    </tr>

                    <tr>
                        <td width="50%">Desenvolvimento de Site</td>
                        <td>
                        <PriceHighlight variant="outcome"> -R$ 700.000</PriceHighlight>
                        </td>
                        <td>Venda</td>
                    </tr>

                    <tr>
                        <td width="50%">Desenvolvimento de Site</td>
                        <td><PriceHighlight variant="income">
                            R$ 700.000
                            </PriceHighlight></td>
                        <td>Venda</td>
                    </tr>

                    <tr>
                        <td width="50%">Desenvolvimento de Site</td>
                        <td>
                        <PriceHighlight variant="income">R$ 700.000</PriceHighlight>
                        </td>
                        <td>Venda</td>
                    </tr>
                </tbody>
            </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}