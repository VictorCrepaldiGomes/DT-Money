import styled from "styled-components";


export const SearchFormContainer = styled.form`
display: flex;
gap: 1rem;


input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background-color: ${props => props.theme.colors.gray900};
    color: ${props => props.theme.colors.white100};
    padding: 1rem;

    &::placeholder {
        color: ${props => props.theme.colors.gray300};
    }

    
}

button {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        border: 0;
        padding: 1rem;
        background-color: transparent;
        cursor: pointer;
        border: 1px solid ${props => props.theme.colors.green500};
        font-weight: bold;
        border-radius: 6px;
        color: ${props => props.theme.colors.primary100};

        &:not(:disabled):hover {
            background: ${props => props.theme.colors.green500};
            border: 1px solid ${props => props.theme.colors.green500};
            color: ${props => props.theme.colors.white100};
            transition: background-color 0.2s color 0.2s, border-color 0.2s;
        }

        &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
    }






`