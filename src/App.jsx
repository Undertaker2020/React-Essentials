import reactImg from "./assets/react-core-concepts.png"

import { CORE_CONCEPTS } from "./data"
const reactDescriptions = ['Fundamental', 'Crucial', 'Core']

function genRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max + 1));
}

function CoreConcept({title, description, image, key}) {
    return (
        <li key={key}>
            <img src={image} alt={title}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    )
}

function App() {
  return (
    <div>
        <Header />
      <main>
          <section id="core-concepts">
              <h2>Core Concepts</h2>
              <ul>
                  {CORE_CONCEPTS.map((item, index) => (
                      <CoreConcept
                          key={index}
                          {...item}
                      />
                  ))}

              </ul>
          </section>

      </main>
    </div>
  );
}

import React from 'react';

function Header() {
    const description = reactDescriptions[genRandomInt(2)];
    return (
        <header>
            <img src={reactImg} alt="Stylized atom"/>
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    );
}

export default App;
