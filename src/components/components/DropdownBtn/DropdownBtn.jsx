import PropTypes from 'prop-types';
import { useState } from 'react';

const DropdownBtn = (props) => {
  const { header, children } = props;
  const [show, setShow] = useState(false);
  return (
    <div className={(show) ? 'active-btn' : ''}>
      <button type="button" onClick={() => (setShow(!show))} className="w-full h-[70px] relative p-[10px] border-b border-slate-500 block text-left">
        <span className="text-xl">{header}</span>
        <span className="absolute right-[15px] top-[25px] dropdown-arrow" />
      </button>
      <div className={(show) ? 'visibility-active' : 'hidden'}>
        <span className="transition-easeinout visibility-hidden">{children}</span>
      </div>
    </div>

  );
};

DropdownBtn.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default DropdownBtn;
