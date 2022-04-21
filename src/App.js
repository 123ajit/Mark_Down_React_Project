import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./styles.css";

export default function App() {
  const [markdown, setMarkdown] = useState("# markdown preview");

  return (
    <main>
      <section className="markdown">
        <textarea
          className="input"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article className="result">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}
