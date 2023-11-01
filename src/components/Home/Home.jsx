import React from "react"
import MeIcon from "../../assets/me.svg"
import GitHub from "../../assets/github.svg"
import LinkedIn from "../../assets/linkedin.svg"
const Home = () => {
  return (
    <>
      <div className="w-full h-screen bg-indigo-900 p-12">
        <div className="w-full h-full bg-indigo-700 rounded-lg shadow-2xl shadow-black/50">
          <div className="w-full p-3 flex justify-between">
            <div className="flex items-center gap-1 rounded-full border border-white pr-4 font-bold duration-300">
              <div>
                <img src={MeIcon} alt="MeIcon" className="w-8" />
              </div>
              <div className="font-bold text-white">Toussaint</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-3">
                <img src={GitHub} className="w-5 cursor-pointer" alt="" />
                <img src={LinkedIn} className="w-5 cursor-pointer" alt="" />
              </div>
              <div className="">
                <button className="px-3 font-bold py-1 rounded-full border border-white text-white">
                  Get In Tuch
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <div className="max-w-4xl w-full">
              <div className="text-white text-7xl font-bold">Hi There .</div>
              <h1 className="text-7xl font-bold text-white">
                I'm Toussaint, a Passionate Fullstack Developer{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home
