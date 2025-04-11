import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import Features from "@/components/Features";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
    },
  },
  plugins: [],
};
const About = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background Layer */}
     {/* Background Layer */}
     <div 
        className="fixed inset-0 z-[-1] opacity-60"
        style={{
          background: 'radial-gradient(circle, rgba(131,14,227,1) 0%, rgba(214,36,190,1) 25%, rgba(44,205,230,1) 50%, rgba(30,61,214,1) 75%, rgba(217,67,122,1) 100%)'
        }}
      ></div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-16">
          {/* Mission Statement Section */}

               {/* Hero Section with Video Background */}
        <section className="relative min-h-[80vh] flex items-center justify-center text-center">
         
          <div className="absolute inset-0 bg-transparent bg-gray-800" />
          <div className="relative z-10 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-200 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-white to-red-800 font-heading mb-6 py-6">
              Forge Talent: Your Path to Tech Success
            </h1>
            <p className="text-lg md:text-xl text-sky-50ih
             max-w-2xl mx-auto mb-8">
              Empowering South Africa’s youth with AI-powered career development and ICT opportunities.
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                asChild
                className="bg-pink-500 hover:bg-sky-200 hover:text-black text-[hsl(190,60%,90%)] transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[hsl(270,70%,30%)]/50"
              >
                <Link to="/courses">Explore Courses</Link>
              </Button>
              <Button
                asChild
                className="bg-transparent border border-pink-500 text-white hover:text-black hover:bg-purple-900 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[hsl(270,70%,30%)]/50"
              >
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>
          <section className="py-16 ">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center  p-4">
                <div>
                  <h1 className="text-gray-300 text-4xl font-bold mb-6 text-gradient">
                    Bridging the Gap Between Aspiration and Qualification
                  </h1>
                  <p className="text-lg text-white">
                    Forge Talent is an AI-powered career development platform designed to help job seekers gain the skills and certifications they need to succeed. Our mission is to make high-quality education accessible, affordable, and convenient for everyone.
                  </p>

                  <div className="mt-6">
                    <p className="bg-gradient-to-r from-purple-400 to-pink-600 text-gray-200 bg-clip-text font-extrabold italic">
                      Forge Talent is a recruitment agency based in South Africa.
                    </p>
                    <ul className="pl-6 text-white">
                      <li className="flex items-center gap-2">
                        ✔️ Our primary objective is to connect talented youth with opportunities in the Information and Communication Technology (ICT) sector.
                      </li>
                      <li>
                        ✔️ Established in 2023, Forge Talent has been actively working towards bridging the gap between skilled youth and the growing demand for ICT professionals in South Africa.
                      </li>
                      <li>
                        ✔️ We specialize in sourcing, screening, and placing highly skilled individuals in various ICT roles, including software development, network engineering, data analysis, and more.
                      </li>
                    </ul>
                  </div>

                  <div className="mt-6">
                    <p className="text-white">
                      By choosing Forge Talent, you are taking a significant step towards a successful and rewarding career in the ICT sector, or finding the ideal candidate for your organization.
                    </p>
                    <p className="mt-2 text-white">
                      We are here to empower South Africa's youth, foster economic growth, and drive innovation. Join us in shaping a brighter future for the ICT industry and the nation as a whole.
                    </p>
                    <p className="bg-gradient-to-r from-purple-400 to-pink-600 text-gray-400 bg-clip-text font-extrabold italic">
                      Contact Us today to explore the opportunities we can offer!
                    </p>
                  </div>
                </div>

                <div>
                  <img
                    src="https://cdn.gamma.app/rqy3owznzo24vup/generated-images/Tgo9l37SGKFnP4qJIgkGZ.jpg"
                    alt="Forge Talent"
                    className="rounded-lg shadow-lg w-full border border-purple-500/20 shadow-purple-900"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="py-16 ">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-14 text-gray-300 text-gradient py-3">
                How Forge Talent Works
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8  ">
                {steps.map((step, index) => (
                  <div key={index} className="relative flex flex-col items-center text-center bg-gray-900  border border-pink-800  rounded-2xl h-56 ">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4  mt-2">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-sky-500">{step.title}</h3>
                    <p className="text-purple-300/80">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          <Features />
          {/* Partners */}
            <section>
              <h1 className="text-center mb-10 text-2xl font-bold italic"
              >Partners</h1>
       
          
           <marquee behavior="scroll" direction="left" scrollamount="6">
           <div className="flex gap-10 items-center mb-10 group-hover:[animation-play-state:paused]">
           <img src="/AWS_Banner.jpg" alt="Partner 1" className="h-44 rounded-2xl" />
           <img src="/Comptia_Banner.png" alt="Partner 2" className="h-44 rounded-2xl" />
           <img src="/Comptia_Banner.jpg" alt="Partner 3" className="h-44 rounded-2xl" />
           <img src="/Data_Science.jpg" alt="Partner 4" className="h-44 rounded-2xl" />
          </div>
          </marquee>
              
            </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

// Steps for "How Forge Talent Works"
const steps = [
  {
    title: "Take the AI Talent Survey",
    description: "Answer a few questions to identify your strengths and career goals.",
  },
  {
    title: "Get Personalized Recommendations",
    description: "Receive tailored course suggestions based on your survey results.",
  },
  {
    title: "Enroll and Start Learning",
    description: "Choose from self-paced or instructor-led courses.",
  },
  {
    title: "Earn Certifications",
    description: "Gain industry-recognized certifications and take the next step in your career.",
  },
];

export default About;