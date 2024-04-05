import React, { useState, useEffect } from "react";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

const XSpellCheck = () => {
  const [text, setText] = useState("");
  const [correction, setCorrection] = useState("");

  useEffect(() => {
    checkSpelling();
  }, [text]);

  const checkSpelling = () => {
    const words = text.toLowerCase().split(/\s+/);
    for (const word of words) {
      if (customDictionary[word]) {
        setCorrection(`Did you mean: ${customDictionary[word]}?`);
        return;
      }
    }
    setCorrection("");
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1>Spell Check & Auto-Correction</h1>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter text..."
        rows={6}
        cols={50}
      ></textarea>
      {correction && <p>{correction}</p>}
    </div>
  );
};

export default XSpellCheck;
