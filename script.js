// ROAB ARG Website - Script
// Phase 1: Normal public website
// Phase 2: Anomaly discovery begins with Newton

// ===== DATA =====

const personnelDatabase = [
    {
        name: "Dr. James Newton",
        role: "Senior Researcher",
        department: "Anomaly Research",
        status: "ACTIVE",
        fileId: "PERS-1985-042",
        date: "1985-03-10"
    },
    {
        name: "Dr. Helen Athena",
        role: "Department Head",
        department: "Behavioral Psychology",
        status: "ACTIVE",
        fileId: "PERS-1968-015",
        date: "1968-01-05"
    },
    {
        name: "Dr. Marcus Fate",
        role: "Research Coordinator",
        department: "Case Analysis",
        status: "ACTIVE",
        fileId: "PERS-1975-031",
        date: "1975-06-20"
    },
    {
        name: "Dr. Robert Professor",
        role: "Chief Researcher",
        department: "Anomaly Research",
        status: "ACTIVE",
        fileId: "PERS-1952-001",
        date: "1952-07-15"
    },
    {
        name: "Emily Chen",
        role: "Research Assistant",
        department: "Data Management",
        status: "ACTIVE",
        fileId: "PERS-1985-089",
        date: "1985-09-01"
    }
];

const archiveEntries = [
    {
        title: "Behavioral Study 1952",
        category: "RESEARCH",
        fileId: "ARC-1952-001",
        date: "1952-08-10",
        restricted: false,
        content: `BEHAVIOURAL STUDY PRELIMINARY REPORT

FILE ID: ARC-1952-001
DATE: 1952-08-10
CLASSIFICATION: OPEN

This document contains preliminary observations regarding abnormal behavioral patterns in test subjects.

All subjects exhibited consistent responses to controlled stimuli.
Results indicate patterns consistent with established psychological models.

No anomalies detected in this phase of research.

Prepared by: Dr. Robert Professor`
    },
    {
        title: "Personnel Records - Newton",
        category: "PERSONNEL",
        fileId: "ARC-1985-023",
        date: "1985-03-15",
        restricted: false,
        content: `PERSONNEL FILE

FULL NAME: Dr. James Newton
POSITION: Senior Researcher
DEPARTMENT: Anomaly Research
EMPLOYED: 1985-03-10
STATUS: ACTIVE

Dr. Newton joined ROAB in March 1985.
Specialization: Behavioral anomalies and psychological phenomena.
Clearance Level: 4

No incidents reported.
Standard performance reviews submitted.

Current Assignment: Anomaly Research Division`
    },
    {
        title: "Archive Index",
        category: "ADMINISTRATIVE",
        fileId: "ARC-1990-001",
        date: "1990-01-01",
        restricted: false,
        content: `ARCHIVE INDEX - STANDARD ENTRIES

FILE ID: ARC-1990-001
DATE: 1990-01-01

The following archives are available through the public database:

- Behavioral Research (1952-Present)
- Personnel Records (Standard)
- Research Documentation
- Administrative Reports
- Historical Records

For restricted archives, proper authorization is required.

Access requests should be submitted through official channels.`
    },
    {
        title: "THE GAP",
        category: "RESTRICTED",
        fileId: "ARC-1990-SEALED",
        date: "UNKNOWN",
        restricted: true,
        requiresPassword: true,
        password: "NEWTON",
        content: null // Will be revealed after password
    }
];

// ===== INITIALIZATION =====

document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    loadPersonnelDatabase();
    loadArchives();
    setupModals();
    
    // Rare dynamic changes for ARG immersion
    scheduleAnomalies();
});

// ===== NAVIGATION =====

function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-list a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            showSection(section);
        });
    });
}

