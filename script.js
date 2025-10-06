// Initialize Lucide icons
lucide.createIcons();

// Professional Experience Data
const experiences = [
    {
        company: "Draper",
        logo: "draper.svg",
        role: "AI/ML Intern - COTS Drone Autonomy",
        period: "June 2025 - Present",
        location: "Cambridge, MA",
        achievements: [
            "Engineered secure software augmentation workflows to convert COTS drones into mission-ready platforms for DoD applications",
            "Developed SysML models to validate drone system architecture and simulation-based mission planning",
            "Collaborated with autonomy teams to ensure robust communication between drone dashboards and field operators"
        ],
        technologies: ["SysML", "DoD Standards", "Drone Systems", "Mission Planning"]
    },
    {
        company: "Draper",
        logo: "draper.svg",
        role: "AI/ML Intern - LLMs and System Requirements",
        period: "June 2024 - August 2024",
        location: "Cambridge, MA",
        achievements: [
            "Built a secure, air-gapped LLM ecosystem using AWS SageMaker and Bedrock to analyze technical debt",
            "Designed and deployed a scalable RAG pipeline delivering production-ready insights for engineering teams",
            "Led technical research across 30+ SMEs, consolidating findings into operational AI tool for SE lifecycle"
        ],
        technologies: ["AWS SageMaker", "AWS Bedrock", "RAG", "LLMs", "Technical Debt Analysis"]
    },
    {
        company: "ArcField",
        logo: "arcfield.jpg",
        role: "IT Intern",
        period: "July 2023 - August 2023",
        location: "Chantilly, VA",
        achievements: [
            "Developed real-time network monitoring dashboard with Icinga and Prometheus in Azure GCC-H environment",
            "Integrated Grafana visualizations to track system health and trigger anomaly alerts"
        ],
        technologies: ["Azure GCC-H", "Icinga", "Prometheus", "Grafana"]
    },
    {
        company: "AbbVie",
        logo: "abbvie.jpg",
        role: "Grafana & Prometheus Developer",
        period: "June 2022 - March 2023",
        location: "Chicago, IL",
        achievements: [
            "Built scalable analytics pipelines to monitor enterprise EMR clusters on AWS",
            "Implemented real-time anomaly detection ensuring compliance in FDA-regulated systems"
        ],
        technologies: ["AWS", "Prometheus", "Grafana", "EMR", "FDA Compliance"]
    }
];

// Certifications Data
const certifications = [
    {
        name: "AWS Certified Machine Learning – Specialty",
        code: "MLS-C01",
        period: "2025 - 2028",
        logo: "aws.webp",
        color: "orange"
    },
    {
        name: "AWS Solutions Architect Professional",
        code: "SAP-C02",
        period: "2024 - 2027",
        logo: "aws.webp",
        color: "orange"
    },
    {
        name: "Microsoft Azure Solutions Architect Expert",
        code: "AZ-305",
        period: "2022 - 2024",
        logo: "azure.png",
        color: "blue"
    },
    {
        name: "Microsoft Azure Administrator Associate",
        code: "AZ-104",
        period: "2021 - 2024",
        logo: "azure.png",
        color: "blue"
    },
    {
        name: "Certified Kubernetes Application Developer",
        code: "CKAD",
        period: "2021 - 2024",
        icon: "container",
        color: "purple"
    }
];

// Education Data
const education = [
    {
        degree: "Ph.D. in Systems Engineering & AI",
        school: "Worcester Polytechnic Institute",
        logo: "wpi.png",
        period: "2026 - 2029",
        status: "upcoming",
        program: "Draper Scholar Program",
        description: "Advanced research in AI systems engineering, focusing on production-scale ML deployments and trustworthy AI for defense applications."
    },
    {
        degree: "M.S. in Electrical & Computer Engineering",
        school: "Worcester Polytechnic Institute",
        logo: "wpi.png",
        period: "2024 - 2025",
        status: "current",
        program: "Draper Scholar Program",
        description: "Specialized in machine learning systems, LLM deployment, and AI/ML infrastructure for enterprise applications."
    },
    {
        degree: "B.S. in Electrical & Computer Engineering",
        school: "Worcester Polytechnic Institute",
        logo: "wpi.png",
        period: "2021 - 2024",
        status: "completed",
        program: null,
        description: "Foundation in computer systems, digital design, and early exposure to machine learning and AI technologies."
    }
];

