import React from 'react'
import memes from '../memesData'

export default function Form() {

    //const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memes)
    

    function getMeme() {
        const data = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * data.length)
        const url = (data[randomNumber].url)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return(
        <main className="section">

            <div>
                <div className="input">
                    <input type="text" className="text" placeholder="Enter top text" />
                    <input type="text" className="text" placeholder="Enter buttom text" />
                </div>
                <div className="button_container">
                    <button className="button" onClick={getMeme}>
                        Get a new meme image 🖼 
                    </button>
                </div>
            </div>
            <div className='memeContainer'>
                <img src={meme.randomImage} className='meme'/>
                <h2 className="meme--text top">One does not simply</h2>
                <h2 className="meme--text bottom">Walk into Mordor</h2>
            </div>
        </main>
    )
}