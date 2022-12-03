import { useState } from 'react';
import style from '../index';

const NavBar = () => {

    let [open, setOpen] = useState(false);

    return ( 
        <div className='parent-div'>
            <nav className='nav'>
                <div className='wine'>
                    <span className=''>
                        <ion-icon name="wine-outline"></ion-icon>
                    </span>
                </div>
                <div className='nav-li'>
                    <ol className='ol'>
                        <li><a className='navLink' href='#'>Home</a></li>
                        <li><a className='navLink' href='#'>Alcoholic</a></li>
                        <li><a className='navLink' href='#'>Non-Alcoholic</a></li>
                        <li><a className='navLink' href='#'>About</a></li>
                    </ol>
                </div>
                <input type="checkbox" name="" id="check"/>
                <label for="check">
                    <ion-icon name="menu-sharp"></ion-icon>
                </label>
            </nav>
        </div>
     );
}
 
export default NavBar;