import React , {useState , useEffect} from 'react'


const Following = ({state  , account}) => {
    const [address , setAddress] = useState("")
    const [number , setNumber] = useState("")
    const [follwer , setFollwer] = useState([])

    // useEffect(()=>{
        const {contract} = state;
        const follwerButtoon = async (e) => {
            e.preventDefault();
            const _address = address;
            const _number = number;
            try {
                // Call the mapping function from your contract
                const response = await contract.methods.following(_address,_number).call();
                console.log('Mapping data:', response);
                setFollwer(response)

               
              } catch (error) {
                console.error('Error calling mapping function:', error);
              }
        }
    // })

    const handleAddresslist = (e) => {
        setAddress(e.target.value)
    }

    const handleNumberlist = (e) => {
        setNumber(e.target.value)
    }

  return (
    <div  className="following-container">
      <h1>Following List</h1>
      <form onSubmit={follwerButtoon}>
        <label>Address : 
            <input type="text" id="add" value={address} onChange={handleAddresslist} />
        </label>
        <label>Number of : 
            <input type="number" id="no" value={number} onChange={handleNumberlist} />
        </label>
        <button>Get Following List</button>
      </form>
      <div className="follower-list">
        <p>{follwer}</p>
      </div>
    </div>
  )
}

export default Following
