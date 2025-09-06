"use client";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
    },
  }),
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", interest: "", message: "" });
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    interest: "",
    message: "",
  });

  const validate = () => {
    let valid = true;
    let newErrors = { name: "", email: "", interest: "", message: "" };

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email address";
      valid = false;
    }

    if (!form.interest.trim()) {
      newErrors.interest = "Interest is required";
      valid = false;
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> | { name: string; value: string }) => {
    if ("target" in e) {
      setForm({ ...form, [e.target.name]: e.target.value });
    } else {
      setForm({ ...form, [e.name]: e.value });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message, {
          description: data.description,
        });
        setForm({ name: "", email: "", interest: "", message: "" });
      } else {
        toast.error(data.message || "Something went wrong.");
      }
    } catch (err) {
      toast.error("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="max-w-6xl flex flex-col justify-center min-h-[80dvh] w-full mx-auto py-14 px-8">
      <motion.h2 variants={fadeInUp} initial="hidden" animate="visible" className="text-5xl font-light text-black mb-8 font-serif">
        Love to hear from You, <br /> Get in touch 👋🏿
      </motion.h2>

      <motion.p variants={fadeInUp} custom={1} initial="hidden" animate="visible" className="max-w-[60ch] text-gray-600">
        Whether you have an idea, project, or just want to say hi ✨, my inbox is always open. Let&apos;s create impactful solutions together.
      </motion.p>

      <motion.form onSubmit={handleSubmit} variants={fadeInUp} custom={2} initial="hidden" animate="visible" className="max-w-3xl mt-8 space-y-5">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="space-y-2 w-full">
            <Label htmlFor="name">Your name</Label>
            <Input
              id="name"
              name="name"
              value={form.name}
              onChange={(e) => handleChange(e)}
              className="border-none rounded-sm shadow-none focus-visible:ring-1 focus-visible:ring-offset-1 bg-gray-100 text-base font-medium text-gray-800 h-10"
              placeholder="Name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div className="space-y-2 w-full">
            <Label htmlFor="email">Your email</Label>
            <Input
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="border-none rounded-sm shadow-none focus-visible:ring-1 focus-visible:ring-offset-1 bg-gray-100 text-base font-medium text-gray-800 h-10"
              placeholder="Email address"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
        </div>

        <div className="space-y-2 w-full">
          <Label htmlFor="interest">What you are interested in</Label>
          <Select value={form.interest} onValueChange={(val) => handleChange({ name: "interest", value: val })}>
            <SelectTrigger id="interest" name="interest" className="w-full border-none focus-visible:ring-1 focus-visible:ring-offset-1 rounded-sm shadow-none bg-gray-100 !h-10">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent className="bg-gray-100">
              <SelectItem value="Fullstack" className="cursor-pointer">
                FullStack
              </SelectItem>
              <SelectItem value="Artificial Intelligence / Machine Learning" className="cursor-pointer">
                Artificial Intelligence / Machine Learning
              </SelectItem>
              <SelectItem value="Mentoring" className="cursor-pointer">
                Mentoring
              </SelectItem>
              <SelectItem value="Coaching" className="cursor-pointer">
                Coaching
              </SelectItem>
            </SelectContent>
          </Select>
          {errors.interest && <p className="text-red-500 text-sm">{errors.interest}</p>}
        </div>

        <div className="space-y-2 w-full">
          <Label htmlFor="message">Your message</Label>
          <Textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Type your message here..."
            className="w-full border-none focus-visible:ring-1 focus-visible:ring-offset-1 rounded-sm shadow-none bg-gray-100"
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>

        <motion.div variants={fadeInUp} custom={3} initial="hidden" animate="visible">
          <Button size="lg" type="submit" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Just Send <span className="ml-1">&rarr;</span>
              </>
            )}
          </Button>
        </motion.div>
      </motion.form>
    </main>
  );
};

export default Contact;
