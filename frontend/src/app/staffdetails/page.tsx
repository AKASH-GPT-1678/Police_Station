import React from 'react';
import Image from 'next/image';
import Profile from '../../../assets/profile.png';

const page = () => {


  const data = [

    {
      "year": 2010,
      "position": "Sub-Inspector",
      "unit": "Delhi Police",
      "location": "South Delhi",
      "work_done": "Handled patrolling, FIRs, and local law and order.",
      "transfer": "Transferred from Training Academy to South Delhi Police Station"
    },
    {
      "year": 2013,
      "position": "Inspector",
      "unit": "Crime Branch",
      "location": "Delhi HQ",
      "work_done": "Led crime investigations and supervised cyber teams.",
      "transfer": "Transferred from South Delhi to Crime Branch HQ"
    },
    {
      "year": 2016,
      "position": "Assistant Commissioner of Police (ACP)",
      "unit": "South District",
      "location": "Delhi",
      "work_done": "Managed multiple stations and led crime control operations.",
      "transfer": "Promoted and posted to South District HQ"
    },
    {
      "year": 2019,
      "position": "Officer",
      "unit": "Intelligence Bureau",
      "location": "Delhi - Central Govt.",
      "work_done": "Handled field surveillance and national security inputs.",
      "transfer": "Deputed to Intelligence Bureau, Central Government"
    },
    {
      "year": 2022,
      "position": "Superintendent of Police (SP)",
      "unit": "Jammu Rural Zone",
      "location": "Jammu & Kashmir",
      "work_done": "Led district policing and coordinated with security forces.",
      "transfer": "Posted from Intelligence Bureau to Jammu & Kashmir Zone"
    }

  ];
  const officer = {
    name: "Inspector Rajeev Mehra",
    contact: "+91-9876543210",
    batchId: "DP2023B042",
    email: "rajeev.mehra@delhipolice.in",
    unit: "Delhi Police",
    currentPosting: "South Delhi",
    rank: "Inspector",
  };
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


  //     "year": 2024,
  //     "award": "Police Medal for Meritorious Service",
  //     "reason": "Outstanding leadership in counter-terrorism operations"
  //   }
  // ]
  return (
    <div>

      <div>

        <div className='p-4 md:p-8 flex flex-col md:flex-row gap-4'>
          <Image src={Profile} alt='profilr-image' className='w-[200px] h-[200px]' />


          <div className='flex flex-col gap-8'>
            <div className='flex flex-col gap-4'>


              <h1 className='font-bold text-2xl'>Jeremy Rose</h1>
              <p className='font-bold text-blue-500'>Head Constable</p>
            </div>

            <div className='flex flex-row gap-4'>
              <p className='bg-blue-100 text-blue-400 p-2 px-6 cursor-pointer'>Contacts</p>
              <p className='bg-red-600 p-2  text-white font-bold px-6 cursor-pointer'>Remove</p>
              <p className='bg-blue-100 text-blue-400 p-2 px-4 cursor-pointer'>5 Years of Service</p>

            </div>
            <div className='flex flex-row gap-4'>
              <button className='bg-orange-300 p-2 px-4'>Timeline</button>
              <button>Profile</button>


            </div>

          </div>


        </div>

        <div className='flex flex-col md:flex-row gap-4'>


          <div className='p-4 md:p-8 max-w-[500px] border-2'>
            <p>Work Experience</p>
            <div className='flex flex-col gap-4 p-2'>
              {data.map((item, index) => (
                <div key={index} className='flex flex-col gap-4 border-b-2'>
                  <div className='flex flex-row gap-2'>


                    <h1 className='font-bold text-lg md:text-2xl mr-2'>{item.year}</h1>
                    <p className='font-bold text-blue-500'>{item.position}</p>
                    <p className='font-bold text-blue-500'>{item.unit}</p>
                    <p className='font-bold text-blue-500'>{item.location}</p>
                  </div>

                  <p>{item.work_done}</p>

                  <p className='mb-4'>{item.transfer}</p>

                </div>
              ))}

            </div>
          </div>
          <div className="max-w-[300px]  p-6 border rounded-2xl shadow-lg bg-white">
            <h2 className="text-2xl font-bold mb-4 text-blue-800">Officer Profile</h2>
            <div className="space-y-2 text-gray-700">
              <p><strong>Name:</strong> {officer.name}</p>
              <p><strong>Contact:</strong> {officer.contact}</p>
              <p><strong>Batch ID:</strong> {officer.batchId}</p>
              <p><strong>Email:</strong> {officer.email}</p>
              <p><strong>Unit:</strong> {officer.unit}</p>
              <p><strong>Current Posting:</strong> {officer.currentPosting}</p>
              <p><strong>Rank:</strong> {officer.rank}</p>
            </div>
          </div>
          <div className="max-w-3xl p-6 border rounded-2xl shadow-lg bg-white">
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

        </div>



      </div>

    </div>
  )
}

export default page
