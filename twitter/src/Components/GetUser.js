import React, { useState } from "react";

const GetUser = ({ state, account }) => {
//   const [user, setUser] = useState([]);
  const [address, setAddress] = useState("");
  const [count, setCount] = useState();

  const [tweets, setTweets] = useState([]);

  const handleGetUser = async (e) => {
    e.preventDefault();
    const { contract } = state;
    const _address = address;
    const _count = parseInt(count);

    try {
      const response = await contract.methods.getLatestofUser(_address, _count).call();

      setTweets(response); // Assuming the response is an array of Tweet objects
    } catch (error) {
      console.error('Error while fetching user tweets:', error);
    }
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleCount = (e) => {
    setCount(e.target.value);
  };

  return (
    <div className="get-user-container">
      <h1>Gets User Latest Tweets (Individual)  </h1> 
      <form onSubmit={handleGetUser}>
        <label>
          Address of User:
          <input
            type="text"
            id="address"
            value={address}
            onChange={handleAddress}
            className="user-input"
          />
        </label>
        <label>
          No of Count :
          <input
            type="number"
            id="count"
            value={count}
            onChange={handleCount}
            className="count-input"
          />
        </label>
        <button className="get-user-button">Get User</button>
      </form>
      <div>
        <h5>Latest Tweets of this address: {address}</h5>
        <ul className="tweets-list">
          {tweets.map((tweet, index) => (
            <li key={index}>{tweet.content}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GetUser;
