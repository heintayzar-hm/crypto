import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';

// eslint-disable-next-line react/prefer-stateless-function
class Header extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    const links = [
      {
        id: 1,
        path: '/home',
        text: 'Home',
      },
      {
        id: 2,
        path: '/item',
        text: 'Item',
      },
    ];
    return (
      <nav className="">
        <h1 className="">
          <NavLink
            to={links[0].path}
            data-testid=""
          >
            Bookstore CMS
          </NavLink>
        </h1>
        <div className="">
          <ul className="">
            {links.map((link) => (
              <li key={link.id} className="">
                {' '}
                <NavLink
                  to={link.path}
                  data-testid="link-item"
                  style={({ isActive }) => ({ opacity: isActive ? 1 : 0.5 })}
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full">
          <BsFillPersonFill className="text-blue hidden xs:block w-8 h-8 p-1 border-b-slate-200 border-2 rounded-full" />

        </div>
      </nav>
    );
  }
}
export default Header;
