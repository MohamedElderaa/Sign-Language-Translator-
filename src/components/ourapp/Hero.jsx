import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-blue-200 text-white">
      <div className="container mx-auto px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Transform Sign Language into Text
            <span className="text-yellow-300"> Instantly</span>
          </h1>
          <p className="text-xl text-white mb-12 max-w-2xl mx-auto">
            Break communication barriers with our innovative mobile app that converts sign language to text in real-time using advanced AI technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#download"
              className="px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg"
            >
              Download Now
            </a>
            <a
              href="#learn-more"
              className="px-8 py-4 bg-transpernt text-white border-2 border-white rounded-full font-semibold hover:bg-blue-50 transition-colors hover:bg-white hover:text-primary transition-all transform hover:scale-105"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}