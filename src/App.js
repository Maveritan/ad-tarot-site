import React from 'react';
import rose from './centre_rose.svg';
import centre_text from './centre_rose_text.svg'
import './App.css';
import 'socicon/css/socicon.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <img src={rose} className="Rose rotates" alt="logo" />
          <img src={centre_text} className="Rose rotates" alt="logo" />
      </header>
        <footer className="App-footer gradient">
            <div>Software Developer -
            Melbourne, Australia</div>
            <div className="footer-right">
                {/*eslint-disable-next-line*/}
                <a href="https://twitter.com/Maveritan" className="socicon-twitter social"/>
                {/*eslint-disable-next-line*/}
                <a href="https://github.com/Maveritan" className="socicon-github social"/>
            </div>
        </footer>
    </div>
  );
}


export default App;
