import { useQuery } from '@tanstack/react-query';
import { fetchData } from './querys';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Componente1 from './componente1';
import Componente2 from './componente2';
import Componente3 from './componente3';


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Componente1 />} />
        <Route path='/2' element={<Componente2 />} />
        <Route path='/3' element={<Componente3 />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
