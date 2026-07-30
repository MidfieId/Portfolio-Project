import ldevChatContent from "../content/projects/ldev-chat.md?raw";
import portfolioContent from "../content/projects/portfolio.md?raw";
import remoteTubeContent from "../content/projects/remote-tube.md?raw";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  technologies: { name: string; mark: string }[];
  repository?: string;
  liveUrl?: string;
  featured?: boolean;
  content: string;
};

export const projects: Project[] = [
  {
    slug: "ldev-chat",
    title: "Ldev Chat",
    summary: "A collaborative real-time chat application built with Blazor and WebSockets.",
    technologies: [
      { name: "C#", mark: "C#" },
      { name: "Blazor", mark: "B" },
      { name: "WebSockets", mark: "WS" },
    ],
    repository: "https://github.com/Ldev-The-Remaster/ChattingApp",
    featured: true,
    content: ldevChatContent,
  },
  {
    slug: "portfolio",
    title: "Developer Portfolio",
    summary: "A calm CRT-inspired portfolio with Markdown-powered project write-ups.",
    technologies: [
      { name: "React", mark: "R" },
      { name: "TypeScript", mark: "TS" },
      { name: "Vite", mark: "V" },
    ],
    repository: "https://github.com/MidfieId",
    featured: true,
    content: portfolioContent,
  },
  {
    slug: "remote-tube",
    title: "RemoteTube",
    summary: "A full-stack application for retrieving and organizing YouTube playlist information.",
    technologies: [
      { name: "React", mark: "R" },
      { name: "ASP.NET Core", mark: ".NET" },
      { name: "YouTube API", mark: "YT" },
      { name: "Tailwind CSS", mark: "TW" },
    ],
    featured: true,
    content: remoteTubeContent,
  },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
