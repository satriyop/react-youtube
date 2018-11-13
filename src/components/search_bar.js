import React from 'react';

//define component
//declaring class
class SearchBar extends React.Component {

	constructor(props) {
		super(props);

		this.state = { term: '' };
		// this.onInputChange = this.onInputChange.bind(this);
	}
	//finding method on a class for react
	//on normal JS object render:function
	//can remove onInput by call back func/arrow
	render() {
		return (
			<div className="search-bar">
				<input 
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)} />
{/*					Value of the input: { this.state.term }
*/}			</div>
		);
	}

	onInputChange(term) {
		this.setState({ term: term });
		this.props.onSearchTermChange(term);
		// console.log(event.target.value);
	}
}

export default SearchBar;