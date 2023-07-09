import React, { useState } from "react";
import axios from "axios";
export default function ChatGPT() {
  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState("");
  const HTTP = "http://localhost:8080/chat";

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${HTTP}`, { prompt })
      .then((res) => {
        setReply(res.data);
        // console.log(prompt);
      })
      .catch((error) => {
        console.log(error);
      });

    setPrompt("");
  };

  const handlePrompt = (e) => {
    setPrompt(e.target.value);
  };

  const dataSubmit = async (e,data) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/responses', data);
      
      console.log(response);
      alert('Data added to the database successfully!');
    } catch (error) {
      // Handle any errors
      
    }
  };
  const handledataSubmit = (e) => {
    const data = { reply: reply };
    dataSubmit(e, data);
  };

  return (
    <div className="container container-sm p-1">
      {" "}
      <h1 className="title text-center text-darkGreen">ChatGPT Model</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          
          <label htmlFor="">Ask questions</label>
          <input
            className="shadow-sm"
            type="text"
            placeholder="Enter text"
            value={prompt}
            onChange={handlePrompt}
          />
        </div>{" "}
        {/* <button className="btn btn-accept w-100" type="submit">
          Go
        </button> */}
      </form>
      <div className="bg-darkGreen  mt-2 p-1 border-5">
        <p className="text-light">
          {reply ? reply : "Ask me anything..."}
        </p>
        <button className="db-button" onClick={handledataSubmit}>Send to Database</button>
      </div>
    </div>
  );
}