import React from 'react'

const VideoFondo = () => {
    return (
        <div>
            <video autoPlay muted loop id="background-video" className="videoFondo">
                <source src="background.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default VideoFondo
