import { logoutAction } from "@/actions/auth"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { authClient } from "@/lib/auth-client"
import LogoutButton from "./auth/logout-button";
// import { getCurrentUser } from "@/lib/server-utils";

const UserMenu = ({ username }: { username: string }) => {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-12 h-12 rounded-full bg-primary shadow text-xl text-white cursor-pointer">{username[0]}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        {/* <DropdownMenuItem> */}
        <LogoutButton />
        {/* </DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserMenu