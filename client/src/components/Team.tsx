import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export const teamMembers = [
  {
    name: "Sanjeev Kumar",
    position: "Chairman",
    department: "Leadership",
    // location: "Luxembourg",
    image: "/images/team/sanjeev_kumar.png",
    description: "Visionary leader with 20+ years of global experience in investment strategy, steering Delamore Capital and diverse ventures toward transformative growth.",
    slug: "sanjeev-kumar",
    fullBio: [
      "Sanjeev Kumar is a global award-winning CEO, Chief Visionary Officer, and author of five books, who has transitioned from a Wall Street financial professional to a successful entrepreneur across diverse industries over two decades.",
      "His passion for healthcare and wellness led him to create the Harley Street Healthcare Group, where his resilience and innovation have positioned him as a modern strategic leader.",
      "Sharing his life mantra, Sanjeev says: 'You are your biggest investment and the best asset; life is the best teacher, so spend more time with yourself and stop worrying about what you can’t control.'",
      "As an author and nature enthusiast, Sanjeev has written books like Poems of Self Discovery, Journey of a Human Mind, and more, and regularly contributes to platforms shaping financial markets and global business through www.sonykumar.com."
    ]
  },
  {
    name: "Amit Kapur",
    position: "CVO",
    department: "Vision",
    image: "/images/team/amit_kapur.jpg",
    description: "Director and Co-Founder, B.SC., LL.M., Gold Medallist, Agri-Tech & Renewable Energy Visionary, an alumni of prestigious Punjab University, Chandigarh, India having  a rich experience of 30 years in various businesses.",
    slug: "amit-kapur",
    fullBio: [
      "Delamore Renewable Energy Pvt Ltd is another venture, passion and commitment of Amit Kapur   to valorise waste to wealth by harnessing the power of agri biomass. The company has conceived and developed various technologies to valorise the agri biomass for sustainable social circular economy. This renewable project not only valorises agri biomass to produce methane gas, protein, spirulina, lignin, nano silica, hydrogen, beta carotene, phycocyanin, charcoal, Graphene. The project generates large numbers of carbon credits for mitigating dangerous emission of gases and production of super food, nutraceuticals from waste. The company is setting up initially 30 plants in Maharashtra, Madhya Pradesh, Gujarat, Uttar Pradesh, Haryana and Punjab. This circular economy will be uplifting the social economic conditions of the farming community and will be a huge step in nation building, as India is primarily Agri economy. ",
      "A trusted advisor to Indian family offices, Amit combines deep corporate law acumen with financial structuring excellence to align legal frameworks with long-term wealth preservation and expansion. His prior role as Associate Director at Baker Tilly (Dubai) underscores his global credibility in compliance and governance.",
      "Key Ventures & Leadership :",
      "1. Delamore Capital W.L.L. (Bahrain)",
      "Manages $500M AUM for ultra-high-net-worth families, focusing on cross-border investments, M&A, and compliance. ",
      "Pioneering sustainable investment structures in healthcare, real estate, and renewable energy.",
      "2. Farm2Fork Agritech Pvt Ltd (India)",
      "Agri-tech disruptor with APMC licenses (Nashik, Bhavnagar, Ludhiana, Batala) and a 72-acre hub on Pune-Nashik Highway.",
      "Empowering farmers through direct market access, eliminating middlemen, and enhancing profitability.",
      "3. Delamore Renewable Energy Pvt Ltd (India)",
      "Circular economy champion: Converts agri-waste into methane, hydrogen, nutraceuticals, and carbon credits.",
      "Scaling 30 plants across Maharashtra, MP, Gujarat, UP, Punjab, and Haryana to uplift farming communities.",
      "4. Harley Street Healthcare Group (UK)",
      "Director of this global hospital chain (16+ countries), expanding to 140+ nations with cutting-edge wellness tech.",
      " ",
      "Amit’s work bridges wealth stewardship, sustainable agriculture, and clean energy, driven by a vision to transform India’s agrarian economy while fostering global healthcare resilience.  "

    ],
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Gaurav Nahar",
    position: "Chief Technology Officer",
    department: "Technology",
    image: "/images/team/Gaurav_Nahar.png",
    description: "Expert in Chemical and Process Engineering with a focus on sustainable energy and innovation.",
    slug: "gaurav-nahar",
    fullBio: [
      "Dr. Gaurav Nahar is a distinguished expert in chemical and process engineering, with a specialized focus on bioenergy and hydrogen energy systems. With over 15 years of experience in biomass valorization and bioprocess engineering, he brings a unique blend of academic excellence and industry-driven innovation to the clean technology sector.",
      "He earned his doctorate in Chemical and Process Engineering from the prestigious University of Leeds, UK, where he laid the foundation for his pioneering research in sustainable energy solutions. Dr. Nahar's work has consistently centered on transforming renewable resources into viable energy alternatives, contributing significantly to the global transition towards a greener economy.",
      "As a visionary technologist and entrepreneur, Dr. Nahar has an exceptional track record of conceptualizing, developing, and implementing cutting-edge solutions that drive both environmental impact and commercial success. His strategic leadership and technical acumen have been instrumental in advancing biomass valorization projects under the banner of Delamore Renewable Energy, where he plays a critical role in shaping the future of sustainable energy.",
      "Dr. Nahar is widely recognized for his ability to bridge scientific research with industrial application, building scalable, innovative technologies that foster business growth while enhancing user and community outcomes."
    ]
  },

  {
    name: "Anurag Shinde",
    position: "Chief Operations Officer",
    department: "Operations",
    image: "/images/team/Anurag_Shinde.jpg",
    description: "Mechanical Engineer with expertise in business operations, marketing, and sustainable biomass solutions.",
    slug: "anurag-shinde",
    fullBio: [
      "Anurag Shinde is a dynamic mechanical engineer with specialized expertise in business operations management and strategic marketing. Drawing inspiration from his agricultural roots, Anurag has consistently focused on addressing grassroots challenges by developing sustainable and economically viable solutions in the areas of energy, biomass utilization, and waste management.",
      "Raised in a farming family, Anurag has been closely connected to biomass-rich environments since childhood. This early exposure instilled in him a deep commitment to transforming biomass into productive energy resources and creating scalable, real-world solutions for rural and semi-urban communities.",
      "His professional journey has been defined by the successful management of large-scale operations and complex projects. With a strong foundation in both technical and business domains, he excels in bridging the gap between on-ground implementation and high-level strategic planning.",
      "Anurag continues to contribute to the clean energy ecosystem by turning challenges into opportunities and fostering innovation that benefits both people and the planet."
    ]
  },

  {
    name: "Snehil Kapur",
    position: "Director",
    department: "Sustainability & Innovation",
    image: "/images/team/snehil_kapur.jpg",
    description: "AgriTech entrepreneur driving AI-powered logistics, circular economy, and carbon credit innovation.",
    slug: "snehil-kapur",
    fullBio: [
      "Snehil Kapur is a visionary AgriTech entrepreneur and sustainability champion, serving as the Director of Farm2Fork Agritech Pvt Ltd. He is widely recognized for transforming India’s agricultural supply chain through AI-driven logistics, farmer empowerment, and waste valorization strategies.",

      "Passionate about bridging the gap between farmers, traders, and consumers, Snehil is driving large-scale impact through circular economy models that enhance environmental sustainability and economic resilience across rural India.",

      "✅ Built India’s Largest AgriTech Network – Integrated over 1 million farmers and traders into Farm2Fork’s digital ecosystem, enhancing supply chain transparency and efficiency with AI-powered logistics.",

      "✅ Pioneering Waste-to-Wealth Solutions – Leading initiatives to convert agricultural biomass into economic value, promoting rural upliftment through sustainable waste valorization.",

      "✅ Carbon Credits & Sustainability Leadership – Spearheading the development of ICR-compliant carbon credit validation systems, establishing Farm2Fork as a leader in India’s emerging carbon credit exchange landscape.",

      "✅ Tech-Driven Market Expansion – Scaling Farm2Fork to integrate end consumers, ensuring full-spectrum farm-to-fork traceability and marketplace growth.",

      "Core Expertise:",
      "🔹 AgriTech & Digital Marketplaces (AI/ML in logistics, farmer-trade-consumer integration)",
      "🔹 Circular Economy & Biomass Valorization (Converting agri-waste into wealth)",
      "🔹 Carbon Credit Mechanisms & ICR Compliance",
      "🔹 Sustainable Agri-Business Models"
    ]
  },

 {
  name: "Dharmendra Anand",
  position: "Senior Corporate Strategist",
  department: "Strategy & Alliances",
  image: "/images/team/dharmendra_anand.jpg",
  description: "Veteran strategist with 35+ years across hospitality, textiles, fabrication, and agri-tech sectors.",
  slug: "dharmendra-anand",
  fullBio: [
    "Dharmendra Anand is a seasoned corporate leader and strategic advisor with over 35 years of experience across multiple industries including hospitality, textiles, fabrication, and agri-tech. Known for his exemplary leadership, strategic foresight, and expansive corporate network, he plays a critical role in connecting businesses with financial institutions and government bodies.",
    
    "A distinguished professional, Dharmendra has successfully navigated high-impact roles in both traditional and emerging sectors such as Nano fertilizers, earning a reputation as a high-value asset in complex and evolving business environments.",
    
    "✅ Multi-Industry Mastery – Demonstrated excellence across sectors ranging from luxury hospitality to cutting-edge agricultural technologies, proving his deep adaptability and cross-domain expertise.",
    
    "✅ Corporate & Financial Networking – Maintains strong relationships with C-level executives, investors, and government officials, facilitating partnerships, funding, and large-scale project execution.",
    
    "✅ Leadership Excellence – Acclaimed for mentoring leadership teams, solving operational challenges, and turning around underperforming units with a results-driven mindset.",
    
    "✅ Government & Regulatory Liaison – Adept at navigating regulatory landscapes, securing approvals, and engaging in policy advocacy through trusted institutional networks.",
    
    "Core Expertise:",
    "🔹 Corporate Strategy & Business Expansion",
    "🔹 Stakeholder Management (Investors, Government, Banks)",
    "🔹 Turnaround Leadership & Operational Efficiency",
    "🔹 Nano Fertilizers & Agri-Tech Innovations",
    "🔹 Hospitality & Textile Industry Best Practices"
  ]
},
  {
    name: "Promil Kapoor",
    position: "Vice President Operations Haryana & UP",
    department: "Regional Operations",
    image: "/images/team/promil_kapoor.jpg",
    description: "Regional strategist expanding Delamore's footprint across emerging Asian markets.",
    slug: "promil-kapoor"
  }
  // Add other team members with the same structure
];

