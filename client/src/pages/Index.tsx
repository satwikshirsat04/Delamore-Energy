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
import { Link } from "react-router-dom";

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
                Our Foundation's
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
                          strive to valorize biomass into valuable end products that contributes to
                          Nation building.
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

      {/* Waste to Wealth Section */}
      <FadeUp>
        <div className="relative mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-gradient-to-b from-blue-50 to-indigo-100 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/home/waste-to-wealth.png"
              alt="Waste to Wealth Background"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-indigo-100 mix-blend-overlay"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-purple-900 mb-6">
                Transforming Waste to Wealth
              </h2>
              <p className="text-lg md:text-xl text-gray-800 mb-10 max-w-3xl mx-auto leading-relaxed">
                Our innovative technology converts organic waste into clean, renewable energy sources.
                We are committed to nation building through socio-economic upliftment of society by world's comprehensive circular biomass energy solutions.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Waste Reduction Card */}
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30 hover:border-blue-200/50">
                <div className="bg-blue-100/30 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Waste Reduction</h3>
                <p className="text-gray-700 text-center">Diverting tons of organic waste from landfills annually through our advanced conversion processes</p>
              </div>

              {/* Clean Energy Card */}
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30 hover:border-blue-200/50">
                <div className="bg-blue-200/30 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Clean Energy</h3>
                <p className="text-gray-700 text-center">Generating sustainable power for communities while reducing carbon emissions by 60%</p>
              </div>

              {/* Circular Economy Card */}
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30 hover:border-blue-200/50">
                <div className="bg-blue-300/30 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Circular Economy</h3>
                <p className="text-gray-700 text-center">Creating valuable byproducts from waste streams, completing the sustainability cycle</p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Link
                to="/solutions"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-xl shadow-sm text-white bg-gradient-to-r from-red-700 to-purple-900 hover:from-green-700 hover:to-purple-900 transition-all duration-300 group"
              >
                Learn More About Our Process
                <svg className="ml-3 -mr-1 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </FadeUp>

      {/* SDG Goals Section - Premium & Perfectly Aligned */}
      <FadeUp>
        <div className="bg-gradient-to-b from-gray-50 to-white py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 px-4">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Aligning with <span className="text-green-600">UN Sustainable Development Goals</span>
              </h2>
              <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
                Our work contributes to all 17 UN SDGs, creating meaningful global impact
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
              {/* SDG 1 - No Poverty */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-64 flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-black to-red-900 opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src="/images/sdgs/sdg1.jpg"
                  alt="SDG 1"
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-20 transition-all duration-500"
                />
                <div className="relative h-full flex flex-col justify-between p-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full w-14 h-14 flex items-center justify-center mb-4 border-2 border-white/30">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">No Poverty</h3>
                    <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                      <ul className="mt-3 space-y-2">
                        <li className="text-white/90 text-sm flex items-start">
                          <svg className="flex-shrink-0 h-4 w-4 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Eradicating extreme poverty</span>
                        </li>
                        <li className="text-white/90 text-sm flex items-start">
                          <svg className="flex-shrink-0 h-4 w-4 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Implementing social protection systems</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* SDG 2 - Zero Hunger */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-64 flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-black to-red-900 opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src="/images/sdgs/sdg2.jpg"
                  alt="SDG 2"
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-20 transition-all duration-500"
                />
                <div className="relative h-full flex flex-col justify-between p-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full w-14 h-14 flex items-center justify-center mb-4 border-2 border-white/30">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Zero Hunger</h3>
                    <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                      <ul className="mt-3 space-y-2">
                        <li className="text-white/90 text-sm flex items-start">
                          <svg className="flex-shrink-0 h-4 w-4 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Ending hunger and malnutrition</span>
                        </li>
                        <li className="text-white/90 text-sm flex items-start">
                          <svg className="flex-shrink-0 h-4 w-4 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Promoting sustainable agriculture</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* SDG 3 - Good Health */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-64 flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-black to-red-900 opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src="/images/sdgs/sdg3.jpg"
                  alt="SDG 3"
                  className="absolute inset-0 w-full h-full object-cover  opacity-90 group-hover:opacity-20 transition-all duration-500"
                />
                <div className="relative h-full flex flex-col justify-between p-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full w-14 h-14 flex items-center justify-center mb-4 border-2 border-white/30">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Good Health</h3>
                    <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                      <ul className="mt-3 space-y-2">
                        <li className="text-white/90 text-sm flex items-start">
                          <svg className="flex-shrink-0 h-4 w-4 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Ensuring healthy lives for all</span>
                        </li>
                        <li className="text-white/90 text-sm flex items-start">
                          <svg className="flex-shrink-0 h-4 w-4 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Reducing maternal and child mortality</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* SDG 4 - Quality Education */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-64 flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-black to-red-900 opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src="/images/sdgs/sdg4.jpg"
                  alt="SDG 4"
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-20 transition-all duration-500"
                />
                <div className="relative h-full flex flex-col justify-between p-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full w-14 h-14 flex items-center justify-center mb-4 border-2 border-white/30">
                    <span className="text-white font-bold text-lg">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Quality Education</h3>
                    <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                      <ul className="mt-3 space-y-2">
                        <li className="text-white/90 text-sm flex items-start">
                          <svg className="flex-shrink-0 h-4 w-4 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Inclusive and equitable education</span>
                        </li>
                        <li className="text-white/90 text-sm flex items-start">
                          <svg className="flex-shrink-0 h-4 w-4 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Lifelong learning opportunities</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* SDG 5 - Gender Equality */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-64 flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-black to-red-900 opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src="/images/sdgs/sdg5.jpg"
                  alt="SDG 5"
                  className="absolute inset-0 w-full h-full object-cover  opacity-90 group-hover:opacity-20 transition-all duration-500"
                />
                <div className="relative h-full flex flex-col justify-between p-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full w-14 h-14 flex items-center justify-center mb-4 border-2 border-white/30">
                    <span className="text-white font-bold text-lg">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Gender Equality</h3>
                    <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                      <ul className="mt-3 space-y-2">
                        <li className="text-white/90 text-sm flex items-start">
                          <svg className="flex-shrink-0 h-4 w-4 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Empowering women and girls</span>
                        </li>
                        <li className="text-white/90 text-sm flex items-start">
                          <svg className="flex-shrink-0 h-4 w-4 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Ending all discrimination</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* SDG 6 - Clean Water */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-64 flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-black to-red-900 opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src="/images/sdgs/sdg6.gif"
                  alt="SDG 6"
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-20 transition-all duration-500"
                />
                <div className="relative h-full flex flex-col justify-between p-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full w-14 h-14 flex items-center justify-center mb-4 border-2 border-white/30">
                    <span className="text-white font-bold text-lg">6</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Clean Water</h3>
                    <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                      <ul className="mt-3 space-y-2">
                        <li className="text-white/90 text-sm flex items-start">
                          <svg className="flex-shrink-0 h-4 w-4 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Safe drinking water for all</span>
                        </li>
                        <li className="text-white/90 text-sm flex items-start">
                          <svg className="flex-shrink-0 h-4 w-4 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Sustainable water management</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* SDG 7 - Affordable Energy */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-64 flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-black to-green-900 opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src="/images/sdgs/sdg7.jpg"
                  alt="SDG 7"
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-20 transition-all duration-500"
                />
                <div className="relative h-full flex flex-col justify-between p-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full w-14 h-14 flex items-center justify-center mb-4 border-2 border-white/30">
                    <span className="text-white font-bold text-lg">7</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Affordable Energy</h3>
                    <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                      <ul className="mt-3 space-y-2">
                        <li className="text-white/90 text-sm flex items-start">
                          <svg className="flex-shrink-0 h-4 w-4 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Access to modern energy</span>
                        </li>
                        <li className="text-white/90 text-sm flex items-start">
                          <svg className="flex-shrink-0 h-4 w-4 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Increase renewable energy share</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* SDG 8 - Decent Work */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-64 flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-black to-red-900 opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src="/images/sdgs/sdg8.jpg"
                  alt="SDG 8"
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-20 transition-all duration-500"
                />
                <div className="relative h-full flex flex-col justify-between p-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full w-14 h-14 flex items-center justify-center mb-4 border-2 border-white/30">
                    <span className="text-white font-bold text-lg">8</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Decent Work</h3>
                    <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                      <ul className="mt-3 space-y-2">
                        <li className="text-white/90 text-sm flex items-start">
                          <svg className="flex-shrink-0 h-4 w-4 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Sustainable economic growth</span>
                        </li>
                        <li className="text-white/90 text-sm flex items-start">
                          <svg className="flex-shrink-0 h-4 w-4 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Full employment and decent work</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* SDG 9 - Industry, Innovation & Infrastructure */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-64 flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-black to-red-900 opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src="/images/sdgs/sdg9.jpg"
                  alt="SDG 9"
                  className="absolute inset-0 w-full h-full object-cover  opacity-90 group-hover:opacity-20 transition-all duration-500"
                />
                <div className="relative h-full flex flex-col justify-between p-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full w-14 h-14 flex items-center justify-center mb-4 border-2 border-white/30">
                    <span className="text-white font-bold text-lg">9</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Industry & Innovation</h3>
                    <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                      <ul className="mt-3 space-y-2">
                        <li className="text-white/90 text-sm flex items-start">
                          <svg className="flex-shrink-0 h-4 w-4 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Resilient infrastructure development</span>
                        </li>
                        <li className="text-white/90 text-sm flex items-start">
                          <svg className="flex-shrink-0 h-4 w-4 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Promoting inclusive industrialization</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* SDG 10 - Reduced Inequalities */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-64 flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-black to-red-900 opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src="/images/sdgs/sdg10.jpg"
                  alt="SDG 10"
                  className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-90 group-hover:opacity-20 transition-all duration-500"
                />
                <div className="relative h-full flex flex-col justify-between p-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full w-14 h-14 flex items-center justify-center mb-4 border-2 border-white/30">
                    <span className="text-white font-bold text-lg">10</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Reduced Inequalities</h3>
                    <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                      <ul className="mt-3 space-y-2">
                        <li className="text-white/90 text-sm flex items-start">
                          <svg className="flex-shrink-0 h-4 w-4 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Reducing income inequality</span>
                        </li>
                        <li className="text-white/90 text-sm flex items-start">
                          <svg className="flex-shrink-0 h-4 w-4 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Promoting social, economic inclusion</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* SDG 11 - Sustainable Cities */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-64 flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-black to-green-900 opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src="/images/sdgs/sdg11.jpg"
                  alt="SDG 11"
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-20 transition-all duration-500"
                />
                <div className="relative h-full flex flex-col justify-between p-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full w-14 h-14 flex items-center justify-center mb-4 border-2 border-white/30">
                    <span className="text-white font-bold text-lg">11</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Sustainable Cities</h3>
                    <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                      <ul className="mt-3 space-y-2">
                        <li className="text-white/90 text-sm flex items-start">
                          <svg className="flex-shrink-0 h-4 w-4 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Making cities inclusive and safe</span>
                        </li>
                        <li className="text-white/90 text-sm flex items-start">
                          <svg className="flex-shrink-0 h-4 w-4 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Sustainable urbanization</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* SDG 12 - Responsible Consumption */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-64 flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-black to-red-900 opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src="/images/sdgs/sdg12.jpg"
                  alt="SDG 12"
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-20 transition-all duration-500"
                />
                <div className="relative h-full flex flex-col justify-between p-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full w-14 h-14 flex items-center justify-center mb-4 border-2 border-white/30">
                    <span className="text-white font-bold text-lg">12</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Responsible Consumption</h3>
                    <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                      <ul className="mt-3 space-y-2">
                        <li className="text-white/90 text-sm flex items-start">
                          <svg className="flex-shrink-0 h-4 w-4 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Sustainable production patterns</span>
                        </li>
                        <li className="text-white/90 text-sm flex items-start">
                          <svg className="flex-shrink-0 h-4 w-4 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Reducing food waste and loss</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* SDG 13 - Climate Action */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-64 flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-black to-green-900 opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src="/images/sdgs/sdg13.jpg"
                  alt="SDG 13"
                  className="absolute inset-0 w-full h-full object-cover  opacity-90 group-hover:opacity-20 transition-all duration-500"
                />
                <div className="relative h-full flex flex-col justify-between p-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full w-14 h-14 flex items-center justify-center mb-4 border-2 border-white/30">
                    <span className="text-white font-bold text-lg">13</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Climate Action</h3>
                    <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                      <ul className="mt-3 space-y-2">
                        <li className="text-white/90 text-sm flex items-start">
                          <svg className="flex-shrink-0 h-4 w-4 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Urgent action to combat climate change</span>
                        </li>
                        <li className="text-white/90 text-sm flex items-start">
                          <svg className="flex-shrink-0 h-4 w-4 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Strengthen resilience to climate hazards</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* SDG 14 - Life Below Water */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-64 flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-black opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src="/images/sdgs/sdg14.jpg"
                  alt="SDG 14"
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-20 transition-all duration-500"
                />
                <div className="relative h-full flex flex-col justify-between p-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full w-14 h-14 flex items-center justify-center mb-4 border-2 border-white/30">
                    <span className="text-white font-bold text-lg">14</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Life Below Water</h3>
                    <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                      <ul className="mt-3 space-y-2">
                        <li className="text-white/90 text-sm flex items-start">
                          <svg className="flex-shrink-0 h-4 w-4 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Conserve marine resources</span>
                        </li>
                        <li className="text-white/90 text-sm flex items-start">
                          <svg className="flex-shrink-0 h-4 w-4 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Reduce marine pollution</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* SDG 15 - Life on Land */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-64 flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-black to-red-900 opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src="/images/sdgs/sdg15.jpg"
                  alt="SDG 15"
                  className="absolute inset-0 w-full h-full object-cover  opacity-90 group-hover:opacity-20 transition-all duration-500"
                />
                <div className="relative h-full flex flex-col justify-between p-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full w-14 h-14 flex items-center justify-center mb-4 border-2 border-white/30">
                    <span className="text-white font-bold text-lg">15</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Life on Land</h3>
                    <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                      <ul className="mt-3 space-y-2">
                        <li className="text-white/90 text-sm flex items-start">
                          <svg className="flex-shrink-0 h-4 w-4 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Protect terrestrial ecosystems</span>
                        </li>
                        <li className="text-white/90 text-sm flex items-start">
                          <svg className="flex-shrink-0 h-4 w-4 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Halt biodiversity loss</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* SDG 16 - Peace & Justice */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-64 flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-black opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src="/images/sdgs/sdg16.jpg"
                  alt="SDG 16"
                  className="absolute inset-0 w-full h-full object-cover  opacity-90 group-hover:opacity-20 transition-all duration-500"
                />
                <div className="relative h-full flex flex-col justify-between p-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full w-14 h-14 flex items-center justify-center mb-4 border-2 border-white/30">
                    <span className="text-white font-bold text-lg">16</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Peace & Justice</h3>
                    <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                      <ul className="mt-3 space-y-2">
                        <li className="text-white/90 text-sm flex items-start">
                          <svg className="flex-shrink-0 h-4 w-4 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Promote peaceful societies</span>
                        </li>
                        <li className="text-white/90 text-sm flex items-start">
                          <svg className="flex-shrink-0 h-4 w-4 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Provide access to justice for all</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>


              {/* SDG 17 - Partnerships */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-64 flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-black to-green-900 opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src="/images/sdgs/sdg17.jpg"
                  alt="SDG 17"
                  className="absolute inset-0 w-full h-full object-cover  opacity-90 group-hover:opacity-20 transition-all duration-500"
                />
                <div className="relative h-full flex flex-col justify-between p-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full w-14 h-14 flex items-center justify-center mb-4 border-2 border-white/30">
                    <span className="text-white font-bold text-lg">17</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Partnerships</h3>
                    <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                      <ul className="mt-3 space-y-2">
                        <li className="text-white/90 text-sm flex items-start">
                          <svg className="flex-shrink-0 h-4 w-4 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Strengthening global partnerships</span>
                        </li>
                        <li className="text-white/90 text-sm flex items-start">
                          <svg className="flex-shrink-0 h-4 w-4 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Enhancing international cooperation</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="mt-16 text-center px-4">
              <a
                href="https://sdgs.un.org/goals"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-xl shadow-sm text-white bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 transition-all duration-300 group max-w-xs w-full mx-auto"
              >
                Explore All SDG Goals
                <svg className="ml-3 -mr-1 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
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
      {/* <WhatsAppFloat /> */}
    </div>
  );
};

export default Index;