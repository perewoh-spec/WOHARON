// src/data/projects.ts

// CourseConnect Images
import ccThumb from "@/assets/courseconnect/thumbnail_1.jpg";
import ccImg1 from "@/assets/courseconnect/IMG 1.jpg";
import ccImg2 from "@/assets/courseconnect/IMG 2.jpg";
import ccImg3 from "@/assets/courseconnect/IMG 3.jpg";
import ccImg4 from "@/assets/courseconnect/IMG 4.jpg";
import ccImg5 from "@/assets/courseconnect/IMG 5.jpg";
import ccImg6 from "@/assets/courseconnect/IMG 6.jpg";
import ccImg7 from "@/assets/courseconnect/IMG 7.jpg";
import a1 from "@/assets/courseconnect/Admin IMG 1.jpg";
import a2 from "@/assets/courseconnect/Admin IMG 2.jpg";
import a3 from "@/assets/courseconnect/Admin IMG 3.jpg";
import a4 from "@/assets/courseconnect/Admin IMG 4.jpg";
import a5 from "@/assets/courseconnect/Admin IMG 5.jpg";
import a6 from "@/assets/courseconnect/Admin IMG 6.jpg";

// Louidor Pristine Images
import lpThumb from "@/assets/louidor/Thumbnail.jpg";
import lpImg1 from "@/assets/louidor/IMG1.jpg";
import lpImg2 from "@/assets/louidor/IMG 2.jpg";
import lpImg3 from "@/assets/louidor/IMG 3.jpg";
import lpImg4 from "@/assets/louidor/IMG 4.jpg";
import lpImg5 from "@/assets/louidor/IMG 5.jpg";
import lpImg6 from "@/assets/louidor/IMG 6.jpg";
import lpImg7 from "@/assets/louidor/IMG 7.jpg";

// Ubuntu for Peace Images
import ufpThumb from "@/assets/ubuntu/hero.webp";
import ufpWho from "@/assets/ubuntu/who_are_we.webp";
import ufpFocus from "@/assets/ubuntu/focus.webp";
import ufpEvents from "@/assets/ubuntu/events.webp";
import ufpDonate from "@/assets/ubuntu/donate.webp";
import ufpAbout from "@/assets/ubuntu/about.webp";
import ufpPost from "@/assets/ubuntu/post.webp";

// Smoky Visuals Images
import svWelcome from "@/assets/smoky-visuals/welcome.webp";
import svExplore from "@/assets/smoky-visuals/explore_work.webp";
import svPricing from "@/assets/smoky-visuals/pricing.webp";
import svReviews from "@/assets/smoky-visuals/client_reviews.webp";
import svConnect from "@/assets/smoky-visuals/connect.webp";
import svCmsLogin from "@/assets/smoky-visuals/cms_login.webp";
import svCmsPortfolio from "@/assets/smoky-visuals/cms_portfolio.webp";

export type Slide = {
  src: string;
  group: string;
  title: string;
  caption: string;
};

export type Project = {
  slug: string;
  title: string;
  chips: string[];
  thumb: string;
  about: string;
  slides: Slide[];
};

