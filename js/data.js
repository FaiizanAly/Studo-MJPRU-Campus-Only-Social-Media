// ============================================
// UniUFO — Mock Data & Demo Accounts
// ============================================

// ---- DEMO LOGIN CREDENTIALS ----
// Use these to log in on the login page:
//
//  🔑 ADMIN ACCOUNT:
//     Email:    faizan.ali@mjpru.ac.in
//     Password: uniufo@admin
//     Role:     Admin (Creator of UniUFO)
//
//  🎓 STUDENT ACCOUNTS (any of these):
//     Email:    priya.sharma@mjpru.ac.in
//     Password: uniufo@123
//
//     Email:    rahul.verma@mjpru.ac.in
//     Password: uniufo@123
//
//     Email:    anjali.singh@mjpru.ac.in
//     Password: uniufo@123

const DEMO_ACCOUNTS = [
  {
    email: 'faizan.ali@mjpru.ac.in',
    password: 'uniufo@admin',
    profile: {
      id: 'u1',
      name: 'Faizan Ali',
      username: 'faizan.ali',
      initials: 'FA',
      university: 'MJPRU, Bareilly',
      degree: 'MCA — Master of Computer Applications',
      department: 'CSIT',
      semester: '3rd Semester',
      email: 'faizan.ali@mjpru.ac.in',
      verified: true,
      followers: 412,
      following: 178,
      posts: 31,
      bio: 'MCA student at MJPRU | CSIT Dept. | Passionate about full-stack development & AI. Creator of UniUFO 🛸',
      avatarColor: 'linear-gradient(135deg, #0071e3, #5856d6)',
      isAdmin: true,
      isCreator: true,
    }
  },
  {
    email: 'priya.sharma@mjpru.ac.in',
    password: 'uniufo@123',
    profile: {
      id: 'u2',
      name: 'Priya Sharma',
      username: 'priya.sharma',
      initials: 'PS',
      university: 'MJPRU, Bareilly',
      degree: 'MCA — Master of Computer Applications',
      department: 'CSIT',
      semester: '2nd Semester',
      email: 'priya.sharma@mjpru.ac.in',
      verified: true,
      followers: 520,
      following: 134,
      posts: 18,
      bio: 'MCA student 📚 | MJPRU, Bareilly | Notes sharer & hackathon enthusiast',
      avatarColor: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
      isAdmin: false,
      isCreator: false,
    }
  },
  {
    email: 'rahul.verma@mjpru.ac.in',
    password: 'uniufo@123',
    profile: {
      id: 'u3',
      name: 'Rahul Verma',
      username: 'rahul.verma',
      initials: 'RV',
      university: 'MJPRU, Bareilly',
      degree: 'BCA — Bachelor of Computer Applications',
      department: 'CSIT',
      semester: '5th Semester',
      email: 'rahul.verma@mjpru.ac.in',
      verified: true,
      followers: 280,
      following: 90,
      posts: 12,
      bio: 'BCA 3rd Year · MJPRU | Coding, Cricket & Campus Life 🏏',
      avatarColor: 'linear-gradient(135deg, #34c759, #30d158)',
      isAdmin: false,
      isCreator: false,
    }
  },
  {
    email: 'anjali.singh@mjpru.ac.in',
    password: 'uniufo@123',
    profile: {
      id: 'u4',
      name: 'Anjali Singh',
      username: 'anjali.singh',
      initials: 'AS',
      university: 'MJPRU, Bareilly',
      degree: 'B.Sc CS — Bachelor of Science in Computer Science',
      department: 'CSIT',
      semester: '6th Semester',
      email: 'anjali.singh@mjpru.ac.in',
      verified: true,
      followers: 445,
      following: 210,
      posts: 24,
      bio: 'B.Sc CS Final Year · MJPRU | Photography | Tech | Events 📸',
      avatarColor: 'linear-gradient(135deg, #ff9f0a, #ff6b00)',
      isAdmin: false,
      isCreator: false,
    }
  },
];

