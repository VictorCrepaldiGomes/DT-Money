import { HeaderContainer,
         HeaderContent,
         NewTransactionButton,
        } from "./Styles";
import logoImg from "../../Assets/Logo.svg"
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionsModal } from "../NewTransactionsModal/NewTransactionsModal";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="" />

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                      <NewTransactionButton>Nova Transação</NewTransactionButton>
                    </Dialog.Trigger>
                    <NewTransactionsModal />

                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}