import React from "react";

const LocationSearchPanel = ({ setPanelOpen, setVehiclePanelOpen, panelOpen }) => {
  const locations = [
    {
      id: 1,
      name: "24B, Near Kapoor's cafe, Sheriyans Coding School, Bhopal",
    },
    {
      id: 2,
      name: "25A, Near Sharma's cafe, Sheriyans Coding School, Bhopal",
    },
    {
      id: 3,
      name: "26C, Near Verma's cafe, Sheriyans Coding School, Bhopal",
    },
  ];
  return (
    <div>
      {/* this is just sample data */}

      { panelOpen &&locations.map((location) => (
        <div
          key={location.id}
          onClick={() => {
            setVehiclePanelOpen(true),
            setPanelOpen(false)
          }}
          className="px-5 py-3 mb-0.5 bg-[#eee] active:border-2 active:border-black border-2 border-white rounded m-2"
        >
          <h4>
            <i className="ri-map-pin-add-fill"></i> {location.name}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
