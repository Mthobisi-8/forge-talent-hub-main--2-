import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider as UISlider } from "@/components/ui/slider";
import { Search } from "lucide-react";


interface Course {
  title: string;
  certification: string;
  description: string;
  duration: string;
  format: string;
  price: string;
  image: string;
}

interface Testimonial {
  text: string;
  name: string;
  role: string;
}

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCertification, setSelectedCertification] = useState<string>("All");
  const [selectedFormat, setSelectedFormat] = useState<string>("All");
  const [priceRange, setPriceRange] = useState<number[]>([20000]);
  const [priceFilterActive, setPriceFilterActive] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<number | null>(null);  // state for hovered card
  const courseListingsRef = useRef<HTMLElementTagNameMap["section"] | null>(null);

  const courses: Course[] = [
    {
      title: "AWS Certified Solutions Architect",
      certification: "aws",
      description: "Learn cloud computing and DevOps skills to advance your career",
      duration: "3 months",
      format: "Self-paced",
      price: "5000",
      image: "AWS_Banner.jpg",
    },
    {
      title: "Digital Marketing Professional",
      certification: "dmi",
      description: "Master digital marketing strategies and tools",
      duration: "4 months",
      format: "Instructor-led",
      price: "7500",
      image: "Digital_Marketing.jpg",
    },
    {
      title: "UX Design Fundamentals",
      certification: "ux",
      description: "Learn user experience design principles and practices",
      duration: "2 months",
      format: "Self-paced",
      price: "4000",
      image: "UX.jpg",
    },
    {
      title: "CompTIA Security+",
      certification: "comptia",
      description: "Master cybersecurity fundamentals and best practices",
      duration: "3 months",
      format: "Self-paced",
      price: "6000",
      image: "Comptia_Banner.png",
    },
    {
      title: "Full Stack Web Development",
      certification: "aws",
      description: "Build modern web applications from front to back",
      duration: "6 months",
      format: "Instructor-led",
      price: "12000",
      image: "Fullstack.png",
    },
    {
      title: "Data Science Essentials",
      certification: "dmi",
      description: "Learn data analysis and machine learning fundamentals",
      duration: "4 months",
      format: "Self-paced",
      price: "8000",
      image: "Data_Science.jpg",
    },
  ];

  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCertification === "All" || course.certification === selectedCertification) &&
      (selectedFormat === "All" || course.format === selectedFormat) &&
      (!priceFilterActive || parseInt(course.price) <= priceRange[0])
  );

  const quantity = filteredCourses.length;
  const translateZ = `calc((100px + 150px) + 0px)`;
  const rotateX = "-15deg";
  const perspective = "500px";

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background Layer */}
      <div className="fixed inset-0 z-[-1] vr-background">
  <div className="particle-layer" />

  {/* Add a subtle overlay to soften background without hiding animation */}
  <div className="absolute inset-0 bg-black/40 pointer-events-none" />
