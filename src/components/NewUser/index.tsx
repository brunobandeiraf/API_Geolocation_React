import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';

export function NewUser() {
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
            <Dialog.Title>Novo Usuário</Dialog.Title>

            <CloseButton>
                <X size={24} />
                {/* x é o ícone do phosphor */}
            </CloseButton>

            <form>
                <input type="name" placeholder="Nome" required />
                <input type="email" placeholder="E-mail" required />

                <TransactionType>
                    {/* value é obrigatório */}
                    <TransactionTypeButton variant="income" value="income">
                        <ArrowCircleUp size={24} /> Endereço
                    </TransactionTypeButton>
                    <TransactionTypeButton variant="outcome" value="outcome">
                        <ArrowCircleDown size={24} /> Coordenadas
                    </TransactionTypeButton>
                </TransactionType>
                
                <button type="submit">
                    Cadastrar
                </button>
            </form>
        </Content>
    </Dialog.Portal>
  );
}