import { SummaryContainer, SummaryCard } from "./Styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";

export function Summary() {
    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#80b73e"/>
                </header>

                <strong>
                    R$ 200.000
                </strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color="#f75a68"/>
                </header>

                <strong>
                    R$ 200.000
                </strong>
            </SummaryCard>

            <SummaryCard variant="color">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#fff"/>
                </header>

                <strong>
                    R$ 200.000
                </strong>
            </SummaryCard>
        </SummaryContainer>
    )
}