function Video() {
  return (
    <div className="relative w-screen h-screen">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video-2.mp4"
      />
      
    </div>
  );
}

export default Video;
