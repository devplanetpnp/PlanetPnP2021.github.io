import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 5px 2px;
  background: white;
  position: absolute;
  top: 120px;
  width: 100%;
  
   
  @media (max-width: 100%) {
    padding: 30px 15px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    max-width: 100%;
    margin: 0 auto;
    position: relative;
    top: 20px;
    left: 120px;
    /* background: red; */
`
   
export const Column = styled.div`
  padding: 30px 0px;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-left: 5px;
  margin-right: 5px;
  width: 400px;
  align-items: center;
  background-image: linear-gradient(180deg, #ffe302 0%, #ffa500 100%);
`;

export const Column1 = styled.div`
  padding: 30px 30px;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 250px;
  margin-right: 5px;
  width: 600px;
  align-items: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: grey;
  margin-bottom: 8px;
  font-size: 14px;
  text-decoration: none;
   
  &:hover {
      color: yellow;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.a`
  padding: 5px 5px;
  font-size: 25px;
  color: grey;
  margin-bottom: 10px;
  font-weight: bold;

  &:hover {
    color: #ffe302;
    transition: 200ms ease-in;
}
`;

   
export const Imgaging = styled.img`
   position: relative;
   top: 10px;
   left: 10px;
   width: 550px;
`;


export const InputBox = styled.input`
    padding: 6px 20px;
    width: 200px;
    border: 1px solid transparent;
    border-radius: 10px;
    background: white;
    color : grey;
    font-size: 16px;
    font-weight: normal;
    text-align: center;
    margin-bottom: 10px;
`;

export const StartButton = styled.a`
    padding: 8px 20px;
    width: 200px;
    border: 1px solid transparent;
    border-radius: 10px;
    color: white;
    transition: 200ms ease-in;
    background: grey;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
  
    &:hover {
        background: red;
        background-origin: border-box;
        background-clip: padding-box, border-box;
        color : white;
        font-size: 16px;
        font-weight: bold;
        text-align: center;
`;