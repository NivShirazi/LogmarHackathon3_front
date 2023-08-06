/* eslint-disable react/prop-types */
import "./suggestionList.css";

interface SecondPageProps {
  suggestions: string[],
}

export const SuggestionList: React.FC<SecondPageProps> = ({ suggestions }) => {
  return <ul>
    {suggestions.map((suggestion, index) => (
      <li key={index}>{suggestion}</li>
    ))}
  </ul>
}