import React from 'react'
import song from './songs/s1.mp3'
function test() {
    const audiofile=new Audio(song)
    const playing=()=>{
        audiofile.play()
    }
    const pausing=()=>{
        audiofile.pause()
    }
  return (
    <div>
      <button className='btn btn-dark' onClick={()=>playing()}>play</button>
      <button className='btn btn-dark' onClick={()=>pausing()}>pause</button>
    </div>
  )
}

export default test
