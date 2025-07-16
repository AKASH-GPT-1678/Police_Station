// components/OfficerCases.tsx

import React from 'react';

const cases = [
  {
    title: "Shatabai vs Iqbal Mullani",
    caseId: "DEL2022C019",
    type: "Criminal",
    status: "Closed",
    location: "South Delhi",
    year: 2022,
  },
  {
    title: "Gurgaon Highway Theft",
    caseId: "GUR2023C076",
    type: "Robbery",
    status: "Ongoing",
    location: "Gurgaon Sector 25",
    year: 2023,
  },
  {
    title: "Missing Person - Aarav Gupta",
    caseId: "DEL2021M003",
    type: "Missing",
    status: "Solved",
    location: "New Delhi",
    year: 2021,
  },
];

export default function OfficerCases() {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 border rounded-2xl shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">Cases Worked On</h2>
      <ul className="space-y-4">
        {cases.map((caseItem, index) => (
          <li key={index} className="p-4 border rounded-xl bg-gray-50 hover:bg-gray-100 transition">
            <p><strong>Title:</strong> {caseItem.title}</p>
            <p><strong>Case ID:</strong> {caseItem.caseId}</p>
            <p><strong>Type:</strong> {caseItem.type}</p>
            <p><strong>Status:</strong> {caseItem.status}</p>
            <p><strong>Location:</strong> {caseItem.location}</p>
            <p><strong>Year:</strong> {caseItem.year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
