import React, { useState } from "react";

function App() {
  const [question, setQuestion] = useState("");
  const [error, setError] = useState(null);
  const [memeUrl, setMemeUrl] = useState("");

  const fetchQuestion = async () => {
    try {
      const response = await fetch(
        "https://api.question.charisios.com/question"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch question");
      }
      const data = await response.json();
      setQuestion(data.question);
      setError(null);
      setMemeUrl(
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjFrdWpqeXhsem9kMzhmMGp2NDBwb3E5cWZ4YXBseDM0bzl3dTJnMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HlRnAWXxn0MhKLK/giphy.gif"
      );
    } catch (error) {
      setError("Error fetching question");
      console.error(error);
    }
  };

  return (
    <div className="App">
      {memeUrl && <img className="meme" src={memeUrl} alt="Meme" />}
      <h1>Random Question Generator</h1>
      <p>Made by Charisios C.</p>
      <button className="btn" onClick={fetchQuestion}>
        Get Question
      </button>
      {error && <p className="text-error">{error}</p>}
      {question && <p className="response">{question}</p>}
      <p>
        Want to support the project? Donate{" "}
        <a href="https://plisio.net/donate/qFOx0Jzc">here</a>.
      </p>
    </div>
  );
}

export default App;
