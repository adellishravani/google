import './index.css'

const SuggestionItem = props => {
  const {suggestion} = props

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
