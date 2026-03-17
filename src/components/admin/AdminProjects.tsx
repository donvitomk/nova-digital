import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Plus, Trash2, Edit2, X, Upload } from "lucide-react";
import { toast } from "sonner";

interface GalleryItem {
  id: string;
  label: string;
  type: string;
  file_url: string | null;
  color: string;
  display_order: number;
}

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  services: string[];
  color: string;
  display_order: number;
}

const AdminProjects = () => {
  const qc = useQueryClient();
  const [editing, setEditing] = useState<Project | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [form, setForm] = useState({ title: "", category: "", description: "", services: "", color: "from-primary/20 to-blue-400/20" });
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const { data: projects = [], isLoading } = useQuery({
    queryKey: ["admin-projects"],
    queryFn: async () => {
      const { data, error } = await supabase.from("projects").select("*").order("display_order");
      if (error) throw error;
      return data as Project[];
    },
  });

  const { data: gallery = [] } = useQuery({
    queryKey: ["admin-gallery", selectedProject],
    queryFn: async () => {
      if (!selectedProject) return [];
      const { data, error } = await supabase.from("project_gallery").select("*").eq("project_id", selectedProject).order("display_order");
      if (error) throw error;
      return data as GalleryItem[];
    },
    enabled: !!selectedProject,
  });

  const saveMutation = useMutation({
    mutationFn: async () => {
      const payload = {
        title: form.title,
        category: form.category,
        description: form.description,
        services: form.services.split(",").map((s) => s.trim()).filter(Boolean),
        color: form.color,
      };
      if (isNew) {
        const { error } = await supabase.from("projects").insert(payload);
        if (error) throw error;
      } else if (editing) {
        const { error } = await supabase.from("projects").update(payload).eq("id", editing.id);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["admin-projects"] });
      setEditing(null);
      setIsNew(false);
      toast.success("Project saved");
    },
    onError: () => toast.error("Failed to save project"),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("projects").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["admin-projects"] });
      toast.success("Project deleted");
    },
  });

  const uploadGalleryItem = async (projectId: string, file: File) => {
    const ext = file.name.split(".").pop();
    const path = `gallery/${projectId}/${Date.now()}.${ext}`;
    const { error: uploadError } = await supabase.storage.from("media").upload(path, file);
    if (uploadError) { toast.error("Upload failed"); return; }
    const { data: urlData } = supabase.storage.from("media").getPublicUrl(path);
    const type = file.type.startsWith("video") ? "video" : "image";
    const { error } = await supabase.from("project_gallery").insert({
      project_id: projectId,
      label: file.name.split(".")[0],
      type,
      file_url: urlData.publicUrl,
      color: "from-primary/30 to-blue-300/30",
    });
    if (error) { toast.error("Failed to save gallery item"); return; }
    qc.invalidateQueries({ queryKey: ["admin-gallery", projectId] });
    toast.success("File uploaded");
  };

  const deleteGalleryItem = async (id: string) => {
    await supabase.from("project_gallery").delete().eq("id", id);
    qc.invalidateQueries({ queryKey: ["admin-gallery", selectedProject] });
    toast.success("Gallery item removed");
  };

  const startEdit = (p: Project) => {
    setEditing(p);
    setIsNew(false);
    setForm({ title: p.title, category: p.category, description: p.description, services: p.services.join(", "), color: p.color });
  };

  const startNew = () => {
    setEditing(null);
    setIsNew(true);
    setForm({ title: "", category: "", description: "", services: "", color: "from-primary/20 to-blue-400/20" });
  };

  if (isLoading) return <p className="text-muted-foreground">Loading...</p>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-foreground">Projects</h2>
        <Button size="sm" onClick={startNew}><Plus size={16} className="mr-2" /> Add Project</Button>
      </div>

      {(isNew || editing) && (
        <div className="p-6 rounded-xl border border-border bg-secondary/30 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">{isNew ? "New Project" : "Edit Project"}</h3>
            <Button variant="ghost" size="sm" onClick={() => { setEditing(null); setIsNew(false); }}><X size={16} /></Button>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div><Label>Title</Label><Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} /></div>
            <div><Label>Category</Label><Input value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} /></div>
          </div>
          <div><Label>Description</Label><Textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} /></div>
          <div><Label>Services (comma separated)</Label><Input value={form.services} onChange={(e) => setForm({ ...form, services: e.target.value })} /></div>
          <div><Label>Gradient Color</Label><Input value={form.color} onChange={(e) => setForm({ ...form, color: e.target.value })} placeholder="from-pink-500/20 to-purple-500/20" /></div>
          <Button onClick={() => saveMutation.mutate()} disabled={saveMutation.isPending}>
            {saveMutation.isPending ? "Saving..." : "Save Project"}
          </Button>
        </div>
      )}

      <div className="space-y-3">
        {projects.map((p) => (
          <div key={p.id} className="p-4 rounded-xl border border-border flex items-center justify-between">
            <div>
              <p className="font-semibold text-foreground">{p.title}</p>
              <p className="text-sm text-muted-foreground">{p.category}</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={() => { setSelectedProject(selectedProject === p.id ? null : p.id); }}>
                <Upload size={14} className="mr-1" /> Gallery
              </Button>
              <Button variant="outline" size="sm" onClick={() => startEdit(p)}><Edit2 size={14} /></Button>
              <Button variant="destructive" size="sm" onClick={() => deleteMutation.mutate(p.id)}><Trash2 size={14} /></Button>
            </div>
          </div>
        ))}
        {projects.length === 0 && <p className="text-muted-foreground text-sm">No projects yet.</p>}
      </div>

      {selectedProject && (
        <div className="p-6 rounded-xl border border-border bg-secondary/30 space-y-4">
          <h3 className="font-semibold">Gallery for {projects.find((p) => p.id === selectedProject)?.title}</h3>
          <div>
            <Label>Upload Image or Video</Label>
            <Input
              type="file"
              accept="image/*,video/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) uploadGalleryItem(selectedProject, file);
                e.target.value = "";
              }}
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {gallery.map((item) => (
              <div key={item.id} className="relative rounded-lg overflow-hidden border border-border group">
                {item.type === "video" ? (
                  <video src={item.file_url || ""} className="w-full aspect-video object-cover" />
                ) : (
                  <img src={item.file_url || ""} alt={item.label} className="w-full aspect-video object-cover" />
                )}
                <div className="absolute inset-0 bg-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button variant="destructive" size="sm" onClick={() => deleteGalleryItem(item.id)}>
                    <Trash2 size={14} />
                  </Button>
                </div>
                <p className="p-2 text-xs text-muted-foreground truncate">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProjects;
