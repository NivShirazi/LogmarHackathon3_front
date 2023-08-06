/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import Button from '../../shared/button/button';
import InputFile from '../../shared/inputFile/inputFile';
import './homePage.css';
import { useNavigate } from 'react-router';
import vision from '@google-cloud/vision';


const HomePage = () => {

  const [file, setFile] = useState<File>();
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleFile = (e: any) => {
    setFile(e.target.files[0]);
  }

  const getApiLables = async () => {
    // const client = new vision.ImageAnnotatorClient();
    // const [result] = await client.labelDetection('https://media.istockphoto.com/id/1093508248/photo/modern-work-table-with-computer-laptop-and-cityscapes-view-from-window-business-concepts-ideas.jpg?s=612x612&w=0&k=20&c=vpMc1UR6KfgPe4GYcFG4x1FfPKLyYsoKqrAJolfBSZs=');
    // console.log(result);
  }

  useEffect(() => {
    let intreval: any;
    if (file) {
      setLoading(true);
      intreval = setInterval(() => {
        navigate('/results', {
          state: {
            file: file
          }
        });
      }, 2000);
    }
    return () => {
      setLoading(false);
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
      {loading && <div className="center-body">
        <div className="loader-circle-15"></div>
      </div>}
    </div>
  );
};

export default HomePage;