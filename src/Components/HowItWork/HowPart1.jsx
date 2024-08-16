import React from 'react'


function HowPart1(props) {
    
    return(<>
        <div className='count mx-5'>
            
            <img src={props.imgs}/>
            <div className='detail'>
            <h5>{props.name}</h5>           
            <p>{props.Detail}</p>
            </div>

        </div>
        </>
        ) 
}


function Work() {
  return (
    <div className='Itworks' id='How It Work'
     data-aos='zoom-in'
        data-aos-duration='1000'
    >
        
                <h3>How It Works</h3>
            
        <div className='up'>
    
            <HowPart1
             imgs='./assets/choose.png'
             name='Choose Your Genre'
             Detail='Select from a wide range of genres or create a custom blend.'
            />
            <HowPart1
             imgs='./assets/resume.png'
             name='Provide Key Details'
             Detail='Input main characters, plot points, or themes to guide the AI'
            />
          
          </div>
<div className='Down'>
            <HowPart1
             imgs='./assets/ai.png'
             name='AI Generation'
             Detail='Our advanced AI creates your book based on your inputs.'
            />
            <HowPart1
             imgs='./assets/downloaded.png'
             name='Review and Download'
             Detail='Review your generated book and download in your preferred format.'
            />
</div>
        
    </div>
  )
}

export default Work

