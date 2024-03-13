import "../styles/CostumerPageStyles.css";
import Button from "../Components/Button";
import React, { useState } from "react";
//import { useState } from "react";

function CostumerPage() {
  const COSTUMER_URL = "http://localhost:3001/costumer";
  const REQUEST_URL = "http://localhost:3001/request"

  interface clientFormInterface {
    name: string;
    email: string;
    phoneNumber: string;
  }
  interface reqFormInterface {
    requestName: string;
    requestDescription: string;
    requestDeadline: string;
    costumerId: number;
  }

  const [clientForm, setClientForm] = useState<clientFormInterface>({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const [reqForm, setReqForm] = useState<reqFormInterface>({
    requestName: "",
    requestDescription: "",
    requestDeadline: "",
    costumerId: 0,
  });

  const handleClientChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClientForm({
      ...clientForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleRequestChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReqForm({
      ...reqForm,
      [event.target.name]: event.target.value,
    });
  };

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
                    value={clientForm.name}
                    onChange={handleClientChange}
                  />
                </div>
                <div className="input-container">
                  <a className="inputText"> Email</a>
                  <input
                    className="inputBox"
                    name="email"
                    placeholder="ex: jonasmiguel@gmail.com"
                    type="email"
                    value={clientForm.email}
                    onChange={handleClientChange}
                  />
                </div>
                <div className="input-container">
                  <a className="inputText"> Telefone </a>
                  <input
                    className="inputBox"
                    name="phoneNumber"
                    placeholder="ex: 9898989898"
                    type="tel"
                    value={clientForm.phoneNumber}
                    onChange={handleClientChange}
                  />
                </div>
              </div>
              <Button
                url={COSTUMER_URL}
                text="Criar"
                color={0}
                formData={clientForm}
              />
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
                    value={reqForm.requestName}
                    onChange={handleRequestChange}
                  />
                </div>
                <div className="input-container">
                  <a className="altInputText"> Descrição do pedido</a>
                  <input // Descrição da request
                    name="requestDescription"
                    className="altInputBox"
                    placeholder="ex: a cute dress with detailed yellow things"
                    value={reqForm.requestDescription}
                    onChange={handleRequestChange}
                  />
                </div>
                <div className="input-container">
                  <a className="altInputText"> Data de entrega</a>
                  <input
                    name="requestDeadline"
                    className="altInputBox"
                    placeholder="ex: 22/09/2026"
                    type="date"
                    value={reqForm.requestDeadline}
                    onChange={handleRequestChange}
                  />
                </div>
                <div className="input-container">
                  <a className="altInputText"> ID do cliente</a>
                  <input
                    className="altInputBox"
                    name="costumerId"
                    placeholder="grab the Id of the client that you want to link"
                    value={reqForm.costumerId}
                    onChange={handleRequestChange}
                  />
                </div>
              </div>
              <Button url={REQUEST_URL} text="Enviar" color={1} formData={reqForm} />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default CostumerPage;
