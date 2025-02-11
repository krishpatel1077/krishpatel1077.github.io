// Initialize Lucide icons
lucide.createIcons();

// Project data
const projects = [
    {
      title: "Smart Wearable Soccer Vest",
      description: "This smart wearable tracks biometrics in soccer athletes to prevent overexertion and optimize performance.",
      image: "soccer.jpg",
      tags: ["Python", "Hardware Design", "Data Analytics", "MATLAB"],
      link: "https://digital.wpi.edu/concern/student_works/sj1395727?locale=en"
    },
    {
      title: "Customer Transaction Prediction with Machine Learning",
      description: "This project builds a binary classification model to predict whether a customer will make a transaction using Santander's anonymized behavioral data, enabling better customer engagement and retention strategies.",
      image: "santander.jpg",
      tags: ["Machine Learning", "Python", "Classification", "Predictive Modeling"],
      link: "https://github.com/krishpatel1077/cs548projects/blob/main/cs548proj2.ipynb"
    },
    {
      title: "AI-Powered Real Estate Price Prediction",
      description: "Interactive dashboard for monitoring business metrics with real-time updates and customizable visualizations.",
      image: "realestate.jpg",
      tags: ["Python", "Machine Learning", "Regression", "xAI"],
      link: "https://github.com/krishpatel1077/cs548projects/blob/main/cs548proj3.ipynb"
    },
    {
      title: "Graph-Based Link Prediction for Drug-Drug Interactions",
      description: "This project applies graph machine learning to predict missing drug-drug interactions using the ogbl-ddi dataset, aiding in drug repurposing and toxicity prediction.",
      image: "drug.jpg",
      tags: ["Python", "GNNs", "Machine Learning", "Link Prediction"],
      link: "https://github.com/krishpatel1077/cs548projects/blob/main/cs548proj4.ipynb"
    },
    {
      title: "My Personal Website!",
      description: "You're already here, take a look around!.",
      image: "website.jpg",
      tags: ["Next.js", "Web3.js", "JSON", "HTML/CSS"],
      link: "#"
    }
  ];

const skills = [
    "AWS", "Azure", "Verilog", "VHDL", "IDP", "SQL", 
    "Git", "NLP", "Docker", "DynamoDB", "REST APIs", "GraphQL"
];

let currentSlide = 0;

function initializeCarousel() {
    const carouselInner = document.getElementById('carousel-inner');
    
    // Create all slides at once
    projects.forEach((project, index) => {
        const slide = createProjectSlide(project);
        slide.classList.add('carousel-item');
        carouselInner.appendChild(slide);
    });
    
    updateIndicators();
    updateSlidePosition();
}

function updateSlidePosition() {
    const carouselInner = document.getElementById('carousel-inner');
    carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextProject() {
    currentSlide = (currentSlide + 1) % projects.length;
    updateSlidePosition();
    updateIndicators();
}

function prevProject() {
    currentSlide = (currentSlide - 1 + projects.length) % projects.length;
    updateSlidePosition();
    updateIndicators();
}

function createProjectSlide(project) {
    const slide = document.createElement('div');
    slide.innerHTML = `
        <div class="relative">
            <img src="${project.image}" 
                 alt="${project.title}" 
                 class="w-full h-[400px] object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 class="text-3xl font-bold mb-3">${project.title}</h3>
                <p class="text-lg mb-4">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.tags.map(tag => `
                        <span class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                            ${tag}
                        </span>
                    `).join('')}
                </div>
                <a href="${project.link}" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="inline-flex items-center px-4 py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors">
                    View Project <i data-lucide="external-link" class="ml-2"></i>
                </a>
            </div>
        </div>
    `;
    return slide;
}

// Function to update carousel indicators
function updateIndicators() {
    const indicatorsHTML = projects.map((_, index) => `
        <button onclick="setProject(${index})"
                class="w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-indigo-600' : 'bg-gray-300 hover:bg-gray-400'
                }"
                aria-label="Go to project ${index + 1}">
        </button>
    `).join('');
    
    document.getElementById('carousel-indicators').innerHTML = indicatorsHTML;
}

function setProject(index) {
    currentSlide = index;
    updateSlidePosition();
    updateIndicators();
}

// Initialize skills grid
function initializeSkills() {
    const skillsHTML = skills.map(skill => `
        <div class="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <p class="text-center font-medium text-gray-800">${skill}</p>
        </div>
    `).join('');
    
    document.getElementById('skills-grid').innerHTML = skillsHTML;
}

// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Auto-advance carousel
setInterval(nextProject, 5000);

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    initializeCarousel();
    initializeSkills();
});