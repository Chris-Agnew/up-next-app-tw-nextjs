import Image from "next/image";
import Link from "next/link";
import Login from "../components/Login";

const Navbar = () => {
  return (
    <>
      <div className="w-screen h-32 bg-black text-gray-200 flex">
        <div className="flex justify-center items-center w-1/3">
          <Image src="/images/up-next-logo.png" height={250} width={250} />
        </div>
        <div className="flex justify-center items-center w-1/3">
          <Link href="#">
            <h3 className="cursor-pointer hover:text-blue-600">New Episodes</h3>
          </Link>
          <Link href="#">
            <h3 className="px-5 cursor-pointer hover:text-blue-600">
              Popular Episodes
            </h3>
          </Link>
          <Link href="#">
            <h3 className="cursor-pointer hover:text-blue-600">Coming Soon</h3>
          </Link>
        </div>
        <Login />
      </div>
    </>
  );
};

export default Navbar;
