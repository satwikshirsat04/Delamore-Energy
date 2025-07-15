import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MapPin, Mail, Phone, Clock, ExternalLink, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeUp } from './animations/FadeUp';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

export const Contact = () => {
  const locations = [
    {
      title: "Pune Office",
      description: "Our main office located in the heart of Pune.",
      address: "Kant Helix, Bhoir Colony, Chinchwad, Pune 411033",
      image: "images/locations/pune.jpg"
    },
  ];

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleViewOnMap = (address?: string) => {
    const mapAddress = address || "Kant Helix, Bhoir Colony, Chinchwad, Pune 411033";
    const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(mapAddress)}`;
    window.open(mapsUrl, '_blank');
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://delamore-server.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          phone: data.phone,
          company: data.company,
          message: data.message
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({ success: true, message: result.message });
        reset();
      } else {
        setSubmitStatus({ success: false, message: result.message || 'Failed to send message' });
      }
    } catch (error) {
      setSubmitStatus({ success: false, message: 'Network error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your energy future? Contact us to learn more about our sustainable solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <FadeUp>
              <Card className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">Address</h3>
                      <p className="text-muted-foreground">
                        Kant Helix, Bhoir Colony, Chinchwad, Pune 411033
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleViewOnMap()}
                    className="ml-4 flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View on Map
                  </Button>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Email</h3>
                    <p className="text-muted-foreground">
                      <span className="font-medium">General:</span> info@delamoreenergy.com
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium">Sales:</span> anurag@delamoreenergy.com
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium">Support:</span> gaurav@delamoreenergy.com
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium">Careers:</span> kapoor@delamoreenergy.com
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                    <p className="text-muted-foreground">18008905180</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
                    <p className="text-muted-foreground">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Sat: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </Card>
            </FadeUp>
          </div>

          <FadeUp>
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle>Send us a message</CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name*</Label>
                      <Input
                        id="firstName"
                        {...register('firstName', { required: 'First name is required' })}
                        className={errors.firstName ? 'border-red-500' : ''}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name*</Label>
                      <Input
                        id="lastName"
                        {...register('lastName', { required: 'Last name is required' })}
                        className={errors.lastName ? 'border-red-500' : ''}
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email*</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className={errors.email ? 'border-red-500' : ''}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone*</Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register('phone', {
                        required: 'Phone number is required',
                        pattern: {
                          value: /^[0-9]{10,15}$/,
                          message: 'Invalid phone number'
                        }
                      })}
                      className={errors.phone ? 'border-red-500' : ''}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      {...register('company')}
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message*</Label>
                    <textarea
                      id="message"
                      rows={4}
                      {...register('message', { required: 'Message is required' })}
                      className={`flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${errors.message ? 'border-red-500' : ''}`}
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  {submitStatus && (
                    <div className={`p-4 rounded-md ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {submitStatus.message}
                    </div>
                  )}

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </FadeUp>
        </div>

        {/* Centered Location Section with FAQ Button */}
        <div className="flex flex-col items-center justify-center mb-16">
          <FadeUp>
            <div className="w-full max-w-4xl">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Our Locations
              </h3>
              <div className="grid md:grid-cols-1 gap-8">
                {locations.map((location, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="relative h-48">
                      <img
                        src={location.image}
                        alt={location.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold mb-2">{location.title}</h4>
                      <p className="text-muted-foreground mb-4">{location.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                          <MapPin className="h-4 w-4" />
                          <span>{location.address}</span>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleViewOnMap(location.address)}
                          className="flex items-center justify-center"
                        >
                          <ExternalLink className="h-4 w-4" />
                          View Map
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* FAQ Button */}
          <FadeUp>
            <div className="mt-12 text-white bg-black rounded">
              <Button asChild variant="outline" className="gap-2 bg-color red">
                <Link to="/FAQs">
                  <HelpCircle className="h-5 w-5" />
                  Visit FAQ Page
                </Link>
              </Button>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};