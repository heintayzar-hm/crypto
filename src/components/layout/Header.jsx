import { FaMicrophone } from 'react-icons/fa';
import { IoIosSettings } from 'react-icons/io';
import { BiArrowBack } from 'react-icons/bi';
import { useHref, useNavigate } from 'react-router-dom';
import { links } from '../../constant';

const Header = () => {
  const fullPath = useHref();
  const path = fullPath.split('/')[1];
  const navigate = useNavigate();
  const link = links.find((link) => link.path === `/${path}`);
  return (
    <nav className="bg-color3 py-3">
      <div className="grid grid-cols-6 items-center justify-center gap-2 justify-items-center">
        <button type="button" className={`${(link?.id === 1) ? 'invisible' : ''} col-span-1 text-center cursor-pointer hover:border hover:rounded-full hover:border-red-500 focus:rounded right-2 p-2`} onClick={() => (navigate(-1))}>
          <BiArrowBack color="white" />
        </button>
        <h1 className="text-white col-span-3 p-0 text-center">{link?.text}</h1>
        <div className="col-span-2 grid grid-cols-2 items-center justify-center justify-items-center w-full">
          <FaMicrophone color="white" />
          <IoIosSettings color="white" />
        </div>
      </div>
    </nav>
  );
};
export default Header;
