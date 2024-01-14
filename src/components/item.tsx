import Link from "next/link";
import { LinkProps } from "types/component";

export function Item(props: LinkProps) {
  const value = props.target ? "_blank" : "";
  return (
    <>
      <Link
        href={props.path}
        target={value}
        className="flex items-center gap-2 text-secondary cursor-pointer hover:opacity-90  hover:transition-all py-2 test"
      >
        {props.children}
      </Link>
    </>
  );
}
