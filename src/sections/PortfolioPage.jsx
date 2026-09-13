import { useEffect, useRef, useState } from 'react';
import Header from '../ui/Header';
import ScrollNavigatorView from '../ui/ScrollNavigator';
import HeroSection from './Hero';
import TickerSection from './Ticker';
import StorySection from './Story';
import MetricsSection from './Metrics';
import ServicesSection from './Services';
import WorkSection from './Work';
import AboutSection from './About';
import QuoteSection from './QuoteGenerator';
import ContactSection from './Contact';

const copy = {
  en: {
    nav: { services: 'Services', work: 'Work', about: 'About', quotes: 'Quotes', start: 'Start a project', email: 'Write me an email', open: 'Open menu', close: 'Close menu' },
    hero: { titleStart: 'From', titleEnd: 'to reality.', words: ['website', 'web app', 'feature', 'idea', 'product'], text: 'I develop websites and applications, add features, fix bugs and improve existing code. Tell me what you need and I will find the clearest way to build it.', primary: 'Tell me about your task', secondary: 'See my work', status: 'PROJECT_STATUS', states: ['IDEA RECEIVED', 'DESIGNING', 'BUILDING', 'READY TO SHIP'], stack: 'Websites · Apps · Code', role: <>Developer<br />and creator</>, clean: 'Clean code', ship: 'Ship ideas' },
    ticker: 'WEBSITES · WEB APPLICATIONS · BUG FIXES · NEW FEATURES · CODE IMPROVEMENTS · REACT DEVELOPMENT ·', storyTop: 'A project in four acts', storyCta: 'Start your story', frameLabel: 'Go to frame',
    scenes: [
      ['The first frame', 'It starts with a rough idea.', 'A note, a problem or a sketch is enough. We find the real goal and remove everything that does not serve it.', 'DISCOVER'],
      ['The shape appears', 'The idea becomes an experience.', 'Structure, visual direction and interaction come together before complexity has a chance to take over.', 'DESIGN'],
      ['Behind the surface', 'Every detail starts working.', 'I turn the direction into clean React code, responsive behavior and motion that supports the story.', 'BUILD'],
      ['The final frame', 'A product ready for people.', 'We test, refine and ship. The result is not just a page, but a clear digital experience with a purpose.', 'SHIP']
    ],
    metrics: ['Proof in progress', <>Numbers that <em>grow.</em></>, 'A live record of products, learning, publishing and consistency. Built one finished day at a time.', ['Projects shipped', 'Projects built', 'Courses passed', 'Daily completed', 'YouTube videos', 'Daily training']],
    services: ['What I can build', <>From idea to working <em>product.</em></>, 'You do not need to arrive with a perfect technical brief. Start with the problem and we will define the right solution.', 'Have something different in mind? Write to me', [
      ['Websites', 'Fast, responsive websites and landing pages that look sharp and turn visitors into clients.', ['React', 'Vite', 'Firebase']],
      ['Web apps', 'Useful interfaces, dashboards, internal tools and MVPs built around a real business need.', ['UI systems', 'APIs', 'Data']],
      ['Code improvements', 'Bug fixes, new features, redesigns, performance work and cleanup of existing React projects.', ['Debug', 'Refactor', 'Optimize']]
    ]],
    work: ['Selected work', <>Products I have <em>shipped.</em></>, 'A selection of projects across fitness, personal growth, workforce management and AI.', ['Fitness platform', 'Personal development', 'Workforce planning', 'AI visualization'], 'project preview'],
    about: ['Beyond the code', <>A builder with more than one <em>tool.</em></>, 'I combine programming with design, marketing, video editing and product thinking. That helps me see the whole product, not just the code behind it.', 'I am always learning, building and sharing the process. Discipline, clarity and useful work matter more to me than noise.', [['React', 'Primary stack'], ['4+', 'Products built'], ['Daily', 'Learning habit']], 'Work with me'],
    quotes: ['Personal archive', 'thoughts.', 'A growing collection of lessons, reminders and ideas gathered over the years.', 'QUOTE', 'Loading a thought...', 'Keep moving. The next step creates the way.', 'Generate another quote'],
    contact: [<>You have the task.<br /><em>I can build the solution.</em></>, 'Send me a short email with what you want to create, fix or improve. Even a rough idea is enough to start.', 'Back to top ↑'],
    pageNav: 'Page navigation', previous: 'Previous section', next: 'Next section', subject: 'Programming project inquiry'
  },
  bg: {
    nav: { services: 'Услуги', work: 'Проекти', about: 'За мен', quotes: 'Мисли', start: 'Започни проект', email: 'Изпрати ми имейл', open: 'Отвори менюто', close: 'Затвори менюто' },
    hero: { titleStart: 'От', titleEnd: 'до реалност.', words: ['сайт', 'приложение', 'функционалност', 'идея', 'продукт'], text: 'Разработвам сайтове и приложения, добавям функционалности, отстранявам проблеми и подобрявам съществуващ код. Кажи ми от какво имаш нужда и ще намеря най-ясния начин да го изградя.', primary: 'Разкажи ми за задачата', secondary: 'Виж проектите ми', status: 'СТАТУС_НА_ПРОЕКТА', states: ['ИДЕЯТА Е ПРИЕТА', 'ПРОЕКТИРАНЕ', 'ИЗГРАЖДАНЕ', 'ГОТОВО ЗА СТАРТ'], stack: 'Сайтове · Приложения · Код', role: <>Разработчик<br />и създател</>, clean: 'Чист код', ship: 'Реални идеи' },
    ticker: 'САЙТОВЕ · УЕБ ПРИЛОЖЕНИЯ · ОТСТРАНЯВАНЕ НА ПРОБЛЕМИ · НОВИ ФУНКЦИОНАЛНОСТИ · ПОДОБРЯВАНЕ НА КОД · REACT РАЗРАБОТКА ·', storyTop: 'Един проект в четири действия', storyCta: 'Започни своята история', frameLabel: 'Към кадър',
    scenes: [
      ['Първият кадър', 'Всичко започва с груба идея.', 'Една бележка, проблем или скица са достатъчни. Намираме истинската цел и премахваме всичко, което не ѝ служи.', 'ОТКРИЙ'],
      ['Формата се появява', 'Идеята се превръща в изживяване.', 'Структурата, визуалната посока и взаимодействието се събират, преди сложността да вземе превес.', 'ДИЗАЙН'],
      ['Зад повърхността', 'Всеки детайл започва да работи.', 'Превръщам посоката в чист React код, адаптивно поведение и движение, което подкрепя историята.', 'ИЗГРАДИ'],
      ['Финалният кадър', 'Продукт, готов за хората.', 'Тестваме, прецизираме и публикуваме. Резултатът не е просто страница, а ясно дигитално изживяване с цел.', 'ПУБЛИКУВАЙ']
    ],
    metrics: ['Напредък в числа', <>Числа, които <em>растат.</em></>, 'Жив архив на продукти, учене, публикуване и постоянство. Изграден ден след ден.', ['Публикувани проекти', 'Изградени проекти', 'Завършени курсове', 'Дни постоянство', 'YouTube видеа', 'Дни тренировки']],
    services: ['Какво мога да изградя', <>От идея до работещ <em>продукт.</em></>, 'Не е нужно да идваш с перфектно техническо задание. Започваме от проблема и заедно определяме правилното решение.', 'Имаш нещо различно предвид? Пиши ми', [
      ['Уебсайтове', 'Бързи и адаптивни сайтове и лендинг страници, които изглеждат силно и превръщат посетителите в клиенти.', ['React', 'Vite', 'Firebase']],
      ['Уеб приложения', 'Полезни интерфейси, табла, вътрешни инструменти и MVP решения, изградени около реална бизнес нужда.', ['UI системи', 'API', 'Данни']],
      ['Подобряване на код', 'Отстраняване на проблеми, нови функции, редизайн, оптимизация и подреждане на съществуващи React проекти.', ['Дебъг', 'Рефакториране', 'Оптимизация']]
    ]],
    work: ['Избрани проекти', <>Продукти, които съм <em>реализирал.</em></>, 'Подбор от проекти във фитнеса, личностното развитие, управлението на екипи и изкуствения интелект.', ['Фитнес платформа', 'Личностно развитие', 'Планиране на екипи', 'AI визуализация'], 'преглед на проекта'],
    about: ['Отвъд кода', <>Създател с повече от един <em>инструмент.</em></>, 'Съчетавам програмиране с дизайн, маркетинг, видеообработка и продуктово мислене. Това ми помага да виждам целия продукт, а не само кода зад него.', 'Постоянно уча, създавам и споделям процеса. Дисциплината, яснотата и полезната работа са по-важни за мен от шума.', [['React', 'Основна технология'], ['4+', 'Изградени продукта'], ['Всеки ден', 'Навик за учене']], 'Работи с мен'],
    quotes: ['Личен архив', 'мисли.', 'Растяща колекция от уроци, напомняния и идеи, събирани през годините.', 'МИСЪЛ', 'Зареждам мисъл...', 'Продължавай напред. Следващата стъпка създава пътя.', 'Покажи друга мисъл'],
    contact: [<>Ти имаш задачата.<br /><em>Аз мога да изградя решението.</em></>, 'Изпрати ми кратък имейл с това, което искаш да създадеш, поправиш или подобриш. Дори груба идея е достатъчна, за да започнем.', 'Към началото ↑'],
    pageNav: 'Навигация в страницата', previous: 'Предишна секция', next: 'Следваща секция', subject: 'Запитване за програмен проект'
  }
};

