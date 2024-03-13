import "../styles/CostumerPageStyles.css";
import Button from "../Components/Button";
//import { useState } from "react";

function CostumerPage() {
  const BASE_URL = "http://localhost:3001/costumer";
  return (
    <>
      <div>
        <header>
          <nav>
            <div className="nav-container">
              <div className="nav-text">
                <span>Início</span>
                <span>Clientes</span>
                <span>Pedidos</span>
              </div>
            </div>
          </nav>
        </header>
        <main>
          <section className="left-section">
            <div className="left-container">
              <div className="costumer-input">
                <h1>Cadastrar Cliente.</h1>
                <div className="input-container">
                  <a className="inputText"> Nome</a>
                  <input
                    className="inputBox"
                    name="name"
                    type="text"
                    placeholder="ex: jonas miguel"
                  />
                </div>
                <div className="input-container">
                  <a className="inputText"> Email</a>
                  <input
                    className="inputBox"
                    name="email"
                    placeholder="ex: jonasmiguel@gmail.com"
                    type="email"
                  />
                </div>
                <div className="input-container">
                  <a className="inputText"> Telefone </a>
                  <input
                    className="inputBox"
                    name="phoneNumber"
                    placeholder="ex: 9898989898"
                    type="tel"
                  />
                </div>
              </div>
              <Button url={BASE_URL} text="Criar" color={0} />
            </div>
          </section>

          <section className="right-section">
            <div className="right-container">
              <div className="request-input">
                <h1>Fazer um pedido</h1>
                <div className="input-container">
                  <a className="altInputText"> Nome do pedido</a>
                  <input // Nome da request
                    className="altInputBox"
                    name="requestName"
                    type="text"
                    placeholder="ex: cute dress"
                  />
                </div>
                <div className="input-container">
                  <a className="altInputText"> Descrição do pedido</a>
                  <input // Descrição da request
                    name="requestDescription"
                    className="altInputBox"
                    placeholder="ex: a cute dress with detailed yellow things"
                  />
                </div>
                <div className="input-container">
                  <a className="altInputText"> Data de entrega</a>
                  <input
                    name="requestDeadline"
                    className="altInputBox"
                    placeholder="ex: 22/09/2026"
                    type="date"
                  />
                </div>
                <div className="input-container">
                  <a className="altInputText"> ID do cliente</a>
                  <input
                    className="altInputBox"
                    name="costumerId"
                    placeholder="grab the Id of the client that you want to link"
                  />
                </div>
              </div>
              <Button url={BASE_URL} text="Enviar" color={1} />
            </div>
          </section>
        </main>
     
      </div>
    </>
  );
}

export default CostumerPage;
