import React, { useState } from "react";
import ToggleSwitch from "./components/ToggleSwitch";
import DateDropdown from "./components/DateDropdown";
import StrategyCards from "./components/StrategyCards";
import { dateArray } from "./data";
import "./App.css";

const App = () => {
  const [selectedView, setSelectedView] = useState("Bullish");
  const [selectedDate, setSelectedDate] = useState(dateArray[0]);

  return (
    <div className="app-container">
      <h1>Trading Strategy Dashboard</h1>
      <ToggleSwitch selectedView={selectedView} setSelectedView={setSelectedView} />
      <DateDropdown selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <StrategyCards selectedView={selectedView} selectedDate={selectedDate} />
    </div>
  );
};

export default App;
