import React, { useState } from "react";
import axios from "axios";

export default function SharePoem() {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [text, setText] = useState();
  const [errormsg, setErrormsg] = useState();

  function addPoem() {
    if (!title || !author || !text) {
      setErrormsg("All fields are required.");
      return;
    }

    axios({
      method: "post",
      url: "http://wictor147poetryapi.herokuapp.com/api/poems/",
      headers: {
        bob: "Bobalooba",
      },
      data: {
        title,
        author,
        text,
      },
    }).then((res) => window.location.replace(`/poem/${res.data._id}`));
  }
  return (
    <section>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="share-poem"
        method="POST"
      >
        <h1>Share a poem</h1>
        <div className="form-field">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="text">Poem</label>
          <textarea
            name="text"
            id="text"
            cols="30"
            rows="10"
            placeholder="Use Markdown"
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <a href="https://www.markdownguide.org/cheat-sheet/">
            <small>About Markdown</small>
          </a>
        </div>
        <div className="form-field">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <small style={{ color: "red" }}>{errormsg}</small>
        <button onClick={addPoem} type="submit">
          Share
        </button>
      </form>
    </section>
  );
}
