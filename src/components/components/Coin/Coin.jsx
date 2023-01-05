import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useGetCoinQuery } from '../../../redux/apiReducer/coinRanking';
import DropdownBtn from '../DropdownBtn/DropdownBtn';
import Htmlpraser from '../Htmlpraser/HtmlPraser';
import ShortShow from '../shortShow/ShortShow';
import Loading from '../Loading/Loading';

const LoopObject = ({ dataStr }) => {
  const data = JSON.parse(dataStr);
  const pointers = Object.keys(data);
  return (
    <>
      {
        (pointers.map((pointer) => (
          <>
            <ShortShow
              key={pointer}
              header={pointer.toString()}
              height="50"
              content={data[pointer].toString()}
            />
          </>
        )))
      }
    </>
  );
};

LoopObject.propTypes = {
  dataStr: PropTypes.string.isRequired,
};

const Coin = () => {
  const { name } = useParams();
  const { data, isFetching } = useGetCoinQuery(name);
  if (isFetching) return <Loading />;
  const coinData = data?.data?.coin;
  const coin = [
    {
      id: 1, short: true, title: 'Symbol', value: coinData.symbol,
    },
    {
      id: 2, short: false, title: 'About', value: <DropdownBtn header="About"><Htmlpraser content={coinData.description} /></DropdownBtn>,
    },
    {
      id: 3, short: true, title: 'Tags', value: coinData.tags.join(' , '),
    },
    {
      id: 4, short: true, title: 'Available Markets', value: coinData.numberOfMarkets,
    },
    {
      id: 5, short: true, title: 'Exchanges', value: coinData.numberOfExchanges,
    },
    {
      id: 6, short: true, title: 'Market Capitalization', value: coinData.marketCap,
    },
    {
      id: 7, short: true, title: 'Trading Volume', value: coinData['24hVolume'],
    },
    {
      id: 8, short: true, title: 'Price', value: coinData.price,
    },
    {
      id: 9, short: true, title: 'Price in Bitcoin', value: coinData.btcPrice,
    },
    {
      id: 10, short: false, title: 'Highest Price Ever', value: <DropdownBtn header="Highest Price Ever"><LoopObject dataStr={JSON.stringify(coinData.allTimeHigh)} /></DropdownBtn>,
    },
    {
      id: 11, short: true, title: 'Ranking', value: coinData.rank,
    },
    {
      id: 12, short: true, title: 'Tier', value: coinData.tier,
    },
    {
      id: 13, short: false, title: 'Useful Links', value: <DropdownBtn header="Useful Links">{coinData.links.map((link) => (<ShortShow height="50" key={link.name} header={link.name} content={link.url} />))}</DropdownBtn>,
    },
    {
      id: 14, short: true, title: 'Official Website', value: coinData.websiteUrl,
    },
  ];
  return (
    <>
      <div className="grid grid-cols-2 h-[300px] text-white color-theme-home">
        <div className="w-full flex items-center justify-center">
          <img src={coinData.iconUrl} alt="logo" className="object-contain h-[200px]" />
        </div>
        <div className="flex items-end p-5 justify-center flex-col">
          <div className="text-4xl font-body font-black tracking-wider ">
            {coinData.name}
          </div>
          <div className="break-words">
            {coinData.price}
          </div>
        </div>
      </div>
      <h3 className="text-2xl font-body font-black tracking-wider p-3 w-full bg-color2/100 text-white">Description</h3>
      <ul>
        {
        coin.map((item) => (
          <li key={item.id} className="text-white even:bg-color2/100 odd:bg-color2/80">
            {(item.short)
              ? <ShortShow header={item.title.toString()} height="70" content={item.value.toString()} />
              : item.value}
          </li>
        ))
       }
      </ul>
    </>
  );
};

export default Coin;
