// ROAB ARG Website - Canon Data
// Phase 1: Normal public-facing ROAB website
// Phase 2: Triggered by password access to THE GAP archive

// ===== CANONICAL PERSONNEL DATABASE =====

const personnelDatabase = [
    {
        fullName: "Ivo Newton",
        role: "Senior Researcher",
        department: "Behavioral Analysis",
        status: "ACTIVE",
        fileId: "PERS-1985-042",
        dateEmployed: "1985-03-10",
        clearance: "Level 4"
    },
    {
        fullName: "Emily Enferd",
        role: "Research Assistant",
        department: "Data Management",
        status: "ACTIVE",
        fileId: "PERS-1985-089",
        dateEmployed: "1985-09-01",
        clearance: "Level 2"
    },
    {
        fullName: "Matteo Simmons",
        role: "Head of Security",
        department: "Security & Containment",
        status: "ACTIVE",
        fileId: "PERS-1980-015",
        dateEmployed: "1980-05-15",
        clearance: "Level 5"
    },
    {
        fullName: "Dr. Sarah Voss",
        role: "Research Scientist",
        department: "Biological Research",
        status: "ACTIVE",
        fileId: "PERS-1975-031",
        dateEmployed: "1975-06-20",
        clearance: "Level 3"
    },
    {
        fullName: "Dr. Marcus Webb",
        role: "Research Coordinator",
        department: "Phenomenology",
        status: "ACTIVE",
        fileId: "PERS-1982-008",
        dateEmployed: "1982-01-10",
        clearance: "Level 3"
    },
    {
        fullName: "James Caldwell",
        role: "Field Operations Director",
        department: "Field Operations",
        status: "ACTIVE",
        fileId: "PERS-1978-044",
        dateEmployed: "1978-11-03",
        clearance: "Level 4"
    },
    {
        fullName: "Dr. Helena Price",
        role: "Department Head",
        department: "Behavioral Analysis",
        status: "ACTIVE",
        fileId: "PERS-1968-015",
        dateEmployed: "1968-01-05",
        clearance: "Level 5"
    },
    {
        fullName: "David Torres",
        role: "Facility Manager",
        department: "Security & Containment",
        status: "ACTIVE",
        fileId: "PERS-1981-052",
        dateEmployed: "1981-04-12",
        clearance: "Level 3"
    }
];

// ===== PUBLIC ARCHIVE ENTRIES =====

const archiveEntries = [
    {
        title: "Behavioral Study 1952 - Foundational Report",
        category: "RESEARCH",
        fileId: "ARC-1952-001",
        date: "1952-08-10",
        restricted: false,
        content: `BEHAVIORAL STUDY PRELIMINARY REPORT

FILE ID: ARC-1952-001
DATE: 1952-08-10
CLASSIFICATION: OPEN
CATEGORY: FOUNDATIONAL RESEARCH

This document contains preliminary observations regarding abnormal behavioral patterns in test subjects under controlled conditions.

All subjects exhibited consistent responses to controlled stimuli.
Results indicate patterns consistent with established psychological models.
Biological response variations noted and documented.

CONCLUSION:
No anomalies detected in this phase of research. Standard behavioral theory applies to all documented cases.

Prepared by: Research Team
Department: Behavioral Analysis`
    },
    {
        title: "Personnel Records Database Index",
        category: "ADMINISTRATIVE",
        fileId: "ARC-1985-023",
        date: "1985-03-15",
        restricted: false,
        content: `PERSONNEL DATABASE INDEX

FILE ID: ARC-1985-023
DATE: 1985-03-15
CLASSIFICATION: INTERNAL

ROAB maintains personnel records for all current and past employees. Individual files contain:

- Full name and identification
- Department assignment
- Employment date
- Current status
- Clearance level
- Assignment history
- Performance evaluations

All personnel records are maintained in accordance with internal protocols.
Access to individual records is restricted to authorized personnel only.

For detailed information on specific employees, submit request through proper channels.`
    },
    {
        title: "Archive Index - Standard Collections",
        category: "ADMINISTRATIVE",
        fileId: "ARC-1990-001",
        date: "1990-01-01",
        restricted: false,
        content: `ARCHIVE INDEX - PUBLIC COLLECTIONS

FILE ID: ARC-1990-001
DATE: 1990-01-01
CLASSIFICATION: OPEN

The following archive collections are available through public access:

- Foundational Behavioral Research (1952-1990)
- Field Investigation Reports (Declassified)
- Biographical Research Documentation
- Administrative Documentation
- Historical Organization Records
- Research Program Summaries

RESTRICTED COLLECTIONS:

The following collections require appropriate authorization:

- Current Active Research Files
- Ongoing Investigation Records
- Personnel Security Files
- Sensitive Phenomenological Data

Access requests for restricted archives should be submitted through official channels with proper justification and clearance documentation.

Maintained by: Data Management Department`
    },
    {
        title: "THE GAP",
        category: "RESTRICTED",
        fileId: "ARC-1990-SEALED",
        date: "[UNKNOWN]",
        restricted: true,
        requiresPassword: true,
        password: "NEWTON",
        content: null
    }
];

