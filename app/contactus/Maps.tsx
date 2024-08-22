import React from "react";

export default function Maps() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15544.629069208144!2d80.2896316!3d13.0892176!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f3125470933%3A0xd3631c12f998c609!2sSPAB%20%26%20Co!5e0!3m2!1sen!2sin!4v1724328797897!5m2!1sen!2sin"
        className="w-full h-96 p-3"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
