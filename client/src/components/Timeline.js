import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import "./Timeline.css";
import PopUp from "./PopUp";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import {connect} from 'react-redux';
import { addVideo, renderVideo, getItems, updateCurrVideo } from '../actions/dashboardActions';
import {Form,FormGroup} from 'reactstrap';
import ReactPlayer from 'react-player';
import axios from 'axios';
import { BoxLoading } from 'react-loadingg';


class Timeline extends Component {  

    constructor(props) {
        super(props);
        this.state = {
            openPopup:false,
            setOpenPopup:false,
            openPopup_render:false,
            setOpenPopup_render:false,
            title:"",
            videourl:"",
            videostarttime: 0,
            audiostarttime: 0,
            leng: 0,
            renderedUrl: "",
            isloaded: false,
            idUrl: "",
            isLoading: true
        };
        this.rendering = this.rendering.bind(this);
    }

    componentDidMount() {
        this.props.getItems();    
        // const res = await axios.get(this.state.idUrl);
        // console.log(res)    
    }
    sceneVideo(url){
        this.props.updateCurrVideo(url);
    }


    onChange = (e) => {
        this.setState({videourl: e.target.value});
    }

    GetUrl = (url) => {
        setTimeout( () => {
            axios({
                method: 'get',
                url: url,
                headers: {'x-api-key': "Ba5SoB8Xxx9F3d6qAiSIA9x7z6SVliGzoRxNdpo3"}
            })
            .then(
                response => 
                {
                    console.log(response.data.response.status);
                    if(response.data.response.status === "done")
                    {
                        this.setState({isLoading: false, idUrl: response.data.response.url})
                    }
                    
                }
                
            );
        }, 20000);
    };

    rendering(){
        this.props.renderVideo(this.props.dashboard);
        this.setState({openPopup_render:true,setOpenPopup_render:true, isLoading: true});
        setTimeout( () => {
            let url = "https://api.shotstack.io/stage/render/" + this.props.dashboard.id;
            this.GetUrl(url);
        }, 7000);
    
    } 

    

    onSubmit = e => {
        e.preventDefault();
        let url = this.state.videourl;
        let requrl = "https://api.shotstack.io/stage/probe/" + encodeURIComponent(url);
        axios.get(requrl)
        .then(res => this.setState({leng: Math.floor(res.data.response.metadata.streams[0].duration)}));
        let leng = 10;
        console.log(this.state.leng);
        
        if(this.state.title === "Add Scene")
        {
            const newVideo = 
            {
                "asset": {
                    "type": "video",
                    "src": url,
                    "volume": 0
                },
                "start": this.state.videostarttime,
                "length": leng
            };
            
            this.setState({videostarttime: this.state.videostarttime + leng + 1});
            this.props.addVideo(newVideo);
        }
        if(this.state.title === "Add Audio")
        {
            const newVideo = 
            {
                "asset": {
                    "type": "audio",
                    "src": url,
                    "volume": 1
                },
                "start": this.state.audiostarttime,
                "length": leng
            };
            this.setState({audiostarttime: this.state.audiostarttime + leng + 1});
            this.props.addVideo(newVideo);
        }
        
        

        this.setState({openPopup: false,setOpenPopup:false})
    }
    
    
    
