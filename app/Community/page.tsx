import Navbar from "@/components/navbar/navbar";
import Link from "next/link";
import { HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Community = () => {
  return (
    <div>
      <Navbar />
      <Link href="/">
        <Button className="bg-purple-600 m-2 p-4">
          <HomeIcon className="text-2xl mr-2" />
          Home
        </Button>
      </Link>

      <div>community goes here</div>
    </div>
  );
};

export default Community;
