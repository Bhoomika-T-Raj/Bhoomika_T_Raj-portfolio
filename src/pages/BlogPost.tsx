import { PageTransition } from "@/components/PageTransition";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, Code } from "lucide-react";

export default function BlogPost() {
  return (
    <PageTransition>
      <div className="container mx-auto px-6 md:px-12 py-32 min-h-[80vh] flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md"
        >
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 text-primary shadow-[0_0_20px_hsl(var(--primary)/0.2)]">
            <Code className="w-10 h-10" />
          </div>
          <h1 className="text-4xl font-serif font-bold mb-4 text-foreground">Skill Details Coming Soon</h1>
          <p className="text-muted-foreground mb-10 text-lg">
            Detailed case studies and in-depth writeups about my technical methodologies are currently being drafted.
          </p>
          <Button asChild variant="outline" className="border-border hover:bg-primary/10 hover:text-primary transition-colors">
            <Link href="/blog" className="flex items-center gap-2">
              <ArrowLeft size={16} /> Back to Skills
            </Link>
          </Button>
        </motion.div>
      </div>
    </PageTransition>
  );
}
