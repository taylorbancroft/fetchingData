import './App.css';
import List from './components/List.js';
import WithListLoading from './components/withListLoading';
import React, { useEffect, useState } from 'react';

function App() {
  const ListLoading = WithListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null
  });

  useEffect(() =>{
    setAppState({loading:true});
    const URL = "https://api.github.com/users/hacktivist123/repos";
    fetch(URL)
      .then(response => response.json())
      .then((repos)=>{
        setAppState({loading:false, repos:repos});
      });
  },[setAppState]);

  return (
    <div className="App">
      <div className="container">
        <h1>My Repositories</h1>
      </div>
      <div className="repo-container">
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
    </div>
  );
}

export default App;
