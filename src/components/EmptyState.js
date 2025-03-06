import React from "react";

const EmptyState = ({ selectedDate }) => {
  return (
    <div className="empty-state">
      <p>No strategies available for {selectedDate}</p>
    </div>
  );
};

export default EmptyState;
