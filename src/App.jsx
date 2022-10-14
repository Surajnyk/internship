import './App.css';
import Web3 from "web3"
import { useState, useEffect } from "react"

function App() {
const [account, setAccount] = useState()

const [balance, setBalance] = useState()

const [network, setNetwork] = useState()

const web3 = new Web3(Web3.givenProvider)

useEffect(()=>{
  loadAccounts()
}, [])

useEffect(()=> {
  loadBalance()
},[account])

async function loadAccounts(){
  
  const accounts = await web3.eth.requestAccounts();
 
  setAccount(accounts[0])
}

async function loadBalance(){
  
  const network =await web3.eth.net.getNetworkType()
 
  const balance =await web3.eth.getBalance(account)
  
  setNetwork(network)
  setBalance(balance)
}

return (
    <div className="App">
      <header className="App-header">
        Web3.React wallet App 
    <p>
        Connected Account : ({account})
    </p>
    <p>
      Current Balance ({network}) :
      ETH {(balance/1e18).toFixed(2)}
    </p>
       </header>
    </div>
  );
}

export default App;
