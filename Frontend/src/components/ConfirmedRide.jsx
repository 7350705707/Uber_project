import React from "react";

const ConfirmedRide = ({ setVehiclePanelOpen, setComfirmedRidePanel, setDriverPanelOpen }) => {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold mb-3 pt-2 pl-2">Confirm your Ride</h3>
        <i
          onClick={() => {
            setVehiclePanelOpen(true);
            setComfirmedRidePanel(false);
          }}
          className="text-2xl active:text-3xl font-bold ri-arrow-left-line pr-5"
        ></i>
      </div>

      <div className="flex justify-between flex-col items-center p-3">
        <img src="/HomePage/uber_car_image.png" alt="" className="h-30" />
        <div className="w-full">
          <div className="border-b border-gray-300 flex items-center gap-4 px-4 py-2">
            <div className="">
              <i className="ri-map-pin-line text-xl"></i>
            </div>
            <div>
              <h4 className="text-xl font-semibold">Vehicle Details</h4>
              <p className="text-gray-700 text-sm">Car Model: Tesla Model 3</p>
              <p className="text-gray-700 text-sm">License Plate: ABC1234</p>
            </div>
          </div>
          <div className="border-b border-gray-300 flex items-center gap-4 px-4 py-2">
             <div className="">
              <i className="ri-square-fill text-xl"></i>
            </div>
            <div>
           <h4 className="text-xl font-semibold">Address</h4>
            <p className="text-gray-700 text-sm">123 Main St, Springfield, IL</p>
            </div>
           
          </div>
          <div className="flex items-center gap-4 px-4 py-2">
             <div className="">
              <i className="ri-currency-fill text-xl"></i>
            </div>
            <div>
            <h4 className="text-xl font-semibold">Price</h4>
            <p className="text-gray-700 text-sm">₹ 193.20</p>
            </div>
          
          </div>
        </div>
        <button onClick={() =>{
            setDriverPanelOpen(true)
            setComfirmedRidePanel(false)
        }} className="w-full bg-green-800 text-2xl text-white font-semibold rounded-lg p-2 mt-3 ">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmedRide;
