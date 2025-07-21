// Member data structure and types for easy editing by future club members
// 
// HOW TO ADD NEW MEMBERS:
// 1. Add member object to the appropriate year section
// 2. Include: name, role, description (optional), github (optional), linkedin (optional), specialties (optional)
// 3. Real social links only - others will show as "coming soon"
//
// HOW TO ADD NEW ACADEMIC YEARS:
// 1. Add new key like "2027-2029" to membersByYear object
// 2. Add members array with member objects
// 3. They will automatically appear on the site

export interface Member {
  name: string;
  role: string;
  description?: string;
  github?: string;
  linkedin?: string;
  specialties?: string[];
}

export interface MembersByYear {
  [year: string]: Member[];
}

export const membersByYear: MembersByYear = {
  "2025-2027": [
    {
      name: "Joey Zhang",
      role: "5th President",
      description: "Current 5th President leading PROGgsu into the future! Passionate about building community and helping fellow programmers grow. Math + CS @ GSU, building InfiniteMonke.",
      github: "joeyzhang-dev",
      linkedin: "joeyzhangdev",
      specialties: ["Leadership", "Community Building", "Full Stack", "TypeScript", "React"]
    },
    // Add current officers here as they join
  ],
  
  "2022-2025": [
    {
      name: "Prahbir Virk",
      role: "3rd President",
      description: "3rd President who led PROGgsu from 2022-2025. During 2023-2024, served as co-president alongside Ethan Munji, demonstrating collaborative leadership and ensuring smooth club operations.",
      specialties: ["Leadership", "Project Management", "Software Development", "Community Growth"]
    }
  ],
  
  "2023-2024": [
    {
      name: "Ethan Munji",
      role: "4th President",
      description: "4th President who served as co-president with Prahbir Virk during 2023-2024. This collaborative leadership model ensured continued club growth and member engagement during a transitional period.",
      specialties: ["Leadership", "Software Engineering", "Team Building", "Collaborative Management"]
    }
  ],
  
  "2021-2023": [
    {
      name: "Beethoven",
      role: "2nd President",
      description: "2nd President (2021-2023) who transformed PROGgsu from HackJams and DSA reviews to hackathons and mock interviews. Expanded to 400+ Discord members, achieved official RSO status, and secured SAFC funding. Originally a founding member and Director of Events.",
      github: "beesmalley",
      specialties: ["Leadership", "Community Growth", "Event Innovation", "Strategic Partnerships"]
    },
    {
      name: "John Martin",
      role: "Former Academic Advisor",
      description: "Facebook Engineer In Residence (EIR) who served as Academic Advisor from 2021-2022. Worked closely with Beethoven and the second executive board to expand club programming and industry partnerships.",
      specialties: ["Industry Mentorship", "Academic Guidance", "Facebook/Meta Partnerships"]
    },
    {
      name: "Batya Zamansky",
      role: "Former Academic Advisor",
      description: "Facebook Engineer In Residence (EIR) who served as Academic Advisor from 2022-2023. Continued the tradition of industry guidance before pursuing her career as Senior Software Engineer at Meta.",
      specialties: ["Industry Mentorship", "Software Engineering", "Career Guidance"]
    },
    {
      name: "Cierra",
      role: "Former VP",
      description: "2nd Vice President who collaborated closely with Beethoven to run hackathons and expand club programming. Key partner in achieving RSO status and building industry partnerships with Meta, Google, and Microsoft.",
      specialties: ["Event Planning", "Partnership Development", "Hackathon Organization"]
    },
    {
      name: "Sara Edwards",
      role: "Director of Events",
      description: "Director of Events during the second executive board era. Part of the 2nd Exec Committee that helped expand PROGgsu's programming and achieve official RSO status.",
      specialties: ["Event Planning", "Workshop Organization", "Community Engagement"]
    },
    {
      name: "Humi",
      role: "Former Exec"
    },
    {
      name: "Owen",
      role: "Former Exec"
    },
    {
      name: "Adrian",
      role: "Former Exec"
    },
    {
      name: "JenniferA",
      role: "Former Exec"
    },
    {
      name: "Nyima",
      role: "Director of Events",
      description: "Director of Events during the second executive board period. Contributed to the expansion of club programming and helped achieve the 400+ member milestone.",
      specialties: ["Event Coordination", "Community Building", "Program Development"]
    },
    {
      name: "Srikumar",
      role: "Former Exec"
    }
  ],
  
  "2020-2021": [
    {
      name: "Jenny Liu",
      role: "Founding President", 
      description: "Our fearless founder! Started PROGgsu from an idea in March 2020 during the COVID-19 pandemic and built it into the thriving community it is today. True visionary and leader.",
      github: "ShantingLiu",
      linkedin: "jsliu",
      specialties: ["Club Founding", "Visionary Leadership", "Community Building"]
    },
    {
      name: "Andrew Huang",
      role: "Founding Academic Advisor",
      description: "Facebook Engineer In Residence (EIR) and founding academic advisor who provided crucial guidance and industry expertise during PROGgsu's creation in 2020.",
      github: "andrewhuang",
      linkedin: "shidihuang",
      specialties: ["Industry Mentorship", "Academic Guidance", "Software Engineering"]
    },
    {
      name: "Shardul",
      role: "Founding VP",
      description: "Founding member and Vice President who worked closely with Jenny to establish PROGgsu from its very beginning in March 2020. Now Developer Experience Solutions Architect @ Amazon Web Services.",
      github: "5herlocked",
      linkedin: "shardul-vaidya",
      specialties: ["Event Planning", "Logistics", "Team Coordination", "Cloud Architecture"]
    },
    {
      name: "Ikenna",
      role: "Secretary/Librarian",
      description: "Founding member and Secretary/Librarian who helped establish club documentation and organizational systems from day one.",
      specialties: ["Documentation", "Organization", "Communication"]
    },
    {
      name: "Adithya",
      role: "Director of Events",
      description: "Founding member and Director of Events who co-organized the very first PROGgsu events and helped establish event programming traditions.",
      specialties: ["Event Planning", "Workshop Organization", "Community Engagement"]
    },
    {
      name: "Beethoven",
      role: "Director of Events", 
      description: "Founding member and Director of Events (originally 'Bee') who partnered with Adithya to create engaging programming events from the club's inception.",
      github: "beesmalley",
      specialties: ["Event Coordination", "Workshop Development", "Leadership Development"]
    },
    {
      name: "Gyan",
      role: "Director of Technology",
      description: "Founding member and Director of Technology (formerly called Tech Chair) who managed technical infrastructure from PROGgsu's founding.",
      specialties: ["Technical Infrastructure", "Web Development", "System Administration"]
    },
    {
      name: "Anish Ganga",
      role: "Director of Technology",
      description: "Founding member and Director of Technology who partnered with Gyan to establish the club's technology foundations from the beginning.",
      specialties: ["Technical Infrastructure", "Software Development", "System Design"]
    },
    {
      name: "Shain Dholakiya",
      role: "Former Exec",
      description: "Former executive member who served from the founding period through 2023, contributing to PROGgsu's growth and development.",
      specialties: ["Executive Leadership", "Strategic Planning", "Community Growth"]
    },
    {
      name: "Japnit",
      role: "Former Exec",
      description: "Former executive member who served from the founding era through 2023, helping to build PROGgsu's foundations.",
      specialties: ["Executive Leadership", "Community Building", "Program Development"]
    },
    {
      name: "Rebecca",
      role: "Former Exec"
    },
    {
      name: "Tawfiq",
      role: "Former Exec"
    },
    {
      name: "Elisha",
      role: "Former Exec"
    },
    {
      name: "Austin",
      role: "Former Exec"
    },
    {
      name: "Dagm",
      role: "Server Owner",
      description: "Server owner who managed PROGgsu's Discord and online infrastructure, keeping the community connected.",
      specialties: ["Server Administration", "Community Management", "Discord Moderation"]
    }
  ]
}; 