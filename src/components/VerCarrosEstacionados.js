import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function CarrosEstacionados() {

  const [veiculos, setVeiculos] = useState([]);


  const url = "https://localhost:7262/api/Veiculo/estacionados";


  function getData() {
    fetch(url)
      .then((data) => data.json())
      .then((response) => setVeiculos(response))
      .catch((error) => console.log(error));
  }

  useEffect(getData);

  
  return (
    <div>
      <div class="card m-3">
        <div class="card-body">
          <h4 class="card-title">Veículos Estacionados</h4>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Placa</th>
                <th scope="col">Ação</th>
              </tr>
            </thead>
            <tbody>
              {veiculos.map((x) => (
                <tr key={x.id}>
                  <td>{x.placa}</td>
                  <td>
                  <Link className='btn btn-danger btn-sm m-1' to="/LiberaCarro">Liberar</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
