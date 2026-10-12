export interface ProjectItem {
  id: string;
  name: string;
  description: string;
  architecture: string;
  techStack: string[];
  metrics: string;
  repoUrl: string;
  liveUrl: string;
  stars?: number;
  forks?: number;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: {
    name: string;
    level: 'Core' | 'Advanced' | 'Proficient';
    badgeUrl?: string;
  }[];
}

export interface CiCdStep {
  title: string;
  tool: string;
  description: string;
  guardrail: string;
}

export interface CloudInfrastructure {
  provider: 'AWS' | 'GCP' | 'Multi-Cloud';
  services: string[];
  containerization: string[];
  orchestration: string[];
  iac: string[];
  monitoring: string[];
}

export interface ProfileData {
  fullName: string;
  title: string;
  tagline: string;
  githubUsername: string;
  email: string;
  linkedin: string;
  portfolio: string;
  location: string;
  yearsOfExperience: string;
  status: string;
  currentFocus: string;
  architecturalPillars: {
    title: string;
    description: string;
  }[];
  skillCategories: SkillCategory[];
  projects: ProjectItem[];
  cloudInfra: CloudInfrastructure;
  ciCdSteps: CiCdStep[];
  showStats: boolean;
  showStreak: boolean;
  showBadges: boolean;
  themeStyle: 'github-dark' | 'github-light';
}
