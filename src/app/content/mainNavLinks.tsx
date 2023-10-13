import { linksTo } from './links'

const navLinks = [
  {
    name: 'Healthcare Facilities',
    href: linksTo.facilitiesHomepage,
    subItems: [
      { name: 'Hospitals', href: linksTo.facilitiesHospitals },
      { name: 'Small structures', href: linksTo.facilitiesSmallStructures },
      { name: 'Schedule a demo', href: linksTo.facilitiesScheduleDemo },
    ],
  },
  {
    name: 'Freelancers',
    href: linksTo.freelancerHomepage,
    subItems: [
      { name: 'Advantage', href: linksTo.freelancerAdvantages },
      { name: 'Work with us', href: linksTo.freelancerWorkWithUs },
      { name: 'Testimonies', href: linksTo.freelancerTestimonies },
    ],
  },
  {
    name: 'The App',
    href: linksTo.app,
    subItems: [{ name: 'Discover', href: '#' }],
  },
  {
    name: 'FAQ',
    href: linksTo.faq,
    subItems: [
      { name: 'Freelancers', href: '#' },
      { name: 'Healthcare Facilities', href: '#' },
    ],
  },
  { name: 'About us', href: linksTo.aboutUs },
]

export { navLinks }
