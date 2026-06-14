export interface BlogPost {
  slug: string;
  title: { en: string; fa: string };
  desc: { en: string; fa: string };
  date: string;
  readTime: { en: string; fa: string };
  icon: string;
  category: { en: string; fa: string };
  content: {
    en: { html: string };
    fa: { html: string };
  };
}

export const blogPosts: BlogPost[] = [
  {
    slug: "severe-service-pumps-selection",
    title: {
      en: "Selecting API 610 Centrifugal Pumps for Harsh Desert Refineries",
      fa: "انتخاب پمپ‌های گریز از مرکز استاندارد API 610 برای پالایشگاه‌های مناطق کویری",
    },
    desc: {
      en: "Explore technical criteria for purchasing certified process pumps capable of handling extreme temperatures, high solid contents, and severe pressures.",
      fa: "بررسی معیارهای فنی جهت خرید پمپ‌های فرآیندی استاندارد برای کار در دمای بالا، سیالات با رسوب و فشارهای شدید کاری.",
    },
    date: "2026-05-15",
    readTime: {
      en: "6 min read",
      fa: "مطالعه ۶ دقیقه",
    },
    icon: "🔌",
    category: {
      en: "Equipment Supply",
      fa: "تأمین تجهیزات",
    },
    content: {
      en: {
        html: `
          <p>Industrial operations in severe desert environments, such as those near the Persian Gulf, impose heavy thermal and mechanical stresses on equipment. Centrifugal process pumps built under the API 610 standard are the backbone of hydrocarbon transportation and refining under these severe-service conditions.</p>
          
          <h2>The Importance of API 610 Compliance</h2>
          <p>The American Petroleum Institute (API) 610 standard regulates the design, construction, and testing of pumps in petroleum, petrochemical, and natural gas industries. Standard water pumps fail rapidly in refineries due to chemical corrosion, high hydraulic pressures, and volatile temperatures. API 610 pumps provide thick casings, wear-resistant impellers, and advanced mechanical seals to prevent hazardous leakage.</p>
          
          <h2>Key Selection Parameters</h2>
          <p>When engineering procurement specs for these pumps, three factors take priority:</p>
          <ul>
            <li><strong>Material Class:</strong> Selection of corrosion-resistant alloys (such as duplex stainless steels or super-alloys) is critical when handling sour crude containing high hydrogen sulfide (H2S) levels.</li>
            <li><strong>Thermal Expansion:</strong> Refinery process fluids can exceed 300°C. Pumps must allow thermal growth without shaft misalignment.</li>
            <li><strong>Sealing Systems:</strong> API 682 mechanical seal configurations must be selected to isolate flammable fluids from the atmosphere.</li>
          </ul>

          <h2>Kish Energy's Sourcing Strategy</h2>
          <p>Kish Energy assists operators by sourcing custom pumps from verified European and Asian manufacturers, validating materials via strict inspection protocols (API 610 Plan 53B/54 plans), and supervising testing at factory facilities before logistics execution.</p>
        `,
      },
      fa: {
        html: `
          <p>عملیات صنعتی در شرایط محیطی سخت و کویری، نظیر مناطق مجاور خلیج فارس، تنش‌های حرارتی و مکانیکی شدیدی را به تجهیزات وارد می‌سازد. پمپ‌های گریز از مرکز فرآیندی ساخته شده بر اساس استاندارد API 610 به عنوان ستون فقرات انتقال هیدروکربن‌ها و فرآیندهای پالایشی در این شرایط عمل می‌کنند.</p>
          
          <h2>اهمیت انطباق با استاندارد API 610</h2>
          <p>استاندارد انجمن نفت آمریکا (API 610) نحوه طراحی، ساخت و تست پمپ‌ها را در صنایع نفت، پتروشیمی و گاز طبیعی تنظیم می‌کند. پمپ‌های معمولی به سرعت در شرایط پالایشگاهی به دلیل خوردگی شیمیایی، فشارهای هیدرولیکی بالا و دماهای نوسانی دچار خرابی می‌شوند. پمپ‌های با استاندارد API 610 با پوسته‌های ضخیم‌تر، پروانه‌های مقاوم در برابر سایش و آب‌بندهای مکانیکی پیشرفته از نشت مواد خطرناک جلوگیری می‌کنند.</p>
          
          <h2>پارامترهای کلیدی در انتخاب پمپ</h2>
          <p>هنگام تدوین مشخصات خرید مهندسی برای این پمپ‌ها، سه عامل اولویت دارند:</p>
          <ul>
            <li><strong>کلاس متریال:</strong> انتخاب آلیاژهای مقاوم در برابر خوردگی (مانند فولادهای ضد زنگ دوبلکس) هنگام انتقال نفت ترش حاوی سطوح بالای سولفید هیدروژن (H2S) حیاتی است.</li>
            <li><strong>انبساط حرارتی:</strong> دمای سیالات فرآیندی پالایشگاه می‌تواند از ۳۰۰ درجه سانتی‌گراد فراتر رود. طراحی پمپ باید به گونه‌ای باشد که تغییرات حرارتی موجب انحراف محور پمپ نگردد.</li>
            <li><strong>سیستم‌های آب‌بند:</strong> آرایش‌های مکانیکال سیل مطابق با استاندارد API 682 جهت جداسازی کامل سیال مشتعل‌شونده از اتمسفر انتخاب می‌شوند.</li>
          </ul>
        `,
      },
    },
  },
  {
    slug: "persian-gulf-energy-brokerage",
    title: {
      en: "Navigating Energy Trading & Logistics in the Persian Gulf Corridor",
      fa: "لجستیک و کارگزاری تجارت انرژی در دالان خلیج فارس",
    },
    desc: {
      en: "Understand how commodity traders utilize regional Free Trade Zones like Kish Island to structure transactions, mitigate shipping risks, and coordinate fleets.",
      fa: "بررسی چگونگی بهره‌برداری معامله‌گران کالا از مناطق آزاد تجاری نظیر جزیره کیش جهت ساختاردهی به تراکنش‌ها و کاهش ریسک‌های لجستیک دریایی.",
    },
    date: "2026-05-28",
    readTime: {
      en: "8 min read",
      fa: "مطالعه ۸ دقیقه",
    },
    icon: "🌐",
    category: {
      en: "Energy Trading",
      fa: "تجارت انرژی",
    },
    content: {
      en: {
        html: `
          <p>The Persian Gulf serves as a critical choke point and logistical corridor for international energy markets. Coordinating shipping logistics, commercial contracts, and letters of credit in this corridor requires deep market compliance and transaction security expertise.</p>
          
          <h2>Structuring Deals via Free Trade Zones</h2>
          <p>Kish Island Free Trade Zone provides major advantages for energy traders. With its corporate tax exemptions, duty-free imports, and flexible commercial regulations, it acts as an ideal operations center for international contracts. By establishing trading desks in the Free Zone, companies can broker deals between petrochemical producers and international off-takers without local import duties.</p>
          
          <h2>Mitigating Maritime Logistics Risks</h2>
          <p>Successfully executing energy trade involves securing chemical tankers, validating vessel specs, coordinating laycan timings, and ensuring marine insurance covers passage through global straits. Standardized contracts (Incoterms 2020) like FOB (Free on Board) and CIF (Cost, Insurance, and Freight) are the foundation of trade execution, dictating exactly where risk transfers from seller to buyer.</p>
          
          <h2>Risk Management and Compliance</h2>
          <p>Operating in the energy sector demands compliance with banking regulations, vessel verification, and strict cargo inspection (conducted by certified third parties like SGS). Mitigating counterparty risk and currency fluctuations remains the top priority for trading managers.</p>
        `,
      },
      fa: {
        html: `
          <p>خلیج فارس به عنوان یک گلوگاه و دالان لجستیکی حیاتی برای بازارهای جهانی انرژی عمل می‌کند. هماهنگی لجستیک کشتیرانی، قراردادهای تجاری و اعتبارات اسنادی در این مسیر نیاز به شناخت کامل بازار و تخصص در امنیت تراکنش‌ها دارد.</p>
          
          <h2>ساختاردهی به معاملات از طریق مناطق آزاد تجاری</h2>
          <p>منطقه آزاد جزیره کیش مزایای قابل توجهی برای معامله‌گران حوزه انرژی دارد. با برخورداری از معافیت‌های مالیاتی، ورود بدون حقوق گمرکی کالاها و مقررات انعطاف‌پذیر تجاری، کیش کانون ایده‌آلی برای قراردادهای بین‌المللی است.</p>
          
          <h2>کاهش ریسک‌های لجستیک دریایی</h2>
          <p>اجرای موفق تجارت انرژی نیازمند اجاره تانکرهای حمل مواد شیمیایی، بررسی مشخصات کشتی‌ها، هماهنگی زمان‌بندی بارگیری و بیمه دریایی است. قراردادهای استاندارد بین‌المللی مانند FOB و CIF مبنای اصلی معاملات هستند.</p>
        `,
      },
    },
  },
  {
    slug: "downstream-refinery-epc-challenges",
    title: {
      en: "Key Challenges in Downstream Refinery Expansion EPC Contracts",
      fa: "چالش‌های کلیدی در طراحی و اجرای پروژه‌های توسعه پالایشگاهی (EPC)",
    },
    desc: {
      en: "An in-depth review of procurement delays, piping installation checks, and safety designs required during downstream refinery modernization.",
      fa: "مروری عمیق بر چالش‌های خرید تجهیزات دیرساز، اتصالات لوله‌کشی و استانداردهای ایمنی در طرح‌های بهینه‌سازی پالایشگاه‌ها.",
    },
    date: "2026-06-10",
    readTime: {
      en: "10 min read",
      fa: "مطالعه ۱۰ دقیقه",
    },
    icon: "🏗️",
    category: {
      en: "EPC Projects",
      fa: "پروژه‌های EPC",
    },
    content: {
      en: {
        html: `
          <p>Downstream refinery expansion projects are massive undertakings involving thousand-ton process modules, complex utility configurations, and strict safety guidelines. Under EPC (Engineering, Procurement, and Construction) frameworks, coordinating these phases is critical to prevent delays and budget overruns.</p>
          
          <h2>Engineering: Designing for Safety and Integration</h2>
          <p>Modernizing an active refinery requires tying new process units (like hydrotreaters or catalytic crackers) into existing utilities (cooling water, steam, flare systems). Designers must employ advanced 3D scanning to map the existing site layout and prevent piping clashes. Process hazard analyses (HAZOP) are vital to ensure that pressure increases in the new units do not trigger safety risks in old systems.</p>
          
          <h2>Procurement: Managing Long-Lead Items</h2>
          <p>Refinery construction requires highly specialized equipment—such as reactor vessels, high-pressure heat exchangers, and turbo-compressors. Sourcing these long-lead items must begin early in the engineering phase. Any delay in procuring alloy steel pipes or control systems directly delays the commissioning date.</p>
          
          <h2>Construction: Safety and Quality Control</h2>
          <p>Construction inside an operating hydrocarbon refinery is a severe-risk activity. Critical hot work requires strict permit controls, structural lifting plans, and gas monitoring. Quality assurance is also vital—all welds on high-pressure pipelines undergo radiographic testing (RT) to verify integrity before commissioning.</p>
        `,
      },
      fa: {
        html: `
          <p>پروژه‌های توسعه صنایع پایین‌دستی پالایشگاهی از جمله طرح‌های کلان مهندسی هستند که شامل نصب ماژول‌های فرآیندی فوق سنگین، خطوط لوله پیچیده و استانداردهای ایمنی بسیار سخت هستند. در چارچوب قراردادهای EPC، هماهنگی بین فازها کلید موفقیت پروژه است.</p>
          
          <h2>مهندسی: طراحی ایمن و یکپارچه‌سازی سیستم‌ها</h2>
          <p>ارتقای یک پالایشگاه فعال نیازمند اتصال واحدهای فرآیندی جدید به زیرساخت‌های موجود (سیستم‌های آب خنک‌کننده، بخار و فلر) است. طراحان باید از اسکن سه‌بعدی پیشرفته برای نقشه‌برداری دقیق و پیشگیری از تداخل لوله‌کشی‌ها استفاده کنند. مطالعات ایمنی فرآیند (HAZOP) نیز برای ارزیابی ریسک‌ها ضروری است.</p>
          
          <h2>خرید: مدیریت اقلام با دوره ساخت طولانی</h2>
          <p>ساخت پالایشگاه به تجهیزات بسیار خاصی چون راکتورها، مبدل‌های حرارتی فشار بالا و کمپرسورهای فرآیندی نیاز دارد. خرید این اقلام باید در همان مراحل ابتدایی طراحی مهندسی آغاز شود.</p>
        `,
      },
    },
  },
];
