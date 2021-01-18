import React from 'react';
import './VideoItem.css';
import youtube from './apis/youtube'
import Moment from 'moment'

const RandomVideo = ({video,stat}) => {


  
  var date = video.snippet.publishedAt.substr(0,10);
  
  date = new Date(date)
  date = Moment(date).format('MM/DD/YYYY');
  date = new Date(date);
  let today = new Date().toISOString().slice(0, 10) ;
  today=Moment(today).format('MM/DD/YYYY');
  today = new Date(today)
  const diffInMs = Math.abs(today - date);

  var numDays=Math.ceil(diffInMs / (1000 * 60 * 60 * 24 * 7 * 54));

  if(numDays==1)
  var value = numDays+' year ago'
  else
  var value =  numDays+' years ago'

  if (numDays == 0)
  {
      numDays=numDays*54
      Math.ceil(numDays)
      if(numDays==1){
        value= numDays +' month ago'
      }
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


  let viewCount = stat.viewCount
  let lengthCount = viewCount.length;

  if(lengthCount>=7){
    viewCount = viewCount[0]+'M views'
  }

  else if(lengthCount<=6){
    viewCount = viewCount[0]+'K views'
  }

 
    
    return (
    
       

  <div class="ui card">
  <div class="image">
  <img style={{height:"207px",width :"300px"}} div className="ui image" src = {video.snippet.thumbnails.medium.url}></img>
  </div>
  <div class="content" style={{border:'none'}}>
    
   
    <div class="description" style={{color:'white',textJustify:'inter-word',fontWeight:'bold'}}>
    {video.snippet.title}
    </div>
    <div class="meta">
    <span class="date" style={{color:'grey'}}>{video.snippet.channelTitle}</span>
    </div>
    <div class="meta">
      <span class="date" style={{color:'grey'}}>{viewCount}.</span>
      <span class="date" style={{color:'grey'}}>{value}</span>
    </div>
  </div>
  







    </div>
    )
}

export default RandomVideo;