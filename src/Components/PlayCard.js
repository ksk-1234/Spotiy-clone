import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import song1 from "../songs/s1.mp3"
import song2 from "../songs/s2.mp3"
import song3 from "../songs/s3.mp3"
import song4 from "../songs/s4.mp3"
import song5 from "../songs/s5.mp3"
import song6 from "../songs/s6.mp3"
import song7 from "../songs/s7.mp3"
import song8 from "../songs/s8.mp3"

import './PlayCard.css';

const newAudio1 = new Audio(song1);
const newAudio2 = new Audio(song2);
const newAudio3 = new Audio(song3);
const newAudio4 = new Audio(song4);
const newAudio5 = new Audio(song5);
const newAudio6 = new Audio(song6);
const newAudio7 = new Audio(song7);
const newAudio8 = new Audio(song8);


const list = [newAudio1,newAudio2,newAudio3,newAudio4,newAudio5,newAudio6,newAudio7,newAudio8]



function SongCard({ song, isPlaying, isFavourite, handlePlay, handleFav}) {




  return (
      <div className='col-3 musicCard m-4'>
        <h6>Song : {song.title}</h6>
        <p>Movie : {song.Movie}</p>
        <p>Language : {song.Lang}</p>
        <img src={song.icon} height='150vh' width='150vw' style={{borderRadius:"35%"}}/>
        <br></br>
        <br></br>
        <button onClick={handlePlay}>{isPlaying ? 'PAUSE' : 'PLAY'}</button>
        <button onClick={handleFav}><FaHeart color={isFavourite[song.id - 1] ? 'red' : 'gray'} />
        </button>
      </div>
  );
}

function PlayCard({songList, isFavourite, setFavourite}) {

  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(null);
  
  //console.log(isFavourite)
  const handlePlay = (index) => {
    console.log(songList[index])
    if (audio && isPlaying && index === currentSongIndex) {
      audio.pause();
      setIsPlaying(false);
      setCurrentSongIndex(null);
    } else {
      if (audio && isPlaying) {
        audio.pause();
      }
      // const newAudio = new Audio(songList[index].path);

      const newAudio = list[index]
      setAudio(newAudio);
      setIsPlaying(true);
      setCurrentSongIndex(index);
      newAudio.play();
    }
  };

  const handleFav = (index, isFavourite) => {
      let temp = [...isFavourite];
      temp[index] = !isFavourite[index]
      setFavourite(temp)
  };

  

  useEffect(() => {
    return () => {
      if (audio) {
        audio.pause();
      }
    }
  }, [audio]);

  

  return (
    <div>
      <div style={{height:"15vh",width:"100vw"}}>

      </div>
      <div className='container'>
        {console.log(isFavourite)}
        <div className='row'>
          {
            songList.map((song, index) => (
              <SongCard 
                key={song.id}
                song={song}
                isPlaying={index === currentSongIndex && isPlaying}
                isFavourite={isFavourite}
                handlePlay={() => handlePlay(index)}
                handleFav={() => handleFav(index,isFavourite)}
                setFavourite={() => setFavourite()}
              />
            ))
          }   
        </div>
      </div>
    </div>
  );
}

export default PlayCard;
