import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-[#7FC8F8]">
      <div className="flex shadow-lg shadow-blue-200 text-black gap-1 text-opacity-75 justify-between font-bold">
        <Link href={"/"}>
          <p>home</p>
        </Link>
        <Link href={"/about"}>
          <p>about</p>
        </Link>
        <Link href={"/contact"}>
          <p>contact</p>
        </Link>
        <Link href={"/experience"}>
          <p>experience</p>
        </Link>
      </div>
    </div>
  );
}
