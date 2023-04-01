import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onchangeInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const searchResults = suggestionsList.filter(each =>
      each.suggestion.includes(searchInput),
    )

    return (
      <div className="bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="image"
          alt="google logo"
        />
        <div className="card">
          <div className="searchbar">
            <input
              type="search"
              onChange={this.onchangeInput}
              value={searchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="searchlogo"
            />
          </div>

          <ul>
            {searchResults.map(each => (
              <SuggestionItem suggestionList={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
