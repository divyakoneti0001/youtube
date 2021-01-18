import React from 'react';
import './CommentItem.css';
import Moment from 'moment';

const CommentItem = ({comment}) => {
  

  
  var date = comment.snippet.topLevelComment.snippet.publishedAt.substr(0,10)
 
  
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


  



    return(
        <div>
           <div class="ui comments segment" style={{backgroundColor:'transparent',boxShadow:'none',border:'none'}}>
  <div class="comment">
    <a class="avatar">
      <img src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} style={{borderRadius:'100%'}}>
          </img>
    </a>
    <div class="content">
      <a class="author" style={{color : 'white'}}>{comment.snippet.topLevelComment.snippet.authorDisplayName}<span style={{color:'silver',fontWeight:'normal'}}>&nbsp;&nbsp;{value}</span></a>
      <p></p>
      <div class="text" style={{color : 'white'}}>
        {comment.snippet.topLevelComment.snippet.textDisplay}
      </div>
    
      <div class="actions">
        <p></p>
        <a ><i class="thumbs up silver icon" style={{color:'silver'}}>&nbsp;{comment.snippet.topLevelComment.snippet.likeCount}</i></a>
        <a ><i class="thumbs down silver icon" style={{color : 'silver'}}></i></a>
        <span style={{color:'silver',font:'12px Roboto,Arial,sans-serif'}}>REPLY</span>
        
      </div>
    </div>
  </div>
</div>
        </div>
    )

}

export default CommentItem;

