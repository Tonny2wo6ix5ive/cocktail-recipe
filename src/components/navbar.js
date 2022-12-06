import { useState } from 'react';
import style from '../index';

const NavBar = ({Links}) => {

    let [open, setOpen] = useState(false);

    return ( 
        <div className='parent-div'>
            <nav>
                <input type="checkbox" name="" id="check"/>
                <label for="check">
                    <i className='menu'>
                         <ion-icon name="wine-outline"></ion-icon>
                    </i>
                </label>
                <label for="" className="wine">
                    <ion-icon name="wine-outline"></ion-icon>
                </label>
                <ul>
                    {Links.map((value)=>(
                        <li className='nav-li' key={value.key}><a className='nav-a' href={value.url}>{value.name}</a></li>
                    ))}
                </ul>
            </nav>
        </div>
     );
}
 
export default NavBar;