
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FadeUp } from '@/components/animations/FadeUp';

export const Team = () => {
  const teamMembers = [
    {
      name: "Sanjeev Kumar",
      position: "Chairman",
      department: "Leadership",
      image: "images/team/people.jpg"
    },
    {
      name: "Amit Kapur",
      position: "CVO",
      department: "Vision",
      image: "images/team/amit_kapur.jpg"
    },
    {
      name: "Gaurav Nahar",
      position: "Chief Technology Officer",
      department: "Technology",
      image: "images/team/Gaurav_Nahar.png"
    },
    {
      name: "Anurag Shinde",
      position: "Chief Operation Officer",
      department: "Operations",
      image: "images/team/Anurag_Shinde.jpg"
    },
    {
      name: "Dharmendra Anand",
      position: "Associate President Public Relations",
      department: "Public Relations",
      image: "images/team/people.jpg"
    },
    {
      name: "Promil Kapoor",
      position: "Vice President Operations Haryana",
      department: "Regional Operations",
      image: "images/team/people.jpg"
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Leadership Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experienced leaders driving innovation in sustainable energy solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-lg">{member.name}</CardTitle>
                <Badge variant="outline" className="mx-auto w-fit">
                  {member.department}
                </Badge>
              </CardHeader>
              <FadeUp>
              <CardContent>
                <p className="text-muted-foreground text-center font-medium">
                  {member.position}
                </p>
              </CardContent>
              </FadeUp>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
