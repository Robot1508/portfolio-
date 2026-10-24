import React from "react";

export interface ProjectItem {
  id: string;
  index: string;
  status: string;
  category: string;
  title: string;
  description: string;
  impact: string;
  badges: string[];
  githubUrl: string;
  liveUrl: string;
  liveLabel?: string;
}

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "fixithub",
    index: "01",
    status: "PRODUCTION AI ENGINEERING",
    category: "Civic Issue Reporting & Tracking Platform",
    title: "FixItHub — Civic Issue Reporting & Tracking Platform",
    description:
      "Full-stack civic platform featuring real-time geolocation tracking and serverless processing. Leverages generative AI via AWS Bedrock (Claude 3.5 Sonnet) to cluster duplicate incident reports and prioritize community impact.",
    impact:
      "Geolocation tracking, B-Tree indexed queries, duplicate report clustering, shortlisted for AI for Bharat Hackathon with Team Akatsuki.",
    badges: ["React", "AWS Lambda", "AWS Bedrock (Claude 3.5 Sonnet)", "Supabase PostgreSQL"],
    githubUrl: "https://github.com/Robot1508/FixIt-Hub",
    liveUrl: "https://github.com/Robot1508/FixIt-Hub",
    liveLabel: "Live Demo ↗",
  },
  {
    id: "swiggy-analytics",
    index: "02",
    status: "DATA ENGINEERING & ANALYTICS",
    category: "Geospatial Data Engineering & Logistics Analytics",
    title: "Swiggy On-Demand Delivery Analytics Platform",
    description:
      "Simulated order dispatch workflows, geospatial route analytics, and automated KPI aggregation for delivery-time variance and efficiency.",
    impact:
      "Simulated order dispatch workflows, Haversine distance calculations, automated KPI aggregation for delivery-time variance and efficiency.",
    badges: ["PostgreSQL", "Python", "SQL", "Geospatial Queries", "Geospatial Indexing"],
    githubUrl: "https://github.com/Robot1508/swiggy-order-intelligence",
    liveUrl: "https://github.com/Robot1508/swiggy-order-intelligence",
    liveLabel: "Live Demo ↗",
  },
  {
    id: "ecobot",
    index: "03",
    status: "AI & SUSTAINABILITY",
    category: "AI Sustainability Intelligence Engine",
    title: "EcoBot — AI Sustainability Intelligence Engine",
    description:
      "Multi-turn conversational AI engine trained on sustainability benchmarks. Features context caching, API payload parsing, and schema validation for reliable data pipelines.",
    impact:
      "Multi-turn conversational AI engine, context caching, API payload parsing and schema validation for reliable data pipelines.",
    badges: ["Python", "LLM APIs", "Prompt Orchestration", "JSON", "REST APIs"],
    githubUrl: "https://github.com/Robot1508/EcoBot",
    liveUrl: "https://github.com/Robot1508/EcoBot",
    liveLabel: "Live Demo ↗",
  },
  {
    id: "amazon-ecommerce",
    index: "04",
    status: "RELATIONAL ARCHITECTURE & SQL",
    category: "Enterprise Relational Schema & Analytics",
    title: "Amazon E-Commerce Relational Schema & Analytics",
    description:
      "Normalized 3NF enterprise database schema simulating high-volume retail transactions, inventory lifecycle management, and revenue reporting.",
    impact:
      "Normalized 3NF enterprise schema, complex multi-table analytical queries, B-Tree indexing on foreign keys for query acceleration.",
    badges: ["PostgreSQL", "SQL", "3NF", "CTEs", "Window Functions", "B-Tree Indexing"],
    githubUrl: "https://github.com/Robot1508",
    liveUrl: "https://github.com/Robot1508",
    liveLabel: "Schema Docs ↗",
  },
  {
    id: "votersphere-ai",
    index: "05",
    status: "CIVIC TECH & LLMS",
    category: "Election Awareness Platform",
    title: "VoterSphere AI — Election Awareness Platform",
    description:
      "Civic awareness web platform built for PromptWars featuring interactive voter registration workflows and an 'Ask Constitution' AI assistant.",
    impact:
      "Built for PromptWars (Google for Developers & Hack2skill) with gamified voter roadmap and 'Ask Constitution' assistant.",
    badges: ["Next.js", "React", "Tailwind CSS", "AI/LLM APIs"],
    githubUrl: "https://github.com/Robot1508/votersphere-ai",
    liveUrl: "https://github.com/Robot1508/votersphere-ai",
    liveLabel: "Live Demo ↗",
  },
];

export interface FeaturedProjectsProps {
  projects?: ProjectItem[];
  className?: string;
  onProjectClick?: (project: ProjectItem) => void;
}

export function FeaturedProjects({
  projects = FEATURED_PROJECTS,
  className = "",
  onProjectClick,
}: FeaturedProjectsProps) {
  return (
    <div className={`project-grid ${className}`}>
      {projects.map((project) => (
        <article
          key={project.id}
          className="project-card"
          onClick={() => onProjectClick?.(project)}
        >
          <div className="project-top">
            <span className="project-index">{project.index}</span>
            <span className="project-status">{project.status}</span>
            <div className="project-corner-links">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor
                aria-label={`GitHub Repository for ${project.title}`}
                title="View Code ↗"
                onClick={(e) => e.stopPropagation()}
              >
                <svg
                  viewBox="0 0 16 16"
                  width="14"
                  height="14"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor
                aria-label={`Live Demo or Docs for ${project.title}`}
                title={project.liveLabel || "Live Demo ↗"}
                onClick={(e) => e.stopPropagation()}
              >
                <svg
                  viewBox="0 0 14 14"
                  fill="none"
                  width="13"
                  height="13"
                  aria-hidden="true"
                >
                  <path
                    d="M3 11 11 3M5 3h6v6"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="project-category">{project.category}</div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-impact">Core impact: {project.impact}</div>

          <div className="badges">
            {project.badges.map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
          </div>

          {/* Action bar with dark glassmorphic buttons */}
          <div className="project-actions">
            <a
              className="proj-action-btn proj-action-btn-gh"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor
              onClick={(e) => e.stopPropagation()}
            >
              <span>View Code ↗</span>
            </a>
            <a
              className="proj-action-btn proj-action-btn-demo"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor
              onClick={(e) => e.stopPropagation()}
            >
              <span>{project.liveLabel || "Live Demo ↗"}</span>
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

export default FeaturedProjects;
