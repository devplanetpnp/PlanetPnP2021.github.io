import styled from 'styled-components';
   
export const BoxHeader = styled.div`
  padding: 5px 2px;
  background: white;
  position: absolute;
  top: 30px;
  width: 80%;
  
   
  @media (max-width: 100%) {
    padding: 30px 15px;
  }
`;
   
export const ContainerHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    max-width: 100%;
    margin: 0 auto;
    position: relative;
    top: -50px;
    left: 400px;
    /* background: red; */
`;
   
export const ColumnHeader = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 0px;
`;

export const RowHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLinkHeader = styled.a`
  color: grey;
  margin-bottom: 8px;
  font-size: 14px;
  text-decoration: none;
   
  &:hover {
      color: yellow;
      transition: 200ms ease-in;
  }
`;
   
export const HeadingHeader = styled.a`
  font-size: 17px;
  color: grey;
  margin-bottom: 10px;
  font-weight: bold;

  &:hover {
    color: #ffe302;
    transition: 200ms ease-in;
}
`;

   
export const ImgagingHeader = styled.img`
   position: relative;
   top: 10px;
   left: 70px;
   width: 240px;
`;


export const StartButtonHeader = styled.a`
    padding: 10px 20px;
    width: 200px;
    border: 1px solid transparent;
    border-radius: 40px;
    background-image: linear-gradient(90deg, #ffe302 0%, #ffa500 100%);
    background-origin: border-box;
    background-clip: padding-box, border-box;
    color : grey;
    font-size: 16px;
    font-weight: bold;
    text-align: center;

    &:hover {
        color: #ffa500;
        transition: 200ms ease-in;
        background: grey;
`;

