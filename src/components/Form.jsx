import memes from '../memesData'

export default function Form() {

    function getMeme() {
        const data = memes.data.memes
        const randomNumber = Math.floor(Math.random() * data.length)
        const url = data[randomNumber].url
        console.log(url)
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
            <div id="meme_container">
                
            </div>
        </main>
    )
}