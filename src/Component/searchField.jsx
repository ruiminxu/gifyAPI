import React, {Component} from 'react';
import GifCard from "./GifCard";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col} from 'react-bootstrap'

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
        this.setState({
            searchTerm: ''
        })
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
            isRandomClicked: false,
            searchTerm: ''
        }
       
    )
        this.props.searchInput(this.state.searchTerm, this.state.isSearchClicked);
    }

    handleTrendInput = () =>{
        this.setState({
            isSearchClicked: false,
            isTrendClicked: true,
            isRandomClicked: false,
            searchTerm: ''
        })
        this.props.trendInput(this.state.isTrendClicked);
    }

    handleRandomInput = () => {
        this.setState({
            isSearchClicked: false,
            isTrendClicked: false,
            isRandomClicked: true,
            searchTerm: ''
        })
        this.props.randomInput(this.state.isRandomClicked);
    }
    
    render()
    {
        return(
            <div className = "searchBoxContainer">
                <Row>
                    <Col style = {{height: '300px'}}> </Col>
                </Row>
                <Row>
                    <Col style = {{width: '100px'}}></Col>
                    <h1 className = "title">Gify API</h1>
                    <Col style = {{width: '100px'}}></Col>
                </Row>
                <Row>
                   <Col style = {{width: '100px'}}></Col>
                   <Col>
                     <input className = "searchBox" value = {this.state.searchTerm} placeholder = "look up a gif..." name = "searchTerm" onChange={this.handleSearch}></input>
                   </Col>
                   <Col style = {{width: '100px'}}></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col style = {{display: 'flex', justifyContent: 'space-between'}}>
                        <button style = {{outline: 'none !important' }} className = "btn " name = "search" onClick = {this.handleSearchInput}>Search</button>
                        <button className = "btn" name = "trending" onClick = {this.handleTrendInput}>Trending</button>
                        <button className = "btn" name = "random" onClick = {this.handleRandomInput}>Random</button>
                    </Col>
                    <Col></Col>
                </Row>
                <Row style={{textAlign: 'center'}}>
                        
                    {this.props.loading === true?
    
                        <div>
                            Loading
                        </div> 
                        :
                        this.props.loading === null?
                        <div>  </div>
                        :
                        this.state.isSearchClicked? 
                       
                        this.props.searchGif.map((gif, index) =>
                        {
                            return(
                            <GifCard name = {gif.id} key = {index + 1} source = {gif.images.original.url}/>
                            );
                        }) 
                        
                        : this.state.isTrendClicked? 
                          this.props.trendingGif.map((gif, index) =>
                          {
                            console.log(gif)
                            return(
                                    <GifCard name = {gif.id} key = {index + 1} source = {gif.images.original.url}/>
                                );
                        })
                        : 
                    
                        this.props.randomGif.map((gif, index) =>
                        {
                            return(
                                <Col>
                                    <GifCard name = {gif.id} key = {index + 1} source = {gif.images.original.url}/>
                                </Col>
                                    );
                        })
                    }
                    </Row>
            
            </div>
        );
    }
}
