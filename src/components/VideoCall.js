import React, { useRef, useEffect, useState } from 'react';
import io from 'socket.io-client';
import Peer from 'simple-peer';

const socket = io('http://localhost:8081'); // Your server URL

function VideoCall() {
  const [stream, setStream] = useState(null);
  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(currentStream => {
        setStream(currentStream);
        myVideo.current.srcObject = currentStream;
      });

    socket.on('callUser', ({ from, signal }) => {
      const peer = new Peer({ initiator: false, trickle: false, stream });
      peer.on('signal', data => {
        socket.emit('answerCall', { signal: data });
      });
      peer.on('stream', currentStream => {
        userVideo.current.srcObject = currentStream;
      });
      peer.signal(signal);
      connectionRef.current = peer;
    });
  }, [stream]);

  return (
    <div>
      <video playsInline muted ref={myVideo} autoPlay style={{ width: "300px" }} />
      <video playsInline ref={userVideo} autoPlay style={{ width: "300px" }} />
    </div>
  );
}

export default VideoCall;
