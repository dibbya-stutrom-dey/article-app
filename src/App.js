import React, { useState } from "react";

function App() {
  const [showAuthor, setShowAuthor] = useState(false);

  // Dummy data
  const [article, setArticle] = useState({
    title: "Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor",
    content: "Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor",
    author: "Author Name",
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
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const [allComments, setAllComments] = useState({
    1: comments,
    2: [
      {
        id: 3,
        author: "Another Author",
        date: "9 February 2025",
        text: "Page 2 comment - Lorem Ipsum Dolor Lorem Ipsum Dolor",
        likes: 5,
        dislikes: 2,
        selectedReaction: null
      }
    ],
    3: [
      {
        id: 4,
        author: "Third Author",
        date: "8 February 2025",
        text: "Page 3 comment - Lorem Ipsum Dolor",
        likes: 15,
        dislikes: 0,
        selectedReaction: null
      }
    ]
  });

  const author = {
    name: article.author,
    image: "https://media.gettyimages.com/id/495401712/photo/good-morning-america-author-of-contemporary-horror-stephen-king-is-a-guest-on-good-morning.jpg?s=612x612&w=0&k=20&c=LBOphofMBRqYHC6LTsci7wzf64GlQhITNQuBUvDv9tI=", // placeholder image
  };
  const handleCommentReaction = (commentId, reaction) => {
    const updatedAllComments = { ...allComments };
    updatedAllComments[currentPage] = allComments[currentPage].map(comment =>
      comment.id === commentId
        ? { ...comment, selectedReaction: reaction }
        : comment
    );
    setAllComments(updatedAllComments);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {showAuthor ? (
        <div style={{ textAlign: "center", padding: "40px" }}>
          <h2>Author Profile</h2>
          <img
            src={author.image}
            alt="author"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              marginBottom: "20px",
              border: "3px solid #ddd"
            }}
          />
          <h3 style={{ margin: "10px 0", color: "#333" }}>{author.name}</h3>
          <p style={{ color: "gray", marginBottom: "30px" }}>Article Author</p>
          <button
            onClick={() => setShowAuthor(false)}
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Back to Article
          </button>
        </div>
      ) : (
        <div>
          <p style={{ color: "gray", fontSize: "14px", marginBottom: "10px" }}>Section > Sub-section</p>

          <h1>{article.title}</h1>

          <img
            src="https://image.free-apply.com/gallery/l/uni/gallery/lg/1005000002/1d7b451f29f5882282693a553d91fdf3974db89b.jpg?s=640"
            alt="Article Image"
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              marginBottom: "20px"
            }}
          />
          <p>{article.content}</p>
          <div style={{ display: "flex", alignItems: "center", margin: "20px 0" }}>
            <div style={{
              width: "40px",
              height: "40px",
              backgroundColor: "#4169E1",
              borderRadius: "50%",
              marginRight: "10px"
            }}></div>
            <div>
              <span
                style={{ color: "blue", cursor: "pointer", fontWeight: "bold" }}
                onClick={() => setShowAuthor(true)}
              >
                {article.author}
              </span>
              <p style={{ margin: 0, fontSize: "12px", color: "gray" }}>7 January 2025</p>
            </div>
          </div>
          <div style={{ marginBottom: "30px" }}>
            <div style={{ display: "flex", gap: "20px" }}>
              {[
                { name: "Like", percentage: "20%" },
                { name: "Love", percentage: "60%" },
                { name: "Angry", percentage: "5%" },
                { name: "Sad", percentage: "5%" }
              ].map((reaction) => (
                <div key={reaction.name} style={{ textAlign: "center" }}>
                  <button
                    style={{
                      padding: "10px 15px",
                      border: "1px solid #ccc",
                      backgroundColor: article.selectedReaction === reaction.name ? "#e6f3ff" : "white",
                      cursor: "pointer",
                      borderRadius: "5px"
                    }}
                    onClick={() =>
                      setArticle({ ...article, selectedReaction: reaction.name })
                    }
                  >
                    {reaction.name}
                  </button>
                  <p style={{ margin: "5px 0", fontSize: "12px" }}>{reaction.percentage}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: "30px", backgroundColor: "#f0f0f0", padding: "20px" }}>
            <h3>20 Comments</h3>

            <div style={{ marginBottom: "20px", display: "flex", alignItems: "center" }}>
              <input
                type="text"
                placeholder="Write your comment..."
                style={{
                  flex: 1,
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  marginRight: "10px"
                }}
              />
              <button style={{
                padding: "10px 15px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px"
              }}>
                →
              </button>
            </div>

            {allComments[currentPage].map((comment) => (
              <div key={comment.id} style={{ marginBottom: "15px", backgroundColor: "white", padding: "15px" }}>
                <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                  <div style={{
                    width: "30px",
                    height: "30px",
                    backgroundColor: "#4169E1",
                    borderRadius: "50%",
                    marginRight: "10px"
                  }}></div>
                  <div>
                    <p style={{ margin: 0, fontWeight: "bold" }}>{comment.author}</p>
                    <p style={{ margin: 0, fontSize: "12px", color: "gray" }}>{comment.date}</p>
                  </div>
                  <div style={{ marginLeft: "auto" }}>
                    <span style={{ color: "blue", cursor: "pointer", fontSize: "12px" }}>Report</span>
                  </div>
                </div>
                <p>{comment.text}</p>
                <div style={{ marginTop: "10px" }}>
                  <button
                    style={{
                      marginRight: "10px",
                      backgroundColor: comment.selectedReaction === "like" ? "lightgreen" : "white",
                      border: "1px solid #ccc",
                      padding: "5px 10px"
                    }}
                    onClick={() => handleCommentReaction(comment.id, "like")}
                  >
                    Like {comment.likes}
                  </button>
                  <button
                    style={{
                      backgroundColor: comment.selectedReaction === "dislike" ? "lightcoral" : "white",
                      border: "1px solid #ccc",
                      padding: "5px 10px"
                    }}
                    onClick={() => handleCommentReaction(comment.id, "dislike")}
                  >
                    Dislike {comment.dislikes}
                  </button>
                  <button
                    style={{
                      marginLeft: "10px",
                      backgroundColor: "white",
                      border: "1px solid #ccc",
                      padding: "5px 10px",
                      color: "blue"
                    }}
                  >
                    Reply
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                style={{
                  margin: "0 5px",
                  padding: "5px 10px",
                  backgroundColor: currentPage === page ? "blue" : "white",
                  color: currentPage === page ? "white" : "black",
                  border: "1px solid #ccc"
                }}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
          </div>

        </div>
      )}
    </div>
  );
}

export default App;
