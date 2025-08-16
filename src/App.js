import React, { useState } from "react";

function App() {
  const [showAuthor, setShowAuthor] = useState(false);

  // Dummy data
  const article = {
    title: "My First Article",
    content: "This is some sample content for the article.",
    author: "John Doe",
  };

  const author = {
    name: article.author,
    image: "https://via.placeholder.com/150", // placeholder image
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {showAuthor ? (
        <div>
          <h2>Author Page</h2>
          <img src={author.image} alt="author" />
          <p>{author.name}</p>
          <button onClick={() => setShowAuthor(false)}>Back to Article</button>
        </div>
      ) : (
        <div>
          <h1>{article.title}</h1>
          <p>{article.content}</p>
          <p>
            Author:{" "}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => setShowAuthor(true)}
            >
              {article.author}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