export const Team = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            The Delamore Elite
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The top 1% of financial minds shaping global capital markets
          </p>
          <div className="mt-6 h-px w-24 bg-gray-300 mx-auto" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={item}>
              <Card className="group relative overflow-hidden border border-muted/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl bg-gradient-to-b from-background to-secondary/5 h-full">
                <CardHeader className="text-center pb-0">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/50 transition-all duration-500 shadow-lg">
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      whileHover={{ scale: 1.05 }}
                    />
                  </div>
                  <CardTitle className="text-2xl font-medium tracking-tight">
                    {member.name}
                  </CardTitle>
                  {/* <p className="text-muted-foreground text-sm mt-1">{member.location}</p> */}
                  <Badge variant="outline" className="mx-auto w-fit mt-2 border-primary/30 bg-primary/10 text-primary/80 hover:bg-primary/15">
                    {member.department}
                  </Badge>
                </CardHeader>

                <CardContent className="pt-6">
                  <p className="text-muted-foreground text-center font-medium text-lg mb-2">
                    {member.position}
                  </p>
                  <p className="text-muted-foreground/90 text-center mb-6 text-justify">
                    {member.description}
                  </p>
                  <div className="flex justify-center">
                    <Button asChild variant="ghost" className="group/button">
                      <Link to={`/team/${member.slug}`} className="flex items-center gap-1">
                        Read More
                        <ArrowRight className="h-4 w-4 ml-1 group-hover/button:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};