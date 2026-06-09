import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const skillGroups = [
  {
    heading: "Programming",
    skills: ["Python", "Java", "SQL", "HTML", "CSS"],
  },
  {
    heading: "Frameworks",
    skills: ["Flask", "Streamlit", "Bootstrap"],
  },
  {
    heading: "AI/ML",
    skills: ["TensorFlow", "Scikit-learn", "OpenCV", "CNN", "LSTM"],
  },
  {
    heading: "Tools",
    skills: ["Git", "VS Code", "IntelliJ"],
  },
  {
    heading: "Core Concepts",
    skills: ["DSA", "OOPS", "DBMS", "SDLC"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, delay: i * 0.07, ease: "easeOut" },
  }),
};

export default function Blog() {
  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <h1 className="text-3xl font-bold text-foreground">Technical Skills</h1>
        </motion.div>

        <div className="space-y-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.heading}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              data-testid={`section-skills-${group.heading.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                {group.heading}
              </h2>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="text-sm px-3 py-1 border-border text-foreground"
                    data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
              {i < skillGroups.length - 1 && <Separator className="mt-8" />}
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
