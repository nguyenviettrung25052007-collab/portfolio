import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white flex justify-center gap-8 py-4 z-50">
      <a href="#hero" className="hover:text-gray-400">Home</a>
      <a href="#about" className="hover:text-gray-400">About</a>
      <a href="#projects" className="hover:text-gray-400">Projects</a>
      <a href="#contact" className="hover:text-gray-400">Contact</a>
      <ThemeToggle />
    </nav>
  );
}
