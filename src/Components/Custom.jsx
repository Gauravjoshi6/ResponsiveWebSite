import React from 'react';
import './Custom.css'; // Ensure you import the CSS file

function Custom(props) {
  return (
    <div className='Custom'   data-aos='zoom-in'
    data-aos-duration='1000'>
      <img src={props.img} alt={props.name} />
      <h4>{props.name}</h4>
      <h6>{props.Detail}</h6>
      <h6>{props.Detail2}</h6>
    </div>
  );
}

function AiPowered() {
  return (
    <div className='Chatbot'
   
    >
      <Custom 
        img='/assets/chatbot.png'
        name='AI-Powered Writing'
        Detail='Generate high-quality content with'
        Detail2='advanced AI technology.'
      />
      <Custom 
        img='/assets/genre.png'
        name='Custom Genres'
        Detail='Create stories in any genre or'
        Detail2='blend multiple styles.'
      />
      <Custom 
        img='/assets/download.png'
        name='Instant Download'
        Detail='Get your completed book in'
        Detail2='various formats instantly.'
      />
      <Custom 
        img='/assets/language.png'
        name='Multilingual'
        Detail='Generate content in multiple'
        Detail2='languages effortlessly.'
      />
    </div>
  );
}

export default AiPowered;
