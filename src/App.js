import './scss/app.scss';
import buildings from './data/buildings.json';
import {Building} from "./components/building";
import {Aside} from "./components/aside";
import {useState} from "react";

function App() {
  const [selectedBuildingType, setSelectedBuildingType] = useState(null);
  const [selectedBuilding, setSelectedBuilding] = useState(null);
  const buildingTypes = [...new Set([...buildings].map(item => item.type))];

  const getBuildings = () => {
    return [...buildings].filter((building) => selectedBuildingType ? building.type === selectedBuildingType : true);
  };

  return (
    <div className="page-home">
      <h1>Our Offering</h1>

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

      <div className="buildings">
        {getBuildings().map((building, key) => (
          <Building
            building={building}
            key={key}
            onClick={() => setSelectedBuilding(building)}
          />
        ))}
      </div>

      <Aside building={selectedBuilding} close={() => setSelectedBuilding(null)} />
    </div>
  );
}

export default App;
