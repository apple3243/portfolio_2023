import React from 'react';
import './App.scss';
import Profile from './asset/Profile';
import About from './asset/About';
import Portfolio from './asset/Portfolio';
import Contact from './asset/Contact'

function App() {
  return (
    <>
      <div className="wrapper">
      <script
  type="text/javascript"
  src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js">
</script>
        <Profile></Profile>
        <About></About>
        <Portfolio></Portfolio>
        <Contact></Contact>
      </div>
    </>
  );
}

export default App;
