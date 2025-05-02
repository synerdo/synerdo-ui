import { SxStyle } from "@/classes";
import Link from "next/link";
import { ComponentProps } from "react";

type LinkProps = ComponentProps<typeof Link>;

export function ItemLink({ children, ...props }: LinkProps) {
  return (
    <Link {...props} style={sxStyle.link}>
      {children}
    </Link>
  );
}

const sxStyle = SxStyle.create({
  link: {
    display: "flex",
    flexDirection: "column",
    textDecoration: "none",
    color: "inherit",
    minHeight: "200px",
  },
});
