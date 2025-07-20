import React from 'react';
import { motion } from 'framer-motion';
import { Fade } from 'react-awesome-reveal';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { teamMembers } from '@/components/Team';
import { TeamMember } from './TeamMember';
import { FadeUp } from '@/components/animations/FadeUp';

const Projects = () => {
    const projects = [
        {
            title: "CBG Plants",
            description: "Setting up 30+ plants by 2030 in MH, MP, GJ, UP, HR and PB primarily based on napier grass and paddy straw. Each plant produces 30 tons of CBG per day using in-house developed technologies.",
            image: "/images/projects/cbg.png",
            stats: "30+ Plants | 30 tons/day each",
            delay: 0.1
        },
        {
            title: "Hydro Power",
            description: "Developing 2 hydro projects of 30.54 MW and 28.68 MW in joint ventures. Power Purchase Agreements (PPA) already signed.",
            image: "/images/projects/hydro.jpg",
            stats: "59.22 MW Total Capacity",
            delay: 0.2
        },
        {
            title: "Wind Energy",
            description: "Proposal to install 24 MW wind energy capacity currently under approval process.",
            image: "/images/projects/wind.jpg",
            stats: "24 MW Planned Capacity",
            delay: 0.3
        },
        {
            title: "CO2 Capture",
            description: "Prototypes developed and pilot project under rigorous testing in GCC area for carbon capture technology.",
            image: "/images/projects/carbon.jpg",
            stats: "Pilot Phase",
            delay: 0.4
        },
        {
            title: "Solar Power",
            description: "150 MW+ solar power installation including rooftop installations in the first phase of development.",
            image: "/images/projects/solar.jpg",
            stats: "150 MW+ Capacity",
            delay: 0.5
        },
        {
            title: "Plant-Based Proteins",
            description: "30 plants for extraction of plant-based protein with capacity of 35+ tons per day each.",
            image: "/images/projects/protein.webp",
            stats: "30 Plants | 35+ tons/day each",
            delay: 0.6
        },
        {
            title: "Micro Algae",
            description: "India's biggest micro-algae production capacity on PBR being installed, valorizing carbon capture.",
            image: "/images/projects/algae2.webp",
            stats: "Largest in India",
            delay: 0.7
        },
        {
            title: "Organic Fertilizers",
            description: "Producing 1000 tons of bio fertilizers per day from CBG plants, improving sustainability.",
            image: "/images/projects/fertilizers.jpg",
            stats: "1000 tons/day",
            delay: 0.8
        }
    ];

    const teamMembers = [
        {
            name: "Dr. Gaurav Nahar",
            nameid: "gaurav-nahar",
            role: "Chemical & Process Engineering Expert",
            bio: "Specializing in bio and hydrogen energy with 15+ years experience in biomass valorization. PhD from University of Leeds, UK.",
            image: "/images/team/Gaurav_Nahar.png"
        },
        {
            name: "Anurag Shinde",
            nameid: "anurag-shinde",
            role: "Operations & Marketing Expert",
            bio: "Mechanical engineer with expertise in sustainable solutions for energy and biomass utilization from grassroots level.",
            image: "/images/team/Anurag_Shinde.jpg"
        }
    ];

    return (
        useDocumentTitle({
            title: 'Projects',
            description: 'Pioneering sustainable energy solutions across multiple technologies and geographies',
            keywords: 'CBG Plants, Hydro Power, Wind Energy, CO2 Capture, Solar Power, Plant-Based Proteins, Micro Algae, Organic Fertilizers'
        }),
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
            <Navigation />
            {/* Hero Section */}
            <div className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/projects-bg.jpg')] bg-cover opacity-10"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <Fade direction="down" triggerOnce>
                        <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-blue-900">
                            Our Projects
                        </h1>
                        <p className="text-xl text-center max-w-3xl mx-auto text-gray-700 mb-12">
                            Pioneering sustainable energy solutions across multiple technologies and geographies
                        </p>
                    </Fade>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="container mx-auto px-6 py-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: project.delay }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                        >
                            <FadeUp>
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                            </FadeUp>
                            <FadeUp>
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                            {project.stats}
                                        </span>
                                    </div>

                                    <p className="text-gray-600 mb-4">{project.description}</p>

                                    {/* <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                  Learn more →
                </button> */}
                                </div>
                            </FadeUp>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Team Section */}
            <div className="bg-gray-50 py-16">
                <div className="container mx-auto px-6">
                    <Fade direction="up" triggerOnce>
                        <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-blue-800">
                            Project Leadership
                        </h2>
                    </Fade>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="md:flex">
                                    <div className="md:w-1/3">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-64 md:h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-6 md:w-2/3">
                                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
                                        <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                                        <p className="text-gray-600 mb-4">{member.bio}</p>
                                        <Link to={`/team/${member.nameid}`} className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                                            View profile →
                                            {/* <ArrowRight className="h-4 w-4 ml-1 group-hover/button:translate-x-1 transition-transform duration-300" /> */}
                                        </Link>

                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="py-16 bg-gradient-to-r from-green-700 to-blue-800 text-white">
                <div className="container mx-auto px-6">
                    <Fade direction="up" triggerOnce>
                        <h2 className="text-4xl font-bold text-center mb-16">By The Numbers</h2>
                    </Fade>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="p-6"
                        >
                            <div className="text-4xl font-bold mb-2">30+</div>
                            <div className="text-lg">CBG Plants</div>
                        </motion.div>
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="p-6"
                        >
                            <div className="text-4xl font-bold mb-2">150+</div>
                            <div className="text-lg">MW Solar</div>
                        </motion.div>
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="p-6"
                        >
                            <div className="text-4xl font-bold mb-2">59.22</div>
                            <div className="text-lg">MW Hydro</div>
                        </motion.div>
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="p-6"
                        >
                            <div className="text-4xl font-bold mb-2">1000</div>
                            <div className="text-lg">tons/day Fertilizer</div>
                        </motion.div>
                    </div>
                </div>

            </div>

            <Footer />
        </div>


    );
};

export default Projects;