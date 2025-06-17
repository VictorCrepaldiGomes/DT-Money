import styled from "styled-components";


export const HeaderContainer = styled.header`
background-color: ${props => props.theme.colors.gray900};
padding: 2.5rem 0 7.5rem;

`

export const HeaderContent = styled.div`
width: 100%;
max-width: 1120px;
margin: 0 auto;
padding: 0 1.5rem;

display: flex;
justify-content: space-between;
align-items: center;



`

export const NewTransactionButton = styled.button`
height: 50px;
border: 0;
background-color: ${props => props.theme.colors.green900};
font-weight: bold;
border-radius: 6px;
cursor: pointer;
padding: 0 1.25rem;
color: ${props => props.theme.colors.white400};

&:hover {
    background: ${props => props.theme.colors.green800};
    transition: background-color 0.2s;
}


`