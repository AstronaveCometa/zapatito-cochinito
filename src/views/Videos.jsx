import React from 'react'

const Videos = () => {
  return (
    <div>
       <div className="fondoGradiente" style={{marginTop:"65px"}}>
        <div className="row flex-wrap m-4">
            <div className="col">
                <iframe className="cuadroVideo" width="100%" height="315" src="https://www.youtube.com/embed/dA90x9EsWcw?si=rdFmfhkoP3ouQzX2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="col">
                <iframe className="cuadroVideo" width="100%" height="315" src="https://www.youtube.com/embed/1l-0sR66qZE?si=e3eJBUZvwU8IaYCe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        <div className="row flex-wrap m-4">
            <div className="col">
                <iframe className="cuadroVideo" width="100%" height="315" src="https://www.youtube.com/embed/JrQ9zglXn0M?si=gYY2FGtOh9H5jC24" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="col">
              <iframe className="cuadroVideo" width="100%" height="315" src="https://www.youtube.com/embed/8giVuQFuS7k?si=lARyDkVNXhWVhkqi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
                <div className="row flex-wrap m-4">
            <div className="col">
                <iframe className="cuadroVideo" width="100%" height="315" src="https://www.youtube.com/embed/P1V9LTCo_r4?si=KkN0BSJBwTyMDUIC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="col">
              <iframe className="cuadroVideo" width="100%" height="315" src="https://www.youtube.com/embed/p2LAZJn5ioQ?si=UcUQ322OeZCx4ndT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Videos
