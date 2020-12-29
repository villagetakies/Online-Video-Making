import React from 'react';
import 'video-react/dist/video-react.css';
import {connect} from 'react-redux';
import {getItems} from '../actions/dashboardActions';
import PropTypes from 'prop-types';
import "./MainScreen.css";
import ReactPlayer from 'react-player';

class MainScreen extends React.Component {
    
    componentDidMount() {
        this.props.getItems();
    }
    render() {
        //const {timeline} = this.props.dashboard;
        return (

        <div className="mainscreen">            
            <ReactPlayer url= {this.props.dashboard.currentVideo} controls={true} />
        </div>
            
        );
    }
}

MainScreen.propTypes = {
    getItems: PropTypes.func.isRequired,
    dashboard: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    dashboard: state.dashboard
}); 


export default connect(mapStateToProps, {getItems})(MainScreen);