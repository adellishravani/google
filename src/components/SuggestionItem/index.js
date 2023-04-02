import './index.css'

const SuggestionItem = props => {
  const {suggestionList} = props
  const {suggestion} = suggestionList

  return (
    <li className="item">
      <p className="suggestion">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
      />
    </li>
  )
}

export default SuggestionItem
