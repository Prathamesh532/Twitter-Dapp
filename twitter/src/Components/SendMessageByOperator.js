// import React, { useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const SendMessageByOperator = ({state ,  account}) => {
//   const [message, setMessage] = useState("");
//   const [receiverAddress, setReceiverAddress] = useState("");
//   const [senderAddress , setSenderAddress] = useState("")
//   const [messagesList, setMessagesList] = useState([]);

//   const SendMessageOperator = async (e) => {
//     e.preventDefault();
//     const { contract } = state;
//     const _message = message;
//     const _from = senderAddress;
//     const _to = receiverAddress;
//     await contract.methods
//       .sendMessage(_from , _to , _message)
//       .send({ from: account, gas: 510000 });

//     setMessagesList([...messagesList, _message]);

//     toast.success("Message Send successful!", {
//       position: "top-right",
//       autoClose: 2000,
//       hideProgressBar: true,
//     });

//     setReceiverAddress("");
//     setSenderAddress("")
//     setMessage("");
//   };

//   const handleReceiverAddress = (e) => {
//     setReceiverAddress(e.target.value);
//   };

//   const handleSenderAddress = (e) => {
//     setSenderAddress(e.target.value);
//   };

//   const handleMessage = (e) => {
//     setMessage(e.target.value);
//   };

//   return (
//     <div className="send-message" onSubmit={SendMessageOperator}>
//       <h1>Send Message By Operator</h1>
//       <form onSubmit={SendMessageOperator}>
//         <label>
//         From:
//           <input
//             type="text"
//             id="to"
//             placeholder="Address of Sender"
//             value={senderAddress}
//             onChange={handleSenderAddress}
//           />
//         </label>
//         <label>
//           To:
//           <input
//             type="text"
//             id="to"
//             placeholder="Address of Receiver"
//             value={receiverAddress}
//             onChange={handleReceiverAddress}
//           />
//         </label>
//         <label>
//           Type Your Message...
//           <input
//             type="text"
//             id="msg"
//             placeholder="Enter Message"
//             value={message}
//             onChange={handleMessage}
//           />
//         </label>
//         <button>Send</button>
//       </form>
//     </div>
//   );
// };

// export default SendMessageByOperator;


import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SendMessageByOperator = ({ state, account }) => {
  const [message, setMessage] = useState("");
  const [receiverAddress, setReceiverAddress] = useState("");
  const [senderAddress, setSenderAddress] = useState("");
  const [messagesList, setMessagesList] = useState([]);

  const SendMessageOperator = async (e) => {
    e.preventDefault();
    const { contract } = state;
    const _message = message;
    const _from = senderAddress;
    const _to = receiverAddress;

    try {
      await contract.methods.sendMessage(_from ,_to, _message).send({ from: _from , gas:500000 });
      setMessagesList([...messagesList, _message]);
      toast.success("Message Sent successfully!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
      });
    } catch (error) {
      toast.error("Failed to send message.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
      });
    }

    setReceiverAddress("");
    setSenderAddress("");
    setMessage("");
  };

  const handleReceiverAddress = (e) => {
    setReceiverAddress(e.target.value);
  };

  const handleSenderAddress = (e) => {
    setSenderAddress(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="send-message">
      <h1>Send Message By Operator</h1>
      <form onSubmit={SendMessageOperator}>
        <label>
          From:
          <input
            type="text"
            id="from"
            placeholder="Address of Sender"
            value={senderAddress}
            onChange={handleSenderAddress}
          />
        </label>
        <label>
          To:
          <input
            type="text"
            id="to"
            placeholder="Address of Receiver"
            value={receiverAddress}
            onChange={handleReceiverAddress}
          />
        </label>
        <label>
          Type Your Message...
          <input
            type="text"
            id="msg"
            placeholder="Enter Message"
            value={message}
            onChange={handleMessage}
          />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default SendMessageByOperator;
