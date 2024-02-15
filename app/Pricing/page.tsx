import Navbar from "@/components/navbar/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Flame, FlameIcon, HomeIcon } from "lucide-react";

const Pricing = () => {
    const pricingTiers = [
      {
        title: "Basic",
        price: "$2.99/month",
        features: ["1 Generated Workout", "1 Diet Plan"],
      },
      {
        title: "Pro",
        price: "$9.99/month",
        features: ["5 Generated Workout", "5 Diet Plans"],
      },
      {
        title: "Premium",
        price: "$20/month",
        features: ["Unlimited Features and Access to MovePro.io",],
      },
    ];
  
    return (
      <div>
        <Navbar />
<Link href="/">
    <Button className="bg-purple-600 m-8 p-4">
    <HomeIcon className="text-2xl mr-2" />
        Home</Button>
</Link>
        <div className="container mx-auto mt-12 p-4">
          <h1 className="text-4xl font-bold mb-8">Choose Your Plan</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <div
                key={tier.title}
                className="border rounded-lg p-6 shadow-md transition-transform transform hover:bg-gray-50 hover:scale-105"
              >
                <h2 className="text-xl font-semibold mb-4">{tier.title}</h2>
                <p className="text-3xl font-bold mb-4">{tier.price}</p>
                <ul className="list-none ml-4 mb-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="text-md">
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button>
                    Get Started
                    </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Pricing;