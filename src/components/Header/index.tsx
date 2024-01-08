import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';

import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <h2>GeoLocation - OZmap</h2>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            {/* asChild - aproveita o botão já criado */}
            <NewTransactionButton>Novo Usuário</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />

        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}