
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageBanner } from "@/components/PageBanner";
import { Card, CardContent } from "@/components/ui/card";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
const Privacy = () => {
  useDocumentTitle({
    title: 'Privacy Policy',
    description: 'Privacy Policy',
    keywords: 'Privacy Policy'
  });
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PageBanner 
        title="Privacy Policy" 
        subtitle="Your privacy is important to us. This policy explains how we collect, use, and protect your information."
        backgroundImage="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />
      
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-foreground mb-6">Privacy Policy</h2>
                
                <div className="space-y-6 text-muted-foreground">
                  <section>
                    <h3 className="text-xl font-semibold text-foreground mb-3">1. Information We Collect</h3>
                    <p>We collect information you provide directly to us, such as when you:</p>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Fill out a contact form</li>
                      <li>Subscribe to our newsletter</li>
                      <li>Request information about our services</li>
                      <li>Communicate with us via email or phone</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-foreground mb-3">2. How We Use Your Information</h3>
                    <p>We use the information we collect to:</p>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Respond to your inquiries and provide customer service</li>
                      <li>Send you information about our services and updates</li>
                      <li>Improve our website and services</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-foreground mb-3">3. Information Sharing</h3>
                    <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:</p>
                    <ul className="list-disc pl-6 mt-2">
                      <li>To comply with legal requirements</li>
                      <li>To protect our rights and safety</li>
                      <li>With service providers who assist us in operating our website</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-foreground mb-3">4. Data Security</h3>
                    <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-foreground mb-3">5. Cookies</h3>
                    <p>Our website may use cookies to enhance your experience. You can choose to accept or decline cookies through your browser settings. Most web browsers automatically accept cookies, but you can modify your browser setting to decline cookies if you prefer.</p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-foreground mb-3">6. Your Rights</h3>
                    <p>You have the right to:</p>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Access the personal information we hold about you</li>
                      <li>Request correction of inaccurate information</li>
                      <li>Request deletion of your personal information</li>
                      <li>Opt-out of marketing communications</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-foreground mb-3">7. Changes to This Policy</h3>
                    <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page with an updated effective date.</p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-foreground mb-3">8. Contact Us</h3>
                    <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                    <div className="mt-2">
                      <p>Email: info@delamoreenergy.com</p>
                      <p>Phone: 18008905180</p>
                      <p>Address: Kant Helix, Bhoir Colony, Chinchwad, Pune 411033</p>
                    </div>
                  </section>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
      {/* <WhatsAppFloat /> */}
    </div>
  );
};

export default Privacy;
