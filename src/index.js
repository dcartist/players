import React from 'react'
import ReactDOM from 'react-dom'
import ReactPlayer from 'react-player'
import { Player } from 'video-react'
import Vimeo from '@u-wave/react-vimeo'
import YouTube from '@u-wave/react-youtube'

import './styles.css'

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>VImeo</h2>
      <Vimeo
        video="https://vimeo.com/226260195"
        autoplay={false}
        loop
        muted={false}
        showPortrait
        background={true}
        controls={false}
      />

      <h2>Youtube</h2>
      <YouTube video="Bcm8tkZDxXM" autoplay />

      <h2>ReactPlayer</h2>
      <div style={{ height: '100vh' }}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=rnwlWn603g4"
          className="react-player"
          playing={false}
          width="100%"
          height="100%"
        />
      </div>
      <Player style={{ width: '500px' }}>
        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
      </Player>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
