import "./App.css";
import Web3 from "web3";
import { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
import Twitter from "../src/contract/Twitter.json";
import Tweets from "./Components/Tweets";
import SendMessage from "./Components/SendMessage";
import Follow from "./Components/Follow";
import GetLatesttweet from "./Components/GetLatesttweet";
import GetUser from "./Components/GetUser";
import Following from "./Components/Following";
import Allow from "./Components/Allow";
import DisAllow from "./Components/DisAllow";
import SendMessageByOperator from "./Components/SendMessageByOperator";

function App() {
  const [state, setState] = useState({
    web3: null,
    contract: null,
  });
  //state
  const [account, setAccount] = useState("Not connected");

  //state 
  const [balance,setBalance]= useState(0)
  useEffect(() => {
    const tempalte = async () => {
      const provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");
      const web3 = new Web3(provider);
      const newtworkID = await web3.eth.net.getId();
      const deployNetwork = Twitter.networks[newtworkID];

      const contract = new web3.eth.Contract(
        Twitter.abi,
        deployNetwork.address
      );
      setState({ web3: web3, contract: contract });
    };
    console.log();
    tempalte();
  }, []);


  useEffect(() => {
    const { web3 } = state;
    const allAccounts = async () => {
      var select = document.getElementById("selectNumber");
      var options = await web3.eth.getAccounts();

      for (var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
      }
    };
    web3 && allAccounts();
  }, [state]);


  // displaying selected account on state 
  const selectAccount = async () => {
    let selectedAccountAddress = document.getElementById("selectNumber").value;

    if (selectedAccountAddress && selectedAccountAddress !== "Choose an account") {
      setAccount(selectedAccountAddress);
    }
  };

  useEffect(()=>{
    const {web3} = state;
    const getBalance = async () => {
      if(account !== "Not connected"){
        const balanceWie = await web3.eth.getBalance(account);
        const balanceEther = await web3.utils.fromWei(balanceWie , "ether");
        setBalance(balanceEther)
      }
    }
    web3 && getBalance() 
  },[state ,account])


  return (
    <div className="App">
      <header className="App-header">
        <h1>Twitter Dapp</h1>
        <p className="font">Connected Account: {account}</p>
        <p className="font">Available Funds: {balance} ETH</p>
        <form className="label0" id="myForm">
          <label htmlFor=""></label>
          <select
            className="innerBox"
            id="selectNumber"
            onChange={selectAccount}
          >
            <option align="center">Choose an account</option>
          </select>
        </form>

        
        <Tweets state={state}  account={account} />
        <SendMessage state={state}  account={account} />
        <SendMessageByOperator state={state}  account={account} />
        <Follow state={state}  account={account} />
        <GetLatesttweet state={state}  account={account} />
        <GetUser state={state}  account={account} />
        <Following state={state}  account={account} />
        <Allow state={state}  account={account} />
        <DisAllow state={state}  account={account} />
        

      </header>
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar={true} />
    </div>
  );
}

export default App;
