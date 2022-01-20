import React from "react";

export const Filters = ({ buildingTypes, setSelectedBuildingType, selectedBuildingType }) => {
  return (
    <div className="filters-wrapper">
      <ul className="filters">
        <li onClick={() => setSelectedBuildingType(null)} className={!selectedBuildingType ? 'selected' : ''}>All</li>
        {buildingTypes.map((buildingType, key) => (
          <li
            onClick={() => setSelectedBuildingType(buildingType)}
            key={key}
            className={selectedBuildingType === buildingType ? 'selected' : ''}
          >{buildingType}</li>
        ))}
      </ul>
    </div>
  );
};