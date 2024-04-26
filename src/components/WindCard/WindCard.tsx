import React from "react";
import "./WindCard.css";
import compass from "../../assets/compass.svg";
import Compass from "../Compass/Compass";

interface Props {
  data: {
    speed: number;
    chill: number;
    direction: string;
  };
}

const WindCard = (props: Props) => {
  return (
    <div className="wind-card">
      <div className="left-side">
        <div className="heading">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="-5.0 -10.0 110.0 135.0"
          >
            <g>
              <path className="svg-color" d="m94.77 28.629c-0.96875-8.2617-5.7109-13.391-13-14.07-7.2695-0.67969-14.891 3.3906-16.602 8.8984-2.0586 6.5898 0.53125 10.172 2.25 11.719 2.9297 2.6406 7.5 3.2891 11.371 1.6211 3.1992-1.3789 4.9688-4.0898 4.7383-7.25-0.21875-2.9492-2.1602-5.4883-4.7305-6.1719-0.53125-0.14062-1.0781 0.17188-1.2188 0.71094-0.14062 0.53906 0.17188 1.0781 0.71094 1.2188 1.7305 0.46094 3.1016 2.3086 3.25 4.3906 0.17188 2.3008-1.1211 4.2305-3.5391 5.2695-3.1211 1.3516-6.9219 0.82812-9.2383-1.2695-2.3594-2.1289-2.9609-5.5508-1.6797-9.6406 1.4297-4.5781 8.2188-8.0781 14.512-7.5 3.6797 0.33984 10.039 2.3984 11.199 12.309 0.55859 4.7812-0.60156 8.6094-3.4414 11.391-7.2188 7.0508-23.09 6-31.898 4.75-19.73-2.8008-30.551-0.64062-52.012 17.09-0.42969 0.35156-0.48828 0.98047-0.12891 1.4102 0.19922 0.23828 0.48047 0.35938 0.76953 0.35938 0.21875 0 0.44922-0.078125 0.64062-0.23047 21.039-17.391 31.059-19.41 50.461-16.648 9.1719 1.3008 25.738 2.3516 33.578-5.3008 3.3086-3.2305 4.6602-7.6211 4.0312-13.051z" />
              <path className="svg-color" d="m82.52 59.93c-13.699-10.898-47.699-16.109-59.699-2.4102-0.35937 0.42188-0.32031 1.0508 0.089844 1.4102 0.42188 0.35937 1.0508 0.32031 1.4102-0.089844 5.0508-5.7695 15.172-8.4609 27.75-7.3711 11.309 0.98047 22.77 4.9102 29.199 10.031 6.7617 5.3789 7.8594 14.148 5.0312 19.539-2.3594 4.4883-6.8398 6.1016-12.289 4.4297-7.1992-2.1992-8.6211-6.8789-7.5508-10.52 1.1211-3.8008 5.0312-6.9492 9.6289-5.6484 3.1484 0.89062 4.1484 3.1406 4.0312 4.9492-0.10156 1.4414-0.94922 3-2.6484 3.2383-0.55078 0.078125-0.92969 0.58984-0.85156 1.1289 0.078125 0.55078 0.57812 0.92187 1.1289 0.85156 2.3906-0.33984 4.1797-2.4414 4.3594-5.0898 0.16016-2.4688-1.1719-5.7891-5.4805-7.0117-5.7305-1.6211-10.738 2.3789-12.102 7-1.2812 4.3516 0.28125 10.359 8.8789 13 1.5898 0.48828 3.1289 0.73047 4.5781 0.73047 4.3516 0 7.9609-2.1406 10.07-6.1406 3.1719-6.0195 2.3008-15.781-5.5508-22.031z" />
              <path className="svg-color" d="m9.3711 53.699c0.25 0 0.5-0.089844 0.69141-0.28125 13.129-12.578 24.578-13.211 33.789-13.711 7.3086-0.39844 13.09-0.71875 16.488-7.1094 2.9102-5.4805 2.4219-12.328-1.1992-16.641-3.2617-3.8789-8.3789-5.0586-14.051-3.2188-5.3789 1.75-6.9297 6.9609-6.0898 11.07 0.82031 4.0117 4.0586 7.8281 9.4102 7.3516 4.1406-0.37109 6.3516-3.3984 6.6602-6.0586 0.32031-2.7812-1.2695-5.1797-4.0508-6.1094-0.53125-0.17969-1.0898 0.10937-1.2617 0.62891-0.17187 0.51953 0.10938 1.0898 0.62891 1.2695 1.9102 0.64062 2.9219 2.1211 2.6992 3.9805-0.21875 1.8789-1.8281 4.0312-4.8594 4.3008-4.3984 0.39844-6.6797-2.8516-7.2695-5.7617-0.67188-3.2617 0.53125-7.3984 4.7383-8.7695 4.9297-1.6016 9.1484-0.67969 11.898 2.6016 3.1094 3.6992 3.5 9.6289 0.96094 14.41-2.8594 5.3906-7.8789 5.6719-14.828 6.0508-9.0312 0.5-21.398 1.1797-35.059 14.27-0.39844 0.37891-0.41016 1.0195-0.03125 1.4102 0.19922 0.21094 0.46094 0.30859 0.71875 0.30859z" />
            </g>
          </svg>
          <p>Wind</p>
        </div>
        <div className="speed-container">
          <div className="speeds">
            <span className="speed">{props.data.speed}</span>
            <div className="notations">
              <span>MPH</span>
              <span>Wind</span>
            </div>
          </div>
          <div className="speeds">
            <span className="speed">{props.data.chill}</span>
            <div className="notations">
              <span>MPH</span>
              <span>Gust</span>
            </div>
          </div>
        </div>
      </div>
      <Compass direction={props.data.direction} />
    </div>
  );
};

export default WindCard;
