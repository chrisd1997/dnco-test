import React, {useEffect} from "react";

export const Aside = ({ building, close }) => {
  const getBuildingTotalSpace = () => {
    return building?.floors.reduce( function(a, b){
      return a + b['availableSpace'];
    }, 0);
  };

  return (
    <aside className={building ? 'show' : ''}>
      <div className="aside-background" />

      <button type="button" className="close-aside" onClick={() => close()}>X</button>

      <img src={`/assets/${building?.imageSrc}`} alt={building?.name} />

      <div className="aside-inner">
        <span className="building-title">{building?.name}</span>

        <div className="building-meta">
          <div className="building-meta-row">
            <span>Type:</span>
            <span>{building?.type}</span>
          </div>
          <div className="building-meta-row">
            <span>Location:</span>
            <span>{building?.location}</span>
          </div>
          <div className="building-meta-row">
            <span>Status:</span>
            <span>{building?.status}</span>
          </div>
          <div className="building-meta-row">
            <span>Gross area:</span>
            <span>{(new Intl.NumberFormat().format(building?.grossArea))} sq ft</span>
          </div>
          <div className="building-meta-row">
            <span>Current total available space:</span>
            <span>{(new Intl.NumberFormat().format(getBuildingTotalSpace()))} sq ft</span>
          </div>
        </div>

        <span className="building-description">{building?.description}</span>

        <table>
          <thead>
            <tr>
              <th>Floor</th>
              <th>Available Space</th>
              <th>Occupier(s)</th>
            </tr>
          </thead>
          <tbody>
            {building?.floors.filter((floor) => !floor.disabled).map((floor, key) => (
              <tr key={key}>
                <td>{floor.label}</td>
                <td>{floor.availableSpace > 0 ? `${(new Intl.NumberFormat().format(floor.availableSpace))} sq ft` : '-'}</td>
                <td>{floor.occupier}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </aside>
  );
};