export type StoryDetail = {
  icon: "folder" | "mic" | "shield" | "languages" | "notes" | "tasks" | "chat" | "calendar";
  title: string;
  body: string;
};

export type StoryPhase = {
  title: string;
  lead: string;
  items: StoryDetail[];
};

export type StoryRole = {
  title: string;
  body: string;
  href?: string;
};

export type UseCaseStory = {
  id: string;
  path: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  headlineBefore: string;
  headlineAccent: string;
  lead: string;
  image: string;
  alt: string;
  phases: StoryPhase[];
  rolesTitle: string;
  roles: StoryRole[];
};

const listenLead =
  "You tap Start Listening to record through your device. Listening is opt-in, and KukuNotes never joins the call as a bot. The Android app does not record phone or dialer calls.";

const during: StoryDetail[] = [
  {
    icon: "mic",
    title: "Start listening",
    body: "Recording begins only when you tap Start Listening on your own device.",
  },
  {
    icon: "shield",
    title: "No bot in the call",
    body: "KukuNotes never joins Zoom, Google Meet, or Teams.",
  },
  {
    icon: "languages",
    title: "Many languages",
    body: "The same languages are included on Free, Pro, and Business.",
  },
];

export const useCaseStories: UseCaseStory[] = [
  {
    id: "education",
    path: "/use-cases/education",
    metaTitle: "Lecture notes for students and educators",
    description:
      "Lectures, study sessions, and mentoring become organized notes and study tasks. Recording is opt-in and no meeting bot joins the call.",
    eyebrow: "Education",
    headlineBefore: "Lectures become",
    headlineAccent: "notes and study tasks.",
    lead: `Lectures, study sessions, and mentoring become organized notes and study tasks. ${listenLead}`,
    image: "/use-cases/education.jpg",
    alt: "AI lecture notes and study tasks dashboard for students and educators",
    phases: [
      {
        title: "Before class",
        lead: "Start with the class, mentoring thread, or group project you want to remember.",
        items: [
          { icon: "folder", title: "A space for the class", body: "Keep this lecture series separate from other work." },
          { icon: "notes", title: "What you already have", body: "Earlier notes stay in that space for the next session." },
          { icon: "calendar", title: "A deliberate start", body: "Listening stays off until you tap Start Listening." },
        ],
      },
      {
        title: "During class",
        lead: "Stay in the room. KukuNotes records only when you ask.",
        items: during,
      },
      {
        title: "After class",
        lead: "Leave with notes, study tasks, and a place to ask what was said.",
        items: [
          { icon: "notes", title: "Key ideas", body: "The session becomes notes you can search later." },
          { icon: "tasks", title: "Study tasks", body: "Follow-ups stay inside the same space." },
          { icon: "chat", title: "Ask KukuNotes", body: "Ask what was covered before the next class." },
        ],
      },
    ],
    rolesTitle: "Useful for the way you study and teach.",
    roles: [
      { title: "Classes", body: "Lectures and seminars become notes you can revisit." },
      { title: "Mentoring", body: "Advice and next steps stay with that conversation." },
      { title: "Group projects", body: "Decisions and tasks stay in one shared space." },
    ],
  },
  {
    id: "teams",
    path: "/use-cases/teams",
    metaTitle: "Meeting notes for founders and teams",
    description:
      "Turn planning calls into decisions, owners, priorities, and next actions. Recording is opt-in and no meeting bot joins the call.",
    eyebrow: "Meetings",
    headlineBefore: "Planning calls become",
    headlineAccent: "decisions and next actions.",
    lead: `Turn planning calls into decisions, owners, priorities, and next actions. ${listenLead}`,
    image: "/use-cases/meetings.jpg",
    alt: "Startup meeting takeaways, sprint action items, and roadmap interface",
    phases: [
      {
        title: "Before the meeting",
        lead: "Open the space for this product, client, or team thread.",
        items: [
          { icon: "folder", title: "One space per thread", body: "Reviews, syncs, and prep stay out of each other's notes." },
          { icon: "notes", title: "The last decision", body: "Earlier notes remain tied to that project." },
          { icon: "calendar", title: "Listen on purpose", body: "Nothing records until you tap Start Listening." },
        ],
      },
      {
        title: "During the meeting",
        lead: "Record on the device already in the room.",
        items: during,
      },
      {
        title: "After the meeting",
        lead: "Leave with owners, priorities, and the next action.",
        items: [
          { icon: "notes", title: "What was decided", body: "The useful parts of the call become notes." },
          { icon: "tasks", title: "Next actions", body: "Commitments become tasks in that space." },
          { icon: "chat", title: "Ask what changed", body: "Ask KukuNotes before the next sync." },
        ],
      },
    ],
    rolesTitle: "For the meetings a team already has.",
    roles: [
      { title: "Product reviews", body: "Decisions stay with the project, not in a chat thread." },
      { title: "Daily syncs", body: "Owners and priorities are easier to find afterward." },
      { title: "Investor prep", body: "The last conversation is still in the space." },
    ],
  },
  {
    id: "sales",
    path: "/use-cases/sales",
    metaTitle: "Notes for sales and client calls",
    description:
      "Keep client context, objections, requests, and promised next steps in one place. Recording is opt-in and no meeting bot joins the call.",
    eyebrow: "Client work",
    headlineBefore: "Client calls keep",
    headlineAccent: "the next step.",
    lead: `Keep client context, objections, requests, and promised next steps in one place. ${listenLead}`,
    image: "/use-cases/sales.jpg",
    alt: "Client meeting notes with commitments and follow-up",
    phases: [
      {
        title: "Before the call",
        lead: "Open the space for this client so the last conversation is still there.",
        items: [
          { icon: "folder", title: "A space per client", body: "Discovery, demos, and check-ins stay together." },
          { icon: "notes", title: "What they already said", body: "Earlier notes remain with that account." },
          { icon: "calendar", title: "You start the recording", body: "Listening begins only when you tap Start Listening." },
        ],
      },
      {
        title: "During the call",
        lead: "Stay in the conversation. KukuNotes does not join the meeting.",
        items: during,
      },
      {
        title: "After the call",
        lead: "Leave with the request, the objection, and the promised follow-up.",
        items: [
          { icon: "notes", title: "The call, in notes", body: "Requests and objections stay searchable." },
          { icon: "tasks", title: "The promised step", body: "Commitments become tasks in that client space." },
          { icon: "chat", title: "Before you write back", body: "Ask KukuNotes what happened on the last call." },
        ],
      },
    ],
    rolesTitle: "For the conversations around a client.",
    roles: [
      { title: "Discovery calls", body: "Needs and constraints stay with that account." },
      { title: "Demos", body: "What they asked for is still there after the call." },
      { title: "Check-ins", body: "The last promise is in the space before you meet again." },
    ],
  },
  {
    id: "personal",
    path: "/use-cases/personal",
    metaTitle: "Personal plans, appointments, and reminders",
    description:
      "Use KukuNotes for family plans, appointments, ideas, goals, and day-to-day reminders. Recording is opt-in and no meeting bot joins the call.",
    eyebrow: "Personal",
    headlineBefore: "Life admin stays",
    headlineAccent: "in one place.",
    lead: `Use KukuNotes for family plans, appointments, ideas, goals, and day-to-day reminders. ${listenLead}`,
    image: "/use-cases/personal.jpg",
    alt: "Personal life admin dashboard with daily briefing and life spaces",
    phases: [
      {
        title: "Before you talk",
        lead: "Give the appointment, trip, or home project its own space.",
        items: [
          { icon: "folder", title: "A space per life area", body: "Family, health, and home projects do not share one pile." },
          { icon: "calendar", title: "The day in context", body: "Notes and tasks can sit with the plan for that area." },
          { icon: "shield", title: "Only when you ask", body: "The microphone stays off until you tap Start Listening." },
        ],
      },
      {
        title: "While you talk",
        lead: "Capture the visit or the planning conversation on your device.",
        items: during,
      },
      {
        title: "Afterward",
        lead: "The detail does not have to live only in your head.",
        items: [
          { icon: "notes", title: "What was said", body: "Appointments and ideas become notes in that space." },
          { icon: "tasks", title: "Reminders", body: "The next step becomes a task you can finish." },
          { icon: "chat", title: "A daily briefing", body: "Open tasks and the day ahead stay available to review." },
        ],
      },
    ],
    rolesTitle: "For the plans that are easy to forget.",
    roles: [
      { title: "Appointments", body: "What the visit covered stays in that space." },
      { title: "Home projects", body: "Decisions and the next chore stay together." },
      { title: "Goals", body: "Personal goals stay separate from work threads." },
    ],
  },
  {
    id: "creators",
    path: "/use-cases/creators",
    metaTitle: "Notes for interviews and creative work",
    description:
      "Interviews and brainstorms become themes, quotes to revisit, and production tasks. Recording is opt-in and no meeting bot joins the call.",
    eyebrow: "Creators",
    headlineBefore: "Interviews become",
    headlineAccent: "the next piece.",
    lead: `Interviews and brainstorms become themes, quotes to revisit, and production tasks. ${listenLead}`,
    image: "/use-cases/creators.jpg",
    alt: "Creator notes with interview themes and production tasks",
    phases: [
      {
        title: "Before the session",
        lead: "Open the space for this interview, episode, or draft.",
        items: [
          { icon: "folder", title: "A space for the piece", body: "Research, interviews, and drafts stay together." },
          { icon: "notes", title: "What you already captured", body: "Earlier conversations remain with that project." },
          { icon: "mic", title: "Record when it starts", body: "Listening begins only when you tap Start Listening." },
        ],
      },
      {
        title: "During the session",
        lead: "Keep the conversation. KukuNotes stays on your device.",
        items: during,
      },
      {
        title: "After the session",
        lead: "Themes, quotes, and production tasks stay connected.",
        items: [
          { icon: "notes", title: "Themes and quotes", body: "The raw conversation stays attached to the notes." },
          { icon: "tasks", title: "Production tasks", body: "What to cut, write, or publish becomes a task." },
          { icon: "chat", title: "Follow-up questions", body: "Ask KukuNotes what is still missing." },
        ],
      },
    ],
    rolesTitle: "For work that starts as a conversation.",
    roles: [
      { title: "Interviews", body: "The conversation stays searchable after you stop recording." },
      { title: "Brainstorms", body: "Ideas do not stay trapped in a voice memo." },
      { title: "Research", body: "Source notes stay in the space for that piece." },
    ],
  },
];

