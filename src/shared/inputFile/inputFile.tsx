/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */

import './inputFile.css';
interface InputFileProps {
  text: string;
  onChange: (e: any) => void;
}

const InputFile: React.FC<InputFileProps> = ({ text, onChange }) => {
  return (
    <div className="file-input-container">
      <input type="file" id="fileInput" className="file-input" onChange={(e) => onChange(e)} title={text} />
      <label htmlFor="fileInput" className="file-label">
        <span className="file-label-text">{text}</span>
      </label>
    </div>
  );
};

export default InputFile;