import React from "react";

function Video() {
  return (
    <div className="w-full h-full">
      <video autoPlay muted loop className="w-full h-full object-cover" src="https://download-video-ak.vimeocdn.com/v3-1/playback/a278bb9c-996c-4760-8ca1-dd0abff308f7/83c745cf?__token__=st=1756314059~exp=1756317659~acl=%2Fv3-1%2Fplayback%2Fa278bb9c-996c-4760-8ca1-dd0abff308f7%2F83c745cf%2A~hmac=144db57a11ff573e50b66280851249a5b7d78462d9215200b47977d86dfc5127&r=dXMtd2VzdDE%3D"></video>
    </div>
  );
}

export default Video;
