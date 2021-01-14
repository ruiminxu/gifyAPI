import React, {Component} from 'react';
import GifCard from "./GifCard";

export default class SearchField extends Component{
    
    constructor(props)
    {
        super(props);
        this.state = {
            searchTerm: '',
            isClicked: false,
        }
    }
    
    handleSearch = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventdefault()
    }

    handleSearchInput = () =>{
        // console.log(this.state.searchTerm)
        this.props.searchInput(this.state.searchTerm);
    }

    handleTrendInput = () =>{
        this.props.trendInput();
    }

    handleRandomInput = () => {
        this.props.randomInput();
        this.setState({
            isClicked: true
        })
    }
    
    render()
    {
        return(
            <div className = "searchBoxContainer">
               
                <input placeholder = "look up a gif" name = "searchTerm" onChange={this.handleSearch}></input>
                   
                <button onClick = {this.handleSearchInput}>Search</button>
                <button onClick = {this.handleTrendInput}>Trending</button>
                <button onClick = {this.handleRandomInput}>Random</button>
               
                {
                    this.props.randomGifS.map((gif) =>{
                        return(
                            <GifCard name = {gif.id} source = {gif.images.original.url}/>
                        );
                    })
                }
            
            </div>
        );
    }
}




