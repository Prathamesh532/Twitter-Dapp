import React , {useState , useEffect} from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Follow = ({ state, account }) => {

    const [address, setAddress] = useState('')
    const [followersList, setFollowersList] = useState([]);

    useEffect(() => {
        // Fetch the followers list for the specified address when the component mounts
        const fetchFollowersList = async () => {
          try {
            const { contract } = state;
            const followers = await contract.methods.following(address).call();
            setFollowersList(followers);
          } catch (error) {
            console.error('Error while fetching followers list:', error);
          }
        };
    
      }, [state, address]);



    const handleFollow = async (e) => {
        e.preventDefault();
        const {contract} = state;
        const _address = address;
        await contract.methods.follow(_address).send({from: account, gas: 510000})


        toast.success('successfully Follow!', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: true,
          });

          setAddress('');
    }

    const handleAddress = (e) => {
        setAddress(e.target.value)
    }

  return (
    <div className="follow-container">
    <h1>Follow Other</h1>
    <form onSubmit={handleFollow}>
      <label htmlFor="address">Address</label>
      <input
        type="text"
        id="address"
        placeholder="Who you want to Follow"
        value={address}
        onChange={handleAddress}
      />
      <button className="follow-button">Follow</button>
    </form>
    <div>
      <h4>Followers for {address}</h4>
      <ul className="followers-list">
        {followersList.map((follower, index) => (
          <li key={index}>{follower}</li>
        ))}
      </ul>
    </div>
  </div>
  )
}

export default Follow
