import TeamGrid from './TeamGrid';

// "THE TEAM" (Figma 679:68; copy AW-04; layout: TeamGrid.jsx). Designer note:
// show everyone, full grid, no pagination: photo + name + bio + LinkedIn. No job titles.
// Photos: the client's headshots (2026-10-12), cropped to the circle and
// resized to 240px WebP in public/about/team/<full-name>.webp. LinkedIn
// profiles live in LINKEDIN below (by name); no profile = greyed icon.
// Order is the client’s (2026-10-08).

// LinkedIn profiles supplied by the client (2026-10-12, two batches), cleaned to the
// canonical https://www.linkedin.com/in/<id>/ form (tracking params removed).
const LINKEDIN = {
  'Siddharth Singh Tanwar': 'https://www.linkedin.com/in/siddharth-tanwar-430571243/',
  'Shivansh Shukla': 'https://www.linkedin.com/in/shivansh-shukla-b3302a1a5/',
  'Abhishek Rajput': 'https://www.linkedin.com/in/abhishek-rajput-a68172201/',
  'Mohit Chouhan': 'https://www.linkedin.com/in/mohit-chouhan-457020226/',
  'Praveen Malakar': 'https://www.linkedin.com/in/praveenmalakar/',
  'Jitendra Yadav': 'https://www.linkedin.com/in/jitendrayadav0208/',
  'Anup Sharma': 'https://www.linkedin.com/in/anup-sharma-b0a40441/',
  'Pradeep Kumawat': 'https://www.linkedin.com/in/pradeep-kumawat/',
  'Manas Malakar': 'https://www.linkedin.com/in/manas-malakar-18a05b286/',
  'Suraj Singh Tanwar': 'https://www.linkedin.com/in/suraj-singh-tanwar-995678198/',
  'Ujjwal Tyagi': 'https://www.linkedin.com/in/ujjwal-tyagi-4ba873259/',
  'Anil Anuragee': 'https://www.linkedin.com/in/anil-anuragee/',
  'Piyush Jaiswal': 'https://www.linkedin.com/in/piyush-jaiswal-b8097a18b/',
  'Varun Soni': 'https://www.linkedin.com/in/varun-soni-26a728228/',
  'Sourabh Shirke': 'https://www.linkedin.com/in/sourabh-shirke-6b598927b/',
  'Aayush Malviya': 'https://www.linkedin.com/in/aayush-malviya-9595861a1/',
  'Huzefa Rampurawala': 'https://www.linkedin.com/in/huzefa-rampurawala-700191ab/',
  'Rishabh Nath': 'https://www.linkedin.com/in/rishabh-nath-b803711a6/',
  'Sohail Khan': 'https://www.linkedin.com/in/sohail-professional/',
  'Akshay Dubey': 'https://www.linkedin.com/in/akshay-dubey-6b1b92134/',
  'Vishal Rathore': 'https://www.linkedin.com/in/vishalrathore13/',
  'Ravindra Yadav': 'https://www.linkedin.com/in/ravindra-yadav-fullstack-devloper-99b74c/',
  'Hemant Devde': 'https://www.linkedin.com/in/hemantdevde/',
  'Ubez Ali': 'https://www.linkedin.com/in/ubaiz-ali-khan-65ba44192/', // client, 2026-11-12
  'Vimal Jonwal': 'https://www.linkedin.com/in/vimal-meena-595a81235/', // client, 2026-11-12
};

