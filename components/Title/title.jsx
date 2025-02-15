import React from 'react';
import './title.css';

const Title = ({ subTitle, title, spanElement }) => {
  return (
    <div className='title'>
     
      <h2>{title} <span>{spanElement}</span></h2>
      <p>{subTitle}</p>
      
      
    </div>
  );
};

export default Title;
