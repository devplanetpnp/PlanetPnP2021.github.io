import styled from 'styled-components';

export const BoxFooter = styled.div`
  padding: 0px 0px;
  background: white;
  justify-content: center;
  position: relative;
  top: 40px;
  left: 10%;
  width: 60%;
       
  @media (max-width: 100%) {
    padding: 0px 0px;
  }
`;

export const ContainerFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 100%;
    margin: 0 auto;
    position: relative;
    top: 0px;
    left: 0px;
    /* background: red; */
`;

export const ColumnFooter = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 0px;
  padding: 0px 0px;
`;

export const RowFooter = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(450px, 1fr));
  grid-gap: 0px;
  justify-content: left;
  border-style: ridge;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(350px, 1fr));
  }
`;

export const RowFooter1 = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(200px, 1fr));
  grid-gap: 0px;
  justify-content: left;
  position: relative;
  top: 10px;
  left: 50px;
  padding: 0px 0px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(250px, 1fr));
  }
`;



export const HeadingFooter = styled.a`
  font-size: 30px;
  color: grey;
  position: absolute;
  left: 380px;
  margin-bottom: 0px;
  font-weight: bold;

  &:hover {
    color: #ffe302;
    transition: 200ms ease-in;
}
`;
export const HeadingFooter1 = styled.div`
  font-size: 14px;
  color: black;
  position: absolute;
  top: 50px;
  left: 390px;
  font-weight: normal;
`;

export const HeadingFooter2 = styled.div`
  font-size: 20px;
  color: black;
  position: absolute;
  top: 120px;
  left: 390px;
  font-weight: Bold;
`;

export const HeadingFooter4 = styled.div`
  font-size: 12px;
  color: grey;
  font-weight: normal;
  text-align: center;
  vertical-align: middle;
  width: 100%;
  padding: 15px 0px;
`;

export const ImgagingFooter = styled.img`
   position: relative;
   top: 0px;
   left: 0px;
   bottom: 0px;
   width: 350px;
   height: 250px
`;

export const HeadingFooter3 = styled.div`
  font-size: 12px;
  color: black;
  font-weight: Bold;
  padding: 15px 0px;
`;

export const InputBoxFooter = styled.input`
    padding: 8px 20px;
    width: 300px;
    border-radius: 10px;
    background: white;
    color : grey;
    font-size: 16px;
    font-weight: normal;
    text-align: center;
    border-style: ridge;
    position: absolute;
    top: 160px;
    left: 390px;
`;

export const StartButtonFooter = styled.a`
    padding: 10px 20px;
    width: 200px;
    border: 1px solid transparent;
    border-radius: 20px;
    background-image: linear-gradient(90deg, #ffe302 0%, #ffa500 100%);
    background-origin: border-box;
    background-clip: padding-box, border-box;
    color : grey;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    position: absolute;
    top: 160px;
    left: 700px;

    &:hover {
        color: #ffa500;
        transition: 200ms ease-in;
        background: grey;
`;

export const FooterLink = styled.a`
  padding: 0px 0px;
  font-size: 12px;
  color: blue;
  margin-bottom: 10px;
  font-weight: normal;
  text-align: left;

  &:hover {
    color: blue;
    transition: 200ms ease-in;
}
`;
