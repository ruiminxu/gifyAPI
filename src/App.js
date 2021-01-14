import './App.css';
import SearchField from './Component/searchField';
import React, {Component} from 'react';
import axios from 'axios';

export default class App extends Component{
  constructor()
    {
        super();
        this.state = {
            gif: [],
            searchTerm: '',
            trendingGif: [],
            randomGif: [],
            isLoading: true,
        }
    }

    handleSearchByInput =  async (searchTermFromChild) =>{
       
        const urlPart1 = "https://api.giphy.com/v1/gifs/search?q=";
        const urlPart2 = searchTermFromChild;
        const urlPart3 = "&rating=g&";
        const key = "api_key=VPO2hf8Msh28T0DeFVHly9hhQh207tC2";
        const completeUrl = urlPart1 + urlPart2 + urlPart3 + key;
        
        try {
          let gif = await axios.get(completeUrl);
          this.setState({ gif: gif.data.data});
        } catch (error) {
          console.error(error);
        }
    }

    handleTrendingGif = async () => {
      const urlPart1 = "https://api.giphy.com/v1/gifs/trending?q=";
      // const urlPart2 = searchTermFromChild;
      const urlPart3 = "&rating=g&";
      const key = "api_key=VPO2hf8Msh28T0DeFVHly9hhQh207tC2";
      const completeUrl = urlPart1 + urlPart3 + key;
      try {
        let gif = await axios.get(completeUrl);
        this.setState({ trendingGif: gif.data.data});
      } catch (error) {
        console.error(error);
      }
    }

    handleRandomGif = async () => {
      const urlPart1 = "https://api.giphy.com/v1/gifs/random?q=";
      // const urlPart2 = searchTermFromChild;
      const urlPart3 = "&rating=g&";
      const key = "api_key=VPO2hf8Msh28T0DeFVHly9hhQh207tC2";
      const completeUrl = urlPart1 + urlPart3 + key;
      try {
        let gif = await axios.get(completeUrl);
        this.setState({ randomGif: [gif['data']['data']], isLoading: false});
      } catch (error) {
        console.error(error);
      } 
    }
    
  
    render()
    {
        return( 
            <div>
                <SearchField 
                gif = {this.state.gif} 
                searchInput = {this.handleSearchByInput} 
                trendInput = {this.handleTrendingGif} 
                randomInput = {this.handleRandomGif} 
                trendingGif = {this.state.trendingGif} 
                randomGifS = {this.state.randomGif}
                loading = {this.state.isLoading}
                />
            </div>
        );
    }
}








