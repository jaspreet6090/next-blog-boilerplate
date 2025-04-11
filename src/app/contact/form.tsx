"use client"

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
export default function ContactForm() {
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        message: "",
      });
      
    return (
        <form
            className="flex flex-col gap-8 mt-8"
            onSubmit={(e) => {
                e.preventDefault();
                toast.success(
                  `Thank you for your message, ${formData.name}! We will get back to you soon.`
                );
                // Reset form data
                setFormData({ email: "", name: "", message: "" });
                e.currentTarget.reset();
            }}
          >
            <div className=" w-full   border border-muted-foreground flex items-center">
              <input
                className="focus:outline-none text-sm w-full p-4"
                type="name"
                placeholder="Enter your name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="w-full border border-muted-foreground  flex items-center">
              <input
                className="focus:outline-none text-sm w-full p-4 "
                type="email"
                placeholder="Enter your email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="w-full px-4 py-4 border border-muted-foreground  flex items-center">
              <textarea
                rows={8}
                required
                style={{ resize: "none" }}
                className="focus:outline-none text-sm w-full"
                placeholder="Enter your message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <Button type="submit" size={"lg"} className="h-12">
              Subscribe
            </Button>
          </form>
    );
}