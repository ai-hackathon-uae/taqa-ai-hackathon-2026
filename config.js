/* ==========================================================================
   EDIT THIS FILE ONLY. The QR code on the badge never changes.
   Change anything below, redeploy, and everyone sees the update.
   ========================================================================== */
const CONFIG = {

  /* Attendance database (Supabase). Leave both empty to run in test mode:
     the page works, but check-ins are not saved. */
  supabaseUrl: "https://fnolangvwpdbtxspemub.supabase.co",   // example: https://abcdxyz.supabase.co
  supabaseKey: "sb_publishable_jVOIXjZDJH6Of4QtTw3yww_vBWFy9IC",   // the Publishable key (sb_publishable_...) or the legacy anon key

  /* Feedback survey. Paste the link when it is ready. Until then the box shows "coming soon". */
  surveyLink: "https://form.menti.com/s/alb7xpr2aj23",
     openDays: ["Day 1", "Day 2","Day 3"],

  /* Helpful details */
  prayerRoom: ["Turn left from the meeting room lobby", "Walk down the corridor to the end", "Turn right"],
  wifi: { network: "Rotana Hotels", password: "" },   // leave empty until you have them

  footnote: "Timings may shift to accommodate changes in the agenda.",

  /* Days. type: "break" greys a row out. Times are 24 hour (13:30 = 1:30 PM).
     showTables: false hides the table card for that day. */
  days: [
    {
      date: "2026-10-26", label: "Day 1", title: "Kick-off and Prompt-a-thon",
      objective: "Get productive with Copilot and Cowork",
      venue: "Beach Rotana, Saadiyat Island, Abu Dhabi",
      sessions: [
        {"title": "Registration & Check-in", "start": "08:30", "end": "09:30", "owner": "TAQA Innovation", "type": "checkin"},
        {"title": "Welcome", "start": "09:30", "end": "09:40", "detail": "Opening the hackathon", "owner": "TAQA Innovation (Qais Al Suwaidi)"},
        {"title": "Group Icebreaker", "start": "09:40", "end": "09:50", "detail": "Live poll across the room", "owner": "TAQA Innovation"},
        {"title": "Agenda for the Week", "start": "09:50", "end": "10:00", "detail": "What happens across the five days", "owner": "TAQA Innovation"},
        {"title": "Sandbox & Tools Introduction", "start": "10:00", "end": "10:15", "detail": "Access, environments and what is set up", "owner": "TAQA Digital & IT"},
        {"title": "Team Activity: Logo Design", "start": "10:15", "end": "10:45", "detail": "Team name and logo; sandbox troubleshooting in parallel", "owner": "TAQA Innovation"},
        {"title": "Coffee Break", "start": "10:45", "end": "11:00", "type": "break"},
        {"title": "Introduction to AI at Work", "start": "11:00", "end": "11:15", "owner": "Microsoft (Thulani Bandara)"},
        {"title": "M365 Copilot Masterclass", "start": "11:15", "end": "12:00", "detail": "Prompting techniques, best practices, live examples", "owner": "Microsoft (Thulani Bandara)"},
        {"title": "Lunch Break", "start": "12:00", "end": "13:00", "type": "break"},
        {"title": "Prompt-a-thon Challenge Briefing", "start": "13:00", "end": "13:15", "detail": "Format, deliverables and criteria; about 6 teams grouped by function", "owner": "Microsoft (Thulani Bandara)"},
        {"title": "Scenario Ideation & Team Setup", "start": "13:15", "end": "13:45", "detail": "Teams pick a challenge and design an approach", "owner": "Microsoft (Thulani Bandara)"},
        {"title": "Prompt-a-thon: Build & Iterate", "start": "13:45", "end": "14:30", "detail": "Hands-on prompting with Microsoft coaching", "owner": "Microsoft (Thulani Bandara)"},
        {"title": "Break", "start": "14:30", "end": "14:45", "detail": "Refreshments and final preparation", "type": "break"},
        {"title": "Pitch Perfect", "start": "14:45", "end": "15:00", "detail": "Teams prepare a 5-minute business-value demo", "owner": "Microsoft (Thulani Bandara)"},
        {"title": "Team Presentations", "start": "15:00", "end": "15:45", "detail": "Scenario, prompts, outputs and business impact", "owner": "Microsoft (Thulani Bandara)"},
        {"title": "Wrap-up", "start": "15:45", "end": "16:00", "detail": "Vote on the criteria and recognise the winning team", "owner": "Microsoft (Thulani Bandara)"},
        {"title": "Day 1 Wrap & Feedback", "start": "16:00", "end": "16:30", "owner": "TAQA Innovation"},
      ]
    },
    {
      date: "2026-10-27", label: "Day 2", title: "Copilot Studio",
      objective: "See what Copilot Studio and Power Platform can build",
      venue: "Beach Rotana, Saadiyat Island, Abu Dhabi",
      sessions: [
        {"title": "Registration & Check-in", "start": "09:30", "end": "10:00", "owner": "TAQA Innovation", "type": "checkin"},
        {"title": "Welcome & Business Scenario", "start": "10:00", "end": "10:15", "detail": "Hack day objectives and the visitor journey: registration, host approval, arrival and check-out", "owner": "Microsoft (Ahmed Moussa)"},
        {"title": "Power Platform Overview", "start": "10:15", "end": "10:40", "detail": "Power Apps, Power Automate and Copilot Studio, and how they work together", "owner": "Microsoft (Ahmed Moussa)"},
        {"title": "From Idea to Solution with Plan Designer", "start": "10:40", "end": "11:20", "detail": "Turn a business description into a solution plan: user roles, process steps, data model, components", "owner": "Microsoft (Ahmed Moussa)"},
        {"title": "Three Ways to Build the App", "start": "11:20", "end": "12:00", "detail": "A canvas app for registration, a model-driven app for administration and a code app; when to choose each", "owner": "Microsoft (Ahmed Moussa)"},
        {"title": "Lunch Break", "start": "12:00", "end": "13:00", "type": "break"},
        {"title": "Three Ways to Build the App (continued)", "start": "13:00", "end": "13:20", "owner": "Microsoft (Ahmed Moussa)"},
        {"title": "Automate the Visitor Journey", "start": "13:20", "end": "14:10", "detail": "Triggers, actions, connectors, conditions and approvals; build a host approval workflow", "owner": "Microsoft (Ahmed Moussa)"},
        {"title": "Coffee Break", "start": "14:10", "end": "14:25", "type": "break"},
        {"title": "Build a Visitor Management Agent", "start": "14:25", "end": "15:25", "detail": "Agent concepts, knowledge, instructions and tools; build and test the agent", "owner": "Microsoft (Ahmed Moussa)"},
        {"title": "Wrap-up & Q&A", "start": "15:25", "end": "15:50", "detail": "End-to-end recap, key takeaways and learning resources", "owner": "Microsoft (Ahmed Moussa)"},
        {"title": "Day 2 Wrap & Feedback", "start": "15:50", "end": "16:15", "owner": "TAQA Innovation"},
      ]
    },
    {
      date: "2026-10-28", label: "Day 3", title: "GitHub Copilot and Open Office Hours",
      objective: "Move from code suggestions to agents",
      venue: "Beach Rotana, Saadiyat Island, Abu Dhabi",
      note: "Lab support: Microsoft engineers and the 42 Abu Dhabi students join the labs to support the teams.",
      sessions: [
        {"title": "Registration & Check-in", "start": "09:30", "end": "10:00", "owner": "TAQA Innovation", "type": "checkin"},
        {"title": "Welcome & Context", "start": "10:00", "end": "10:10", "detail": "Session goals, from code suggestions to agents, quick poll", "owner": "Microsoft (Hatim Nagarwala)"},
        {"title": "The GitHub Platform", "start": "10:10", "end": "10:25", "detail": "Repos, issues, PRs, Actions, security; where Copilot fits", "owner": "Microsoft (Hatim Nagarwala)"},
        {"title": "Copilot App: The Basics", "start": "10:25", "end": "10:55", "detail": "App tour, My Work, sessions from issues, modes, models", "owner": "Microsoft (Hatim Nagarwala)"},
        {"title": "Parallel Sessions & PRs", "start": "10:55", "end": "11:20", "detail": "Canvases, raising a PR, review comments, Agent Merge", "owner": "Microsoft (Hatim Nagarwala)"},
        {"title": "Customizing Copilot", "start": "11:20", "end": "11:50", "detail": "Instructions, skills, custom agents, MCP servers, plugins", "owner": "Microsoft (Hatim Nagarwala)"},
        {"title": "Session Wrap-up & Q&A", "start": "11:50", "end": "12:00", "detail": "Workflow recap, admin settings, getting started", "owner": "Microsoft (Hatim Nagarwala)"},
        {"title": "Lunch Break", "start": "12:00", "end": "13:00", "detail": "Sign-in check for github, vs code and the copilot app", "type": "break"},
        {"title": "Lab 1: Build a Space Quiz", "start": "13:00", "end": "14:10", "detail": "Build and publish a quiz page; /init project instructions", "owner": "Microsoft + 42 Abu Dhabi AI Engineering Fellows"},
        {"title": "Coffee Break", "start": "14:10", "end": "14:25", "type": "break"},
        {"title": "Lab 2: Issue to Merged PR", "start": "14:25", "end": "15:10", "detail": "Issues, Plan mode, raise a PR, fix reviews, merge", "owner": "Microsoft + 42 Abu Dhabi AI Engineering Fellows"},
        {"title": "Lab 3: Make Copilot Yours", "start": "15:10", "end": "15:45", "detail": "Add a skill, a reviewer agent and an MCP server"},
        {"title": "Workshop Wrap-up & Q&A", "start": "15:45", "end": "16:00", "detail": "Recap, which tool to use when, how to keep learning"},
        {"title": "Office Hours", "start": "16:00", "end": "16:30", "detail": "Microsoft trainers and our experts guide teams through the tools", "owner": "Microsoft + TAQA IT"},
        {"title": "Day 3 Wrap & Feedback", "start": "16:30", "end": "17:00", "owner": "TAQA Innovation"},
      ]
    },
       {
      date: "2026-10-29", label: "Day 4", title: "Build Day 1: From Mock-up to Prototype",
      objective: "Mock up the solution, then start the prototype",
      venue: "Beach Rotana, Saadiyat Island, Abu Dhabi",
      note: "Team photos and video: Teams go to the Majlis when Manasi calls them, for a team photo and a short team video (who you are, what you are building, what inspired it). It carries on after lunch.",
      sessions: [
        {"title": "Registration & Check-in", "start": "09:00", "end": "09:30", "owner": "TAQA Innovation", "type": "checkin"},
        {"title": "Welcome & Knowledge Check", "start": "09:30", "end": "09:45", "detail": "Welcome to our guests, quick quiz on Day 3", "owner": "TAQA Innovation"},
        {"title": "The Art of the Possible", "start": "09:45", "end": "10:15", "detail": "What utilities around the world are doing with AI, and the use cases they are exploring", "owner": "Microsoft (Bilal Khursheed)"},
        {"title": "Working Block", "start": "10:15", "end": "11:00", "detail": "Table sessions with Bilal (5 to 10 min per team), finish the solution pack and email it to Manasi, build a clickable mock-up, team photos and video at the Majlis", "owner": "Microsoft (Bilal Khursheed) + TAQA Innovation + 42 Abu Dhabi AI Engineering Fellows"},
        {"title": "Coffee Break", "start": "11:00", "end": "11:15", "type": "break"},
        {"title": "Working Block (continued)", "start": "11:15", "end": "12:00", "owner": "Microsoft (Bilal Khursheed) + TAQA Innovation + 42 Abu Dhabi AI Engineering Fellows"},
        {"title": "Lunch Break", "start": "12:00", "end": "13:00", "type": "break"},
        {"title": "Mock-up to Prototype", "start": "13:00", "end": "15:30", "detail": "Finish the mock-up, then start building the prototype in the sandbox from the blocks marked BUILD", "owner": "Participants + 42 Abu Dhabi AI Engineering Fellows"},
        {"title": "Share-outs", "start": "15:30", "end": "16:00", "detail": "A few teams show their mock-up and progress so far", "owner": "TAQA Innovation"},
        {"title": "Close-out & Next Steps", "start": "16:00", "end": "16:15", "owner": "TAQA Innovation"},
      ]
    },
    {
      date: "2026-11-05", label: "Day 5", title: "Build Day 2: Reimagine with AI",
      objective: "Shape the idea with design thinking",
      venue: "Microsoft Innovation Hub, Dubai Internet City",
      note: "Two batches: the idea team splits into two batches. Attendees are grouped by business function, not by hackathon team, and work on digital boards.",
      showTables: false,
      batchLabels: ["Batch 1: 9:00 AM to 12:30 PM", "Batch 2: 1:30 PM to 5:00 PM"],
      sessions: [
        {"title": "Welcome & Introductions", "batches": [["09:00", "09:10"], ["13:30", "13:40"]], "detail": "Set the tone for the day and outline objectives", "owner": "Microsoft (Renju Kuriakose)"},
        {"title": "The Anatomy of an AI Agent", "batches": [["09:10", "09:50"], ["13:40", "14:20"]], "detail": "Key components, how agents interact with data, environments and users, orchestration and decisioning", "owner": "Microsoft (Renju Kuriakose)"},
        {"title": "Break", "batches": [["09:50", "10:20"], ["14:20", "14:50"]], "type": "break"},
        {"title": "Detailing Business Challenges for Agentification", "batches": [["10:20", "11:20"], ["14:50", "15:50"]], "detail": "Detail the high-friction processes in scope, agree the gaps and find the process breaking points", "owner": "Microsoft (Renju Kuriakose)"},
        {"title": "Ideation: Designing Agents to Solve Business Challenges", "batches": [["11:20", "12:20"], ["15:50", "16:50"]], "detail": "Translate pain points into agent concepts; define agent characteristics and behaviours and design the Frontier Workflow", "owner": "Microsoft (Renju Kuriakose)"},
        {"title": "Close & Next Steps", "batches": [["12:20", "12:30"], ["16:50", "17:00"]], "detail": "Recap key insights and solution directions", "owner": "Microsoft (Renju Kuriakose)"},
      ]
    },
  ],

  /* Participants. t = table for Day 1, 2, 3, 4. Copy of the Seating sheet in the Excel. */
  people: [
    { n: "Abdulla Alhebsi", t: [7, 7, 7, 7] },
    { n: "Abdulla Hassan Al Blooshi", t: [7, 7, 7, 7] },
    { n: "AbdulRahim Alamoodi", t: [3, 3, 3, 3] },
    { n: "Akshay Nagalia", t: [8, 8, 8, 8] },
    { n: "Ali Alseiari", t: [3, 3, 3, 3] },
    { n: "Ali Husain Ali Al Obeidli", t: [7, 7, 7, 7] },
    { n: "Alimpan De", t: [8, 8, 8, 8] },
    { n: "Amit Gunjariya", t: [2, 2, 2, 2] },
    { n: "Arabinda Mohanty", t: [2, 2, 2, 2] },
    { n: "Asim Abdelmutlab", t: [6, 6, 6, 6] },
    { n: "Awad Baobaid", t: [4, 4, 4, 4] },
    { n: "Azza Alshamsi", t: [4, 4, 4, 4] },
    { n: "Ellis Read", t: [5, 5, 5, 5] },
    { n: "Emilia Anne Salhotra", t: [1, 1, 1, 1] },
    { n: "Faris Alblooshi", t: [4, 4, 4, 4] },
    { n: "Fouad Akbar", t: [8, 8, 8, 8] },
    { n: "Giri Sanath Harish Bheemarasetti", t: [2, 2, 2, 2] },
    { n: "Gowriprabu Natarajan", t: [3, 3, 3, 3] },
    { n: "Hamdan Saif Alkaabi", t: [4, 4, 4, 4] },
    { n: "Hariprasath Selvakumar", t: [6, 6, 6, 6] },
    { n: "Hasan Al Marzooqi", t: [6, 6, 6, 6] },
    { n: "Himani Channa", t: [8, 8, 8, 8] },
    { n: "Ibrahim Yousif Ahmed", t: [1, 1, 1, 1] },
    { n: "Jibin Chacko", t: [9, 9, 9, 9] },
    { n: "Johan Weewer", t: [9, 9, 9, 9] },
    { n: "Jonathan Churchward", t: [10, 10, 10, 10] },
    { n: "Khaled Abdulla Alkaabi", t: [6, 6, 6, 6] },
    { n: "Khalid Adil Ali Mohamed", t: [7, 7, 7, 7] },
    { n: "Linson Lenose", t: [1, 1, 1, 1] },
    { n: "Mahesh Prakashchandra Murkya", t: [4, 4, 4, 4] },
    { n: "Mahmoud Alhader", t: [9, 9, 9, 9] },
    { n: "Mandar Kulkarni", t: [9, 9, 9, 9] },
    { n: "Marcin Lesniewski", t: [10, 10, 10, 10] },
    { n: "May Nassay", t: [5, 5, 5, 5] },
    { n: "Mohamed Ahmed", t: [6, 6, 6, 6] },
    { n: "Mohammad Lami", t: [9, 9, 9, 9] },
    { n: "Mohammed Alshamsi", t: [4, 4, 4, 4] },
    { n: "Mohammed Ameen Sezan", t: [9, 9, 9, 9] },
    { n: "Moutaz Bakri Abdalla", t: [1, 1, 1, 1] },
    { n: "Nabeel Pazhaya Thoppilakam", t: [3, 3, 3, 3] },
    { n: "Nassar Rahim", t: [4, 4, 4, 4] },
    { n: "Nitheesh Kodoor", t: [7, 7, 7, 7] },
    { n: "Noora Al Breiki", t: [3, 3, 3, 3] },
    { n: "Omar Al Jallad", t: [6, 6, 6, 6] },
    { n: "Omar Chakfa", t: [10, 10, 10, 10] },
    { n: "Periasamy Mariappan", t: [2, 2, 2, 2] },
    { n: "Peter Kuipers", t: [9, 9, 9, 9] },
    { n: "Polleke Peeters", t: [10, 10, 10, 10] },
    { n: "Reem Maher Abo El Naga", t: [5, 5, 5, 5] },
    { n: "Reve Eleazar", t: [8, 8, 8, 8] },
    { n: "Rijo Abraham", t: [1, 1, 1, 1] },
    { n: "Rino Oommen Thomas", t: [5, 5, 5, 5] },
    { n: "Saif Saeed Rashed Al Zaabi", t: [5, 5, 5, 5] },
    { n: "Salahudeen Mohamed Kasim", t: [3, 3, 3, 3] },
    { n: "Samer Rashid Mansour", t: [7, 7, 7, 7] },
    { n: "Sharlene Van der Most-Alsahil", t: [10, 10, 10, 10] },
    { n: "Srirama Bhagavan Sangisetti", t: [5, 5, 5, 5] },
    { n: "Steven Kane", t: [8, 8, 8, 8] },
    { n: "Subhasis Jhampati", t: [3, 3, 3, 3] },
    { n: "Sultan Ali Al Jabri", t: [7, 7, 7, 7] },
    { n: "Sultan Almazrouei", t: [2, 2, 2, 2] },
    { n: "Syed Ashraf", t: [1, 1, 1, 1] },
    { n: "Taqi Hasan", t: [1, 1, 1, 1] },
    { n: "Vibhushit Kumar", t: [5, 5, 5, 5] },
    { n: "Vineet Sharma", t: [2, 2, 2, 2] },
    { n: "Vinoth Kumar Subramani", t: [6, 6, 6, 6] },
    { n: "Wybe Bruinsma", t: [10, 10, 10, 10] },
    { n: "Yasir Mohamed Abdel Hai Mohamed", t: [10, 10, 10, 10] }
  ]
};
