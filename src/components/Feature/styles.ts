import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  width: 200px;
  height: 200px;

  background-color: ${props => props.theme["gray-900"]};
  color: ${props => props.theme["white"]};
  border-radius: 7px;
  overflow: hidden;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  

  > svg {
    flex: 1;
    color: ${props => props.theme["gray-900"]};
  }

  > footer {
    background-color: ${props => props.theme["white"]};
    width: 100%;
    padding: 24px 0;
    text-align: center;
    font-weight: 700;
  }
`;