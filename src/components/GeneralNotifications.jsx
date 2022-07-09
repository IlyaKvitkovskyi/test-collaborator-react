import React from 'react';
import BasicSwitch from './Switch';
import Options from './Options';
import DB from '../assets/db.json';

import infoSvg from '../assets/images/info.svg';
import arrowSvg from '../assets/images/arrow.svg';

export default function GeneralNotifications() {
  const [data, setData] = React.useState(DB.data);
  const [isWelcomeSeries, setIsWelcomeSeries] = React.useState(true);
  const [isEducationVebinars, setEducationVebinars] = React.useState(true);
  const [isPersonalMessage, setIsPersonalMessage] = React.useState(true);

  const [modalActive, setModalActive] = React.useState(false);

  return (
    <div className="messages__general">
      <span className="messages__title">{data.allMassages.title}</span>
      <div className="messages__items">
        <div className="messages__item">
          <div className="messages__item--left">
            <span className="messages__subtitle">{data.allMassages.welcomeSeries.title}</span>
          </div>
          <div className="messages__item--right">
            <label className="switch">
              <BasicSwitch isActive={isWelcomeSeries} handleToggle={setIsWelcomeSeries} />
              <span className="slider round"></span>
            </label>
            <p className="messages__desc">{data.allMassages.welcomeSeries.text}</p>
          </div>
        </div>

        <div className="messages__item">
          <div className="messages__item--left">
            <span className="messages__subtitle">{data.allMassages.educationVebinars.title}</span>
          </div>
          <div className="messages__item--right">
            <label className="switch">
              <BasicSwitch isActive={isEducationVebinars} handleToggle={setEducationVebinars} />
              <span className="slider round"></span>
            </label>
            <p className="messages__desc">{data.allMassages.educationVebinars.text}</p>
          </div>
        </div>

        <div className="messages__item">
          <div className="messages__item--left">
            <span className="messages__subtitle">{data.allMassages.personalMessage.title}</span>
            <div className="messages__item--left-w">
              <img className="messages__item--left-img" src={infoSvg} alt="Info icon" />
              <div className="arrow">Письма об обновлениях и улучшениях платформы</div>
            </div>
          </div>
          <div className="messages__item--right">
            <label className="switch">
              <BasicSwitch isActive={isPersonalMessage} handleToggle={setIsPersonalMessage} />
              <span className="slider round"></span>
            </label>

            <Options />
          </div>
        </div>
      </div>
    </div>
  );
}