function initialLanguage() {
  try {
    const saved = window.localStorage.getItem('site-language');
    if (saved === 'bg' || saved === 'en') return saved;
  } catch {
    // Storage can be unavailable in privacy-restricted browsers.
  }
  return window.navigator.language?.toLowerCase().startsWith('bg') ? 'bg' : 'en';
}

function PortfolioPage() {
  const [language, setLanguage] = useState(initialLanguage); const [menu, setMenu] = useState(false); const [progress, setProgress] = useState(0); const [navVisible, setNavVisible] = useState(true); const [pointer, setPointer] = useState({ x: 50, y: 20 }); const lastScroll = useRef(0); const t = copy[language];
  useEffect(() => {
    document.documentElement.lang = language;
    try { window.localStorage.setItem('site-language', language) } catch { /* Storage is optional. */ }
  }, [language]);
  useEffect(() => { let frame; const scroll = () => { if (frame) return; frame = requestAnimationFrame(() => { const current = Math.max(0, scrollY); const delta = current - lastScroll.current; setProgress(current / (document.documentElement.scrollHeight - innerHeight) || 0); if (current < 80) setNavVisible(true); else if (Math.abs(delta) > 6) setNavVisible(delta < 0); lastScroll.current = current; frame = null }) }; const move = e => setPointer({ x: e.clientX / innerWidth * 100, y: e.clientY / innerHeight * 100 }); addEventListener('scroll', scroll, { passive: true }); addEventListener('pointermove', move, { passive: true }); return () => { removeEventListener('scroll', scroll); removeEventListener('pointermove', move); if (frame) cancelAnimationFrame(frame) } }, []);
  const go = id => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenu(false) };
  return <div className="site" style={{ '--mx': `${pointer.x}%`, '--my': `${pointer.y}%` }}>
    <div className="noise" />
    <div className="cursor-glow" />
    <div className="progress">
      <span style={{ transform: `scaleX(${progress})` }} />
    </div>
    <Header language={language} setLanguage={setLanguage} menu={menu} setMenu={setMenu} navVisible={navVisible} go={go} t={t} />
    <main>
      <HeroSection go={go} t={t} />
      <TickerSection text={t.ticker} />
      <StorySection t={t} />
      <MetricsSection t={t} />
      <ServicesSection t={t} />
      <WorkSection t={t} />
      <AboutSection t={t} />
      <QuoteSection t={t} />
      <ContactSection t={t} />
    </main>
    <ScrollNavigatorView t={t} />
  </div>;
}

export default PortfolioPage;
