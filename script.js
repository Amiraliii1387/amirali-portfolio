// ─── TRANSLATIONS ───────────────────────────────────────
const T = {
  en: {
    nav_about:'About', nav_exp:'Journey', nav_skills:'Skills', nav_projects:'Projects', nav_contact:'Contact',
    hero_eyebrow:"Hello, I'm", hero_cv:'Download CV',
    hero_bio:'Python Backend Developer focused on building reliable web applications with Python and Django.',
    hero_cta1:'View Project', hero_cta2:'Get in Touch',
    about_title:'About Me',
    about_p1:"I'm Amirali Saghlatoonnia, a Computer Engineering student and Python developer interested in backend engineering. I enjoy solving problems and turning ideas into practical software.",
    about_p2:"I'm currently developing my skills in Python, Django, databases, APIs, and software development practices. My goal is to become a capable backend engineer and build reliable, maintainable applications.",
    exp_title:'Learning & Experience', exp_sub:'My development journey',
    exp1_title:'Python Programming', exp1_desc:"Built a foundation in Python through practical exercises and completed Harvard's CS50P Introduction to Programming with Python course.",
    exp2_title:'Backend Development', exp2_desc:'Focusing on Django, databases, APIs, application structure, and writing clean, maintainable backend code.',
    exp3_title:'Backend Internship', exp3_desc:'Taking the next step toward professional software development through a backend internship opportunity and practical team experience.',
    skills_title:'Skills', skills_sub:"Technologies I'm learning and working with",
    sk_python:'Programming fundamentals, OOP, problem solving, and scripting.',
    sk_django:'Learning Django fundamentals, MVT architecture, models, and ORM.',
    sk_database:'Learning relational database concepts, SQL, and data modeling.',
    sk_web:'Building structured pages, responsive layouts, and personal websites.',
    proj_title:'Projects', proj_sub:'A selection of my work', proj_badge:'Featured', proj_card_title:'Amirali Personal Portfolio',
    proj_desc:'A responsive personal portfolio website introducing my background, backend development journey, skills, and contact information. Includes Persian and English languages and dark/light themes.',
    proj_link:"You're viewing this website →",
    contact_title:"Let's Connect",
    contact_sub:"I'm open to connecting with developers, learning from others, and discussing Python and backend development."
  },

  fa: {
    nav_about:'درباره من', nav_exp:'مسیر من', nav_skills:'مهارت‌ها', nav_projects:'پروژه‌ها', nav_contact:'ارتباط',
    hero_eyebrow:'سلام، من', hero_cv:'دانلود رزومه',
    hero_bio:'توسعه‌دهنده بک‌اند پایتون با تمرکز بر ساخت اپلیکیشن‌های وب قابل اعتماد با Python و Django.',
    hero_cta1:'مشاهده پروژه', hero_cta2:'ارتباط با من',
    about_title:'درباره من',
    about_p1:'من امیرعلی صقلاطون نیا هستم؛ دانشجوی مهندسی کامپیوتر و برنامه‌نویس پایتون با علاقه به توسعه بک‌اند. از حل مسئله و تبدیل ایده‌ها به نرم‌افزارهای کاربردی لذت می‌برم.',
    about_p2:'در حال تقویت مهارت‌هایم در Python، Django، پایگاه داده، API و اصول توسعه نرم‌افزار هستم. هدفم تبدیل شدن به یک مهندس بک‌اند توانمند و ساخت نرم‌افزارهای قابل اعتماد و قابل نگهداری است.',
    exp_title:'مسیر یادگیری و تجربه', exp_sub:'مسیر من در توسعه نرم‌افزار',
    exp1_title:'برنامه‌نویسی پایتون', exp1_desc:'با تمرین‌های عملی پایه برنامه‌نویسی پایتون را تقویت کردم و دوره CS50P دانشگاه هاروارد، مقدمه‌ای بر برنامه‌نویسی با پایتون، را به پایان رساندم.',
    exp2_title:'توسعه بک‌اند', exp2_desc:'تمرکز فعلی من روی Django، پایگاه داده، API، ساختار اپلیکیشن و نوشتن کد تمیز و قابل نگهداری است.',
    exp3_title:'کارآموزی بک‌اند', exp3_desc:'در مسیر ورود حرفه‌ای به توسعه نرم‌افزار و کسب تجربه عملی در محیط تیمی، مسیر کارآموزی بک‌اند را دنبال می‌کنم.',
    skills_title:'مهارت‌ها', skills_sub:'فناوری‌هایی که با آن‌ها کار می‌کنم و در حال یادگیری‌شان هستم',
    sk_python:'مبانی برنامه‌نویسی، شی‌گرایی، حل مسئله و اسکریپت‌نویسی.',
    sk_django:'یادگیری مبانی Django، معماری MVT، مدل‌ها و ORM.',
    sk_database:'یادگیری مفاهیم پایگاه داده رابطه‌ای، SQL و طراحی داده.',
    sk_web:'ساخت صفحات ساختاریافته، طراحی واکنش‌گرا و وب‌سایت شخصی.',
    proj_title:'پروژه‌ها', proj_sub:'منتخبی از کارهای من', proj_badge:'پروژه منتخب', proj_card_title:'وب‌سایت رزومه امیرعلی',
    proj_desc:'یک وب‌سایت رزومه شخصی واکنش‌گرا برای معرفی مسیر حرفه‌ای، مهارت‌ها و راه‌های ارتباطی من. این وب‌سایت از زبان فارسی و انگلیسی و پوسته روشن و تاریک پشتیبانی می‌کند.',
    proj_link:'شما در حال مشاهده همین وب‌سایت هستید ←',
    contact_title:'در ارتباط باشیم',
    contact_sub:'از آشنایی با برنامه‌نویسان، یادگیری از افراد باتجربه و گفتگو درباره پایتون و توسعه بک‌اند استقبال می‌کنم.'
  }
};