export const PROJECTS: Project[] = [
  {
    slug: "courseconnect",
    title: "CourseConnect",
    chips: ["Web App", "System"],
    thumb: ccThumb,
    about: "CourseConnect is an academic course registration platform built to remove the friction students face every semester. It lets students browse the full course catalog, register for classes, drop them, and visualize their personal weekly timetable, all in one place. Behind the scenes, the system automatically validates prerequisites, detects schedule conflicts, and enforces course capacity so students can only enroll in classes they are actually eligible for. A separate admin portal gives staff full control to create and edit courses, define prerequisite rules, and monitor every enrollment across the institution in real time.",
    slides: [
      { src: ccThumb, group: "Overview", title: "CourseConnect", caption: "Full stack academic registration platform with automated prerequisite validation, real time schedule conflict detection, and a separate admin portal." },
      { src: ccImg1, group: "Student", title: "Landing / Sign in gate", caption: "New users must sign up first before signing in." },
      { src: ccImg2, group: "Student", title: "Authentication", caption: "Clean email and password login screen." },
      { src: ccImg3, group: "Student", title: "Student registration", caption: "New students register with name, email, and password." },
      { src: ccImg4, group: "Student", title: "Academic dashboard", caption: "Personal overview: registered courses, total credits, completed courses, and current semester, all live from the database." },
      { src: ccImg5, group: "Student", title: "Browse courses", caption: "Smart catalog with real time prerequisite validation and schedule conflict detection. Ineligible courses are blocked with a clear reason." },
      { src: ccImg6, group: "Student", title: "My courses", caption: "Full list of enrolled courses with schedule, instructor, and registration date. Drop directly from this view." },
      { src: ccImg7, group: "Student", title: "Visual timetable", caption: "Every registered course plotted into its actual day and time slot." },
      { src: a1, group: "Admin", title: "Admin dashboard", caption: "System wide overview: 10 courses, 29 active registrations, 5 prerequisite rules, and 13 registered users, all live from the database." },
      { src: a2, group: "Admin", title: "Course management", caption: "Full course list with schedule, room, instructor, and enrollment count. Edit or delete inline." },
      { src: a3, group: "Admin", title: "Create course", caption: "Code, name, description, credits, capacity, day, time, room and instructor, all in one dialog." },
      { src: a4, group: "Admin", title: "Edit course", caption: "Same dialog, pre filled. Changes update the database instantly and reflect across all student views." },
      { src: a5, group: "Admin", title: "Prerequisite rules", caption: "Define course dependencies with a simple dropdown pair. Complete the left course to unlock the right." },
      { src: a6, group: "Admin", title: "Enrollments", caption: "Full enrollment table across every student and course: name, email, course code, status, and date." },
    ]
  },
  {
    slug: "louidor-pristine",
    title: "Louidor Pristine",
    chips: ["Web Dev", "Agency"],
    thumb: lpThumb,
    about: "Louidor Pristine Digital Solutions is a single page agency website for a digital studio that offers web design, business automation, AI solutions, and custom software. The site walks visitors through what the studio does, how it works with clients, who it serves, and what each engagement costs, all in one focused scroll. It is built to convert: clear services, a transparent four step process, fixed price packages, a values section that builds trust, an FAQ that handles common hesitations, and a direct contact section so prospective clients can start a conversation in seconds.",
    slides: [
      { src: lpThumb, group: "Overview", title: "Louidor Pristine", caption: "A single page agency website for a digital studio offering web design, automation, AI, and custom software." },
      { src: lpImg1, group: "Sections", title: "Services grid", caption: "Four service cards in a 2x2 grid, each with a custom icon and a full list of deliverables across Website Design, Business Automation, AI Solutions, and Custom Software." },
      { src: lpImg2, group: "Sections", title: "Process", caption: "A four step process: Chat, Plan, Build, Launch, presented as numbered cards with a clean connecting line running across the top on desktop." },
      { src: lpImg3, group: "Sections", title: "Who it's for", caption: "Four numbered industry cards making the target audience explicit: Service businesses, Creators and coaches, Local and retail, and Startups." },
      { src: lpImg4, group: "Sections", title: "Packages", caption: "Three fixed price packages side by side with full feature lists and turnaround times. The Starter Site at $250 is highlighted as the featured card with a Most Popular badge." },
      { src: lpImg5, group: "Sections", title: "Values", caption: "Four value cards on a dark background: Clear communication, Honest pricing, Quality first, and Long term partner. The agency's positioning summed up in plain language." },
      { src: lpImg6, group: "Sections", title: "FAQ", caption: "A custom accordion with six common client questions, the first one expanded to show the answer animating in with a smooth CSS transition." },
      { src: lpImg7, group: "Sections", title: "Contact", caption: "Clean split contact section with direct email and hours on the left and a full enquiry or booking form on the right." },
    ]
  },
  {
    slug: "ubuntu-for-peace",
    title: "Ubuntu for Peace",
    chips: ["Web Design", "NGO"],
    thumb: ufpThumb,
    about: "Ubuntu for Peace is a grassroots, student-led initiative rooted in the American University of Nigeria. Their mission is to bridge environmental rehabilitation with community conflict resolution. They needed a digital platform that matched the ambition of their cause; a space to amplify their impact, tell their story, and drive global donations. We designed a modern, magazine-style web experience built on a foundation of empathy and credibility. By utilizing bold typography, immersive imagery, and fluid animations, we created a design system that makes complex environmental issues feel approachable and inspiring. The goal was to emotionally ground the user before asking for their support. Once the high-fidelity layouts were finalized, we collaborated closely with the organization's internal development team to bring the vision to life, ensuring every responsive detail and interactive element was built exactly to spec.",
    slides: [
      { 
        src: ufpThumb, 
        group: "Overview", 
        title: "Ubuntu for Peace", 
        caption: "An immersive hero section with a frosted-glass sticky header, flowing seamlessly into a split-screen introduction of the organization's mission." 
      },
      { 
        src: ufpWho, 
        group: "Sections", 
        title: "Who are we", 
        caption: "An immersive hero section with a frosted-glass sticky header, flowing seamlessly into a split-screen introduction of the organization's mission." 
      },
      { 
        src: ufpFocus, 
        group: "Sections", 
        title: "Focus Areas", 
        caption: "An interactive breakdown of the group's main initiatives. We used sleek, responsive tabs and clean layout cards to organize complex information into digestible, bite-sized pieces." 
      },
      { 
        src: ufpEvents, 
        group: "Sections", 
        title: "Events & News", 
        caption: "A dynamic, editorial-style section. It features a large, highlighted upcoming event placed right alongside a staggered, easily scannable list of recent news posts." 
      },
      { 
        src: ufpDonate, 
        group: "Sections", 
        title: "Donate", 
        caption: "A clean, distraction-free interface built to inspire trust. The layout simplifies the giving process, making it as seamless and frictionless as possible for users to support the cause." 
      },
      { 
        src: ufpAbout, 
        group: "Sections", 
        title: "About Us", 
        caption: "A structured, deeply human layout dedicated to the organization's philosophy and roots. It uses clear hierarchy and collapsible sections to elegantly showcase the faculty, alumni, and student leaders." 
      },
      { 
        src: ufpPost, 
        group: "Sections", 
        title: "Article Layout", 
        caption: "A reading layout for individual articles, featuring a bold cover image, elegant typography, and clear metadata to keep the focus entirely on the storytelling." 
      }
    ]
  },
  {
    slug: "smoky-visuals",
    title: "Smoky Visuals",
    chips: ["Photography", "CMS", "React"],
    thumb: svWelcome,
    about: "A high-performance, responsive landing page built for a professional photographer. The goal was to deliver a cinematic, highly interactive public-facing portfolio while giving the client complete control over their content through a secure, custom-built Admin Dashboard. Built with React, Tailwind CSS, and Framer Motion for the frontend, and powered by Supabase for database and media storage. Key technical features include automated client-side WebP image compression for efficiency, real-time database syncing, and a dynamic WhatsApp booking integration.",
    slides: [
      { 
        src: svWelcome, 
        group: "Overview", 
        title: "Smoky Visuals", 
        caption: "A fast, eye-catching entrance. It preloads images to prevent lag and uses smooth text animations. A subtle CSS noise effect creates a premium \"smoky\" look without slowing down the site." 
      },
      { 
        src: svExplore, 
        group: "Public", 
        title: "Explore Work", 
        caption: "A responsive photo gallery powered by the database. Users can sort images by category. Clicking a photo opens a custom full-screen view with a blurred background, swipe controls, and keyboard support." 
      },
      { 
        src: svPricing, 
        group: "Public", 
        title: "Pricing Packages", 
        caption: "Interactive pricing cards with smooth hover effects. All packages and prices are pulled directly from the CMS, not hardcoded. Clicking \"Book Now\" automatically passes the selected package to the contact form." 
      },
      { 
        src: svReviews, 
        group: "Public", 
        title: "Client Reviews", 
        caption: "Clean, text-focused sections built to show credibility. Reviews use a staggered layout to make reading more engaging. All text and testimonials update automatically from the database." 
      },
      { 
        src: svConnect, 
        group: "Public", 
        title: "Connect Form", 
        caption: "A modern slide-in form that replaces a basic contact page. It collects client details, goals, and chosen packages. When submitted, it formats the data and opens a direct WhatsApp chat with the photographer." 
      },
      { 
        src: svCmsLogin, 
        group: "Admin", 
        title: "CMS Login", 
        caption: "A private login for the site owner to access the website without coding." 
      },
      { 
        src: svCmsPortfolio, 
        group: "Admin", 
        title: "CMS Dashboard", 
        caption: "The Content Management System includes a bulk image uploader that automatically shrinks files to WebP format. It also has simple tools to edit text, update prices, and manage reviews instantly." 
      }
    ]
  },
];