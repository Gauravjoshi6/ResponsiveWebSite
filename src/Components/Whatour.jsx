import React from 'react'

function Whatour() {
  return (
    <>
    <div className='Completed'>
    <div className='User'>
        <h4>What Our Users Say</h4>
    <div className='What'>
    <div className='Sarah' data-aos='fade-right'
    data-aos-duration='1000'>
        <p>"BookAI revolutionized my writing process. I completed my 
            <br/>debut novel in just two weeks!"</p>
            <h5>- Sarah J., Author</h5>
    </div>
    
    <div className='Sarah' data-aos='fade-left'
    data-aos-duration='1000'>
        <p>"The AI-generated ideas helped me overcome writer's block. It's
            <br/> like having a co-author at your fingertips."</p>
            <h5>- Mark T., Aspiring Writer</h5>
    </div>
    </div>
    </div>

    <div className='Updated' data-aos='zoom-in'
    data-aos-duration='1000'>
    <h3>Stay Updated</h3>
    <p>Subscribe to our newsletter for the latest AI writing tips and BookAI updates.</p>
    <div className='Email'>
    <input type='text' placeholder='Enter Your Email'/>
    <div>
    <button>Submit</button>
    </div>
    </div>
    </div>

    <div className='outline'>
     <div>
      <h6>© 2024 BookAI. All rights reserved.</h6>
      <div className='Contact '>
      <a href='#'>Terms of Service</a>
      <a href='#'>Privacy Policy </a>
      <a href='#'>Contact Us </a>
      </div>
     </div>
    </div>
    </div>
    </>
  )
}

export default Whatour