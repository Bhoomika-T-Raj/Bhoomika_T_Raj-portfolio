import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-bold text-foreground mb-5 uppercase tracking-wide border-l-4 border-primary pl-3">
      {children}
    </h2>
  );
}

export default function About() {
  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-6 py-16 space-y-14">

        {/* Professional Summary */}
        <motion.section variants={fadeUp} initial="hidden" animate="show">
          <SectionHeading>Professional Summary</SectionHeading>
          <p className="text-muted-foreground leading-relaxed">
            MCA student (CGPA: 7.0) with experience in Python, AI/ML, and web application development.
            Worked on projects related to deepfake detection, digital content quality analysis, and stack
            operation management using technologies such as Flask, TensorFlow, OpenCV, CNN, and LSTM.
            Completed an AI/ML internship with hands-on exposure to machine learning models, data
            preprocessing, and model evaluation.
          </p>
        </motion.section>

        <Separator />

        {/* Education */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <SectionHeading>Education</SectionHeading>
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1" data-testid="education-mca">
              <div>
                <p className="font-semibold text-foreground">Master of Computer Applications (MCA)</p>
                <p className="text-muted-foreground text-sm">RNS Institute of Technology</p>
              </div>
              <div className="text-sm text-right sm:text-right shrink-0">
                <p className="text-muted-foreground">2025 – 2027</p>
                <p className="text-primary font-medium">CGPA: 7.0</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between gap-1" data-testid="education-bca">
              <div>
                <p className="font-semibold text-foreground">Bachelor of Computer Applications (BCA)</p>
                <p className="text-muted-foreground text-sm">KLE Society's Degree College</p>
              </div>
              <div className="text-sm text-right sm:text-right shrink-0">
                <p className="text-muted-foreground">2022 – 2025</p>
                <p className="text-primary font-medium">CGPA: 7.5</p>
              </div>
            </div>
          </div>
        </motion.section>

        <Separator />

        {/* Internship */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <SectionHeading>Internship</SectionHeading>
          <div data-testid="internship-aadvi">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1 mb-4">
              <div>
                <p className="font-semibold text-foreground">AADVI GROUPS OF COMPANIES</p>
                <p className="text-muted-foreground text-sm">AI/ML Intern</p>
              </div>
              <p className="text-sm text-muted-foreground shrink-0">Duration: 2 Months</p>
            </div>
            <ul className="space-y-2 text-muted-foreground text-sm list-disc list-inside">
              <li>Worked with Python libraries including NumPy, Pandas, Matplotlib, Scikit-learn, TensorFlow, and OpenCV.</li>
              <li>Implemented supervised and unsupervised machine learning algorithms such as Decision Trees, Random Forest, and K-Means Clustering.</li>
              <li>Developed a mini-project using Random Forest Regressor to predict vehicle speed and braking distance based on weather condition.</li>
              <li>Applied data preprocessing, hyperparameter tuning, and model evaluation techniques such as RMSE.</li>
              <li>Strengthened practical skills in building, training, and deploying machine learning models.</li>
            </ul>
          </div>
        </motion.section>

        <Separator />

        {/* Achievements */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <SectionHeading>Achievements</SectionHeading>
          <p className="text-muted-foreground text-sm leading-relaxed" data-testid="text-achievement">
            Participated in Ideathon of Ignitron 2025 conducted by GM University Davanagere, and
            presenting ideas related to cybersecurity and phishing detection.
          </p>
        </motion.section>

        <Separator />

        {/* Personal Interests */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <SectionHeading>Personal Interests</SectionHeading>
          <ul className="space-y-2 text-muted-foreground text-sm list-disc list-inside">
            <li data-testid="interest-aiml">Artificial Intelligence &amp; Machine Learning</li>
            <li data-testid="interest-fullstack">Full Stack Web Development</li>
          </ul>
        </motion.section>

      </div>
    </PageTransition>
  );
}
