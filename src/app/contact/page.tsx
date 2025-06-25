"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

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
  return (
    <main className="max-w-6xl flex flex-col justify-center min-h-[80dvh] w-full mx-auto py-14 px-8">
      <motion.h2 variants={fadeInUp} initial="hidden" animate="visible" className="text-5xl font-light text-black mb-8 font-serif">
        Love to hear from You, <br /> Get in touch 👋🏿
      </motion.h2>

      <motion.p variants={fadeInUp} custom={1} initial="hidden" animate="visible" className="max-w-[60ch] text-gray-600">
        Whether you have an idea, project, or just want to say hi ✨, my inbox is always open. Let's create impactful solutions together.
      </motion.p>

      <motion.form variants={fadeInUp} custom={2} initial="hidden" animate="visible" className="max-w-3xl mt-8 space-y-5">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="space-y-2 w-full">
            <Label htmlFor="name">Your name</Label>
            <Input id="name" className="border-none rounded-sm shadow-none focus-visible:ring-1 focus-visible:ring-offset-1 bg-gray-100 text-base font-medium text-gray-800 h-10" placeholder="Name" />
          </div>
          <div className="space-y-2 w-full">
            <Label htmlFor="email">Your email</Label>
            <Input
              id="email"
              className="border-none rounded-sm shadow-none focus-visible:ring-1 focus-visible:ring-offset-1 bg-gray-100 text-base font-medium text-gray-800 h-10"
              placeholder="Email address"
            />
          </div>
        </div>

        <div className="space-y-2 w-full">
          <Label htmlFor="interest">What you are interested in</Label>
          <Select>
            <SelectTrigger id="interest" className="w-full border-none focus-visible:ring-1 focus-visible:ring-offset-1 rounded-sm shadow-none bg-gray-100 !h-10">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent className="bg-gray-100">
              <SelectItem value="fullstack" className="cursor-pointer">
                FullStack
              </SelectItem>
              <SelectItem value="ai/ml" className="cursor-pointer">
                Artificial Intelligence / Machine Learning
              </SelectItem>
              <SelectItem value="mentoring" className="cursor-pointer">
                Mentoring
              </SelectItem>
              <SelectItem value="coaching" className="cursor-pointer">
                Coaching
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 w-full">
          <Label htmlFor="message">Your message</Label>
          <Textarea id="message" placeholder="Type your message here..." className="w-full border-none focus-visible:ring-1 focus-visible:ring-offset-1 rounded-sm shadow-none bg-gray-100" />
        </div>

        <motion.div variants={fadeInUp} custom={3} initial="hidden" animate="visible">
          <Button size="lg">
            Just Send <span className="ml-1">&rarr;</span>
          </Button>
        </motion.div>
      </motion.form>
    </main>
  );
};

export default Contact;
