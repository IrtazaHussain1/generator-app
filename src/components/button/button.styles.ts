import styled from "styled-components";

export const ButtonS = styled.button`
  width: 38%;

  font-size: 2.2rem;
  font-weight: 300;
  color: #000;

  border-radius: 10rem;
  border: 1.4px solid #000;

  margin-bottom: 2rem;
  padding: 0.15rem 1rem;
  height:38px;

  background-color: rgba(255, 255, 255, 0);

  transition: 0.2s;

  @media (max-width:375px){
    height:32px;
  }

  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;
