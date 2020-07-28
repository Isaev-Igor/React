import React from 'react';
import './App.css';
// Components
import Header from '../../components/Header/Header';
import Form from "../../components/Form/Form";
import Main from "../../components/Main/Main";
import Search from "../../components/Search/Search";



function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <Search />
      <Main />
    </div>
  );
}

export default App;
