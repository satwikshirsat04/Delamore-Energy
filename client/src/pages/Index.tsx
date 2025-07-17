import { Hero } from "@/components/Hero";
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Heart } from 'lucide-react';
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Technology } from "@/components/Technology";
import { Products } from "@/components/Products";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { FadeUp } from "@/components/animations/FadeUp";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import ChakraImage from "@/components/ChakraImage";
import { Carousel } from "@/components/Carousel";
import { FloatingButtons } from "@/components/FloatingActionButtons";

const Index = () => {
  useDocumentTitle({
    title: 'Home',
    description: 'Delamore Energy Private Limited | Your trusted partner in energy solutions.',
    keywords: 'renewable energy, cbg, Green Energy Production, Waste Reduction, clean energy, Bio Refinery'
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero with gradient background */}
      <div className="bg-gradient-to-br from-blue-500 to-purple-600">
        <Hero />
      </div>

      {/* Wave divider */}
      <div className="relative h-20 overflow-hidden">
        <svg viewBox="0 0 1200 110" preserveAspectRatio="none" className="absolute top-0 left-0 w-full h-full">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-current text-blue-100"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-current text-black-900"></path>
        </svg>
      </div>

      {/* Vision and Mission */}
      <FadeUp>
  <div className="relative py-16 overflow-hidden">
    {/* Decorative background elements */}
    <div className="absolute inset-0 overflow-hidden opacity-10">
      <div className="absolute -left-20 -top-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      <div className="absolute right-1/3 bottom-1/2 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Section title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 sm:text-4xl">
          Our Core Values
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-gray-600 sm:mt-4">
          Guiding principles that drive our innovation and sustainability
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Vision Card */}
        <FadeUp>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
            <Card className="relative p-8 bg-white rounded-lg h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 shadow-md">
                  <Eye className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 ml-4">
                  Vision
                </h3>
              </div>
              <CardContent className="p-0">
                <p className="text-gray-700 leading-relaxed text-justify">
                  To be instrument of change and innovation in the global persuade of green energy. Driving progress and sustainability through our cutting-edge technology and responsible practices. We envision a future where our endeavours contribute to a cleaner, more efficient, self-sufficient biotransformation frontier fostering economic, social, sustainable growth of mankind.
                </p>
              </CardContent>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex space-x-2">
                  {['Innovation', 'Sustainability', 'Progress'].map((tag, i) => (
                    <span 
                      key={i}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </FadeUp>

        {/* Mission Card */}
        <FadeUp>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-teal-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
            <Card className="relative p-8 bg-white rounded-lg h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-gradient-to-br from-green-100 to-green-200 shadow-md">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600 ml-4">
                  Mission
                </h3>
              </div>
              <CardContent className="p-0">
                <p className="text-gray-700 leading-relaxed text-justify">
                  Our mission is to develop a comprehensive platform for biotransformation of waste to wealth by encapsulating our indigenous technologies for social and economic upliftment of mankind. By embracing a circular economy, we strive to valorize biomass into valuable end products that enhance quality of life and livelihood inching towards green economy.
                </p>
              </CardContent>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex space-x-2">
                  {['Transformation', 'Circular Economy', 'Green Future'].map((tag, i) => (
                    <span 
                      key={i}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </FadeUp>
      </div>
    </div>
  </div>
</FadeUp>

      {/* Another wave divider */}
      {/* <div className="relative h-20 overflow-hidden rotate-120">
        <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="absolute top-0 left-0 w-full h-full">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-current text-indigo-50"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-current text-blue-50"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-current text-indigo-100"></path>
        </svg>
      </div> */}

      {/* Waste to Energy Section */}
      <FadeUp>
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-blue-40 to-indigo-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
              Transforming Waste to Wealth
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
              Our innovative technology converts organic waste into clean, renewable energy sources.
              By harnessing nature's processes, we're creating sustainable solutions that reduce
              landfill waste while generating valuable resources for communities and industries.
            </p>

            <ChakraImage size="lg" className="my-8" />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Waste Reduction Card - 25% Gray */}
              <div className="bg-blue-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Waste Reduction</h3>
                <p className="text-gray-800">Diverting tons of organic waste from landfills annually</p>
              </div>

              {/* Clean Energy Card - 50% Gray */}
              <div className="bg-blue-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Clean Energy</h3>
                <p className="text-gray-800">Generating sustainable power for communities</p>
              </div>

              {/* Circular Economy Card - 75% Gray */}
              <div className="bg-blue-300 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Circular Economy</h3>
                <p className="text-gray-800">Creating valuable byproducts from waste streams</p>
              </div>
            </div>
          </div>
        </div>
      </FadeUp>

      {/* <FadeUp>
        <div className="bg-gradient-to-br from-blue-100 to-indigo-200 py-20">
          <Services />
        </div>
      </FadeUp> */}

      <FadeUp>
        <div className="bg-gradient-to-l from-cyan-50 to-blue-100 py-20">
          <Technology />
        </div>
      </FadeUp>

      {/* <FadeUp>
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 py-20">
          <Products />
        </div>
      </FadeUp> */}

      {/* Company Phases Carousel - Updated Version */}
      {/* <FadeUp>
        <div className="py-10 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-300 text-center mb-9">
              Our Process
            </h2>
            <div className="relative w-full aspect-video overflow-hidden rounded-lg shadow-xl mt-5">
              <Carousel images={[
                {
                  src: "images/phases/phase1.jpg",
                  alt: "Some Hours Busy",
                  // caption: "Some Hours Busy"
                },
                {
                  src: "images/phases/phase2.jpg",
                  alt: "Books in This Life",
                  // caption: "Books in This Life"
                }
              ]} />
            </div>
          </div>
        </div>
      </FadeUp> */}

      {/* <FadeUp>
        <div className="py-20">
          <Team />
        </div>
      </FadeUp> */}

      <FadeUp>
        <Contact />
      </FadeUp>

      <Footer />
      <FloatingButtons />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;