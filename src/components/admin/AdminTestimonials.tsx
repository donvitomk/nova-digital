import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Plus, Trash2, Edit2, X } from "lucide-react";
import { toast } from "sonner";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  display_order: number;
}

const AdminTestimonials = () => {
  const qc = useQueryClient();
  const [editing, setEditing] = useState<Testimonial | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [form, setForm] = useState({ quote: "", author: "", role: "", company: "" });

  const { data: testimonials = [], isLoading } = useQuery({
    queryKey: ["admin-testimonials"],
    queryFn: async () => {
      const { data, error } = await supabase.from("testimonials").select("*").order("display_order");
      if (error) throw error;
      return data as Testimonial[];
    },
  });

  const saveMutation = useMutation({
    mutationFn: async () => {
      if (isNew) {
        const { error } = await supabase.from("testimonials").insert(form);
        if (error) throw error;
      } else if (editing) {
        const { error } = await supabase.from("testimonials").update(form).eq("id", editing.id);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["admin-testimonials"] });
      setEditing(null);
      setIsNew(false);
      toast.success("Testimonial saved");
    },
    onError: () => toast.error("Failed to save"),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("testimonials").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["admin-testimonials"] });
      toast.success("Testimonial deleted");
    },
  });

  const startEdit = (t: Testimonial) => {
    setEditing(t);
    setIsNew(false);
    setForm({ quote: t.quote, author: t.author, role: t.role, company: t.company });
  };

  const startNew = () => {
    setEditing(null);
    setIsNew(true);
    setForm({ quote: "", author: "", role: "", company: "" });
  };

  if (isLoading) return <p className="text-muted-foreground">Loading...</p>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-foreground">Testimonials</h2>
        <Button size="sm" onClick={startNew}><Plus size={16} className="mr-2" /> Add Testimonial</Button>
      </div>

      {(isNew || editing) && (
        <div className="p-6 rounded-xl border border-border bg-secondary/30 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">{isNew ? "New Testimonial" : "Edit Testimonial"}</h3>
            <Button variant="ghost" size="sm" onClick={() => { setEditing(null); setIsNew(false); }}><X size={16} /></Button>
          </div>
          <div><Label>Quote</Label><Textarea value={form.quote} onChange={(e) => setForm({ ...form, quote: e.target.value })} /></div>
          <div className="grid sm:grid-cols-3 gap-4">
            <div><Label>Author</Label><Input value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} /></div>
            <div><Label>Role</Label><Input value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} /></div>
            <div><Label>Company</Label><Input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} /></div>
          </div>
          <Button onClick={() => saveMutation.mutate()} disabled={saveMutation.isPending}>
            {saveMutation.isPending ? "Saving..." : "Save Testimonial"}
          </Button>
        </div>
      )}

      <div className="space-y-3">
        {testimonials.map((t) => (
          <div key={t.id} className="p-4 rounded-xl border border-border">
            <p className="text-sm text-foreground italic mb-2">"{t.quote}"</p>
            <p className="text-xs text-muted-foreground">{t.author}, {t.role} — {t.company}</p>
            <div className="flex gap-2 mt-3">
              <Button variant="outline" size="sm" onClick={() => startEdit(t)}><Edit2 size={14} className="mr-1" /> Edit</Button>
              <Button variant="destructive" size="sm" onClick={() => deleteMutation.mutate(t.id)}><Trash2 size={14} className="mr-1" /> Delete</Button>
            </div>
          </div>
        ))}
        {testimonials.length === 0 && <p className="text-muted-foreground text-sm">No testimonials yet.</p>}
      </div>
    </div>
  );
};

export default AdminTestimonials;