</div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-24 pb-20">

          {/*Courasel Rotation */}
          <section ref={courseListingsRef} className="">
            <div
              className="w-screen h-[600px] flex items-center justify-center overflow-hidden
              "
              style={{ position: "relative", textAlign: "center" }}
            >
              {filteredCourses.length > 0 && (
                <div
                  className="absolute w-[100px] h-[150px] top-[25%] left-[calc(50%_-_50px_-_2.5px)] z-10"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: `perspective(${perspective})`,
                    animation: isHovered !== null ? "none" : "rotating 20s linear infinite", // pause rotation when hovered
                  }}
                >
                  {filteredCourses.map((course, index) => (
                    <div
                      key={index}
                      className="absolute inset-0 border-2 border-pink-800 rounded-2xl overflow-hidden "
                      style={{
                        transform: `rotateY(${(360 / quantity) * index}deg) translateZ(${translateZ})`,
                        width: "100%",
                        height: "100%",
                      }}
                     // onMouseEnter={() => setIsHovered(index)}  // set hover state to the index of hovered card
                     // onMouseLeave={() => setIsHovered(null)}  // reset hover state
                    >
                      <Card className="bg-gray-900  flex flex-col group hover:bg-gradient-to-r hover:from-gray-950 hover:via-sky-950 hover:to-purple-950 rounded-2xl w-full h-[590px] ">
                        <CardHeader className="p-0">
                          <img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-full object-cover"
                            style={{
                              background:
                                "radial-gradient(circle, rgba(219, 39, 119, 0.2) 0%, rgba(219, 39, 119, 0.6) 80%, rgba(219, 39, 119, 0.9) 100%)",
                            }}
                          />
                        </CardHeader>
                        <div className="flex flex-col flex-grow p-2">
                          <CardTitle className="text-sky-400 text-sm font-semibold mt-1 group-hover:text-white ">
                            {course.title}
                          </CardTitle>
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <style >{`
              @keyframes rotating {
                from {
                  transform: perspective(${perspective}) rotateX(${rotateX}) rotateY(0);
                }
                to {
                  transform: perspective(${perspective}) rotateX(${rotateX}) rotateY(1turn);
                }
              }
              .course-card {
                transition: transform 0.5s ease-in-out;
              }
              .course-card:hover {
                transform: scale(1.05); /* Smooth scale effect on hover */
              }
            `}</style>
          </section>


          {/*Search and filters */}
          <div className="container mx-auto px-4 ">
          <h1 className=" text-white text-4xl font-bold mb-20 text-gradient text-center italic ">
                Explore Our Courses
              </h1>
            <div className="ml-0 relative max-w-md mx-auto mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400" />
              <Input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Find your course"
                className="pl-10 bg-black border-purple-500/30 text-purple-500 placeholder:text-purple-400 text-lg"
              />
            </div>

            <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Select onValueChange={setSelectedCertification} defaultValue="All">
                <SelectTrigger className="border-purple-500/30 bg-black text-purple-500 text-lg py-6">
                  <SelectValue placeholder="Certification Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All</SelectItem>
                  <SelectItem value="aws">AWS</SelectItem>
                  <SelectItem value="dmi">DMI</SelectItem>
                  <SelectItem value="ux">UX Design</SelectItem>
                  <SelectItem value="comptia">CompTIA</SelectItem>
                </SelectContent>
              </Select>

              <Select onValueChange={setSelectedFormat} defaultValue="All">
                <SelectTrigger className="border-purple-500/30 bg-black text-purple-500 text-lg py-6">
                  <SelectValue placeholder="Course Format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All</SelectItem>
                  <SelectItem value="Self-paced">Self-paced</SelectItem>
                  <SelectItem value="Instructor-led">Instructor-led</SelectItem>
                </SelectContent>
              </Select>

              <div className="space-y-2">
                <label className="text-lg text-purple-200">Price Range: R{priceRange[0]}</label>
                <UISlider
                  value={priceRange}
                  onValueChange={(value: number[]) => {
                    setPriceRange(value);
                    setPriceFilterActive(true);
                  }}
                  max={20000}
                  step={1000}
                  className="py-4"
                />
              </div>
            </div>

            {/*Explore courses card*/ }
            <section className="mb-28">
             
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
                {filteredCourses.length > 0 ? (
                  filteredCourses.map((course, index) => (
                    <Card
                      key={index}
                      className="bg-gray-950 border-pink-800 shadow-xl shadow-pink-950 w-full h-[590px] flex flex-col group hover:bg-gradient-to-r hover:from-gray-950 hover:via-sky-950 hover:to-purple-950 hover:border-purple-800  rounded-2xl hover:shadow-purple-800"
                    >
                      <CardHeader className="p-0">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-48 object-cover rounded-2xl"
                        />
                      </CardHeader>
                      <div className="flex flex-col flex-grow p-6">
                        <CardTitle className="text-sky-600 text-xl font-semibold mt-2 group-hover:text-white">
                          {course.title}
                        </CardTitle>
                        <CardContent className="p-0 mt-4 flex-grow">
                          <p className="text-purple-300 text-base mb-4 group-hover:text-pink-500 transition-colors duration-300">
                            {course.description}
                          </p>
                          <div className="space-y-3 text-base text-purple-400 group-hover:text-sky-100 transition-colors duration-300">
                            <p>
                              <span className="font-semibold">Certification:</span> {course.certification.toUpperCase()}
                            </p>
                            <p>
                              <span className="font-semibold">Duration:</span> {course.duration}
                            </p>
                            <p>
                              <span className="font-semibold">Format:</span> {course.format}
                            </p>
                            <p>
                              <span className="font-semibold">Price:</span> R{course.price}
                            </p>
                          </div>
                        </CardContent>
                        <CardFooter className="p-0  mt-3">
                          <a
                            href="https://www.forgeacademy.co.za/enroll-now"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full"
                          >
                            <Button className="w-full bg-purple-900 group-hover:bg-pink-900 text-lg py-6 rounded-2xl">
                              Enroll Now
                            </Button>
                          </a>
                        </CardFooter>
                      </div>
                    </Card>
                  ))
                ) : (
                  <div className="col-span-full text-center">
                    <p className="text-purple-400 text-xl">No courses found</p>
                  </div>
                )}
              </div>
            </section>

            <section className="py-16 relative">
              <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
              <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-14 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-pink-600 py-3 font-heading animate-fade-in italic">
                  What Our Learners Say
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, index) => (
                    <Card
                      key={index}
                      className="bg-[hsl(270,50%,15%)] border-pink-950 backdrop-blur-sm shadow-lg shadow-[hsl(270,70%,30%)]/50 rounded-2xl transition-transform duration-300 group hover:scale-105 animate-fade-in"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <CardContent className="p-6 text-center">
                        <p className="text-[hsl(190,60%,90%)] mb-4 italic  hover:text-sky-600">"{testimonial.text}"</p>
                        <p className="text-pink-500 font-semibold">{testimonial.name}</p>
                        <p className="text-[hsl(190,60%,90%)] text-sm">{testimonial.role}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
            
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

const testimonials: Testimonial[] = [
  {
    text: "Forge Talent helped me transition into a tech career with their amazing courses and support!",
    name: "Thandi M.",
    role: "Software Developer",
  },
  {
    text: "The AI talent survey gave me clarity on my career path, and I landed my dream job!",
    name: "Sipho K.",
    role: "Data Analyst",
  },
  {
    text: "Their training programs are top-notch, and the certifications opened so many doors for me.",
    name: "Lerato N.",
    role: "Network Engineer",
  },
];

export default Courses;
