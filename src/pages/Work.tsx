import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const projects = [
  {
    id: 1,
    title: "Advanced Deepfake Detection using CNN + LSTM",
    tech: ["Python", "CNN", "LSTM", "OpenCV", "Flask"],
    bullets: [
      "Developed a CNN + LSTM-based deepfake detection system achieving accurate manipulated media classification.",
      "Implemented CNN and LSTM algorithms for media analysis and classification.",
      "Designed a GUI interface to display prediction results effectively.",
    ],
  },
  {
    id: 2,
    title: "Stack Operation Manager",
    tech: ["Java", "HTML", "CSS", "JavaScript"],
    bullets: [
      "Developed an application to perform stack operations such as push, pop, and peek.",
      "Implemented stack data structure concepts using Java.",
      "Improved understanding of stack operations through an interactive system.",
    ],
  },
  {
    id: 3,
    title: "Digital Education Content Quality System",
    tech: ["Python", "Machine Learning", "Flask"],
    bullets: [
      "Developed a system to evaluate and manage the quality of digital educational content.",
      "Implemented automated analysis techniques for content assessment.",
      "Designed a user-friendly interface for efficient content monitoring and reporting.",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease: "easeOut" },
  }),
};

export default function Work() {
  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <h1 className="text-3xl font-bold text-foreground mb-1">Projects</h1>
          <p className="text-muted-foreground text-sm">Technologies Used are listed with each project.</p>
        </motion.div>

        <div className="space-y-10">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="group"
              data-testid={`card-project-${project.id}`}
            >
              <h2 className="text-lg font-semibold text-foreground mb-1">{project.title}</h2>
              <p className="text-sm text-muted-foreground mb-3">
                <span className="font-medium">Technologies Used:</span>{" "}
                {project.tech.join(", ")}.
              </p>
              <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
                {project.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs" data-testid={`badge-tech-${t.toLowerCase().replace(/\s+/g, "-")}`}>
                    {t}
                  </Badge>
                ))}
              </div>
              {i < projects.length - 1 && <Separator className="mt-10" />}
            </motion.article>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