// ---- CURRENT USER (resolved from DEMO_ACCOUNTS at runtime by auth.getUser()) ----
const currentUser = {
  id: "u1",
  name: "Faizan Ali",
  username: "faizan.ali",
  initials: "FA",
  university: "MJPRU — Mahatma Jyotiba Phule Rohilkhand University, Bareilly",
  degree: "MCA — Master of Computer Applications",
  department: "CSIT — Computer Science & Information Technology",
  semester: "3rd Semester",
  email: "faizan.ali@mjpru.ac.in",
  verified: true,
  followers: 412,
  following: 178,
  posts: 31,
  joinedAt: "Aug 2023",
  bio: "MCA student at MJPRU | CSIT Dept. | Passionate about full-stack development, AI, and building impactful products. Creator of UniUFO 🛸",
  avatarColor: "linear-gradient(135deg, #0071e3, #5856d6)",
  isAdmin: true,
  isCreator: true,
};

const users = [
  { id: "u2", name: "Priya Sharma",    username: "priya.sharma",  initials: "PS", university: "MJPRU, Bareilly", verified: true,  followers: 520, avatarColor: "linear-gradient(135deg, #ff6b6b, #ee5a24)" },
  { id: "u3", name: "Rahul Verma",     username: "rahul.verma",   initials: "RV", university: "MJPRU, Bareilly", verified: true,  followers: 280, avatarColor: "linear-gradient(135deg, #34c759, #30d158)" },
  { id: "u4", name: "Anjali Singh",    username: "anjali.singh",  initials: "AS", university: "MJPRU, Bareilly", verified: true,  followers: 445, avatarColor: "linear-gradient(135deg, #ff9f0a, #ff6b00)" },
  { id: "u5", name: "Mohd. Zaid Khan", username: "zaid.khan",     initials: "ZK", university: "MJPRU, Bareilly", verified: false, followers: 189, avatarColor: "linear-gradient(135deg, #af52de, #5e5ce6)" },
  { id: "u6", name: "Neha Gupta",      username: "neha.gupta",    initials: "NG", university: "MJPRU, Bareilly", verified: true,  followers: 670, avatarColor: "linear-gradient(135deg, #0a84ff, #5e5ce6)" },
];

const posts = [
  { id: "p1", author: { name: "Priya Sharma",    initials: "PS", university: "MJPRU, Bareilly", verified: true,  avatarColor: "linear-gradient(135deg, #ff6b6b, #ee5a24)" }, content: "Just submitted my MCA final year project on Machine Learning 🧠 Six months of hard work, sleepless nights, and countless cups of chai. Grateful for an amazing batch! #MJPRU #MCA", tags: ["FinalYearProject","MachineLearning","MJPRU"], likes: 87,  comments: 14, shares: 6,   time: "2h ago", liked: false },
  { id: "p2", author: { name: "Rahul Verma",     initials: "RV", university: "MJPRU, Bareilly", verified: true,  avatarColor: "linear-gradient(135deg, #34c759, #30d158)" }, content: "Internship opportunity at a Lucknow-based IT startup 🚀 Looking for BCA/MCA students with knowledge of React or Python. DM me or drop your CV in the comments! #Internship #MJPRU", tags: ["Internship","TechJob","MJPRU"], likes: 234, comments: 67, shares: 89,  time: "5h ago", liked: true  },
  { id: "p3", author: { name: "Anjali Singh",    initials: "AS", university: "MJPRU, Bareilly", verified: true,  avatarColor: "linear-gradient(135deg, #ff9f0a, #ff6b00)" }, content: "MJPRU Annual Tech Fest 'TECHNO-2026' this weekend! 48-hour hackathon, coding competitions, and amazing prizes. Registration closes tonight 🔥 #TechFest #MJPRU", tags: ["TechFest","Hackathon","CampusLife"], likes: 312, comments: 44, shares: 120, time: "8h ago", liked: false },
  { id: "p4", author: { name: "Mohd. Zaid Khan", initials: "ZK", university: "MJPRU, Bareilly", verified: false, avatarColor: "linear-gradient(135deg, #af52de, #5e5ce6)" }, content: "Selling my Casio FX-991ES Plus scientific calculator — barely used. Also have engineering drawing instruments. Pickup from CSIT hostel, Bareilly. Price negotiable!", tags: ["ForSale","MJPRU","Campus"], likes: 12,  comments: 8,  shares: 2,   time: "1d ago", liked: false },
];

