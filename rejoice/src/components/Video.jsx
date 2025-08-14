import video from "../assets/reel-short.mp4"

function Video() {
  return (
    <div>
        <video src={video} muted autoPlay loop></video>
    </div>
  )
}

export default Video