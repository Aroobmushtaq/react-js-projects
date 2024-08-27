import React,{useState} from 'react'
import moodimage from './mood1.webp';

function Task() {
    const [mood,setMood]=useState('');
    const [message,setmessage]=useState('');
    const handleMoodChange=(newMood)=>{
        setMood(newMood);
        if(newMood==='Happy'){
            setmessage('Happiness is Your Superpower! Use it wisly!')
        }else if (newMood==='Sad'){
            setmessage('Better Days are Ahead. Keep Moving Forward!')
        }else if(newMood==='Angry'){
            setmessage('You are Stronger than Your Anger. Let it Go!')
        }
    }
  return (
    <>
    <div className='box'>
    <img src={moodimage} alt="Mood" className='mood-image' />
        <h1>Mood Tracker</h1>
        <p className='mood'>Mood:<span>{mood}</span></p>
        <p className='message'>{message}</p>
        <div className='button'>
        <button className='happy' onClick={()=>handleMoodChange('Happy')}>Happy</button>
        <button className='sad' onClick={()=>handleMoodChange('Sad')}>Sad</button>
        <button className='angry' onClick={()=>handleMoodChange('Angry')}>Angry</button>
        </div>
        
      
    </div>

    </>
      )
}

export default Task