const products = [
  { id: "m1", title: "Dell Inspiron 15 Laptop",               price: 32000, condition: "Good",     category: "Electronics", seller: { name: "Neha Gupta",      initials: "NG", verified: true,  avatarColor: "linear-gradient(135deg, #0a84ff, #5e5ce6)" }, description: "Dell Inspiron, i5 10th Gen, 8GB RAM, 512GB SSD. Perfect for programming & data science. Minor scratches. Charger included.", location: "MJPRU Campus, Bareilly", time: "2d ago", bgColor: "#f0f5ff", iconColor: "#0071e3" },
  { id: "m2", title: "MCA Textbooks Bundle (Sem 1–2)",         price: 1200,  condition: "Used",     category: "Books",       seller: { name: "Faizan Ali",      initials: "FA", verified: true,  avatarColor: "linear-gradient(135deg, #0071e3, #5856d6)" }, description: "5 core MCA books — C Programming, DBMS, Data Structures, Discrete Maths, Computer Networks. All in readable condition.", location: "CSIT Dept., MJPRU, Bareilly", time: "3d ago", bgColor: "#fff5e6", iconColor: "#ff9f0a" },
  { id: "m3", title: "Hostel Mini Cooler — Orient",            price: 3500,  condition: "Like New", category: "Appliances",  seller: { name: "Priya Sharma",    initials: "PS", verified: true,  avatarColor: "linear-gradient(135deg, #ff6b6b, #ee5a24)" }, description: "Orient mini air cooler, barely used. Leaving hostel end of semester. Perfect for Bareilly summers. Pickup only.", location: "Girls Hostel, MJPRU Campus", time: "4d ago", bgColor: "#f0fff5", iconColor: "#34c759" },
  { id: "m4", title: "Scientific Calculator — Casio FX-991ES", price: 650,   condition: "Like New", category: "Stationery", seller: { name: "Rahul Verma",     initials: "RV", verified: true,  avatarColor: "linear-gradient(135deg, #34c759, #30d158)" }, description: "Casio FX-991ES Plus. Works perfectly. Selling because I graduated. Includes original case and box.", location: "MJPRU, Bareilly", time: "5d ago", bgColor: "#f5f0ff", iconColor: "#af52de" },
  { id: "m5", title: "Study Table with Chair",                 price: 2200,  condition: "Good",     category: "Furniture",   seller: { name: "Anjali Singh",    initials: "AS", verified: true,  avatarColor: "linear-gradient(135deg, #ff9f0a, #ff6b00)" }, description: "Wooden study table 100x60cm + cushioned chair. Slight scratches on table. Self-pickup from Boys Hostel Block A.", location: "Boys Hostel Block A, MJPRU", time: "1w ago", bgColor: "#fff0f0", iconColor: "#ff3b30" },
  { id: "m6", title: "boAt Rockerz 450 Headphones",           price: 1400,  condition: "Good",     category: "Electronics", seller: { name: "Mohd. Zaid Khan", initials: "ZK", verified: false, avatarColor: "linear-gradient(135deg, #af52de, #5e5ce6)" }, description: "boAt Rockerz 450 wireless headphones, 85% battery health. Good sound, great for studying. Includes cable and case.", location: "MJPRU Campus, Bareilly", time: "1w ago", bgColor: "#f0f5ff", iconColor: "#0071e3" },
];

