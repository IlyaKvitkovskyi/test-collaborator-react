import React from 'react';
import classnames from 'classnames';
import BasicSwitch from './Switch';
import Options from './Options';
import DB from '../assets/db.json';
import closeSvg from '../assets/images/close.svg';

export default function SitesNotifications() {
  const [data, setData] = React.useState(DB.data);

  const [isPersonalMessage, setIsPersonalMessage] = React.useState(true);
  const [isMessageSites, setIsMessageSites] = React.useState(true);
  const [isActiveSwitch, setIsActiveSwitch] = React.useState(true);
  const [indexDropdown, setIndexDropdown] = React.useState(null);
  const [isActiveDropdown, setIsActiveDropdown] = React.useState(false);
  const [searchAgentItems, setSearchAgentItems] = React.useState([]);

  const openDropdown = (index, active) => {
    setIndexDropdown(index);
    setIsActiveDropdown(active);
  };

  function addItem(index, string) {
    let newArray = [];

    if (searchAgentItems.length) {
      newArray = searchAgentItems.map((el) => el);
    } else {
      newArray.push([]);
    }

    if (newArray[index].length) {
      newArray[index].forEach((item) => {
        if (item === string) {
          console.log('1');
        } else {
          newArray[index].push(string);
        }
      });
    } else {
      newArray.push([string]);
    }

    // const array = searchAgentItems.map((item, newIndex) => {
    //   if (index === newIndex) {
    //     searchAgentItems[index].forEach((el) =>
    //       el === string ? '' : newArray[index].push(string),
    //     );
    //   } else {
    //     newArray.push([string]);
    //   }
    // });
    // console.log(array);

    // const updatedSearchAgentsItems = [...searchAgentItems, string];
    setSearchAgentItems(newArray);
    console.log(newArray);
    console.log(searchAgentItems);
  }

  return (
    <div className="messages__sites">
      <span className="messages__title"> {data.siteNotice.title} </span>

      <div className="messages__item">
        <div className="messages__item--left">
          <span className="messages__subtitle"> {data.siteNotice.news.title} </span>
        </div>
        <div className="messages__item--right">
          <label className="switch">
            <BasicSwitch isActive={isMessageSites} handleToggle={setIsMessageSites} />
            <span className="slider round"></span>
          </label>
          <p className="messages__desc">{data.siteNotice.news.text}</p>
        </div>
      </div>

      <div className="search-agent">
        <span className="search-agent__title"> {data.searchAgentTitle} </span>

        {data.searchAgents &&
          data.searchAgents.map((item, index) => (
            <div key={index} className="search-agent__row">
              <label>{item.label}</label>
              <div className="search-agent__inner">
                <div className="search-agent__items">
                  {searchAgentItems &&
                    searchAgentItems.map((itemEl, idx) => (
                      <div key={idx} className="search-agent__item">
                        <span className="search-agent__var">
                          {itemEl.text}
                          <span className="search-agent__close">
                            <img src={closeSvg} alt="close icon" />
                          </span>
                        </span>
                      </div>
                    ))}
                </div>

                <button
                  onClick={() => openDropdown(index, !isActiveDropdown)}
                  className="search-agent__details">
                  {item.details}
                </button>

                <div className="search-agent__dropdown">
                  {index === indexDropdown && (
                    <ul
                      className={classnames('search-agent__list', {
                        active: isActiveDropdown,
                      })}>
                      {item.detailsOptions &&
                        item.detailsOptions.map((option, optionKey) => (
                          <li
                            key={`${optionKey}_option`}
                            onClick={() => addItem(index, option)}
                            className="search-agent__item">
                            {option}
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="addvertising-company">
        <span className="addvertising-company__title search-agent__title">Рекламные компании</span>
        <div className="messages__item addvertising-company__item">
          <div className="messages__item--left">
            <span className="messages__subtitle">{data.advertisingCompany[0].title}</span>
          </div>
          <div className="messages__item--right">
            <label className="switch">
              <BasicSwitch isActive={isActiveSwitch} handleToggle={setIsActiveSwitch} />
              <span className="slider round"></span>
            </label>

            <Options />
          </div>
        </div>

        <div className="messages__item addvertising-company__item">
          <div className="messages__item--left">
            <span className="messages__subtitle">{data.advertisingCompany[1].title}</span>
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