// Card name -> photo file (files are named by full name).
const PHOTO = {
  'Anup Sharma': 'anup-kumar-sharma',
  'Huzefa Rampurawala': 'huzefa-rampurawala',
  'Praveen Malakar': 'praveen-malakar',
  'Pradeep Kumawat': 'pradeep-kumawat',
  'Piyush Jaiswal': 'piyush-jaiswal',
  'Suraj Singh Tanwar': 'suraj-singh-tanwar',
  'Sourabh Shirke': 'sourabh-shirke',
  'Siddharth Singh Tanwar': 'siddharth-singh-tanwar',
  'Manas Malakar': 'manas-malakar',
  'Ujjwal Tyagi': 'ujjwal-tyagi',
  'Aayush Malviya': 'aayush-malviya',
  'Vishal Rathore': 'vishal-rathore',
  'Ubez Ali': 'ubez-ali',
  'Anil Anuragee': 'anil-anuragee',
  'Ravindra Yadav': 'ravindra-yadav',
  'Mohit Chouhan': 'mohit-chouhan',
  'Shivansh Shukla': 'shivansh-shukla',
  'Varun Soni': 'varun-soni',
  'Hemant Devde': 'hemant-devde',
  'Jitendra Yadav': 'jitendra-yadav',
  'Abhishek Rajput': 'abhishek-rajput',
  'Akshay Dubey': 'akshay-dubey',
  'Rishabh Nath': 'rishabh-nath',
  'Sohail Khan': 'sohail-khan',
  'Vimal Jonwal': 'vimal-jonwal', // client, 2026-11-13 (name was Vimal Meena)
};