const lostItems = [
  { id: "l1", type: "lost",  title: "boAt Airdopes (White)",          description: "Lost near the CSIT department entrance on Thursday around 3 PM. White earbuds case with a small scratch. Reward offered.", location: "CSIT Dept., MJPRU Campus",     date: "May 22, 2026", claimed: false, reporter: { name: "Faizan Ali",    initials: "FA", verified: true,  avatarColor: "linear-gradient(135deg, #0071e3, #5856d6)" }, icon: "🎧", bgColor: "#f0f5ff" },
  { id: "l2", type: "found", title: "Blue Laptop Bag",                description: "Found a blue HP laptop bag outside the exam hall. Contains notebooks and a USB drive. Please claim at CSIT office with proof.", location: "Exam Hall, MJPRU",              date: "May 23, 2026", claimed: false, reporter: { name: "Priya Sharma",  initials: "PS", verified: true,  avatarColor: "linear-gradient(135deg, #ff6b6b, #ee5a24)" }, icon: "🎒", bgColor: "#f0fff5" },
  { id: "l3", type: "lost",  title: "MJPRU Student ID Card",          description: "Lost my student ID. Name: Rahul Verma, Roll No: 230113014. Please contact if found. Urgently needed for examinations.", location: "Canteen / Sports Ground, MJPRU", date: "May 21, 2026", claimed: false, reporter: { name: "Rahul Verma",   initials: "RV", verified: true,  avatarColor: "linear-gradient(135deg, #34c759, #30d158)" }, icon: "🪪", bgColor: "#fff5e6" },
  { id: "l4", type: "found", title: "Black Parker Pen",               description: "Found a black Parker pen near the library reading room. Looks expensive. Claim at library counter with proof.", location: "MJPRU Central Library",             date: "May 20, 2026", claimed: true,  reporter: { name: "Anjali Singh",  initials: "AS", verified: true,  avatarColor: "linear-gradient(135deg, #ff9f0a, #ff6b00)" }, icon: "✒️", bgColor: "#f5f0ff" },
  { id: "l5", type: "lost",  title: "Casio Scientific Calculator",    description: "Lost my Casio FX-100MS during the Mathematics paper. Black with silver buttons. Please return to examination office.", location: "Exam Hall, MJPRU Campus",         date: "May 19, 2026", claimed: false, reporter: { name: "Mohd. Zaid Khan", initials: "ZK", verified: false, avatarColor: "linear-gradient(135deg, #af52de, #5e5ce6)" }, icon: "🧮", bgColor: "#fff0f0" },
  { id: "l6", type: "found", title: "Black Water Bottle",             description: "Found near the gym entrance, MJPRU. Black steel bottle with stickers. Claim within 3 days or will hand to security.", location: "Sports Complex, MJPRU",           date: "May 18, 2026", claimed: false, reporter: { name: "Neha Gupta",    initials: "NG", verified: true,  avatarColor: "linear-gradient(135deg, #0a84ff, #5e5ce6)" }, icon: "🍶", bgColor: "#f0f5ff" },
];

const notes = [
  { id: "n1", title: "Data Structures Using C — Complete Notes",       subject: "MCA-301", semester: "Sem 3", pages: 54, downloads: 412, rating: 4.8, uploader: { name: "Faizan Ali",    initials: "FA", verified: true,  avatarColor: "linear-gradient(135deg, #0071e3, #5856d6)" }, time: "3d ago",  size: "5.2 MB", tags: ["DSA","C","MCA"] },
  { id: "n2", title: "DBMS Handwritten Notes — Full Syllabus",         subject: "MCA-201", semester: "Sem 2", pages: 68, downloads: 289, rating: 4.6, uploader: { name: "Priya Sharma",  initials: "PS", verified: true,  avatarColor: "linear-gradient(135deg, #ff6b6b, #ee5a24)" }, time: "1w ago",  size: "7.1 MB", tags: ["DBMS","SQL","MCA"] },
  { id: "n3", title: "Computer Networks — Slides + Short Notes",       subject: "MCA-302", semester: "Sem 3", pages: 38, downloads: 356, rating: 4.9, uploader: { name: "Rahul Verma",   initials: "RV", verified: true,  avatarColor: "linear-gradient(135deg, #34c759, #30d158)" }, time: "2w ago",  size: "3.4 MB", tags: ["Networks","TCP/IP","MCA"] },
  { id: "n4", title: "Discrete Mathematics — Solved Problems (MJPRU)", subject: "MCA-101", semester: "Sem 1", pages: 90, downloads: 623, rating: 4.7, uploader: { name: "Anjali Singh",  initials: "AS", verified: true,  avatarColor: "linear-gradient(135deg, #ff9f0a, #ff6b00)" }, time: "3w ago",  size: "6.1 MB", tags: ["Maths","Logic","MCA"] },
  { id: "n5", title: "Java Programming — OOP Notes & Programs",        subject: "MCA-202", semester: "Sem 2", pages: 55, downloads: 278, rating: 4.6, uploader: { name: "Mohd. Zaid Khan", initials: "ZK", verified: false, avatarColor: "linear-gradient(135deg, #af52de, #5e5ce6)" }, time: "1mo ago", size: "4.3 MB", tags: ["Java","OOP","Programming"] },
  { id: "n6", title: "Software Engineering — Full Summary Sheet",      subject: "MCA-401", semester: "Sem 4", pages: 14, downloads: 891, rating: 5.0, uploader: { name: "Neha Gupta",    initials: "NG", verified: true,  avatarColor: "linear-gradient(135deg, #0a84ff, #5e5ce6)" }, time: "2mo ago", size: "1.8 MB", tags: ["SE","SDLC","Summary"] },
];

