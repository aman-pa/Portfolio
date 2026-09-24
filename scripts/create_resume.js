import fs from 'fs';

const pdfContent = `%PDF-1.4
1 0 obj <</Type /Catalog /Pages 2 0 R>> endobj
2 0 obj <</Type /Pages /Kids [3 0 R] /Count 1>> endobj
3 0 obj <</Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources <</Font <</F1 5 0 R>>>>>> endobj
4 0 obj <</Length 350>>
stream
BT
/F1 22 Tf
50 720 Td
(AMAN PANDEY - RESUME) Tj
0 -25 Td
/F1 12 Tf
(B.Com (Hons.) Student | Aspiring Data Analyst & Full Stack Developer) Tj
0 -20 Td
(Ramjas College, University of Delhi | New Delhi, India) Tj
0 -30 Td
(EDUCATION: Ramjas College, DU (2025-2028) | Chinmaya Vidyalaya) Tj
0 -20 Td
(SKILLS: Python, C, C++, JS, React, Next.js, Node.js, Express, MongoDB, SQL) Tj
0 -20 Td
(PROJECTS: Next.js University Portal, Climate Viz, MedRemind Tracker) Tj
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
0000000630 00000 n 
trailer <</Size 6 /Root 1 0 R>>
startxref
700
%%EOF`;

fs.writeFileSync('./public/Aman_Pandey_Resume.pdf', pdfContent);
console.log('Successfully generated Aman_Pandey_Resume.pdf!');
