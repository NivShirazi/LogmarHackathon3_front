/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import Button from '../../shared/button/button';
import InputFile from '../../shared/inputFile/inputFile';
import './homePage.css';
import { useNavigate } from 'react-router';

const HomePage = () => {

  const [file, setFile] = useState<File>();

  const navigate = useNavigate();

  const handleFile = (e: any) => {
    setFile(e.target.files[0]);
  }

  useEffect(() => {
    let intreval: any;
    if (file) {
      intreval = setInterval(() => {
        navigate('/results', {
          state: {
            file: file
          }
        });
      }, 1500);
    }
    return () => {
      clearInterval(intreval);
    }
  },
    [file]);

  return (
    <div className="home-page">
      <h1>GreenLens</h1>
      <p>האפליקציה שהופכת את מתחם העבודה שלכם לירוק וידידותי לסביבה</p>
      <InputFile onChange={(e) => handleFile(e)} text='העלה תמונה' />
      <Button onClick={() => { }} text='היסטוריית תמונות' />
    </div>
  );
};

export default HomePage;