import React, { useRef, useState } from "react";
import "./VideoCard.css";
import VideoFooter from "./VideoFooter";
import VideoHeader from "./VideoHeader";

const VideoCard = ({ url, channel, avatarSrc, song, likes, shares }) => {
    const [playing, setplaying] = useState(false);
    const videoRef = useRef(null);

    const handleVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setplaying(false);
        }
        else {
            videoRef.current.play();
            setplaying(true);
        }
    }

    return (
        <div className="videoCard">
            <VideoHeader />
            <video
                src={url}
                className="videoCard__player"
                alt="Shorts Video App"
                loop
                ref={videoRef}
                onClick={handleVideoPress}
             />
            <VideoFooter
            channel={channel}
            likes={likes}
            shares={shares}
            avatarSrc={avatarSrc}
            song={song}
             />
        </div>
    )
};

export default VideoCard;