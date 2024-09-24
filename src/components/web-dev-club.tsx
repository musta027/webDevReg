"use client";


import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"

export function WebDevClubComponent() {



  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Hero Section with Animation */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-20 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative">
          <motion.h1 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Join Our Web Development Club!
          </motion.h1>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Learn web development from scratch, work on real-world projects, and build your own websites with HTML, CSS, and JavaScript.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              className="bg-white text-blue-600 hover:bg-blue-50"
              size="lg"
              onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Register Now!
            </Button>
          </motion.div>
          
          {/* Animated Code Block */}
          <motion.div
            className="mt-12 bg-gray-800 p-4 rounded-lg text-left inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.pre><code className="text-green-400">{'const webDevClub = {'}</code></motion.pre>
            <motion.pre><code className="text-blue-400">{'  learn: ['}</code></motion.pre>
            <motion.pre><code className="text-yellow-400">{'    "HTML", "CSS", "JavaScript"'}</code></motion.pre>
            <motion.pre><code className="text-blue-400">{'  ],'}</code></motion.pre>
            <motion.pre><code className="text-blue-400">{'  build: "amazing websites",'}</code></motion.pre>
            <motion.pre><code className="text-blue-400">{'  collaborate: true'}</code></motion.pre>
            <motion.pre><code className="text-green-400">{'};'}</code></motion.pre>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Our Club</h2>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            In our club, you will learn the fundamentals of web development, work on exciting projects, and collaborate with others to build amazing websites.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub', 'Bootstrap'].map((skill) => (
              <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-20">
        <div className="container mx-auto px-4 max-w-md">
          <h2 className="text-3xl font-bold mb-8 text-center">Register</h2>
          <form className="space-y-6">
            <Button
              type="button"
              className="w-full"
              onClick={() => window.location.href = 'https://forms.gle/wybwfqzHsd1C3fUQA'}
            >
              Apply now
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 flex justify-center items-center">
          <div>
            telegram = @bnr_khan
          </div>
        </div>
      </footer>
    </div>
  )
}
