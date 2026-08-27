/**
 * Awards & recognition earned by Konnections IMAG.
 *
 * Each entry pairs an award image (in /public/awards-v2) with the award
 * name, the body that presented it, and the year. `category` is the
 * optional descriptor of the specific achievement.
 *
 * Ordered newest → oldest; undated honours sit at the end. Add new
 * recognitions here and the Awards & Achievements carousel picks them up
 * automatically — no layout changes required.
 */
export type Award = {
  /** Path under /public. */
  image: string;
  /** Award / recognition name. */
  title: string;
  /** Body that presented the award. Omitted where not on record. */
  agency?: string;
  /** Year received. Empty string for undated honours. */
  year: string;
  /** Specific achievement or context, if any. */
  category?: string;
};

export const awards: Award[] = [
  {
    image: '/awards-v2/2025-certificate-of-appreciation-credai-hyderabad.webp',
    title: 'Certificate of Appreciation',
    agency: 'CREDAI Hyderabad',
    year: '2025',
    category: 'PR support',
  },
  {
    image: '/awards-v2/2025-best-in-crisis-communication-prsi.webp',
    title: 'Best in Crisis Communication',
    agency: 'PRSI',
    year: '2025',
  },
  {
    image: '/awards-v2/2024-prci-excellence-in-crisis-pr.webp',
    title: 'Excellence in Crisis PR',
    agency: 'PRCI',
    year: '2024',
  },
  {
    image: '/awards-v2/2024-women-achievers-in-pr-prsi.webp',
    title: 'Women Achievers in PR',
    agency: 'PRSI',
    year: '2024',
  },
  {
    image: '/awards-v2/2023-outstanding-pr-support-credai.webp',
    title: 'Outstanding PR Support',
    agency: 'CREDAI',
    year: '2023',
  },
  {
    image: '/awards-v2/2023-certificate-of-appreciation-icrbo-sea.webp',
    title: 'Certificate of Appreciation',
    agency: 'SEA of India',
    year: '2023',
    category: 'ICRBO',
  },
  {
    image: '/awards-v2/2022-hybiz-tv-media-awards.webp',
    title: 'Media Award',
    agency: 'Hybiz TV',
    year: '2022',
  },
  {
    image: '/awards-v2/2022-outstanding-pr-support-credai.webp',
    title: 'Outstanding PR Support',
    agency: 'CREDAI',
    year: '2022',
  },
  {
    image: '/awards-v2/2021-outstanding-pr-support-credai.webp',
    title: 'Outstanding PR Support',
    agency: 'CREDAI',
    year: '2021',
  },
  {
    image: '/awards-v2/2020-e4m-women-achievers-entrepreneur.webp',
    title: 'Women Achievers Award',
    agency: 'exchange4media',
    year: '2020',
    category: 'Entrepreneur of the Year',
  },
  {
    image: '/awards-v2/2020-telangana-women-leaders-award.webp',
    title: 'Telangana Women Leaders Award',
    year: '2020',
  },
  {
    image: '/awards-v2/2019-outstanding-pr-support-credai-telangana.webp',
    title: 'Outstanding PR Support',
    agency: 'CREDAI Telangana',
    year: '2019',
  },
  {
    image: '/awards-v2/2019-silicon-india-best-pr-agencies.webp',
    title: 'Best PR Agencies in India',
    agency: 'Silicon India',
    year: '2019',
  },
  {
    image: '/awards-v2/2018-brand-leadership-award-goa.webp',
    title: 'Brand Leadership Award',
    year: '2018',
    category: 'Goa',
  },
  {
    image: '/awards-v2/2017-tv5-business-leaders-award.webp',
    title: 'Business Leaders Award',
    agency: 'TV5',
    year: '2017',
  },
  {
    image: '/awards-v2/2016-pearl-of-hyderabad-award.webp',
    title: 'Pearl of Hyderabad Award',
    agency: 'TCEI',
    year: '2016',
    category: 'PR for Events',
  },
  {
    image: '/awards-v2/most-valuable-pr-partner-credai-telangana.webp',
    title: 'Most Valuable PR Partner',
    agency: 'CREDAI Telangana',
    year: '',
  },
];
