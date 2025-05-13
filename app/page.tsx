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
        <h3>Training Resources:</h3>
        <ul>
          <li>
            <a href="https://aws.amazon.com/amplify/getting-started/">
              Amplify Basics Introduction
            </a>
          </li>
          <li>
              <a href = "https://may9dtraining.s3.us-east-1.amazonaws.com/amplify-api.pdf?response-content-disposition=inline&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLWVhc3QtMSJHMEUCIQCNxhm6Y2exM5y1MRvCDGv1sVAn6ISYiVNmDsokKfClyQIgfD5fwUQ1R0aVvWx76wGl%2BXStoo292I82A2OdEzApYWYq4QQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwzMzU4NzkwMjE0MzkiDKdoRRawPZJImVPXgiq1BDP1ugIRVYOE0d9IciRq11HbCVhMuMQF00cxyM5XWOeqiT7FyR7ltee4td2%2FVtDAl8OWy2EHUIsJ7YA2adYN0UN0TV1m3oWLsPwSF9J4J4wbX2MWWYXnph1GglHqL90zU4Wilzx0Wmky60gu8fHmwSevFrE4OfUvVdvnyd8S0dcb8xFma96B0%2Bl%2Bve8tIjn2RXeCT8qlZ1gYD8wStFqTttNvvSF5U2WOnF41MTPViewyoQ4sbp7ixydIDQSlVS0n9Fe6EUtBth77OVRN5lvasBoP%2B%2BBp4B5llRsKPlD%2F4j%2BvOkOGjgXzASWMm1eBY5bTj9D641XS%2Fli1HU4qoJFkoAClSqu21mDYvrl2ugZAQDQ8BnyJJ9WAHjskvJiNsskG6bijOZf%2BDx%2BAxOWqc2mZ2yNnkL3%2BEmQW6rlg9RhfZMqH0N%2Fg%2FjjDsPdm3PXzkL8dmSMg%2FQselW26MilYxPvtlavqV%2BXkOQM0Pi5ndZKrsYj5YgPvDh3mAsb%2FUXIlSYga9O%2FI3kvhFX%2FGG3Pgtr4gOhk9XRCp1X88RTQhgEYeIOJl1855CGMYEfvtkMia5Y2bsX22Y22aE5A1iuWaiZ3vco5hJEZpK4wuFxJhNYnFYvAlwS0KZ5HwmDhG4%2F5ZUkKnHy6foz0T6a%2FY5ALXu7UFBfjpgEl2lQ8tOj38hWOsO9JvkxFqRsgYRHReMY8oiYsFvGM1hRqV5%2B03bMI%2B3Yfa6EfBgrGe4h3Z2NqOY8yNSy0lYeVZFigwrcWNwQY6twIE0xYr0eXL4UEPh2xMiM5M7tmre8RZZmAXWT3UrBfCYJsCi%2Fdg%2FMG0eaJzfOGkZ7JGj3sad7cxVzuz4AnHJ3lqoHLjUVv4U9fdtynzPFYa7IPoiVk6iOyYenPAstYLZjdQDdkz%2B3%2BhCGpuNJen7XHPOb0btVmh5KJlShW%2BL5IeBc9IWiDl3H6PaNy9B98foXvasffytnngkBm5Cc4Y175U47%2B2vPPqZQVB9ubJNpy6I79r6dcghIGwKAjsN%2BfkpDesIRqCje%2FcVJofvgR01RhlFGld3XrIGuqdtkY3329LzyMmsJnNfUcV9k63ikSp5R7EBvGFhrqGzJo1oQsA1tGFAzexwq1DQgUspjNOyMBN3Y2s%2F8JoIE7B1Hk2ZG1J0haC5pV7OJFbj4h57j8NyUTManwf%2Bsms7Q%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAU4M7TEN7QR7OXBVG%2F20250513%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250513T181835Z&X-Amz-Expires=43200&X-Amz-SignedHeaders=host&X-Amz-Signature=debe069ac658c50703842bcb330afa4017c92bf8834b089959e5bc286d962a6b">
              Amplify User Guide
            </a>
          </li>
          <li>
            <a href="https://docs.amplify.aws/vue/build-a-backend/auth/set-up-auth/">
              AWS Amplify Authentication Guide
            </a>
          </li>
          <li>
            <a href="https://docs.amplify.aws/react/build-a-backend/storage/use-with-custom-s3/">
              Data Modeling with Amplify
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
