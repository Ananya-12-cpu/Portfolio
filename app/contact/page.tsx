
'use client'


function ContactForm() {
 

  return (
    <div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl p-8">
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-3">
          Hey, I'm <span className="text-indigo-500">Ananya</span>
        </h1>
        <p className="mt-6 text-gray-400 text-sm max-w-lg">
          Crafting Engaging Digital Experiences. Transform your vision into
          reality with beautifully designed, high-performance websites.
          Whether it's a sleek portfolio, an e-commerce platform, or a
          business solution, I specialize in creating seamless digital
          experiences across all devices. Let's collaborate and build
          something amazing!
        </p>
        {/* Buttons Section */}
      
      </div>

      <div className="flex justify-center items-center">
      {/* <ContactForm/> */}
      </div>
    </div>
  </div>
  );
}

export default ContactForm;
