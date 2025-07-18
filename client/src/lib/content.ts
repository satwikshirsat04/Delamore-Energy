export type ContentItem = {
    id: string;
    title: string;
    description: string;
    date: string;
    imageUrl: string;
    type: 'blog' | 'podcast';
    // Blog specific
    content?: string;
    author?: string;
    slug?: string;
    // Podcast specific
    youtubeId?: string;
    duration?: string;
};

export const contentItems: ContentItem[] = [
    {
        id: "1",
        type: "blog",
        title: "The Future of Bioenergy in India",
        description: "How bioenergy can transform India's renewable energy landscape by 2030",
        content: `India stands at the cusp of a bioenergy revolution. With our growing population and increasing energy demands, traditional fossil fuels are becoming unsustainable both economically and environmentally.

Recent advancements in biomass conversion technologies have made bioenergy more efficient than ever before. Our second-generation biorefineries can now convert agricultural waste into bio-CNG with 85% efficiency, compared to just 60% five years ago.

Key benefits include:
- Reduction of agricultural waste burning by 70%
- Creation of rural employment opportunities
- 40% lower carbon emissions compared to fossil fuels

The government's new Bioenergy Policy 2023 aims to increase bioenergy's share in India's energy mix to 15% by 2030. This presents enormous opportunities for farmers, entrepreneurs, and investors alike.`,
        date: "2025-7-15",
        author: "Chief Scientist",
        imageUrl: "/images/blogs/bioenergy.jpg",
        slug: "future-of-bioenergy"
    },
    {
        id: "2",
        type: "blog",
        title: "Sustainable Waste Management Through Bioconversion",
        description: "Innovative technologies turning urban waste into clean energy",
        content: `Urban India generates 62 million tonnes of municipal solid waste annually, with organic waste constituting about 50% of this. Our patented bioconversion technology offers a sustainable solution to this growing problem.

The process involves:
1. Automated waste segregation using AI-powered robots
2. Anaerobic digestion of organic matter
3. Purification of resulting biogas into bio-CNG
4. Conversion of residual solids into organic fertilizers

Our Pune plant currently processes 200 tonnes of waste daily, producing:
- 10,000 kg of bio-CNG (equivalent to 14,000 liters of diesel)
- 50 tonnes of organic fertilizer
- Enough electricity to power 500 homes

This circular economy model not only solves waste problems but creates valuable resources from what was previously considered garbage.`,
        date: "2025-6-28",
        author: "Anurag Shinde, Operations Head",
        imageUrl: "/images/blogs/wastemanagement.jpg",
        slug: "waste-bioconversion"
    },
    {
        id: "3",
        type: "podcast",
        title: "Innovations in Agricultural Waste Valorization",
        description: "Interview with Dr. Kapoor on converting crop residues into biofuels",
        youtubeId: "LrQhN5eR6S",
        date: "2023-11-10",
        duration: "38 min",
        imageUrl: "/images/podcasts/agri-waste.jpg"
    },
    {
        id: "4",
        type: "podcast",
        title: "The Economics of Circular Bioeconomy",
        description: "Panel discussion with industry leaders on profitable sustainability",
        youtubeId: "V9xUQWo4vN",
        date: "2025-05-22",
        duration: "10 min",
        imageUrl: "/images/podcasts/circular-economy.jpg"
    },
    {
        id: "5",
        type: "blog",
        title: "Biochar: Revolutionizing Soil Health",
        description: "How our biochar technology is increasing crop yields by 30%",
        content: `Biochar, a byproduct of our biomass gasification process, is proving to be a game-changer for Indian agriculture. Field trials across Maharashtra have demonstrated:

Key Benefits:
✓ 30-35% increase in crop yields
✓ 40% reduction in water requirements
✓ Improved soil microbial activity
✓ Carbon sequestration potential of 2.5 tonnes per hectare annually

Our farmers report:
"After using Delamore's biochar, my soybean yield increased from 12 to 16 quintals per acre with the same inputs." - Ramesh Patil, Farmer (Ahmednagar)

The technology is particularly effective in:
- Arid regions with poor soil quality
- Areas with intensive farming
- Organic cultivation systems`,
        date: "2025-05-22",
        author: "Tengoku Solutions",
        imageUrl: "/images/blogs/b-smart.jpg",
        slug: "biochar-revolution"
    },
    {
        id: "6",
        type: "podcast",
        title: "Women in Renewable Energy",
        description: "Conversation with our female engineers leading green tech innovation",
        youtubeId: "X9JxE5hQ2K",
        date: "2023-08-18",
        duration: "52 min",
        imageUrl: "/images/podcasts/women-in-energy.jpg"
    }
];