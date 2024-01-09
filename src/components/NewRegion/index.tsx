import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';

export function NewRegion() {
  return (
    //Abrir o modal importado da lib Radix 
    /*  
        Portal fornece uma forma elegante de renderizar um elemento filho dentro 
        de um nó DOM que exista fora da hierarquia do componente pai
        - Coloca o modal fora dos componentes e sobrepões todos
    */
    <Dialog.Portal>
        {/* Overlay - Fundo preto */}
        <Overlay /> 

        <Content>
            <Dialog.Title>Nova Região</Dialog.Title>

            <CloseButton>
                <X size={24} />
                {/* x é o ícone do phosphor */}
            </CloseButton>

            <form>
                <input type="name" placeholder="Nome" required />
                <input type="user_id" placeholder="Usuário" required />

                <input type="latitude" placeholder="latitude" required />
                <input type="longitude" placeholder="longitude" required />
                
                <button type="submit">
                    Cadastrar
                </button>
            </form>
        </Content>
    </Dialog.Portal>
  );
}