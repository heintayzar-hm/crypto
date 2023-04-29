import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { links } from '../../../constant';

const Coincard = (props) => {
  const { coin, rank } = props;
  return (
    <li className={`${(rank === 1) ? 'col-span-2 h-[250px]' : 'h-[220px]'} color-theme`}>
      <div className=" cursor-pointer">
        <Link to={`${links[1].path}/${coin.uuid}`}>
          {' '}
          <div className="relative p-2">
            <div className="z-10 absolute p-2 hover:border hover:rounded-full hover:border-red-500 focus:rounded right-2 top-3 cursor-pointer">
              <FiArrowRight color="white" />
            </div>
          </div>
          {' '}
          <div style={{ backgroundImage: `url(${coin.iconUrl})` }} className={`${(rank === 1) ? 'col-span-2 bg-[20%] aligns-center justify-center grid grid-cols-2' : 'bg-left p-4'} h-[200px] bg-[length:100px] bg-no-repeat bg-origin-content text-white`}>
            <div className={`${(rank === 1) ? 'col-start-2' : ''} w-full h-full relative flex flex-col justify-center`}>
              <div data-testid="item" className={`${(rank === 1) ? '' : 'absolute bottom-8 right-0'} text-4xl font-body font-black tracking-wider`}>
                {coin.symbol}
              </div>
              <div className={`${(rank === 1) ? '' : 'absolute bottom-3 right-0'} break-words`}>
                {coin.price}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </li>

  );
};

Coincard.propTypes = {
  coin: PropTypes.shape({
    '24hVolume': PropTypes.string.isRequired,
    btcPrice: PropTypes.string.isRequired,
    change: PropTypes.string.isRequired,
    coinrankingUrl: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    iconUrl: PropTypes.string.isRequired,
    listedAt: PropTypes.number.isRequired,
    lowVolume: PropTypes.bool.isRequired,
    marketCap: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
    sparkline: PropTypes.arrayOf(PropTypes.string).isRequired,
    symbol: PropTypes.string.isRequired,
    tier: PropTypes.number.isRequired,
    uuid: PropTypes.string.isRequired,
  }).isRequired,
  rank: PropTypes.number.isRequired,
};

export default Coincard;
