import Link from "next/link";
import { buttonVariants } from "../ui/button";

interface LinkProps {
  url?: string;
  label: string;
}

export default function NavLink({ url, label }: LinkProps) {
  return (
    <li className="">
      <Link href="/" className={buttonVariants({ variant: "link" })}>
        {label}
      </Link>
    </li>
  );
}
