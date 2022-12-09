import { useState } from 'react';
import style from '../index';

const NavBar = ({Links}) => {

    let [open, setOpen] = useState(false);

    return ( 
        <div className='parent-div'>
            <nav className='nav'>
                <ol className='ol' type='i'>
                    {Links.map((value)=>(
                        <li className='li' key={value.key}><a className='url' href={value.url}>{value.name}</a></li>
                    ))}
                </ol>
            </nav>
        </div>
     );
}
 
export default NavBar;