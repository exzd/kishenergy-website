export type Language = "en" | "fa";

export const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      energyTrading: "Energy Trading",
      epc: "EPC Projects",
      equipmentSupply: "Equipment Supply",
      projects: "Projects",
      blog: "Blog & Insights",
      faq: "FAQ",
      careers: "Careers",
      contact: "Contact Us",
      tagline: "Bridging Energy Markets, Building Tomorrow's Infrastructure"
    },
    // Common
    common: {
      readMore: "Read More",
      contactUs: "Contact Us",
      getInTouch: "Get In Touch",
      submit: "Submit",
      loading: "Loading...",
      exploreMore: "Explore Our Work",
      all: "All",
      learnMore: "Learn More",
      tagline: "Bridging Energy Markets, Building Tomorrow's Infrastructure"
    },
    // Home Page
    home: {
      heroTitle: "Global Energy Solutions",
      heroSubtitle: "We connect energy resources with international markets and deliver state-of-the-art infrastructure projects with exceptional engineering excellence.",
      ctaPrimary: "Explore Services",
      ctaSecondary: "Get in Touch",
      
      servicesTitle: "Our Strategic Businesses",
      servicesSubtitle: "Kish Energy operates across three main divisions, providing end-to-end capabilities in the global energy market.",
      
      tradingTitle: "Energy Trading & Brokerage",
      tradingDesc: "Global brokerage and trading of crude oil, gas, petroleum products, and petrochemicals with a robust supply network and secure financial execution.",
      
      epcTitle: "EPC Project Engineering",
      epcDesc: "Complete Engineering, Procurement, and Construction services for refineries, power generation, petrochemical complexes, and pipeline infrastructure.",
      
      supplyTitle: "Industrial Equipment Supply",
      supplyDesc: "Distribution of high-performance pumps, control valves, turbo-compressors, instrumentation, and heavy industrial gear from world-class manufacturers.",
      
      whyUsTitle: "Why Choose Kish Energy",
      whyUsSubtitle: "We combine regional knowledge, engineering expertise, and global market access to deliver unparalleled energy solutions.",
      whyUsItem1Title: "Regulatory & Compliance Mastery",
      whyUsItem1Desc: "Operating seamlessly across complex trade barriers with strict risk management frameworks.",
      whyUsItem2Title: "Engineering Excellence",
      whyUsItem2Desc: "Our world-class engineering team ensures projects conform to the highest API, ASME, and ISO standards.",
      whyUsItem3Title: "Global Network",
      whyUsItem3Desc: "Strategic relationships with energy producers, commodity brokers, and shipping fleets worldwide.",
      whyUsItem4Title: "Kish Island Hub Advantage",
      whyUsItem4Desc: "Strategically located in the Kish Free Trade Zone, offering tax advantages, import-export benefits, and fast logistics.",

      statsTitle: "Performance in Numbers",
      stats1Label: "Years of Experience",
      stats2Label: "Completed Projects",
      stats3Label: "Strategic Partners",
      stats4Label: "Million Barrels Traded",

      ctaTitle: "Ready to Discuss Your Next Energy Project?",
      ctaBody: "Partner with Kish Energy for reliable commodity trading, professional EPC execution, or certified industrial equipment supply.",
      ctaBtn: "Initiate Partnership"
    },
    // About Page
    about: {
      title: "About Kish Energy",
      subtitle: "A legacy of trust, reliability, and engineering expertise in the Persian Gulf and global energy corridor.",
      storyTitle: "Our Journey",
      storyP1: "Founded in the Kish Free Trade Zone, Kish Energy began as a specialized consultancy. Over the years, we expanded into energy trading and EPC project execution, driven by a vision to connect regional resources with international demand.",
      storyP2: "Today, we are a key player in the energy sector, bridging the gap between national production capabilities and international markets. Our multi-disciplinary team handles complex engineering projects and trades critical commodities with reliability and transparency.",
      missionTitle: "Mission & Vision",
      mission: "To power global progress by facilitating secure energy trade, constructing modern infrastructure, and supplying advanced engineering components with integrity and excellence.",
      vision: "To become the preferred Middle Eastern gateway for international energy partnerships and a standard-setter for engineering quality in the Persian Gulf region.",
      valuesTitle: "Core Values",
      value1Title: "Integrity",
      value1Desc: "Transparency in energy brokerage and compliance with international trade protocols.",
      value2Title: "Excellence",
      value2Desc: "Precision in engineering and strict adherence to industrial standards.",
      value3Title: "Reliability",
      value3Desc: "Ensuring energy supply continuity and meeting EPC project deadlines.",
      value4Title: "Innovation",
      value4Desc: "Utilizing modern trading instruments, advanced logistics, and sustainable engineering techniques."
    },
    // Services Page
    services: {
      title: "Our Capabilities",
      subtitle: "Innovative services tailored to the demands of the modern energy market.",
      tradingHeader: "Energy Trading Services",
      tradingSub: "Connecting producers and markets with seamless logistics",
      tradingBody: "Kish Energy acts as a reliable market maker and broker for a wide array of commodities. We handle complex logistics, customs clearance, and payment structures to facilitate global trade.",
      tradingItem1: "Crude Oil & Condensates (Heavy, Light, Extra Light)",
      tradingItem2: "LPG, LNG & Natural Gas Brokerage",
      tradingItem3: "Petroleum Products (Diesel, Fuel Oil, Gasoline, Jet Fuel)",
      tradingItem4: "Petrochemicals (Polymers, Fertilizers, Aromatics, Solvents)",
      
      epcHeader: "Engineering, Procurement & Construction",
      epcSub: "Full-lifecycle execution of heavy industrial infrastructure",
      epcBody: "We deliver turnkey EPC solutions for downstream, upstream, and power generation sectors. Our team manages feasibility studies, detail design, international procurement, civil construction, and commissioning.",
      epcItem1: "Refinery and Petrochemical Unit Upgrades & Expansion",
      epcItem2: "Oil & Gas Pipeline Networks and Pump Stations",
      epcItem3: "Thermal, Gas turbine, and Renewable Power Plants",
      epcItem4: "Industrial Storage Tank Farms and Marine Terminals",
      
      supplyHeader: "Equipment Supply & Logistics",
      supplySub: "Certified critical components for severe-service operations",
      supplyBody: "We source and distribute engineered components designed for extreme pressures, high temperatures, and corrosive environments. Every component is supplied with full material traceability and manufacturer warranty.",
      supplyItem1: "API 610 Centrifugal Pumps & Compressors",
      supplyItem2: "Control Valves, ESD Valves & Pressure Regulators",
      supplyItem3: "High-voltage Transformers, Switchgears & Cables",
      supplyItem4: "Process Instrumentation (Flow meters, Analyzers, Sensors)"
    },
    // Projects Page
    projects: {
      title: "Project Portfolio",
      subtitle: "A showcase of engineering excellence and successful trading operations executed by Kish Energy.",
      project1Title: "Persian Gulf Refinery Upgrade",
      project1Desc: "EPC contract for upgrading the distillation and hydrotreating units to produce Euro-V compliant diesel.",
      project2Title: "Petrochemical Export Brokerage",
      project2Desc: "Successful brokerage and logistics facilitation of 150,000 MT of Polymer products to East Asian markets.",
      project3Title: "Gas Pipeline Compression Station",
      project3Desc: "Engineering and procurement of high-performance turbo-compressor units for a major cross-country pipeline.",
      project4Title: "Marine Oil Terminal Expansion",
      project4Desc: "EPC project for building 4 new storage tanks (100,000 cbm each) and upgrading ship-loading piping systems.",
      project5Title: "Subsea Cable Installation Supply",
      project5Desc: "Supply and engineering supervision of 33kV armored submarine power cables connecting offshore platforms.",
      project6Title: "LPG Tanker Cargo Logistics",
      project6Desc: "Freight chartering and trade execution of 45,000 cbm of liquefied petroleum gas under strict regulatory compliance."
    },
    // FAQ Page
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Clear answers to inquiries about our services, trading mechanisms, and business compliance.",
      q1: "Where is Kish Energy based and does it have local offices?",
      a1: "Kish Energy is legally registered and headquartered on Kish Island, Iran, within the Free Trade Zone. We also maintain a main representative and operations office in Tehran to facilitate coordination with national ministries, engineering bureaus, and partners.",
      q2: "How does Kish Energy navigate international payment channels and sanctions?",
      a2: "We utilize our Kish Island Free Zone corporate structure and strategic partners in global financial hubs (including Oman and the UAE) to structure transactions. We ensure all trades comply with applicable risk parameters and utilize secure banking arrangements.",
      q3: "What international standards do your EPC and supply divisions follow?",
      a3: "All EPC projects and supplied equipment conform to rigorous international standards such as API (American Petroleum Institute), ASME (American Society of Mechanical Engineers), IEC (International Electrotechnical Commission), and ISO certifications. We provide full material test reports (MTR) and quality documentation.",
      q4: "Can Kish Energy act as a primary broker for state-owned refinery exports?",
      a4: "Yes, we work closely with licensed trade syndicates, private refineries, and state entities to broker and facilitate energy export cargos, handling maritime logistics, shipping insurance, and customs documentation.",
      q5: "How can we apply for vendor registration or partnership?",
      a5: "Global equipment manufacturers and energy brokers can contact our procurement department directly via our Contact page or send an email to procurement@kishenergy.ir with their company profile and product catalogs."
    },
    // Careers Page
    careers: {
      title: "Careers at Kish Energy",
      subtitle: "Join a dynamic team of engineers, trading specialists, and project managers shaping the future of regional energy.",
      introTitle: "Why Work With Us?",
      introDesc: "We offer an international working environment, competitive compensation, and the opportunity to work on landmark infrastructure projects that impact millions of lives. Our culture is built on continuous learning, safety, and mutual respect.",
      positionsTitle: "Open Positions",
      noPositions: "There are currently no active job openings. However, we are always looking for talented professionals. You can send your resume to careers@kishenergy.ir for future considerations.",
      pos1Title: "Senior Mechanical Engineer (Rotary Equipment)",
      pos1Dept: "Engineering / EPC Division",
      pos1Loc: "Tehran & On-site",
      pos2Title: "Energy Market Broker (Petrochemicals)",
      pos2Dept: "Trading & Logistics Division",
      pos2Loc: "Kish Island / Remote"
    },
    // Contact Page
    contact: {
      title: "Contact Kish Energy",
      subtitle: "Connect with our offices on Kish Island or in Tehran. We look forward to exploring partnership opportunities.",
      hqTitle: "Headquarters (Kish Island)",
      hqAddress: "Unit 305, Energy Tower, Sanaei Blvd, Kish Island, Iran",
      hqPhone: "+98 76 4442 0000",
      tehranTitle: "Operations Office (Tehran)",
      tehranAddress: "No. 12, Nelson Mandela (Jordan) Blvd, Tehran, Iran",
      tehranPhone: "+98 21 8888 0000",
      email: "info@kishenergy.ir",
      tradingEmail: "trading@kishenergy.ir",
      epcEmail: "epc@kishenergy.ir",
      formName: "Full Name",
      formEmail: "Email Address",
      formSubject: "Subject",
      formMessage: "Your Message",
      formBtn: "Send Message",
      successMsg: "Thank you for reaching out! Our team will get in touch with you shortly."
    }
  },
  fa: {
    // Navigation
    nav: {
      home: "صفحه اصلی",
      about: "درباره ما",
      services: "خدمات ما",
      energyTrading: "تجارت انرژی",
      epc: "پروژه‌های EPC",
      equipmentSupply: "تأمین تجهیزات",
      projects: "پروژه‌ها",
      blog: "وبلاگ و اخبار",
      faq: "سوالات متداول",
      careers: "فرصت‌های شغلی",
      contact: "تماس با ما",
      tagline: "پل ارتباطی بازارهای انرژی، ساخت زیرساخت‌های فردا"
    },
    // Common
    common: {
      readMore: "بیشتر بخوانید",
      contactUs: "تماس با ما",
      getInTouch: "ارتباط با ما",
      submit: "ارسال پیام",
      loading: "در حال بارگذاری...",
      exploreMore: "مشاهده پروژه‌ها",
      all: "همه",
      learnMore: "کسب اطلاعات بیشتر",
      tagline: "پل ارتباطی بازارهای انرژی، ساخت زیرساخت‌های فردا"
    },
    // Home Page
    home: {
      heroTitle: "راهکارهای جامع انرژی در سطح جهانی",
      heroSubtitle: "ما منابع انرژی را به بازارهای بین‌المللی متصل می‌کنیم و پروژه‌های زیرساختی مدرن را با بالاترین کیفیت مهندسی ارائه می‌دهیم.",
      ctaPrimary: "مشاهده خدمات",
      ctaSecondary: "ارتباط با ما",
      
      servicesTitle: "حوزه‌های فعالیت استراتژیک ما",
      servicesSubtitle: "کیش انرژی در سه بخش اصلی فعالیت می‌کند و خدمات کاملی را در بازار جهانی انرژی ارائه می‌دهد.",
      
      tradingTitle: "تجارت و کارگزاری انرژی",
      tradingDesc: "کارگزاری و تجارت بین‌المللی نفت خام، گاز، فرآورده‌های نفتی و محصولات پتروشیمی با شبکه تأمین گسترده و مطمئن مالی.",
      
      epcTitle: "مهندسی و ساخت پروژه‌های EPC",
      epcDesc: "خدمات کامل طراحی مهندسی، خرید تجهیزات و ساخت (EPC) برای پالایشگاه‌ها، نیروگاه‌ها، مجتمع‌های پتروشیمی و خطوط لوله انتقال.",
      
      supplyTitle: "تأمین تجهیزات صنعتی",
      supplyDesc: "توزیع پمپ‌های پیشرفته، شیرآلات کنترل، توربوکمپرسورها، ابزار دقیق و ماشین‌آلات سنگین صنعتی از سازندگان تراز اول جهانی.",
      
      whyUsTitle: "چرا کیش انرژی؟",
      whyUsSubtitle: "ما شناخت عمیق منطقه‌ای، دانش فنی مهندسی و دسترسی به بازارهای جهانی را برای ارائه راهکارهای بی‌نظیر تلفیق می‌کنیم.",
      whyUsItem1Title: "تسلط بر قوانین و مقررات بین‌المللی",
      whyUsItem1Desc: "انجام عملیات تجاری روان در شرایط پیچیده بازارهای بین‌المللی با مدیریت ریسک دقیق.",
      whyUsItem2Title: "سرآمدی مهندسی",
      whyUsItem2Desc: "تیم مهندسی مجرب ما تضمین می‌کند که تمامی پروژه‌ها مطابق با استانداردهای معتبر API، ASME و ISO اجرا شوند.",
      whyUsItem3Title: "شبکه ارتباطی جهانی",
      whyUsItem3Desc: "روابط استراتژیک با تولیدکنندگان انرژی، کارگزاران کالا و خطوط کشتیرانی در سراسر جهان.",
      whyUsItem4Title: "مزیت استراتژیک منطقه آزاد کیش",
      whyUsItem4Desc: "استقرار در منطقه آزاد تجاری کیش با بهره‌مندی از معافیت‌های مالیاتی، مزایای صادرات و واردات و لجستیک سریع.",

      statsTitle: "عملکرد ما در قالب ارقام",
      stats1Label: "سال تجربه در صنعت",
      stats2Label: "پروژه موفق و در حال اجرا",
      stats3Label: "شریک استراتژیک بین‌المللی",
      stats4Label: "میلیون بشکه انرژی معامله‌شده",

      ctaTitle: "آماده گفتگو درباره پروژه بعدی انرژی خود هستید؟",
      ctaBody: "برای تجارت مطمئن کالا، اجرای حرفه‌ای پروژه‌های EPC یا تأمین تجهیزات استاندارد صنعتی با کیش انرژی همراه شوید.",
      ctaBtn: "شروع همکاری"
    },
    // About Page
    about: {
      title: "درباره کیش انرژی",
      subtitle: "میراثی از اعتماد، کارآمدی و تخصص مهندسی در حوزه خلیج فارس و مسیرهای جهانی انرژی.",
      storyTitle: "مسیر رشد ما",
      storyP1: "شرکت کیش انرژی با ثبت در منطقه آزاد کیش، فعالیت خود را به عنوان یک مشاور تخصصی آغاز نمود. در طول سال‌ها، با تکیه بر دیدگاه اتصال منابع منطقه به تقاضای جهانی، دامنه خدمات خود را به تجارت کالا و اجرای پروژه‌های EPC گسترش دادیم.",
      storyP2: "امروز ما به عنوان یک بازیگر کلیدی در بخش انرژی، ارتباط مؤثری میان پتانسیل‌های تولید ملی و بازارهای بین‌المللی ایجاد کرده‌ایم. تیم چندتخصصی ما پروژه‌های مهندسی پیچیده و مبادلات کالاهای استراتژیک را با ایمنی و شفافیت کامل مدیریت می‌کند.",
      missionTitle: "مأموریت و چشم‌انداز",
      mission: "کمک به پیشرفت و توسعه جهانی از طریق تسهیل تجارت مطمئن انرژی، ساخت زیرساخت‌های مدرن و تأمین قطعات مهندسی پیشرفته با صداقت و کیفیت برتر.",
      vision: "تبدیل شدن به دروازه ترجیحی خلیج فارس برای مشارکت‌های بین‌المللی انرژی و پیشتاز استانداردهای کیفیت مهندسی در منطقه.",
      valuesTitle: "ارزش‌های بنیادی ما",
      value1Title: "صداقت و پایبندی اخلاقی",
      value1Desc: "شفافیت در کارگزاری انرژی و رعایت دقیق پروتکل‌های تجارت بین‌الملل.",
      value2Title: "کیفیت و سرآمدی",
      value2Desc: "دقت بالا در طراحی مهندسی و رعایت کامل استانداردهای بین‌المللی صنعتی.",
      value3Title: "قابلیت اطمینان",
      value3Desc: "تضمین استمرار زنجیره تأمین انرژی و تعهد کامل به زمان‌بندی پروژه‌های ساخت.",
      value4Title: "نوآوری و پویایی",
      value4Desc: "استفاده از ابزارهای نوین معاملاتی، لجستیک مدرن و فناوری‌های مهندسی پایدار."
    },
    // Services Page
    services: {
      title: "توانمندی‌های ما",
      subtitle: "خدمات نوین و منطبق بر نیازهای پویای بازار انرژی امروز.",
      tradingHeader: "خدمات تجارت انرژی",
      tradingSub: "اتصال تولیدکنندگان و بازارهای مصرف با لجستیک یکپارچه",
      tradingBody: "کیش انرژی به عنوان یک کارگزار و معامله‌گر معتبر برای طیف وسیعی از حامل‌های انرژی فعالیت می‌کند. ما کلیه امور لجستیکی، ترخیص گمرکی و ساختارهای پرداخت را برای تسهیل تجارت جهانی مدیریت می‌کنیم.",
      tradingItem1: "نفت خام و میعانات گازی (سنگین، سبک، فوق سبک)",
      tradingItem2: "کارگزاری گاز طبیعی مایع (LNG) و گاز مایع (LPG)",
      tradingItem3: "فرآورده‌های نفتی (گازوئیل، مازوت، بنزین، سوخت جت)",
      tradingItem4: "محصولات پتروشیمی (پلیمرها، کودهای شیمیایی، آروماتیک‌ها و حلال‌ها)",
      
      epcHeader: "مهندسی، خرید تجهیزات و ساخت (EPC)",
      epcSub: "اجرای کامل چرخه‌ی عمر زیرساخت‌های صنایع سنگین",
      epcBody: "ما راهکارهای کلید در دست EPC را برای بخش‌های صنایع پایین‌دستی، بالادستی و تولید نیرو ارائه می‌دهیم. تیم ما مطالعات امکان‌سنجی، طراحی تفصیلی، خرید بین‌المللی، ساخت و راه‌اندازی را بر عهده دارد.",
      epcItem1: "بهبود، ارتقا و توسعه واحدهای پالایشگاهی و پتروشیمی",
      epcItem2: "شبکه‌های خطوط لوله انتقال نفت و گاز و ایستگاه‌های پمپاژ",
      epcItem3: "نیروگاه‌های حرارتی، گازی و انرژی‌های تجدیدپذیر",
      epcItem4: "مخازن ذخیره‌سازی صنعتی و پایانه‌های بارگیری دریایی",
      
      supplyHeader: "تأمین تجهیزات و لجستیک مهندسی",
      supplySub: "قطعات حساس و تأیید صلاحیت شده برای شرایط عملیاتی سخت",
      supplyBody: "ما قطعات فنی مهندسی را برای کار در شرایط فشار بالا، دمای زیاد و محیط‌های خورنده تأمین می‌کنیم. تمام تجهیزات با قابلیت ردیابی کامل مواد و گارانتی معتبر سازنده تحویل می‌گردند.",
      supplyItem1: "پمپ‌های گریز از مرکز استاندارد API 610 و توربوکمپرسورها",
      supplyItem2: "شیرهای کنترل، شیرآلات قطع اضطراری (ESD) و رگولاتورهای فشار",
      supplyItem3: "ترانسفورماتورهای فشار قوی، تابلوهای برق و کابل‌های قدرت",
      supplyItem4: "ابزار دقیق فرآیندی (فلومترها، آنالایزرها، حسگرهای صنعتی)"
    },
    // Projects Page
    projects: {
      title: "پورتفولیوی پروژه‌ها",
      subtitle: "نمایشی از سرآمدی مهندسی و عملیات تجاری موفق که توسط کیش انرژی به اجرا درآمده است.",
      project1Title: "ارتقای پالایشگاهی خلیج فارس",
      project1Desc: "قرارداد EPC برای ارتقای واحدهای تقطیر و هیدروتریتینگ جهت تولید گازوئیل مطابق با استاندارد یورو ۵.",
      project2Title: "کارگزاری صادرات محصولات پتروشیمی",
      project2Desc: "کارگزاری و تسهیل لجستیک صادرات ۱۵۰ هزار تن محصولات پلیمری به بازارهای شرق آسیا.",
      project3Title: "ایستگاه تقویت فشار خط لوله گاز",
      project3Desc: "مهندسی و خرید واحدهای توربوکمپرسور با راندمان بالا برای خط لوله سراسری انتقال گاز.",
      project4Title: "توسعه پایانه نفتی دریایی",
      project4Desc: "پروژه EPC ساخت ۴ مخزن ذخیره‌سازی جدید (هر کدام ۱۰۰ هزار متر مکعب) و ارتقای خطوط بارگیری کشتی‌ها.",
      project5Title: "کابل‌کشی دریایی و تأمین کابل",
      project5Desc: "تأمین و نظارت مهندسی بر نصب کابل‌های برق مسلح ۳۳ کیلوولت دریایی جهت اتصال سکوهای آفشور.",
      project6Title: "لجستیک و حمل گاز مایع (LPG)",
      project6Desc: "اجاره کشتی و اجرای تجاری محموله ۴۵ هزار متر مکعبی گاز مایع تحت پایبندی کامل به قوانین بین‌المللی."
    },
    // FAQ Page
    faq: {
      title: "سوالات متداول",
      subtitle: "پاسخ‌های شفاف به پرسش‌های مطرح شده درباره خدمات، فرآیندهای تجاری و انطباق قانونی ما.",
      q1: "دفتر مرکزی کیش انرژی کجاست و آیا دفاتر محلی دارد؟",
      a1: "شرکت کیش انرژی به طور قانونی ثبت شده و دفتر مرکزی آن در منطقه آزاد تجاری کیش واقع است. ما همچنین یک دفتر عملیاتی و هماهنگی در تهران داریم تا ارتباط با وزارت‌خانه‌ها، شرکت‌های مهندسی و شرکای استراتژیک به سرعت انجام شود.",
      q2: "کیش انرژی چگونه تراکنش‌های مالی و لجستیکی بین‌المللی را مدیریت می‌کند؟",
      a2: "ما از مزایای ساختاری ثبت در منطقه آزاد تجاری کیش و همکاری با شرکای تجاری در مراکز مالی بین‌المللی نظیر عمان و امارات متحده عربی بهره می‌بریم تا پرداخت‌ها و ترتیبات بانکی را با امنیت کامل ساختاردهی کنیم.",
      q3: "بخش‌های EPC و تأمین تجهیزات شما از چه استانداردهایی پیروی می‌کنند؟",
      a3: "تمامی پروژه‌های مهندسی و تجهیزات تأمین شده مطابق با استانداردهای سخت‌گیرانه بین‌المللی نظیر API (انجمن نفت آمریکا)، ASME (انجمن مهندسان مکانیک آمریکا)، IEC (کمیسیون بین‌المللی الکتروتکنیک) و گواهینامه‌های ISO هستند و اسناد کیفیت و تست مواد (MTR) به طور کامل ارائه می‌شود.",
      q4: "آیا کیش انرژی می‌تواند به عنوان کارگزار صادراتی پالایشگاه‌های دولتی عمل کند؟",
      a4: "بله، ما همکاری نزدیکی با سندیکاهای مجاز، پالایشگاه‌های بخش خصوصی و نهادهای دولتی جهت بازاریابی و کارگزاری محموله‌های انرژی صادراتی داریم و فرآیندهای لجستیک دریایی، بیمه کشتیرانی و تشریفات گمرکی را مدیریت می‌کنیم.",
      q5: "نحوه ثبت‌نام به عنوان وندور (تأمین‌کننده) یا همکاری به چه صورت است؟",
      a5: "سازندگان بین‌المللی تجهیزات و کارگزاران حوزه انرژی می‌توانند مستقیماً از طریق صفحه تماس با بخش خرید ما ارتباط برقرار کنند یا رزومه و کاتالوگ محصولات خود را به ایمیل procurement@kishenergy.ir ارسال نمایند."
    },
    // Careers Page
    careers: {
      title: "همکاری با ما",
      subtitle: "به جمع مهندسان، متخصصان تجارت و مدیران پروژه پویا در شرکت کیش انرژی بپیوندید.",
      introTitle: "چرا کار در کیش انرژی؟",
      introDesc: "ما یک محیط کاری بین‌المللی، حقوق رقابتی و فرصت کار روی پروژه‌های بزرگ زیرساختی منطقه را ارائه می‌دهیم. فرهنگ سازمانی ما بر پایه یادگیری مداوم، ایمنی در کار و احترام متقابل بنا نهاده شده است.",
      positionsTitle: "فرصت‌های شغلی فعال",
      noPositions: "در حال حاضر موقعیت شغلی فعالی وجود ندارد. با این حال، ما همواره پذیرای رزومه افراد مستعد هستیم. می‌توانید رزومه خود را جهت بررسی‌های بعدی به آدرس careers@kishenergy.ir ارسال کنید.",
      pos1Title: "مهندس مکانیک ارشد (تجهیزات دوار)",
      pos1Dept: "بخش مهندسی / پروژه‌های EPC",
      pos1Loc: "تهران و اعزام به کارگاه",
      pos2Title: "کارشناس بازرگانی و کارگزار بازار انرژی",
      pos2Dept: "بخش تجارت و لجستیک",
      pos2Loc: "منطقه آزاد کیش / دورکاری"
    },
    // Contact Page
    contact: {
      title: "تماس با کیش انرژی",
      subtitle: "با دفاتر ما در جزیره کیش یا تهران ارتباط برقرار کنید. ما مشتاقانه آماده بررسی زمینه‌های همکاری هستیم.",
      hqTitle: "دفتر مرکزی (جزیره کیش)",
      hqAddress: "جزیره کیش، بلوار سنایی، برج انرژی، واحد ۳۰۵",
      hqPhone: "۰۷۶-۴۴۴۲۰۰۰۰",
      tehranTitle: "دفتر عملیاتی و هماهنگی (تهران)",
      tehranAddress: "تهران، بلوار نلسون ماندلا (جردن)، شماره ۱۲",
      tehranPhone: "۰۲۱-۸۸۸۸۰۰۰۰",
      email: "info@kishenergy.ir",
      tradingEmail: "trading@kishenergy.ir",
      epcEmail: "epc@kishenergy.ir",
      formName: "نام و نام خانوادگی",
      formEmail: "آدرس ایمیل",
      formSubject: "موضوع پیام",
      formMessage: "متن پیام شما",
      formBtn: "ارسال پیام",
      successMsg: "با تشکر از تماس شما! همکاران ما به زودی با شما ارتباط برقرار خواهند کرد."
    }
  }
} as const;

export type TranslationKey = typeof translations;
