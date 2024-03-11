import "../styles/CostumerPageStyles.css"
import Button from "../Components/Button";
//import { useState } from "react";

function CostumerPage() {
  const BASE_URL = "http://localhost:3001/costumer";
  return (
    <>
      <div>
        <header></header>
        <main>
          <section className="left-section">
            <div className="left-container">
              <div className="costumer-input">
                <h1>Cadastrar Cliente.</h1>
                <div className  = "input-container">
                  <a className="inputText"> Nome</a>
                  <input
                    className="inputBox"
                    name="name"
                    type="text"
                    placeholder="type a name"
                  />
                </div>
                <div className="input-container">
                  <a className="inputText"> Email</a>
                  <input
                    className="inputBox"
                    name="email"
                    placeholder="type an email"
                    type="email"
                  />
                </div>
                <div className="input-container">
                  <a className="inputText"> Telefone </a>
                  <input
                    className="inputBox"
                    name="phoneNumber"
                    placeholder="type a number"
                    type="tel"
                  />
                </div>
              </div>
              <Button url={BASE_URL} text="create" color={0} />
            </div>
          </section>

          <section className="right-container">
            <div className="request-input">
              <a>Request name</a>
              <div className="clientInput">
                <a className="altInputText"> request name</a>
                <input // Nome da request
                  className="altInputBox"
                  name="requestName"
                  type="text"
                  placeholder="ex: cute dress"
                />
                <a className="altInputText"> request description</a>
                <input // Descrição da request
                  name="requestDescription"
                  className="altInputBox"
                  placeholder="ex: a cute dress with detailed yellow things"
                />
                <a className="altInputText"> request value</a>
                <input // Descrição da request
                  name="requestValue"
                  className="altInputBox"
                  placeholder="value of the request "
                />
                <a className="altInputText"> request deadline</a>
                <input
                  name="requestDeadline"
                  className="altInputBox"
                  placeholder="ex: 22/09/2026"
                  type="date"
                />
                <a className="altInputText"> client Id</a>
                <input
                  className="altInputBox"
                  name="costumerId"
                  placeholder="grab the Id of the client that you want to link"
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default CostumerPage;
