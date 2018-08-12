import  React,{Component} from 'react';
import './Search.css';

class Search extends Component{
	constructor(props){
		super(props)
		this.state={
			term:''
		}
	}
	render(){
		return(
			<div>
			  <input className='searchinput' placeholder='Search for Repos' value={this.state.term} onChange={(event)=>{
			  	this.setState({term:event.target.value});
			  	this.props.searchedTerm(this.state.term);
			  }}/>
			</div>
		)
	}
}

export default Search;