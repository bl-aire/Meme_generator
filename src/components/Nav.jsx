import troll from '../images/troll.png'

export default function Nav() {
    return(
        <nav className='navbar'>
            <img src={troll} alt="troll face" height="35px" />
            <span className='logo'>Meme Generator</span>
        </nav>
    )
}