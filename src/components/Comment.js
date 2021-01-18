import React from 'react';
import CommentItem from './CommentItem.js';

const Comment = ({comments}) => {


    console.log(comments);

    


    if(comments != null){
    const listComments = comments.map((comment)=>{
        return(
            <CommentItem comment={comment}></CommentItem>
        )
    })

    


    return (
        <div style={{marginTop:'20px'}}>
            {listComments}
        </div>
    )
}

return null;
}

export default Comment;