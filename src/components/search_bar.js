import React, { Component } from 'react';

// functional component
// const SearchBar = () => {
//     return <input />;
// };
//
// export default SearchBar;

// class based component
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    render() {
        return (
            <div className="search-bar">
                Search:
                <input
                    onChange={(event) => this.onInputChange(event.target.value)}
                    value={this.state.term}
                    style={styles.inputStyle}
                    placeholder=' Enter your search...'
                />
            </div>
        );
    }
}
const styles = {
    inputStyle: {
        width: '60em',
        borderRadius: 10,
        border: '1px, blue',
        paddingTop: 5,
        paddingBottom: 5,
        marginTop: 20,
        marginBottom: 10
    }
};

export default SearchBar;
