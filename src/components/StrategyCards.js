import React from "react";
import { strategyArray } from "../data";
import EmptyState from "./EmptyState";

const StrategyCards = ({ selectedView, selectedDate }) => {
 
  const viewData = strategyArray.find((item) => item.View === selectedView);
  
  
  const strategies = viewData?.Value[selectedDate] || [];

 
  const strategyCounts = strategies.reduce((acc, strategy) => {
    acc[strategy] = (acc[strategy] || 0) + 1;
    return acc;
  }, {});

  if (strategies.length === 0) {
    return <EmptyState selectedDate={selectedDate} />;
  }

  return (
    <div className="strategy-container">
      {Object.entries(strategyCounts).map(([strategy, count]) => (
        <div key={strategy} className="strategy-card">
          <p className="strategy-name">{strategy}</p>
          <p className="strategy-count">{count} {count === 1 ? "Strategy" : "Strategies"}</p>
        </div>
      ))}
    </div>
  );
};

export default StrategyCards;