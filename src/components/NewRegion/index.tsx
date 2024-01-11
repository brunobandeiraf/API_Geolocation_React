import React, { useState, useEffect } from "react";
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

import { api } from '../../services/api'

import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';

export function NewRegion() {

    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        userId: '',
        latitude: '',
        longitude: '',
    });

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await api.get('/users', {
                    params: {
                        page: 1,
                        limit: 10,
                    },
                });
                const users = response.data.rows;
                setUsers(users);

            } catch (error) {
            console.error('Error retrieving user list', error);
            }
        }
        fetchUsers();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          // Chame o endpoint de cadastro da região com os dados do formulário
          await api.post('/regions/create', formData);
    
          // Limpe os campos do formulário após o cadastro bem-sucedido
          setFormData({
            name: '',
            userId: '',
            latitude: '',
            longitude: '',
          });
    
          // Feche o modal (você precisa adicionar a lógica para fechar o modal aqui)
        } catch (error) {
          console.error('Error creating region', error);
        }
    };

    
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

            <form onSubmit={handleSubmit}>
                {/* <input type="name" placeholder="Nome" required /> */}
                <input
                    type="text"
                    name="name"
                    placeholder="Nome"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                />
                
                {/* <select id="userDropdown" required>
                    <option value="" disabled selected>Selecione um usuário</option>
                    {
                        users.map(user => (
                            <option key={ user._id } value={ user._id }>
                            { user.name }
                            </option>
                        ))
                    }
                </select> */}
                 <select
                    id="userDropdown"
                    name="userId"
                    value={formData.userId}
                    onChange={handleInputChange}
                    required
                >
                    <option value="" disabled>Selecione um usuário</option>
                        {users.map(user => (
                    <option key={user._id} value={user._id}>
                        {user.name}
                    </option>
                    ))}
                </select>

                {/* <input type="latitude" placeholder="latitude" required /> */}
                <input
                    type="text"
                    name="latitude"
                    placeholder="Latitude"
                    value={formData.latitude}
                    onChange={handleInputChange}
                    required
                />
                
                {/* <input type="longitude" placeholder="longitude" required /> */}
                <input
                    type="text"
                    name="longitude"
                    placeholder="Longitude"
                    value={formData.longitude}
                    onChange={handleInputChange}
                    required
                />
                
                <button type="submit">
                    Cadastrar
                </button>

            </form>
        </Content>
    </Dialog.Portal>
  );
}