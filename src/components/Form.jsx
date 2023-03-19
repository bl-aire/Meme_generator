import React from 'react'
import memes from '../memesData'

export default function Form() {

    const [memeImage, setMemeImage] = React.useState("")

    function getMeme() {
        const data = memes.data.memes
        const randomNumber = Math.floor(Math.random() * data.length)
        setMemeImage(data[randomNumber].url)
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
                <img src={memeImage} className='meme'/>
            </div>
        </main>
    )
}