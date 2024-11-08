import './background.css';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.png';
import car1_video from'../../assets/car1_video.mp4';    

interface BackgroundProps {
  playStatus: boolean;
  heroCount: number;
}

export const Background: React.FC<BackgroundProps> = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <video className='background fade-in' autoPlay loop muted>
        <source src={car1_video} type='video/mp4' />
      </video>
    );
  } else if (heroCount === 0) {
    return (
      <img className='background fade-in' src={image1} alt="" />
    );
  } else if (heroCount === 1) {
    return (
      <img className='background fade-in' src={image2} alt="" />
    );
  } else if (heroCount === 2) {
    return (
      <img className='background fade-in' src={image3} alt="" />
    );
  }
  return null;
};

export default Background;