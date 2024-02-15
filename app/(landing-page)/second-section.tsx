import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselDemo() {
  // Generate random image URLs

  return (
    <div className="md:items-center flex flex-col">
      <div
        className="
    font-medium 
    2xl:w-2/3
    md:w-2/3
    lg:px-0
    px-4
    text-5xl
    xl:text-6xl
    flex
    justify-center
    xl:pt-14
    text-center
    p-2
    bg-gradient-to-r
    from-purple-600
    mt-8
    "
      >
        <div></div>

        <Carousel className="flex text-center lg:max-w-100 w-80 justify-center">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="flex justify-center">
                  <Card key={index}>
                    <CardContent>
                      <span className="text-xl font-semibold text-white">
                        {index + 1}
                      </span>
                      <img
                        src={`assets/image${(index % 5) + 1}.jpg`}
                        alt={`Random Image ${index + 1}`}
                        className="lg:max-w-100 lg:w-80 w-80 h-full justify-center text-center"
                        // Adjusted the class to "w-full lg:w-80" for responsiveness
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <h3
        className="
    font-medium 
    2xl:w-1/3
    md:w-2/3
    lg:px-0
    px-4
    text-5xl
    xl:text-6xl
    flex
    justify-center
    xl:pt-14
    text-center
    pt-6
    "
      ></h3>
      <p className="text-2xl pt-4 text-center w-2/3 mx-auto text-purple-600">
        Move with Us.
        <div className="m-4">

        </div>
      </p>
      
    </div>
  );
}
