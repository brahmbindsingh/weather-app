import React from "react";
import "./Compass.css";
import compass from '../../assets/compass.png';
import needle from '../../assets/needle.png';

interface Props{
    direction: string;
}

const Compass = (props: Props) => {

    const getRotateAngle: () => number = () => {
        switch (props.direction.toLowerCase()) {
            case 'west':
            case 'east':
                return 90;

            case 'north':
            case 'south':
                return 0;

            case 'northeast':
            case 'southwest':
                return -45;

            case 'northwest':
            case 'southeast':
                return 45;
        
            default:
                return 0;
        }
    }

  return (
    <div className="compass">
      <img src={compass} alt="" className="compass-image" />
      <img src={needle} className = "needle" alt="" style={{ transform: `translate(-50%, -50%) rotate(${getRotateAngle()}deg)` }} />
    </div>
  );
};

export default Compass;
