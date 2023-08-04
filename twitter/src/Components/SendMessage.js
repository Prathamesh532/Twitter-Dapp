import React, { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SendMessage = ({ state, account }) => {
    const [message, setMessage] = useState('');
    const [receiverAddress, setReceiverAddress] = useState('');
    const [messagesList, setMessagesList] = useState([]);
  
  const SendMessageHandle = async (e) => {
    e.preventDefault();
    const { contract } = state;
    const  _message = message;
    const _to = receiverAddress;
    await contract.methods
      .sendMessage(_message, _to)
      .send({ from: account, gas: 510000 });

      setMessagesList([...messagesList , _message])

      toast.success('Message Send successful!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
      });

      setReceiverAddress('')
      setMessage('')
  };

  const handleReceiverAddress = (e) => {
    setReceiverAddress(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="send-message">
    <h1>Send Message</h1>
    <form onSubmit={SendMessageHandle}>
      <label>
        Type Your Message...
        <input type="text" id="msg" placeholder="Enter Message" value={message} onChange={handleMessage} />
      </label>
      <label>
        To:
        <input type="text" id="to" placeholder="Address of Receiver" value={receiverAddress} onChange={handleReceiverAddress} />
      </label>
      <button>Send</button>
    </form>
    {/* Display the message history on the screen */}
    {/* <div className="message-history">
      <h4>Message History:</h4>
      <ul>
        {messagesList.map((msg, index) => (
          <li key={index}>
            <p>{msg}</p>
          </li>
        ))}
      </ul>
    </div> */}
  </div>
  );
};

export default SendMessage;
