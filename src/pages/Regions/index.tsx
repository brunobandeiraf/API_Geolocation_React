import { useState, useEffect } from 'react'
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { TransactionsContainer, TransactionsTable } from "./styles";

import { api } from '../../services/api'

export function Regions() {

  const [regionList, setRegionList] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await api.get('/regions', {
          params: {
            page: 1,
            limit: 10,
          },
        });
        const region = response.data.rows;
        setRegionList(region);
      } catch (error) {
        console.error('Error retrieving region list', error);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div>
      <Header newRegister="regions" />

      <TransactionsContainer>
        <SearchForm />
      
        <TransactionsTable>
          <tbody>
            {
              regionList.length === 0 ? (
                <tr>
                  <td>Lista vazia</td>
                </tr>
              ) : (
                regionList.map((region) => (
                  <tr key={region}>
                    <td width="50%">
                      {region.name}
                    </td>
                    <td width="50%">
                      {`${region.coordinates.latitude} e ${region.coordinates.longitude}`}
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