import React, {Component} from 'react';
import GifCard from "./GifCard";

export default class SearchField extends Component{
    
    constructor(props)
    {
        super(props);
        this.state = {
            searchTerm: '',
            isSearchClicked: false,
            isTrendClicked: false,
            isRandomClicked: false,
        }
    }

    handleSubmit = (event) =>{
        event.preventdefault()
    }
    
    handleSearch = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSearchInput = () =>{
        this.setState({
            isSearchClicked: true,
            isTrendClicked: false,
            isRandomClicked: false
        }
    )
        this.props.searchInput(this.state.searchTerm, this.state.isSearchClicked);
    }

    handleTrendInput = () =>{
        this.setState({
            isSearchClicked: false,
            isTrendClicked: true,
            isRandomClicked: false
        })
        this.props.trendInput(this.state.searchTerm, this.state.isTrendClicked);
    }

    handleRandomInput = () => {
        this.setState({
            isSearchClicked: false,
            isTrendClicked: false,
            isRandomClicked: true
        })
        this.props.randomInput(this.state.searchTerm, this.state.isRandomClicked);
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
                   this.props.loading === true?
                  
                   <div>
                       Loading
                   </div> 
                   :
                   this.props.loading === null?
                   <div> Default </div>
                   :
                   this.state.isSearchClicked? 
                   this.props.searchGif.map((gif) =>{
                       console.log(gif)
                       return(
                           <GifCard name = {gif.id} source = {gif.images.original.url}/>
                            );
                   }) 
                   : this.state.isTrendClicked? 
                   this.props.trendingGif.map((gif) =>{
                       console.log(gif)
                       return(
                           <GifCard name = {gif.id} source = {gif.images.original.url}/>
                            );
                   })
                   : 
                   this.props.randomGif.map((gif) =>{
                       return(
                           <GifCard name = {gif.id} source = {gif.images.original.url}/>
                            );
                   })
                }
            </div>
        );
    }
}




// {
//     this.props.randomGifS.map((gif) =>{
//         return(
//             <GifCard name = {gif.id} source = {gif.images.original.url}/>
//         );
//     })
// }