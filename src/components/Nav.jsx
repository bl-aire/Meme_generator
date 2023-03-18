import troll from '../images/troll.png'

export default function Nav() {
    return(
        <header className='navbar'>
            <img src={troll} alt="troll face" height="35px" />
            <span className='logo'>Meme Generator</span>
        </header>
    )
}