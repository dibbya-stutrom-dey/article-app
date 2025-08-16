import React, { useState } from "react";

function App() {
  const [showAuthor, setShowAuthor] = useState(false);

  // Dummy data
  const [article, setArticle] = useState({
    title: "My First Article",
    content: "This is some sample content for the article.",
    author: "John Doe",
    selectedReaction: null,
  });

  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Author Name",
      date: "10 February 2025",
      text: "Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor",
      likes: 12,
      dislikes: 1,
      selectedReaction: null
    },
    {
      id: 2,
      author: "Author Name",
      date: "10 February 2025",
      text: "Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor",
      likes: 8,
      dislikes: 0,
      selectedReaction: null
    }
  ]);

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
          <div style={{ marginTop: "20px" }}>
            <p>Reactions:</p>
            {["Like", "Love", "Wow"].map((r) => (
              <button
                key={r}
                style={{
                  marginRight: "10px",
                  backgroundColor: article.selectedReaction === r ? "lightblue" : "white",
                }}
                onClick={() =>
                  setArticle({ ...article, selectedReaction: r })
                }
              >
                {r}
              </button>
            ))}
          </div>

        </div>
      )}
    </div>
  );
}

export default App;
