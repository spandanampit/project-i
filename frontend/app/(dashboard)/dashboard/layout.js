import Sidebar from "./components/Sidebar";
import Header from "./components/DashboardHeader";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar />

      <div className="flex-1 ml-64">
        <Header />

        <main className="pt-24 px-8 pb-12">
          {children}
        </main>
      </div>
    </div>
  );
}
