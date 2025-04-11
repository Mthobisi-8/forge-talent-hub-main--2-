import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TalentSurvey from "@/components/TalentSurvey";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import InteractiveFeature from "@/components/InteractiveFeature";
import "@/components/CSSNeeded/SnakeAnimation.css";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative bg-transparent">
      {/* Background Layer */}
      <div 
        className="fixed inset-0 z-[-1] opacity-60"
        style={{
          background: 'radial-gradient(circle, rgba(131,14,227,1) 0%, rgba(214,36,190,1) 25%, rgba(44,205,230,1) 50%, rgba(30,61,214,1) 75%, rgba(217,67,122,1) 100%)'
        }}
      ></div>
      {/* Content Layer */}
      <div className="relative z-10 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
          <InteractiveFeature />

          {/* AI Talent Survey Section */}
          <section className="py-16 bg-opacity-50">
            <div className="container mx-auto px-4 ">
              <div className="text-center mb-8 cssanimation leFadeIn">
                <h2 className="text-3xl font-bold mb-4 text-gradient text-white ">
                  <span className="text-black  font-extrabold">A</span><span className="text-sky-600  font-extrabold  ">I</span> Talent Assessment
                </h2>
                <p className="text-lg from-sky-200 to-gray-200">
                  Take our AI-powered survey to discover the perfect course for your career goals
                </p>
              </div>
              <TalentSurvey />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;