import React, {Component} from 'react';
import axios from 'axios';

export default class GifCard extends Component{
    
    constructor()
    {
        super();
        this.state = {
            gif: []
        }
    }
    
    async componentDidMount() {
        
        
        const key = "VPO2hf8Msh28T0DeFVHly9hhQh207tC2";
        let url = "https://api.giphy.com/v1/gifs/search?q=gun&rating=g&api_key=VPO2hf8Msh28T0DeFVHly9hhQh207tC2";
        
        try {
          let gif = await axios.get(url);
          this.setState({ gif: gif.data.data});
          
        } catch (error) {
          console.error(error);
        }
    }

    render()
    {
        return(
            <div key = "container">
                {this.state.gif.map((s) => {
                    
                    let path = s.images.original.url;
                    return(
                        <img key = {s.id} src={path}></img>
                    );
                })}
            </div>
        );
    }
}