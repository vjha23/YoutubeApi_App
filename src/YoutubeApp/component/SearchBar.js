import React, { Component } from 'react'

class SearchBar extends Component {
    state = {
        term: ''
    }
    onInputChange = (e) => {
        this.setState({ term: e.target.value })
    }
    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.term)
        this.setState({ term: '' })

    }
    render() {
        return (
            <div className='search_bar ui segment'>
                <form className='ui form' onSubmit={this.onFormSubmit}>
                    <div className='field'>
                        <label>Video Search</label>
                        <input
                            type='text'
                            value={this.state.term}
                            placeholder='Enter The Video Name'
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar
