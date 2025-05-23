import React, { useRef } from "react";

import { Link } from "react-router-dom";
import FinishedRide from "../../components/FinishedRide";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CaptainRiding = () => {
  const [finishRidePopupPanelOpen, setfinishRidePopupPanelOpen] =
    React.useState(false);
  const finishRidePanelRef = useRef();

  useGSAP(
    function () {
      if (finishRidePopupPanelOpen) {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(0)",
          opacity: 1,
          
          
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(100%)",
          opacity: 0,

          
        });
      }
    },
    [finishRidePopupPanelOpen]
  );

  return (
    <div className="h-screen">
      <div className="fixed top-0 flex items-center justify-between w-screen">
        <img
          className="h-16 pt-3"
          src="../Logos/uber_logo_dark.png"
          alt=""
          onClick={() => {
            // setRidePopupPanelOpen(!ridePopupPanelOpen)
          }}
        />
        <Link
          to="/home"
          className="fixed right-2 top-2 h-16 w-16 bg-white flex items-center justify-center rounded-full"
        >
          <i className="ri-logout-box-r-line text-xl font-medium"></i>
        </Link>
      </div>

      <div className="h-4/5">
        <img
          className="w-full h-full object-cover"
          src="/HomePage/uber_map_image.png"
          alt=""
        />
      </div>
      <div className="h-1/5 bg-yellow-400 flex flex-col">
        <div className=" items-center flex justify-center">
          <i
            onClick={() => {
              setfinishRidePopupPanelOpen(true);
            }}
            className="text-2xl active:text-3xl font-bold ri-arrow-up-wide-line pr-5"
          ></i>
        </div>
        <div className="flex items-center justify-around my-auto">
          <h4 className="text-xl font-semibold">4 Mins Away</h4>
          <button className=" bg-green-600 text-2xl text-center text-white font-semibold rounded-lg p-2 mt-3 px-7">
            Complete Ride
          </button>
        </div>
      </div>
      <div ref={finishRidePanelRef} className="fixed bottom-0 w-full bg-white">
        <FinishedRide
          setfinishRidePopupPanelOpen={setfinishRidePopupPanelOpen}
        />
      </div>
    </div>
  );
};

export default CaptainRiding;
