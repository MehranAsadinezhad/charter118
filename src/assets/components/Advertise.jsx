import React from "react";
import foreignFlight from "../images/foreign-flight.jpg";
import foreignHotel from "../images/foreign-hotel.jpg";
import hotel from "../images/hotel.jpg";

export default function Advertise() {
  return (
    <div className="mx-32 my-16 grid gap-8">
      <div className="cursor-pointer">
        <img
          className="rounded-md"
          src={foreignFlight}
          alt="foreignFlight"
        ></img>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <img
          className="cursor-pointer rounded-md"
          src={foreignHotel}
          alt="foreignHotel"
        ></img>
        <img
          className="cursor-pointer rounded-md"
          src={hotel}
          alt="hotel"
        ></img>
      </div>
    </div>
  );
}
