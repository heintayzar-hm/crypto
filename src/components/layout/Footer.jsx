import React from 'react';
import PropTypes from 'prop-types';
import { FaAdjust } from 'react-icons/fa';
// eslint-disable-next-line react/prefer-stateless-function
class Footer extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    const { handleClick } = this.props;
    return (
      <footer className="">
        <h5 className="">
          Made By
          {' '}
          <a href="https://github.com/heintayzar-hm" target="_blank" rel="noreferrer" className="underline font-bold text-clip"> Hein Tay Zar</a>
        </h5>
        <button type="button" onClick={handleClick} className="cursor-pointer w-5 h-5">
          <FaAdjust />
        </button>
      </footer>
    );
  }
}

Footer.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
export default Footer;
