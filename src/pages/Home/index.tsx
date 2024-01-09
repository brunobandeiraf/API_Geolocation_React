import { FiTruck, FiTag } from 'react-icons/fi';

import { Container } from "./styles";
import { Feature } from '../../components/Feature';
import { Header } from '../../components/Header';


export function Home() {
  return (
    <Container>
      <Header />

      <main>
        <Feature title="Usuários" icon={FiTag} to="/users" />
        <Feature title="Regiões" icon={FiTruck} to="/regions" /> 
       
      </main>
    </Container>
  )
}