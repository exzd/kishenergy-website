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
  {
    slug: "south-pars-gas-condensates-trading",
    title: {
      en: "Sourcing & Trading South Pars Gas Condensates: Quality Grades, Sulfur Challenges, and Logistics",
      fa: "تامین و تجارت میعانات گازی پارس جنوبی: گریدهای کیفی، چالش‌های گوگردزدایی و لجستیک",
    },
    desc: {
      en: "A deep-dive technical guide into South Pars gas condensate grades, key ASTM specification controls, and the logistics of offshore loading terminals.",
      fa: "راهنمای فنی جامع درباره گریدهای کیفی میعانات گازی پارس جنوبی، استانداردهای آزمایشگاهی ASTM و لجستیک پایانه‌های بارگیری فراساحلی.",
    },
    date: "2026-06-12",
    readTime: {
      en: "8 min read",
      fa: "مطالعه ۸ دقیقه",
    },
    icon: "🔥",
    category: {
      en: "Energy Trading",
      fa: "تجارت انرژی",
    },
    content: {
      en: {
        html: `
          <div class="key-takeaways" style="background: rgba(212, 175, 55, 0.1); border-left: 4px solid var(--accent-gold); padding: 1rem; margin-bottom: 1.5rem; border-radius: 4px;">
            <strong>Key Takeaway:</strong> South Pars gas condensate is a highly valuable ultra-light hydrocarbon liquid, but trading it requires strict monitoring of total sulfur and mercaptan levels via UOP-163 and ASTM D4294, alongside complex maritime logistics through offshore SBM terminals in Assaluyeh.
          </div>

          <p>South Pars, sharing the world's largest non-associated gas field with Qatar's North Dome, generates substantial volumes of gas condensates. As an ultra-light oil (typically with API gravity between 45° and 55°), it serves as a highly sought-after feedstock for regional splitters and petrochemical plants looking to produce naphtha, gasoline, and jet fuel.</p>

          <h2>Understanding South Pars Quality Grades</h2>
          <p>Unlike standard light crude oils, South Pars gas condensate is predominantly composed of light paraffinic hydrocarbons. Sourcing this commodity requires close evaluation of physical and chemical parameters to align with refinery configuration limits. The key quality parameters include:</p>

          <table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0; font-size: 0.95rem;">
            <thead>
              <tr style="border-bottom: 2px solid var(--accent-gold); text-align: left;">
                <th style="padding: 0.75rem;">Quality Parameter</th>
                <th style="padding: 0.75rem;">Standard Test Method</th>
                <th style="padding: 0.75rem;">Typical Range</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding: 0.75rem;"><strong>API Gravity</strong></td>
                <td style="padding: 0.75rem;">ASTM D5002</td>
                <td style="padding: 0.75rem;">48 – 53</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding: 0.75rem;"><strong>Total Sulfur</strong></td>
                <td style="padding: 0.75rem;">ASTM D4294</td>
                <td style="padding: 0.75rem;">0.15 – 0.25 wt%</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding: 0.75rem;"><strong>Mercaptan Sulfur</strong></td>
                <td style="padding: 0.75rem;">UOP-163</td>
                <td style="padding: 0.75rem;">100 – 160 ppmw</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding: 0.75rem;"><strong>Reid Vapor Pressure (RVP)</strong></td>
                <td style="padding: 0.75rem;">ASTM D323</td>
                <td style="padding: 0.75rem;">5.5 – 7.5 psi</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding: 0.75rem;"><strong>Water & Sediment</strong></td>
                <td style="padding: 0.75rem;">ASTM D4007</td>
                <td style="padding: 0.75rem;">&lt; 0.05 vol%</td>
              </tr>
            </tbody>
          </table>

          <h2>The Challenge of Sour Condensate & Mercaptans</h2>
          <p>One of the primary technical hurdles in processing South Pars condensate is its high concentration of organosulfur compounds, particularly mercaptans. High-mercaptan feeds cause significant corrosion in piping and process equipment and pose severe environmental hazards. Splitters must utilize de-mercaptanization processes (such as DMD technology or caustic wash systems) to reduce mercaptan sulfur content to less than 10 ppmw before distillation.</p>

          <h2>Offshore Logistics: Assaluyeh SBM Operations</h2>
          <p>Logistical operations for exporting South Pars gas condensate are concentrated in the port of Assaluyeh. Due to the shallow coastal waters, large chemical tankers cannot berth directly at the piers. Instead, loading is executed via offshore Single Buoy Mooring (SBM) systems connected to shore tanks through underwater pipelines. Ensuring safe, efficient loading requires careful coordination of vessel sizes, weather patterns in the Persian Gulf, and high-flow rate subsea pump management.</p>

          <h2>Structuring Trade and Quality Controls</h2>
          <p>Mitigating commercial risk in gas condensate trading demands strict quality control. Independently certified surveyors (such as SGS or Bureau Veritas) must perform sampling and testing directly from the shore tanks and ship tanks during loading to issue the formal Certificate of Quality (CoQ). Sourcing desks utilize regional financial platforms and legal structures in Free Trade Zones like Kish Island to execute these transactions securely.</p>

          <h2 style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 1.5rem; margin-top: 2rem;">Frequently Asked Questions (FAQ)</h2>
          
          <div class="faq-item" style="margin-bottom: 1.2rem;">
            <p style="color: var(--accent-gold); font-weight: 600; margin-bottom: 0.3rem;">Q: What is the average API gravity of South Pars gas condensate?</p>
            <p>A: The average API gravity ranges from 48 to 53, placing it in the ultra-light hydrocarbon class. This high API gravity yields an exceptionally high volume of light distillates, specifically naphtha, during refinery fractionation.</p>
          </div>
          
          <div class="faq-item" style="margin-bottom: 1.2rem;">
            <p style="color: var(--accent-gold); font-weight: 600; margin-bottom: 0.3rem;">Q: How are quality specifications verified during cargo loading?</p>
            <p>A: Quality specifications are verified by certified third-party inspection firms (e.g., SGS, Bureau Veritas). They draw composite samples from shore tanks prior to loading and from ship tanks post-loading, verifying density, sulfur, mercaptans, and water content against the contractual specifications.</p>
          </div>
        `,
      },
      fa: {
        html: `
          <div class="key-takeaways" style="background: rgba(212, 175, 55, 0.1); border-right: 4px solid var(--accent-gold); padding: 1rem; margin-bottom: 1.5rem; border-radius: 4px;">
            <strong>نکته کلیدی:</strong> میعانات گازی پارس جنوبی یک هیدروکربن فوق‌العاده سبک و باارزش است، اما تجارت آن مستلزم نظارت دقیق بر میزان گوگرد کل و مرکاپتان‌ها از طریق استانداردهای UOP-163 و ASTM D4294، به همراه مدیریت عملیات پیچیده بارگیری دریایی از پایانه‌های SBM عسلویه است.
          </div>

          <p>میدان پارس جنوبی که بزرگترین میدان گازی مستقل جهان مشترک بین ایران و قطر است، سالانه حجم بسیار بالایی از میعانات گازی را تولید می‌کند. این محصول به عنوان یک هیدروکربن فوق‌سبک (با درجه API بین ۴۸ تا ۵۳)، خوراک بسیار مطلوبی برای واحدهای پالایشگاهی و پتروشیمی با هدف تولید نفتا، بنزین و سوخت جت محسوب می‌شود.</p>

          <h2>آشنایی با گریدهای کیفی میعانات پارس جنوبی</h2>
          <p>بر خلاف نفت خام سبک معمولی، میعانات گازی پارس جنوبی عمدتاً از هیدروکربن‌های پارافینیک سبک تشکیل شده است. خرید این کالا نیازمند ارزیابی دقیق مشخصات فیزیکی و شیمیایی جهت همخوانی با پیکربندی پالایشگاه مقصد است. پارامترهای کلیدی کیفیت عبارتند از:</p>

          <table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0; font-size: 0.95rem; direction: rtl; text-align: right;">
            <thead>
              <tr style="border-bottom: 2px solid var(--accent-gold);">
                <th style="padding: 0.75rem;">پارامتر کیفی</th>
                <th style="padding: 0.75rem;">روش استاندارد آزمایش</th>
                <th style="padding: 0.75rem;">محدوده معمول</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding: 0.75rem;"><strong>چگالی (درجه API)</strong></td>
                <td style="padding: 0.75rem;">ASTM D5002</td>
                <td style="padding: 0.75rem;">۴۸ – ۵۳</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding: 0.75rem;"><strong>گوگرد کل</strong></td>
                <td style="padding: 0.75rem;">ASTM D4294</td>
                <td style="padding: 0.75rem;">۰.۱۵ – ۰.۲۵ wt%</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding: 0.75rem;"><strong>مرکاپتان</strong></td>
                <td style="padding: 0.75rem;">UOP-163</td>
                <td style="padding: 0.75rem;">۱۰۰ – ۱۶۰ ppmw</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding: 0.75rem;"><strong>فشار بخار رید (RVP)</strong></td>
                <td style="padding: 0.75rem;">ASTM D323</td>
                <td style="padding: 0.75rem;">۵.۵ – ۷.۵ psi</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding: 0.75rem;"><strong>آب و رسوب (B.S. & W.)</strong></td>
                <td style="padding: 0.75rem;">ASTM D4007</td>
                <td style="padding: 0.75rem;">&lt; ۰.۰۵ vol%</td>
              </tr>
            </tbody>
          </table>

          <h2>چالش گوگرد ترش و مرکاپتان‌ها</h2>
          <p>یکی از چالش‌های اصلی فرآورش میعانات پارس جنوبی، غلظت بالای ترکیبات گوگردی آلی، به ویژه مرکاپتان‌ها است. خوراک با مرکاپتان بالا باعث خوردگی شدید در خطوط لوله و تجهیزات فرآیندی شده و خطرات زیست‌محیطی جدی ایجاد می‌کند. پالایشگاه‌ها باید از فناوری‌های شیرین‌سازی (مانند فرآیندهای DMD یا شستشوی کاستیک) جهت کاهش مرکاپتان به زیر ۱۰ ppmw استفاده نمایند.</p>

          <h2>لجستیک فراساحلی: بارگیری از طریق گوی‌های شناور (SBM) عسلویه</h2>
          <p>عملیات لجستیک صادرات میعانات گازی پارس جنوبی در بندر عسلویه متمرکز است. به دلیل عمق کم سواحل، نفتکش‌های بزرگ نمی‌توانند مستقیماً در اسکله پهلو بگیرند. در نتیجه، بارگیری از طریق گوی‌های شناور بارگیری فراساحلی (SBM) متصل به مخازن ساحلی از طریق خطوط لوله زیر دریا صورت می‌پذیرد.</p>
        `,
      },
    },
  },
  {
    slug: "lpg-petrochemical-export-logistics",
    title: {
      en: "LPG & Petrochemical Export Logistics in the Persian Gulf: Vessel Chartering, Laycan Planning, and Quality Surveying",
      fa: "لجستیک صادرات ال‌پی‌جی (LPG) و محصولات پتروشیمی در خلیج فارس: اجاره کشتی، برنامه‌ریزی لایکن و بازرسی کیفی",
    },
    desc: {
      en: "An expert review of liquefied gas logistics, LPG transport safety under SIGTTO guidelines, laycan optimization, and independent third-party surveying.",
      fa: "بررسی تخصصی لجستیک گازهای مایع، ایمنی حمل‌ونقل ال‌پی‌جی بر اساس دستورالعمل‌های SIGTTO، بهینه‌سازی لایکن و بازرسی‌های مستقل شخص ثالث.",
    },
    date: "2026-06-14",
    readTime: {
      en: "9 min read",
      fa: "مطالعه ۹ دقیقه",
    },
    icon: "🚢",
    category: {
      en: "Energy Trading",
      fa: "تجارت انرژی",
    },
    content: {
      en: {
        html: `
          <div class="key-takeaways" style="background: rgba(212, 175, 55, 0.1); border-left: 4px solid var(--accent-gold); padding: 1rem; margin-bottom: 1.5rem; border-radius: 4px;">
            <strong>Key Takeaway:</strong> Successful export of LPG (Propane and Butane) requires specialized gas carriers meeting SIGTTO rules, strict adherence to cargo laycan windows to minimize demurrage, and rigorous quality surveying using gas chromatography (ASTM D2163) to verify molecular purity.
          </div>

          <p>The global trade of Liquefied Petroleum Gas (LPG)—consisting of propane and butane mixtures—along with primary petrochemicals requires highly specialized logistics. Sourcing and transporting these liquefied gases through the Persian Gulf corridor demands a combination of maritime safety expertise, vessel chartering knowledge, and strict quality assurance protocols.</p>

          <h2>LPG Vessel Selection and SIGTTO Compliance</h2>
          <p>LPG is transported under pressure or at refrigerated temperatures to maintain a liquid state. Gas carrier chartering involves three primary categories of vessels, which must strictly comply with the Society of International Gas Tanker and Terminal Operators (SIGTTO) safety regulations:</p>
          <ul>
            <li><strong>Pressurized Vessels:</strong> Typically smaller carriers holding gas at ambient temperature under pressures up to 18 bar. Ideal for regional, smaller-scale logistics.</li>
            <li><strong>Semi-Refrigerated Vessels:</strong> Capable of holding liquefied gas under partial refrigeration and pressure. Highly flexible for regional distribution.</li>
            <li><strong>Fully Refrigerated VLGCs (Very Large Gas Carriers):</strong> Carrying large cargoes (typically 80,000+ cbm) at atmospheric pressure by cooling propane to -42°C and butane to -5°C. These are the workhorses of global long-distance trade.</li>
          </ul>

          <h2>Laycan Planning and Demurrage Mitigation</h2>
          <p>In maritime transport, the <strong>Laycan</strong> (Laydays Cancelling) specifies the window during which the vessel must arrive at the loading terminal. Given the high demand for loading slots at major petrochemical hubs (such as Assaluyeh, Bandar Imam Khomeini, and Ruwais), missing a laycan slot can lead to cancellation of the berth allotment, resulting in heavy financial penalties and demurrage charges that can exceed $35,000 per day. Trading desks must coordinate closely with shipowners and terminal operators to synchronize arrival windows.</p>

          <h2>Quality Surveying and Chemical Verification</h2>
          <p>LPG composition must be verified prior to vessel departure to ensure it meets international purity standards and customer requirements. Key testing protocols include:</p>
          <ul>
            <li><strong>Composition Analysis (ASTM D2163):</strong> Done via gas chromatography to measure precise mole percentages of propane, butane, ethane, and heavier hydrocarbons.</li>
            <li><strong>Moisture & Water Content (ASTM D2713):</strong> Excess moisture causes valve freezing and hydrate formation. The valve freeze method is typically utilized.</li>
            <li><strong>Total Sulfur (ASTM D2784):</strong> Verifies that total volatile sulfur remains below contract limits, usually capped at 15–30 ppmw.</li>
          </ul>

          <h2>Leveraging Free Trade Zones for Commercial Security</h2>
          <p>Kish Island Free Trade Zone acts as a commercial pivot point. Establishing transactional desks in Kish enables brokers and traders to manage charter parties, letters of credit (LCs), and third-party inspection payments without encountering domestic import barriers. By utilizing these FTZ offshore mechanisms, companies can bridge localized petrochemical supplies with international off-takers via secure bank channels.</p>

          <h2 style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 1.5rem; margin-top: 2rem;">Frequently Asked Questions (FAQ)</h2>
          
          <div class="faq-item" style="margin-bottom: 1.2rem;">
            <p style="color: var(--accent-gold); font-weight: 600; margin-bottom: 0.3rem;">Q: Why is moisture content control critical in LPG exports?</p>
            <p>A: Excess water in LPG can freeze in valves and regulators during decompression and transport, leading to blockages and dangerous pressure buildups. It can also lead to the formation of crystalline hydrocarbon hydrates that disrupt flow lines.</p>
          </div>

          <div class="faq-item" style="margin-bottom: 1.2rem;">
            <p style="color: var(--accent-gold); font-weight: 600; margin-bottom: 0.3rem;">Q: What are the differences between pressurized and refrigerated gas carrier operations?</p>
            <p>A: Pressurized carriers carry LPG under pressure (ambient temperature), requiring thick-walled steel tanks but no insulation. Refrigerated carriers carry LPG cooled to boiling point (e.g. -42°C for propane), requiring specialized insulation, cargo compressors, and low-temperature steel alloys, enabling much larger shipment sizes.</p>
          </div>
        `,
      },
      fa: {
        html: `
          <div class="key-takeaways" style="background: rgba(212, 175, 55, 0.1); border-right: 4px solid var(--accent-gold); padding: 1rem; margin-bottom: 1.5rem; border-radius: 4px;">
            <strong>نکته کلیدی:</strong> صادرات موفق گاز مایع (LPG) نیازمند به کارگیری کشتی‌های تخصصی گازبر مطابق با استانداردهای SIGTTO، پایبندی دقیق به بازه بارگیری (Laycan) برای به حداقل رساندن دموراژ، و انجام بازرسی‌های کنترل کیفیت با روش‌های پیشرفته کروماتوگرافی گازی (ASTM D2163) جهت بررسی خلوص مولکولی است.
          </div>

          <p>تجارت جهانی گاز مایع (LPG) شامل مخلوط‌های پروپان و بوتان، و همچنین محصولات پتروشیمی پایه، به لجستیک فوق‌العاده تخصصی نیاز دارد. تامین و انتقال این گازهای مایع در دالان خلیج فارس نیازمند دانش فنی در حوزه ایمنی دریانوردی، اجاره شناورها و پروتکل‌های کنترل کیفیت سخت‌گیرانه است.</p>

          <h2>انتخاب شناورهای حمل LPG و انطباق با قواعد SIGTTO</h2>
          <p>ال‌پی‌جی به صورت تحت فشار یا سرد شده (تحت تبرید) حمل می‌شود تا حالت مایع آن حفظ گردد. اجاره کشتی‌های گازبر در سه دسته اصلی انجام می‌پذیرد که تمامی آن‌ها ملزم به رعایت کامل مقررات ایمنی انجمن بین‌المللی ترمینال‌ها و کشتی‌های گازبر (SIGTTO) هستند:</p>
          <ul>
            <li><strong>شناورهای تحت فشار (Pressurized):</strong> کشتی‌های کوچک‌تر با قابلیت تحمل فشار تا ۱۸ بار در دمای محیط. مناسب برای مقاصد نزدیک و حجم‌های پایین.</li>
            <li><strong>شناورهای نیمه تبریدی (Semi-Refrigerated):</strong> انعطاف‌پذیر با قابلیت سردسازی نسبی و نگهداری تحت فشار جزئی.</li>
            <li><strong>شناورهای تمام تبریدی (Fully Refrigerated VLGC):</strong> با ظرفیت بالای ۸۰,۰۰۰ متر مکعب با سردسازی پروپان تا دمای منفی ۴۲ درجه سانتی‌گراد.</li>
          </ul>

          <h2>برنامه‌ریزی لایکن (Laycan) و کاهش هزینه‌های دموراژ</h2>
          <p>در حمل‌ونقل دریایی، اصطلاح <strong>Laycan</strong> بازه زمانی مشخصی است که کشتی باید در بندر بارگیری پهلو بگیرد. با توجه به ترافیک بالای پایانه‌های اصلی پتروشیمی (مانند عسلویه و بندر امام خمینی)، از دست دادن نوبت بارگیری منجر به جریمه‌های مالی سنگین و هزینه دموراژ (معطلی کشتی) می‌شود که می‌تواند از ۳۵,۰۰۰ دلار در روز فراتر رود.</p>
        `,
      },
    },
  },
];
