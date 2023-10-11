import { useState } from "react";

export default function EntradaCarro() {
  const [placa, setPlaca] = useState("");
  const [condicional, setCondicional] = useState(false);

  const url = 'https://localhost:7262/api/Veiculo';

  function adcCarro() {
    const dataEntrada = new Date().toISOString();
    const veiculoData = {
        placa: placa,
        dataEntrada: dataEntrada,
    };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(veiculoData),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => {
        if (response.ok)  console.log(response);
        else  throw new Error("Erro na requisição POST");
      })
      .then((json) => {
        console.log("Veículo cadastrado com sucesso:", json);
        setCondicional(true);
      })
      .catch((error) => {
        console.error("Ocorreu um erro ao cadastrar o veículo:", error);
      });
  }

  return (
    <div>
      <div className="card d-flex justify-content-center m-5">
        <div className="card-body">
          <h5 className="card-title">Placa</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">Insira a placa do veículo</h6>
          <div className="input-group input-group-lg">
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
              value={placa}
              onChange={(event) => setPlaca(event.target.value)}
            />
          </div>
          <div className="m-3 d-flex justify-content-between">
            <button type="button" className="btn btn-primary" onClick={adcCarro}>Adicionar</button>
            <button type="button" className="btn btn-secondary">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