// Projects Data
const projects = [
    {
        title: "IBM watsonX Orchestrate Template",
        description: "Complete template for developing IBM watsonX Orchestrate agents and tools with Application Development Kit (ADK). Provides a foundation for building enterprise AI workflows and automation tools.",
        technologies: ["IBM watsonX", "Orchestrate", "ADK", "AI Workflows", "Enterprise Integration"],
        github: "https://github.com/krishpatel1077/ibm-watsonx-orchestrate-template",
        type: "Enterprise AI",
        featured: true
    },
    {
        title: "SEMP Requirements Debt Analyzer",
        description: "AI agent for analyzing requirements debt in Systems Engineering Management Plans. Leverages machine learning to identify technical debt patterns and provide actionable insights for engineering teams.",
        technologies: ["Python", "Machine Learning", "NLP", "Requirements Analysis", "Technical Debt"],
        github: "https://github.com/krishpatel1077/semp-rq-debt-analyzer",
        type: "AI Analysis",
        featured: true
    }
];

// Technical Skills organized by category
const technicalSkills = {
    ml: ["Python", "PyTorch", "scikit-learn", "XGBoost", "Claude 4 Opus", "LLM Fine-tuning"],
    cloud: ["AWS SageMaker", "AWS Bedrock", "AWS Lambda", "IBM Cloud", "WatsonX Orchestrate", "Azure ML", "MLOps"],
    infrastructure: ["Docker", "Kubernetes", "Terraform", "CI/CD", "Git"],
    monitoring: ["Prometheus", "Grafana", "Observability", "Anomaly Detection"]
};

// Initialize Experience Cards
function initializeExperience() {
    const experienceGrid = document.getElementById('experience-grid');
    
    const experienceHTML = experiences.map(exp => `
        <div class="experience-card">
            <div class="flex items-start justify-between mb-4">
                <div class="flex items-center">
                    <div class="company-logo-container mr-4">
                        <img src="${exp.logo}" alt="${exp.company} logo" class="company-logo" />
                    </div>
                    <div>
                        <h3 class="text-xl font-bold text-white mb-1">${exp.role}</h3>
                        <div class="text-lg font-semibold ml-gradient-text mb-2">${exp.company}</div>
                        <div class="text-sm text-gray-400">${exp.period} • ${exp.location}</div>
                    </div>
                </div>
            </div>
            
            <div class="mb-6">
                ${exp.achievements.map(achievement => `
                    <div class="flex items-start mb-3">
                        <div class="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2.5 mr-3 flex-shrink-0"></div>
                        <p class="text-gray-300 leading-relaxed">${achievement}</p>
                    </div>
                `).join('')}
            </div>
            
            <div class="flex flex-wrap gap-2">
                ${exp.technologies.map(tech => `
                    <span class="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-sm text-gray-300">
                        ${tech}
                    </span>
                `).join('')}
            </div>
        </div>
    `).join('');
    
    experienceGrid.innerHTML = experienceHTML;
}

