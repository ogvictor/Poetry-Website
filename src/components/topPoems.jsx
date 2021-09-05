import React, { useState, useEffect } from "react";
import axios from "axios";
import Poem from "./poem/poem";

export default function TopPoems() {
  const [sortedPoems, setSortedPoems] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://wictor147poetryapi.herokuapp.com/api/poems/",
      params: {},
      headers: {
        bob: "Bobalooba",
      },
    }).then((res) => {
      const sortedPoems = res.data.sort((a, b) => {
        if (a.votes < b.votes) {
          return 1;
        } else if (a.votes > b.votes) {
          return -1;
        } else {
          return 0;
        }
      });
      setSortedPoems(sortedPoems);
    });
  }, []);

  return sortedPoems.length === 0 ? (
    <section className="poems">
      <h1>There is no poems yet, how about sharing the first one?</h1>
    </section>
  ) : (
    <section className="poems">
      {sortedPoems.map(({ _id, title, author, text, votes }) => (
        <Poem
          key={_id}
          id={_id}
          title={title}
          author={author}
          text={text}
          votes={votes}
        />
      ))}
    </section>
  );
}
