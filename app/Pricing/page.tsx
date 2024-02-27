import Navbar from "@/components/navbar/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HomeIcon } from "lucide-react";

const Pricing = () => {
  const pricingTiers = [
    {
      title: "One off Donation",
      price: "$5",
      features: [
        "MovePro's Generated Workouts",
        "Thank you for your support"
      ],
    },
  ];

  return (
    <div>
      <Navbar />
      <Link href="/">
        <Button className="bg-purple-600 m-8 p-4">
          <HomeIcon className="text-2xl mr-2" />
          Home
        </Button>
      </Link>
      <div className=" flex flex-col justify-center text-center p-4">
        <h1 className="text-4xl font-bold mb-8 text-center flex-co">
          MovePro
        </h1>
        <div>
          {pricingTiers.map((tier) => (
            <div
              key={tier.title}
              className=" lg:mx-auto lg:w-1/2 border rounded-lg p-2 m-2 shadow-md transition-transform transform hover:bg-gray-50 hover:scale-105"
            >
              <h2 className="text-xl font-semibold mb-4">{tier.title}</h2>
              <p className="text-3xl font-bold mb-4">{tier.price}</p>
              <ul className="list-none ml-4 mb-6 text-purple-600 font-semibold">
                {tier.features.map((feature) => (
                  <li key={feature} className="text-md">
                    {feature}
                  </li>
                ))}
              </ul>
              <Button>Get Started</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
