// PROGgsu Club Historical Timeline
// Key milestones and achievements in club history
//
// ⚠️  IMPORTANT: This data is used by src/pages/history.astro for the timeline
// ✏️  TO UPDATE TIMELINE: Edit the events below, they will automatically appear on /history
//
// HOW TO ADD NEW TIMELINE EVENTS:
// 1. Add new TimelineEvent object to the appropriate section
// 2. Include: date, title, description, type (founding/event/milestone/program)
// 3. Keep descriptions concise - focus on impact and significance

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  type: 'founding' | 'milestone' | 'program' | 'event' | 'achievement';
}

export interface ClubHistory {
  founding: TimelineEvent[];
  earlyDevelopment: TimelineEvent[];
  growth: TimelineEvent[];
  currentEra: TimelineEvent[];
}

export const clubTimeline: ClubHistory = {
  founding: [
    {
      date: "March 2020",
      title: "Plot Twist: Pandemic Sparks Programming Paradise",
      description: "Jenny Liu founded PROGgsu during the global pandemic, creating GSU's premier programming community from the ground up.",
      type: "founding"
    },
    {
      date: "Fall 2020",
      title: "The Great Launch: CS Jeopardy and Friends",
      description: "Launched inaugural programming events including CS Jeopardy, technical interview prep, and resume workshops with 25+ regular attendees.",
      type: "event"
    },
    {
      date: "October 2020",
      title: "Paperwork Adventures Begin",
      description: "Began official university recognition process with charter development and PIN registration.",
      type: "milestone"
    }
  ],

  earlyDevelopment: [
    {
      date: "Spring 2021",
      title: "Victory Lap: Official Recognition Achieved",
      description: "Achieved official university recognition as a registered student organization with approved charter and officer structure.",
      type: "milestone"
    },
    {
      date: "Fall 2021",
      title: "The Weekly Grind: Programming Challenges Era",
      description: "Established consistent weekly programming activities including data structures practice and algorithm challenges.",
      type: "program"
    },
    {
      date: "Spring 2022",
      title: "Community Building: The Discord Dynasty",
      description: "Expanded community engagement through Discord server and regular programming discussions, building strong member connections.",
      type: "event"
    }
  ],

  growth: [
    {
      date: "Fall 2022",
      title: "The Holy Trinity: DSA, Mocks & Competitive Chaos",
      description: "Launched the three core programs that would define PROGgsu: Data Structures & Algorithms prep, mock interviews, and competitive programming.",
      type: "program"
    },
    {
      date: "Spring 2023",
      title: "Level Up: SAFC Recognition & Funding",
      description: "Secured Student Activity Fee Committee funding and full university partnership status, gaining access to resources and official support.",
      type: "achievement"
    },
    {
      date: "2022-2023",
      title: "The 400+ Club: Discord Community Explosion",
      description: "Discord community exploded to over 400 active members, establishing PROGgsu as the go-to programming community at GSU.",
      type: "milestone"
    }
  ],

  currentEra: [
    {
      date: "2021-2023",
      title: "Beethoven's Revolution: From HackJams to Interview Mastery",
      description: "Beethoven (2nd President) transformed PROGgsu from basic HackJams to comprehensive technical interview preparation, revolutionizing the club's impact.",
      type: "milestone"
    },
    {
      date: "Fall 2023",
      title: "The Great Skateboard Plot Twist: Ethan's Brief but Memorable Reign",
      description: "Ethan Munji's 3rd Presidential tenure proved that sometimes life has other plans - showcasing that even presidents need to watch out for rogue skateboards and cars.",
      type: "milestone"
    },
    {
      date: "Fall 2023-2025", 
      title: "Prahbir Steps Up: 4th President's Emergency Leadership",
      description: "Prahbir Virk stepped in as 4th President during Fall 2023 when circumstances required a leadership transition, demonstrating dedication and ensuring club continuity through to 2025.",
      type: "milestone"
    },
    {
      date: "2025-Present",
      title: "Joey's Era: The Fifth Element of Leadership",
      description: "Joey Zhang becomes the 5th President, leading PROGgsu into the future with continued innovation and community building.",
      type: "milestone"
    },
    {
      date: "2020-Present",
      title: "The Five-President Legacy: Resilience Through Challenges",
      description: "5+ years demonstrating successful leadership transitions and resilient community building through various challenges: Jenny → Beethoven → Ethan → Prahbir → Joey.",
      type: "achievement"
    }
  ]
};

// Summary statistics for display
export const clubStats = {
  founded: "March 2020",
  yearsActive: "5+",
  programsLaunched: [
    "DSA Interview Prep",
    "Mock Technical Interviews", 
    "Competitive Programming",
    "HackJam Workshops",
    "Peer Mentorship",
    "Industry Guest Speakers"
  ],
  keyAchievements: [
    "Official GSU recognition and charter",
    "100+ students helped with interview prep",
    "Regular competitive programming participation",
    "Industry partnerships and guest speakers",
    "Sustainable multi-year leadership structure"
  ]
}; 