import React from 'react';
import VideoItem from './VideoItem';



const VideoList = ({videos,onVideoSelect,stats}) => {

    
    
    console.log(stats)
    const renderedList = videos.map((video,index) => {
        var stat = stats[index];
        return <div className = "display-list ui relaxed divided list" style={{marginTop:'40px',marginRight:'20px'}}><VideoItem video = {video} stats={stat.statistics} onVideoSelect = {onVideoSelect}></VideoItem></div>
    })

    return <div>{renderedList}</div>

}

export default VideoList;