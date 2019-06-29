import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            search: {
                search: '',
                searchtype: ''
            }
        }
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        const search = this.state.search;

        search[name] = value;
        this.setState({search});
    }
    handleSubmit(event) {
        event.preventDefault();
        const url = 'http://localhost:8000/api/books/search/';
        const params = this.state.search.searchtype + this.state.search.search;
        fetch(url + params)
            .then(res => {
                if (!res.ok) {
                    alert('error');
                }
                return res.json()
            })
            .then(res => console.log(res))
    }
    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <label htmlFor='search'>Search</label>
                <input 
                    type='text' 
                    id='search' 
                    name='search' 
                    onChange={(e) => this.handleInputChange(e)}/>
                <label htmlFor='keyword'>Keyword</label>
                <input 
                    type='radio' 
                    id='keyword' 
                    value=''
                    name='searchtype' 
                    onChange={(e) => this.handleInputChange(e)}/>
                <label htmlFor='book-title'>Title</label>
                <input 
                    type='radio' 
                    id='book-title' 
                    value='intitle:'
                    name='searchtype' 
                    onChange={(e) => this.handleInputChange(e)}/>
                <label htmlFor='author'>Author</label>
                <input 
                    type='radio' 
                    id='author' 
                    value='inauthor:'
                    name='searchtype' 
                    onChange={(e) => this.handleInputChange(e)}/>
                <label htmlFor='isbn'>ISBN</label>
                <input 
                    type='radio' 
                    id='isbn' 
                    value='isbn:'
                    name='searchtype'
                    onChange={(e) => this.handleInputChange(e)}/>
                <button>Find Books</button>
            </form>

        )
    }
}

export default Search;