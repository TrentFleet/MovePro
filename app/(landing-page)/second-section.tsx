import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

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
    text-5xl
    xl:text-6xl
    flex
    justify-center
    xl:pt-14
    text-center
    bg-gradient-to-r
    from-purple-400
    mt-8
    "
      >
       

        <Carousel className="flex text-center lg:max-w-100 w-60 lg:w-1/4 justify-center m-10 ">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="flex justify-center">
                  <Card key={index}>
                    <CardContent>
                      <Image
                      width={600}
                      height={600}
                        src={`/assets/image${(index % 5) + 1}.jpg`}
                        alt={`Random Image ${index + 1}`}
                        className="lg:max-w-100 lg:w-100 w-100 h-100 justify-center text-center"
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
    </div>
  );
}
