import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GetLatesttweet = ({ state, account }) => {
  const [numberOfTweet, setNumberOfTweet] = useState(0);
  const [latestTweets, setLatestTweets] = useState([]);

  const handleLastestTweet = async (e) => {
    e.preventDefault();
    const { contract } = state;
    try {
      const _noOfTweet = Number(numberOfTweet); // Convert to regular number
      const latestTweets = await contract.methods.getLatestTweets(_noOfTweet).call();

      // Convert the BigInt values to regular numbers
      const formattedTweets = latestTweets.map((tweet) => ({
        id: Number(tweet.id),
        author: tweet.author,
        content: tweet.content,
        createdAt: Number(tweet.createdAt),
      }));

      setLatestTweets(formattedTweets); // Store the fetched tweets in state
    } catch (err) {
      toast.error('Error while fetching tweets!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
      });
    }
  };

  const handleInputChange = (e) => {
    setNumberOfTweet(parseInt(e.target.value));
  };

  return (
    <div className="get-latest-tweet">
    <h1>Get Latest Tweet</h1>
    <form onSubmit={handleLastestTweet}>
      <label>
        Latest Number of Tweets
        <input type="number" id="tweets" value={numberOfTweet} onChange={handleInputChange} />
      </label>
      <button>Get Tweets</button>
    </form>
    {/* Display the latest tweets on the screen */}
    <div className="latest-tweets">
      <h5>Latest Tweets:</h5>
      <ul>
        {latestTweets.map((tweet) => (
          <li key={tweet.id}>
            <p>Author: {tweet.author}</p>
            <p>Content: {tweet.content}</p>
            <p>Created At: {new Date(tweet.createdAt * 1000).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
  );
};

export default GetLatesttweet;
