import { useState, useRef, use } from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "./CaptainDetails";
import RidePopup from "../../components/RidePopup";
import ConfirmedRidePopupPanel from "../../components/ConfirmedRidePopupPanel";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CaptainHome = () => {
  const [ridePopupPanelOpen, setRidePopupPanelOpen] = useState(true);
  const [confirmedRidePanelOpen, setConfirmedRidePanelOpen] = useState(false);
  const confirmedRidePanelRef = useRef(null);
  const ridePopupPanelRef = useRef(null);

  useGSAP(
    function () {
      if (ridePopupPanelOpen) {
        gsap.to(ridePopupPanelRef.current, {
          transform: "translateY(0)",
          opacity: 1,
        });
      } else {
        gsap.to(ridePopupPanelRef.current, {
          transform: "translateY(100%)",
          opacity: 0,
        });
      }
    },
    [ridePopupPanelOpen]
  );

  useGSAP(
    function () {
      if (confirmedRidePanelOpen) {
        gsap.to(confirmedRidePanelRef.current, {
          transform: "translateY(0)",
          opacity: 1,
        });
      } else {
        gsap.to(confirmedRidePanelRef.current, {
          transform: "translateY(100%)",
          opacity: 0,
        });
      }
    },
    [confirmedRidePanelOpen]
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

      <div className="h-3/5">
        <img
          className="w-full h-full object-cover"
          src="/HomePage/uber_map_image.png"
          alt=""
        />
      </div>
      <div className="h-2/5 p-6 flex flex-col justify-around ">
        <CaptainDetails />
      </div>
      <div
        ref={ridePopupPanelRef}
        className="z-11 fixed bottom-0 w-full bg-white"
      >
        <RidePopup setRidePopupPanelOpen={setRidePopupPanelOpen} setConfirmedRidePanelOpen={setConfirmedRidePanelOpen} />
      </div>
      <div
        ref={confirmedRidePanelRef}
        className="z-11 fixed h-screen pt-5 bottom-0 w-full bg-white"
      >
        <ConfirmedRidePopupPanel setConfirmedRidePanelOpen={setConfirmedRidePanelOpen} />
      </div>
    </div>
  );
};

export default CaptainHome;
