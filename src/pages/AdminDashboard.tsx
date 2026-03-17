import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogOut, FolderOpen, Image, MessageSquare } from "lucide-react";
import AdminProjects from "@/components/admin/AdminProjects";
import AdminLogos from "@/components/admin/AdminLogos";
import AdminTestimonials from "@/components/admin/AdminTestimonials";

const tabs = [
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "logos", label: "Client Logos", icon: Image },
  { id: "testimonials", label: "Testimonials", icon: MessageSquare },
] as const;

type Tab = typeof tabs[number]["id"];

const AdminDashboard = () => {
  const { isAdmin, loading, signOut } = useAuth();
  const [activeTab, setActiveTab] = useState<Tab>("projects");

  if (loading) return <div className="min-h-screen flex items-center justify-center text-muted-foreground">Loading...</div>;
  if (!isAdmin) return <Navigate to="/admin/login" replace />;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background sticky top-0 z-40">
        <div className="container mx-auto px-6 h-14 flex items-center justify-between">
          <h1 className="text-lg font-bold text-foreground">NOVA Admin</h1>
          <Button variant="ghost" size="sm" onClick={signOut}>
            <LogOut size={16} className="mr-2" /> Sign Out
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-6 py-6">
        <div className="flex gap-2 mb-8">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab(tab.id)}
            >
              <tab.icon size={16} className="mr-2" />
              {tab.label}
            </Button>
          ))}
        </div>

        <div className={activeTab === "projects" ? "" : "hidden"}><AdminProjects /></div>
        <div className={activeTab === "logos" ? "" : "hidden"}><AdminLogos /></div>
        <div className={activeTab === "testimonials" ? "" : "hidden"}><AdminTestimonials /></div>
      </div>
    </div>
  );
};

export default AdminDashboard;
