import style from '../index';

const NavBar = () => {
    return ( 
        <div className='parent-div'>
            <nav className='nav'>
                <div className='wine'>
                    <span className=''>
                        <ion-icon name="wine-outline"></ion-icon>
                    </span>
                </div>
                <div>
                    <ol className='ol'>
                        <li><a className='navLink' href='#'>Home</a></li>
                        <li><a className='navLink' href='#'>Alcoholic</a></li>
                        <li><a className='navLink' href='#'>Non-Alcoholic</a></li>
                        <li><a className='navLink' href='#'>About</a></li>
                    </ol>
                </div>
            </nav>
        </div>
     );
}
 
export default NavBar;