import React from 'react'

const CaptainDetails = () => {
  return (
    <>
    <div className="flex justify-around items-center text-center">
          <div className="flex gap-5 items-center">
              <img src="../CaptainHomePage/random_man.jpg" className="object-cover h-16 rounded-full" alt="" />
              <h4 className="text-lg font-medium">Haresh Kedar</h4>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-xl font-semibold">₹ 295.2</h4>
            <p className="text-sm font-medium text-gray-600">Earned</p>
          </div>

        </div>
        <div className="flex justify-around text-center mt-6 p-3 bg-gray-100 rounded-xl">
            <div>
              <i className="ri-timer-2-line text-4xl  font-thin"></i>
              <h5 className="text-lg font-medium">10.2</h5>
              <p className="text-sm text-gray-600">Hours</p>
            </div>
            <div>
              <i className="ri-speed-up-line text-4xl  font-thin"></i>
               <h5 className="text-lg font-medium">10.2</h5>
              <p className="text-sm text-gray-600">Hours</p>
            </div>
            <div>
              <i className="ri-booklet-line text-4xl  font-thin"></i>
               <h5 className="text-lg font-medium">10.2</h5>
              <p className="text-sm text-gray-600">Hours</p>
            </div>
        </div>
    </>

  )
}

export default CaptainDetails