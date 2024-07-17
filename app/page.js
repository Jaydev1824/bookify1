import React from "react";
import Footer from "./components/footer";

export default function Home() {
  return(
    <main className="container-lg bg-white h-screen-3x ">
      <div className="flex bg-gradient-to-r from-sky-500 to-indigo-600">
      <img src="/logo.jpg" alt="Logo" className="h-20 w-20 m-2 rounded-3xl"/>
      <h1 className="text-2xl mt-7 ml-5 font-bold">Bookify</h1>
      <div className="flex flex-row ml-16">
      <button className="text-xl mt-2 ml-96 font-semibold">Home</button>
      <button className="text-xl mt-2 ml-28 font-semibold hover:underline">Upcoming Events</button>
      <button className="text-xl mt-2 ml-28 font-semibold hover:underline">About Bookify</button>
      <button className="text-xl mt-2 ml-28 font-semibold hover:underline">Profile</button>
      </div>
      </div>
      <div className="border-t-2 border-black"></div>
      <div className="text-center text-4xl mt-5 font-semibold">
      <p>Welcome to Bookify</p>
      <p>The Premier Portal to exclusive Events, Concerts and Conference.</p>
      </div>
      <div className="flex justify-center ">
        <div className="relative h-80 ml-24 mb-5 mr-16 mt-10 rounded-3xl overflow-hidden ">
          <img src="/rodeo.jpg" alt="Event" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <a href="https://www.calgarystampede.com/" className="text-white text-lg font-semibold">Rodeo Show</a>
          </div>
        </div>
        <div className="relative h-80 ml-24 mr-24 mt-10 rounded-3xl overflow-hidden">
          <img src="/image.png" alt="Event" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <a href="https://www.adventuresinwellness.ca/" className="text-white text-lg font-semibold">Laughter Conference</a>
          </div>
        </div>
        </div>
        <div className="border-t-2 border-black m-12"></div>
        <div className="text-center mt-10 text-4xl mb-6 font-semibold">
        <p>Just Announced</p>
        </div>
          <div className="flex flex-row ml-20">
          <div>
            <p className="text-xl font-bold ml-48 mt-5 ">Ben Platt</p>
            <p className="text-lg font-normal ml-16 mt-1">The Honeymind Tour with Brandy Clark</p>
            <p className="text-lg font-normal ml-40 mt-1">Eccles Theater</p>
            <p className="text-lg font-normal ml-16 mt-1">131 West South Temple Salt Lake City,</p>
            <p className="text-lg font-normal ml-48 mt-1"> UT 84101</p>
            <p className="text-lg font-bold ml-32 mt-1">WED JUL 17, 2024 - 7:30 AM</p>
          </div>
          <div>
            <p className="text-xl font-bold ml-14 mt-5 ">7 Bridges: The Ultimate Eagles Experience</p>
            <p className="text-lg font-normal ml-40 mt-1">Point of the Bluff</p>
            <p className="text-lg font-normal ml-36 mt-1">Rams Head Presents</p>
            <p className="text-lg font-normal ml-16 mt-1">10489 County Road 76 Hammondsport,</p>
            <p className="text-lg font-normal ml-48 mt-1"> NY 14840</p>
            <p className="text-lg font-bold ml-32 mt-1">WED JUL 17, 2024 - 6:30 PM</p>
          </div>
          <div>
            <p className="text-xl font-bold ml-40 mt-5 ">Boys Like Girls</p>
            <p className="text-lg font-normal ml-48 mt-1">Grayscale</p>
            <p className="text-lg font-normal ml-48 mt-1">The NorVa</p>
            <p className="text-lg font-normal ml-24 mt-1">317 Monticello Avenue Norfolk</p>
            <p className="text-lg font-normal ml-48 mt-1"> VA 23510</p>
            <p className="text-lg font-bold ml-32 mt-1">WED JUL 17, 2024 - 7:30 PM</p>
          </div>
        </div>
          <div className="flex flex-row ml-16">
          <div className="relative h-80 w-80 ml-24 mb-5 mt-10 rounded-3xl overflow-hidden">
          <img src="/musicevent.jpg" alt="Event" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0    hover:opacity-100 transition-opacity duration-300">
            <a href="https://www.axs.com/events/541933/ben-platt-tickets" className="text-white text-lg font-semibold">Ben Platt Concert</a>
          </div>
        </div> 
        <div className=" flex flex-row relative h-80 w-80 ml-24 mr-24 mt-10 rounded-3xl overflow-hidden">
          <img src="/Bridges.jpg" alt="Event" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <a href="https://www.axs.com/events/525103/7-bridges-the-ultimate-eagles-experience-tickets" className="text-white text-lg font-semibold">7 Bridges</a>
          </div>
        </div>
        <div className=" flex flex-row relative h-80 w-80 ml-5 mr-24 mt-10 rounded-3xl overflow-hidden">
          <img src="/boys like girl.jpg" alt="Event" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <a href="https://www.axs.com/events/542520/boys-like-girls-tickets" className="text-white text-lg font-semibold">Boys Like Girls</a>
          </div>
          </div>
          </div>
          <div className="border-t-2 border-black "></div>
          <Footer />
    </main>
  ) };
  
