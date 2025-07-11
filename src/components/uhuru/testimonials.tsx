import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full bg-section py-12 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl px-4 md:px-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">The UhurU Advantage</h2>
          <p className="max-w-[900px] text-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We are not just a service provider; we are your strategic partner in technology and finance.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:max-w-none">
           <Card className="border bg-card shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-primary/20 hover:border-primary">
              <CardHeader>
                <CardTitle className="text-center text-2xl font-headline">Decades of Expertise</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                 <p className="text-foreground">
                    Since the 1990s, we've navigated every tech wave, from legacy systems to AI. We translate this deep experience into robust, future-proof solutions for your business.
                </p>
              </CardContent>
            </Card>
            <Card className="border bg-card shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-primary/20 hover:border-primary">
              <CardHeader>
                <CardTitle className="text-center text-2xl font-headline">Unmatched Portability</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                 <p className="text-foreground">
                    Your business, your rules. Our Dockerized solutions give you the freedom to deploy on any cloud, on-premise, or hybrid environment. True independence, zero vendor lock-in.
                </p>
              </CardContent>
            </Card>
            <Card className="border bg-card shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-primary/20 hover:border-primary">
              <CardHeader>
                <CardTitle className="text-center text-2xl font-headline">No-Strings-Attached Consulting</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                 <p className="text-foreground">
                    Let's talk strategy. Your first consultation is on us. We'll explore your needs and map out solutions, no commitments required. It's not a sales pitch; it's a partnership from day one.
                </p>
              </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