export const useCaseIndex: UseCaseStory = {
  id: "all",
  path: "/use-cases",
  metaTitle: "Use Cases for Students, Teams, and Sales",
  description:
    "KukuNotes turns lectures, meetings, sales calls, and daily conversations into notes and tasks. Recording is opt-in and no meeting bot joins the call.",
  eyebrow: "Use cases",
  headlineBefore: "Something useful for",
  headlineAccent: "every conversation.",
  lead: `Pick a Space, tap Start Listening, and leave with notes and tasks. ${listenLead}`,
  image: "/use-cases/meetings.jpg",
  alt: "KukuNotes meeting notes and tasks",
  phases: [
    {
      title: "Before you listen",
      lead: "Choose the project, class, client, or life area this conversation belongs to.",
      items: [
        { icon: "folder", title: "Choose a space", body: "Each thread keeps its own notes and tasks." },
        { icon: "notes", title: "Bring the context", body: "Earlier notes for that space are still there." },
        { icon: "shield", title: "Opt in", body: "Listening starts only when you tap Start Listening." },
      ],
    },
    {
      title: "While people talk",
      lead: "Record on the device already with you.",
      items: during,
    },
    {
      title: "After the conversation",
      lead: "Keep the useful parts, then move the next step.",
      items: [
        { icon: "notes", title: "Notes you can search", body: "The conversation becomes notes in that space." },
        { icon: "tasks", title: "Tasks you can finish", body: "Commitments become tasks with the same context." },
        { icon: "chat", title: "Ask KukuNotes", body: "Ask what happened before you need it again." },
      ],
    },
  ],
  rolesTitle: "Whoever is talking, the notes still land.",
  roles: useCaseStories.map((story) => ({
    title: story.eyebrow,
    body: story.description.replace(" Recording is opt-in and no meeting bot joins the call.", ""),
    href: story.path,
  })),
};

export function getUseCaseStory(id: string) {
  return useCaseStories.find((story) => story.id === id);
}
