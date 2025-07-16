"use client";
import { useRouter } from "next/navigation";


export default function RegisteredCases() {
    const router = useRouter();

    const cases = [
        {
            caseId: "DEL2022C019",
            title: "Shanta Bai vs Iqbal Mullani",
            officer: "Inspector Rajeev Mehra",
            type: "Criminal",
            status: "Closed",
            location: "South Delhi",
            year: "2022",
        },
        {
            caseId: "DEL2021C005",
            title: "Ramesh Kumar vs RTO Delhi",
            officer: "Inspector Sunita Rao",
            type: "Civil",
            status: "Open",
            location: "East Delhi",
            year: "2021",
        },
        {
            caseId: "DEL2023C012",
            title: "Sunil Dutt vs Raj Motors",
            officer: "ACP Neha Sharma",
            type: "Civil",
            status: "In Progress",
            location: "North Delhi",
            year: "2023",
        },
        {
            caseId: "DEL2020C098",
            title: "Meera vs Akash Yadav",
            officer: "Inspector Raghav Singh",
            type: "Criminal",
            status: "Closed",
            location: "Central Delhi",
            year: "2020",
        },
        {
            caseId: "DEL2019C034",
            title: "Seema Devi vs Suresh Lal",
            officer: "SI Poonam Chauhan",
            type: "Domestic",
            status: "Open",
            location: "West Delhi",
            year: "2019",
        },
        {
            caseId: "DEL2024C044",
            title: "Mohit Rana vs City Mall",
            officer: "Inspector Varun Batra",
            type: "Civil",
            status: "Closed",
            location: "North West Delhi",
            year: "2024",
        },
        {
            caseId: "DEL2023C057",
            title: "Arjun Kapoor vs Ashok Verma",
            officer: "Inspector Nandini Gupta",
            type: "Criminal",
            status: "In Progress",
            location: "New Delhi",
            year: "2023",
        },
        {
            caseId: "DEL2022C066",
            title: "Karuna vs Jatin Builders",
            officer: "ACP Rohit Shetty",
            type: "Civil",
            status: "Open",
            location: "South West Delhi",
            year: "2022",
        },
        {
            caseId: "DEL2020C077",
            title: "Rajpal vs DTC",
            officer: "Inspector Amit Joshi",
            type: "Civil",
            status: "Closed",
            location: "East Delhi",
            year: "2020",
        },
        {
            caseId: "DEL2021C082",
            title: "Rekha Sharma vs Neeraj Traders",
            officer: "SI Rekha Sinha",
            type: "Criminal",
            status: "Open",
            location: "North East Delhi",
            year: "2021",
        },
        {
            caseId: "DEL2023C099",
            title: "Yash Mehta vs Delhi Metro",
            officer: "Inspector Harsh Vardhan",
            type: "Civil",
            status: "Closed",
            location: "Central Delhi",
            year: "2023",
        },
        {
            caseId: "DEL2024C107",
            title: "Sneha vs Neeraj Singh",
            officer: "Inspector Vandana Kapoor",
            type: "Domestic",
            status: "In Progress",
            location: "South Delhi",
            year: "2024",
        },
        {
            caseId: "DEL2019C011",
            title: "Ankush vs Vishal Traders",
            officer: "ACP Manoj Tiwari",
            type: "Criminal",
            status: "Closed",
            location: "New Delhi",
            year: "2019",
        },
        {
            caseId: "DEL2020C013",
            title: "Ritika vs Food India Pvt Ltd",
            officer: "Inspector Priya Rawat",
            type: "Civil",
            status: "Open",
            location: "North Delhi",
            year: "2020",
        },
        {
            caseId: "DEL2021C018",
            title: "Gopal Das vs Asha Singh",
            officer: "SI Dinesh Kumar",
            type: "Criminal",
            status: "Closed",
            location: "West Delhi",
            year: "2021",
        },
    ];


    return (
        <>

            <table className="w-full xl:p-20">
                {/* Table Header */}
                <thead>
                    <tr className="flex flex-row justify-evenly w-full font-semibold bg-purple-200 p-6 rounded-lg">
                     
                        <th className="w-1/6 text-left">Case ID</th>
                        <th className="w-1/4 text-left">Title</th>
                        <th className="w-1/4 text-left">Assigned To</th>
                        <th className="w-1/6 text-left">Type</th>
                        <th className="w-1/6 text-left">Status</th>
                        <th className="w-1/6 text-left">Location</th>
                        <th className="w-1/12 text-left">Year</th>
                    </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                    {cases.map((item, index) => (
                        <tr key={index} className="flex flex-row justify-evenly w-full border-b p-4" onClick={() => router.push(`/crimedetails?case=${item.title}`)}>
               
                            <td className="w-1/6">{item.caseId}</td>
                            <td className="w-1/4">{item.title}</td>
                            <td className="w-1/4">{item.officer}</td>
                            <td className="w-1/6">{item.type}</td>
                            <td className="w-1/6">{item.status}</td>
                            <td className="w-1/6">{item.location}</td>
                            <td className="w-1/12">{item.year}</td>
                        </tr>
                    ))}


                </tbody>
            </table>




        </>
    )
}