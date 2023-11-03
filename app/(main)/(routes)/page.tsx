import { ModeToggle } from "@/components/theme-toggle";
import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <div>
      This is a protected route
      <UserButton afterSignOutUrl="/"/>
      <ModeToggle/>
    </div>
  );
}
