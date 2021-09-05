import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import Vote from "./poem/vote";

export default function SinglePoem() {
  const [poemInfo, setPoemInfo] = useState({});

  const { id } = useParams();
  useEffect(() => {
    axios({
      method: "get",
      url: `http://wictor147poetryapi.herokuapp.com/api/poems/${id}`,
      params: {},
      headers: {
        bob: "Bobalooba",
      },
    }).then((res) => setPoemInfo(res.data));
  }, [id]);

  const { title, author, text, votes } = poemInfo;
  return !title || !author || !text ? (
    <div>
      <h1>Couldn't find poem</h1>
      <a href="/">Main page</a>
    </div>
  ) : (
    <div className="single-poem">
      <h1>{title}</h1>
      <p>Written by {author}</p>
      <ReactMarkdown children={text} />
      <Vote voteCount={votes} />
    </div>
  );
}
