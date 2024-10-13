"use client";

import React from "react";
import { useForm } from "react-hook-form";

function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  console.log(watch("example"));
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Input */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            // {...register("name")}
            {...register("name", { required: true })} 
            // required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Your Name"
          />
          {errors.name && <span className="text-sm text-red-600">This field is required</span>}
        </div>

        {/* Email Input */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            {...register("email", { required: true })}
            // required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Your Email"
          />
          {errors.email && <span className="text-sm text-red-600">This field is required</span>}
        </div>

        {/* Subject Input */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            type="text"
            {...register("subject", { required: true })}
            // required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Subject"
          />
          {errors.subject && <span className="text-sm text-red-600">This field is required</span>}
        </div>

        {/* Message Textarea */}
        {/* <div> */}
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          {...register("message")}
          // required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Your Message"
        />
        {/* </div> */}

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
