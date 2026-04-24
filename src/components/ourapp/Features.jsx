import { FiSmartphone, FiClock, FiGlobe, FiLock } from 'react-icons/fi';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <FiSmartphone className="w-8 h-8 bg-secondary"  />,
    title: "Real-Time Translation",
    description: "Instantly convert sign language gestures to text with our advanced camera recognition."
  },
  {
    icon: <FiClock className="w-8 h-8" />,
    title: "Quick & Easy",
    description: "Simple interface designed for effortless communication on the go."
  },
  {
    icon: <FiGlobe className="w-8 h-8" />,
    title: "Accurate and efficint",
    description: "operative and convert sign language with high accuracy"
  },
  {
    icon: <FiLock className="w-8 h-8" />,
    title: "Secure & Private",
    description: "Your privacy is our priority with end-to-end encryption."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600">
            Discover what makes our app unique and effective
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 1, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-blue-100"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}