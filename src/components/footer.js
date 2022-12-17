const Footer = () => {

    let date = new Date();

    return ( 
        <footer className="footer">
            <span className="copyRight">&copy; CockTail {date.getFullYear()}</span>
        </footer>
     );
}
 
export default Footer;