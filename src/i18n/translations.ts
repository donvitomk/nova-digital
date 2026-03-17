export type Lang = "en" | "mk";

const translations = {
  nav: {
    services: { en: "Services", mk: "Услуги" },
    ourWork: { en: "Our Work", mk: "Наши Проекти" },
    results: { en: "Results", mk: "Резултати" },
    testimonials: { en: "Testimonials", mk: "Препораки" },
    faq: { en: "FAQ", mk: "ЧПП" },
    contact: { en: "Contact Us", mk: "Контакт" },
  },
  hero: {
    badge: { en: "Social media & creative agency", mk: "Агенција за социјални медиуми и креатива" },
    heading1: { en: "Your brand", mk: "На твојот бренд" },
    heading2: { en: "needs better", mk: "му треба подобра" },
    heading3: { en: "content", mk: "содржина" },
    description: {
      en: "NOVA is a creative agency that builds bold brands through social media, stunning design, and scroll-stopping content.",
      mk: "NOVA е креативна агенција која гради смели брендови преку социјални медиуми, неверојатен дизајн и содржина што го привлекува вниманието.",
    },
    learnMore: { en: "Learn More", mk: "Дознај Повеќе" },
    getStarted: { en: "Get Started", mk: "Започни" },
  },
  metrics: {
    brandsTransformed: { en: "Brands Transformed", mk: "Трансформирани Брендови" },
    socialImpressions: { en: "Social Impressions", mk: "Социјални Импресии" },
    avgEngagement: { en: "Avg. Engagement Growth", mk: "Просечен Раст на Ангажман" },
    websitesLaunched: { en: "Websites Launched", mk: "Лансирани Веб-Сајтови" },
    clientRetention: { en: "Client Retention", mk: "Задржување на Клиенти" },
    designsDelivered: { en: "Designs Delivered", mk: "Испорачани Дизајни" },
  },
  clientLogos: {
    trustedBy: { en: "Trusted By", mk: "Ни Веруваат" },
    brandsWorkedWith: { en: "Brands we've worked with", mk: "Брендови со кои работевме" },
  },
  services: {
    label: { en: "Our Services", mk: "Наши Услуги" },
    heading: { en: "Everything your brand needs", mk: "Сè што му треба на твојот бренд" },
    subheading: { en: "Five core creative services. One unified vision for your brand.", mk: "Пет основни креативни услуги. Една обединета визија за твојот бренд." },
    items: [
      {
        title: { en: "Social Media Marketing", mk: "Маркетинг на Социјални Медиуми" },
        description: {
          en: "Strategy, content calendars, and community management that grow your audience and drive real engagement.",
          mk: "Стратегија, календари за содржина и управување со заедницата кои го зголемуваат вашиот аудиториум и носат вистински ангажман.",
        },
      },
      {
        title: { en: "Website Design", mk: "Дизајн на Веб-Сајт" },
        description: {
          en: "Custom websites built for conversion — fast, responsive, and designed to make your brand unforgettable.",
          mk: "Прилагодени веб-сајтови направени за конверзија — брзи, респонзивни и дизајнирани да го направат вашиот бренд незаборавен.",
        },
      },
      {
        title: { en: "Website Development", mk: "Развој на Веб-Сајт" },
        description: {
          en: "Clean, performant code that brings designs to life — from landing pages to full-scale web applications.",
          mk: "Чист, перформансен код кој ги оживува дизајните — од лендинг страници до целосни веб апликации.",
        },
      },
      {
        title: { en: "Graphic Design", mk: "Графички Дизајн" },
        description: {
          en: "From social posts to print campaigns, we create visuals that stop the scroll and communicate your story.",
          mk: "Од социјални постови до печатени кампањи, создаваме визуелен содржај кој го привлекува вниманието и ја раскажува вашата приказна.",
        },
      },
      {
        title: { en: "Motion Graphic Design", mk: "Моушн Графички Дизајн" },
        description: {
          en: "Animated content that captivates — reels, explainers, and video graphics that bring your brand to life.",
          mk: "Анимирана содржина која плени — рилси, објаснувачи и видео графики кои го оживуваат вашиот бренд.",
        },
      },
      {
        title: { en: "Branding", mk: "Брендирање" },
        description: {
          en: "Complete brand identity systems — logo, typography, color, voice — that make you instantly recognizable.",
          mk: "Комплетни системи за идентитет на бренд — лого, типографија, бои, глас — кои ве прават препознатливи.",
        },
      },
    ],
  },
  ourWork: {
    label: { en: "Our Work", mk: "Наши Проекти" },
    heading: { en: "Projects we're proud of", mk: "Проекти со кои се гордееме" },
    subheading: {
      en: "A selection of brands we've helped grow, design, and transform.",
      mk: "Избор на брендови на кои им помогнавме да растат, да се дизајнираат и да се трансформираат.",
    },
    viewMore: { en: "View More Projects", mk: "Повеќе Проекти" },
    showLess: { en: "Show Less", mk: "Покажи Помалку" },
    viewProject: { en: "View Project", mk: "Види Проект" },
    projectGallery: { en: "Project Gallery", mk: "Галерија на Проектот" },
  },
  results: {
    label: { en: "Proven results", mk: "Докажани Резултати" },
    heading: { en: "Numbers don't lie", mk: "Бројките не лажат" },
    stats: [
      { label: { en: "Average engagement growth", mk: "Просечен раст на ангажман" } },
      { label: { en: "Brands we've built", mk: "Изградени брендови" } },
      { label: { en: "Social impressions generated", mk: "Генерирани социјални импресии" } },
      { label: { en: "Client satisfaction rate", mk: "Стапка на задоволство на клиенти" } },
    ],
  },
  testimonials: {
    label: { en: "Testimonials", mk: "Препораки" },
    heading: { en: "What our clients say", mk: "Што велат нашите клиенти" },
  },
  faq: {
    label: { en: "FAQ", mk: "ЧПП" },
    heading: { en: "Still have questions?", mk: "Имате прашања?" },
    items: [
      {
        q: { en: "What social media platforms do you manage?", mk: "Кои социјални мрежи ги менаџирате?" },
        a: {
          en: "We manage Instagram, TikTok, Facebook, LinkedIn, X (Twitter), and Pinterest. We'll recommend the right mix based on your audience and goals.",
          mk: "Менаџираме Instagram, TikTok, Facebook, LinkedIn, X (Twitter) и Pinterest. Ќе ви препорачаме вистинскиот микс врз основа на вашата публика и цели.",
        },
      },
      {
        q: { en: "How long does a website project take?", mk: "Колку долго трае еден веб проект?" },
        a: {
          en: "Most websites are designed, built, and launched within 3-5 weeks depending on complexity. We work in sprints and keep you involved at every milestone.",
          mk: "Повеќето веб-сајтови се дизајнираат, градат и лансираат во рок од 3-5 недели во зависност од сложеноста. Работиме во спринтови и ве вклучуваме во секој чекор.",
        },
      },
      {
        q: { en: "Do you offer branding packages for startups?", mk: "Дали нудите пакети за брендирање за стартапи?" },
        a: {
          en: "Absolutely. We have tailored branding packages that include logo design, brand guidelines, typography, color systems, and social media templates — perfect for new businesses.",
          mk: "Апсолутно. Имаме прилагодени пакети за брендирање кои вклучуваат дизајн на лого, упатства за бренд, типографија, систем на бои и шаблони за социјални медиуми — совршени за нови бизниси.",
        },
      },
      {
        q: { en: "Can you create content for our social media?", mk: "Дали можете да креирате содржина за нашите социјални медиуми?" },
        a: {
          en: "Yes — from graphic posts and carousel designs to reels, motion graphics, and stories. We handle the creative so you can focus on running your business.",
          mk: "Да — од графички постови и карусел дизајни до рилси, моушн графики и сторија. Ние се грижиме за креативата за да можете вие да се фокусирате на бизнисот.",
        },
      },
      {
        q: { en: "What makes NOVA different from other agencies?", mk: "Што го прави NOVA различен од другите агенции?" },
        a: {
          en: "We combine creative excellence with strategic thinking. Every design, post, and pixel serves a purpose. No fluff, no cookie-cutter templates — just bold, original work tailored to your brand.",
          mk: "Ја комбинираме креативната извонредност со стратешко размислување. Секој дизајн, пост и пиксел служи за цел. Без празни зборови, без шаблони — само смела, оригинална работа прилагодена за вашиот бренд.",
        },
      },
    ],
  },
  cta: {
    heading: { en: "Ready to level up your brand?", mk: "Подготвени за подигнување на вашиот бренд?" },
    subheading: {
      en: "Book a free creative consultation. We'll review your brand and show you exactly how to stand out.",
      mk: "Закажете бесплатна креативна консултација. Ќе го прегледаме вашиот бренд и ќе ви покажеме точно како да се истакнете.",
    },
    button: { en: "Book Free Consultation", mk: "Бесплатна Консултација" },
  },
  footer: {
    rights: { en: "All rights reserved.", mk: "Сите права задржани." },
  },
} as const;

export default translations;
