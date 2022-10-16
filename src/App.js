import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import './App.css';
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import { productsAndCartLoader } from './loaders/productsAndCartLoader';

function App() {
  const route = createBrowserRouter([
    {
      path: '/', element: <Main></Main>,
      children: [
        { path: '/',loader:() => fetch('products.JSON'), element: <Shop></Shop> },
        { path: 'orders',loader:productsAndCartLoader, element: <Orders></Orders> },
        { path: '/about', element: <About></About> },
      ]
    },
   

  ]);
  return (
    <div>
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