// Initialize Certifications
function initializeCertifications() {
    const certificationsGrid = document.getElementById('certifications-grid');
    
    const certificationHTML = certifications.map(cert => `
        <div class="certification-card">
            <div class="flex items-center justify-center mb-4">
                ${cert.logo ? `
                    <div class="cert-logo-container">
                        <img src="${cert.logo}" alt="${cert.name}" class="cert-logo" />
                    </div>
                ` : `
                    <div class="cert-icon cert-${cert.color}">
                        <i data-lucide="${cert.icon}" class="w-5 h-5"></i>
                    </div>
                `}
            </div>
            <h3 class="font-semibold text-white mb-2 leading-tight">${cert.name}</h3>
            <div class="text-sm text-gray-400 mb-1">${cert.code}</div>
            <div class="text-xs text-gray-500">${cert.period}</div>
        </div>
    `).join('');
    
    certificationsGrid.innerHTML = certificationHTML;
}

// Initialize Technical Skills
function initializeTechnicalSkills() {
    // ML & AI Skills
    const mlSkillsHTML = technicalSkills.ml.map(skill => `
        <div class="skill-tag">${skill}</div>
    `).join('');
    document.getElementById('ml-skills').innerHTML = mlSkillsHTML;
    
    // Cloud & MLOps Skills
    const cloudSkillsHTML = technicalSkills.cloud.map(skill => `
        <div class="skill-tag">${skill}</div>
    `).join('');
    document.getElementById('cloud-skills').innerHTML = cloudSkillsHTML;
    
    // Infrastructure Skills
    const infraSkillsHTML = technicalSkills.infrastructure.map(skill => `
        <div class="skill-tag">${skill}</div>
    `).join('');
    document.getElementById('infra-skills').innerHTML = infraSkillsHTML;
    
    // Monitoring Skills
    const monitoringSkillsHTML = technicalSkills.monitoring.map(skill => `
        <div class="skill-tag">${skill}</div>
    `).join('');
    document.getElementById('monitoring-skills').innerHTML = monitoringSkillsHTML;
}

