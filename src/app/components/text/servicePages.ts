export type ServicePageContent = {
  slug: string;
  kicker: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  capabilities: { title: string; body: string; image: string }[];
  process: { title: string; body: string }[];
};

const defaultProcess = [
  {
    title: 'Listen',
    body: 'We begin with an honest audit — your reputation as it stands, your stakeholders as they are, and the gap between the two.',
  },
  {
    title: 'Position',
    body: 'We define the narrative: the story only you can tell, the audiences who need to hear it, and the moments that matter.',
  },
  {
    title: 'Deliver',
    body: 'Integrated execution across media, digital, and direct channels — coordinated by a single senior team.',
  },
  {
    title: 'Measure',
    body: 'Coverage, sentiment, penetration, and business impact — reported against the goals we agreed up front.',
  },
];

export const servicePages: ServicePageContent[] = [
  {
    slug: 'public-relations',
    kicker: 'Public Relations',
    title: 'Public Relations & Reputation Management',
    intro:
      'Earned credibility is the hardest kind to buy and the most valuable kind to hold. We build, protect, and enhance reputations through strategic public relations — the disciplined work of being known for the right things.',
    image: '/hero-v2/PR.webp',
    imageAlt: 'Public relations counsel in session',
    capabilities: [
      {
        title: 'Media Relations & Strategic Counsel',
        body: 'Strong relationships with key media, and messaging that earns its place in the story your audiences are already reading.',
        image: '/hero-v2/corporate.webp',
      },
      {
        title: 'Brand Building & Positioning',
        body: 'Establish and strengthen your market position through consistent messaging and strategic communication initiatives.',
        image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'Image Audit & Perception Analysis',
        body: 'A candid assessment of how you are seen today — and strategic recommendations for where perception should move.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'Consumer & Industry Relations',
        body: 'Meaningful connections with consumers and industry stakeholders that build loyalty and market influence.',
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'Digital PR & Online Reputation',
        body: 'Your presence and reputation across digital platforms, managed with strategic content and engagement.',
        image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'Employee Communications',
        body: 'Internal communication that aligns your own people with the values and objectives you stand for publicly.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
    ],
    process: defaultProcess,
  },
  {
    slug: 'crisis-management',
    kicker: 'Crisis Management',
    title: 'Crisis Management & Communications',
    intro:
      'When reputation is on the line, minutes matter and tone matters more. We prepare organisations before trouble arrives, stand beside them while it unfolds, and rebuild trust once it passes — available around the clock.',
    image: '/hero-v2/crisis.webp',
    imageAlt: 'Crisis response team at work',
    capabilities: [
      {
        title: 'Crisis Communication Planning',
        body: 'Comprehensive strategies and protocols developed before issues arise, so response is rapid and rehearsed.',
        image: '/hero-v2/crisis.webp',
      },
      {
        title: '24/7 Crisis Response',
        body: 'Round-the-clock support with immediate response capability and senior strategic guidance.',
        image: 'https://images.unsplash.com/photo-1504681869696-d977211a5f4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'Reputation Recovery',
        body: 'Structured programmes to rebuild and restore brand reputation after a crisis has passed.',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'Media Training & Spokesperson Development',
        body: 'Executives prepared for the hardest interviews they will ever give — before they have to give them.',
        image: '/hero-v2/spl-training.webp',
      },
      {
        title: 'Stakeholder Communication Management',
        body: 'Coordinated communication for every stakeholder group — employees, investors, regulators, media — during the event.',
        image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'Risk Assessment & Mitigation',
        body: 'Proactive identification of reputation risks with early-warning monitoring and mitigation strategies.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
    ],
    process: [
      {
        title: 'Assess',
        body: 'Rapid situation analysis and impact evaluation — a clear view of the facts within the first minutes.',
      },
      {
        title: 'Plan',
        body: 'A targeted response strategy and key messaging framework, agreed with leadership before a word goes out.',
      },
      {
        title: 'Respond',
        body: 'A coordinated, multi-channel communication plan executed across every stakeholder group.',
      },
      {
        title: 'Recover',
        body: 'Long-term reputation recovery with continuous monitoring, learning, and optimisation.',
      },
    ],
  },
  {
    slug: 'financial-communications',
    kicker: 'Financial Communications',
    title: 'Financial Communications & Investor Relations',
    intro:
      'Markets reward clarity and punish surprise. We help listed companies, IPO candidates, and their leadership communicate with investors, analysts, and regulators — accurately, compliantly, and persuasively.',
    image: '/hero-v2/finance.webp',
    imageAlt: 'Investor relations briefing',
    capabilities: [
      {
        title: 'IR & Corporate Website Development',
        body: 'Investor relations platforms designed for seamless disclosure, usability, and regulatory compliance.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'Investor Relations & Outreach',
        body: 'Strategic programmes that build durable relationships with institutional and retail investors alike.',
        image: '/hero-v2/investor.webp',
      },
      {
        title: 'Analyst & Fund Manager Relations',
        body: 'Relationships with research analysts and fund managers that support accurate coverage and fair valuation.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'Disclosure Policy & Training',
        body: 'Comprehensive disclosure policies and training that keep your organisation transparent and compliant.',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'Corporate Governance Communication',
        body: 'Strategic communication around governance practices, board changes, and governance initiatives.',
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'Earnings Communication',
        body: 'End-to-end results communication: preparation, conference calls, and disciplined follow-through.',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
    ],
    process: defaultProcess,
  },
  {
    slug: 'digital-media',
    kicker: 'Digital Media',
    title: 'Digital Media & Social Strategy',
    intro:
      'Digital reputation compounds — every post, campaign, and reply either builds equity or spends it. We bring editorial judgement to digital channels: content, community, influence, and measurement working as one.',
    image: '/hero-v2/digital.webp',
    imageAlt: 'Digital and social media strategy',
    capabilities: [
      {
        title: 'Social Media Management & Strategy',
        body: 'Comprehensive presence management with strategic content planning and genuine community engagement.',
        image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'Content Creation & Management',
        body: 'Strategic content for internal and external audiences across every digital platform you operate.',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'Digital News Dissemination',
        body: 'Announcements distributed across digital channels for maximum reach and credibility.',
        image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'Influencer Marketing Programmes',
        body: 'Partnerships and collaborations that extend brand reach through voices audiences already trust.',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'Digital Campaigns & Engagement',
        body: 'Creative campaigns designed to drive engagement and build meaningful audience connections.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'Analytics & Reporting',
        body: 'Comprehensive measurement across all digital touchpoints, used to optimise rather than decorate.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
    ],
    process: defaultProcess,
  },
  {
    slug: 'corporate-communications',
    kicker: 'Corporate Communications',
    title: 'Corporate Communications',
    intro:
      'A corporate story is told as much inside the organisation as outside it. We align executive voice, employee communication, and public positioning so that what your company says — and what it is — stay the same thing.',
    image: '/hero-v2/corporate.webp',
    imageAlt: 'Corporate communications planning',
    capabilities: [
      {
        title: 'Internal Communications Strategy',
        body: 'Frameworks that align employees with organisational goals and values — from the front line to the boardroom.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'Executive Communications',
        body: 'Strategic positioning and communication support for C-level executives and senior leadership teams.',
        image: '/hero-v2/corporate.webp',
      },
      {
        title: 'CSR Communication',
        body: 'Programmes that convey your commitment to social and environmental impact with substance, not spin.',
        image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'Event Management & Coordination',
        body: 'End-to-end planning and communication for corporate events, conferences, and stakeholder gatherings.',
        image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'Thought Leadership Development',
        body: 'Industry authority built deliberately, through strategic programmes and distinctive content.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'Industry Relations',
        body: 'Relationships with industry associations, trade bodies, and professional networks that matter to your sector.',
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
    ],
    process: [
      {
        title: 'Strategy',
        body: 'Communication strategy developed in lockstep with your business objectives, not alongside them.',
      },
      {
        title: 'Execution',
        body: 'Programmes delivered seamlessly across all organisational levels and channels.',
      },
      {
        title: 'Engagement',
        body: 'Active stakeholder engagement and relationship-building that keeps the story alive between announcements.',
      },
      {
        title: 'Optimisation',
        body: 'Continuous improvement driven by feedback and analytics — what worked, what didn’t, what’s next.',
      },
    ],
  },
  {
    slug: 'specialized-services',
    kicker: 'Specialized Services',
    title: 'Specialized Services & Consulting',
    intro:
      'Some communication challenges fit no template. For those, we offer research, training, measurement, and creative counsel — the specialist depth behind our integrated practice, available on its own terms.',
    image: '/hero-v2/spl.webp',
    imageAlt: 'Specialist communications consulting',
    capabilities: [
      {
        title: 'Media Training & Workshops',
        body: 'Programmes that prepare executives and spokespersons for effective, composed media interactions.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'Market Intelligence & Research',
        body: 'Strategic research and intelligence that inform communication strategy and business decisions.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'Creative Services & Content Development',
        body: 'Creative solutions and content development for campaigns that need to look as sharp as they read.',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'B2B Communications',
        body: 'Specialised strategies for complex industrial and professional markets, where the audience is expert.',
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'Measurement & Analytics',
        body: 'Measurement frameworks that connect communication effort to effectiveness and ROI.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'Communication Audit & Strategy',
        body: 'In-depth audits and strategic planning that make an organisation’s whole communication function stronger.',
        image: '/hero-v2/spl-training.webp',
      },
    ],
    process: defaultProcess,
  },
];

export const getServicePage = (slug: string): ServicePageContent => {
  const page = servicePages.find((p) => p.slug === slug);
  if (!page) {
    throw new Error(`Unknown service page: ${slug}`);
  }
  return page;
};
