import PropTypes from 'prop-types';
import HtmlParser from 'react-html-parser';

const Htmlpraser = (props) => {
  const { content } = props;
  return (
    <div>
      {HtmlParser(content)}
    </div>
  );
};

Htmlpraser.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Htmlpraser;
