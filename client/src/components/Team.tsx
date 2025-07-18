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
    location: "Luxembourg",
    image: "/images/team/sanjeev_kumar.png",
    description: "Visionary leader with 3+ years in investment strategy guiding Delamore Capital to unprecedented growth.",
    slug: "sanjeev-kumar",
    fullBio: [
      "Sanjeev Kumar has been instrumental in shaping Delamore Capital's strategic direction since its inception.",
      "Based in Luxembourg, he oversees global operations with a focus on sustainable investment strategies.",
      "Under his leadership, Delamore Capital has achieved consistent 20%+ annual returns for clients."
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
      description: "Fintech pioneer implementing cutting-edge technologies to revolutionize capital management.",
      slug: "gaurav-nahar"
    },
    {
      name: "Anurag Shinde",
      position: "Chief Operation Officer",
      department: "Operations",
      image: "/images/team/Anurag_Shinde.jpg",
      description: "Operational mastermind ensuring seamless execution of Delamore's global investment strategies.",
      slug: "anurag-shinde"
    },
    {
      name: "Dharmendra Anand",
      position: "Associate President Public Relations",
      department: "Public Relations",
      image: "/images/team/druvendra_anand.jpg",
      description: "Bridge between Delamore and its global partners, crafting the firm's prestigious public image.",
      slug: "dharmendra-anand"
    },
    {
      name: "Promil Kapoor",
      position: "Vice President Operations Haryana",
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
                  <p className="text-muted-foreground text-sm mt-1">{member.location}</p>
                  <Badge variant="outline" className="mx-auto w-fit mt-2 border-primary/30 bg-primary/10 text-primary/80 hover:bg-primary/15">
                    {member.department}
                  </Badge>
                </CardHeader>
                
                <CardContent className="pt-6">
                  <p className="text-muted-foreground text-center font-medium text-lg mb-2">
                    {member.position}
                  </p>
                  <p className="text-muted-foreground/90 text-center mb-6">
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