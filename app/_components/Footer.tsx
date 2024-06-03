import Image from "next/image";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 px-12 py-8 left-0 right-0 text-sm sticky top-full">
      <div className="container mx-auto flex flex-col md:flex-row md:items-start pb-8">
        <div className="w-full md:w-1/3 px-4 space-y-2">
          <h3 className=" font-semibold mb-4">Patisserie mille.mille</h3>
          <p className="">
            123 Example Street
            <br />
            City, State 12345
          </p>
          <p className="">+1 (555) 555-5555</p>
          <p className="">info@company.com</p>
        </div>

        <div className="flex flex-col items-center md:items-start ">
          <div className="">
            <div className="w-full flex gap-2">
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <a href="#">
                <Image src="/facebook.png" alt="" width={16} height={16} />
              </a>
              <a href="#">
                <Image src="/instagram.png" alt="" width={16} height={16} />
              </a>
            </div>

            <div className="w-full space-y-2 font-semibold flex flex-col">
              <ul className="flex gap-6">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>

              <ul className="flex gap-6 ">
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className=" container  h-10 fixed bottom-0 left-0 right-0 flex justify-between text-gray-500 items-center">
        <p className=" text-xs">© 2024 Patisserie mille.mille</p>
        <div className="flex gap-2">
          <a href="#">
            <ArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
