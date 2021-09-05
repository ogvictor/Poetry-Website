import React, { useState } from "react";
import axios from "axios";

export default function Vote(props) {
  const [isVoted, setIsVoted] = useState(false);
  const [votes, setVotes] = useState(props.voteCount);

  function AddVote() {
    //HTTP REQUEST
    axios({
      method: "put",
      url: `http://wictor147poetryapi.herokuapp.com/api/poems/${props.id}`,
      params: {},
      headers: {
        bob: "Bobalooba",
      },
    });

    //Increment Vote Count
    let v = votes;
    setVotes(v + 1);
    setIsVoted(true);
  }

  return (
    <div>
      <span
        className="clickable"
        onClick={() => {
          !isVoted && AddVote();
        }}
      >
        {isVoted ? "🧡" : "🤍"}
      </span>
      <span>{votes}</span>
    </div>
  );
}
