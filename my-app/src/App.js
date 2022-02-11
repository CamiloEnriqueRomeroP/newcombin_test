import "./App.css";
import React, { useRef } from "react";
import axios from "axios";

const App = () => {

  const firstName = useRef();
  const lastName = useRef();
  const address = useRef();
  const SSN1 = useRef();
  const SSN2 = useRef();
  const SSN3 = useRef();

  const SSN = `${SSN1}+-+${SSN2}+-+${SSN3}`;


  const reset = () => {
    firstName.current.value = "";
    lastName.current.value = "";
    address.current.value = "";
    SSN1.current.value = "";
    SSN2.current.value = "";
    SSN3.current.value = "";
    setDisable(false);
  };

  const [disable, setDisable] = React.useState(false);

   const handleText = () => {

    if (firstName.current.value.length < 1) {
      setDisable(true);
      alert("Complete the first name");
    }
    if (lastName.current.value.length < 1) {
      setDisable(true);
      alert("Complete the last name");
    }
    if (address.current.value.length < 1) {
      setDisable(true);
      alert("Complete the address");
    }
    if (
      SSN1.current.value.length < 3 ||
      SSN2.current.value.length < 2 ||
      SSN3.current.value.length < 4
    ) {
      setDisable(true);
      alert("Complete the SSN code");
    }
  };

  function maxLengthCheck(object) {
    if (object.target.value.length > object.target.maxLength) {
      object.target.value = object.target.value.slice(
        0,
        object.target.maxLength
      );
    }
  }


function addEntry ({ firstName, lastName, address, ssn}) {
  axios.get("http://localhost:8081/auth",
    {data: {username:'sarah', password:'connor'}}
    // headers:{origin: 'localhost'}}
  ).then( res => {
    const token = res.data.token;
    axios.post("http://localhost:8081/api/members",
    {header: {authorization: `Bearer +${token}`},
    data:{firstName: firstName, lastName: lastName, address: address,ssn:ssn }})
  })
}


  return (
    <div className="Main">
      <div className="entrada">
        First name: &nbsp;&nbsp;
        <input ref={firstName} type="text" placeholder="First name" />
      </div>
      <div className="entrada">
        Last name: &nbsp;&nbsp;
        <input ref={lastName} type="text" placeholder="Last name" />
      </div>
      <div className="entrada">
        Address: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input ref={address} type="text" placeholder="Address" />
      </div>
      <div className="entrada">
        SSN: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          ref={SSN1}
          type="number"
          maxLength="3"
          placeholder="###"
          onInput={maxLengthCheck}
          style={{ width: "60px" }}
        />
        -
        <input
          type="number"
          ref={SSN2}
          maxLength="2"
          placeholder="##"
          onInput={maxLengthCheck}
          style={{ width: "60px" }}
        />
        -
        <input
          ref={SSN3}
          maxLength="4"
          type="number"
          placeholder="####"
          onInput={maxLengthCheck}
          style={{ width: "60px" }}
        />
      </div >
      <div className="entrada">
        <button onClick={reset}>Reset</button>
        <button onClick={handleText} disabled={disable}>
          Send
        </button>
        <button onClick={addEntry}>Add Entry</button>
      </div>
      <div></div>
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <th>SSN</th>
        </tr>
        <tr>
        </tr>
      </table>
    </div>
  );
};

export default App;
