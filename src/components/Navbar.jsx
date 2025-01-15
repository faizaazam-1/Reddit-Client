// src/components/Navbar.jsx
import { FireIcon } from "@heroicons/react/24/solid";
import { FaGithub } from "react-icons/fa"; // We'll need to install react-icons: npm install react-icons

function Navbar() {
  return (
    <nav className="bg-primary-50 border-b border-primary-200 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <FireIcon className="w-8 h-8 text-primary-500" />
            <h1 className="text-neutral-700 text-2xl font-bold tracking-tight">
              Reddit Lanes
            </h1>
          </div>

          <a
            href="https://github.com/faizaazam-1/Reddit-Client" // Replace with your GitHub repo URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-700 hover:text-primary-500 transition-colors"
          >
            <FaGithub className="w-7 h-7" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
