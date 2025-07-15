import { Hero } from "@/components/Hero";
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

const Index = () => {
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
          {/* <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
                opacity=".5" 
                className="fill-current text-green-300"></path> */}
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
                className="fill-current text-black-900"></path>
        </svg>
      </div>

      <FadeUp>
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 py-0">
          <About />
        </div>
      </FadeUp>

      {/* Another wave divider */}
      <div className="relative h-20 overflow-hidden rotate-120">
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
      </div>

      <FadeUp>
        {/* center img */}
        <div className="mx-auto px-4 sm:px-6 lg:px-8 mb-0 justify-center text-center items-center flex">
          <img src="images/quote.jpg" alt="" />
        </div>
      </FadeUp>

      <FadeUp>
        <div className="bg-gradient-to-br from-blue-100 to-indigo-200 py-20">
          <Services />
        </div>
      </FadeUp>

      <FadeUp>
        <div className="bg-gradient-to-l from-cyan-50 to-blue-100 py-20">
          <Technology />
        </div>
      </FadeUp>

      <FadeUp>
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 py-20">
          <Products />
        </div>
      </FadeUp>

      <FadeUp>
        <div className="py-20">
          <Team />
        </div>
      </FadeUp>

      <FadeUp>
        {/* <div className="bg-gradient-to-r from-blue-500 to-indigo-600 py-20 text-white"> */}
          <Contact />
        {/* </div> */}
      </FadeUp>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;