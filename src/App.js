import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import QuestionContextProvider from "./context/QuestionContext";
import Question from "./components/Question";
import Result from "./components/Result";
import {ToastContainer} from "react-toastify";
import Container from 'react-bootstrap/Container';


function App() {
  return (
      <Container className="p-3">
          <ToastContainer/>
          <QuestionContextProvider>
              <Question/>
              <Result/>
          </QuestionContextProvider>
      </Container>
  );
}

export default App;
