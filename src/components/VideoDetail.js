import React from 'react';
import youtube from './apis/youtube';
import Comment from './Comment';


const VideoDetail = (props) =>{
    

    console.log(props.comments)
    console.log(props.likes)

    var likeValue= null;
    var dislikeValue = null;
    const likeCount = (props.likes.statistics.likeCount)
    
    const lengthCount = likeCount.length;
    
    if(lengthCount >=7){
     likeValue = likeCount[0]+'M'
     console.log(likeValue)
    }
    else {
        likeValue = likeCount[0]+'K'
        console.log(likeValue)
    }


    const dislikeCount = (props.likes.statistics.dislikeCount)
    
    const disLike_length = dislikeCount.length;
    
    if(disLike_length >=7){
     dislikeValue = dislikeCount[0]+'M'
     
    }
    else {
        dislikeValue = dislikeCount[0]+'K'
        
    }


        if (!props.video){
            return(
                <div>
                   loading
                </div>
            )
        }

        const url = `https://www.youtube.com/embed/${props.video.id.videoId}`
        
        return(
             <div style={{margin:"40px"}}>
            <div className="ui-videoDetail">

            <div className="ui embed">
                <iframe src={url}></iframe>
            </div>

            <div className="ui segment" style={{background:'transparent',color:'white',boxShadow:'none',borderTop:'none',borderTop:'none',borderLeft:'none',borderRight:'none',borderBottom:'solid 1px silver'}}>
                <div className = "ui header" style={{background:'transparent',color:'white'}}>
                {props.video.snippet.title}
                </div>
                <div className = "content">
                
                {props.video.snippet.description}
                <div class="meta" style={{font : '13px Roboto,Arial,sans-serif',color:'silver'}}>
                <div class="ui horizontal segments" style={{background:'transparent',padding:'0px',border:'none',boxShadow:'none'}}>
                <div className="ui segment" style={{padding:'0px'}}>
                <p></p>
                <p></p>
                <span>{props.likes.statistics.viewCount} views</span>
                
                </div>
                
                <div className="ui segment" style={{borderLeft:'none'}} >
                    <div style={{display:'flex',flexDirection:'row',width:'100%',alignItems:'flex-end',marginLeft:'550px'}}>
                    
                            <div style={{width:'7%',font:'12px Roboto,Arial,sans-serif'}}><i className="thumbs up large icon">&nbsp;{likeValue}</i></div>
                            <div style={{width :'9%',font:'12px Roboto,Arial,sans-serif'}}><i className="thumbs down large icon">&nbsp;{props.likes.statistics.dislikeCount}</i></div>
                            <div style={{width :'12%',font:'10px Roboto,Arial,sans-serif'}}><i className="share large icon">&nbsp;SHARE</i></div>
                            <div style={{width :'12%',font:'10px Roboto,Arial,sans-serif'}}><i className="download large icon">&nbsp;SAVE</i></div>
                           
                        
                    </div>
                </div>
                </div>
                </div>
                </div>
               
            </div>
            </div>
            <div>
                <Comment comments={props.comments}></Comment>
            </div>
            </div>
        )
     
}

export default VideoDetail;