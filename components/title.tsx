import type { ReactNode } from "react";

export default function Title(props: { children: ReactNode }) {
  return (
    <>
      <h2 className="text-3xl font-semibold flex gap-x-3 items-center text-primary">
        {props.children}
      </h2>
    </>
  );
}