function showSection(sectionName) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    const selectedSection = document.getElementById(sectionName + '-section');
    if (selectedSection) {
        selectedSection.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// ===== PERSONNEL DATABASE =====

function loadPersonnelDatabase() {
    const personnelList = document.getElementById('personnelList');
    personnelList.innerHTML = '';
    
    personnelDatabase.forEach(person => {
        const item = document.createElement('div');
        item.className = 'personnel-item';
        item.innerHTML = `
            <div class="personnel-name">${person.name}</div>
            <div class="personnel-role">${person.role} | ${person.department}</div>
            <span class="personnel-status">${person.status}</span>
        `;
        
        item.addEventListener('click', () => {
            // If clicking Newton, show both normal and anomalous versions
            if (person.name.includes('Newton')) {
                showPersonnelDetail(person);
            } else {
                showPersonnelDetail(person);
            }
        });
        
        personnelList.appendChild(item);
    });
}

function showPersonnelDetail(person) {
    const modal = document.getElementById('documentModal');
    const container = document.getElementById('documentContainer');
    
    // Build personnel document
    let content = `PERSONNEL FILE

FULL NAME: ${person.name}
ROLE: ${person.role}
DEPARTMENT: ${person.department}
FILE ID: ${person.fileId}
DATE FILED: ${person.date}
STATUS: ${person.status}

Standard employment record.`;
    
    // Special case for Newton - hint at the anomaly
    if (person.name.includes('Newton')) {
        content += `

--- ADDITIONAL NOTE ---

Note: Personnel database shows Newton status as ACTIVE.
However, cross-reference check detected additional records.
Verify against supplementary archives.

System message: Multiple records exist for this individual.`;
    }
    
    container.innerHTML = `
        <div class="document-header">
            <div class="document-title">${person.name} - Personnel File</div>
            <div class="document-meta">
                <div>File ID: ${person.fileId}</div>
                <div>Date: ${person.date}</div>
            </div>
        </div>
        <div class="document-content">${content}</div>
    `;
    
    modal.style.display = 'flex';
}

// ===== ARCHIVES =====

function loadArchives() {
    const archivesList = document.getElementById('archivesList');
    archivesList.innerHTML = '';
    
    archiveEntries.forEach(entry => {
        const item = document.createElement('div');
        item.className = 'archive-item';
        
        let html = `
            <div class="archive-title">${entry.title}</div>
            <div class="archive-meta">
                <div>File: ${entry.fileId}</div>
                <div>Date: ${entry.date}</div>
                <div>Category: ${entry.category}</div>
            </div>
        `;
        
        if (entry.restricted) {
            html += `<div class="archive-restricted">[ AUTHORIZATION REQUIRED ]</div>`;
        }
        
        item.innerHTML = html;
        
        if (entry.restricted) {
            item.addEventListener('click', () => {
                showPasswordPrompt(entry);
            });
        } else {
            item.addEventListener('click', () => {
                showArchiveDocument(entry);
            });
        }
        
        archivesList.appendChild(item);
    });
}

function showArchiveDocument(entry) {
    const modal = document.getElementById('documentModal');
    const container = document.getElementById('documentContainer');
    
    container.innerHTML = `
        <div class="document-header">
            <div class="document-title">${entry.title}</div>
            <div class="document-meta">
                <div>File ID: ${entry.fileId}</div>
                <div>Date: ${entry.date}</div>
                <div>Category: ${entry.category}</div>
            </div>
        </div>
        <div class="document-content">${entry.content}</div>
    `;
    
    modal.style.display = 'flex';
}

// ===== PASSWORD SYSTEM =====

function showPasswordPrompt(entry) {
    const modal = document.getElementById('passwordModal');
    const input = document.getElementById('passwordInput');
    const error = document.getElementById('passwordError');
    
    input.value = '';
    error.style.display = 'none';
    modal.style.display = 'flex';
    input.focus();
    
    document.getElementById('passwordSubmit').onclick = () => {
        checkPassword(entry, input.value);
    };
    
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkPassword(entry, input.value);
        }
    });
    
    document.getElementById('passwordCancel').onclick = () => {
        modal.style.display = 'none';
    };
}

function checkPassword(entry, input) {
    const error = document.getElementById('passwordError');
    
    if (input.toUpperCase() === entry.password) {
        // Correct password - reveal Phase 2 content
        document.getElementById('passwordModal').style.display = 'none';
        revealPhase2();
    } else {
        error.textContent = 'AUTHORIZATION FAILED';
        error.style.display = 'block';
    }
}

// ===== PHASE 2 - ANOMALY REVELATION =====

