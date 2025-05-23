import React, { useState } from "react";
import { Link } from "react-router-dom";

const ConfirmedRidePopupPanel = ({ setConfirmedRidePanelOpen }) => {
  const [otp, setOtp] = useState();
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold mb-3 pt-2 pl-2">
          Confirm this Ride to Start
        </h3>
        <i
          onClick={() => {
            setConfirmedRidePanelOpen(false);
          }}
          className="text-2xl active:text-3xl font-bold ri-close-line pr-5"
        ></i>
      </div>

      <div className="flex justify-between flex-col items-center p-3">
        <div className="w-full">
          <div className="border-b bg-yellow-300 rounded-xl border-gray-300 flex items-center gap-4 px-4 py-2">
            <div className="w-20 h-20 items-center flex">
              <img
                src="/CaptainHomePage/random_man.jpg"
                alt=""
                className="h-16 rounded-full object-cover"
              />
            </div>
            <div className="flex justify-around items-center w-full">
              <h2 className="text-xl font-semibold">Haresh Kedar</h2>
              <h5 className="text-gray-600 text-lg">2.2 Km</h5>
            </div>
          </div>
          <div className="border-b border-gray-300 flex items-center gap-4 px-4 py-2">
            <div className="">
              <i className="ri-square-fill text-xl"></i>
            </div>
            <div>
              <h4 className="text-xl font-semibold">Address</h4>
              <p className="text-gray-700 text-sm">
                123 Main St, Springfield, IL
              </p>
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
        <div></div>
        <div className="flex w-full">
          <form
            action=""
            onSubmit={() => {
              e.preventDefault(); 
            }}
            className="flex flex-col items-center w-full"
          >
            <input
              type="number"
              className="w-[70%] border-2 text-2xl p-3 text-center font-mono rounded-2xl"
              placeholder="OTP"
              value={otp}
              onChange={() => {
                setOtp(e.target.value);
              }}
            />
            <div className="flex justify-between text-center w-full gap-3">
              <button
                onClick={() => {
                  setConfirmedRidePanelOpen(false);
                }}
                className="w-full bg-red-500  text-2xl text-white font-semibold rounded-lg p-2 mt-3 "
              >
                Cancel
              </button>
              <Link
                to="/captain-riding"
                className="w-full bg-green-800 text-2xl text-center text-white font-semibold rounded-lg p-2 mt-3 "
              >
                Confirm
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmedRidePopupPanel;
