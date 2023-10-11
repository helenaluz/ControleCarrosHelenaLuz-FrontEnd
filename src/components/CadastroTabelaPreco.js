import { useState } from "react";

export default function CadastroPreco(){

    const[inicial, setInicial] = useState(0);
    const[adicional, setAdcional] = useState(0);
    const[inicio, setInicio] = useState();
    const[fim, setFim] = useState();

    const url = "https://localhost:7262/api/Preco"

    function adcPreco(){
        const precoData = {
            validadeInicio: inicio,
            validadeFim: fim,
            valorHora: inicial,
            valorAdicional: adicional
        };

        fetch(url, {
            method: "POST",
            body: JSON.stringify(precoData),
            headers: {
              "Content-Type": "application/json"
            }
          })
            .then((response) => {
              if (response.ok)  console.log(response);
              else  throw new Error("Erro na requisição POST");
            })
            .then((json) => {
              console.log("Preço cadastrado com sucesso:", json);
            })
            .catch((error) => {
              console.error("Ocorreu um erro ao cadastrar o veículo:", error);
            });
    };

    return(
        <div class="m-3">
            <div class="card text-center">
                <div class="card-header">
                    Adicionando novo preco
                </div>
                <div class="card-body">
                    <h5 class="card-title">Valor inicial</h5>
                    <div class="input-group mb-3">
                        <span class="input-group-text">$</span>
                        <span class="input-group-text">0.00</span>
                        <input type="text" class="form-control"  onChange={(event) => setInicial(event.target.value)}/>
                    </div>
                    <h5 class="card-title">Valor adicional</h5>
                    <div class="input-group mb-3">
                        <span class="input-group-text">$</span>
                        <span class="input-group-text">0.00</span>
                        <input type="text" class="form-control" onChange={(event) => setAdcional(event.target.value)} />
                    </div>
                    <h5 class="card-title">Validade</h5>
                    <div class="input-group mb-3">
                    <span class="input-group-text">Inicio</span>
                    <input type="date" class="form-control" placeholder="Inicio" onChange={(event) => setInicio(event.target.value)}/>
                    <span class="input-group-text">Fim</span>
                    <input type="date" class="form-control" placeholder="Fim" onChange={(event) => setFim(event.target.value)}/>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={adcPreco}>Adicionar</button>
                </div>
                <div class="card-footer text-body-secondary">
                    2 days ago
                </div>
            </div>
        </div>
    );
}