import { SummaryContainer, SummaryCard } from "./Styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { priceFormatter } from "../../Formatter/Formatter";
import { useSummary } from "../Hooks/useSummaryCount";

export function Summary() {

    const summary = useSummary()

    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#80b73e"/>
                </header>

                <strong>
                    {priceFormatter.format(summary.income)}
                </strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color="#f75a68"/>
                </header>

                <strong>
                    {priceFormatter.format(summary.outcome)}
                </strong>
            </SummaryCard>

            <SummaryCard variant="color">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#fff"/>
                </header>

                <strong>
                    {priceFormatter.format(summary.total)}
                </strong>
            </SummaryCard>
        </SummaryContainer>
    )
}