// ===== INITIALIZATION =====

document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    loadPersonnelDatabase();
    loadArchives();
    setupModals();
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
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
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
            <div class="personnel-name">${person.fullName}</div>
            <div class="personnel-role">${person.role} | ${person.department}</div>
            <span class="personnel-status">${person.status}</span>
        `;
        
        item.addEventListener('click', () => {
            showPersonnelDetail(person);
        });
        
        personnelList.appendChild(item);
    });
}

function showPersonnelDetail(person) {
    const modal = document.getElementById('documentModal');
    const container = document.getElementById('documentContainer');
    
    let content = `PERSONNEL FILE

FULL NAME: ${person.fullName}
POSITION: ${person.role}
DEPARTMENT: ${person.department}
EMPLOYED: ${person.dateEmployed}
CLEARANCE LEVEL: ${person.clearance}
STATUS: ${person.status}

Standard employment record maintained in accordance with ROAB personnel protocols.`;
    
    container.innerHTML = `
        <div class="document-header">
            <div class="document-title">${person.fullName}</div>
            <div class="document-meta">
                <div>File ID: ${person.fileId}</div>
                <div>Date Employed: ${person.dateEmployed}</div>
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
        document.getElementById('passwordModal').style.display = 'none';
        revealPhase2();
    } else {
        error.textContent = 'AUTHORIZATION FAILED';
        error.style.display = 'block';
    }
}

// ===== PHASE 2 - RESTRICTED ACCESS GRANTED =====

function revealPhase2() {
    const nav = document.getElementById('mainNav');
    const newNav = `
        <ul class="nav-list">
            <li><a href="#" data-section="about">ABOUT</a></li>
            <li><a href="#" data-section="departments">DEPARTMENTS</a></li>
            <li><a href="#" data-section="research">RESEARCH</a></li>
            <li><a href="#" data-section="personnel">PERSONNEL</a></li>
            <li><a href="#" data-section="contact">CONTACT</a></li>
            <li><a href="#" data-section="archives">ARCHIVES</a></li>
            <li style="border-left: 1px solid #00aa00; margin-left: 15px; padding-left: 15px;">[TRIALS]</li>
            <li style="color: #ff5555; font-weight: 700;">[INCIDENT REPORTS]</li>
        </ul>
    `;
    nav.innerHTML = newNav;
    initializeNavigation();
    
    const modal = document.getElementById('documentModal');
    const container = document.getElementById('documentContainer');
    
    container.innerHTML = `
        <div class="document-header">
            <div class="document-title">AUTHORIZATION GRANTED</div>
            <div class="document-meta">
                <div>Status: RESTRICTED ACCESS ENABLED</div>
                <div>Timestamp: [CURRENT]</div>
            </div>
        </div>
        <div class="document-content">You have gained access to restricted ROAB archives.

The following materials are now available:

- TRIALS DATABASE
- THE GAP RECORDS
- INCIDENT REPORTS
- CLASSIFIED RESEARCH FILES
- ANOMALY DOCUMENTATION

Proceed with investigation.

--- SYSTEM NOTICE ---

WARNING: Some records may contain inconsistent information.
All records are maintained as documented.
Cross-reference carefully.

Access is logged.</div>
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

// ===== RARE ANOMALIES =====

function scheduleAnomalies() {
    setInterval(() => {
        if (Math.random() < 0.02) {
            triggerSubtleAnomaly();
        }
    }, 60000);
}

function triggerSubtleAnomaly() {
    const anomalies = [
        () => {
            const items = document.querySelectorAll('.personnel-item');
            if (items.length > 0) {
                const randomItem = items[Math.floor(Math.random() * items.length)];
                randomItem.style.opacity = '0.95';
                setTimeout(() => {
                    randomItem.style.opacity = '1';
                }, 1000);
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
    if (e.key === 'Escape') {
        document.getElementById('documentModal').style.display = 'none';
        document.getElementById('passwordModal').style.display = 'none';
    }
});