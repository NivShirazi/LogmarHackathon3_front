import Button from '../../shared/button/button';
import './homePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>GreenLens</h1>
      <p>האפליקציה שהופכת את מתחם העבודה שלכם לירוק וידידותי לסביבה</p>
      <Button onClick={() => { }} text='העלה תמונה' />
      <Button onClick={() => { }} text='צלם תמונה' />
      <Button onClick={() => { }} text='היסטוריית תמונות' />
    </div>
  );
};

export default HomePage;