function revealPhase2() {
    // Update navigation with new sections
    const nav = document.getElementById('mainNav');
    const newNav = `
        <ul class="nav-list">
            <li><a href="#" data-section="about">ABOUT</a></li>
            <li><a href="#" data-section="departments">DEPARTMENTS</a></li>
            <li><a href="#" data-section="research">RESEARCH</a></li>
            <li><a href="#" data-section="personnel">PERSONNEL</a></li>
            <li><a href="#" data-section="contact">CONTACT</a></li>
            <li><a href="#" data-section="archives">ARCHIVES</a></li>
            <li style="color: #ff5555; font-weight: 700;">[TRIALS]</li>
            <li style="color: #ff5555; font-weight: 700;">[THE GAP]</li>
            <li style="color: #ff5555; font-weight: 700;">[INCIDENT REPORTS]</li>
        </ul>
    `;
    nav.innerHTML = newNav;
    initializeNavigation();
    
    // Show revelation document
    showPhase2Document();
}

function showPhase2Document() {
    const modal = document.getElementById('documentModal');
    const container = document.getElementById('documentContainer');
    
    container.innerHTML = `
        <div class="document-header">
            <div class="document-title">AUTHENTICATION GRANTED</div>
            <div class="document-meta">
                <div>File ID: INTERNAL-ROAB</div>
                <div>Date: [CURRENT]</div>
            </div>
        </div>
        <div class="document-content">ACCESS TO RESTRICTED ARCHIVE GRANTED.

The following materials are now available:

- TRIALS DATABASE
- THE GAP RECORDS
- INCIDENT REPORTS
- CLASSIFIED PERSONNEL FILES
- ANOMALY DOCUMENTATION

You have discovered Phase 2 of the ROAB archive system.

Proceed with investigation.

--- SYSTEM NOTICE ---

WARNING: Some records may contain contradictory information.
This is not an error.
All records are accurate to their respective contexts.

Investigate carefully.</div>
    `;
    
    modal.style.display = 'flex';
}

// ===== MODALS =====

function setupModals() {
    const modals = document.querySelectorAll('.modal');
    const closeBtn = document.getElementById('modalClose');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            document.getElementById('documentModal').style.display = 'none';
        });
    }
    
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
}

// ===== ANOMALIES - RARE DYNAMIC CHANGES =====

function scheduleAnomalies() {
    // Rare chance of anomalies appearing
    // This creates the sense that the website itself is affected
    
    // Every few minutes, possibly change something subtle
    setInterval(() => {
        if (Math.random() < 0.02) { // 2% chance
            triggerSubtleAnomaly();
        }
    }, 60000); // Check every minute
}

function triggerSubtleAnomaly() {
    const anomalies = [
        () => {
            // Change a personnel record slightly
            const items = document.querySelectorAll('.personnel-item');
            if (items.length > 0) {
                const randomItem = items[Math.floor(Math.random() * items.length)];
                // Add a very subtle visual glitch
                randomItem.style.opacity = '0.95';
                setTimeout(() => {
                    randomItem.style.opacity = '1';
                }, 1000);
            }
        },
        () => {
            // Subtle text change
            const footer = document.querySelector('.footer-text');
            if (footer) {
                const original = footer.textContent;
                footer.textContent = 'RECORDS INCONSISTENCY DETECTED - SYSTEM RESOLVING';
                setTimeout(() => {
                    footer.textContent = original;
                }, 2000);
            }
        }
    ];
    
    if (anomalies.length > 0) {
        const selectedAnomaly = anomalies[Math.floor(Math.random() * anomalies.length)];
        selectedAnomaly();
    }
}

// ===== SEARCH FUNCTIONALITY =====

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('personnelSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const query = e.target.value.toLowerCase();
            const items = document.querySelectorAll('.personnel-item');
            
            items.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(query)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
});

// ===== KEYBOARD SHORTCUTS =====

document.addEventListener('keydown', function(e) {
    // ESC to close modals
    if (e.key === 'Escape') {
        document.getElementById('documentModal').style.display = 'none';
        document.getElementById('passwordModal').style.display = 'none';
    }
});