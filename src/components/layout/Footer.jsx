import React from 'react';
// eslint-disable-next-line react/prefer-stateless-function
class Footer extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return (
      <footer className="color-theme-home">
        <h5 className="text-center text-white">
          Made By
          {' '}
          <a href="https://github.com/heintayzar-hm" target="_blank" rel="noreferrer" className="underline font-bold text-clip"> Hein Tay Zar</a>
        </h5>
      </footer>
    );
  }
}

export default Footer;
