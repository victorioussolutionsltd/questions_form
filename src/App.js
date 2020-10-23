import React, { useEffect, useState } from 'react';
import './App.css';
import QuestionForm from './components/QuestionForm';
import { getConfig } from "./MockedConfig"

function App() {

  const [config, setConfig] = useState(null);
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    setConfig(getConfig());
  }, [])

  const formSubmitted = (values) => {
    console.log(values)
  }

  return (
    <div className="App">
      <header className="App-header">
        <QuestionForm
          open={showModal}
          onClose={() => { }}
          questions={config?.questions}
          submitted={formSubmitted}
        />
      </header>
    </div>
  );
}

export default App;
