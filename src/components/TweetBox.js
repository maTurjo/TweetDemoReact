import { useState } from "react";


export const TweetBox = () => {

  const [tweetArray, settweetArray] = useState([]);

  var currentTweet = "";

  const deleteLast = () => {
    var localcopy = [...tweetArray];
    localcopy.pop();
    settweetArray([...localcopy]);
  }

  const addtoArray = (e) => {
    console.log(e.target.value);
    settweetArray([...tweetArray, currentTweet]);
  }
  return (
    <div className='d-flex px-5 w-100 '>
      <div className="w-50">
        <textarea className="form-control" id="" placeholder='Write Something' rows="3" onChange={(e) => currentTweet = e.target.value}></textarea>
        <div className='text-start'>
          <input onClick={(e) => { addtoArray(e) }} className='btn btn-primary mt-2' type="submit" value="Tweet ! " />
        </div>
        <div className='text-start'>
          <input onClick={deleteLast} className='btn btn-danger mt-2' type="button" value="Delete Last Tweet " />
        </div>
      </div>
      <div className="w-50">
        {tweetArray.map((item) => {
          return <h1>{item}</h1>
        })}
      </div>
    </div>
  )
}
