import './App.css';
import { useState } from 'react';
import {ToastContainer} from 'react-toastify'
import Signup from './Components/signup/Signup';
import Login from './Components/login/Login'
import { Routes, Route } from 'react-router-dom';
import MainPage from './Components/MainPage';
import Favourites from './Components/Favourites';
import PlayCard from './Components/PlayCard';
import Home from './Components/Home';
function App() {
  const songList = [
    {
      id:    1,
      title: "Mastaru Mastaru",
      Movie: "Sir",
      Lang:  "Telugu",
      icon:   "https://igimages.gumlet.io/telugu/home/dhanush_sir10112022_cc.jpg?w=376&dpr=2.6",
      path:  './songs/s1.mp3',
    },
    {
      id:    2,
      title: "Dhoom Dhaam",
      Movie: "Dasara",
      Lang:  "Telugu",
      icon:   "https://c.saavncdn.com/427/Dhoom-Dhaam-From-Dasara-Telugu-Telugu-2022-20221002174042-500x500.jpg",
      path:  './songs/s2.mp3',
    },
    {
      id:    3,
      title: "Ye manishike majiliyo",
      Movie: "Majili",
      Lang:  "Telugu",
      icon:   "https://i.scdn.co/image/ab67616d0000b2730ae99e52ec6c5f9111415239",
      path:  './songs/s3.mp3',
    },
    {
      id:    4,
      title: "Stylish Tingarabuchi",
      Movie: "Aata Arrambam",
      Lang:  "Telugu",
      icon:   "https://a10.gaanacdn.com/gn_img/albums/mGjKrP1W6z/GjKrP44yW6/size_l.jpg",
      path:  './songs/s4.mp3',
    },
    {
      id:    5,
      title: "Kaanunna Kalyanam",
      Movie: "Sita Ramam",
      Lang:  "Telugu",
      icon:   "https://static.india.com/wp-content/uploads/2022/08/sitaraman.jpg",
      path:  './songs/s5.mp3',
    },
    {
      id:    6,
      title: "Inthandham",
      Movie: "Sita Ramam",
      Lang:  "Telugu",
      icon:   "https://c.saavncdn.com/309/Inthandham-From-Sita-Ramam-Telugu-Telugu-2022-20220704185958-500x500.jpg",
      path:  './songs/s6.mp3',
    },
    {
      id:    7,
      title: "Jinthaak Chithaka",
      Movie: "Dhamaka",
      Lang:  "Telugu",
      icon:   "https://cdn.123telugu.com/content/wp-content/uploads/2022/12/Dhamaka-m-5.jpg",
      path:  './songs/s7.mp3',
    },
    {
      id:    8,
      title: "Boss Party",
      Movie: "Valther Veeraya",
      Lang:  "Telugu",
      icon:   "https://c.saavncdn.com/000/Boss-Party-From-Waltair-Veerayya-Telugu-2022-20221123152533-500x500.jpg",
      path:  './songs/s8.mp3',
    }
  ]
  const [isFavourite,setFavourite] = useState([false,false,false,false,false,false,false,false])
  return (
    <>
    <Routes>      
        <Route path='/login' element={<Login/>}/>
        <Route path='/mainpage' element={<MainPage/>}>
          <Route path='home' element={<Home/>}/>
          <Route path='songs' element={<PlayCard songList={songList} isFavourite={isFavourite} setFavourite={setFavourite} />} />   
          <Route path='favourites' element={<Favourites songList={songList} isFavourite={isFavourite} setFavourite={setFavourite} />} />        
        </Route>
        <Route path='/' element={<Signup/>}/>
      </Routes>
      <ToastContainer/>
    </>
  );
}

export default App;
