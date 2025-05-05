import { useState, useRef } from "react";
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
import clsx from "clsx";

interface Course {
  title: string;
  certification: string;
  description: string;
  duration: string;
  format: string;
  price: string;
  image: string;
  subCourses?: { title: string; description: string }[];
}

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCertification, setSelectedCertification] = useState("All");
  const [selectedFormat, setSelectedFormat] = useState("All");
  const [priceRange, setPriceRange] = useState<number[]>([20000]);
  const [priceFilterActive, setPriceFilterActive] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [expandedSubCourseIndex, setExpandedSubCourseIndex] = useState<number | null>(null);
  const courseListingsRef = useRef<HTMLElementTagNameMap["section"] | null>(null);

  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCertification === "All" || course.certification === selectedCertification) &&
      (selectedFormat === "All" || course.format === selectedFormat) &&
      (!priceFilterActive || parseInt(course.price) <= priceRange[0])
  );

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="fixed inset-0 z-[-1] vr-background">
        <div className="particle-layer" />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow pt-24 pb-20">
          <div className="container mx-auto px-4">
            <h1 className="text-white text-4xl font-bold mb-20 text-gradient text-center italic">
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

            <section className="mb-28">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredCourses.length > 0 ? (
                  filteredCourses.map((course, index) => (
                    <Card key={index} className="bg-gray-950 border-pink-800 shadow-xl w-full h-[540px] flex flex-col group hover:bg-gradient-to-r hover:from-gray-950 hover:via-sky-950 hover:to-purple-950 hover:border-purple-800 rounded-2xl hover:shadow-purple-800">
                      <CardHeader className="p-0">
                        <img src={course.image} alt={course.title} className="w-full h-48 object-cover rounded-2xl" />
                      </CardHeader>
                      <div className="flex flex-col flex-grow p-6">
                        <CardTitle className="text-sky-600 text-xl font-semibold mt-2 group-hover:text-white">
                          {course.title}
                        </CardTitle>
                        <CardContent className="p-0 mt-4 flex-grow">
                          <p className="text-purple-300 text-base mb-4 group-hover:text-pink-500">
                            {course.description}
                          </p>
                          <div className="space-y-3 text-base text-purple-400 group-hover:text-sky-100">
                            <p><span className="font-semibold">Certification:</span> {course.certification.toUpperCase()}</p>
                            <p><span className="font-semibold">Format:</span> {course.format}</p>
                          </div>
                        </CardContent>
                        <CardFooter className="p-0 mt-4">
                          <Button className="w-full bg-purple-900 group-hover:bg-pink-900 text-lg py-6 rounded-2xl" onClick={() => setSelectedCourse(course)}>
                            View Modules
                          </Button>
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
          </div>

          <div className={clsx("fixed top-0 right-0 w-full max-w-md h-full bg-black border-l border-purple-800 shadow-2xl z-50 transition-transform duration-300 ease-in-out", selectedCourse ? "translate-x-0" : "translate-x-full")}>            
            <div className="flex flex-col h-full p-6 overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl text-sky-400 font-bold">{selectedCourse?.title} Modules</h2>
                <button className="text-purple-400 hover:text-pink-500 text-xl" onClick={() => {
                  setSelectedCourse(null);
                  setExpandedSubCourseIndex(null);
                }}>
                  ✕
                </button>
              </div>
              {selectedCourse?.subCourses?.length ? (
                <ul className="space-y-4">
                  {selectedCourse.subCourses.map((sub, idx) => (
                    <li key={idx} className="text-purple-300 border-b border-purple-700 pb-2">
                      <button
                        onClick={() =>
                          setExpandedSubCourseIndex(expandedSubCourseIndex === idx ? null : idx)
                        }
                        className="text-left w-full text-purple-300 font-semibold hover:text-pink-500"
                      >
                        {sub.title}
                      </button>
                      {expandedSubCourseIndex === idx && (
                        <p className="mt-2 text-purple-400 text-sm">{sub.description}</p>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-purple-300">No modules available.</p>
              )}
              <div className="mt-auto pt-6">
                <a href="https://www.forgeacademy.co.za/enroll-now" target="_blank" rel="noopener noreferrer" className="w-full block">
                  <Button className="w-full bg-pink-900 text-lg py-5 rounded-xl">
                    Go to Enrollment
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

const courses: Course[] = [
  {
    title: "AWS Certified Solutions Architect",
    certification: "aws",
    description: "Learn cloud computing and DevOps skills to advance your career",
    duration: "3 months",
    format: "Self-paced",
    price: "5000",
    image: "AWS_Banner.jpg",
    subCourses: [
      { title: "EC2 & Load Balancing", description: "Deploy and manage scalable compute resources using EC2 and load balancers." },
      { title: "S3 & IAM", description: "Manage storage and user access using S3 and Identity Access Management." },
      { title: "VPC & Networking", description: "Design secure and scalable networks within AWS using VPC." },
      { title: "CloudFormation", description: "Automate your AWS infrastructure using CloudFormation templates." },
      { title: "Monitoring & Cost Optimization", description: "Track usage and optimize costs using AWS tools." },
    ],
  },
];

export default Courses;
