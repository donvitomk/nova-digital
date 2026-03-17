import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Trash2, Edit2, X } from "lucide-react";
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
  const [editing, setEditing] = useState<ClientLogo | null>(null);
  const [editName, setEditName] = useState("");
  const [editFile, setEditFile] = useState<File | null>(null);

  const { data: logos = [], isLoading } = useQuery({
    queryKey: ["admin-logos"],
    queryFn: async () => {
      const { data, error } = await supabase.from("client_logos").select("*").order("display_order");
      if (error) throw error;
      return data as ClientLogo[];
    },
  });

  const uploadFile = async (f: File) => {
    const path = `logos/${Date.now()}-${f.name}`;
    const { error } = await supabase.storage.from("media").upload(path, f);
    if (error) throw error;
    const { data } = supabase.storage.from("media").getPublicUrl(path);
    return data.publicUrl;
  };

  const addMutation = useMutation({
    mutationFn: async () => {
      let logoUrl: string | null = null;
      if (file) logoUrl = await uploadFile(file);
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

  const updateMutation = useMutation({
    mutationFn: async () => {
      if (!editing) return;
      const payload: { name: string; logo_url?: string } = { name: editName };
      if (editFile) payload.logo_url = await uploadFile(editFile);
      const { error } = await supabase.from("client_logos").update(payload).eq("id", editing.id);
      if (error) throw error;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["admin-logos"] });
      setEditing(null);
      toast.success("Logo updated");
    },
    onError: () => toast.error("Failed to update logo"),
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

  const startEdit = (logo: ClientLogo) => {
    setEditing(logo);
    setEditName(logo.name);
    setEditFile(null);
  };

  if (isLoading) return <p className="text-muted-foreground">Loading...</p>;

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-foreground">Client Logos</h2>

      {/* Add form */}
      <div className="p-6 rounded-xl border border-border bg-secondary/30 space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div><Label>Client Name</Label><Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Brand name" /></div>
          <div><Label>Logo Image (PNG, 400×160px recommended, transparent background)</Label><Input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} /></div>
        </div>
        <Button onClick={() => addMutation.mutate()} disabled={!name || addMutation.isPending}>
          <Plus size={16} className="mr-2" /> {addMutation.isPending ? "Adding..." : "Add Logo"}
        </Button>
      </div>

      {/* Edit form */}
      {editing && (
        <div className="p-6 rounded-xl border border-border bg-secondary/30 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-foreground">Edit Logo</h3>
            <Button variant="ghost" size="sm" onClick={() => setEditing(null)}><X size={16} /></Button>
          </div>
          {editing.logo_url && (
            <img src={editing.logo_url} alt={editing.name} className="h-12 w-auto object-contain rounded border border-border p-1" />
          )}
          <div className="grid sm:grid-cols-2 gap-4">
            <div><Label>Client Name</Label><Input value={editName} onChange={(e) => setEditName(e.target.value)} /></div>
            <div><Label>Replace Logo (optional)</Label><Input type="file" accept="image/*" onChange={(e) => setEditFile(e.target.files?.[0] || null)} /></div>
          </div>
          <Button onClick={() => updateMutation.mutate()} disabled={!editName || updateMutation.isPending}>
            {updateMutation.isPending ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      )}

      {/* Logo list */}
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
            <div className="flex items-center gap-1">
              <Button variant="outline" size="sm" onClick={() => startEdit(logo)}><Edit2 size={14} /></Button>
              <Button variant="destructive" size="sm" onClick={() => deleteMutation.mutate(logo.id)}><Trash2 size={14} /></Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminLogos;