// Initialize Projects Carousel
function initializeProjectsCarousel() {
    const projectsContainer = document.getElementById('projects-container');
    const indicatorsContainer = document.getElementById('carousel-indicators');
    const prevButton = document.getElementById('prev-project');
    const nextButton = document.getElementById('next-project');
    
    let currentIndex = 0;
    
    // Generate project cards HTML
    const projectsHTML = projects.map((project, index) => `
        <div class="project-card flex-shrink-0 w-full">
            <div class="max-w-4xl mx-auto">
                <div class="project-card-inner">
                    <div class="flex flex-col lg:flex-row items-start gap-8">
                        <!-- Project Info -->
                        <div class="flex-1">
                            <div class="flex items-center gap-3 mb-4">
                                <span class="project-type-badge">${project.type}</span>
                                ${project.featured ? '<span class="featured-badge"><i data-lucide="star" class="w-3 h-3 mr-1"></i>Featured</span>' : ''}
                            </div>
                            
                            <h3 class="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">${project.title}</h3>
                            
                            <p class="text-gray-300 text-lg leading-relaxed mb-6">
                                ${project.description}
                            </p>
                            
                            <!-- Technologies -->
                            <div class="mb-8">
                                <h4 class="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Technologies</h4>
                                <div class="flex flex-wrap gap-2">
                                    ${project.technologies.map(tech => `
                                        <span class="tech-tag-project">${tech}</span>
                                    `).join('')}
                                </div>
                            </div>
                            
                            <!-- Action Buttons -->
                            <div class="flex flex-col sm:flex-row gap-4">
                                <a href="${project.github}" target="_blank" class="btn-primary">
                                    <i data-lucide="github" class="mr-2 w-4 h-4"></i>
                                    View on GitHub
                                </a>
                            </div>
                        </div>
                        
                        <!-- Visual Element -->
                        <div class="lg:w-80 flex-shrink-0">
                            <div class="project-visual">
                                <div class="code-preview">
                                    <div class="code-header">
                                        <div class="flex items-center space-x-2">
                                            <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                                            <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                            <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                                        </div>
                                        <span class="text-xs text-gray-400">${project.type}</span>
                                    </div>
                                    <div class="code-content">
                                        <div class="code-line"><span class="text-purple-400">const</span> <span class="text-blue-400">${project.title.toLowerCase().replace(/\s+/g, '_')}</span> <span class="text-white">=</span> {</div>
                                        <div class="code-line ml-4"><span class="text-green-400">name</span>: <span class="text-yellow-300">"${project.title}"</span>,</div>
                                        <div class="code-line ml-4"><span class="text-green-400">status</span>: <span class="text-yellow-300">"production"</span>,</div>
                                        <div class="code-line ml-4"><span class="text-green-400">tech</span>: <span class="text-yellow-300">[${project.technologies.slice(0, 2).map(t => `"${t}"`).join(', ')}]</span></div>
                                        <div class="code-line">};</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    // Generate indicators HTML
    const indicatorsHTML = projects.map((_, index) => `
        <button class="carousel-indicator ${index === 0 ? 'active' : ''}" data-index="${index}"></button>
    `).join('');
    
    // Set HTML content
    projectsContainer.innerHTML = projectsHTML;
    indicatorsContainer.innerHTML = indicatorsHTML;
    
    // Navigation functions
    function updateCarousel() {
        const translateX = -currentIndex * 100;
        projectsContainer.style.transform = `translateX(${translateX}%)`;
        
        // Update indicators
        const indicators = document.querySelectorAll('.carousel-indicator');
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
        
        // Update button states
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === projects.length - 1;
    }
    
    function nextProject() {
        if (currentIndex < projects.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    }
    
    function prevProject() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    }
    
    function goToProject(index) {
        currentIndex = index;
        updateCarousel();
    }
    
    // Event listeners
    prevButton.addEventListener('click', prevProject);
    nextButton.addEventListener('click', nextProject);
    
    // Indicator click events
    document.addEventListener('click', (e) => {
        if (e.target.matches('.carousel-indicator')) {
            const index = parseInt(e.target.dataset.index);
            goToProject(index);
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevProject();
        } else if (e.key === 'ArrowRight') {
            nextProject();
        }
    });
    
    // Initialize carousel state
    updateCarousel();
}

// Initialize Education Timeline
function initializeEducation() {
    const educationTimeline = document.getElementById('education-timeline');
    
    const educationHTML = education.map((edu, index) => `
        <div class="timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}">
            <div class="timeline-content">
                <div class="timeline-card">
                    <div class="flex items-start mb-4">
                        <div class="education-logo-container mr-4">
                            <img src="${edu.logo}" alt="${edu.school} logo" class="education-logo" />
                        </div>
                        <div class="flex-1">
                            <div class="flex items-center gap-2 mb-2">
                                <h3 class="text-xl font-bold text-white">${edu.degree}</h3>
                                <span class="status-badge status-${edu.status}">
                                    ${edu.status === 'upcoming' ? 'Upcoming' : edu.status === 'current' ? 'Current' : 'Completed'}
                                </span>
                            </div>
                            <div class="text-lg ml-gradient-text mb-1">${edu.school}</div>
                            <div class="text-sm text-gray-400 mb-2">${edu.period}</div>
                            ${edu.program ? `
                                <div class="inline-flex items-center px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-3">
                                    <i data-lucide="award" class="w-3 h-3 mr-1"></i>
                                    ${edu.program}
                                </div>
                            ` : ''}
                        </div>
                    </div>
                    <p class="text-gray-300 leading-relaxed">${edu.description}</p>
                </div>
                
                <!-- Timeline dot -->
                <div class="timeline-dot">
                    <div class="timeline-dot-inner"></div>
                </div>
            </div>
        </div>
    `).join('');
    
    educationTimeline.innerHTML = educationHTML;
}

// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    initializeExperience();
    initializeProjectsCarousel();
    initializeEducation();
    initializeCertifications();
    initializeTechnicalSkills();
    lucide.createIcons(); // Re-initialize icons after dynamic content
});
