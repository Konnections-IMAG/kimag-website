import { INDUSTRIES } from '../../lib/site';

const industryList = INDUSTRIES.map((name) => name.toLowerCase().replace(/ & /g, ' and '));
const industrySentence = `${industryList.slice(0, -1).join(', ')}, and ${industryList.at(-1)}`;

export const faqs = [
  {
    question: 'What services does Konnections IMAG offer?',
    answer:
      'We offer a comprehensive range of PR and communication services including public relations, crisis management, corporate communications, digital media, financial communications, and specialised consulting tailored to your industry.',
  },
  {
    question: 'How quickly can you respond to a PR crisis?',
    answer:
      'Our crisis team is available 24/7 on +91 70329 39360 and responds immediately to urgent situations. An established protocol lets us mobilise resources and implement strategic communication plans within hours of being engaged.',
  },
  {
    question: 'Which industries do you specialise in?',
    answer: `We work across diverse sectors, including ${industrySentence}. Over thirty verticals in all.`,
  },
  {
    question: 'How do you measure the success of PR campaigns?',
    answer:
      'Through a blend of quantitative and qualitative measures: media coverage and sentiment analysis, engagement, message penetration, and business impact indicators reported against goals we agree with you up front.',
  },
];
