import {useState} from 'react'
import logo from '../logo.svg'
import { Link, Outlet } from 'react-router-dom';
import './MainPage.css'
import { useDispatch } from 'react-redux';
import { logout } from '../redux/actions';
function MainPage() {
    const dispatch=useDispatch()
    const handlelogout=()=>{
      dispatch(logout())
    }
    let [enter,setEnter] = useState(false);
    
  return (
    <div className="App">
      {
        (enter === false) &&  
        <div>
          <img src='https://media.istockphoto.com/id/147033398/photo/drums.jpg?s=612x612&w=0&k=20&c=f9RMPptGk3SLNN3fd0DXYAbAyKhZgRR2CnjVPSABMRw=' width="30%" style={{position:"absolute"}}/>
          <div className='Navbar text-center' > 
              <img src='https://musictimeschool.com.au/wp-content/uploads/2019/02/logo.png' width="50%" height="60%"/>
              <div className='cover'></div>
              <button onClick={()=>{setEnter(true)}} className='goToBtn'>
                GET STARTED
            </button>
          </div>
          <div className='mainBtn'>
            <div className='btn5'></div>
          </div>
        </div>
      }
      {
        (enter === true) &&
        <div>
          <div className='navbar'>
            <img src={logo} className="App-logo" alt="logo" />
            <ul>
              <Link to="home" className='text-white h3 p-5'>Home</Link>
              <Link to="songs" className='text-white h3 p-5'>Songs</Link>
              <Link to="favourites" className='text-white h3 p-5'>Favourites</Link>
              <Link to="/login" className='text-white h3 p-5' onClick={()=>handlelogout()}>Logout</Link>
            </ul>
          </div>
          <Outlet/>
        </div>
      }
    </div>
  )
}

export default MainPage
