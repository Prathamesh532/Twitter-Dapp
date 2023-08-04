import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Allow = ({ state, account }) => {
  const [operator, setOperator] = useState("");

  const OperatorFunc = async (e) => {
    e.preventDefault();
    const { contract } = state;
    const _address = operator;
    const res = await contract.methods
      .allow(_address)
      .send({ from: account, gas: 500000 });

    setOperator(res);
    toast.success("Premission Given!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
    });
    setOperator("");
  };

  const handleOperator = (e) => {
    setOperator(e.target.value);
  };
  return (
    <div className="allow-container" >
      <h1>Allow </h1>
      <form onSubmit={OperatorFunc}>
        <label>
          Address of Operator
          <input
            type="text"
            name="address"
            value={operator}
            onChange={handleOperator}
          />
        </label>
        <button>Give Permission</button>
      </form>
    </div>
  );
};

export default Allow;
