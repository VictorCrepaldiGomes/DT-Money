import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./Styles";

export function SearchForm() {
    return (
        <SearchFormContainer>
            <input type="text" placeholder="Busque por transações.." />

            <button type="submit">
                <MagnifyingGlass size={20}/>
                Buscar</button>

        </SearchFormContainer>
    )
}