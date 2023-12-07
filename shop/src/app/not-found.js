import Image from "next/image"
export default function NotFound() {
    return (
      <div style={{ width: "700px", margin: "0 auto" }}>
        <Image src={"/images/404-snow.gif"} width={700} height={600}></Image>
      </div>
    );
}