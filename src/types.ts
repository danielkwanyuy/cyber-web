export interface Project {
  id: string;
  title: string;
  objective: string;
  techStack: string[];
  steps: string[];
  learningOutcomes: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 'vulnerability-scanner',
    title: 'Automated Vulnerability Scanner',
    objective: 'Develop a Python-based automation tool that leverages Nmap to identify open ports, running services, and potential vulnerabilities within a local network.',
    techStack: ['Python', 'Nmap', 'python-nmap library'],
    steps: [
      'Install Nmap on your host machine and the python-nmap library via pip.',
      'Write a Python script that accepts a target IP or subnet as input.',
      'Implement a function to perform a "Service Scan" (-sV) and "Default Script Scan" (-sC).',
      'Parse the XML output from Nmap into a readable dictionary format.',
      'Export the findings (IP, Port, Service, Version) to a CSV or JSON file for reporting.'
    ],
    learningOutcomes: [
      'Network Enumeration',
      'Service Version Detection',
      'Automating CLI tools with Python',
      'Data Parsing and Reporting'
    ]
  },
  {
    id: 'packet-analyzer',
    title: 'Network Traffic Sniffer & Analyzer',
    objective: 'Build a real-time network analyzer to capture, decode, and inspect packets, focusing on identifying insecure protocols and data leaks.',
    techStack: ['Python', 'Scapy', 'Wireshark (for verification)'],
    steps: [
      'Install Scapy using pip and ensure you have administrative privileges to capture traffic.',
      'Create a script that sniffs packets on a specific network interface.',
      'Apply filters to isolate specific protocols like HTTP, DNS, or ICMP.',
      'Extract and display key fields: Source/Destination IP, MAC addresses, and Payload data.',
      'Implement a "Security Alert" feature that flags unencrypted HTTP traffic containing keywords like "password" or "user".'
    ],
    learningOutcomes: [
      'Deep Packet Inspection (DPI)',
      'Understanding the OSI Model',
      'Network Protocol Analysis',
      'Real-time Threat Detection'
    ]
  },
  {
    id: 'password-vault',
    title: 'Secure Password Vault (AES-256)',
    objective: 'Create a secure, CLI-based password manager that uses industry-standard encryption to store credentials safely on a local machine.',
    techStack: ['Python', 'Cryptography library (Fernet/AES)', 'SQLite (optional)'],
    steps: [
      'Set up a Python environment and install the cryptography library.',
      'Implement a "Master Password" system that derives an encryption key using PBKDF2.',
      'Create functions to encrypt and decrypt strings using AES-256 (Fernet).',
      'Build a simple CLI menu to Add, Retrieve, and List stored passwords.',
      'Store the encrypted data in a local file, ensuring the master key is never saved in plain text.'
    ],
    learningOutcomes: [
      'Symmetric Encryption (AES)',
      'Key Derivation Functions (KDF)',
      'Secure File I/O',
      'Cryptographic Best Practices'
    ]
  },
  {
    id: 'ssh-honeypot',
    title: 'Dockerized SSH Honeypot',
    objective: 'Deploy a decoy SSH server inside a Docker container to observe and log brute-force attack patterns from malicious actors.',
    techStack: ['Docker', 'Python', 'Paramiko library'],
    steps: [
      'Create a Python script using Paramiko that mimics a standard SSH login prompt.',
      'Configure the script to log every attempted username and password to a "captured_creds.log" file.',
      'Write a Dockerfile to containerize the honeypot, isolating it from your host system.',
      'Map a non-standard port (e.g., 2222) to the container\'s SSH port.',
      'Run the container and monitor the logs to analyze the frequency and variety of attack attempts.'
    ],
    learningOutcomes: [
      'Deception Technology',
      'Intrusion Detection Systems (IDS)',
      'Containerization for Security Isolation',
      'Analyzing Brute-Force Patterns'
    ]
  },
  {
    id: 'log-ids',
    title: 'Log-Based Intrusion Detection Tool',
    objective: 'Develop a monitoring tool that parses system logs in real-time to detect and alert on suspicious activities like multiple failed login attempts.',
    techStack: ['Python', 'Regex', 'Linux System Logs (/var/log)'],
    steps: [
      'Identify the target log file (e.g., /var/log/auth.log on Linux or Event Viewer on Windows).',
      'Use Python\'s "re" module to define patterns for "Failed password" or "Invalid user".',
      'Implement a "tail -f" like functionality to monitor the log file as it grows.',
      'Set a threshold (e.g., 5 failed attempts from the same IP) to trigger an alert.',
      'Create a dashboard view or email notification system for high-priority alerts.'
    ],
    learningOutcomes: [
      'Log Analysis & Management',
      'Pattern Matching with Regex',
      'Incident Response Basics',
      'System Monitoring Automation'
    ]
  }
];
