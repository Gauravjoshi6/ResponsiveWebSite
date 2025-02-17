import React from 'react'
// import HowPart1 from './HowPart1'
function HowItWork(props) {
  return (
    <div className='Generator my-6'>
   <img src={props.img}/>
      <h4>{props.name}</h4>
      <p><i>{props.Detail}</i></p>
      <a href='#'>Read More</a>
    </div>
  )
}

function Book(){

  return(
    <>
    <div className='write '>
    <div className='Write-para'>
      <h3>Sample Books Generated by BookAI</h3>
      <p>Explore some of the captivating books created using our AI technology.</p>
    </div>
    <div className='aiBook'  >
      <div className='Good' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
    <HowItWork
     img='./assets/img3.jpg'
     name='Science Fiction'
     Detail='"As Dr. Elara stepped through the shimmering portal
     , she knew there was no turning back. The fate of two 
     universes now rested in her hands..."'
     
    />
    </div>
<div  className='Good'data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
<HowItWork
     img='./assets/img4.webp'
     name='Mystery'
     Detail='"The old lighthouse stood silent,
      its beacon long extinguished. But on foggy nights,
       some swore they could still see its ghostly light..."'
    />
    </div>
<div  className='Good'data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
<HowItWork
     img='./assets/img5.jpg'
     name='Fantasy'
     Detail='"The ancient prophecy spoke of a 
     child born with starlight in their eyes. 
     As the comet blazed overhead, the kingdom held its breath..."'
    />
    </div>
</div>
    </div>



    </>
  )
}


export default Book;