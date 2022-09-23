import React from 'react';
import './App.css';
import LearnUseState from './Components/LearnUseState';
import LearnUseReducer from './Components/LearnUseReducer';
import LearnUseEffect from './Components/LearnUseEffect';
import LearnUseRef from './Components/LearnUseRef';
import LearnUseLayoutEffect from './Components/LearnUseLayoutEffect';
import LearnUseImperativeHandle from './Components/LearnUseImperativeHandle';
import LearnUseContext from './Components/LearnUseContext';
import LearnUseMemo from './Components/LearnUseMemo';
import LearnUseCallback from './Components/LearnUseCallback';

function App() {

  return (
    <div className="App">
      <LearnUseState/>
      <LearnUseReducer/>
      <LearnUseEffect/>
      <LearnUseRef/>
      <LearnUseLayoutEffect/>
      <LearnUseImperativeHandle/>
      <LearnUseContext/>
      <LearnUseMemo/>
      <LearnUseCallback/>
    </div>
  );
}

export default App;
