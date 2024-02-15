"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { PiBookOpenTextLight, PiSparkleLight } from "react-icons/pi";
import { BarChart3, Flame, Laugh } from "lucide-react";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Workout of the Day",
    href: "/Community",
    description: "A new workout updated everyday for you to try out.",
  },
  {
    title: "Community Feed",
    href: "/Community",
    description: "Check out the latest updates.",
  },
  {
    title: "Explore The Community",
    href: "/Community",
    description:
      "Check out our others Users and view the global community page.",
  },
  {
    title: "Join Challenges",
    href: "/Community",
    description: "Join these available challenges and start your streaks!.",
  },
];

const menuItems = [
  {
    title: "Generate Workout Plan",
    href: "/Workout-Plan",
    description: "Create your personalized workout plan.",
  },
  // ...other items...
];

// ...

{
  menuItems.map((item) => (
    <Link key={item.href} href={item.href}>
      {item.title}
    </Link>
  ));
}

const WorkoutComponent: { title: string; href: string; description: string }[] =
  [
    {
      title: "Generate Workout Plan",
      href: "/Our-Product",
      description: "Create your personalized workout plan.",
 
      
    },
    {
      title: "Workout Timer",
      href: "/Demo-Our-Product",
      description: "Time your workout and stay focused on the clock!.",
    },
    {
      title: "Create Diet Plan",
      href: "/Demo-Our-Product",
      description:
        "Craft a tailored diet plan that aligns with your nutritional goals.",
    },
    {
      title: "Leaderboard",
      href: "/Demo-Our-Product",
      description: "View our Top Users.",
    },
    {
      title: "Daily Log",
      href: "/Demo-Our-Product",
      description: "Log your daily workout and meals for progress tracking.",
    },
    {
      title: "Tips and guides",
      href: "/Demo-Our-Product",
      description: "Explore helpful tips and guides for your fitness journey.",
    },
  ];

export function Menu() {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Profile</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex">
              <ul className="grid p-2 md:w-[250px] lg:w-[250px] hover:cursor-pointer border-r">
                <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm">
                  <Laugh className="text-2xl mr-2 text-purple-600" />
                  <div>
                    <Link href="/Sign-Up">Personal Details</Link>
                    <p className="text-gray-400 text-sm font-light">
                      Personalise and edit your profile
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm">
                  <Flame className="text-2xl mr-2 text-red-600" />
                  <div>
                    <Link href="/Sign-Up">Gain Streaks</Link>
                    <p className="text-gray-400 text-sm font-light">
                      Daily challenges and streak tracking
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm">
                  <PiSparkleLight className="text-4xl mr-2 text-yellow-600" />
                  <div>
                    <Link href="/Sign-Up">Achievements</Link>
                    <p className="text-gray-400 text-sm font-light">
                      Badges and achievements for completing challenges
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm">
                  <BarChart3 className="text-2xl mr-2 text-blue-600" />
                  <div>
                    <Link href="/Sign-Up">History</Link>
                    <p className="text-gray-400 text-sm font-light">
                      Workout and diet plan history
                    </p>
                  </div>
                </div>
              </ul>

              <div></div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Workout & Diet</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {WorkoutComponent.map((WorkoutComponent) => (
                <ListItem
                  className="text-purple-600"
                  key={WorkoutComponent.title}
                  title={WorkoutComponent.title}
                  href={WorkoutComponent.href}
                  
                >
                  {WorkoutComponent.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem></NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Community</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  className="text-purple-600"
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/Pricing" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
