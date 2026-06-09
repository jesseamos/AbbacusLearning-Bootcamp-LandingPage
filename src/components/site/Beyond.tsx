import VideoPlayerComponent from "../ui/video_player";
import { Reveal } from "./Reveal";
import { Bot, Brain, Workflow, Database, Globe2 } from "lucide-react";

const items = [
  { icon: Bot, label: "AI Apps" },
  { icon: Brain, label: "Machine Learning" },
  { icon: Workflow, label: "Automation" },
  { icon: Database, label: "Data" },
  { icon: Globe2, label: "Remote Work" },
];

export function Beyond() {
  return (
    <section className="relative py-28 bg-white">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <Reveal delay={0.05}>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1]">
            AI is more than generating{" "}
            <span className="">images and videos.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
            Behind every AI tool are people building intelligent systems, training models,
            and shaping the future of technology.
          </p>
        </Reveal>


        <VideoPlayerComponent />
      </div>
    </section>
  );
}
