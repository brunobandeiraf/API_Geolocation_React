import { useState, useEffect } from 'react'
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { TransactionsContainer, TransactionsTable } from "./styles";

import { api } from '../../services/api'

export function Users() {

  const [userList, setUserList] = useState([]);

  // Recuperar a lista de usuário
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
        setUserList(users);
      } catch (error) {
        console.error('Error retrieving user list', error);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div>
      <Header newRegister="users" />

      <TransactionsContainer>
        <SearchForm />
      
        <TransactionsTable>
          <tbody>
            {
              userList.length === 0 ? (
                <tr>
                  <td>Lista vazia</td>
                </tr>
              ) : (
                userList.map((user) => (
                  <tr key={user}>
                    <td width="50%">
                      {user.name}
                    </td>
                    <td width="25%">
                      {user.email}
                    </td>
                    <td width="25%">
                      {user.coordinates && user.coordinates.latitude
                        ? `${user.coordinates.latitude} e ${user.coordinates.longitude}`
                        : `${user.address.street}, ${user.address.city} - ${user.address.zipCode}`
                      }
                    </td>
                  </tr>
                ))
              )
            }

          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}