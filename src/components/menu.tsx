import { DarkMode } from "./dark-mode";

export default function Menu() {
  return (
    <header className="sticky top-0 flex justify-end items-center pr-6 pt-6">
      <div className="relative inline-block text-left">
        <DarkMode />
      </div>
    </header>
  );
}
