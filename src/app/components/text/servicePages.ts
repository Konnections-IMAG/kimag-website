export type ServicePageContent = {
  slug: string;
  kicker: string;
  title: string;
  /** SEO title and description, used verbatim. */
  metaTitle: string;
  metaDescription: string;
  /** One-line positioning statement shown on the homepage practice list. */
  summary: string;
  intro: string;
  image: string;
  imageAlt: string;
  /** Longer explanation shown between the hero and the capability grid. */
  overview: { heading: string; paragraphs: string[] };
  /** The first four titles also appear on the homepage practice list. */
  capabilities: { title: string; body: string; image: string; imageAlt: string }[];
  process: { title: string; body: string }[];
  faqs: { question: string; answer: string }[];
};

export const servicePages: ServicePageContent[] = [
  {
    slug: 'public-relations',
    kicker: 'Public Relations',
    title: 'Public Relations & Reputation Management',
    metaTitle: 'Public Relations & Reputation Management | Konnections IMAG',
    metaDescription: 'Media relations, brand positioning and perception audits from a Hyderabad PR consultancy trusted by India’s leading organisations.',
    summary: 'Earned credibility, built through the media and stakeholders your audiences already trust.',
    intro:
      'Earned credibility is the hardest kind to buy and the most valuable kind to hold. We build, protect, and enhance reputations through strategic public relations — the disciplined work of being known for the right things.',
    image: '/hero-v2/PR.webp',
    imageAlt: 'Public relations counsel in session',
    overview: {
      heading: 'Reputation is built between the headlines',
      paragraphs: [
        'Most organisations notice their reputation only when something tests it: a difficult story, a new competitor, a funding round, a leadership change. By then the opinions that matter have usually formed. Public relations is the steady work of shaping those opinions early, through the journalists, industry voices, customers and employees who carry them.',
        'We start from what you can credibly claim. A story that outruns the facts rarely survives a second question, so our counsel connects every message to something your organisation can show: what it builds, how it behaves and who it serves. From there we decide which audiences matter most, which publications and platforms they trust, and who in your leadership should speak.',
        'The work then joins up. Media relations, digital PR, online reputation and employee communication are planned together, because a promise made in a business daily is tested on a search results page and on your own shop floor. Keeping those threads consistent is part of the job.',
      ],
    },
    capabilities: [
      {
        title: 'Media Relations & Strategic Counsel',
        body: 'Strong relationships with key media, and messaging that earns its place in the story your audiences are already reading.',
        image: '/hero-v2/corporate.webp',
        imageAlt: 'Spokesperson addressing the press from a podium',
      },
      {
        title: 'Brand Building & Positioning',
        body: 'Establish and strengthen your market position through consistent messaging and strategic communication initiatives.',
        image: '/capabilities/counting-banknotes.webp',
        imageAlt: 'Hands fanning out banknotes',
      },
      {
        title: 'Image Audit & Perception Analysis',
        body: 'A candid assessment of how you are seen today — and strategic recommendations for where perception should move.',
        image: '/capabilities/analytics-screen.webp',
        imageAlt: 'Screen displaying analytics graphs',
      },
      {
        title: 'Consumer & Industry Relations',
        body: 'Meaningful connections with consumers and industry stakeholders that build loyalty and market influence.',
        image: '/capabilities/open-office-discussion.webp',
        imageAlt: 'Colleagues in discussion in an open-plan office',
      },
      {
        title: 'Digital PR & Online Reputation',
        body: 'Your presence and reputation across digital platforms, managed with strategic content and engagement.',
        image: '/capabilities/task-board-notes.webp',
        imageAlt: 'Hand holding To Do, Doing and Done notes',
      },
      {
        title: 'Employee Communications',
        body: 'Internal communication that aligns your own people with the values and objectives you stand for publicly.',
        image: '/capabilities/team-workshop.webp',
        imageAlt: 'Team planning with sticky notes during a workshop',
      },
    ],
    process: [
      {
        title: 'Audit',
        body: 'We review how you appear in the press, in search and among the stakeholders who matter, and set it against how you want to be seen.',
      },
      {
        title: 'Frame',
        body: 'We agree the narrative, the proof behind each message and the spokespeople who will carry it.',
      },
      {
        title: 'Engage',
        body: 'We take the story to journalists, industry voices and your own people, with timing planned around your business calendar.',
      },
      {
        title: 'Review',
        body: 'We report on coverage quality, sentiment and message pull-through, then adjust the plan.',
      },
    ],
    faqs: [
      {
        question: 'What is the difference between public relations and advertising?',
        answer: 'Advertising buys space and controls the words in it. Public relations earns attention from journalists, industry voices and stakeholders who decide for themselves what to say. That is harder to control, and it is also why audiences tend to give it more weight.',
      },
      {
        question: 'What does an image audit involve?',
        answer: 'An image audit compares how you want to be seen with how you are seen today. It looks at media coverage, your online presence and the views of the audiences that matter, then sets out recommendations on where perception should move.',
      },
      {
        question: 'Can you guarantee media coverage?',
        answer: 'No. Editors decide what they publish. What we can do is bring a story that is relevant, accurate and well timed to the people who are likely to care about it.',
      },
      {
        question: 'What do you need from our team?',
        answer: 'Access to a decision-maker, timely facts and a spokesperson who can speak with authority. Good public relations depends on being able to answer a journalist’s question while it still matters.',
      },
    ],
  },
  {
    slug: 'crisis-management',
    kicker: 'Crisis Management',
    title: 'Crisis Management & Communications',
    metaTitle: 'Crisis Communications Agency, Hyderabad | Konnections IMAG',
    metaDescription: '24/7 crisis response, media training and reputation recovery. Award-winning crisis counsel (PRSI 2025, PRCI 2024).',
    summary: 'Calm, decisive counsel when reputation is on the line — before, during, and after the storm.',
    intro:
      'When reputation is on the line, minutes matter and tone matters more. We prepare organisations before trouble arrives, stand beside them while it unfolds, and rebuild trust once it passes — available around the clock.',
    image: '/hero-v2/crisis.webp',
    imageAlt: 'Crisis response team at work',
    overview: {
      heading: 'Preparation decides how a bad day ends',
      paragraphs: [
        'A crisis rarely arrives with a clear label. It may begin as a customer complaint gaining traction, a regulatory notice, an incident at a site or a reporter’s call late in the evening. The early hours are when facts are thinnest and the pressure to speak is highest, and what is said then tends to shape everything that follows.',
        'The organisations that cope well have usually done the quiet work in advance. They know who decides, who speaks, which stakeholders hear first and what can be said before every fact is in. We help build that structure through risk assessment, response protocols, spokesperson training and rehearsal.',
        'When an issue is live, our role is to keep communication accurate, consistent and humane across media, employees, investors, regulators and customers. When the immediate pressure passes, the work turns to recovery: correcting the record where needed, showing what has changed and rebuilding confidence over time.',
      ],
    },
    capabilities: [
      {
        title: 'Crisis Communication Planning',
        body: 'Comprehensive strategies and protocols developed before issues arise, so response is rapid and rehearsed.',
        image: '/hero-v2/crisis.webp',
        imageAlt: 'Crisis management in progress',
      },
      {
        title: '24/7 Crisis Response',
        body: 'Round-the-clock support with immediate response capability and senior strategic guidance.',
        image: '/capabilities/aerial-coastline.webp',
        imageAlt: 'Aerial view of a coastline where surf meets forest',
      },
      {
        title: 'Reputation Recovery',
        body: 'Structured programmes to rebuild and restore brand reputation after a crisis has passed.',
        image: '/capabilities/colleagues-at-desks.webp',
        imageAlt: 'Two colleagues working at their desks',
      },
      {
        title: 'Media Training & Spokesperson Development',
        body: 'Executives prepared for the hardest interviews they will ever give — before they have to give them.',
        image: '/hero-v2/spl-training.webp',
        imageAlt: 'Training session in progress',
      },
      {
        title: 'Stakeholder Communication Management',
        body: 'Coordinated communication for every stakeholder group — employees, investors, regulators, media — during the event.',
        image: '/capabilities/colleagues-high-five.webp',
        imageAlt: 'Two colleagues sharing a high five across a desk',
      },
      {
        title: 'Risk Assessment & Mitigation',
        body: 'Proactive identification of reputation risks with early-warning monitoring and mitigation strategies.',
        image: '/capabilities/analytics-screen.webp',
        imageAlt: 'Screen displaying analytics graphs',
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
    faqs: [
      {
        question: 'When should we call you?',
        answer: 'As early as possible, including while you are still unsure whether an issue is a crisis. Preparing a response that is never needed costs far less than starting one late. Our 24/7 crisis line is +91 70329 39360.',
      },
      {
        question: 'Should we respond before all the facts are known?',
        answer: 'Usually you should acknowledge the situation, say what you are doing and say when you will update, without speculating. The right wording depends on the facts and on your legal and regulatory duties.',
      },
      {
        question: 'What goes into a crisis communication plan?',
        answer: 'Typically the likely risk scenarios, who has the authority to decide, who speaks for the organisation, the order in which stakeholders are informed, draft holding statements and a way to monitor how the issue is developing.',
      },
      {
        question: 'Do you work alongside legal counsel?',
        answer: 'Crisis communication should be coordinated with your legal advisers, so that what is said publicly is both accurate and appropriate. We provide communication counsel, not legal advice.',
      },
      {
        question: 'Can you help if we have no crisis plan yet?',
        answer: 'Yes. If an issue is already live, the first task is to establish the facts, agree who decides and who speaks, and prepare an initial holding statement. A fuller plan can be built afterwards, using what the incident showed about your gaps.',
      },
    ],
  },
  {
    slug: 'financial-communications',
    kicker: 'Financial Communications',
    title: 'Financial Communications & Investor Relations',
    metaTitle: 'Investor Relations & Financial PR | Konnections IMAG',
    metaDescription: 'IR strategy, earnings communication, analyst relations and disclosure policy for listed companies and IPO candidates.',
    summary: 'Clear, compliant communication for listed companies, IPOs, and the investors who back them.',
    intro:
      'Markets reward clarity and punish surprise. We help listed companies, IPO candidates, and their leadership communicate with investors, analysts, and regulators — accurately, compliantly, and persuasively.',
    image: '/hero-v2/finance.webp',
    imageAlt: 'Investor relations briefing',
    overview: {
      heading: 'Investors price what they understand',
      paragraphs: [
        'A company can perform well and still be poorly understood. When results arrive without context, strategy is explained differently in each meeting or material news surfaces unevenly, investors fill the gaps with their own assumptions. Financial communication exists to close those gaps within the rules that govern disclosure.',
        'We help leadership teams set out a consistent equity story: how the business makes money, where growth is expected to come from, what could get in the way and how progress should be judged. That account then runs through results communication, investor and analyst meetings, the investor relations website, annual reporting and governance announcements.',
        'Discipline matters as much as persuasion. A clear disclosure policy and trained spokespeople help ensure that material information reaches the market fairly and at the same time. We work alongside your company secretary, finance team and legal advisers, who remain responsible for regulatory compliance.',
      ],
    },
    capabilities: [
      {
        title: 'IR & Corporate Website Development',
        body: 'Investor relations platforms designed for seamless disclosure, usability, and regulatory compliance.',
        image: '/capabilities/laptop-dashboard.webp',
        imageAlt: 'Laptop showing a dashboard of charts',
      },
      {
        title: 'Investor Relations & Outreach',
        body: 'Strategic programmes that build durable relationships with institutional and retail investors alike.',
        image: '/hero-v2/investor.webp',
        imageAlt: 'Consultants working through a client mandate together',
      },
      {
        title: 'Analyst & Fund Manager Relations',
        body: 'Relationships with research analysts and fund managers that support accurate coverage and fair valuation.',
        image: '/capabilities/analytics-screen.webp',
        imageAlt: 'Screen displaying analytics graphs',
      },
      {
        title: 'Disclosure Policy & Training',
        body: 'Comprehensive disclosure policies and training that keep your organisation transparent and compliant.',
        image: '/capabilities/signing-documents.webp',
        imageAlt: 'Hand signing a printed document at a desk',
      },
      {
        title: 'Corporate Governance Communication',
        body: 'Strategic communication around governance practices, board changes, and governance initiatives.',
        image: '/capabilities/typing-on-laptop.webp',
        imageAlt: 'Hands typing on a laptop',
      },
      {
        title: 'Earnings Communication',
        body: 'End-to-end results communication: preparation, conference calls, and disciplined follow-through.',
        image: '/capabilities/financial-paperwork.webp',
        imageAlt: 'Financial forms, a calculator and a pen on a desk',
      },
    ],
    process: [
      {
        title: 'Baseline',
        body: 'We review your disclosures, investor materials and current analyst view to find where the market’s understanding differs from yours.',
      },
      {
        title: 'Equity story',
        body: 'We shape a consistent account of strategy, performance drivers and risks, and agree who may speak about each.',
      },
      {
        title: 'Outreach',
        body: 'We support results communication, analyst and fund manager engagement and investor meetings, within your disclosure policy.',
      },
      {
        title: 'Measure',
        body: 'We track analyst coverage, investor meetings and how your valuation narrative is being understood.',
      },
    ],
    faqs: [
      {
        question: 'Who is this practice for?',
        answer: 'Listed companies, companies preparing for an initial public offering and the leadership teams who need to communicate with investors, analysts and regulators.',
      },
      {
        question: 'How do you measure investor relations work?',
        answer: 'Through analyst coverage, the number and quality of investor meetings, and whether the valuation narrative in the market reflects the company’s actual strategy. Share price alone is not a fair measure, because many other factors move it.',
      },
      {
        question: 'Do you provide investment or legal advice?',
        answer: 'No. We provide communication counsel. Investment, legal and regulatory advice should come from appropriately qualified and registered advisers.',
      },
      {
        question: 'How early should an IPO candidate start?',
        answer: 'Early enough to establish consistent messaging, prepare spokespeople and put a disclosure policy in place before publicity restrictions apply. Your legal advisers and merchant bankers will set the limits on what can be said and when.',
      },
      {
        question: 'How does this work with our finance and company secretarial teams?',
        answer: 'They remain the owners of the numbers and of regulatory filings. Our part is to help explain them clearly and consistently, which works best when announcements, investor materials and spokesperson briefings are prepared together, with enough time for review and approval.',
      },
    ],
  },
  {
    slug: 'digital-media',
    kicker: 'Digital Media',
    title: 'Digital Media & Social Strategy',
    metaTitle: 'Digital PR & Social Media Strategy | Konnections IMAG',
    metaDescription: 'Social strategy, content, influencer programmes and digital news distribution, run with editorial judgement.',
    summary: 'Strategy-led digital presence. Content, community, and influence that compound over time.',
    intro:
      'Digital reputation compounds — every post, campaign, and reply either builds equity or spends it. We bring editorial judgement to digital channels: content, community, influence, and measurement working as one.',
    image: '/hero-v2/digital.webp',
    imageAlt: 'Digital and social media strategy',
    overview: {
      heading: 'Every channel is now a front page',
      paragraphs: [
        'Customers, candidates, investors and journalists often meet an organisation online before they meet anyone in it. A neglected profile, an unanswered complaint or a campaign that says something different from the press release all become part of the same impression.',
        'We approach digital channels as an editor would. The first questions are who you are trying to reach, what is worth their time and where they already pay attention. Platforms and formats follow from those answers, and not every organisation needs to be everywhere. A smaller presence that is accurate, timely and responsive is more useful than a large one that nobody maintains.',
        'Content, community management, influencer partnerships and digital news distribution are planned alongside your wider communication, so that the same facts and the same voice carry through. Where paid promotion or creator partnerships are involved, disclosure should be clear and in line with the advertising rules that apply.',
      ],
    },
    capabilities: [
      {
        title: 'Social Media Management & Strategy',
        body: 'Comprehensive presence management with strategic content planning and genuine community engagement.',
        image: '/capabilities/social-media-apps.webp',
        imageAlt: 'Phone screen showing a folder of social media apps',
      },
      {
        title: 'Content Creation & Management',
        body: 'Strategic content for internal and external audiences across every digital platform you operate.',
        image: '/capabilities/boardroom-presentation.webp',
        imageAlt: 'Presenter addressing colleagues around a boardroom table',
      },
      {
        title: 'Digital News Dissemination',
        body: 'Announcements distributed across digital channels for maximum reach and credibility.',
        image: '/capabilities/business-newspapers.webp',
        imageAlt: 'Folded newspapers showing the business section',
      },
      {
        title: 'Influencer Marketing Programmes',
        body: 'Partnerships and collaborations that extend brand reach through voices audiences already trust.',
        image: '/capabilities/laptop-and-phone.webp',
        imageAlt: 'Person using a phone in front of a laptop',
      },
      {
        title: 'Digital Campaigns & Engagement',
        body: 'Creative campaigns designed to drive engagement and build meaningful audience connections.',
        image: '/capabilities/laptop-dashboard.webp',
        imageAlt: 'Laptop showing a dashboard of charts',
      },
      {
        title: 'Analytics & Reporting',
        body: 'Comprehensive measurement across all digital touchpoints, used to optimise rather than decorate.',
        image: '/capabilities/analytics-screen.webp',
        imageAlt: 'Screen displaying analytics graphs',
      },
    ],
    process: [
      {
        title: 'Map',
        body: 'We look at where your audiences spend attention, how you show up there today and what is being said about you.',
      },
      {
        title: 'Plan',
        body: 'We set the channel mix, content themes, tone of voice and the approval path for publishing and replies.',
      },
      {
        title: 'Publish',
        body: 'We create and distribute content, run campaigns and engage with your community.',
      },
      {
        title: 'Optimise',
        body: 'We read reach, engagement and sentiment against the agreed goals, then keep what works and drop what does not.',
      },
    ],
    faqs: [
      {
        question: 'Which platforms should we be on?',
        answer: 'The ones your audiences actually use for the subjects you want to be known for. We would rather recommend a few channels that can be maintained well than a presence on every platform.',
      },
      {
        question: 'How do you choose influencers?',
        answer: 'By fit before follower count: whether their audience is yours, whether their past work is credible and whether the partnership would make sense to the people who see it. Paid relationships should be clearly disclosed.',
      },
      {
        question: 'What happens when there is criticism online?',
        answer: 'It should be assessed quickly. Some comments need a direct, factual reply, some need to move to a private channel and some are early signs of a wider issue that calls for crisis communication.',
      },
      {
        question: 'How is performance reported?',
        answer: 'Against goals agreed in advance, using measures such as reach, engagement, sentiment and the actions your audiences take. Follower counts on their own say little.',
      },
      {
        question: 'Can you work with our in-house team?',
        answer: 'Yes. Responsibilities can be divided in whatever way suits you, for example strategy and campaigns with us and day-to-day publishing with your team. What matters is a clear approval path and an agreed way to escalate sensitive comments.',
      },
    ],
  },
  {
    slug: 'corporate-communications',
    kicker: 'Corporate Communications',
    title: 'Corporate Communications',
    metaTitle: 'Corporate & Internal Communications | Konnections IMAG',
    metaDescription: 'Executive positioning, internal communications, CSR storytelling and thought leadership for Indian organisations.',
    summary: 'Executive voice, employee alignment, and thought leadership that carries the corporate story.',
    intro:
      'A corporate story is told as much inside the organisation as outside it. We align executive voice, employee communication, and public positioning so that what your company says — and what it is — stay the same thing.',
    image: '/hero-v2/corporate.webp',
    imageAlt: 'Corporate communications planning',
    overview: {
      heading: 'The story has to hold from the inside',
      paragraphs: [
        'Employees are among the most believed voices an organisation has. If they hear about a change from the news, or if the public account does not match their daily experience, no external campaign can close the gap for long. Corporate communication starts by making sure people inside understand where the organisation is going and why.',
        'Leadership voice is the second thread. Executives are asked to speak to boards, employees, industry bodies, government and the press, often on the same subject. We help them develop clear positions, speak in their own voice and choose the platforms where their expertise adds something.',
        'The rest follows the same logic. Social responsibility work is communicated through what was actually done. Events and industry relations are planned as chances to reinforce the corporate story. During periods of change such as restructuring, mergers or new leadership, communication is sequenced so that the people most affected hear first.',
      ],
    },
    capabilities: [
      {
        title: 'Internal Communications Strategy',
        body: 'Frameworks that align employees with organisational goals and values — from the front line to the boardroom.',
        image: '/capabilities/team-workshop.webp',
        imageAlt: 'Team planning with sticky notes during a workshop',
      },
      {
        title: 'Executive Communications',
        body: 'Strategic positioning and communication support for C-level executives and senior leadership teams.',
        image: '/hero-v2/corporate.webp',
        imageAlt: 'Spokesperson addressing the press from a podium',
      },
      {
        title: 'CSR Communication',
        body: 'Programmes that convey your commitment to social and environmental impact with substance, not spin.',
        image: '/capabilities/event-volunteer.webp',
        imageAlt: 'Volunteer in an event shirt seen from behind',
      },
      {
        title: 'Event Management & Coordination',
        body: 'End-to-end planning and communication for corporate events, conferences, and stakeholder gatherings.',
        image: '/capabilities/conference-hall.webp',
        imageAlt: 'Conference hall set with round tables and projection screens',
      },
      {
        title: 'Thought Leadership Development',
        body: 'Industry authority built deliberately, through strategic programmes and distinctive content.',
        image: '/capabilities/laptop-dashboard.webp',
        imageAlt: 'Laptop showing a dashboard of charts',
      },
      {
        title: 'Industry Relations',
        body: 'Relationships with industry associations, trade bodies, and professional networks that matter to your sector.',
        image: '/capabilities/open-office-discussion.webp',
        imageAlt: 'Colleagues in discussion in an open-plan office',
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
    faqs: [
      {
        question: 'Does internal communication really belong with public relations?',
        answer: 'Yes. What employees are told and what the public is told need to agree. Planning them together reduces the chance of contradiction, and of staff learning important news from outside.',
      },
      {
        question: 'How do you build executive thought leadership?',
        answer: 'We start with subjects where the executive has real experience and a point of view, then choose a small number of suitable formats, such as articles, speaking opportunities or interviews, and keep to them consistently.',
      },
      {
        question: 'How should CSR work be communicated?',
        answer: 'With specifics: what was done, with whom and with what result so far, including what is still in progress. Claims that cannot be supported tend to damage trust.',
      },
      {
        question: 'Can you support communication during organisational change?',
        answer: 'Yes. Change management communication is part of this practice, including deciding who needs to know what, in which order and through which channel.',
      },
      {
        question: 'Where should we start if internal communication is weak?',
        answer: 'With listening. It helps to find out what employees currently hear, which channels they trust and where messages get lost between leadership and teams. The answers show whether the problem is the message, the channel or the timing.',
      },
    ],
  },
  {
    slug: 'specialized-services',
    kicker: 'Specialised Services',
    title: 'Specialised Services & Consulting',
    metaTitle: 'Media Training & Communication Audits | Konnections IMAG',
    metaDescription: 'Media training workshops, market research, communication audits and B2B campaigns from Konnections IMAG, Hyderabad.',
    summary: 'Research, training, measurement, and creative counsel for communication challenges that fit no template.',
    intro:
      'Some communication challenges fit no template. For those, we offer research, training, measurement, and creative counsel — the specialist depth behind our integrated practice, available on its own terms.',
    image: '/hero-v2/spl.webp',
    imageAlt: 'Specialist communications consulting',
    overview: {
      heading: 'Specialist depth, available on its own',
      paragraphs: [
        'Not every need calls for an ongoing engagement. A leadership team may want to be ready for interviews, a communication function may want an independent view of what is working, or a business selling to other businesses may need messages that satisfy a technically informed audience.',
        'These services can be taken on their own or alongside our other practices. Media training prepares spokespeople to stay accurate and composed when the questions are hard. Market intelligence and reputation monitoring give decisions a firmer footing than assumption. A communication audit looks closely at how an organisation communicates today and recommends what to change first.',
        'Measurement runs through all of it. We prefer to agree what success looks like before work begins, to say plainly which effects can be measured directly and which can only be indicated, and to use the findings to improve the next round. Training and capacity building help your own team carry that forward.',
      ],
    },
    capabilities: [
      {
        title: 'Media Training & Spokesperson Development',
        body: 'Programmes that prepare executives and spokespersons for effective, composed media interactions.',
        image: '/capabilities/professional-portrait.webp',
        imageAlt: 'Professional in a grey blazer smiling at the camera',
      },
      {
        title: 'Market Intelligence & Research',
        body: 'Strategic research and intelligence that inform communication strategy and business decisions.',
        image: '/capabilities/analytics-screen.webp',
        imageAlt: 'Screen displaying analytics graphs',
      },
      {
        title: 'Creative Services & Content Development',
        body: 'Creative solutions and content development for campaigns that need to look as sharp as they read.',
        image: '/capabilities/boardroom-presentation.webp',
        imageAlt: 'Presenter addressing colleagues around a boardroom table',
      },
      {
        title: 'B2B Communications',
        body: 'Specialised strategies for complex industrial and professional markets, where the audience is expert.',
        image: '/capabilities/typing-on-laptop.webp',
        imageAlt: 'Hands typing on a laptop',
      },
      {
        title: 'Measurement & Analytics',
        body: 'Measurement frameworks that connect communication effort to effectiveness and ROI.',
        image: '/capabilities/laptop-dashboard.webp',
        imageAlt: 'Laptop showing a dashboard of charts',
      },
      {
        title: 'Communication Audit & Strategy',
        body: 'In-depth audits and strategic planning that make an organisation’s whole communication function stronger.',
        image: '/hero-v2/spl-training.webp',
        imageAlt: 'Training session in progress',
      },
    ],
    process: [
      {
        title: 'Scope',
        body: 'We agree the question to be answered or the skill to be built, who is involved and what a useful result looks like.',
      },
      {
        title: 'Diagnose',
        body: 'We gather evidence through research, material review and conversations with the people closest to the problem.',
      },
      {
        title: 'Design',
        body: 'We shape the workshop, research, creative work or strategy around what the evidence shows.',
      },
      {
        title: 'Embed',
        body: 'We hand over findings and tools, coach your team where needed and check progress against the agreed result.',
      },
    ],
    faqs: [
      {
        question: 'Who should attend media training?',
        answer: 'Anyone who may speak for the organisation: founders, senior leaders, designated spokespersons and the people who prepare them.',
      },
      {
        question: 'What does a communication audit cover?',
        answer: 'It can cover your messages, channels, internal and external materials, approval processes and team capability. The scope is agreed at the start, and recommendations are put in order of priority.',
      },
      {
        question: 'Can we engage you for a single project?',
        answer: 'These services are available on their own terms. Tell us what you need and we will discuss a suitable scope.',
      },
      {
        question: 'How do you approach B2B communication?',
        answer: 'By starting with the people involved in the buying decision and the questions they need answered. Expert audiences respond to specifics, evidence and clear explanation.',
      },
      {
        question: 'How should we prepare for a media training session?',
        answer: 'Bring the subjects your spokespeople are likely to be asked about, including the uncomfortable ones, along with recent coverage and any messages already approved. The closer the practice questions are to real ones, the more useful the session.',
      },
    ],
  },
];

export const getServicePage = (slug: string): ServicePageContent => {
  const page = servicePages.find((p) => p.slug === slug);
  if (!page) {
    throw new Error(`Unknown service page: ${slug}`);
  }
  return page;
};
