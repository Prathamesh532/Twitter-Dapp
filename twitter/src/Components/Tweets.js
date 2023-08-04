import React ,{useState} from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Tweets = ({ state, account }) => {

  const [tweetContent , setTweetContent] = useState('')
  const [tweetList , setTweetList] = useState([])



  const handleTweet = async (e) => {
    e.preventDefault();
    const { contract } = state;
    const content = document.getElementById('tweet').value; // Removed the '#' symbol
    console.log(content);
    await contract.methods.tweet(content).send({ from: account , gas:510000 });

    setTweetList([...tweetList, content])

    toast.success('Tweet successful!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: true,
    });

    setTweetContent('');

  };

  return (
    <div className="tweets-container">
    <h1>Tweet Here</h1>
    <input type='text' id='tweet' value={tweetContent} onChange={(e) => setTweetContent(e.target.value)} />
    <button onClick={handleTweet}>Tweet</button>
    <ul className="tweets-list">
      {tweetList.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
  );
};

export default Tweets;
