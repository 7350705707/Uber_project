import React from 'react'

const VehiclePanel = ({setPanelOpen,setVehiclePanelOpen, setComfirmedRidePanel}) => {

    const vehicles = [
        {
            name: "UberGo",
            image: "/HomePage/uber_car_image.png",
            time: "2 mins Away",
            price: "₹ 193.20",
            capacity: 4,
            description: "Affordable compact rides"
        },
        {
            name: "Moto",
            image: "/HomePage/uber_bike.png",
            time: "3 mins Away",
            price: "₹ 57.27",
            capacity: 1,
            description: "Affordable motorcycle rides"
        },
        {
            name: "Uber Auto",
            image: "/HomePage/uber_auto.png",
            time: "3 mins Away",
            price: "₹ 112.30",
            capacity: 3,
            description: "Affordable Auto rides"
        }
    ]

  return (
    <div>
         <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold mb-3 pt-2 pl-2">Choose a Vehicle</h3>
            <i onClick={()=>{
              setVehiclePanelOpen(false);
              setPanelOpen(true);
            }} className="text-2xl active:text-3xl font-bold ri-arrow-left-line pr-5"></i>
          </div>

          {
            vehicles.map((vehicle, index) => (
                <div key={index} onClick={()=>{
                    setVehiclePanelOpen(false);
                    setComfirmedRidePanel(true);
                    setPanelOpen(false);
                }} className="flex items-center justify-evenly bg-[#eee] px-2 p-2 m-1  active:border-2 active:border-black border-white border-2 rounded">
                    <img className="w-1/4 h-20" src={vehicle.image} alt="" />
                    <div className=" w-1/2">
                    <h4 className="font-medium text-xl">{vehicle.name} <span> <i className="ri-user-3-fill"></i> {vehicle.capacity}</span></h4>
                    <h5 className="font-medium text-base">{vehicle.time}</h5>
                    <p className="font-medium text-xs text-gray-600">{vehicle.description}</p>
                    </div>
                    <h2 className="text-1xl font-semibold w-1/4">{vehicle.price}</h2>
                </div>

            ))
          }
              
              
         
              
    </div>
  )
}

export default VehiclePanel