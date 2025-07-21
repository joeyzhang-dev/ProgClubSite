// PROGgsu Club Historical Timeline
// Key milestones and achievements in club history
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
      title: "Club Founded During COVID-19",
      description: "Jenny Liu founded PROGgsu during the global pandemic, creating GSU's premier programming community from the ground up.",
      type: "founding"
    },
    {
      date: "Fall 2020",
      title: "First Structured Events",
      description: "Launched inaugural programming events including CS Jeopardy, technical interview prep, and resume workshops with 25+ regular attendees.",
      type: "event"
    },
    {
      date: "October 2020",
      title: "Club Registration Initiated",
      description: "Began official university recognition process with charter development and PIN registration.",
      type: "milestone"
    }
  ],

  earlyDevelopment: [
    {
      date: "Spring 2021",
      title: "Charter Completed & PIN Registration",
      description: "Achieved official university recognition as a registered student organization with approved charter and officer structure.",
      type: "milestone"
    },
    {
      date: "April 2021",
      title: "First Official Officer Elections",
      description: "Conducted inaugural democratic elections establishing the executive committee structure still used today.",
      type: "milestone"
    },
    {
      date: "January 2021",
      title: "DSA Interview Prep Series Launched",
      description: "Introduced weekly Saturday sessions covering data structures and algorithms, becoming one of our most popular programs.",
      type: "program"
    },
    {
      date: "January 2021",
      title: "Mock Interview Program Established",
      description: "Started bi-weekly technical mock interviews with industry professionals, helping dozens of students land internships.",
      type: "program"
    },
    {
      date: "Spring 2021",
      title: "Competitive Programming Introduced",
      description: "Launched competitive programming competitions and training, including inter-collegiate contests with NJIT and other schools.",
      type: "program"
    },
    {
      date: "Fall 2021",
      title: "HackJam Workshop Series",
      description: "Introduced hands-on coding workshops covering web development, React.js, and practical programming skills.",
      type: "program"
    }
  ],

  growth: [
    {
      date: "Fall 2021",
      title: "Second Executive Board Transition",
      description: "Successful leadership transition with expanded executive team including new academic advisors and specialized roles.",
      type: "milestone"
    },
    {
      date: "Spring 2022",
      title: "Mentorship Program Expansion",
      description: "Formalized peer mentoring with upperclassmen supporting underclassmen in coursework and career development.",
      type: "program"
    },
    {
      date: "2022",
      title: "Prahbir Virk Leadership Era Begins",
      description: "Prahbir Virk takes over as 3rd President, beginning a 3-year leadership tenure focused on membership expansion and activity strengthening.",
      type: "milestone"
    },
    {
      date: "2022-2023",
      title: "Partnership & Growth Expansion", 
      description: "Continued collaboration with PantherHackers, established consistent weekly programming, and maintained strong competitive programming participation.",
      type: "achievement"
    }
  ],

  currentEra: [
    {
      date: "2022-2025",
      title: "Prahbir Virk Presidential Era",
      description: "Three-year leadership period under Prahbir Virk, maintaining club stability and growth while building on Beethoven's foundational work.",
      type: "milestone"
    },
    {
      date: "2025-Present",
      title: "Joey Zhang Leadership & Innovation",
      description: "Current president Joey Zhang takes over in 2025, leading PROGgsu into the future with continued innovation and community building.",
      type: "milestone"
    },
    {
      date: "2020-Present",
      title: "Sustainable Community Legacy",
      description: "5+ years of continuous operation demonstrating resilience through leadership transitions, with proven programs helping hundreds of students.",
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