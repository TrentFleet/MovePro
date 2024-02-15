import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="m-2">
      <Link href="/">
        <Image
          src="/logos/logo2.svg"
          alt="logo"
          width={150}
          height={150}
          className="w-20"
        />
      </Link>
    </div>
  );
};

export default Logo;
