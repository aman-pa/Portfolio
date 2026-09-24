import fs from 'fs';

const pdfContent = `%PDF-1.4
1 0 obj <</Type /Catalog /Pages 2 0 R>> endobj
2 0 obj <</Type /Pages /Kids [3 0 R] /Count 1>> endobj
3 0 obj <</Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources <</Font <</F1 5 0 R>>>>>> endobj
4 0 obj <</Length 550>>
stream
BT
/F1 20 Tf
50 730 Td
(AMAN PANDEY) Tj
0 -22 Td
/F1 11 Tf
(Email: amanpandey10a3@gmail.com | Mobile: +91-9905784345) Tj
0 -15 Td
(LinkedIn: linkedin.com/in/amanpandey- | GitHub: github.com/aman-pa) Tj
0 -25 Td
(EDUCATION:) Tj
0 -15 Td
(Lovely Professional University - B.Tech in CSE | CGPA: 8.88 | 2024-Present) Tj
0 -15 Td
(Chinmaya Vidyalaya South Park - Intermediate | 71.8% | 2023-2024) Tj
0 -25 Td
(PROJECTS:) Tj
0 -15 Td
(* MedRemind - Medicine Reminder App (Node, Express, React, PostgreSQL, MongoDB)) Tj
0 -15 Td
(* SanitizeQ Hygiene Management - Washroom System (Node, Express, PostgreSQL)) Tj
0 -15 Td
(* Climate Systems Collapsing - Interactive Environmental Web App (HTML, CSS, JS)) Tj
0 -25 Td
(TRAINING & CERTIFICATES:) Tj
0 -15 Td
(* CipherSchools Full-Stack Development Training (Jun 2026 - Aug 2026)) Tj
0 -15 Td
(* Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate) Tj
0 -15 Td
(* Nasscom Full Stack Web Development with MERN Stack) Tj
0 -15 Td
(* Deloitte Data Analytics Job Simulation) Tj
0 -25 Td
(ACHIEVEMENTS:) Tj
0 -15 Td
(* Solved 300+ DSA problems on LeetCode) Tj
0 -15 Td
(* 5-Star Gold Badge in C++ on HackerRank) Tj
ET
endstream
endobj
5 0 obj <</Type /Font /Subtype /Type1 /BaseFont /Helvetica>> endobj
xref
0 6
0000000000 65535 f 
0000000010 00000 n 
0000000060 00000 n 
0000000117 00000 n 
0000000230 00000 n 
0000000830 00000 n 
trailer <</Size 6 /Root 1 0 R>>
startxref
900
%%EOF`;

fs.writeFileSync('./public/Aman_Pandey_Resume.pdf', pdfContent);
console.log('Resume PDF updated successfully in public/Aman_Pandey_Resume.pdf');
