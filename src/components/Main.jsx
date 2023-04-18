import React from 'react'

export default function Main() {

  const ALL_MEME_URL = "https://api.imgflip.com/get_memes"

  const [memeData, setMemeData] = React.useState({
    topText : "", bottomText: "", memeImg : "https://i.imgflip.com/30b1gx.jpg"
  });

  const [allMemeData, setAllMemeData] = React.useState([])

  React.useEffect(() => {
    fetch(ALL_MEME_URL)
      .then(res => res.json())
      .then(data => setAllMemeData(data.data.memes))
  }, [])

  const handleChange = (event) => {
    const {name, value} = event.target
    setMemeData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }


  const getNewMeme = () => {
    let randomIndex = Math.floor(Math.random() * allMemeData.length)
    console.log(randomIndex);
    setMemeData(prevData => ({
      ...prevData,
      memeImg : allMemeData[randomIndex].url
    }))
  }

  return (
    <main>
      <div className='form'>
        <input 
          className='form--input'
          type="text"
          placeholder='Top Text'
          name='topText'
          value={memeData.topText}
          onChange={handleChange}
        />
        <input 
          className='form--input'
          type="text" 
          placeholder='Bottom Text'
          name='bottomText'
          value={memeData.bottomText}
          onChange={handleChange}
        />
        <button 
        className='form--button'
        onClick={getNewMeme}
        >Get a New Meme Image</button>
      </div>
      <div className='meme'>
        <img className='meme--image' src={memeData.memeImg} alt="Meme Image" />
        <h2 className='meme--text top'>{memeData.topText}</h2>
        <h2 className='meme--text bottom'>{memeData.bottomText}</h2>
      </div>

    </main>
  )
}
