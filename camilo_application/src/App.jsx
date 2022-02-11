import React, { useRef } from "react";
// import { List } from "./components/List";

const App = () => {
//   const KEY = "arrayApp.arrays";

  const firstName = useRef();
  const lastName = useRef();
  const address = useRef();
  const SSN1 = useRef();
  const SSN2 = useRef();
  const SSN3 = useRef();

//   const [arrays, setArrays] = useState([
//     { id: 1, task: "Tarea 1", completed: false },
//   ]);

//   const arrayTaskRef = useRef();

    const SSN =`${SSN1}+-+${SSN2}+-+${SSN3}`;   

// {´{this.state.SSN1}+"-"+{this.state.SSN2}+"-"+{this.state.SSN3}´};

//   useEffect(() => {
//     const storedArrays = JSON.parse(localStorage.getItem(KEY));
//     if (storedArrays) {
//       setArrays(storedArrays);
//     }
//     localStorage.setItem(KEY, JSON.stringify(arrays));
//   }, []);

//   useEffect(() => {
//     localStorage.setItem(KEY, JSON.stringify(arrays));
//   }, [arrays]);

//   const toggleArray = (id) => {
//     const newArrays = [...arrays];
//     const array = newArrays.find((array) => array.id === id);
//     arrays.completed = !array.completed;
//     setArrays(newArrays);
//   };

//   const handleArrayAdd = () => {
//     const fName = firstName.current.value;
//     const lName = lastName.current.value;
//     const ad = address.current.value;
//     const snn = SSN.current.value;

//     if (fName === "") return;
//     if (lName === "") return;
//     if (ad === "") return;
//     if (snn === "") return;

//     setArrays((prevArrays) => {
//       return [...prevArrays, { fName, lName,ad }];
//     });

//     // firstName.current.value = null;
//   };

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

  //firstName.current.value.length < 1 || lastName.current.value.length < 1 || address.current.value.length < 1
  const handleText = () => {
    // handleArrayAdd ();
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

  return (
    <div>
      <div>
        First name: &nbsp;&nbsp;
        <input ref={firstName} type="text" placeholder="First name" />
      </div>
      <div>
        Last name: &nbsp;&nbsp;
        <input ref={lastName} type="text" placeholder="Last name" />
      </div>
      <div>
        Address: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input ref={address} type="text" placeholder="Address" />
      </div>
      <div>
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
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={handleText} disabled={disable}>
        Send
      </button>
      <div>
      {/* <Fragment>
        <List arrays={arrays} toggleArray={toggleArray} />
        <input ref={arrayTaskRef} type="text" placeholder="Nueva Tarea" />
        <button onClick={handleArrayAdd}></button>
        <div>
          Te quedan {arrays.filter((array) => !array.completed).length} tareas
          por terminar
        </div>
      </Fragment> */}
      </div>
    </div>
  );
};

export default App;
