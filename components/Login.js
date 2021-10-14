import Link from "next/link";
import Image from "next/image";

const Login = () => {
  return (
    <div className="flex justify-center items-center w-1/3">
      <Link href="/auth">
        <h3 className="cursor-pointer hover:text-blue-600">Sign In</h3>
      </Link>
      <Link href="/auth">
        <button
          type="submit"
          className="p-3 mx-5 bg-blue-600 hover:bg-blue-900 rounded-lg"
        >
          Sign Up
        </button>
      </Link>
    </div>
  );
};

export default Login;
