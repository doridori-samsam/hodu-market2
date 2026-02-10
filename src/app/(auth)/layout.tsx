import { HoduLogo } from "@/components";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="layout-full bg-auth gap-16 pt-30">
      <header>
        <HoduLogo />
      </header>
      <div className="wrapper-auth">{children}</div>
    </main>
  );
}

export default AuthLayout;
