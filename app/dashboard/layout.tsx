// app/dashboard/layout.tsx
import SideNav from "./nav-link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <div className="w-64">
        <SideNav />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