const TEAM = [
  { name: 'Anup Sharma', bio: 'AI-native engineer. Leads the team behind complex automotive and dealer platforms. Specialises in integrations, automation, and applying AI where the business logic is genuinely hard.' },
  { name: 'Huzefa Rampurawala', bio: 'AI-native design. Builds scalable design systems and uses AI to accelerate ideation and exploration. Turns complex problems into experiences that feel obvious in hindsight.' },
  { name: 'Praveen Malakar', bio: 'AI-native engineer. Leads frontend architecture and SEO on a live used car marketplace. Builds pixel-perfect responsive interfaces and structures sites so search engines and AI platforms both understand what the page is actually saying.' },
  { name: 'Pradeep Kumawat', bio: 'AI-native engineer. Built a lead-assignment engine managing agent capacity, 7-day ownership windows, and auto-expiry in real time. Focused on workflow automation and AI-assisted systems over basic CRUD work.' },
  { name: 'Piyush Jaiswal', bio: 'AI-native engineer. Enterprise Java and Unit4 integrations: deployments, data processing, and the production issues that are hardest to debug. Makes legacy systems run on modern infrastructure and keeps them there. Using AI tooling to speed up debugging and documentation.' },
  { name: 'Suraj Singh Tanwar', bio: 'AI-native engineer. Builds Flutter apps focused on media: image and video processing, background uploads, offline workflows, and mobile-to-backend sync when the connection drops. Applying these to AI-assisted media pipelines.' },
  { name: 'Sourabh Shirke', bio: 'AI-native QA. Finds bugs, traces them to root cause, and sees them through to resolution. Keeps production stable when things don’t go to plan. Uses AI to speed up triage and cut the time between a report and a fix.' },
  { name: 'Siddharth Singh Tanwar', bio: 'AI-native engineer. Leads the team behind a real-time transport operations platform, owning it end to end. First call when something needs to scale.' },
  { name: 'Manas Malakar', bio: 'AI-native engineer. Built a booking platform and the allocation engine that runs underneath it: the logic that decides which job goes to which technician, and when. Increasingly applying AI to the scheduling and allocation problems he knows best.' },
  { name: 'Ujjwal Tyagi', bio: 'AI-native engineer. Owns multiple modules inside a used car dealer management platform: Deal Builder, PX Ticket flow, permission management, and marketing integrations. Applying AI to the workflow logic he maintains.' },
  { name: 'Aayush Malviya', bio: 'AI engineer. Builds production voice and audio AI: streaming transcription, speaker diarization, GPU serving, and agents that answer questions over live business data. Knows what messy real-world input does to a model, and how to keep it accurate anyway.' },
  { name: 'Vishal Rathore', bio: 'AI-native engineer. Works across a car acquisition platform and a real-time transport system, from Node backends to React interfaces. Knows the business logic as well as the code, with AI in the toolkit.' },
  { name: 'Ubez Ali', bio: 'AI-native QA. Handles escalated support and in-app bug testing across complex technical issues. Specialises in tracing problems to their root and fixing the support infrastructure itself, so the same issue doesn’t surface twice. Uses AI to identify patterns across support tickets before they become recurring problems.' },
  { name: 'Anil Anuragee', bio: 'AI-native engineer. Builds CRM and SaaS platforms: complex workflows, real-time data, pixel-perfect UI. The person you want when a CRM flow breaks and nobody else can follow it. Integrating AI into the data-heavy systems he ships.' },
  { name: 'Ravindra Yadav', bio: 'AI-native engineer. Builds end-to-end business management platforms, from initial architecture through to production. Designs for scale from day one and uses AI to get there faster.' },
  { name: 'Mohit Chouhan', bio: 'AI-native engineer. Five years building Flutter apps across 15+ products on Android and iOS. The person who makes real-time feel real time: chat, live updates, in-app calling, notifications.' },
  { name: 'Shivansh Shukla', bio: 'AI-native QA. Builds the test frameworks that catch problems before clients do. Uses AI to write, debug, and scale tests faster than any manual process can.' },
  { name: 'Varun Soni', bio: 'AI-native engineer. Java and Spring Boot, with a product mindset. Thinks about what customers need next, not just what the spec says. Uses AI daily to move faster.' },
  { name: 'Hemant Devde', bio: 'AI-native engineer. Goes unusually deep in WebRTC and real-time peer-to-peer communication. Traces features across the full stack and knows where AI fits naturally into real-time systems.' },
  { name: 'Jitendra Yadav', bio: 'AI-native engineer. Builds end-to-end business management platforms: complex workflows, role-based access, reporting, secure auth. Integrating AI into the business logic he ships. Takes a requirement and comes back with something that runs in production.' },
  { name: 'Abhishek Rajput', bio: 'AI engineer. Built production voice intelligence: streaming audio, speaker diarization, voiceprints. The version that handles background noise and overlapping speakers, not just an API call to an LLM. Knows exactly where AI prototypes break.' },
  { name: 'Akshay Dubey', bio: 'AI-native engineer. Leads development on a live booking platform, covering React interfaces, Node backends, and the architectural calls in between. Keeps code quality high and uses AI to make that faster.' },
  { name: 'Rishabh Nath', bio: 'AI-native engineer. Builds scalable web apps, real-time systems, and interactive editors, front to back. Has a habit of making things faster and cheaper, and of finding where AI makes that easier.' },
  { name: 'Sohail Khan', bio: 'AI-native engineer. Builds internal platforms and web apps on the MERN stack. Specialises in backend API design and has a gift for making complex requirements look simple, AI integrations included.' },
  { name: 'Vimal Jonwal', bio: 'AI-native product design. Uses AI to accelerate research, UX writing, and ideation, and Figma with MCP to connect design systems directly to code. The handoff to dev is part of the design, not an afterthought.' },
].map((p) => ({ photo: PHOTO[p.name] ? `/about/team/${PHOTO[p.name]}.webp` : null, linkedin: LINKEDIN[p.name] ?? null, ...p }));

export default function Team() {
  return (
    <section className="ab-team" aria-labelledby="ab-team-title">
      <div className="hm-wrap ab-team-inner">
        <div className="ab-team-head hm-reveal">
          <p className="hm-overline hm-overline--caps">THE TEAM</p>
          {/* one line, the second sentence as the punchline (founders, 2026-10-19) */}
          <h2 id="ab-team-title" className="hm-h2 ab-team-title">This is the team. <span className="ab-team-accent">The actual people.</span></h2>
        </div>
        <TeamGrid people={TEAM} />
      </div>
    </section>
  );
}
