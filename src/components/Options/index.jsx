import React from 'react';
import DB from '../../assets/db.json';
import './Options.scss';
import arrowSvg from '../../assets/images/arrow.svg';

export default function Options({ active, setActive }) {
  const [data, setData] = React.useState(DB.data);
  return (
    <div className="select-menu">
      <div className="select-btn">
        <span className="sBtn-text">{data.allMassages.personalMessage.selected}</span>
        <img src={arrowSvg} alt="Arrow icon" />
      </div>

      <ul className="options">
        <li className="option">
          <span className="option-text">
            {data.allMassages.personalMessage.personalMessageOptions[0]}
          </span>
        </li>
        <li className="option">
          <span className="option-text">
            {data.allMassages.personalMessage.personalMessageOptions[1]}
          </span>
        </li>
        <li className="option">
          <span className="option-text">
            {data.allMassages.personalMessage.personalMessageOptions[2]}
          </span>
        </li>
      </ul>
    </div>
  );
}
