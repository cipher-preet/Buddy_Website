"use client";

import Link from "next/link";
import { useState } from "react";
import type { StoryDetail, UseCaseStory } from "@/lib/use-case-stories";
import {
  HiOutlineCalendarDays,
  HiOutlineChatBubbleLeftRight,
  HiOutlineClipboardDocumentCheck,
  HiOutlineDocumentText,
  HiOutlineFolder,
  HiOutlineLanguage,
  HiOutlineMicrophone,
  HiOutlineShieldCheck,
} from "react-icons/hi2";
import type { IconType } from "react-icons";

const detailIcons: Record<StoryDetail["icon"], IconType> = {
  folder: HiOutlineFolder,
  mic: HiOutlineMicrophone,
  shield: HiOutlineShieldCheck,
  languages: HiOutlineLanguage,
  notes: HiOutlineDocumentText,
  tasks: HiOutlineClipboardDocumentCheck,
  chat: HiOutlineChatBubbleLeftRight,
  calendar: HiOutlineCalendarDays,
};

const frameCrops = [
  ["left 30%", "right 20%"],
  ["20% 75%", "82% 35%"],
  ["15% 55%", "80% 70%"],
];

function DetailList({ items }: { items: StoryDetail[] }) {
  const [open, setOpen] = useState(0);

  return (
    <ul className="uc-accordion">
      {items.map((item, index) => {
        const Icon = detailIcons[item.icon];
        const isOpen = open === index;
        return (
          <li key={item.title} className={isOpen ? "is-open" : undefined}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : index)}
            >
              <Icon aria-hidden="true" />
              <span>{item.title}</span>
            </button>
            <div className={`uc-acc-body${isOpen ? " is-open" : ""}`}>
              <p>{item.body}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export function UseCaseStory({ story }: { story: UseCaseStory }) {
  return (
    <article className="uc-story">
      <section className="uc-hero" aria-labelledby="uc-title">
        <div className="uc-orb" aria-hidden="true">
          <img src={story.image} alt="" />
        </div>
        <h1 id="uc-title">
          {story.headlineBefore} {story.headlineAccent}
        </h1>
        <p className="uc-lead">{story.lead}</p>
        <div className="uc-actions">
          <Link className="uc-btn uc-btn-fill" href="/get-kukunotes">
            Get KukuNotes free
          </Link>
          <Link className="uc-btn uc-btn-line" href="/pricing">
            Compare plans
          </Link>
        </div>
      </section>

      {story.phases.map((phase, index) => {
        const phaseId = phase.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        const crops = frameCrops[index] ?? frameCrops[0];
        return (
          <section
            className={`uc-split${index % 2 === 1 ? " is-flip" : ""}`}
            key={phase.title}
            aria-labelledby={phaseId}
          >
            <div className="uc-copy">
              <h2 id={phaseId}>{phase.title}</h2>
              <p className="uc-phase-lead">{phase.lead}</p>
              <p className="uc-details-label">Details</p>
              <DetailList items={phase.items} />
            </div>
            <div className="uc-visuals">
              <div className="uc-visual uc-visual-big">
                <img src={story.image} alt={story.alt} />
              </div>
              {crops.map((position) => (
                <div className="uc-visual uc-visual-small" key={position}>
                  <img src={story.image} alt="" style={{ objectPosition: position }} />
                </div>
              ))}
            </div>
          </section>
        );
      })}

      <section className="uc-roles" aria-labelledby="uc-roles-title">
        <h2 id="uc-roles-title">{story.rolesTitle}</h2>
        <ul>
          {story.roles.map((role) => {
            const body = (
              <>
                <span className="uc-role-mark" aria-hidden="true" />
                <span>
                  <strong>{role.title}</strong>
                  <span>{role.body}</span>
                </span>
              </>
            );
            return (
              <li key={role.title}>
                {role.href ? <Link href={role.href}>{body}</Link> : <div>{body}</div>}
              </li>
            );
          })}
        </ul>
      </section>
    </article>
  );
}
