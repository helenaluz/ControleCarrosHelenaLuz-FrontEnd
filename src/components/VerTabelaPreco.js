import { useEffect, useState } from "react";

export default function VerPreco(){
    const [preco, setPreco] = useState([])
    const url = "https://localhost:7262/api/Preco/"

    function getData(){
        fetch(url)
        .then(data => data.json())
        .then(response =>setPreco(response))
        .catch(error => console.log(error))
    }

    function deleteData(id) {
        fetch(url+id, {
          method: 'DELETE',
          headers: {'Content-Type': 'application/json'}
     })
       .then(() => getData()) }

    function formatarData(data) {
        const dataObj = new Date(data);
        const dia = dataObj.getDate();
        const mes = dataObj.getMonth() + 1;
        const ano = dataObj.getFullYear();
        return `${dia}/${mes}/${ano}`;
      }

    useEffect(getData)

    return (
        <div>
          <div className="card m-4">
            <div className="card-body">
              <h4 className="card-title">Tabela de preços</h4>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Valor Inicial</th>
                    <th scope="col">Valor Adicional</th>
                    <th scope="col">Início</th>
                    <th scope="col">Fim</th>
                    <th scope="col">Ação</th>
                  </tr>
                </thead>
                <tbody>
                  {preco.map((x) => (
                    
                        <tr key={x.id}>
                        <td>{x.valorHora}</td>
                        <td>{x.valorAdicional}</td>
                        <td>{formatarData(x.validadeInicio)}</td>
                        <td>{formatarData(x.validadeFim)}</td>
                        <td>
                            <button type="button" className="btn btn-danger btn-sm " onClick={() => deleteData(x.id)}> Excluir  </button>
                        </td>
                        </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    };


