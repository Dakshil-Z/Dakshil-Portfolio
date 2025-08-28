import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Mail, Phone, Linkedin, Github, ExternalLink, Download } from 'lucide-react'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-orange-900">Dakshil Zalavadiya</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-orange-800 hover:text-orange-600 transition-colors">About</a>
              <a href="#projects" className="text-orange-800 hover:text-orange-600 transition-colors">Projects</a>
              <a href="#resume" className="text-orange-800 hover:text-orange-600 transition-colors">Resume</a>
              <a href="#contact" className="text-orange-800 hover:text-orange-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-orange-900 mb-6">
              Computer Scientist
            </h1>
            <h2 className="text-3xl md:text-4xl text-red-700 mb-8">
              Aspiring Software Developer
            </h2>
            <p className="text-xl text-orange-800 max-w-3xl mx-auto leading-relaxed">
              Aspiring Software Developer who enjoys tackling complex challenges through data-driven thinking. Experienced with Python, React, and PostgreSQL, and passionate about creating efficient, real-world solutions that improve user experience.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg">
              <a href="#projects" className="flex items-center gap-2">
                View My Work
                <ExternalLink className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg">
              <a href="#contact" className="flex items-center gap-2">
                Get In Touch
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-orange-900 mb-12 text-center">About Me</h2>
          <Card className="border-orange-200 shadow-lg">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                I am a computer scientist with a strong background in software development and design. I specialize in Python programming and data visualization, and my approach consistently combines technical efficiency with analytical thinking.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-orange-900 mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* QuickBite Project */}
            <Card className="border-orange-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-900">QuickBite</CardTitle>
                <CardDescription className="text-orange-700">Food Waste Reduction App</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-orange-800 mb-2">My Role</h4>
                  <p className="text-gray-700">Team leader of 4, handled interviews and reviews of participants, worked on backend with Spoonacular API, created presentation.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-orange-800 mb-2">Problem Solved</h4>
                  <p className="text-gray-700">College students wasting food due to inability to cook groceries or overstimulation with cooking steps, leading to unnecessary food waste and money spent on takeout.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-orange-800 mb-2">Solution</h4>
                  <p className="text-gray-700">Developed an app to help students discover delicious meals they can make at home with ingredients they already have, including nutritional info, cooking time, and filters to find the perfect recipe.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-orange-800 mb-2">Impact</h4>
                  <p className="text-gray-700">Tested with over 120 people who reported a significant drop in food waste and money spending on groceries.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-orange-800 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-orange-100 text-orange-800">Flutter</Badge>
                    <Badge className="bg-orange-100 text-orange-800">Spoonacular API</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Kyatt Feeder Project */}
            <Card className="border-orange-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-900">Kyatt Feeder</CardTitle>
                <CardDescription className="text-orange-700">Automatic Pet Feeding System</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-orange-800 mb-2">My Role</h4>
                  <p className="text-gray-700">Connected and calibrated motor and LCD display, wrote code for Arduino-to-Arduino connections, motor controls, LCD displays, wiring, and ensuring stable connections.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-orange-800 mb-2">Problem Solved</h4>
                  <p className="text-gray-700">Teammate's cat left alone during commutes to Chicago. Existing automatic feeders were too expensive or lacked desired functionalities like sensors to prevent overfilling.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-orange-800 mb-2">Solution</h4>
                  <p className="text-gray-700">Created a custom automatic cat feeder using 2 Arduino Uno boards, LED lights, LCD display, buttons, sensors, wiring, motors, screws, and metal sheets.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-orange-800 mb-2">Impact</h4>
                  <p className="text-gray-700">System worked as intended - buttons adjust dispense timing, but only when weight sensor detects the bowl is below a specific limit to prevent overfeeding.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-orange-800 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-orange-100 text-orange-800">Arduino</Badge>
                    <Badge className="bg-orange-100 text-orange-800">C++</Badge>
                    <Badge className="bg-orange-100 text-orange-800">Hardware Integration</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-6 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-orange-900 mb-12">Resume</h2>
          <Card className="border-orange-200 shadow-lg">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 mb-6">
                Download my complete resume to learn more about my experience, education, and technical skills.
              </p>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg">
                <Download className="w-5 h-5 mr-2" />
                Download Resume (PDF)
              </Button>
              <p className="text-sm text-gray-600 mt-4">
                Resume will be available once uploaded
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-orange-900 mb-12 text-center">Get In Touch</h2>
          <Card className="border-orange-200 shadow-lg">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-orange-800 mb-6">Let's Connect</h3>
                  <p className="text-gray-700 mb-6">
                    I'm actively seeking opportunities to contribute to innovative projects and join a forward-thinking team. Feel free to reach out!
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-orange-600" />
                      <a href="mailto:dakshilzalavadiya@gmail.com" className="text-orange-800 hover:text-orange-600 transition-colors">
                        dakshilzalavadiya@gmail.com
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-orange-600" />
                      <a href="tel:224-616-4493" className="text-orange-800 hover:text-orange-600 transition-colors">
                        224-616-4493
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Linkedin className="w-5 h-5 text-orange-600" />
                      <a href="https://linkedin.com/in/dakshil-zalavadiya-912992224" target="_blank" rel="noopener noreferrer" className="text-orange-800 hover:text-orange-600 transition-colors">
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-orange-100 to-red-100 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-orange-800 mb-4">What I'm Looking For</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Software Development Roles</li>
                    <li>• Data Analysis Positions</li>
                    <li>• Python Development Opportunities</li>
                    <li>• Quality Assurance</li>
                    <li>• Collaborative Team Environments</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-900 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-orange-200">
            © 2025 Dakshil Zalavadiya. Built with React and passion for optimization.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App


// Small change to force redeployment

