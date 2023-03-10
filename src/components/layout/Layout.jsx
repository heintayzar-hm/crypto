import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';
import Header from './Header';

// eslint-disable-next-line react/prefer-stateless-function
class Layout extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      bool: false,
    };
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState((state) => ({
      bool: !state.bool,
    }));
  }

  render() {
    const { children } = this.props;
    const { bool } = this.state;
    return (
      <div className={`${(bool) ? 'dark' : 'white'}`}>
        <div className="tracking-wide font-control">
          <Header />
          {children}
          <Footer handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
export default Layout;
