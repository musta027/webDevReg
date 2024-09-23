"use client";

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Link from 'next/link'

export function WebDevClubComponent() {
  const [formData, setFormData] = useState<{
    name: string;
    phoneNumber: string;
    grade: string;
    timeSlots: string[];
  }>({
    name: '',
    phoneNumber: '',
    grade: '',
    timeSlots: []
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const phoneNumber = value
      .replace(/\D/g, '')
      .replace(/^(\d{3})(\d{4})(\d{3})$/, '+7 $1 $2 $3')
    setFormData(prevState => ({
      ...prevState,
      phoneNumber
    }))
  }

  const handleTimeSlotChange = (timeSlot: string) => {
    setFormData(prevState => {
      const updatedTimeSlots = prevState.timeSlots.includes(timeSlot)
        ? prevState.timeSlots.filter(slot => slot !== timeSlot)
        : [...prevState.timeSlots, timeSlot].slice(0, 2)
      return { ...prevState, timeSlots: updatedTimeSlots }
    })
  }

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
          <h2 className="text-3xl font-bold mb-8 text-center">Register for the Club</h2>
          <form className="space-y-6">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                required
                placeholder="+7 xxx xxxx xxx"
                value={formData.phoneNumber}
                onChange={handlePhoneNumberChange}
                maxLength={15}
              />
            </div>
            <div>
              <Label htmlFor="grade">Grade</Label>
              <Input
                id="grade"
                name="grade"
                type="number"
                min="7"
                max="10"
                required
                value={formData.grade}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label>Preferred Meeting Times (Choose up to 2)</Label>
              <div className="mt-2 space-y-2">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday'].map((day) => (
                  <div key={day.toLowerCase()} className="flex items-center space-x-2">
                    <Checkbox
                      id={day.toLowerCase()}
                      checked={formData.timeSlots.includes(day.toLowerCase())}
                      onCheckedChange={() => handleTimeSlotChange(day.toLowerCase())}
                      disabled={formData.timeSlots.length >= 2 && !formData.timeSlots.includes(day.toLowerCase())}
                    />
                    <Label htmlFor={day.toLowerCase()}>{day} after school</Label>
                  </div>
                ))}
              </div>
            </div>
            <Button
              type="button"
              className="w-full"
              onClick={() => window.location.href = 'https://forms.gle/wybwfqzHsd1C3fUQA'}
            >
              Submit Registration
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 flex justify-center items-center">
          <div>
            <Link href="/contact" className="hover:text-blue-300">Contact Us</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
