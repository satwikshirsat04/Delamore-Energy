
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageBanner } from "@/components/PageBanner";
import { Card, CardContent } from "@/components/ui/card";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const Terms = () => {
  useDocumentTitle({
    title: 'Terms & Conditions',
    description: 'Agreement to Terms',
    keywords: 'Agreement to Terms,Use License,Disclaimer'
  });
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PageBanner 
        title="Terms & Conditions" 
        subtitle="Please read these terms and conditions carefully before using our services."
        backgroundImage="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />
      
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-foreground mb-6">Terms of Service</h2>
                
                <div className="space-y-6 text-muted-foreground">
                  <section>
                    <h3 className="text-xl font-semibold text-foreground mb-3">1. Agreement to Terms</h3>
                    <p>By accessing and using the Delamore Energy website and services, you accept and agree to be bound by the terms and provision of this agreement.</p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-foreground mb-3">2. Use License</h3>
                    <p>Permission is granted to temporarily download one copy of the materials on Delamore Energy's website for personal, non-commercial transitory viewing only.</p>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Modify or copy the materials</li>
                      <li>Use the materials for any commercial purpose or for any public display</li>
                      <li>Attempt to reverse engineer any software contained on the website</li>
                      <li>Remove any copyright or other proprietary notations from the materials</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-foreground mb-3">3. Disclaimer</h3>
                    <p>The materials on Delamore Energy's website are provided on an 'as is' basis. Delamore Energy makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-foreground mb-3">4. Limitations</h3>
                    <p>In no event shall Delamore Energy or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Delamore Energy's website, even if Delamore Energy or a Delamore Energy authorized representative has been notified orally or in writing of the possibility of such damage.</p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-foreground mb-3">5. Accuracy of Materials</h3>
                    <p>The materials appearing on Delamore Energy's website could include technical, typographical, or photographic errors. Delamore Energy does not warrant that any of the materials on its website are accurate, complete, or current.</p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-foreground mb-3">6. Links</h3>
                    <p>Delamore Energy has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Delamore Energy of the site.</p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-foreground mb-3">7. Modifications</h3>
                    <p>Delamore Energy may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.</p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-foreground mb-3">8. Contact Information</h3>
                    <p>If you have any questions about these Terms & Conditions, please contact us at:</p>
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
      <WhatsAppFloat />
    </div>
  );
};

export default Terms;
