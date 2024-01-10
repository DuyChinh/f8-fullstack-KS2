import Image from "next/image";
// import Link from "next/link";
// import { IoIosArrowRoundForward } from "react-icons/io";

export default function NotFound() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      <Image
        src="https://cdn.dribbble.com/users/605899/screenshots/4144886/media/47ae8417ee638d039a4b7300439ea061.gif"
        alt="404"
        layout="fill"
        objectFit="contain"
        objectPosition="center"
      />
    </div>
  );
}
