import React from 'react';
import data from './components/data';
import SingleQuestion from './components/Question';
function App() {
  return (
    <main>
        <div className="container">
            <h3>questions and answers about login</h3>
            <section className="info">
              {
                data.map(e=><SingleQuestion key={e.id} {...e}/>)
              }
            </section>
        </div>
    </main>
  );
}

export default App;
