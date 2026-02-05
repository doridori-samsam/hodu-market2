import Image from "next/image";

function HoduLogo() {
  return (
    <Image
      src="assets/logo-hodu.svg"
      width={200}
      height={100}
      alt="hodu logo"
      className="h-14 w-auto sm:h-18"
      priority
    />
  );
}

HoduLogo.displayName = "Hodu Logo";
export default HoduLogo;
