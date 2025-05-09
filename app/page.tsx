"use client";

import { useState } from "react";
import "./../app/app.css";

interface TrainingMaterial {
  id: string;
  title: string;
  url: string;
  category: string;
}

export default function App() {
  const [materials] = useState<TrainingMaterial[]>([
    {
      id: "1",
      title: "AWS Fundamentals",
      url: "https://aws.amazon.com/getting-started/",
      category: "Cloud Computing"
    },
    {
      id: "2",
      title: "React Documentation",
      url: "https://reactjs.org/docs/getting-started.html",
      category: "Frontend Development"
    },
    {
      id: "3",
      title: "TypeScript Handbook",
      url: "https://www.typescriptlang.org/docs/",
      category: "Programming Languages"
    },
    // Add more training materials as needed
  ]);

  const categories = [...new Set(materials.map(material => material.category))];

  return (
    <main className="container">
      <h1 className="title">Training Materials</h1>
      
      {categories.map(category => (
        <div key={category} className="category-section">
          <h2 className="category-title">{category}</h2>
          <ul className="materials-list">
            {materials
              .filter(material => material.category === category)
              .map(material => (
                <li key={material.id} className="material-item">
                  <a 
                    href={material.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="material-link"
                  >
                    {material.title}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </main>
  );
}
