import React from 'react'
import memes from '../memesData'

export default function Form() {

    //const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = React.useState([])
    
        
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [])

    function getMeme() {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = (allMemeImages[randomNumber].url)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return(
        <main className="section">

            <div>
                <div className="input">
                    <input 
                        type="text" 
                        className="text" 
                        placeholder="Enter top text"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}

                        
                    />
                    <input 
                        type="text" 
                        className="text" 
                        placeholder="Enter buttom text" 
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}/>
                </div>
                <div className="button_container">
                    <button className="button" onClick={getMeme}>
                        Get a new meme image 🖼 
                    </button>
                </div>
            </div>
            <div className='memeContainer'>
                <img src={meme.randomImage} className='meme'/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}