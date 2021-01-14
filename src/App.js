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
            isLoading: null,
        }
    }

    handleSearchByInput =  async (searchTermFromChild) =>
    {
        const url = `https://api.giphy.com/v1/gifs/search?q=${searchTermFromChild}&rating=g&api_key=VPO2hf8Msh28T0DeFVHly9hhQh207tC2`;

        this.setState({isLoading: true})

        try 
        {
          let gif = await axios.get(url);
          this.setState({ gif: gif.data.data, isLoading: false});
        } catch (error) {
          console.error(error);
        }
    }

    handleTrendingGif = async () => 
    {
        const url = `https://api.giphy.com/v1/gifs/trending?q=&rating=g&api_key=VPO2hf8Msh28T0DeFVHly9hhQh207tC2`;
        
        this.setState({isLoading: true})

        try 
        {
          let gif = await axios.get(url);
          this.setState({ trendingGif: gif.data.data, isLoading: false});
        } catch (error) {
          console.error(error);
        } 
    }

    handleRandomGif = async () => 
    {
      let url = `https://api.giphy.com/v1/gifs/random?q=&rating=g&api_key=VPO2hf8Msh28T0DeFVHly9hhQh207tC2`;
       
      this.setState({isLoading: true})

      try 
      {
        let gif = await axios.get(url);
        this.setState({ randomGif: [gif['data']['data']], isLoading: false});
      } catch (error) {
        console.error(error);
      } 
    }
    
    render()
    {
        return( 
            <>
                <SearchField 
                searchGif = {this.state.gif} 
                searchInput = {this.handleSearchByInput} 
                trendInput = {this.handleTrendingGif} 
                randomInput = {this.handleRandomGif} 
                trendingGif = {this.state.trendingGif} 
                randomGif = {this.state.randomGif}
                loading = {this.state.isLoading}
                />
            </>
        );
    }
}








