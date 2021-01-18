import React from 'react';
import './VideoItem.css';
import Moment from 'moment';

const VideoItem = ({video,stats,onVideoSelect}) => {
   
    console.log(stats)

    const datePublished = video.snippet.publishTime;
    
    var date = new Date(datePublished.substring(0,10));
    date=(Moment(date).format('MM/DD/YYYY'));
    date=new Date(date)

    let today = new Date().toISOString().slice(0, 10) ;
    today=Moment(today).format('MM/DD/YYYY');
    today = new Date(today)
    const diffInMs = Math.abs(today - date);
    
    var numDays=Math.ceil(diffInMs / (1000 * 60 * 60 * 24 * 7 * 54));

    if(numDays==1){
        var value = numDays+' year ago'
    }
    else
    var value = numDays+' years ago'

    if (numDays == 0)
    {
        numDays=numDays*54
        Math.ceil(numDays)
        if(numDays==1)
        value= numDays +' month ago'
        else
        value= numDays +' months ago'


        if(numDays ==0 ){
            numDays=Math.ceil(numDays*54*7)
            if(numDays==1)
            value = numDays + ' day ago'
            else
            value = numDays + ' days ago'
        }
    }


    


  


    
    return (
    <div className = "video-item item" onClick={()=> onVideoSelect(video)}>
        <img style={{maxHeight:"107px"}} div className="ui image" src = {video.snippet.thumbnails.medium.url}></img>
        <div className="content">
            <div className="content-text description" style={{font : '14px Roboto,Arial,sans-serif'}}>
                
                {video.snippet.title}
             <p></p>
                <div class="meta" style={{font : '13px Roboto,Arial,sans-serif',color:'silver'}}>
       
                <span>{stats.viewCount}views.</span>
                <span>{value}</span>

                </div>
                
            </div>
        </div>
    </div>
    )
}

export default VideoItem;