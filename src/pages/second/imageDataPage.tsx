/* eslint-disable react/prop-types */
import { SuggestionList } from './components/suggestionList/suggestionList';
import './imageDataPage.css';
import desk from '../../assets/WhatsApp Image 2023-08-06 at 12.40.31 (1).jpeg';



const SecondPage = () => {
  return (
    <div className="second-page">
      <h2>Thanks for uploading!</h2>
      <p>Here is how you can improve your workspace:</p>
      <div className='img-container'>
        <img className='image' src={desk} alt="desk" />
      </div>
      <SuggestionList suggestions={['Add a plant', 'Add a plant', 'Add a plant']} />
    </div>
  );
};

export default SecondPage;