
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const features = [
    "Full 30-day curriculum",
    "5 hands-on AI projects",
    "Weekly live Q&A sessions",
    "Private community access",
    "Certificate of completion",
    "Job preparation resources"
  ];

  return (
    <section id="pricing" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
          Simple, <span className="gradient-text">Transparent Pricing</span>
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
          One affordable price for complete AI mastery - no hidden fees or subscriptions
        </p>

        <div className="max-w-md mx-auto">
          <Card className="border-2 border-mwpro-light-blue overflow-hidden">
            <div className="absolute -top-8 -right-8 h-24 w-24 bg-mwpro-light-blue/20 rounded-full blur-xl"></div>
            <CardHeader className="pb-0 pt-6 px-6 text-center">
              <CardTitle className="text-3xl font-bold">Complete AI Course</CardTitle>
              <div className="mt-4 text-5xl font-bold">$149</div>
              <p className="text-sm text-muted-foreground">One-time payment</p>
            </CardHeader>
            <CardContent className="pt-6 px-6">
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-mwpro-light-blue mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="px-6 pb-6">
              <Button className="w-full bg-mwpro-blue hover:bg-mwpro-blue/90 button-mwpro text-lg py-6">
                Buy Now
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Not convinced yet? <span className="underline cursor-pointer font-medium">Schedule a free consultation</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
