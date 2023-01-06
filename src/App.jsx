import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import CoinPage from './components/pages/CoinPage';
import HomePage from './components/pages/HomePage';

function App() {
  return (
    <Layout>
      <Routes path="/">
        <Route path="home" index element={<HomePage />} />
        <Route path="coin/:name" element={<CoinPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
