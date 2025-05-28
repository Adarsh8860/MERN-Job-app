import React from 'react'

const About = () => {
  return (
  <>

  <section className="py-16 bg-white">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold text-indigo-600 mb-4">About Us</h2>
      <p className="text-lg text-gray-600 mb-8">
        At <span className="font-semibold text-gray-800">Open Jobs  </span>, we believe that opportunity should be accessible, discoverable, and tailored to you. We are a modern job platform built to connect job seekers with the right employers—faster, smarter, and easier.
      </p>
      <div className="grid md:grid-cols-2 gap-8 text-left">
        <div>
          <h3 className="text-xl font-semibold text-indigo-500 mb-2">Our Mission</h3>
          <p className="text-gray-700">
            To bridge the gap between talent and companies by delivering a streamlined, intelligent job-matching experience. We’re here to help professionals grow and businesses thrive.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-indigo-500 mb-2">What We Offer</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Smart job matching algorithms</li>
            <li>Verified job listings and employers</li>
            <li>Mobile-first experience</li>
            <li>Career development tools</li>
            <li>Diversity-first hiring practices</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-indigo-500 mb-2">Our Vision</h3>
          <p className="text-gray-700">
            To be the go-to career partner htmlFor individuals and the most reliable hiring ally for organizations—worldwide.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-indigo-500 mb-2">Why Choose Us?</h3>
          <p className="text-gray-700">
            From resume-building tips to real-time job alerts, we provide everything you need to take control of your career journey.
          </p>
        </div>
      </div>
    </div>
  </section>

  
  
  </>

  )
}

export default About