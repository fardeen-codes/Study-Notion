// import React from 'react'

// function Home() {
//   return (
//     <div className='grid place-items-center text-richblack-100 text-3xl h-full'>
//       Home
//     </div>
//   )
// }

// export default Home

import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100 text-gray-900">


      {/* Hero Section */}
      <section className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-semibold text-white">Welcome to Study Notion</h1>
            <p className="text-white text-xl mt-4">Your journey to knowledge begins here</p>
            <button className="mt-8 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-500">Get Started</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-10">
        <h2 className="text-3xl font-semibold text-center">Features</h2>
        <div className="flex flex-wrap justify-center mt-8">
          <div className="w-full md:w-1/3 px-4 py-6 text-center">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="text-indigo-500 w-16 h-16 mx-auto mb-4">
                {/* Icon */}
              </div>
              <h3 className="text-xl font-semibold">Interactive Courses</h3>
              <p className="mt-4">Engaging and interactive courses designed to help you learn effectively.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 py-6 text-center">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="text-indigo-500 w-16 h-16 mx-auto mb-4">
                {/* Icon */}
              </div>
              <h3 className="text-xl font-semibold">Expert Instructors</h3>
              <p className="mt-4">Learn from industry experts with years of experience in their fields.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 py-6 text-center">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="text-indigo-500 w-16 h-16 mx-auto mb-4">
                {/* Icon */}
              </div>
              <h3 className="text-xl font-semibold">Community Support</h3>
              <p className="mt-4">Join a community of learners and get support whenever you need it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white shadow-md py-6 mt-10">
        <div className="container mx-auto text-center">
          <p className="text-gray-700">&copy; 2024 Study Notion. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
