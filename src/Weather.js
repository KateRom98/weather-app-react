import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input
          type="search"
          placeholder="Enter a city..."
          autoFocus="on"
          className="search"
        />
        <input type="submit" value="Search" className="button" />
      </form>
      <h3 className="text-center m-4 fs-1">Berlin, Germany</h3>
      <h4>Wednesday, 14:00 </h4>
      <div className="row weatherIndex">
        <div className="col">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAg5JREFUeNrt2tGRgyAQBmBLoARLSAmUkBIsISVYgiVYgiVQgq//myXQAfdwS4bJqRFuCWjWmZ3JaGYin8AumMY513xzNAIgAAIgAAIgAAIgAAIgAALwe4LhANACGADMANxLzHStbQoc2QGoce5g9JcBAKA2nvi7mAGoUwP8o/FPhOoBAGgAIwBD0ftxHNntiw6HJICdBiqa8BxD2E9MjNEAAO4bNzwxPn0fA/WsbNkjBWDZuNkHXZ8ZAQ5DfQQAwG3nJjR9xxWKpOwRC6D3AGgOcGdCYAMI0p8rHEMWAGq82Zit++B7roJoWQEAdBs/NPouR/PDUAnAwAaw0+27YKEzVdLw6EryCIDZabymIeBqC06AP93+QEa4LMASlLv2GwF81zc1N54bwJe29kA1WHMY/wBjAe4vY388KUBYLbY5FkNniudSOwXAXSTmlLWAKtRl/a4T91K7qxlgXKvpKQVzzUOmxiFgg70FBeBBu0I9fVacVWiNk6AOFmB2A6gLUrIO9wAoa5mcADnT4Phm9blWlClC0B6Pzve5AHIWQm1EmW1pSNiVcv129GGlboubXGmJGsWS56l37GFOqQA5FkMmputGDKeRLQ1+4mAEWKp4OxzR6KXEirA4QOZ9RPPuHWNRAMb3iMmbpKUBdOkNktIAt+oB5F9iAiAAAiAAAiAAAiAAAiAAAiAAAiAAl48fFVnRpiVnD+AAAAAASUVORK5CYII="
            alt="Clouds"
            width="150px"
          />
          <div>Cloudy</div>
        </div>
        <div className="col temperature">14°C</div>
        <div className="col">
          <ul>
            <li>Wind: 21 km/h</li>
            <li>Humidity: 74%</li>
            <li>Pressure: 1025mb</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
