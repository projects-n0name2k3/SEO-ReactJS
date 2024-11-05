import { FaFacebook, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="h-[300px] bg-[#1f1f1f] flex gap-3 flex-col items-center justify-center text-white">
      <h2 className="text-3xl font-bold">Lorem</h2>
      <p className="w-full md:w-1/3 text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s
      </p>
      <div className="flex items-center gap-3">
        <Link to="https://github.com" aria-label="Github">
          <FaGithub size={24} />
        </Link>
        <Link to="https://facebook.com" aria-label="Facebook">
          <FaFacebook size={24} />
        </Link>
      </div>
    </footer>
  );
}
