import styled from "styled-components";

const ListItem = styled.li`
  color: #fff;

  &:hover {
    color:#9AC0CD;
    cursor:pointer;
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  font-size: 2rem;
  background-color: #000;
  padding: 2rem;
`;

function Header() {
  return (
    <List>
      <ListItem><a href="#topo">Inicio</a></ListItem>
      <ListItem><a href="#about">Sobre</a></ListItem>
      <ListItem> <a href="#end">Contato</a></ListItem>
    </List>
    
  );
}

export default Header;
