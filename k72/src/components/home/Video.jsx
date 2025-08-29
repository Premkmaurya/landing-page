function Video() {
  return (
    <div className="w-full h-full">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
        src="/video.mp4"
      />
      
    </div>
  );
}

export default Video;
