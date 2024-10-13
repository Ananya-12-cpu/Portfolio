
'use client'

import Image from "next/image";
import ContactForm from "./Form";


function ContactPage() {
 

  return (
    <div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl p-8">
      <div className="flex flex-col justify-center">
      <Image
            src="/images/contact.png"
            width={1440}
            height={300}
            alt="Picture of the author"
          />
      
      </div>

      {/* <div className="flex justify-center items-center"> */}
      <div className="p-4">

      <ContactForm/>
      </div>
    </div>
  </div>
  );
}

export default ContactPage;
