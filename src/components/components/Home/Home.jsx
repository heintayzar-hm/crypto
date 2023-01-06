import { useState } from 'react';
import { useGetCoinsQuery } from '../../../redux/apiReducer/coinRanking';
import Coincard from '../CoinCard/CoinCard';
import DropDownSelect from '../DropdownBtn/DropDownSelect';
import Loading from '../Loading/Loading';

const sortBy = (coins, method, type = 'number', order = 'ascend') => {
  const sortStrAscend = (data, prop) => data.sort((a, b) => {
    if (a[prop] < b[prop]) {
      return -1;
    }
    if (a[prop] > b[prop]) {
      return 1;
    }
    return 0;
  });
  const sortStrDescend = (data, prop) => data.sort((a, b) => {
    if (a[prop] > b[prop]) {
      return -1;
    }
    if (a[prop] < b[prop]) {
      return 1;
    }
    return 0;
  });
  const sortNumAscend = (data, prop) => (coins.sort((a, b) => b[prop] - a[prop]));
  const sortNumDescend = (data, prop) => (coins.sort((a, b) => a[prop] - b[prop]));
  let sorted = [];
  if (order === 'ascend') {
    if (type === 'number') {
      sorted = sortNumAscend(coins, method);
    } else {
      sorted = sortStrAscend(coins, method);
    }
  } else if (type === 'number') {
    sorted = sortNumDescend(coins, method);
  } else {
    sorted = sortStrDescend(coins, method);
  }
  return (sorted);
};

function Home() {
  const [select, setSelect] = useState({
    id: 1,
    name: 'rank',
    type: 'number',
  });
  const { data, isFetching } = useGetCoinsQuery(10);
  if (isFetching) return <Loading />;
  const rawCoins = data?.data?.coins;
  const selectHandler = (selected) => { setSelect(selected); };
  const coins = sortBy([...rawCoins], select.name, select.type, 'ascend');
  return (
    <>
      <ul className="grid grid-cols-2 md:grid-cols-5">
        {(coins) ? coins.map((coin, index) => ((index === 0)
          ? (
            <>
              <Coincard key={coin.rank} coin={coin} rank={index + 1} />
              {' '}
              <div className="bg-color3 col-span-2 items-center grid grid-cols-10">

                <h2 data-testid="tester" className=" uppercase md:text-xl text-lg text-white font-body  col-span-6">
                  Top 10 CryptoCurrencies
                  {' '}
                </h2>
                {' '}
                <span className="items-center w-full xs:block hidden col-span-4 z-20">
                  <DropDownSelect selectHandler={selectHandler} />
                </span>
              </div>

            </>
          )
          : <Coincard key={coin.rank} coin={coin} rank={index + 1} />))
          : null}
      </ul>
    </>
  );
}

export default Home;
