import styled from "styled-components";

export const SettingBox = styled.div`
  width: 100%;
  height: 100%;
  background-color:#F3F3F3 !important;
  // height:100vh !important;
  // // border-radius:20px;
  // 
`;

export const GridBox = styled.div`
  overflow-y:scroll;
  display: grid;
  grid-template-columns: 20% 80%;
  grid-column-gap: 20px;

  
  @media (max-width: 768px) {
    display:block;
    flex-wrap:wrap;
  }

 &::-webkit-scrollbar {
    width: 11px;
  }

  &::-webkit-scrollbar-track {
    background: var(--scrollbarBG);
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--thumbBG) ;
    border-radius: 6px;
    border: 3px solid var(--scrollbarBG);
  }

`;



export const SettingBoxOld = styled.div`
  width: 100%;
  height: 100%;
  background-color:#F3F3F3 !important;
  height:100vh !important;
  overflow-y:scroll;
  padding-bottom: 20px;

  @media (max-width:676px){
    display:block;
  }
`;

export const TopRow = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 2.2rem;

`;

export const RowImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 1.5rem;
`;

export const RowP = styled.p`
  font-weight: bold;
  font-size: 2rem;
  color:black;
  letter-spacing: 1.1px;
  margin-right: auto;
  margin-bottom:-1px;
 
`;

// carousel image 

export const FolderImage = styled.img`

  height:100%;
  width:100%;
  postiion:center;

`;

export const ImageDiv = styled.div`
    padding:0px;
    border-radius:10px;
    overflow:hidden;
    max-height:270px;

`;