const events = [
  { id: "e1", title: "TECHNO-2026 — Annual Tech Fest",       club: "CSIT Student Association, MJPRU", type: "Hackathon", date: "May 28–30, 2026",  time: "9:00 AM",  location: "MJPRU Main Auditorium, Bareilly", attendees: 340, capacity: 600,  registered: false, color: "#0071e3", description: "MJPRU's flagship tech festival — 48-hour hackathon, coding contests, project expo and workshops. Open to all MJPRU students. Prizes worth ₹2 Lakhs!" },
  { id: "e2", title: "Campus Placement Drive — IT Companies", club: "Training & Placement Cell, MJPRU", type: "Career",    date: "June 5, 2026",    time: "10:00 AM", location: "Seminar Hall, MJPRU Campus",      attendees: 490, capacity: 700,  registered: true,  color: "#34c759", description: "Top IT companies visiting MJPRU for campus placements. Roles in software development, data analytics, and cloud computing. Carry your CV!" },
  { id: "e3", title: "Mental Health & Wellness Week",         club: "Student Welfare Committee, MJPRU", type: "Wellness",  date: "June 9–13, 2026", time: "All Day",  location: "Various Campus Locations, MJPRU", attendees: 210, capacity: null, registered: false, color: "#ff9f0a", description: "Free counseling sessions, yoga classes, and stress management workshops during exam season. Your mental health matters!" },
  { id: "e4", title: "Photography Exhibition: MJPRU Lens",   club: "MJPRU Photography Club",            type: "Arts",      date: "June 12, 2026",   time: "4:00 PM",  location: "Student Center, MJPRU Campus",    attendees: 95,  capacity: 200,  registered: false, color: "#af52de", description: "Annual photography showcase featuring the best campus photography from MJPRU students." },
  { id: "e5", title: "Inter-Department Cricket Tournament",  club: "Sports Committee, MJPRU",           type: "Sports",    date: "June 15–18, 2026",time: "8:00 AM",  location: "MJPRU Cricket Ground, Bareilly",  attendees: 800, capacity: 1500, registered: true,  color: "#ff3b30", description: "Annual inter-department cricket tournament. All departments welcome. Fun, prizes, and refreshments for everyone!" },
];

const communities = [
  { id: "c1", name: "CSIT Students — MJPRU",        category: "Tech",     members: 650, posts: 234, description: "Official community for CSIT department students at MJPRU. Notes, announcements, placements, and events.", joined: true,  color: "#0071e3", emoji: "💻" },
  { id: "c2", name: "MJPRU Photography Club",        category: "Arts",     members: 130, posts: 67,  description: "For campus photographers at all skill levels. Monthly photo walks, exhibitions, and workshops.", joined: false, color: "#af52de", emoji: "📸" },
  { id: "c3", name: "MCA Batch 2023–2026",           category: "Academic", members: 180, posts: 312, description: "Official batch group for MCA 2023–26. Syllabus, exam dates, notes, and batch activities.", joined: true,  color: "#34c759", emoji: "🎓" },
  { id: "c4", name: "Campus Startup Network — MJPRU",category: "Business", members: 90,  posts: 44,  description: "Connect with fellow student entrepreneurs at MJPRU. Startup ideas, mentorship, and funding resources.", joined: false, color: "#ff9f0a", emoji: "🚀" },
  { id: "c5", name: "Competitive Programming Club",  category: "Tech",     members: 210, posts: 189, description: "Weekly coding contests, LeetCode sessions, and placement preparation. All levels welcome!", joined: true,  color: "#ff3b30", emoji: "⌨️" },
  { id: "c6", name: "MJPRU Gaming & E-Sports",       category: "Gaming",   members: 320, posts: 280, description: "Esports, LAN parties, and gaming tournaments. BGMI, Chess, FIFA leagues — all active at MJPRU!", joined: false, color: "#5856d6", emoji: "🎮" },
];

