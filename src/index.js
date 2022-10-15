import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Search from './questions/Search';
import Counter from './questions/Counter';
import AccordionList from './questions/Accordion/AccordionList';
import Slider from './questions/ImageSlider.js/Slider';
import Checkbox from './questions/Checkbox';
import LoginForm from './questions/Login/LoginForm';
import Login from './questions/Login/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Search/>
  // <Counter/>
  // <AccordionList/>
  // <Slider/>
  // <Checkbox/>
  <Login />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
