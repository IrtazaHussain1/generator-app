import styled from "styled-components";

export const SigninBox = styled.div`
  width: 100%;
`;
export const SigninBoxNew = styled.div`
  width: 100%;
  position:relative;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 100px;

  i { 
    color:black;
    position: absolute;
    right:10px;
    top:7px;
  }
`;

export const SignInForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-around !important;
  flex-wrap: wrap;
`;

export const SignButton = styled.div`
  width: 100%;

  display: flex;

  justify-content: space-evenly;
  flex-wrap: wrap;
  @media (max-width:1191px)
  `
;
export const InfoIco = styled.img`
  width: 3rem;
  height: 3rem;

  margin: 1rem 2rem;

  &:hover {
    cursor: pointer;
  }
`;

export const MidBox = styled.div`
  position: absolute;
  top: 0;
  bottom:0px;
  left: 50%;

  transform: translateX(-50%);

  width: 30%;
  min-width: 480px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding:5rem 0rem;
  justify-content: space-around;
  @media (max-width:767px){
    justify-content: center !important;
    width: 100%;
    min-width: 200px;
    padding:1.5rem 1rem;
  }
`;
export const MidBoxNew = styled.div`
  position: absolute;
  top: 0;
  bottom:0px;
  left: 50%;

  transform: translateX(-50%);

  width: 30%;
  min-width: 480px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding:25rem 0rem;
  justify-content: space-around;
  
  @media (max-width:767px){
    justify-content: center !important;
    width: 100%;
    min-width: 200px;
    padding:1.5rem 1rem;
  }
`;

export const NexusLogo = styled.img`
  // margin-bottom: 15rem;
  height:auto;
  @media (max-width:767px){
    margin-bottom: 8rem;
  }
`;

export const NexusText = styled.img`
  max-width: 420px;
  width:100%;
  // margin-bottom: 15rem;
  height:auto;
  @media (max-width:767px){
    margin-bottom: 8rem;
    max-width:310px !important;
  }
`;