const conversations = [
  { id: "cv1", user: { name: "Priya Sharma",    initials: "PS", verified: true,  online: true,  avatarColor: "linear-gradient(135deg, #ff6b6b, #ee5a24)" }, lastMessage: "Sure! I'll send the DBMS notes tonight 📚", time: "2m ago",  unread: 2 },
  { id: "cv2", user: { name: "Rahul Verma",     initials: "RV", verified: true,  online: false, avatarColor: "linear-gradient(135deg, #34c759, #30d158)" }, lastMessage: "Placement drive deadline is tomorrow, hurry!", time: "1h ago",  unread: 0 },
  { id: "cv3", user: { name: "Anjali Singh",    initials: "AS", verified: true,  online: true,  avatarColor: "linear-gradient(135deg, #ff9f0a, #ff6b00)" }, lastMessage: "Are you coming to TECHNO-2026?", time: "3h ago",  unread: 1 },
  { id: "cv4", user: { name: "Mohd. Zaid Khan", initials: "ZK", verified: false, online: false, avatarColor: "linear-gradient(135deg, #af52de, #5e5ce6)" }, lastMessage: "Calculator still available bro?", time: "1d ago",  unread: 0 },
  { id: "cv5", user: { name: "Neha Gupta",      initials: "NG", verified: true,  online: true,  avatarColor: "linear-gradient(135deg, #0a84ff, #5e5ce6)" }, lastMessage: "Thanks for sharing the SE notes!", time: "2d ago",  unread: 0 },
];

const chatMessages = [
  { id: "msg1", sent: false, text: "Hey! Do you have the Data Structures notes from Prof. Sharma's class?", time: "10:12 AM" },
  { id: "msg2", sent: true,  text: "Yes! I just uploaded them on UniUFO Notes section. Check MCA-301 👍", time: "10:14 AM" },
  { id: "msg3", sent: false, text: "Oh amazing! You're a lifesaver, the end sem is next week 😅", time: "10:15 AM" },
  { id: "msg4", sent: true,  text: "Haha no worries! Focus on Chapter 4–6 — Trees and Graphs are always asked in MJPRU exams.", time: "10:16 AM" },
  { id: "msg5", sent: false, text: "Sure! I'll send the DBMS notes tonight 📚", time: "10:18 AM" },
];

const adminStats = [
  { label: "Pending Verifications", value: 38,      change: "+9",    trend: "up",   color: "#0071e3" },
  { label: "Active Reports",        value: 5,       change: "-2",    trend: "down", color: "#ff3b30" },
  { label: "Daily Active Users",    value: "1,842", change: "+6.2%", trend: "up",   color: "#34c759" },
  { label: "New Registrations",     value: 97,      change: "+18",   trend: "up",   color: "#ff9f0a" },
];

const pendingVerifications = [
  { id: "v1", name: "Shivam Agarwal", email: "shivam.agarwal@mjpru.ac.in", university: "MJPRU, Bareilly", submittedAt: "2h ago", idUploaded: true,  feeSlipUploaded: true  },
  { id: "v2", name: "Pooja Yadav",    email: "pooja.yadav@mjpru.ac.in",    university: "MJPRU, Bareilly", submittedAt: "4h ago", idUploaded: true,  feeSlipUploaded: false },
  { id: "v3", name: "Aryan Mishra",   email: "aryan.mishra@mjpru.ac.in",   university: "MJPRU, Bareilly", submittedAt: "6h ago", idUploaded: true,  feeSlipUploaded: true  },
  { id: "v4", name: "Ritu Patel",     email: "ritu.patel@mjpru.ac.in",     university: "MJPRU, Bareilly", submittedAt: "8h ago", idUploaded: false, feeSlipUploaded: true  },
];
