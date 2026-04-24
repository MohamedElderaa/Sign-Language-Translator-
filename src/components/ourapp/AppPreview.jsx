import { motion } from 'framer-motion';
import dude from '../../images/log.png';

export default function AppPreview() {
  return (
    <section className="py-20 bg-indigo-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className=" ml-5 text-4xl font-bold text-gray-900 mb-6">
              Experience Seamless Communication
            </h2>
            <p className="ml-5 text-xl text-gray-600 mb-8">
              Our app uses cutting-edge AI technology to recognize sign language gestures and convert them to text in real-time, making communication effortless and accessible.
            </p>
            <ul className="space-y-4 ml-5">
              {[
                "Accurate gesture recognition",
                "Instant text conversion",
                "Offline functionality",
                "Easy to use interface"
              ].map((feature, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-6 h-6 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="ml-24 bg-black p-4 w-3/4 rounded-3xl shadow-2xl">
              {/* Placeholder for app screenshot */}
              <div className="bg-gray-200 w-full aspect-[4/5] rounded-2xl">
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  <img src={dude} className="w-full h-full" alt=""/>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}