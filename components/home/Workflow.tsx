"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { workflowSteps } from "@/lib/home-data";
import { Reveal } from "./Reveal";

export function Workflow() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 55,
    damping: 26,
    mass: 0.4,
    restDelta: 0.0005,
  });

  return (
    <section id="workflow" className="workflow-pin-section" ref={ref}>
      <div className="workflow-pin-sticky">
        <Reveal variant="fade-up">
          <div className="section-heading centered">
            <p className="eyebrow">How it works</p>
            <h2>Scroll through the journey.</h2>
            <p className="section-lead">
              One step at a time—keep scrolling to move from create, to listen, to
              review.
            </p>
          </div>
        </Reveal>

        <div className="workflow-stage">
          {workflowSteps.map((step, index) => (
            <WorkflowCard
              key={step.title}
              step={step}
              index={index}
              progress={smoothProgress}
              total={workflowSteps.length}
            />
          ))}
        </div>

        <WorkflowDots progress={smoothProgress} total={workflowSteps.length} />
      </div>
    </section>
  );
}

function WorkflowCard({
  step,
  index,
  progress,
  total,
}: {
  step: { title: string; description: string; image: string };
  index: number;
  progress: ReturnType<typeof useSpring>;
  total: number;
}) {
  const segment = 1 / total;
  const enter = index * segment;
  const fadeInEnd = enter + segment * 0.18;
  const fadeOutStart = enter + segment * 0.82;
  const exit = Math.min(1, enter + segment);

  // First card starts fully visible; last card stays until the end.
  const opacityInput =
    index === 0
      ? [0, fadeOutStart, exit]
      : index === total - 1
        ? [enter, fadeInEnd, 1]
        : [enter, fadeInEnd, fadeOutStart, exit];

  const opacityOutput =
    index === 0
      ? [1, 1, 0]
      : index === total - 1
        ? [0, 1, 1]
        : [0, 1, 1, 0];

  const yInput = opacityInput;
  const yOutput =
    index === 0
      ? [0, 0, -30]
      : index === total - 1
        ? [30, 0, 0]
        : [30, 0, 0, -30];

  const opacity = useTransform(progress, opacityInput, opacityOutput);
  const y = useTransform(progress, yInput, yOutput);
  const scale = useTransform(
    progress,
    opacityInput,
    index === 0
      ? [1, 1, 0.97]
      : index === total - 1
        ? [0.97, 1, 1]
        : [0.97, 1, 1, 0.97],
  );

  return (
    <motion.article
      className="workflow-solo-card"
      style={{
        opacity,
        y,
        scale,
        zIndex: total - index,
      }}
    >
      <div className="workflow-stack-copy">
        <span className="timeline-num">{String(index + 1).padStart(2, "0")}</span>
        <h3>{step.title}</h3>
        <p>{step.description}</p>
      </div>
      <div className="workflow-stack-media">
        <Image
          src={step.image}
          alt=""
          fill
          sizes="240px"
          className="workflow-stack-image"
        />
      </div>
    </motion.article>
  );
}

function WorkflowDots({
  progress,
  total,
}: {
  progress: ReturnType<typeof useSpring>;
  total: number;
}) {
  const active = useTransform(progress, (value) =>
    Math.min(total - 1, Math.floor(value * total)),
  );

  return (
    <div className="workflow-dots" aria-hidden="true">
      {Array.from({ length: total }, (_, index) => (
        <WorkflowDot key={index} index={index} active={active} />
      ))}
    </div>
  );
}

function WorkflowDot({
  index,
  active,
}: {
  index: number;
  active: ReturnType<typeof useTransform<number, number>>;
}) {
  const background = useTransform(active, (value) =>
    value === index ? "#4338CA" : "#E2E8F0",
  );
  const width = useTransform(active, (value) => (value === index ? 28 : 8));

  return <motion.span className="workflow-dot" style={{ background, width }} />;
}
