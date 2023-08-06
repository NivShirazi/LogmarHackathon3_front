/* eslint-disable react/prop-types */

import './inputFile.css';
interface InputFileProps {
  text: string;
  onClick: () => void;
}

const InputFile: React.FC<InputFileProps> = ({ text, onClick }) => {
  return (
    <div className="file-input-container">
      <input type="file" id="fileInput" className="file-input" onClick={onClick} title={text} />
      <label htmlFor="fileInput" className="file-label">
        <span className="file-label-text">Choose File</span>
      </label>
    </div>
  );
};

export default InputFile;