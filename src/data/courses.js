export const categories = [
  'All',
  'Development',
  'Design',
  'Business',
  'Marketing',
  'Data Science',
]

export const courses = [
  {
    id: 'fullstack-web',
    title: 'Full-Stack Web Development Bootcamp',
    instructor: 'Ava Chen',
    instructorId: 'ava-chen',
    category: 'Development',
    rating: 4.9,
    reviews: 12840,
    duration: '42h 15m',
    lessons: 186,
    level: 'Beginner',
    price: 49,
    students: 58210,
    thumbnail:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    banner:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1600&q=80',
    description:
      'Build production-ready websites and APIs from scratch. You will learn HTML, CSS, JavaScript, React, Node.js, and databases while shipping real projects you can add to your portfolio.',
    outcomes: [
      'Build responsive interfaces with modern HTML, CSS, and React',
      'Create REST APIs with Node.js and Express',
      'Store and query data with SQL and MongoDB',
      'Deploy full-stack apps with confidence',
    ],
    curriculum: [
      {
        title: 'Foundations of the Web',
        lessons: [
          { title: 'How the internet works', duration: '12m' },
          { title: 'HTML semantics that matter', duration: '18m' },
          { title: 'CSS layout with Flexbox & Grid', duration: '34m' },
        ],
      },
      {
        title: 'JavaScript Essentials',
        lessons: [
          { title: 'Variables, functions, and arrays', duration: '28m' },
          { title: 'DOM and events', duration: '22m' },
          { title: 'Async JavaScript & fetch', duration: '31m' },
        ],
      },
      {
        title: 'React & the Backend',
        lessons: [
          { title: 'Components, props, and state', duration: '40m' },
          { title: 'Building an Express API', duration: '36m' },
          { title: 'Authentication & deployment', duration: '29m' },
        ],
      },
    ],
  },
  {
    id: 'uiux-master',
    title: 'UI/UX Design Masterclass',
    instructor: 'Noah Patel',
    instructorId: 'noah-patel',
    category: 'Design',
    rating: 4.8,
    reviews: 9320,
    duration: '28h 40m',
    lessons: 94,
    level: 'Intermediate',
    price: 39,
    students: 31420,
    thumbnail:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80',
    banner:
      'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1600&q=80',
    description:
      'Learn to research, wireframe, prototype, and ship interfaces people love. This course blends design theory with Figma workflows used by product teams.',
    outcomes: [
      'Run user research and turn insights into flows',
      'Create high-fidelity Figma systems',
      'Prototype interactions and gather feedback',
      'Present design decisions with confidence',
    ],
    curriculum: [
      {
        title: 'Design Thinking',
        lessons: [
          { title: 'Empathy maps and personas', duration: '16m' },
          { title: 'Journey mapping', duration: '21m' },
        ],
      },
      {
        title: 'Visual Systems',
        lessons: [
          { title: 'Typography and color', duration: '24m' },
          { title: 'Components and auto-layout', duration: '33m' },
        ],
      },
    ],
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing Strategy',
    instructor: 'Maya Brooks',
    instructorId: 'maya-brooks',
    category: 'Marketing',
    rating: 4.7,
    reviews: 7104,
    duration: '18h 05m',
    lessons: 62,
    level: 'Beginner',
    price: 29,
    students: 22180,
    thumbnail:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    banner:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80',
    description:
      'Plan campaigns that grow audiences and revenue. Cover SEO, paid ads, content, email, and analytics with practical templates you can reuse.',
    outcomes: [
      'Build a channel strategy from goals to KPIs',
      'Write content that ranks and converts',
      'Launch paid campaigns with a clear budget',
      'Read dashboards and iterate weekly',
    ],
    curriculum: [
      {
        title: 'Strategy First',
        lessons: [
          { title: 'Positioning and audience', duration: '14m' },
          { title: 'Funnel design', duration: '19m' },
        ],
      },
      {
        title: 'Channels',
        lessons: [
          { title: 'SEO foundations', duration: '27m' },
          { title: 'Paid social & search', duration: '25m' },
        ],
      },
    ],
  },
  {
    id: 'data-python',
    title: 'Data Science with Python',
    instructor: 'Eli Romero',
    instructorId: 'eli-romero',
    category: 'Data Science',
    rating: 4.9,
    reviews: 15402,
    duration: '36h 20m',
    lessons: 128,
    level: 'Intermediate',
    price: 59,
    students: 44890,
    thumbnail:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    banner:
      'https://images.unsplash.com/photo-1518186285589-2f729f055546?auto=format&fit=crop&w=1600&q=80',
    description:
      'Analyze datasets, visualize insights, and train your first machine learning models using Python, Pandas, and scikit-learn.',
    outcomes: [
      'Clean and explore data with Pandas',
      'Visualize insights with Matplotlib and Seaborn',
      'Train classification and regression models',
      'Communicate findings with a portfolio notebook',
    ],
    curriculum: [
      {
        title: 'Python for Analysis',
        lessons: [
          { title: 'NumPy and Pandas crash course', duration: '38m' },
          { title: 'Data wrangling patterns', duration: '29m' },
        ],
      },
      {
        title: 'Machine Learning',
        lessons: [
          { title: 'Train/test splits and metrics', duration: '22m' },
          { title: 'Your first models', duration: '41m' },
        ],
      },
    ],
  },
  {
    id: 'business-strategy',
    title: 'Business Strategy Fundamentals',
    instructor: 'Sofia Alvarez',
    instructorId: 'sofia-alvarez',
    category: 'Business',
    rating: 4.6,
    reviews: 4821,
    duration: '14h 50m',
    lessons: 48,
    level: 'Beginner',
    price: 0,
    students: 18940,
    thumbnail:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    banner:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80',
    description:
      'Learn how great companies choose markets, build moats, and make decisions under uncertainty. Perfect for founders and aspiring managers.',
    outcomes: [
      'Map industry forces and competitors',
      'Define a winning value proposition',
      'Prioritize initiatives with simple frameworks',
      'Pitch a strategy with a one-page brief',
    ],
    curriculum: [
      {
        title: 'Seeing the Landscape',
        lessons: [
          { title: 'Porter and beyond', duration: '17m' },
          { title: 'Customer jobs to be done', duration: '20m' },
        ],
      },
      {
        title: 'Making Choices',
        lessons: [
          { title: 'Where to play', duration: '18m' },
          { title: 'How to win', duration: '23m' },
        ],
      },
    ],
  },
  {
    id: 'react-next',
    title: 'React & Next.js Professional',
    instructor: 'Ava Chen',
    instructorId: 'ava-chen',
    category: 'Development',
    rating: 4.8,
    reviews: 8760,
    duration: '24h 10m',
    lessons: 88,
    level: 'Intermediate',
    price: 44,
    students: 27650,
    thumbnail:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80',
    banner:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=80',
    description:
      'Go beyond basics. Master hooks, routing, server components, data fetching, and performance so you can ship polished product UIs.',
    outcomes: [
      'Architect scalable React apps',
      'Use Next.js routing and data patterns',
      'Handle auth, forms, and optimistic UI',
      'Optimize Core Web Vitals',
    ],
    curriculum: [
      {
        title: 'Modern React',
        lessons: [
          { title: 'Hooks in depth', duration: '32m' },
          { title: 'Composition patterns', duration: '21m' },
        ],
      },
      {
        title: 'Next.js in Production',
        lessons: [
          { title: 'App router mental model', duration: '26m' },
          { title: 'Caching and streaming', duration: '30m' },
        ],
      },
    ],
  },
  {
    id: 'figma-framer',
    title: 'From Figma to Framer',
    instructor: 'Noah Patel',
    instructorId: 'noah-patel',
    category: 'Design',
    rating: 4.7,
    reviews: 3902,
    duration: '12h 30m',
    lessons: 41,
    level: 'Beginner',
    price: 24,
    students: 11230,
    thumbnail:
      'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?auto=format&fit=crop&w=1200&q=80',
    banner:
      'https://images.unsplash.com/photo-1613909207039-6b173b755cc1?auto=format&fit=crop&w=1600&q=80',
    description:
      'Turn static mockups into interactive marketing sites. Learn a practical handoff from Figma components to Framer animations.',
    outcomes: [
      'Structure Figma files for developers',
      'Rebuild layouts in Framer',
      'Add micro-interactions without code',
      'Publish a live landing page',
    ],
    curriculum: [
      {
        title: 'Design Handoff',
        lessons: [
          { title: 'Tokens and variants', duration: '15m' },
          { title: 'Responsive frames', duration: '18m' },
        ],
      },
    ],
  },
  {
    id: 'seo-growth',
    title: 'SEO & Content Growth',
    instructor: 'Maya Brooks',
    instructorId: 'maya-brooks',
    category: 'Marketing',
    rating: 4.8,
    reviews: 5411,
    duration: '16h 45m',
    lessons: 57,
    level: 'Intermediate',
    price: 32,
    students: 16440,
    thumbnail:
      'https://images.unsplash.com/photo-1432888498266-38ffec3bdb47?auto=format&fit=crop&w=1200&q=80',
    banner:
      'https://images.unsplash.com/photo-1625296276703-3fbc924f07b5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Grow organic traffic with a repeatable content system: keyword research, briefs, on-page SEO, and distribution.',
    outcomes: [
      'Find keywords with real intent',
      'Write briefs that writers can execute',
      'Optimize pages for search and humans',
      'Build internal links and topical authority',
    ],
    curriculum: [
      {
        title: 'Research',
        lessons: [
          { title: 'Search intent mapping', duration: '19m' },
          { title: 'Competitor content gaps', duration: '17m' },
        ],
      },
    ],
  },
  {
    id: 'ml-basics',
    title: 'Machine Learning Basics',
    instructor: 'Eli Romero',
    instructorId: 'eli-romero',
    category: 'Data Science',
    rating: 4.7,
    reviews: 6805,
    duration: '22h 00m',
    lessons: 73,
    level: 'Beginner',
    price: 0,
    students: 30112,
    thumbnail:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
    banner:
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80',
    description:
      'Understand the ideas behind modern ML without drowning in math. Train models, evaluate them, and know when not to use ML.',
    outcomes: [
      'Explain core ML problem types',
      'Prepare features responsibly',
      'Evaluate models beyond accuracy',
      'Ship a simple prediction notebook',
    ],
    curriculum: [
      {
        title: 'Concepts',
        lessons: [
          { title: 'Supervised vs unsupervised', duration: '14m' },
          { title: 'Overfitting explained', duration: '16m' },
        ],
      },
    ],
  },
  {
    id: 'startup-finance',
    title: 'Startup Finance Essentials',
    instructor: 'Sofia Alvarez',
    instructorId: 'sofia-alvarez',
    category: 'Business',
    rating: 4.5,
    reviews: 2104,
    duration: '10h 20m',
    lessons: 36,
    level: 'Beginner',
    price: 27,
    students: 8420,
    thumbnail:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
    banner:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80',
    description:
      'Read a P&L, plan a runway, and talk to investors in their language. Built for first-time founders and operators.',
    outcomes: [
      'Build a simple financial model',
      'Understand burn, runway, and unit economics',
      'Prepare a fundraising narrative',
      'Track the metrics that actually matter',
    ],
    curriculum: [
      {
        title: 'The Numbers',
        lessons: [
          { title: 'P&L walkthrough', duration: '18m' },
          { title: 'Cash vs profit', duration: '13m' },
        ],
      },
    ],
  },
  {
    id: 'mobile-apps',
    title: 'Mobile App Development',
    instructor: 'Liam Park',
    instructorId: 'liam-park',
    category: 'Development',
    rating: 4.6,
    reviews: 4308,
    duration: '31h 55m',
    lessons: 102,
    level: 'Intermediate',
    price: 54,
    students: 19870,
    thumbnail:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    banner:
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1600&q=80',
    description:
      'Design and ship a cross-platform mobile app. Learn navigation, offline storage, and publishing basics.',
    outcomes: [
      'Structure a mobile app architecture',
      'Build navigation and forms',
      'Handle device APIs and offline data',
      'Prepare an app store listing',
    ],
    curriculum: [
      {
        title: 'App Foundations',
        lessons: [
          { title: 'Screens and navigation', duration: '24m' },
          { title: 'State and persistence', duration: '27m' },
        ],
      },
    ],
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity Design',
    instructor: 'Liam Park',
    instructorId: 'liam-park',
    category: 'Design',
    rating: 4.9,
    reviews: 2980,
    duration: '15h 10m',
    lessons: 52,
    level: 'Beginner',
    price: 35,
    students: 9730,
    thumbnail:
      'https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=1200&q=80',
    banner:
      'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=1600&q=80',
    description:
      'Craft logos, color systems, and brand guidelines that feel cohesive across digital and print.',
    outcomes: [
      'Discover a brand’s personality',
      'Design a versatile logo system',
      'Build a practical brand kit',
      'Apply identity across real touchpoints',
    ],
    curriculum: [
      {
        title: 'Identity System',
        lessons: [
          { title: 'Moodboards and direction', duration: '16m' },
          { title: 'Logo construction', duration: '28m' },
        ],
      },
    ],
  },
]

export const courseReviews = [
  {
    name: 'Priya Nair',
    rating: 5,
    text: 'Clear lessons and projects that actually stuck. I landed freelance work two months after finishing.',
  },
  {
    name: 'Jordan Blake',
    rating: 5,
    text: 'The curriculum is tight. No fluff, lots of practice, and the instructor explanations are excellent.',
  },
  {
    name: 'Hana Kim',
    rating: 4,
    text: 'Great pacing. I wish there were even more downloadable templates, but I still recommend it.',
  },
]

export function getCourseById(id) {
  return courses.find((course) => course.id === id)
}
