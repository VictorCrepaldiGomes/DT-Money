import styled, { css } from "styled-components";

interface SummaryCardProps {
    variant?: 'color'
}

export const SummaryContainer = styled.section`
width: 100%;
max-width: 1120px;
margin: 0 auto;
padding: 0 1.5rem;

display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 2rem;
margin-top: -4.5rem; 
`

export const SummaryCard = styled.div<SummaryCardProps>`
background-color: ${props => props.theme.colors.gray800};
border-radius: 6px;
padding: 2rem;

 header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme.colors.white100};
 }


 strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
 }

 ${props => props.variant === 'color' && css`
 background-color: ${props => props.theme.colors.green900};
 
 `}
`