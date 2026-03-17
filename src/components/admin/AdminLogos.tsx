import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface ClientLogo {
  id: string;
  name: string;
  logo_url: string | null;
  display_order: number;
}

const AdminLogos = () => {
  const qc = useQueryClient();
  const [name, setName] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const { data: logos = [], isLoading } = useQuery({
    queryKey: ["admin-logos"],
    queryFn: async () => {
      const { data, error } = await supabase.from("client_logos").select("*").order("display_order");
      if (error) throw error;
      return data as ClientLogo[];
    },
  });

  const addMutation = useMutation({
    mutationFn: async () => {
      let logoUrl: string | null = null;
      if (file) {
        const path = `logos/${Date.now()}-${file.name}`;
        const { error: uploadError } = await supabase.storage.from("media").upload(path, file);
        if (uploadError) throw uploadError;
        const { data } = supabase.storage.from("media").getPublicUrl(path);
        logoUrl = data.publicUrl;
      }
      const { error } = await supabase.from("client_logos").insert({ name, logo_url: logoUrl });
      if (error) throw error;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["admin-logos"] });
      setName("");
      setFile(null);
      toast.success("Logo added");
    },
    onError: () => toast.error("Failed to add logo"),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("client_logos").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["admin-logos"] });
      toast.success("Logo deleted");
    },
  });

  if (isLoading) return <p className="text-muted-foreground">Loading...</p>;

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-foreground">Client Logos</h2>

      <div className="p-6 rounded-xl border border-border bg-secondary/30 space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div><Label>Client Name</Label><Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Brand name" /></div>
          <div><Label>Logo Image (PNG, 400×160px recommended, transparent background)</Label><Input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} /></div>
        </div>
        <Button onClick={() => addMutation.mutate()} disabled={!name || addMutation.isPending}>
          <Plus size={16} className="mr-2" /> {addMutation.isPending ? "Adding..." : "Add Logo"}
        </Button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {logos.map((logo) => (
          <div key={logo.id} className="p-4 rounded-xl border border-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              {logo.logo_url ? (
                <img src={logo.logo_url} alt={logo.name} className="h-8 w-8 object-contain" />
              ) : (
                <div className="h-8 w-8 rounded bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground">
                  {logo.name.charAt(0)}
                </div>
              )}
              <span className="font-medium text-foreground text-sm">{logo.name}</span>
            </div>
            <Button variant="destructive" size="sm" onClick={() => deleteMutation.mutate(logo.id)}>
              <Trash2 size={14} />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminLogos;
