import React, {Component} from 'react';
import axios from 'axios';

export default class GifCard extends Component
{
    render(){
        return(
            <div key= {this.props.name}>
                <img key = {this.props.name} src = {this.props.source}/>
            </div>
        );
    }
}