import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  const ComponentOne = lazy(() => import('./components/ComponentOne'));
  const ComponentTwo = lazy(() => import('./components/ComponentTwo'));
  const ComponentThree = lazy(() => import('./components/ComponentThree'));
  const ErrorPage = lazy(() => import('./components/ErrorPage'))
  return (
    <Suspense fallback={<h1>Loading...</h1>} >
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path={'/'} element={<ComponentOne />} />
          <Route path={'/two'} element={<ComponentTwo />} />
          <Route path={'/three'} element={<ComponentThree />} />
          <Route path={'*'} element={<ErrorPage />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
