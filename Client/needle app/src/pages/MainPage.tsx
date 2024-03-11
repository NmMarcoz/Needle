import "../styles/MainPageStyles.css";
import Button from "../Components/Button";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
}
interface ReqData {
  requestName: string;
  requestDescription: string;
  requestValue: number;
  requestDeadline: string;
  costumerId: number;
}

function MainPage() {
  const BASE_URL = "http://localhost:3001/costumer";
  const REQ_URL = "http://localhost:3001/request";
  //FORMDATA DO CLIENT ------------------------------//
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phoneNumber: "",
  });
  //FORMDATA DA REQUEST ----------------------------//
  const [ReqData, setReqData] = useState<ReqData>({
    requestName: "",
    requestDescription: "",
    requestValue: 0,
    requestDeadline: "",
    costumerId: 0,
  });

  //HANDLES DOS INPUTS
  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  //---------
  const handleRequestChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  
    setReqData({
      ...ReqData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="mainContainer">
      <div className = "lefBox">
        <div className="leftContainer">
          <div className="inputLeft">
            <a className="title"> Create Costumer.</a>
            <div className="clientInput">
              <a className="inputText"> name</a>
              <input
                className="inputBox"
                name="name"
                type="text"
                placeholder="type a name"
                value={formData.name}
                onChange={handleFormChange}
                required={true}
              />
              <a className="inputText"> email</a>
              <input
                className="inputBox"
                name="email"
                placeholder="type an email"
                type="email"
                value={formData.email}
                onChange={handleFormChange}
                required={true}
              />
              <a className="inputText"> phone number</a>
              <input
                className="inputBox"
                name="phoneNumber"
                placeholder="type a number"
                type="tel"
                value={formData.phoneNumber}
                onChange={handleFormChange}
                required={true}
              />
            </div>
            <Button url={BASE_URL} text="create" color={0} formData={formData} />
          </div>
        </div>
      </div>
      <div className="rightContainer">
        <div className="inputRight">
          <a className="altTitle"> Send a Request.</a>
          <div className="clientInput">
            <a className="altInputText"> request name</a>
            <input // Nome da request
              className="altInputBox"
              name = "requestName"
              type="text"
              value={ReqData.requestName || ''}
              onChange={handleRequestChange}
              placeholder="ex: cute dress"
              required={true}
            />
            <a className="altInputText"> request description</a>
            <input // Descrição da request
              name = "requestDescription"
              className="altInputBox"
              placeholder="ex: a cute dress with detailed yellow things"
              value={ReqData.requestDescription || ''}
              onChange={handleRequestChange}
            />
            <a className="altInputText"> request value</a>
            <input // Descrição da request
              name = "requestValue"
              className="altInputBox"
              placeholder="value of the request "
              value={ReqData.requestValue || ''}
              onChange={handleRequestChange}
            />
            <a className="altInputText"> request deadline</a>
            <input
              name = "requestDeadline"
              className="altInputBox"
              placeholder="ex: 22/09/2026"
              type="date"
              value={ReqData.requestDeadline || ''}
              onChange={handleRequestChange}
            />
            <a className="altInputText"> client Id</a>
            <input
              className="altInputBox"
              name = "costumerId"
              placeholder="grab the Id of the client that you want to link"
              required={true}
              value = {ReqData.costumerId || ''}
              onChange={handleRequestChange}
            />
          </div>
          <Button url={REQ_URL} text="send" color={1} formData={ReqData} />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
