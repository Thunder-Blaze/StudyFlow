import React from "react";
import StudentPortal from "./components/StudentPortal";
import CourseInstructors from "./components/CourseInstructors";
// import { useState } from 'react'
// import '@material/web/button/filled-button.js';
// import '@material/web/button/outlined-button.js';
// import '@material/web/checkbox/checkbox.js';
// import '@material/web/switch/switch.js';
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <StudentPortal />
        <CourseInstructors/>
      </div>
      {/* <label>
        Material 3
        <md-checkbox checked></md-checkbox>
      </label>

      <md-outlined-button>Back</md-outlined-button>
      <md-filled-button>Next</md-filled-button>
      <br />
      <md-switch icons></md-switch>

      <md-switch icons show-only-selected-icon></md-switch>

      <md-switch></md-switch> */}
    </>
  )
}

export default App
