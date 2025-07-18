import { useParams, Link } from 'react-router-dom';
import { teamMembers } from '@/components/Team';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const TeamMember = () => {
  const { slug } = useParams();
  const member = teamMembers.find(m => m.slug === slug);

  if (!member) return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Member not found</h1>
      <Button asChild variant="outline">
        <Link to="/about" className="flex items-center gap-1">
          <ArrowLeft className="h-4 w-4" />
          Back to Team
        </Link>
      </Button>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/10 to-background min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Button asChild variant="outline">
            <Link to="/about" className="flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" />
              Back to Team
            </Link>
          </Button>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-1/3">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary/30 shadow-xl mx-auto md:mx-0">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h1 className="text-4xl font-bold mb-2">{member.name}</h1>
              <p className="text-lg text-muted-foreground mb-2">{member.location}</p>
              <div className="mb-6">
                <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary/80">
                  {member.department}
                </Badge>
              </div>
              <h2 className="text-2xl text-primary mb-4">{member.position}</h2>
              <p className="text-lg mb-8">{member.description}</p>
              
              <div className="space-y-4">
                {member.fullBio?.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground">{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};