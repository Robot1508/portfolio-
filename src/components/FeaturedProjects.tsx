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
    id: "vitalsis",
    index: "01",
    status: "FLAGSHIP ML & RESEARCH",
    category: "Multimodal Clinical Machine Learning & Research",
    title: "Vitalsis — AI-Powered Sepsis Risk Prediction",
    description:
      "Clinical time-series multimodal predictive ML system for sepsis risk assessment. Features rigorous model validation, patient trajectory monitoring, and low-latency inference pipelines.",
    impact: "Flagship clinical ML architecture for predictive healthcare modeling.",
    badges: ["Python", "XGBoost", "Random Forest", "FastAPI", "React"],
    githubUrl: "https://github.com/Robot1508/vitalsis",
    liveUrl: "https://github.com/Robot1508/vitalsis",
    liveLabel: "Live Demo ↗",
  },
  {
    id: "civicflow",
    index: "02",
    status: "PRODUCTION AI ENGINEERING",
    category: "End-to-End AI & Geospatial Platform",
    title: "CivicFlow / FixItHub — AI-Powered Civic Issue Management",
    description:
      "Full-stack civic platform featuring real-time geolocation tracking and serverless processing. Leverages generative AI via AWS Bedrock to cluster duplicate incident reports and prioritize community impact.",
    impact:
      "Production-grade serverless cloud integration and real-world generative AI orchestration. Shortlisted for AI for Bharat.",
    badges: ["React", "AWS Lambda", "Supabase PostgreSQL", "AWS Bedrock", "Geolocation"],
    githubUrl: "https://github.com/Robot1508/civicflow",
    liveUrl: "https://github.com/Robot1508/civicflow",
    liveLabel: "Live Demo ↗",
  },
  {
    id: "ecobot",
    index: "03",
    status: "COMPUTER VISION",
    category: "Applied Machine Learning & Computer Vision",
    title: "EcoBot — Vision-Based Environmental Intelligence",
    description:
      "Environmental object detection and scene analysis engine trained on custom sustainability datasets. Delivers rapid inference pipelines and structured environmental intelligence metrics.",
    impact: "Custom vision model fine-tuning, automated labeling pipelines, and edge deployment.",
    badges: ["YOLO11", "Python", "Next.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/Robot1508/ecobot",
    liveUrl: "https://github.com/Robot1508/ecobot",
    liveLabel: "Live Demo ↗",
  },
  {
    id: "routerush",
    index: "04",
    status: "OPERATIONS RESEARCH",
    category: "Geospatial Data Science & Algorithmic Optimization",
    title: "RouteRush — Intelligent Logistics & Route Optimization",
    description:
      "Algorithmic logistics routing and fleet dispatch optimization engine. Models complex geospatial network topologies, delivery-variance constraints, and multi-stop TSP heuristics.",
    impact: "Advanced algorithmic problem-solving and mathematical optimization.",
    badges: ["Python", "Geospatial Algorithms", "Haversine Distance", "Optimization Solvers"],
    githubUrl: "https://github.com/Robot1508/RouteRush",
    liveUrl: "https://github.com/Robot1508/RouteRush",
    liveLabel: "Live Demo ↗",
  },
  {
    id: "swiggy-order-intelligence",
    index: "05",
    status: "DATA ENGINEERING & ANALYTICS",
    category: "Relational Data Engineering & Business Metrics",
    title: "Swiggy Order Intelligence — Food Delivery Business Analytics",
    description:
      "High-throughput analytical data pipeline and reporting system simulating order lifecycles, restaurant dispatch variance, geospatial delivery metrics, and platform revenue KPIs.",
    impact: "3NF normalized schema design, query optimization, and executive metric modeling.",
    badges: ["PostgreSQL", "SQL", "Python", "B-Tree Indexing", "CTEs", "Window Functions"],
    githubUrl: "https://github.com/Robot1508/swiggy-order-intelligence",
    liveUrl: "https://github.com/Robot1508/swiggy-order-intelligence",
    liveLabel: "Architecture ↗",
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
