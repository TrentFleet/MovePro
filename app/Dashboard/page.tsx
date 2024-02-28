import { Button } from "@/components/ui/button";
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";

export default function Dashboard() {
  return (
    <div>
        <LogoutLink>
            <Button>Log out</Button>
            </LogoutLink>
      <h1>Dashboard</h1>
    </div>
  );
}
