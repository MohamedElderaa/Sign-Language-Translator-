import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="download" className="py-20 bg-gradient-to-br from-primary to-primary-dark">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-8">
            Download Our App Today
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join our users who are already breaking communication barriers with our sign language translation app.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
            >
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.112 0H6.888C3.088 0 0 3.088 0 6.888v10.224C0 20.912 3.088 24 6.888 24h10.224C20.912 24 24 20.912 24 17.112V6.888C24 3.088 20.912 0 17.112 0zM12 18.75c-3.728 0-6.75-3.022-6.75-6.75S8.272 5.25 12 5.25 18.75 8.272 18.75 12 15.728 18.75 12 18.75z"/>
              </svg>
              Download for iOS
            </a>
            <a
              href="#"
              className="px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
            >
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.375 0h17.25C22.941 0 24 1.059 24 3.375v17.25C24 22.941 22.941 24 20.625 24H3.375C1.059 24 0 22.941 0 20.625V3.375C0 1.059 1.059 0 3.375 0z"/>
              </svg>
              Download for Android
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}