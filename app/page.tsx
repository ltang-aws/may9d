"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  function listTodos() {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }

  useEffect(() => {
    listTodos();
  }, []);

  function createTodo() {
    client.models.Todo.create({
      content: window.prompt("Todo content"),
    });
  }

  return (
    <main>
      <h1>My todos</h1>
      <button onClick={createTodo}>+ new</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/">
          Review next steps of this tutorial.
        </a>
      </div>

      {/* Training Resources */}
      <div className="training-resources">
        <h3>Additional Training Resources:</h3>
        <ul>
          <li>
            <a href="https://aws.amazon.com/amplify/getting-started/">
              Amplify Basics Introduction
            </a>
          </li>
          <li>
            <a href="https://may9dtraining.s3.us-east-1.amazonaws.com/amplify-api.pdf?response-content-disposition=inline&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLWVhc3QtMSJHMEUCIQDolypsg31hd2UWIWHYUFwKQtpLp27iQMAvq5b%2FEHP5FQIgbefWSFywoqioC%2FMAx6vqe1UigNm55expokT2lKW2StMq4QQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwzMzU4NzkwMjE0MzkiDN%2BkwIR1sfKZXdzSkiq1BI7iOkhh9WbZn2R2nY5SXFfUIVUndMXJSNGIWx60i00wfcE3VQXKtVw9J8OBQX%2BbxkWacAhUQXDcCiFxXBV8WsLMUiqKGT48A%2BJKJMBwsDbF%2BJ6mBzjB908JDwpaATQS%2BoZGvfn%2B6Dkye6N3gokd4xmHCG91V%2FKGY0cSQhjyzKOfUlPZcbn5RycHX2d7CVax4b5Y0pepOXzCUA0BoUebt%2BxVs3elVOeGYEr8fyZmy5V5Ql7y7lGmtR5RIIKo1%2FluwDtD8cp%2Be50iuUUDnxHy7yb2233tqyQ0W3mYuZT6%2BRJrsCqeTChtCmCBuue37QrRpKU53vY0jBUh%2BezeyX76wLEeMNbp1ka1ZbZ7lMa39p9HLtvvrEfBQROI2vMsjQlftu5x4e60o7GUZKWuSjlY5%2FADfGzGn0YO97pTXC0XoFo4s598mINkDaDBqjtRlr19whyFiZ7dhV0R0QrXAdNcAEEtXe98QqXAp2ex%2B1tpFXwNpaLFWWiaN6TY%2BkPZVeptNII6Ji%2FcenTWwShL%2FVKbgZsZU3e27ZKjQ86oKW5hSyURt6P%2F0YHc2xOXVgzf9CYFtJFDMpPt7NlBLS%2FacJsXujsSUmuDRtgYqbp1MdCbvRtggEP0gvhWdjKlket54e92Ijn27ALVQSBHm2DU5lWYZo9fVA65y8aEh26sjChOieBW%2BQ8zIuICFFzLPjDZIsuLP%2FitfTz7fbc1eSkccXjjVPFfXVpE5W%2FQb7mUDIcLkUeABKUc9KIwrcWNwQY6twIqDdHTpFBy7TFj4DCAYvHmvA20SMsgPPUpHgh%2FwOGWnq1XpYaVNUC9SyKcnyqiUsrQ2GQMcn9aluWPEBies2cN9yG%2BrTuvvZ8EK3UtnCwyzta8TY6sPhIxGI2UniK4HFwwXXPvfOvo1gT7sgTYUMcFEngTJjzR4Nx2qKWXDB7gHpQ%2FRQT3Wy3WHrfXrMuljS9gpHEQCejFaQngjREFpY21u7zYzHMGf28suov0LWoxXZ7OFFfoPD7JClrEqujHWMnHuJUvLp0PskFHZrM7W4vfIYKOvx4cmQASfvgLxO0%2FjzmTGulwnHqqczPBVk1HKAQhztzK%2BRVMdrCvrptmFcofRN7Th4VKD61j5e8ft4B911tjZUQ5fcZv6yyBi3ps39XzfKwAk3waiPSozIv%2Bsf062F%2F5YqAPBw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAU4M7TEN7TP6QLOUZ%2F20250513%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250513T162918Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=97e3d7e392fc5cf1e444e99489f1f89e4680464ab921fe8d63483c1e266272c6">
              React Fundamentals
            </a>
          </li>
          <li>
            <a href="s3://aws-training/aws-amplify-auth/authentication.pdf">
              AWS Amplify Authentication Guide
            </a>
          </li>
          <li>
            <a href="s3://aws-training/data-modeling/basics.pdf">
              Data Modeling with Amplify
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
