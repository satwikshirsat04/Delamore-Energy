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
        <div className="relative py-24 bg-gray-50">
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-[length:100px_100px] opacity-5"></div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
            {/* Section header */}
            <div className="text-center mb-20">
              <span className="inline-block mb-4 text-sm font-semibold tracking-wider text-green-600 uppercase">
                Our Foundation
              </span>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Guiding Principles
              </h2>
              <div className="mx-auto mt-4 max-w-2xl text-xl text-gray-600">
                The pillars that define our purpose and direction
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Vision Card */}
              <FadeUp>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative h-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                    <div className="p-10">
                      <div className="flex items-center mb-8">
                        <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-blue-50">
                          <Eye className="h-8 w-8 text-blue-600" />
                        </div>
                        <h3 className="ml-6 text-2xl font-bold text-gray-900">Vision</h3>
                      </div>
                      <div className="prose prose-lg text-gray-600 text-justify">
                        <p>
                          To be instrument of change and innovation in the global pursuit of green energy.
                          Driving progress and sustainability through our cutting-edge technology and
                          responsible practices. We envision a future where our endeavors contribute
                          to a cleaner, more efficient, self-sufficient biotransformation frontier
                          fostering economic, social, and sustainable growth for mankind.
                        </p>
                      </div>
                      <div className="mt-8 pt-6 border-t border-gray-100">
                        <div className="flex flex-wrap gap-2">
                          {['Innovation', 'Sustainability', 'Progress'].map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>

              {/* Mission Card */}
              <FadeUp>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-green-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative h-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-600"></div>
                    <div className="p-10">
                      <div className="flex items-center mb-8">
                        <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-green-50">
                          <Target className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="ml-6 text-2xl font-bold text-gray-900">Mission</h3>
                      </div>
                      <div className="prose prose-lg text-gray-600 text-justify">
                        <p>
                          Our mission is to develop a comprehensive platform for biotransformation
                          of waste to wealth by encapsulating our indigenous technologies for
                          social and economic upliftment. By embracing a circular economy, we
                          strive to valorize biomass into valuable end products that enhance
                          quality of life and livelihood while advancing toward a green economy.
                        </p>
                      </div>
                      <div className="mt-8 pt-6 border-t border-gray-100">
                        <div className="flex flex-wrap gap-2">
                          {['Transformation', 'Circular Economy', 'Green Future'].map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
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
              We are committed to nation building through socio economic upliftment of society by world' s comprehensive circular biomass energy solutions meeting the evolving needs of the society
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

      {/* SDG Goals Section */}
      <FadeUp>
        <div className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Aligning with UN Sustainable Development Goals
              </h2>
              <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
                Our work directly contributes to several key UN SDGs, creating meaningful impact
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {/* SDG 7 - Affordable and Clean Energy */}
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                <img
                  src="/images/sgds/sgd7.jpg"
                  alt="SDG 7 - Affordable and Clean Energy"
                  className="h-32 w-32 object-contain mb-4"
                />
                <h3 className="text-lg font-semibold text-center text-gray-800">Affordable & Clean Energy</h3>
                <p className="mt-2 text-sm text-gray-600 text-center">Providing renewable energy solutions</p>
              </div>

              {/* SDG 11 - Sustainable Cities */}
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                <img
                  src="/images/sgds/sgd11.jpg"
                  alt="SDG 11 - Sustainable Cities"
                  className="h-32 w-32 object-contain mb-4"
                />
                <h3 className="text-lg font-semibold text-center text-gray-800">Sustainable Cities</h3>
                <p className="mt-2 text-sm text-gray-600 text-center">Reducing urban waste impact</p>
              </div>

              {/* SDG 12 - Responsible Consumption */}
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                <img
                  src="/images/sgds/sgd12.jpg"
                  alt="SDG 12 - Responsible Consumption"
                  className="h-32 w-32 object-contain mb-4"
                />
                <h3 className="text-lg font-semibold text-center text-gray-800">Responsible Consumption</h3>
                <p className="mt-2 text-sm text-gray-600 text-center">Promoting circular economy</p>
              </div>

              {/* SDG 13 - Climate Action */}
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                <img
                  src="/images/sgds/sgd13.jpg"
                  alt="SDG 13 - Climate Action"
                  className="h-32 w-32 object-contain mb-4"
                />
                <h3 className="text-lg font-semibold text-center text-gray-800">Climate Action</h3>
                <p className="mt-2 text-sm text-gray-600 text-center">Reducing carbon emissions</p>
              </div>

              {/* SDG 15 - Life on Land */}
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                <img
                  src="/images/sgds/sgd15.jpg"
                  alt="SDG 15 - Life on Land"
                  className="h-32 w-32 object-contain mb-4"
                />
                <h3 className="text-lg font-semibold text-center text-gray-800">Life on Land</h3>
                <p className="mt-2 text-sm text-gray-600 text-center">Protecting ecosystems</p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <a
                href="https://sdgs.un.org/goals"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
              >
                Learn More About SDGs
                <svg className="ml-3 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </FadeUp>

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