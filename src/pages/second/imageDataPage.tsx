/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
import './imageDataPage.css';
import { SuggestionList } from './components/suggestionList/suggestionList';
import { useLocation } from 'react-router';



const SecondPage = () => {

  const location = useLocation();

  const file: File = location.state.file;

  return (
    <div className="second-page">
      <h2>Thanks for uploading!</h2>
      <div className='img-container'>
        <img className='image' src={URL.createObjectURL(file)} alt="desk" />
      </div>
      <p>Here is how you can improve your workspace:</p>
      <SuggestionList suggestions={['Change plastic bottle to reusable one', 'Add recycle bin', 'Add Plants']} />
    </div>
  );
};

export default SecondPage;