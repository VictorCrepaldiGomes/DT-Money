import styled from "styled-components"

interface PriceHightlightProps {
    variant: 'income' | 'outcome';
}
export const TransactionsContainer = styled.main`
width: 100%;
max-width: 1120px;
margin: 4rem auto 0;
padding: 0 1.5rem1;

`

export const TransactionsTable = styled.table`
width: 100%;
border-collapse: separate;
border-spacing: 0 0.5rem;
margin-top: 1.5rem;


td {
    padding: 1.25rem 2rem;
    background: ${props => props.theme.colors.gray800};

    &:first-child {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
    }

    &:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
    }
}
`

export const PriceHighlight = styled.span<PriceHightlightProps>`
color: ${props => props.variant === 'income' ? props.theme.colors.green700 : props.theme.colors.red600};

`