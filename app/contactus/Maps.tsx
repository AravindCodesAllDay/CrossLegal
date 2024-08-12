import React from "react";

export default function Maps() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.367820430788!2d80.24004901131586!3d12.948299387312229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d3e49715fa1%3A0x94fe3a96888fa164!2sHALT-O!5e0!3m2!1sen!2sin!4v1723392946229!5m2!1sen!2sin"
        className="w-full h-96 p-3"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
