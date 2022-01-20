import React from "react";

export const Building = ({ building, onClick }) => {
  return (
    <div className="building" onClick={onClick}>
      <img src={`/assets/${building.imageSrc}`} alt={building.name} />

      <div className="building-properties">
        <span className="building-title">{building.name}</span>

        <div className="building-meta">
          <div className="building-meta-row">
            <span>Type:</span>
            <span>{building.type}</span>
          </div>
          <div className="building-meta-row">
            <span>Status:</span>
            <span>{building.status}</span>
          </div>
          <div className="building-meta-row">
            <span>Gross area:</span>
            <span>{(new Intl.NumberFormat().format(building.grossArea))} sq ft</span>
          </div>
        </div>

        <div className="building-button">
          View details
        </div>
      </div>
    </div>
  );
};