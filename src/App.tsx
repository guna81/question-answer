import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import ExamProvider from './context/ExamContext';
import Questions from './views/Questions';
import Answers from './views/Answers';

import './styles/root.scss';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Questions />,
  },
  {
    path: "answers",
    element: <Answers />,
  },
]);

function App() {
  return (
    <div className="App">
      <header>
        <h1>Exam Question & Answer</h1>
      </header>

      <ExamProvider>
        <RouterProvider router={router} />
      </ExamProvider>
    </div >
  );
}

export default App;
