import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import EntradaCarro from './components/EntradaCarro';
import SaidaCarro from './components/SaidaCarro';
import CadastroPreco from './components/CadastroTabelaPreco';
import VerPreco from './components/VerTabelaPreco';
import CarrosEsatcionados from './components/VerCarrosEstacionados';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index: true,
        element: <EntradaCarro/>
      },
      {
        path:"/LiberaCarro",
        element: <SaidaCarro/>
      },
      {
        path:"/CadastroPreco",
        element: <CadastroPreco/>
      },
      {
        path:"/VerPreco",
        element: <VerPreco/>
      },
      {
        path:"/Estacionados",
        element: <CarrosEsatcionados/>
      },
    ]
  },
  
 
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
