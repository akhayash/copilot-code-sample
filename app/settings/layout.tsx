import Sidebar from "@/components/layout/sidebar";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto grid flex-1 gap-0 md:grid-cols-[220px_1fr]">
      <Sidebar />
      <div className="p-6">{children}</div>
    </div>
  );
}