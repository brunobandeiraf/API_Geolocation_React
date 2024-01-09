import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';

import { NewUser } from "../NewUser";
import { NewRegion } from '../NewRegion';

interface HeaderProps {
  newRegister: 'users' | 'regions';
}

export function Header({ newRegister }: HeaderProps) {
  return (
    <HeaderContainer>
      <HeaderContent>
        <h2>GeoLocation - OZmap</h2>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            {/* asChild - aproveita o botão já criado */}
            <NewTransactionButton>
              {newRegister === 'users' ? `Novo Usuário` : newRegister === 'regions' ? `Nova Região` : null}
            </NewTransactionButton>
          </Dialog.Trigger>

          {newRegister === 'users' ? <NewUser /> : newRegister === 'regions' ? <NewRegion /> : null}

        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}