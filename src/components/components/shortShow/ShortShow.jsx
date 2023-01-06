import PropTypes from 'prop-types';

const ShortShow = (props) => {
  const { header, content, height } = props;
  return (
    <div>
      <div className={`w-full grid grid-cols-10 relative p-[10px] min-h-[${height}px] max-h-[100px] border-b border-slate-500 block text-left`}>
        <span className="text-xl col-span-6">
          {header}
          {' '}
          :
        </span>
        <span className="col-span-4 break-words">{content}</span>
      </div>
    </div>

  );
};

ShortShow.propTypes = {
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default ShortShow;
