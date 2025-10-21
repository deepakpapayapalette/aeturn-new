import React from 'react'
import Banner from '../../components/common/Banner'
import Regular from '../../components/reusable/Regular'
import img1 from '../../assets/images/skill-development.png'



const bannerContent = {
  // image: bannerImage,
  title: "Skill Development",
  description: "AETURN goes beyond education to empower individuals with practical skills and career-ready training initiatives."
}
const regular1Data = {
  title: "We Focus on Skill Development Because :",
  img: img1,
  paraContent: [
    {
      id: 1,
      para: "We focus on skill development to empower individuals, bridge industry gaps, and enhance employability. By providing practical training and fostering lifelong learning, we help people build future-ready skills that drive personal growth, strengthen communities, and contribute to economic progress.",
    },

  ]
}
const skillData = [
  {
    id: 1,
    title: "Empowering Individuals",
    description: "Equip people with practical skills to succeed in today's competitive job market",
    lookup_value: "empowering-individuals"
  },
  {
    id: 2,
    title: "Enhancing Employability",
    description: "Provide training that directly translates into job opportunities and career growth.",
    lookup_value: "enhancing-employability"
  },
  {
    id: 3,
    title: "Bridging the Skills Gap",
    description: "Address industry needs and make the workforce future-ready.",
    lookup_value: "bridging-skills-gap"
  },
  {
    id: 4,
    title: "Encouraging Lifelong Learning",
    description: "Foster continuous learning and adaptability in a fast-changing world",
    lookup_value: "encouraging-lifelong-learning"
  },
  {
    id: 5,
    title: "Promoting Economic Growth",
    description: "Skilled professionals contribute to stronger businesses and communities.",
    lookup_value: "promoting-economic-growth"
  },
  {
    id: 6,
    title: "Strengthening Communities",
    description: "Empower individuals to uplift families and local economies through skills",
    lookup_value: "strengthening-communities"
  }
];

const SkillDevelopment = () => {
  return (
    <>
      <Banner data={bannerContent} />
      <Regular data={regular1Data} />

      <div className='space-top container'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 lg:gap-8 gap-6'>
          {skillData.map((item, index) => (
            <div
              key={item?.id || index}
              className="domain-card bg-white text-gray-800 rounded-xl p-6 shadow-md flex flex-col justify-between border border-gray-300 hover:shadow-lg transition-shadow duration-300"
            >
              <div className='text-center'>
                <h3 className="md:text-2xl font-semibold text-webprimary mb-2">
                  {item?.title}
                </h3>
                <p className="text-md mb-4">{item?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default SkillDevelopment

