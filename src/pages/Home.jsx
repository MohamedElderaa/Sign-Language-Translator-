import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaArrowDown, FaHandPeace, FaHistory, FaLanguage, FaBook, FaCheck } from 'react-icons/fa';
import convert from "../images/convert.png";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import image from '../images/log2.png'
import Hazem from '../images/Hazem.jpg'
import AbdallahT from '../images/AbdallahT.jpg'
import Hatem from '../images/Hatem.jpg'
import Abdallah from '../images/AbdallahM.jpg'
import Mina from '../images/Mina.jpg'



function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
   
      <Hero />
      <Culture />
      <History />
      <Services />
    
     
    </div>
  );
}


// Hero Component
function Hero() {
  return (
    <section className="min-h-screen relative bg-gradient-to-br from-primary to-blue-200 text-white">
      <div className="container mx-auto px-6 py-36 ">
        <div className="text-center max-w-4xl mx-auto st">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in text-white">
            Welcome to <span className="text-yellow-300"> <br />FreeTalk.com!</span>
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed opacity-90 mb-12 animate-fade-in delay-200">
            Empowering the Deaf community through technology, education, and cultural awareness. 
            Join us in building bridges between the Deaf and hearing worlds.
          </p>
          <div className="space-x-4 animate-fade-in delay-300">
            <a href="#services" className="inline-block bg-white text-primary font-semibold px-8 py-4 rounded-full 
                                        hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg">
              Explore Our Services
            </a>
            <a href="#culture" className="inline-block bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-full
                                        hover:bg-white hover:text-primary transition-all transform hover:scale-105">
              Learn About Deaf Culture
            </a>
          </div>
        </div>
      </div>

  
    </section>
  );
}

// Culture Component
function Culture() {
  const aspects = [
    { title: 'Language', description: 'Sign language is the primary means of communication, with its own grammar, syntax, and regional variations.' },
    { title: 'Community', description: 'Strong bonds formed through shared experiences and cultural events.' },
    { title: 'Values', description: 'Emphasis on visual communication, storytelling, and maintaining cultural heritage.' },
    { title: 'Identity', description: 'Pride in being Deaf and belonging to a unique cultural group.' }
  ];

  return (
    <section id="culture" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <FaHandPeace className="text-4xl text-primary mr-4" />
            <h2 className="text-4xl font-bold text-gray-800">Deaf Culture & Sign Language</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Deaf culture is a vibrant and rich community that celebrates visual communication, shared 
              experiences, and a unique perspective on the world. At its heart lies sign language, 
              a sophisticated form of visual communication that encompasses not just hand movements, 
              but facial expressions, body language, and spatial awareness.
            </p>
            <div className="bg-gray-50 p-8 rounded-lg my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Key Aspects of Deaf Culture</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {aspects.map(({ title, description }) => (
                  <div key={title}>
                    <h4 className="font-semibold mb-2 text-primary">{title}</h4>
                    <p className="text-gray-700">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// History Component
function History() {
  const milestones = [
    { year: '1817', event: 'First American School for the Deaf established in Hartford, Connecticut' },
    { year: '1864', event: 'Gallaudet University, the first deaf university, founded in Washington, D.C.' },
    { year: '1960s', event: 'William Stokoe\'s research establishes ASL as a true language' },
    { year: '1990s', event: 'Growing recognition of sign languages worldwide' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <FaHistory className="text-4xl text-primary mr-4" />
            <h2 className="text-4xl font-bold text-gray-800">History of Sign Language</h2>
          </div>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>The history of sign language dates back to as early as the 5th century BC, with records of 
               signed communication among deaf people in Ancient Greece.</p>
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary my-8">
              <h3 className="text-xl font-semibold mb-4">Key Historical Milestones</h3>
              <ul className="space-y-3">
                {milestones.map(({ year, event }) => (
                  <li key={year}>• {year}: {event}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Services Component
function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
        
        {/* Text to Sign Converter */}
        <div className="max-w-6xl mx-auto mb-20 transform hover:scale-[1.02] transition-transform duration-300">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="md:flex">
              <div className="md:w-1/2 p-10">
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-primary bg-opacity-10 rounded-lg mr-4">
                    <FaLanguage className="text-4xl text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">Text to Sign Language Converter</h3>
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  Our state-of-the-art converter uses advanced AI technology to transform written text 
                  into accurate, natural-looking sign language animations.
                </p>
                <ul className="space-y-4 text-gray-600">
                  {['Real-time translation', 'fast and efficient', 'quick and easy', 'Mobile-friendly interface']
                    .map((feature) => (
                      <li key={feature} className="flex items-center">
                        <span className="p-1 bg-green-100 rounded-full mr-3">
                          <FaCheck className="text-green-600 text-sm" />
                        </span>
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                </ul>
              </div>
              <div className="md:w-1/2 bg-gradient-to-br from-primary to-secondary p-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm rounded-lg transform rotate-3"></div>
                  <img 
                    src={convert}
                    alt="Converter Demo"
                    className="rounded-lg shadow-2xl relative transform -rotate-3 transition-transform hover:rotate-0 duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sign Language Courses */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex flex-row-reverse">
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-6">
                  <FaBook className="text-4xl text-primary mr-4" />
                  <h3 className="text-2xl font-bold">Sign Language Courses</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Learn sign language from expert instructors through our comprehensive online courses. 
                  Whether you're a beginner or looking to advance your skills, we have the perfect 
                  program for you.
                </p>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold mb-4">Course Features:</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">• Interactive video lessons</li>
                    <li className="flex items-center">• Live practice sessions</li>
                    <li className="flex items-center">• Native deaf instructors</li>
                    <li className="flex items-center">• Progress tracking</li>
                    <li className="flex items-center">• Community support</li>
                  </ul>
                </div>
              </div>
              <div className="md:w-1/2 bg-gradient-to-br from-secondary to-primary p-8 text-white">
                <div className="space-y-6">
                  <h4 className="text-xl font-semibold">Available Courses:</h4>
                  <div className="grid gap-4">
                    {['Beginner ASL', 'Intermediate ASL', 'Advanced ASL', 'Professional ASL'].map((course) => (
                      <div key={course} className="bg-white bg-opacity-10 rounded-lg p-4">
                        {course}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}






export default Home;