let currentLang = localStorage.getItem('aa_lang') || 'en';
let roles = [];
let roleIdx = 0, charIdx = 0, deleting = false;
const tw = document.getElementById('typewriter');

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('aa_lang', lang);

  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.setAttribute('lang', lang === 'fa' ? 'fa' : 'en');
  document.documentElement.setAttribute('dir', lang === 'fa' ? 'rtl' : 'ltr');

  document.getElementById('langToggle').textContent = lang === 'en' ? 'FA' : 'EN';

  const dict = T[lang];

  document.querySelectorAll('[data-i]').forEach(el => {
    const key = el.dataset.i;
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  roles = lang === 'fa'
    ? ['توسعه‌دهنده بک‌اند پایتون', 'برنامه‌نویس Python', 'یادگیرنده Django']
    : ['Python Backend Developer', 'Django Developer', 'Computer Engineering Student'];

  roleIdx = 0;
  charIdx = 0;
  deleting = false;

  if (tw) tw.textContent = '';
}

function type() {
  if (!tw || !roles.length) return;

  const current = roles[roleIdx];

  if (deleting) {
    tw.textContent = current.slice(0, --charIdx);

    if (charIdx === 0) {
      deleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      setTimeout(type, 400);
      return;
    }

    setTimeout(type, 40);

  } else {
    tw.textContent = current.slice(0, ++charIdx);

    if (charIdx === current.length) {
      deleting = true;
      setTimeout(type, 1600);
      return;
    }

    setTimeout(type, 75);
  }
}

// ─── THEME ──────────────────────────────────────────────
let currentTheme = localStorage.getItem('aa_theme') || 'dark';

document.documentElement.setAttribute('data-theme', currentTheme);

document.getElementById('themeToggle').addEventListener('click', () => {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';

  document.documentElement.setAttribute('data-theme', currentTheme);

  localStorage.setItem('aa_theme', currentTheme);
});

// ─── LANGUAGE ───────────────────────────────────────────
document.getElementById('langToggle').addEventListener('click', () => {
  applyLang(currentLang === 'en' ? 'fa' : 'en');
});

applyLang(currentLang);

if (tw) type();

// ─── NAVIGATION ─────────────────────────────────────────
const nav = document.getElementById('nav');
const backTop = document.getElementById('backTop');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
  backTop.classList.toggle('show', window.scrollY > 400);
}, { passive: true });

backTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const toggle = document.getElementById('navToggle');
const navLinksList = document.querySelector('.nav-links');

let menuOpen = false;

toggle.addEventListener('click', () => {
  menuOpen = !menuOpen;
  navLinksList.classList.toggle('mobile-open', menuOpen);
});

navLinksList.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    menuOpen = false;
    navLinksList.classList.remove('mobile-open');
  });
});

// ─── SCROLL REVEAL ──────────────────────────────────────
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      const delay = Number.parseInt(el.dataset.delay || '0', 10);

      setTimeout(() => {
        el.classList.add('visible');

        el.querySelectorAll('.skill-fill').forEach(bar => {
          bar.style.width = `${bar.dataset.pct}%`;
        });

      }, delay);

      revealObserver.unobserve(el);
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.skill-card, .project-card, .timeline-item').forEach(el => {
    revealObserver.observe(el);
  });

} else {
  document.querySelectorAll('.skill-card, .project-card, .timeline-item').forEach(el => {
    el.classList.add('visible');
  });

  document.querySelectorAll('.skill-fill').forEach(bar => {
    bar.style.width = `${bar.dataset.pct}%`;
  });
}

// ─── ACTIVE NAV ─────────────────────────────────────────
if ('IntersectionObserver' in window) {
  document.querySelectorAll('section[id]').forEach(section => {
    new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        document.querySelectorAll('.nav-links a').forEach(link => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${entry.target.id}`
          );
        });

      });
    }, { threshold: 0.35 }).observe(section);
  });
}
