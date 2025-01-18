import React, { useState } from "react";

function App() {
  // Initialize the dictionary state
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ]);

  // State for the search term and result
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState("");

  // Function to handle the search
  const handleSearch = () => {
    // Perform a case-insensitive search
    const wordFound = dictionary.find(
      (entry) => entry.word.toLowerCase() === searchTerm.toLowerCase()
    );

    // Set the result based on whether the word was found
    if (wordFound) {
      setResult(wordFound.meaning);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>XDictionary</h1>
      <div>
        <input
          type="text"
          placeholder="Search a word..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: "8px", width: "200px", marginRight: "10px" }}
        />
        <button
          onClick={handleSearch}
          style={{ padding: "8px 15px", cursor: "pointer" }}
        >
          Search
        </button>
      </div>
      <div style={{ marginTop: "20px", fontSize: "18px" }}>
        {result && <p>{result}</p>}
      </div>
    </div>
  );
}

export default App;
