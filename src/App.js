import "./styles.css";
import React, { useState } from "react";
import { evaluate } from "mathjs";

export default function App() {
  const [answer, setAnswer] = useState(0);
  const [question, setQuestion] = useState("");
  /* functions will go here */

  function clear() {
    setAnswer(0);
    setQuestion("");
  }

  function addToQuestion() {
    setQuestion(question + event.target.value);
  }

  function backspaceQuestion() {
    setQuestion(question.substring(0, question.length - 1));
  }

  function workOut() {
    setAnswer(evaluate(question));
  }
  return (
    /* jsx will go here */
    <body>
      <div className="welcome">
        <h1>Welcome to my React Calculator App</h1>
        <h2>With this, you don't have to calculator, you can calcunow!</h2>
      </div>
      <div className="frame">
        <div className="display" id="display">
          <div id="question">{question}</div>
          <div id="answer">{answer}</div>
        </div>

        <div className="keys">
          <button className="key" id="clear" onClick={clear}>
            AC
          </button>
          <button className="key" id="backspace" onClick={backspaceQuestion}>
            C
          </button>
          <button className="key" id="divide" onClick={addToQuestion} value="/">
            /
          </button>
          <button
            className="key"
            id="multiply"
            onClick={addToQuestion}
            value="*"
          >
            X
          </button>
          <button className="key" id="number" onClick={addToQuestion} value="7">
            7
          </button>
          <button className="key" id="number" onClick={addToQuestion} value="8">
            8
          </button>
          <button className="key" id="number" onClick={addToQuestion} value="9">
            9
          </button>
          <button
            className="key"
            id="subtract"
            onClick={addToQuestion}
            value="-"
          >
            -
          </button>
          <button className="key" id="number" onClick={addToQuestion} value="4">
            4
          </button>
          <button className="key" id="number" onClick={addToQuestion} value="5">
            5
          </button>
          <button className="key" id="number" onClick={addToQuestion} value="6">
            6
          </button>
          <button className="key" id="number" onClick={addToQuestion} value="+">
            +
          </button>
          <button className="key" id="add" onClick={addToQuestion} value="1">
            1
          </button>
          <button className="key" id="number" onClick={addToQuestion} value="2">
            2
          </button>
          <button className="key" id="number" onClick={addToQuestion} value="3">
            3
          </button>
          <button className="key" id="equals" onClick={workOut}>
            =
          </button>
          <button
            className="key"
            id="number0"
            onClick={addToQuestion}
            value="0"
          >
            0
          </button>
          <button
            className="key"
            id="decimal"
            onClick={addToQuestion}
            value="."
          >
            .
          </button>
          <button
            className="key"
            id="subtract"
            onClick={addToQuestion}
            value="-"
          >
            -
          </button>
        </div>
      </div>
    </body>
  );
}
