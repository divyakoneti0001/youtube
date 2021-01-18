import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import MenuBar from './MenuBar';
import './App.css';
import RandomVideo from './RandomVideo';
import youtube from './apis/youtube';


export default class App extends React.Component{
    
    state = {videos : [] , videoSelected : null , randomVideos : null , comments : null , 
            toggle : false ,changeColor:'false' ,stats:null,likes:null,listRandom :null}


        async componentDidMount(){
            const response = await youtube.get('/search',
            {params : {
                q:'news' 
            }
            }
            )

        var list_random = [];
        var lengthOfresponse = response.data.items.length;
        var metaValue = null;

       for(var i=0;i<lengthOfresponse;i++){
       metaValue = await youtube.get('videos',
       {
           params:{
               part : 'statistics',
               id :  response.data.items[i].id.videoId,
           }
       
           
       })

       list_random.push(metaValue.data.items[0].statistics)

       }
       
       this.setState({listRandom : list_random})
       this.setState ({randomVideos : response.data.items.map((video,index)=>{
            return (
            <div class="three wide column"><RandomVideo stat={this.state.listRandom[index]}  video={video}></RandomVideo></div>
        )
    }
    )
})


    }

    onTermSubmit = async term =>{

        const response = await youtube.get('/search',
        
        {params : {
            q:term 
        }
        }
        )
        
        
        const statsList = [];

        for(var i = 0 ;i<response.data.items.length;i++){
        const videoItem = response.data.items[i]
        const stats = await youtube.get('/videos',
         {params:{
             part : 'statistics',
             id : videoItem.id.videoId
         }
        }
        )

        
        statsList.push(stats.data.items[0])
        
        }
            
        this.setState({stats: statsList})

        console.log(this.state.stats)
        



        const defaultVideo = response.data.items[0]

        const defaultlikes = await youtube.get('/videos',
        {
            params:{
                part:'statistics',
                id : defaultVideo.id.videoId
            }
        })

        this.setState({videoSelected : defaultVideo , likes: defaultlikes.data.items[0]})
        this.setState({videos : response.data.items})
       
       
       

        const CommentResponse = await youtube.get('/commentThreads',
        {
            params:{
                textFormat : 'plainText',
                videoId : this.state.videoSelected.id.videoId

            }
        }
        )
        
        this.setState({comments : CommentResponse.data.items})


    }

    onVideoSelect =async video => {

        const CommentResponse = await youtube.get('/commentThreads',
        {
            params:{
                textFormat : 'plainText',
                videoId : video.id.videoId

            }
        }
        )

        const likes = await youtube.get('/videos',
        {
            params:{
                part:'statistics',
                id : video.id.videoId
            }
        })
        
        this.setState({comments : CommentResponse.data.items,videoSelected : video,likes :likes.data.items[0]})
       
        
    }


    onClick=()=>{
        this.setState({toggle : !this.state.toggle})
    }

    onBackgroundChange=()=>{
        this.setState({changeColor: !this.state.changeColor})
    }

    


    render(){

        const color = this.state.changeColor? 'linear-gradient(to right, #eb0000 0%, #000000 100%)': '#0a0909';
        const displayMenu = false

        if(this.state.videos.length==0){

            return (
                <div style={{background:color}}>
                <div className="ui top inverted attached menu" style={{height : '5vh',display: 'flex',position:'sticky',zIndex:"100"}}>
                        
                           <span className="item " onClick={this.onClick}><i class="list white large icon"></i></span>
                           <span className="item ">
                           <i class="youtube red large icon"></i><span style={{fontWeight:'bold'}}>YouTube</span></span>
                           <SearchBar  onFormSubmit = {this.onTermSubmit}></SearchBar>
                           <span className="item link grey" onClick={this.onBackgroundChange} style={{marginLeft: '30%'}}>Change Theme</span>      
                  </div>
                  <div className="ui attached pushable" style={{height : '100vh'}}>
                      <MenuBar toggle={this.state.toggle} displayVideo = {displayMenu}></MenuBar>
                            <div className="pusher bottom">
                            <div className="ui grid" style={{marginLeft: '10%',marginTop:'5%'}}>
                                {this.state.randomVideos}
                            </div>            
                  </div>
                  </div>

                </div>
            
       
            )
        }

        
        return(
            <div style={{background:color}}>
           <div className="ui top inverted attached menu" style={{height : '5vh',display: 'flex',position:'sticky',zIndex:"100"}}>
                        
                        <span className="item " onClick={this.onClick}><i class="list white large icon"></i></span>
                        <span className="item ">
                        <i class="youtube red large icon"></i>Youtube</span>
                        <SearchBar  onFormSubmit = {this.onTermSubmit}></SearchBar>
                        <span className="item link grey" onClick={this.onBackgroundChange} style={{marginLeft: '30%'}}>Change Theme</span>
                              
               </div>
               <div className="ui attached pushable" style={{height : '100vh'}}>
                   <MenuBar toggle={this.state.toggle} displayVideo={!displayMenu}></MenuBar>
                   <div className="pusher bottom">
                         <div className="ui grid">
                         <div className="ui row">
                            <div className = "twelve wide column">
                                 <VideoDetail video ={this.state.videoSelected} comments = {this.state.comments} likes = {this.state.likes}></VideoDetail>
                            </div>
                    <div className = "four wide column">
                                <VideoList videos = {this.state.videos} stats={this.state.stats} onVideoSelect={this.onVideoSelect}></VideoList>
                    </div>
                </div>
            </div>
            </div>
            </div>
            </div>
       
        )
    }
}