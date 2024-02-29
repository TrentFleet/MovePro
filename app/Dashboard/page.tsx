import { Button } from "@/components/ui/button";
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";

export default function Dashboard() {
  return (
    <div className="lg:flex lg:flex-col lg:mx-20 sm:flex-col gap-10 justify-center items-center">
       <h1>You made it to the Dashboard Page! coming soon.</h1>
       
        <LogoutLink>
            <Button>Log out</Button>
            </LogoutLink>
    </div>
  );
}
