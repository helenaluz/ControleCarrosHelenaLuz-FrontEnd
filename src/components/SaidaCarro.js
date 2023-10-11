import { useState } from "react";

export default function SaidaCarro(){

    const[placa, setPlaca] = useState("");
    const[condicional, setCondicional] = useState(false);
    const[valor, setValor] = useState(0.0)


    const urlPut = 'https://localhost:7262/api/Veiculo/checkout/';
    const urlGet = 'https://localhost:7262/api/Veiculo/placa/';

    function Liberar(){
        fetch(urlPut+placa, {
            method: 'PUT',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json', 
            },
            })
            .then((response) => {
                if (response.ok) pegarDados()
            })
            .catch((error) => {
                console.error('Ocorreu um erro na solicitação PUT:', error);
            });

        

        setCondicional(true);
        pegarDados()
    }

    function pegarDados(){
        fetch(urlGet + placa)
        .then((response) => {
            if (response.ok) return response.json();
            else  throw new Error("Erro na requisição GET");
        })
        .then((data) => {
            console.log(data)
            setValor(data.valorFinal)
        })
        .catch((error) => {
            console.error("Ocorreu um erro na requisição GET:", error);
        });
    }
    return(
        <div>
            <div class="card">
                <div class="card-header">
                    Liberar carro
                </div>
                <div class="card-body">
                    <h5 class="card-title">Placa</h5>
                    <p class="card-text">Insira a placa</p>
                    <div class="input-group input-group-lg">
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" onChange={(event) => setPlaca(event.target.value)}/>
                    </div>
                    <button type="button" class="btn btn-danger m-3" onClick={Liberar}>Liberar</button>
                </div>
            </div>

            {condicional && (
                <div>
                    <div class="card text-center">
                        <div class="card-header">
                            Pagamento
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Total á pagar</h5>
                            <p class="card-text">R$ {valor}</p>
                            <button type="button" class="btn btn-primary m-3" >Pagar</button>
                        </div>
                        <div class="card-footer text-body-secondary">
                  
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}