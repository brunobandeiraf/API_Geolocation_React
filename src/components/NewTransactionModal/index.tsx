import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';

export function NewTransactionModal() {
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
            <Dialog.Title>Nova Transação</Dialog.Title>

            <CloseButton>
                <X size={24} />
                {/* x é o ícone do phosphor */}
            </CloseButton>

            <form>
                <input type="text" placeholder="Descrição" required />
                <input type="number" placeholder="Preço" required />
                <input type="text" placeholder="Categoria" required />

                <TransactionType>
                    {/* value é obrigatório */}
                    <TransactionTypeButton variant="income" value="income">
                        <ArrowCircleUp size={24} /> Entrada
                    </TransactionTypeButton>
                    <TransactionTypeButton variant="outcome" value="outcome">
                        <ArrowCircleDown size={24} /> Saída
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