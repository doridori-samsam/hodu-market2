import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        src="/assets/Logo-hodu.svg"
        alt="호두로고"
        width={120}
        height={32}
        priority
      />
      <h1 className="font-normal text-lg">호두마켓 홈페이지</h1>
    </div>
  );
}
