import React from 'react'


function Roadmap(props) {
    
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


function Map() {
  return (
    <div className='Itworks' id='Roadmap'data-aos='zoom-in'
    data-aos-duration='1000'>
        
                <h3>Roadmap</h3>
            
        <div className='up'>
    
            <Roadmap
             imgs='./assets/choose.png'
             name='Choose Your Genre'
             Detail='Select from a wide range of genres or create a custom blend.'
            />
            <Roadmap
             imgs='./assets/resume.png'
             name='Provide Key Details'
             Detail='Input main characters, plot points, or themes to guide the AI'
            />
          
          </div>
<div className='Down'>
            <Roadmap
             imgs='./assets/ai.png'
             name='AI Generation'
             Detail='Our advanced AI creates your book based on your inputs.'
            />
            <Roadmap
             imgs='./assets/downloaded.png'
             name='Review and Download'
             Detail='Review your generated book and download in your preferred format.'
            />
</div>
        
    </div>
  )
}

export default Map;