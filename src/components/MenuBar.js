import React from 'react';
import cn from "classnames";





const MenuBar = ({toggle,displayVideo}) => {


    const classes = cn('ui','sidebar','overlay','left','inverted','menu','animating',
        {visible:toggle}
        
        );

        const classesSmall = cn('ui','sidebar','overlay','left','inverted','menu',
        {visible:!toggle}
        
        );

        const menuInvisible = cn({visible:false})


        if(displayVideo){

            return null
        }


        if (toggle == false){

            return(
       
       
        
                <div className={classesSmall} style={{width : '4%'}}>
                    <ul>
                        <li className="link item"><i className="home large silver icon"></i></li>
                        <li className="link item"><i className="fire large silver icon"></i></li>
                        <li className="link item"><i className="file video outline large silver icon"></i></li>
                        <li className="link item"><i className="file outline large silver icon"></i></li>
                        
                    </ul>
                </div>
               
             
                 )
           

        }

    return(
       
       
        
   <div className={classes} style={{width : '10%'}}>
       <ul>
                        <li className="link item" style={{marginLeft:'5px',marginTop:'10px',font:'14px Roboto,Noto,sans-serif',color:'silver'}}><i className="home large icon"></i>Home</li>
                        <li className="link item" style={{marginLeft:'5px',marginTop:'10px',font:'14px Roboto,Noto,sans-serif',color:'silver'}}><i className="fire large icon"></i>Subscriptions</li>
                        <li className="link item" style={{marginLeft:'5px',marginTop:'10px',font:'14px Roboto,Noto,sans-serif',color:'silver'}}><i className="file video outline large icon"></i>Trendings</li>
                        <li className="link item" style={{borderBottom:"1px solid silver",marginLeft:'5px',marginTop:'10px',font:'14px Roboto,Noto,sans-serif',color:'silver'}}><i className="file outline large icon"></i>Library</li>
                        <li className="link item" style={{marginLeft:'5px',marginTop:'10px',font:'14px Roboto,Noto,sans-serif',color:'silver'}}><i className="history large icon"></i>History</li>
                        <li className="link item" style={{marginLeft:'5px',marginTop:'10px',font:'14px Roboto,Noto,sans-serif',color:'silver'}}><i className="clock large icon"></i>Watch Later</li>
                        <li className="link item" style={{borderBottom:"1px solid silver",marginLeft:'5px',marginTop:'10px',font:'14px Roboto,Noto,sans-serif',color:'silver'}}><i className="thumbs up large icon"></i>Liked Video</li>
                        <li className="link item" style={{marginLeft:'5px',marginTop:'10px',font:'14px Roboto,Noto,sans-serif',color:'silver'}}><i className="youtube large icon"></i>Premium</li>
                        <li className="link item" style={{marginLeft:'5px',marginTop:'10px',font:'14px Roboto,Noto,sans-serif',color:'silver'}}><i className="video large icon"></i>Movies</li>
                        <li className="link item" style={{marginLeft:'5px',marginTop:'10px',font:'14px Roboto,Noto,sans-serif',color:'silver'}}><i className="game large icon"></i>Gaming</li>
                        <li className="link item" style={{marginLeft:'5px',marginTop:'10px',font:'14px Roboto,Noto,sans-serif',color:'silver'}}><i className="street view large icon"></i>Live</li>
                        <li className="link item" style={{marginLeft:'5px',marginTop:'10px',font:'14px Roboto,Noto,sans-serif',color:'silver'}}><i className="female large icon"></i>Fashion Beauty</li>
                        <li className="link item" style={{borderBottom:"1px solid silver",marginLeft:'5px',marginTop:'10px',font:'14px Roboto,Noto,sans-serif',color:'silver'}}><i className="book large icon"></i>Learning</li>
                        <li className="link item" style={{marginLeft:'5px',marginTop:'10px',font:'14px Roboto,Noto,sans-serif',color:'silver'}}><i className="settings large icon"></i>Settings</li>
                        <li className="link item" style={{marginLeft:'5px',marginTop:'10px',font:'14px Roboto,Noto,sans-serif',color:'silver'}}><i className="bug large icon"></i>Report History</li>
                        <li className="link item" style={{marginLeft:'5px',marginTop:'10px',font:'14px Roboto,Noto,sans-serif',color:'silver'}}><i className="question circle large icon"></i>Help</li>
       </ul>
   </div>
  

    )
}

export default MenuBar;