import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, Phone, Trophy } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-4 mb-10">
    <h2 className="text-3xl font-bold font-display tracking-tight text-foreground">{children}</h2>
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: "4rem" }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="h-[2px] bg-primary rounded-full"
    />
  </div>
);

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Home() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  function onSubmit(_values: z.infer<typeof contactSchema>) {
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <div className="bg-background text-foreground pb-20">

      {/* 1. Hero */}
      <section id="hero" className="relative min-h-[100dvh] flex items-center pt-20">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 w-full relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="flex flex-col gap-6"
          >
            <motion.p
              variants={fadeUpVariant}
              className="text-secondary font-medium tracking-widest uppercase text-sm"
            >
              MCA Student · AI/ML Developer · Full Stack Web Developer
            </motion.p>

            <motion.h1
              variants={fadeUpVariant}
              className="mirror-text text-5xl md:text-7xl font-bold font-display tracking-tighter text-foreground leading-[1.1]"
            >
              Bhoomika T Raj
            </motion.h1>

            <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-4 mt-2">
              <a href="mailto:bhoomikatraj564@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm" data-testid="hero-email">
                <Mail className="w-4 h-4" /> bhoomikatraj564@gmail.com
              </a>
              <span className="hidden sm:inline text-border">|</span>
              <a href="tel:+919632711005" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm" data-testid="hero-phone">
                <Phone className="w-4 h-4" /> +91 9632711005
              </a>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="flex gap-4 mt-4">
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6">
                <a href="#contact" data-testid="hero-btn-contact">Contact Me</a>
              </Button>
              <Button asChild variant="outline" className="border-border hover:border-primary hover:text-primary transition-colors">
                <a href="/Bhoomika_Resume.pdf" download="Bhoomika_T_Raj_Resume.pdf" data-testid="hero-btn-resume">
                  <Download className="w-4 h-4 mr-2" /> Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Professional Summary */}
      <section id="summary" className="py-24 max-w-4xl mx-auto px-6 border-t border-border relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}>
          <SectionHeading>Professional Summary</SectionHeading>
          <p className="text-lg text-muted-foreground leading-relaxed">
            MCA student (<span className="text-secondary font-medium">CGPA: 7.0</span>) with experience in Python, AI/ML, and web application development. Worked on projects related to deepfake detection, digital content quality analysis, and stack operation management using technologies such as Flask, TensorFlow, OpenCV, CNN, and LSTM. Completed an AI/ML internship with hands-on exposure to machine learning models, data preprocessing, and model evaluation.
          </p>
        </motion.div>
      </section>

      {/* 3. Education */}
      <section id="education" className="py-24 max-w-4xl mx-auto px-6 border-t border-border relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}>
          <SectionHeading>Education</SectionHeading>

          <div className="relative pl-6 border-l-2 border-border ml-2">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute top-0 left-[-2px] w-[2px] bg-primary origin-top"
            />

            <div className="mb-10 relative">
              <div className="absolute w-3 h-3 bg-background border-2 border-primary rounded-full -left-[31px] top-2" />
              <h3 className="text-xl font-bold font-display">Master of Computer Applications (MCA)</h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-muted-foreground mt-1 mb-3 text-sm">
                <span>RNS Institute of Technology</span>
                <span className="hidden sm:inline">•</span>
                <span>2025–2027</span>
              </div>
              <Badge variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20 transition-colors">CGPA: 7.0</Badge>
            </div>

            <div className="relative">
              <div className="absolute w-3 h-3 bg-background border-2 border-primary rounded-full -left-[31px] top-2" />
              <h3 className="text-xl font-bold font-display">Bachelor of Computer Applications (BCA)</h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-muted-foreground mt-1 mb-3 text-sm">
                <span>KLE Society's Degree College</span>
                <span className="hidden sm:inline">•</span>
                <span>2022–2025</span>
              </div>
              <Badge variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20 transition-colors">CGPA: 7.5</Badge>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. Technical Skills */}
      <section id="skills" className="py-24 max-w-4xl mx-auto px-6 border-t border-border relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}>
          <SectionHeading>Technical Skills</SectionHeading>

          <div className="grid gap-4">
            {[
              { category: "Programming", skills: ["Python", "Java", "SQL", "HTML", "CSS"] },
              { category: "Frameworks", skills: ["Flask", "Streamlit", "Bootstrap"] },
              { category: "AI / ML", skills: ["TensorFlow", "Scikit-learn", "OpenCV", "CNN", "LSTM"] },
              { category: "Tools", skills: ["Git", "VS Code", "IntelliJ"] },
              { category: "Core Concepts", skills: ["DSA", "OOPS", "DBMS", "SDLC"] },
            ].map((group) => (
              <div key={group.category} className="card-shimmer card-gloss flex flex-col md:flex-row md:items-start gap-4 p-5 rounded-xl bg-card border border-border">
                <div className="md:w-48 shrink-0 pt-1">
                  <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{group.category}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * sIdx, duration: 0.3 }}
                    >
                      <Badge className="bg-background border-border hover:border-primary text-foreground font-normal py-1.5 px-3 transition-colors text-sm">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 5. Projects */}
      <section id="projects" className="py-24 max-w-4xl mx-auto px-6 border-t border-border relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}>
          <SectionHeading>Projects</SectionHeading>

          <div className="grid gap-6">
            {[
              {
                title: "Advanced Deepfake Detection using CNN + LSTM",
                tech: "Python · CNN · LSTM · OpenCV · Flask",
                points: [
                  "Developed a CNN + LSTM-based deepfake detection system achieving accurate manipulated media classification.",
                  "Implemented CNN and LSTM algorithms for media analysis and classification.",
                  "Designed a GUI interface to display prediction results effectively."
                ]
              },
              {
                title: "Stack Operation Manager",
                tech: "Java · HTML · CSS · JavaScript",
                points: [
                  "Developed an application to perform stack operations such as push, pop, and peek.",
                  "Implemented stack data structure concepts using Java.",
                  "Improved understanding of stack operations through an interactive system."
                ]
              },
              {
                title: "Digital Education Content Quality System",
                tech: "Python · Machine Learning · Flask",
                points: [
                  "Developed a system to evaluate and manage the quality of digital educational content.",
                  "Implemented automated analysis techniques for content assessment.",
                  "Designed a user-friendly interface for efficient content monitoring and reporting."
                ]
              }
            ].map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-shimmer card-gloss group relative p-8 rounded-xl bg-card border border-border hover:border-primary transition-colors duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <h3 className="text-xl font-bold font-display text-foreground mb-2 group-hover:text-primary transition-colors relative z-10">{project.title}</h3>
                <p className="text-sm font-medium text-secondary mb-5 relative z-10">{project.tech}</p>
                <ul className="space-y-3 relative z-10">
                  {project.points.map((pt, idx) => (
                    <li key={idx} className="text-muted-foreground text-sm flex gap-3 leading-relaxed">
                      <span className="text-primary mt-0.5 opacity-70 shrink-0">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 6. Internship */}
      <section id="internship" className="py-24 max-w-4xl mx-auto px-6 border-t border-border relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}>
          <SectionHeading>Internship</SectionHeading>

          <div className="relative pl-6 border-l-2 border-border ml-2">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute top-0 left-[-2px] w-[2px] bg-primary origin-top"
            />
            <div className="relative">
              <div className="absolute w-3 h-3 bg-background border-2 border-primary rounded-full -left-[31px] top-2" />
              <h3 className="text-xl font-bold font-display">AADVI GROUPS OF COMPANIES</h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-secondary font-medium mt-2 mb-5 text-sm">
                <span>AI/ML Intern</span>
                <span className="hidden sm:inline text-muted-foreground/50">•</span>
                <span className="text-muted-foreground">Duration: 2 Months</span>
              </div>
              <ul className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                <li className="flex gap-3"><span className="text-primary mt-0.5 opacity-70 shrink-0">•</span><span>Worked with Python libraries including NumPy, Pandas, Matplotlib, Scikit-learn, TensorFlow, and OpenCV.</span></li>
                <li className="flex gap-3"><span className="text-primary mt-0.5 opacity-70 shrink-0">•</span><span>Implemented supervised and unsupervised machine learning algorithms such as Decision Trees, Random Forest, and K-Means Clustering.</span></li>
                <li className="flex gap-3"><span className="text-primary mt-0.5 opacity-70 shrink-0">•</span><span>Developed a mini-project using Random Forest Regressor to predict vehicle speed and braking distance based on weather condition.</span></li>
                <li className="flex gap-3"><span className="text-primary mt-0.5 opacity-70 shrink-0">•</span><span>Applied data preprocessing, hyperparameter tuning, and model evaluation techniques such as RMSE.</span></li>
                <li className="flex gap-3"><span className="text-primary mt-0.5 opacity-70 shrink-0">•</span><span>Strengthened practical skills in building, training, and deploying machine learning models.</span></li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 7. Achievements */}
      <section id="achievements" className="py-24 max-w-4xl mx-auto px-6 border-t border-border relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}>
          <SectionHeading>Achievements</SectionHeading>
          <div className="card-shimmer card-gloss p-6 rounded-xl bg-card border border-border flex items-start gap-5 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
              <Trophy className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-secondary mb-1">Ideathon — Ignitron 2025</p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Participated in <strong className="text-foreground font-medium">Ideathon of Ignitron 2025</strong> conducted by GM University Davanagere, and presenting ideas related to cybersecurity and phishing detection.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 8. Personal Interests */}
      <section id="interests" className="py-24 max-w-4xl mx-auto px-6 border-t border-border relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}>
          <SectionHeading>Personal Interests</SectionHeading>
          <div className="flex flex-wrap gap-4">
            <Badge variant="outline" className="text-sm py-2 px-5 border-border hover:border-primary bg-card transition-colors">
              Artificial Intelligence & Machine Learning
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-5 border-border hover:border-primary bg-card transition-colors">
              Full Stack Web Development
            </Badge>
          </div>
        </motion.div>
      </section>

      {/* 9. Contact */}
      <section id="contact" className="py-24 max-w-4xl mx-auto px-6 border-t border-border relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}>
          <SectionHeading>Get In Touch</SectionHeading>

          <div className="grid md:grid-cols-2 gap-12 mt-8">
            <div>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              <div className="space-y-6">
                <a href="mailto:bhoomikatraj564@gmail.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group" data-testid="contact-email">
                  <div className="w-12 h-12 rounded-full bg-card border border-border group-hover:border-primary flex items-center justify-center transition-colors">
                    <Mail className="w-5 h-5 group-hover:text-primary transition-colors" />
                  </div>
                  <span className="font-medium">bhoomikatraj564@gmail.com</span>
                </a>
                <a href="tel:+919632711005" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group" data-testid="contact-phone">
                  <div className="w-12 h-12 rounded-full bg-card border border-border group-hover:border-primary flex items-center justify-center transition-colors">
                    <Phone className="w-5 h-5 group-hover:text-primary transition-colors" />
                  </div>
                  <span className="font-medium">+91 9632711005</span>
                </a>
              </div>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} className="bg-background border-border focus-visible:ring-primary h-11" data-testid="input-contact-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email" {...field} className="bg-background border-border focus-visible:ring-primary h-11" data-testid="input-contact-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Your message"
                            className="min-h-[140px] bg-background border-border focus-visible:ring-primary resize-none"
                            {...field}
                            data-testid="input-contact-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-11 font-medium text-base mt-2" data-testid="btn-contact-submit">
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
