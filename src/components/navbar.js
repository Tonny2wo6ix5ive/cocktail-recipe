import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/nav.css';

const NavBar = ({Links}) => {

    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const scrollUp = ()=>{
        setIsNavExpanded(false);
    }

    return ( 
        <div className='parent-div'>
            <nav className='nav'>
            <button className="hamburger"
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                }}
            >
            <ion-icon name="menu-sharp"></ion-icon>
          </button>
          <div className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }>
                <ol className='ol' type='i'>
                    {Links.map((value)=>(
                        <li className='li' key={value.key}><Link onClick={scrollUp} to={value.url}>{value.name}</Link></li>
                    ))}
                </ol>
            </div>
            </nav>
        </div>
     );
}
 
export default NavBar;