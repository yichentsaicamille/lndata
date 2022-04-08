import React from 'react';
import '../styles/filterbar.css';

function Filterber() {
  return (
    <>
      <div className="filter-wrap">
        <div className="select-wrap">
          <p>Team：</p>
          <div className="select">
            <select name="" className="">
              <option>ALL</option>
              <option>LA Lakers</option>
              <option>GS Warriors</option>
              <option>NY Knicks</option>
            </select>
          </div>
        </div>
        <div className="keywrap">
          <p>Keywords：</p>
          <input
            value=""
            type="text"
            className="inputText"
            name="inputText"
            placeholder="請輸入關鍵字"
          />
        </div>
        <div className="search">
          <input type="submit" className="searchBtn" value="Search" />
        </div>
      </div>
    </>
  );
}

export default Filterber;
