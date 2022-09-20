import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <Menu>
    <Menu.Item as={NavLink} to="/" exact>
      Recherche
    </Menu.Item>

    <Menu.Item as={NavLink} to="/faq" exact>
      Faq
    </Menu.Item>
  </Menu>
);

export default NavBar;
