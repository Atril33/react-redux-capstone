import { Link } from 'react-router-dom';
import back from './images/back.png';
import microphone from './images/microphone.png';
import setting from './images/setting.png';

const NavBar = () => {
  return (
    <div className='top-header'>
     <Link to='/'><img src={back} alt='Back Icon' className='back-img'></img></Link> 
      <h1>Countries</h1>
      <div className='right-icon'>
         <img src={microphone} alt='Microphone icon'></img>
         <img src={setting} alt='Setting icon' className='setting-img'></img>
      </div>
    </div>
  )
}

export default NavBar;