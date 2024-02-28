import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Apple,
  Award,
  Biohazard,
  Building,
  CalendarDays,
  CheckSquare,
  CircleUserRound,
  Dumbbell,
  Medal,
  PersonStanding,
  Presentation,
  Sunrise,
  Swords,
  Trophy,
} from "lucide-react";
import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

interface DropDownMenuProps {
  onClose: () => void;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ onClose }) => {
  function handleLinkClick(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ): void {
    onClose();
  }

  return (
    <div className="mt-16">
      <div
        className="
    w-full
    h-auto
    absolute
    bg-purple-100
    px-12
    flex
    flex-col
    justify-start
    right-0
    xl:hidden
    z-10
    border-black
    border-2
    p-6
    "
      >
        <div></div>
        <Accordion defaultValue={""} className="pl-2" type="single" collapsible>
          <AccordionItem className="border-b" value="item-1">
            <AccordionTrigger className="flex mt-16">Sign up</AccordionTrigger>
            <AccordionContent defaultValue={"0"} className="space-y-2">
              <RegisterLink className="flex" onClick={handleLinkClick}>
                <CircleUserRound className="h-6 w-6 mr-2 text-blue-600" />
                <div>Create a Profile</div>
              </RegisterLink>
              <RegisterLink className="flex" onClick={handleLinkClick}>
                <Award className="h-6 w-6 mr-2 text-green-600" />
                <div>Streaks</div>
                <div className="text-purple-600 ml-2">Coming soon</div>
              </RegisterLink>
              <RegisterLink className="flex" onClick={handleLinkClick}>
                <Medal className="h-6 w-6 mr-2 text-yellow-600" />
                <div>Achievements</div>
                <div className="text-purple-600 ml-2">Coming soon</div>
              </RegisterLink>
              <RegisterLink className="flex" onClick={handleLinkClick}>
                <Trophy className="h-6 w-6 mr-2 text-purple-600" />
                <div>History</div>
                <div className="text-purple-600 ml-2">Coming soon</div>
              </RegisterLink>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="border-b" value={"item-2"}>
            <AccordionTrigger>Workout & Diet</AccordionTrigger>
            <AccordionContent className="space-y-2">
              <Link href="/Workout" className="flex" onClick={handleLinkClick}>
                <Dumbbell className="h-6 w-6 mr-2 text-red-600" />
                <div>Generate Workout</div>
              </Link>
              <Link
                href="/Our-Product"
                className="flex"
                onClick={handleLinkClick}
              >
                <Apple className="h-6 w-6 mr-2 text-green-600" />
                <div>Create Diet Plan</div>
                <div className="text-purple-600 ml-2">Coming soon</div>
              </Link>
              <Link
                href="/Our-Product"
                className="flex"
                onClick={handleLinkClick}
              >
                <CalendarDays className="h-6 w-6 mr-2 text-blue-600" />
                <div>Daily Log</div>
                <div className="text-purple-600 ml-2">Coming soon</div>
              </Link>
              <Link
                href="/Our-Product"
                className="flex"
                onClick={handleLinkClick}
              >
                <CheckSquare className="h-6 w-6 mr-2 text-orange-600" />
                <div>Tips and Guides</div>
                <div className="text-purple-600 ml-2">Coming soon</div>
              </Link>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="border-b" value={"item-3"}>
            <AccordionTrigger>Community</AccordionTrigger>
            <AccordionContent className="space-y-2">
              <Link
                href="/Community"
                className="flex"
                onClick={handleLinkClick}
              >
                <Sunrise className="h-6 w-6 mr-2 text-orange-400" />
                <div>Workout of the Day</div>
                <div className="text-purple-600 ml-2">Coming soon</div>
              </Link>
              <Link
                href="/Community"
                className="flex"
                onClick={handleLinkClick}
              >
                <Building className="h-6 w-6 mr-2 text-blue-600" />
                <div>Community Feed</div>
                <div className="text-purple-600 ml-2">Coming soon</div>
              </Link>
              <Link
                href="/Community"
                className="flex"
                onClick={handleLinkClick}
              >
                <Swords className="h-6 w-6 mr-2 text-red-600" />
                <div>Join Challenges</div>
                <div className="text-purple-600 ml-2">Coming soon</div>
              </Link>
              <Link
                href="/Community"
                className="flex"
                onClick={handleLinkClick}
              >
                <Presentation className="h-6 w-6 mr-2 text-purple-600" />
                <div>Leaderboards</div>
                <div className="text-purple-600 ml-2">Coming soon</div>
              </Link>
            </AccordionContent>
          </AccordionItem>
          <Link
            href="/Pricing"
            className="flex flex-1 items-center justify-between py-4 border-b"
          >
            Pricing
          </Link>
          <Link
            href={"/Workout"}
            className="flex flex-1 items-center justify-between py-4 border-b"
          >
            Create a Workout
          </Link>
          <div className="font-thin lg:flex items-center hidden">|</div>
          <div className="flex lg:space-x-4 items-center pr-4">
            <div>
              <LoginLink>
                <Button variant={"outline"} className="p-4 mt-4">
                  Log in
                </Button>
              </LoginLink>
            </div>
          </div>
        </Accordion>
      </div>
    </div>
  );
};

export default DropDownMenu;
