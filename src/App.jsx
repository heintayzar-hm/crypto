import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/pages/Home';

function App() {
  return (
    <Layout>
      <Routes path="/">
        <Route path="Home" index element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