    render() {
        const {timeline} = this.props.dashboard;

        return (
            
            <div className="timelineContainer">   
                <div className="timelineInner"></div>
                    <div className="timelineBar"></div>

               { /* Scene */}
               <div className="AddScene-Container">
                    <Button
                        className="btn-round add-btn addScene-btn"
                        size="medium"
                        onClick={() =>this.setState({openPopup:true,setOpenPopup:true,title:"Add Scene"})}
                    >
                        Add Scene
                    </Button>
                    <div className="Scene-buttons">
                        {
                            timeline["tracks"][0]["clips"].map(
                            item => 
                                {
                                    let es;
                                    if(item["asset"]["type"] === "video")
                                    { 
                                        es = <Button key={uuidv4()} className="btn-round scene" onClick={() => this.sceneVideo(item["asset"]["src"])} size="medium">Scene</Button>
                                    }
                                    return es
                                }
                            )
                        }
                        {/* <Button  className="btn-round scene"  size="medium">Scene1</Button>
                        <Button  className="btn-round scene"  size="medium">Scene2</Button>
                        <Button  className="btn-round scene"  size="medium">Scene3</Button>    */}
                    </div>
                </div>

                { /* Vo */}
               <div className="AddScene-Container">
                    <Button
                        className="btn-round add-btn addScene-btn"
                        size="medium"
                        onClick={() =>this.setState({openPopup:true,setOpenPopup:true,title:"Add VO Layer"})}
                    >
                        Add VO
                    </Button>
                    <div className="Scene-buttons">
                    <Button className="btn-round scene"  size="medium">VO1</Button>
                    <Button className="btn-round scene"  size="medium">VO2</Button>
                    <Button className="btn-round scene"  size="medium">VO3</Button>
                    
                    </div>
                </div>

                { /* Audio */}
               <div className="AddScene-Container">
                    <Button
                        
                        className="btn-round add-btn addScene-btn"
                        size="medium"
                        onClick={() =>this.setState({openPopup:true,setOpenPopup:true,title:"Add Audio"})}
                    >
                        Add Audio
                    </Button>
                    <div className="Scene-buttons">
                    {
                            timeline["tracks"][0]["clips"].map(
                            item => 
                                {
                                    let es;
                                    if(item["asset"]["type"] === "audio")
                                        es = <Button key={uuidv4()} className="btn-round scene" size="medium">Audio</Button>
                                    return es;
                                }
                            )
                        }
                    </div>
                </div>
                
    
                <div className="render-btn">
                    <Button onClick={this.rendering} className="render-button" size="large" variant="text" component="span" >Render Output</Button>
                </div>


            {
                /*
                    Render Btn Pop Up
                */
            }

            <PopUp
            openPopup = {this.state.openPopup_render}
            setOpenPopup = {this.state.setOpenPopup_render}
            size="md"
            >
                <div className="renderscreen-container">
                    {/* <ReactPlayer url= {this.props.dashboard.currentVideo} controls={true} /> */}
                    {this.state.isLoading ? <BoxLoading /> : <ReactPlayer url= {this.state.idUrl} controls={true} /> }
                    
                </div>
                 <div className="close-btn">
                    <Button className="closerender" variant="outlined" color="primary"  onClick={() => this.setState({openPopup_render: false,setOpenPopup_render:false})}>Close</Button>
                </div>
                

            </PopUp>


            {
                /*
                    Add Scene Pop Up
                */
            }

            <PopUp
            openPopup = {this.state.openPopup}
            setOpenPopup = {this.state.setOpenPopup}
            title = {this.state.title}
            size="sm"
            >
        
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>

                        <TextField
                            id="filled-full-width"
                            style={{ margin: 8 }}
                            placeholder="Enter Source"
                            fullWidth
                            margin="normal"
                            type="text"
                            name="urlsrc"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                            onChange={this.onChange}
                        />

                        <Divider variant="middle" />

                            <input
                            className="upload-input"
                            id="contained-button-file"
                            multiple
                            type="file"
                            />
                            <span>(or)</span>
                            <label htmlFor="contained-button-file">
                                <Button variant="contained" color="primary" component="span">Upload</Button>
                            </label>

                            <div className="submit-btn">
                                <Button  onClick={this.onSubmit} size="large" variant="contained" color="secondary" component="span">Submit</Button>
                            </div>


                            <div className="close-btn">
                            <Button  variant="outlined" color="primary"  onClick={() => this.setState({openPopup: false,setOpenPopup:false})}>Close</Button>
                            </div>

                    </FormGroup>
                </Form>
            </PopUp>

        </div>
                   
         
        );
    }
}

const mapStateToProps = state => ({
    dashboard: state.dashboard
})
export default connect(mapStateToProps, {addVideo, renderVideo, getItems, updateCurrVideo})(Timeline);