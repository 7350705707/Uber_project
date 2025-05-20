import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LocationSearchPanel from "../../components/LocationSearchPanel";
import VehiclePanel from "../../components/VehiclePanel";
import ConfirmedRide from "../../components/ConfirmedRide";
import WaitForDriver from "../../components/WaitForDriver";
import LookingForDriver from "../../components/LookingForDriver";

const Home = () => {
  const [location, setLocation] = useState({
    pickUp: "",
    destination: "",
  });

  const { pickUp, destination } = location;
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmedRidePanelRef = useRef(null);
  const LookingForDriverRef = useRef(null);
  const WaitForDriverRef = useRef(null);
  const [driverPanelOpen, setDriverPanelOpen] = useState(false);
  const [WaitForDriverPanelOpen, setWaitForDriverPanelOpen] = useState(false);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const [confirmedRidePanel, setComfirmedRidePanel] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70vh",
          opacity:1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0",
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  useGSAP(
    function () {
      if (vehiclePanelOpen) {
        gsap.to(vehiclePanelRef.current, {
          transform:"translateY(0)",
          opacity:1
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          transform:"translateY(100%)",
          opacity:0
        });
      }
    },
    [vehiclePanelOpen]
  );

  useGSAP(
    function(){
      if(confirmedRidePanel){
        gsap.to(confirmedRidePanelRef.current, {
          transform:"translateY(0)",
          opacity:1
        });
      }else{
        gsap.to(confirmedRidePanelRef.current, {
          transform:"translateY(100%)",
          opacity:0
        });
      }
    },[confirmedRidePanel])


    useGSAP(
      function(){
        if(driverPanelOpen){
          gsap.to(LookingForDriverRef.current, {
            transform:"translateY(0)",
            opacity:1
          });
        }else{
          gsap.to(LookingForDriverRef.current, {
            transform:"translateY(100%)",
            opacity:0
          });
        }
      },[driverPanelOpen]
    )


    useGSAP(
      function(){
        if(WaitForDriverPanelOpen){
          gsap.to(WaitForDriverRef.current, {
            transform:"translateY(0)",
            opacity:1
          });
        }else{
          gsap.to(WaitForDriverRef.current, {
            transform:"translateY(100%)",
            opacity:0
          });
        }
      },[WaitForDriverPanelOpen]
    )

  return (
    <div className="h-screen relative">
      <img
        className="w-16 absolute left-5 top-5"
        src="/Logos/uber_logo_dark.png"
        alt=""
      />
      <div className="h-screen w-screen">
        <img
          className="w-full h-full object-cover"
          src="/HomePage/uber_map_image.png"
          alt=""
        />
      </div>
      <div className=" flex flex-col justify-end absolute top-0 w-full h-full ">
        <div className="h-[30vh] bg-white p-5 relative ">
          <h5 className="absolute top-3 right-6 text-xl">
            {panelOpen ? (
              <i
                onClick={() => {
                  setPanelOpen(!panelOpen);
                }}
                className="ri-arrow-down-wide-line"
              ></i>
            ) : (
              <i
                onClick={() => {
                  setPanelOpen(!panelOpen);
                }}
                className="ri-arrow-up-wide-line"
              ></i>
            )}
          </h5>
          <h4 className="text-3xl font-semibold">Find Trip</h4>
          <form onSubmit={(e) => submitHandler(e)} className="flex flex-col">
            <div className="line absolute h-17 w-1 left-10 top-24 bg-black"></div>
            <input
              value={pickUp}
              onChange={(e) =>
                setLocation({ ...location, pickUp: e.target.value })
              }
              onClick={() => {
                setPanelOpen(true);
              }}
              className="bg-[#eee] px-8 py-2 text-base mt-5 rounded-lg w-full"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              value={destination}
              onChange={(e) =>
                setLocation({ ...location, destination: e.target.value })
              }
              onClick={() => {
                setPanelOpen(true);
              }}
              className="bg-[#eee] px-8 py-2 text-base mt-5 rounded-lg w-full"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} id="upcoming-trips" className=" bg-white ">
              <LocationSearchPanel panelOpen={panelOpen} setPanelOpen={setPanelOpen} setVehiclePanelOpen={setVehiclePanelOpen} />
        </div>
        <div ref={vehiclePanelRef} className="z-10 fixed bottom-0 w-full bg-white  ">
              <VehiclePanel setVehiclePanelOpen={setVehiclePanelOpen} setPanelOpen={setPanelOpen} setComfirmedRidePanel={setComfirmedRidePanel} />
        </div>

          <div ref={confirmedRidePanelRef} className="z-11 fixed bottom-0 w-full bg-white">
            <ConfirmedRide setComfirmedRidePanel={setComfirmedRidePanel} setVehiclePanelOpen={setVehiclePanelOpen} setDriverPanelOpen={setDriverPanelOpen} />
          </div>
            
            <div ref={LookingForDriverRef} className="z-11 fixed bottom-0 w-full bg-white">
            <LookingForDriver setDriverPanelOpen={setDriverPanelOpen} setComfirmedRidePanel={setComfirmedRidePanel} setWaitForDriverPanelOpen={setWaitForDriverPanelOpen} />
          </div>

          <div ref={WaitForDriverRef} className="z-11 fixed bottom-0 w-full bg-white">
            <WaitForDriver setDriverPanelOpen={setDriverPanelOpen} setWaitForDriverPanelOpen={setWaitForDriverPanelOpen} />
          </div>
        

      </div>                               
    </div>
  );
};

export default Home;
