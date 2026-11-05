import { useState, useEffect, useRef } from 'react';

const productsData = [
  {
    id: 'ameyy-bills',
    number: '01',
    name: 'Ameyy Bills',
    vertical: 'Retail & FinTech',
    category: 'Offline-First GST POS & Invoicing Suite',
    tagline: 'High-Velocity Invoicing. Zero Lag. 100% Compliant.',
    status: 'Production V3.2',
    flagship: true,
    accentColor: '#00e5ff',
    cardBg: 'linear-gradient(155deg, #091738 0%, #04091e 100%)',
    cardBorder: 'rgba(0, 229, 255, 0.35)',
    glowColor: 'rgba(0, 229, 255, 0.22)',
    textColor: '#ffffff',
    subTextColor: '#38bdf8',
    shortDescription: 'High-throughput desktop POS engineered for retail counters. Rapid barcode scanning, thermal receipt & A4 tax invoices, multi-counter sync, and direct WhatsApp PDF billing.',
    purpose: 'Engineered specifically for South Indian retail, wholesale, and trade businesses to eliminate billing counter bottlenecks, ensure airtight inventory control, and automate GST return filings without relying on unstable internet connections.',
    specCapsules: [
      { label: 'Architecture', val: 'Offline-First POS' },
      { label: 'Speed', val: '<1.2s Per Invoice' },
      { label: 'Tax', val: '100% GST Ready' }
    ],
    modules: [
      {
        title: 'High-Speed Counter Billing',
        desc: 'Instant barcode lookup, keyboard-only shortcuts, multi-counter register support, and rapid item dispatch with zero delay.'
      },
      {
        title: 'Dual Printing Engine',
        desc: 'Native direct driver integration for 58mm/80mm ESC/POS thermal receipt printers and standard A4/A5 GST invoices.'
      },
      {
        title: 'Inventory & Stock Alerts',
        desc: 'Real-time stock valuation, low-inventory notifications, batch/expiry tracking, and automated wholesale reorder suggestions.'
      },
      {
        title: 'GST Compliance & WhatsApp',
        desc: '1-click GSTR-1 & GSTR-3B report generation and automatic digital bill dispatch to customers via WhatsApp and email.'
      }
    ],
    targetCustomers: [
      'Electrical & Hardware Retailers',
      'Supermarkets & Departmental Stores',
      'Sanitaryware & Ceramic Showrooms',
      'Wholesale Distributors',
      'Mobile & Electronics Outlets'
    ],
    platforms: ['Windows Desktop (Electron)', 'SQLite Local DB Engine', 'Thermal ESC/POS Driver', 'Cloud Backup Sync'],
    ctaText: 'Request Demo for Your Store',
    interestOption: 'Ameyy Bills (GST Billing)'
  },
  {
    id: 'ameyy-sos-switch',
    number: '02',
    name: 'Ameyy SOS Switch',
    vertical: 'IoT & Emergency Hardware',
    category: 'Physical Panic Alert & Telemetry Hub',
    tagline: 'One Hardware Press. Instant Sub-Second Multi-Channel Alert.',
    status: 'Deployed Hardware',
    flagship: false,
    accentColor: '#ff3366',
    cardBg: 'linear-gradient(155deg, #320c18 0%, #150308 100%)',
    cardBorder: 'rgba(255, 51, 102, 0.35)',
    glowColor: 'rgba(255, 51, 102, 0.22)',
    textColor: '#ffffff',
    subTextColor: '#fda4af',
    shortDescription: 'Industrial physical panic button powered by ESP8266 Wi-Fi. Instantly triggers Telegram notifications, high-priority email alerts, and emergency relays in under 850ms.',
    purpose: 'Delivers a fail-safe physical emergency trigger for vulnerable environments where unlocking a smartphone during an emergency is too slow or impossible. Connects physical hardware directly to encrypted digital networks.',
    specCapsules: [
      { label: 'Latency', val: '<850ms Dispatch' },
      { label: 'Microcontroller', val: 'ESP8266 Wi-Fi SoC' },
      { label: 'Channels', val: 'Telegram + Email' }
    ],
    modules: [
      {
        title: 'Fail-Safe Tactile Trigger',
        desc: 'Ruggedized physical industrial push button designed for zero-latency activation under critical emergency situations.'
      },
      {
        title: 'Sub-Second Telegram Broadcast',
        desc: 'Immediate direct dispatch to dedicated Telegram bot channels with emergency site location and timestamp telemetry.'
      },
      {
        title: 'Wi-Fi Mesh & Heartbeat',
        desc: 'Continuous 60-second ping heartbeat monitoring to guarantee switch readiness and signal link reliability.'
      },
      {
        title: 'Multi-Channel Alert Fallbacks',
        desc: 'Automated SMTP email dispatch, siren relay activation, and emergency SMS gateway routing for guaranteed delivery.'
      }
    ],
    targetCustomers: [
      'Assisted Living & Elderly Care',
      'Remote Agricultural Pump Houses',
      'Commercial Showrooms & Bank Cash Counters',
      'Industrial Facilities & Warehouses'
    ],
    platforms: ['ESP8266 Microcontroller', 'Wi-Fi 802.11 b/g/n', 'Telegram Bot API', 'High-Priority SMTP Relay'],
    ctaText: 'Order SOS Switch Units',
    interestOption: 'Ameyy SOS Switch'
  },
  {
    id: 'ameyy-mobile-apps',
    number: '03',
    name: 'Ameyy Mobile Apps',
    vertical: 'Enterprise Mobile Solutions',
    category: 'Bespoke Mobile Apps for Operations & Teams',
    tagline: 'Your Business. Connected Everywhere.',
    status: 'Production V2.4',
    flagship: true,
    accentColor: '#a855f7',
    cardBg: 'linear-gradient(155deg, #251249 0%, #0d0621 100%)',
    cardBorder: 'rgba(168, 85, 247, 0.35)',
    glowColor: 'rgba(168, 85, 247, 0.22)',
    textColor: '#ffffff',
    subTextColor: '#c084fc',
    shortDescription: 'Enterprise mobile applications built for field operations. Geo-fenced staff attendance, hospitality room booking, inventory catalog management, and workflow automation.',
    purpose: 'Empowers mid-market enterprises and hospitality operators to run entire operations from mobile devices, eliminating paper logs, manual attendance disputes, and front-desk booking chaos.',
    specCapsules: [
      { label: 'Ecosystem', val: 'Android & Web Admin' },
      { label: 'Sync', val: 'Real-Time WebSockets' },
      { label: 'Security', val: 'Role-Based JWT' }
    ],
    modules: [
      {
        title: 'Hospitality & Room Operations',
        desc: 'Real-time room availability, digital guest check-in, housekeeping task assignments, and instant front-desk billing sync.'
      },
      {
        title: 'Geo-Fenced Staff Attendance',
        desc: 'Accurate GPS-anchored clock-in/out, biometric capture, automated leave approvals, and shift management.'
      },
      {
        title: 'Field Catalog & Ordering',
        desc: 'Mobile order taking for field agents, instant inventory lookup, dynamic price tiering, and digital invoice issuance.'
      },
      {
        title: 'Verification & Credentials',
        desc: 'Digital employee credentials, inspection compliance checklists, and tamper-evident QR verification.'
      }
    ],
    targetCustomers: [
      'Hotels, Resorts & Hospitality',
      'Multi-Store Retail Brands',
      'Field Sales & Distribution Teams',
      'Educational & Training Institutes'
    ],
    platforms: ['React Native Android', 'Web Management Console', 'Node.js Microservices', 'Firebase Cloud Messaging'],
    ctaText: 'Discuss App Development',
    interestOption: 'Ameyy Mobile Apps'
  },
  {
    id: 'ameyy-custom-crm',
    number: '04',
    name: 'Ameyy Custom CRM',
    vertical: 'Process Automation & ERP',
    category: 'Bespoke CRM & Workflow Management Platform',
    tagline: 'Your Business Logic. Your Stages. Zero SaaS Bloat.',
    status: 'Custom Deployed',
    flagship: false,
    accentColor: '#f59e0b',
    cardBg: 'linear-gradient(155deg, #2e1a07 0%, #120a02 100%)',
    cardBorder: 'rgba(245, 158, 11, 0.35)',
    glowColor: 'rgba(245, 158, 11, 0.22)',
    textColor: '#ffffff',
    subTextColor: '#fbbf24',
    shortDescription: 'Tailored CRM architectures configured around your commercial workflow. Kanban deal pipelines, automated quotation-to-invoice conversion, and automated WhatsApp follow-ups.',
    purpose: 'Generic off-the-shelf CRMs force you to change how you work. Ameyy Custom CRM is engineered strictly to mirror your existing business stages, team hierarchy, and client interaction lifecycle.',
    specCapsules: [
      { label: 'Logic', val: '100% Custom Tailored' },
      { label: 'Dispatch', val: 'WhatsApp & SMS Triggers' },
      { label: 'Access', val: 'Granular Role RBAC' }
    ],
    modules: [
      {
        title: 'Visual Kanban Deal Pipeline',
        desc: 'Drag-and-drop opportunity tracking from lead discovery to final payment collection with custom stage parameters.'
      },
      {
        title: 'Field Visit & Meeting Logs',
        desc: 'Client interaction timelines, geo-tagged meeting logs, follow-up scheduling, and visit outcome reporting.'
      },
      {
        title: 'Quotation to Invoice Automation',
        desc: 'One-click quote generation with dynamic margins, automated revisions, and ERP accounting sync.'
      },
      {
        title: 'Commercial Analytics Dashboard',
        desc: 'Executive visibility into sales rep conversion ratios, receivables aging, project margins, and churn risk.'
      }
    ],
    targetCustomers: [
      'Creative Media Production Studios',
      'Industrial Equipment & Machinery Vendors',
      'Service & Maintenance Providers',
      'B2B Consultancy & Trading Agencies'
    ],
    platforms: ['Progressive Web App', 'PostgreSQL / Supabase Engine', 'Automated Webhooks', 'REST API Architecture'],
    ctaText: 'Build Your Custom CRM',
    interestOption: 'Ameyy Custom CRM'
  },
  {
    id: 'ameyy-pcs',
    number: '05',
    name: 'Ameyy PCs',
    vertical: 'High-Performance Computing',
    category: 'Custom Workstations, AI Rigs & Hardware Fleet',
    tagline: 'Engineered for Heavy Compute. Thermally Optimized.',
    status: 'Custom Assembly',
    flagship: false,
    accentColor: '#3b82f6',
    cardBg: 'linear-gradient(155deg, #0e2246 0%, #061022 100%)',
    cardBorder: 'rgba(59, 130, 246, 0.35)',
    glowColor: 'rgba(59, 130, 246, 0.22)',
    textColor: '#ffffff',
    subTextColor: '#60a5fa',
    shortDescription: 'Precision hand-assembled workstations, custom liquid-cooled AI/deep learning rigs, high-FPS esports PCs, and commercial fleet hardware with 48-hour burn-in stress testing.',
    purpose: 'Deliver mission-critical desktop hardware configurations balanced for memory bandwidth, thermal endurance, and compute throughput without the markup of brand-name prebuilts.',
    specCapsules: [
      { label: 'Burn-In', val: '48-Hour Stress Run' },
      { label: 'Thermal', val: '360mm Liquid Loop' },
      { label: 'Support', val: 'On-Site Warranty & AMC' }
    ],
    modules: [
      {
        title: 'AI & Deep Learning Rigs',
        desc: 'Multi-GPU NVIDIA RTX Ada configurations with CUDA acceleration, high-bandwidth NVLink, and optimized PyTorch workflows.'
      },
      {
        title: '48-Hour Hardware Stress Testing',
        desc: 'Rigorous thermal, memory, and voltage burn-in testing under peak synthetic loads prior to client deployment.'
      },
      {
        title: 'Commercial Fleet Provisioning',
        desc: 'Standardized office desktops, mini PCs, and productivity systems with pre-imaged enterprise security configurations.'
      },
      {
        title: 'Diagnostic Maintenance & AMC',
        desc: 'Component-level hardware diagnostics, thermal paste repasting, high-speed NVMe upgrades, and on-site annual maintenance.'
      }
    ],
    targetCustomers: [
      'AI/ML Developers & Data Scientists',
      '3D VFX & Video Production Studios',
      'Architectural CAD & Design Firms',
      'Colleges, Computer Labs & Offices'
    ],
    platforms: ['Custom Hardware Assemblies', 'Windows 11 Pro Enterprise', 'Ubuntu Linux LTS', 'ECC & High-Frequency DDR5'],
    ctaText: 'Get a PC Build Quote',
    interestOption: 'Ameyy PCs (Custom Systems)'
  },
  {
    id: 'ameyy-harvest',
    number: '06',
    name: 'Ameyy Harvest',
    vertical: 'Agricultural Produce & Ag-Tech',
    category: 'Farm-to-Door Heritage Crops & Natural Food Supply',
    tagline: 'From Kameswaram Coastal Lands Directly to Your Table.',
    status: 'Direct Supply',
    flagship: false,
    accentColor: '#10b981',
    cardBg: 'linear-gradient(155deg, #0b2d1c 0%, #04140c 100%)',
    cardBorder: 'rgba(168, 85, 247, 0.35)',
    glowColor: 'rgba(16, 185, 129, 0.22)',
    textColor: '#ffffff',
    subTextColor: '#34d399',
    shortDescription: 'Direct farm-to-customer agricultural supply chain. Delivering traditional heritage rice, authentic palmyra products, coastal cashews, pure moringa, and sun-dried fish.',
    purpose: 'Connects indigenous coastal farmers of Nagapattinam directly to consumer households and retail stores, preserving traditional crop biodiversity and ensuring fair farm-gate pricing.',
    specCapsules: [
      { label: 'Origin', val: 'Kameswaram, Nagapattinam' },
      { label: 'Purity', val: 'Zero Chemical Polishing' },
      { label: 'Supply', val: 'Retail & Wholesale B2B' }
    ],
    modules: [
      {
        title: 'Traditional Heritage Rice',
        desc: 'Naturally cultivated Mappillai Samba, Karuppu Kavuni, and traditional unpolished grains preserving high dietary nutrition.'
      },
      {
        title: 'Palmyra Tubers & Cashews',
        desc: 'Authentic coastal palm products, palm jaggery (panangkarupatti), and premium raw & processed farm cashews.'
      },
      {
        title: 'Moringa & Groundnut Produce',
        desc: 'Micro-ground organic moringa leaf powder and cold-cleaned groundnut harvests straight from coastal soils.'
      },
      {
        title: 'Coastal Dried Fish (Karuvadu)',
        desc: 'Traditionally salted and hygienically sun-dried coastal seafood varieties sourced directly from local fisherman communities.'
      }
    ],
    targetCustomers: [
      'Health-Conscious Households',
      'Traditional & Organic Food Retailers',
      'Wholesale Agro Distributors',
      'Hospitality & Restaurant Kitchens'
    ],
    platforms: ['Direct Farm Gate Sourcing', 'Pan-India Parcel Delivery', 'Wholesale Bulk B2B Supply', 'Batch Quality QR Verification'],
    ctaText: 'Enquire Bulk Harvest Supply',
    interestOption: 'Ameyy Harvest (Farm Products)'
  }
];

const principles = [
  ['01', 'Start with people', 'Good technology should feel natural. We listen closely, then make the complicated feel simple.'],
  ['02', 'Make it matter', 'Every detail has a job. We focus on the decisions that move your business and your customers forward.'],
  ['03', 'Keep moving', 'The best work grows through collaboration, curiosity, and a willingness to keep improving.'],
];

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span>;
}

function Brand({ footer = false }) {
  return <a className={`brand ${footer ? 'brand-footer' : ''}`} href="#home" aria-label="Ameyy Digital Services home">
    <span className="brand-mark"><img src="/AY_AMEYY_DIGITAL_SERVICES.jpeg" alt="" /></span>
    <span className="brand-word">Ameyy<span>®</span><small> DIGITAL SERVICES (அ மெய்)</small></span>
  </a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('ameyy-theme');
    return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? 'dark' : 'light';
    localStorage.setItem('ameyy-theme', next ? 'dark' : 'light');
  }
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  const links = [['Home', '#home'], ['Products', '#products'], ['Tech Stack', '#tech-stack'], ['Clients', '#clients'], ['About', '#about'], ['Career', '#career'], ['Contact', '#contact']];
  return <header className="site-header">
    <div className="nav-wrap"><Brand />
      <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button>
      <nav className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
        {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`} title={`Switch to ${dark ? 'light' : 'dark'} mode`}><span aria-hidden="true">{dark ? '☼' : '☾'}</span></button>
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let’s talk <Arrow diagonal /></a>
      </nav>
    </div>
  </header>;
}


function HeroTrendyArt() {
  const canvasRef = useRef(null);
  const stageRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 14, y: -y * 14 });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = 340;
    let height = 340;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      width = rect.width || 340;
      height = rect.height || 340;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    }
    resize();
    window.addEventListener('resize', resize);

    // Dynamic Floating Data Particles
    const particles = [];
    const particleCount = 28;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 220,
        y: (Math.random() - 0.5) * 220,
        z: (Math.random() - 0.5) * 180,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: 1 + Math.random() * 2.2,
        hue: Math.random() > 0.5 ? '#ff2a55' : '#ff4d6d',
        phase: Math.random() * Math.PI * 2
      });
    }

    let angle1 = 0;
    let angle2 = 0;

    function render(now) {
      ctx.clearRect(0, 0, width, height);
      const cx = width / 2;
      const cy = height / 2;
      const t = now * 0.001;

      // 1. Organic Heartbeat Cadence ("lub-dub" double contraction cycle, 75 BPM)
      const cardiacPeriod = 820; // ms
      const phase = (now % cardiacPeriod) / cardiacPeriod;
      let beatPulse = 0;
      if (phase < 0.16) {
        beatPulse = Math.sin((phase / 0.16) * Math.PI) * 0.15;
      } else if (phase >= 0.22 && phase < 0.36) {
        beatPulse = Math.sin(((phase - 0.22) / 0.14) * Math.PI) * 0.08;
      }

      const heartScale = 4.4 * (1 + beatPulse);

      // Helper function to trace the mathematical parametric heart curve
      function traceHeart(scaleMultiplier, wobble = 0) {
        ctx.beginPath();
        const steps = 120;
        for (let i = 0; i <= steps; i++) {
          const theta = (i / steps) * Math.PI * 2;
          const rawX = 16 * Math.pow(Math.sin(theta), 3);
          const rawY = -(13 * Math.cos(theta) - 5 * Math.cos(2 * theta) - 2 * Math.cos(3 * theta) - Math.cos(4 * theta));

          // Subtle organic fluid ripple along the edge
          const ripple = wobble ? Math.sin(theta * 6 + now * 0.003) * wobble : 0;
          const s = scaleMultiplier + ripple;

          const px = cx + rawX * s;
          const py = cy + (rawY - 2.5) * s; // Shift centroid up by 2.5 for optical dead-center
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
      }

      // 2. Pulsing Ambient Outer Halo around the Heart (Warm Crimson/Ruby aura)
      const haloRadius = 140 * (1 + beatPulse * 0.5);
      const outerGlow = ctx.createRadialGradient(cx, cy - 10, 15, cx, cy - 10, haloRadius);
      outerGlow.addColorStop(0, 'rgba(255, 30, 80, 0.45)'); // Luminous ruby red
      outerGlow.addColorStop(0.35, 'rgba(239, 68, 68, 0.22)'); // Crimson
      outerGlow.addColorStop(0.7, 'rgba(185, 28, 28, 0.1)'); // Deep scarlet
      outerGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = outerGlow;
      ctx.beginPath();
      ctx.arc(cx, cy - 10, haloRadius, 0, Math.PI * 2);
      ctx.fill();

      // 3. Main Holographic Liquid Red Heart Body
      ctx.save();
      traceHeart(heartScale, 0.05);

      // Vivid, radiant Red gradient
      const heartGrad = ctx.createLinearGradient(cx - 70, cy - 70, cx + 70, cy + 70);
      heartGrad.addColorStop(0, '#ff3366');    // Coral / Bright Red highlight
      heartGrad.addColorStop(0.25, '#ff1744'); // Electric Vivid Red
      heartGrad.addColorStop(0.55, '#e11d48'); // Rich Carmine
      heartGrad.addColorStop(0.82, '#be123c'); // Crimson
      heartGrad.addColorStop(1, '#881337');    // Deep Ruby Wine at apex
      ctx.fillStyle = heartGrad;
      ctx.shadowColor = '#ff1744';
      ctx.shadowBlur = 28 + beatPulse * 50;
      ctx.fill();
      ctx.restore();

      // 4. Inner Luminous Core / Radiant Soul Heart
      ctx.save();
      const innerHeartScale = heartScale * 0.54;
      traceHeart(innerHeartScale);
      const innerGrad = ctx.createRadialGradient(cx, cy - 14, 0, cx, cy - 14, 42);
      innerGrad.addColorStop(0, '#ffffff'); // Pure white-hot center
      innerGrad.addColorStop(0.35, 'rgba(255, 240, 243, 0.95)'); // Light rose
      innerGrad.addColorStop(0.68, 'rgba(255, 51, 102, 0.8)'); // Radiant red
      innerGrad.addColorStop(1, 'rgba(225, 29, 72, 0.25)');
      ctx.fillStyle = innerGrad;
      ctx.shadowColor = '#ff3366';
      ctx.shadowBlur = 22;
      ctx.fill();
      ctx.restore();

      // 5. Specular 3D Glossy Highlight Arc on Upper-Left Lobe
      ctx.save();
      ctx.beginPath();
      const lobeX = cx - 34;
      const lobeY = cy - 32;
      ctx.ellipse(lobeX, lobeY, 26, 12, -0.65, 0, Math.PI * 2);
      const specGrad = ctx.createLinearGradient(lobeX - 18, lobeY - 10, lobeX + 18, lobeY + 10);
      specGrad.addColorStop(0, 'rgba(255, 255, 255, 0.75)');
      specGrad.addColorStop(1, 'rgba(255, 255, 255, 0.05)');
      ctx.fillStyle = specGrad;
      ctx.fill();
      ctx.restore();

      // 3. 3D Tilted Orbital Rings with Specular Lighting
      angle1 += 0.008;
      angle2 -= 0.006;

      // Ring 1 (Crimson Ruby Ring, tilted -22deg)
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(-0.38 + Math.sin(t * 0.8) * 0.06);
      ctx.beginPath();
      ctx.ellipse(0, 0, 115, 48, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 45, 85, 0.45)';
      ctx.lineWidth = 1.6;
      ctx.stroke();

      // Traveling Photon Light on Ring 1
      const photonX = Math.cos(angle1) * 115;
      const photonY = Math.sin(angle1) * 48;
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = '#ff1744';
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.arc(photonX, photonY, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Ring 2 (Rose Gold Ring, tilted +35deg)
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(0.62 + Math.cos(t * 0.7) * 0.06);
      ctx.beginPath();
      ctx.ellipse(0, 0, 98, 42, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 100, 130, 0.4)';
      ctx.lineWidth = 1.3;
      ctx.stroke();

      // Traveling Photon Light on Ring 2
      const photon2X = Math.cos(angle2) * 98;
      const photon2Y = Math.sin(angle2) * 42;
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = '#ff6b81';
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(photon2X, photon2Y, 3.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // 4. Ambient Stardust Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (Math.abs(p.x) > 130) p.vx *= -1;
        if (Math.abs(p.y) > 130) p.vy *= -1;

        const twinkle = 0.35 + Math.sin(t * 2.5 + p.phase) * 0.35;
        ctx.fillStyle = p.hue;
        ctx.globalAlpha = twinkle;
        ctx.beginPath();
        ctx.arc(cx + p.x, cy + p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      animId = requestAnimationFrame(render);
    }

    animId = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div 
      ref={stageRef}
      className="hero-art trendy-hero-stage"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`
      }}
      aria-label="Ameyy Digital Services Intelligent Technology Ecosystem"
    >
      {/* Dynamic Ambient Background Glow */}
      <div className="trendy-ambient-glow" />
      <div className="trendy-orbit-ring ring-1" />
      <div className="trendy-orbit-ring ring-2" />

      {/* Centerpiece Glass Deck Card */}
      <div className="trendy-core-card">
        {/* macOS Style Top Header */}
        <div className="trendy-header-bar">
          <div className="trendy-mac-dots">
            <span className="dot-red" />
            <span className="dot-yellow" />
            <span className="dot-green" />
          </div>
          <span className="trendy-header-badge">AMEYY DIGITAL SERVICES</span>
          <span className="trendy-live-indicator">
            <span className="trendy-pulse-dot" style={{ background: '#f43f5e', boxShadow: '0 0 6px #f43f5e' }} /> 72 BPM • ACTIVE
          </span>
        </div>

        {/* Fluid Aurora Orb Canvas */}
        <canvas ref={canvasRef} className="trendy-canvas" />

        {/* Bottom Caption Pill */}
        <div className="trendy-bottom-bar">
          <div className="trendy-bottom-left">
            <span className="trendy-bottom-tag">அ மெய் (AMEYY) PLATFORM</span>
            <b>TECHNOLOGY IN MOTION</b>
          </div>
          <span className="trendy-spark-icon" style={{ color: '#f43f5e', textShadow: '0 0 10px #f43f5e' }}>♥</span>
        </div>
      </div>

      {/* Floating Bento Satellite Card 1: Ameyy Bills */}
      <div className="trendy-float-card trendy-card-bills">
        <div className="float-card-icon">🧾</div>
        <div className="float-card-content">
          <span className="float-card-title">AMEYY BILLS <span className="float-card-pill pill-cyan">POS</span></span>
          <b className="float-card-value">Smart GST Suite
            <span className="micro-sparkline" title="Live sales activity">
              <span className="spark-1" />
              <span className="spark-2" />
              <span className="spark-3" />
              <span className="spark-4" />
            </span>
          </b>
        </div>
      </div>

      {/* Floating Bento Satellite Card 2: Ameyy SOS */}
      <div className="trendy-float-card trendy-card-sos">
        <div className="float-card-icon" style={{ color: '#10b981', borderColor: 'rgba(16, 185, 129, 0.35)', background: 'rgba(16, 185, 129, 0.12)' }}>🚨</div>
        <div className="float-card-content">
          <span className="float-card-title">AMEYY SOS <span className="float-card-pill pill-emerald">IoT</span></span>
          <b className="float-card-value">0.02s Alert <span className="trendy-pulse-dot" /></b>
        </div>
      </div>

      {/* Floating Bento Satellite Card 3: Ameyy Mobile Apps */}
      <div className="trendy-float-card trendy-card-mobile">
        <div className="float-card-icon" style={{ color: '#c084fc', borderColor: 'rgba(168, 85, 247, 0.35)', background: 'rgba(168, 85, 247, 0.12)' }}>📱</div>
        <div className="float-card-content">
          <span className="float-card-title">AMEYY APPS <span className="float-card-pill pill-purple">MOBILE</span></span>
          <b className="float-card-value">iOS &amp; Android</b>
        </div>
      </div>

      {/* Floating Bento Satellite Card 4: Ameyy Custom CRM */}
      <div className="trendy-float-card trendy-card-crm">
        <div className="float-card-icon" style={{ color: '#60a5fa', borderColor: 'rgba(59, 130, 246, 0.35)', background: 'rgba(59, 130, 246, 0.12)' }}>⚡</div>
        <div className="float-card-content">
          <span className="float-card-title">CUSTOM CRM <span className="float-card-pill pill-blue">ERP</span></span>
          <b className="float-card-value">Zero-Lag Sync</b>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return <section id="home" className="hero section-shell">
    <div className="hero-copy">
      <div className="eyebrow"><span className="eyebrow-line" /> DIGITAL, WITH INTENTION</div>
      <h1>Build what’s<br /><span className="gradient-text">next.</span></h1>
      <p className="hero-lead">We turn ambitious ideas into digital experiences people love to use. Software, AI, IoT, surveillance, and smart hardware tailored for enterprise growth.</p>
      <div className="hero-actions"><a className="button button-dark" href="#contact">Start a conversation <Arrow /></a><a className="text-link" href="#products">Explore our 6 products <Arrow /></a></div>
      <div className="hero-note"><span className="note-dot" /> Ameyy Digital Services (அ மெய்) — Technology for a smarter tomorrow.</div>
    </div>
    <HeroTrendyArt />
    <a className="scroll-cue" href="#products"><span /> SCROLL TO EXPLORE</a>
  </section>;
}


const statsData = [
  { value: '200+', label: 'Happy Consumers' },
  { value: '4+', label: 'Projects Completed' },
  { value: '21+', label: 'Years of Experience' },
  { value: '19', label: 'TheZians' },
];

function Stats() {
  return <section className="stats-section section-shell" aria-label="Company Statistics">
    <div className="stats-grid">
      {statsData.map((stat, idx) => (
        <div className="stat-card" key={idx}>
          <span className="stat-pill" aria-hidden="true" />
          <div className="stat-glow" aria-hidden="true" />
          <div className="stat-number">{stat.value}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  </section>;
}

const ourClientsList = [
  {
    id: 'sri-amman-pipes',
    name: 'Sri Amman Pipes & Electricals',
    logoUrl: '/Amman_pipes.png',
    accentColor: '#00e5ff',
    glowColor: 'rgba(0, 229, 255, 0.28)'
  },
  {
    id: 'mersal-media',
    name: 'Mersal Media',
    logoUrl: '/mersal.png',
    accentColor: '#a855f7',
    glowColor: 'rgba(168, 85, 247, 0.28)'
  },
  {
    id: 'vairavan-automations',
    name: 'Vairavan Automations',
    logoUrl: '/Vairavan_automations.png',
    accentColor: '#f59e0b',
    glowColor: 'rgba(245, 158, 11, 0.28)'
  },
  {
    id: 'gs-info-tech',
    name: 'G.S Info Tech',
    logoUrl: '/gs_infotech.png',
    accentColor: '#10b981',
    glowColor: 'rgba(16, 185, 129, 0.28)'
  },
  {
    id: 'senthamizha-mobiles',
    name: 'Senthamizha Mobiles',
    logoUrl: '/senthamizha_mobiles.png',
    accentColor: '#ec4899',
    glowColor: 'rgba(236, 72, 153, 0.28)'
  }
];

function Partners() {
  const [isPaused, setIsPaused] = useState(false);

  // Seamless repeat for continuous auto carousel
  const carouselItems = [
    ...ourClientsList,
    ...ourClientsList,
    ...ourClientsList,
    ...ourClientsList
  ];

  return (
    <section id="clients" className="our-clients-section" aria-label="Our Clients">
      <div className="section-shell">
        <div className="our-clients-header">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            <span>TRUSTED BUSINESSES</span>
          </div>
          <h2 className="our-clients-title">
            Our <span className="gradient-text">Clients</span>
          </h2>
        </div>
      </div>

      <div 
        className="clients-carousel-viewport"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className={`clients-carousel-track ${isPaused ? 'is-paused' : ''}`}>
          {carouselItems.map((item, idx) => (
            <div 
              className="client-tech-card" 
              key={`${item.id}-${idx}`}
              style={{ '--client-accent': item.accentColor, '--client-glow': item.glowColor }}
            >
              <div className="client-tech-logo-box">
                <div className="client-logo-plate">
                  <img src={item.logoUrl} alt={item.name} loading="lazy" />
                </div>
              </div>
              <span className="client-tech-name">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  return <div className="marquee" aria-hidden="true"><div className="marquee-track">{Array.from({ length: 2 }, (_, i) => <span key={i}>THOUGHTFUL BY DESIGN <b>✳</b> BUILT FOR WHAT’S NEXT <b>✳</b> DIGITAL WITH PURPOSE <b>✳</b> IDEAS INTO IMPACT <b>✳</b> </span>)}</div></div>;
}

function ProductVisualMockup({ product, switchStates, onToggleSwitch, currentTime }) {
  if (product.id === 'ameyy-bills') {
    return (
      <div className="mockup-screen mockup-bills">
        <div className="mockup-bar">
          <div className="mockup-dots"><span className="dot-red"/><span className="dot-yellow"/><span className="dot-green"/></div>
          <span className="mockup-title">Ameyy Bills POS • INV-2026-0842</span>
          <span className="mockup-status-pill">● GST ACTIVE</span>
        </div>
        <div className="mockup-content">
          <div className="bills-invoice-header">
            <div>
              <small>CUSTOMER / BILL TO</small>
              <b>Apex Retail Stores Ltd.</b>
              <span>GSTIN: 33AAACA1234F1Z8</span>
            </div>
            <div className="invoice-meta">
              <span className="stamp-badge">PAID</span>
              <small>DATE: 01-NOV-2026</small>
            </div>
          </div>
          <div className="bills-table">
            <div className="bills-tr bills-th">
              <span>Item Description</span><span>Qty</span><span>Rate</span><span>Total</span>
            </div>
            <div className="bills-tr">
              <span>Heavy Duty Power Drill 750W</span><span>2</span><span>₹4,200</span><span>₹8,400</span>
            </div>
            <div className="bills-tr">
              <span>Copper Wiring 90m Coil</span><span>5</span><span>₹2,500</span><span>₹12,500</span>
            </div>
            <div className="bills-tr">
              <span>Digital Multimeter Pro</span><span>1</span><span>₹2,200</span><span>₹2,200</span>
            </div>
          </div>
          <div className="bills-summary">
            <div className="summary-row"><span>Subtotal:</span><b>₹23,100.00</b></div>
            <div className="summary-row"><span>CGST (9%) + SGST (9%):</span><b>₹4,158.00</b></div>
            <div className="summary-row total-row"><span>Grand Total:</span><b>₹27,258.00</b></div>
          </div>
          <div className="bills-footer-bar">
            <span className="barcode-badge">||| |||| || |||||| |</span>
            <span className="print-pill">Thermal Print Ready 🖨️</span>
            <span className="whatsapp-pill">Instant WhatsApp PDF 📲</span>
          </div>
        </div>
      </div>
    );
  }

  if (product.id === 'ameyy-mobile-apps') {
    return (
      <div className="mockup-screen mockup-events">
        <div className="mockup-bar">
          <div className="mockup-dots"><span className="dot-red"/><span className="dot-yellow"/><span className="dot-green"/></div>
          <span className="mockup-title">Ameyy Mobile Apps • Operations Suite</span>
          <span className="mockup-status-pill">● ANDROID • iOS • WEB</span>
        </div>
        <div className="mockup-content events-ui">
          <div className="events-status-card">
            <div className="events-gps-pulse">
              <span className="pulse-ring"/>
              <span className="gps-pin">🏨</span>
            </div>
            <div>
              <small>HOTEL &amp; EVENT MANAGEMENT</small>
              <h4>Senthamizha Retail &amp; Hospitality Ops</h4>
              <p>Counter #02 • Stock Audit Active • Shift: General</p>
              <span className="events-time-badge">Mobile Stock Sync Verified • Real-Time Cloud Audit</span>
            </div>
          </div>
          <div className="events-stats-row">
            <div className="event-stat-box">
              <b>94%</b>
              <small>Room Occupancy</small>
            </div>
            <div className="event-stat-box">
              <b>184/190</b>
              <small>Staff Attendance</small>
            </div>
            <div className="event-stat-box">
              <b>12</b>
              <small>Certs Verified</small>
            </div>
          </div>
          <div className="events-tasks-list">
            <small className="section-label">OPERATIONS &amp; WORKFLOW MODULES</small>
            <div className="event-task-item is-done">
              <span className="task-check">✓</span>
              <span>Inventory Batch Dispatch: Retail Counter #01 (45 Items)</span>
              <small>Confirmed</small>
            </div>
            <div className="event-task-item is-active">
              <span className="task-spinner"/>
              <span>Employee Leave Approval &amp; Attendance Sync (Geo-fenced)</span>
              <small className="in-progress-tag">Active</small>
            </div>
            <div className="event-task-item">
              <span className="task-check" style={{ background: '#0284c7' }}>📜</span>
              <span>Certification Management: Compliance Credentials Issued &amp; Audited</span>
              <small style={{ color: '#00e5ff' }}>Verified</small>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (product.id === 'ameyy-custom-crm') {
    return (
      <div className="mockup-screen mockup-crm">
        <div className="mockup-bar">
          <div className="mockup-dots"><span className="dot-red"/><span className="dot-yellow"/><span className="dot-green"/></div>
          <span className="mockup-title">Ameyy Custom CRM • Visual Pipeline</span>
          <span className="mockup-status-pill">● PIPELINE: ₹62.5L</span>
        </div>
        <div className="mockup-content crm-content">
          <div className="crm-kanban">
            <div className="crm-col">
              <div className="crm-col-header">
                <span>Discovery</span>
                <span className="col-count">3</span>
              </div>
              <div className="crm-deal-card">
                <b>Mersal Media Video Series</b>
                <p>Commercial Shoot • ₹3.5L</p>
                <span className="deal-tag">Photography</span>
              </div>
            </div>
            <div className="crm-col">
              <div className="crm-col-header">
                <span>Proposal Sent</span>
                <span className="col-count">2</span>
              </div>
              <div className="crm-deal-card highlight">
                <b>Sri Amman Hardware ERP</b>
                <p>POS &amp; Multi-Branch • ₹8.5L</p>
                <span className="deal-tag enterprise">Enterprise</span>
              </div>
            </div>
            <div className="crm-col">
              <div className="crm-col-header">
                <span>Closed / Won</span>
                <span className="col-count">5</span>
              </div>
              <div className="crm-deal-card won">
                <b>Vairavan Automations IoT Relays</b>
                <p>Industrial Control Panel • ₹14.2L</p>
                <span className="deal-tag won-tag">Contract Signed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (product.id === 'ameyy-sos-switch') {
    return (
      <div className="mockup-screen mockup-switch">
        <div className="mockup-bar">
          <div className="mockup-dots"><span className="dot-red"/><span className="dot-yellow"/><span className="dot-green"/></div>
          <span className="mockup-title">Ameyy SOS Switch • Smart IoT Alert System</span>
          <span className={`mockup-status-pill ${switchStates.sos ? 'rec-pill' : ''}`}>
            {switchStates.sos ? '● SOS EMERGENCY ACTIVE' : '● ESP8266 WI-FI READY'}
          </span>
        </div>
        <div className="mockup-content switch-content">
          <div className="switch-relays-grid">
            <div className={`relay-card sos-card ${switchStates.sos ? 'is-sos-active' : ''}`} style={{ padding: '16px 18px' }}>
              <div className="relay-top">
                <span className="relay-icon">{switchStates.sos ? '🚨' : '🛡️'}</span>
                <div>
                  <span className={`relay-badge ${switchStates.sos ? 'sos-badge' : ''}`}>
                    {switchStates.sos ? 'EMERGENCY TRIGGER DISPATCHED' : 'SYSTEM ARMED &amp; MONITORING'}
                  </span>
                  <h4 style={{ margin: '4px 0 2px', fontSize: '14px' }}>Physical SOS Panic Switch</h4>
                  <p style={{ margin: 0, fontSize: '11px' }}>ESP8266 Microcontroller • Wi-Fi Connected • Uptime: 99.98%</p>
                </div>
              </div>
              <button 
                type="button" 
                className="toggle-button sos-btn"
                style={{ padding: '8px 16px', fontSize: '11px' }}
                onClick={() => onToggleSwitch('sos')}
              >
                <span className="toggle-handle"/>
                <span className="toggle-label">{switchStates.sos ? 'RESET ALARM ↺' : 'PRESS SOS TRIGGER 🚨'}</span>
              </button>
            </div>
          </div>

          <div className="events-tasks-list">
            <small className="section-label">INSTANT NOTIFICATION &amp; TELEMETRY CHANNELS</small>
            
            <div className={`event-task-item ${switchStates.sos ? 'is-active' : 'is-done'}`}>
              <span className="task-check" style={{ background: '#229ED9' }}>✈️</span>
              <div style={{ flex: 1, paddingRight: '8px' }}>
                <b style={{ display: 'block', color: '#fff', fontSize: '11px' }}>Telegram Bot Alerts (@AmeyySOSBot)</b>
                <small style={{ color: switchStates.sos ? '#fca5a5' : '#8c95b4', fontSize: '10px' }}>
                  {switchStates.sos 
                    ? `[ALERT BROADCAST ${currentTime}] SOS triggered at Site #1 (Elderly Care Unit). Lat: 10.74, Long: 79.84.`
                    : 'Instant Telegram alerts ready to dispatch to family and security channels upon physical press.'}
                </small>
              </div>
              <small className={switchStates.sos ? 'in-progress-tag' : 'tab-count'}>{switchStates.sos ? 'LIVE ALERT' : 'IDLE'}</small>
            </div>

            <div className={`event-task-item ${switchStates.sos ? 'is-active' : 'is-done'}`}>
              <span className="task-check" style={{ background: '#ea4335' }}>✉️</span>
              <div style={{ flex: 1, paddingRight: '8px' }}>
                <b style={{ display: 'block', color: '#fff', fontSize: '11px' }}>Instant Email Notifications</b>
                <small style={{ color: switchStates.sos ? '#fca5a5' : '#8c95b4', fontSize: '10px' }}>
                  {switchStates.sos 
                    ? 'High-priority emergency email delivered to registered administrators & contacts.'
                    : 'Automated SMTP email integration standing by.'}
                </small>
              </div>
              <small className={switchStates.sos ? 'in-progress-tag' : 'tab-count'}>{switchStates.sos ? 'SENT' : 'READY'}</small>
            </div>

            <div className="event-task-item">
              <span className="task-check" style={{ background: '#059669' }}>📡</span>
              <div style={{ flex: 1 }}>
                <b style={{ display: 'block', color: '#fff', fontSize: '11px' }}>ESP8266 Wi-Fi Remote Monitoring</b>
                <small style={{ color: '#8c95b4', fontSize: '10px' }}>Online • Latency: 16ms • Compact Hardware Implementation</small>
              </div>
              <small style={{ color: '#27c93f', fontWeight: 'bold' }}>ONLINE</small>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (product.id === 'ameyy-pcs') {
    return (
      <div className="mockup-screen mockup-pcs">
        <div className="mockup-bar">
          <div className="mockup-dots"><span className="dot-red"/><span className="dot-yellow"/><span className="dot-green"/></div>
          <span className="mockup-title">Ameyy PCs • Custom Benchmark Diagnostics</span>
          <span className="mockup-status-pill">● 48-HR STRESS PASS</span>
        </div>
        <div className="mockup-content pcs-content">
          <div className="pcs-header">
            <span className="pcs-badge-rig">FLAGSHIP WORKSTATION</span>
            <h4>Ameyy Apex Developer &amp; AI Rig</h4>
            <p>Engineered for High-Throughput Compiles, Deep Learning &amp; 3D VFX</p>
          </div>
          <div className="pcs-specs-grid">
            <div className="spec-item">
              <span className="spec-label">CPU</span>
              <b>AMD Ryzen 9 7950X / Intel Core i9-14900K</b>
              <small>16 Cores / 32 Threads @ 5.7 GHz</small>
            </div>
            <div className="spec-item highlight">
              <span className="spec-label">GPU</span>
              <b>NVIDIA GeForce RTX 4090 24GB GDDR6X</b>
              <small>CUDA &amp; Tensor Cores Optimized for LLM</small>
            </div>
            <div className="spec-item">
              <span className="spec-label">RAM</span>
              <b>64GB Dual-Channel DDR5 6000MHz RGB</b>
              <small>Low-Latency Timings &amp; EXPO Profile</small>
            </div>
            <div className="spec-item">
              <span className="spec-label">STORAGE</span>
              <b>4TB PCIe Gen4 NVMe SSD (7400 MB/s)</b>
              <small>Ultra-Fast Boot &amp; Dataset Scratch Drive</small>
            </div>
          </div>
          <div className="pcs-thermal-bench">
            <div className="thermal-item"><span>Peak CPU Temp:</span><b>58°C (360mm AIO Liquid)</b></div>
            <div className="thermal-item"><span>Power Supply:</span><b>1000W 80+ Gold Full Modular</b></div>
            <div className="thermal-item"><span>Warranty:</span><b>3 Years On-Site Support &amp; AMC</b></div>
          </div>
        </div>
      </div>
    );
  }

  if (product.id === 'ameyy-harvest') {
    return (
      <div className="mockup-screen mockup-harvest">
        <div className="mockup-bar">
          <div className="mockup-dots"><span className="dot-red"/><span className="dot-yellow"/><span className="dot-green"/></div>
          <span className="mockup-title">Ameyy Harvest • Farm-to-Home Origin Passport</span>
          <span className="mockup-status-pill harvest-pill">● 100% ORGANIC</span>
        </div>
        <div className="mockup-content harvest-content">
          <div className="harvest-origin-banner">
            <span className="origin-icon">🌾</span>
            <div>
              <small>FARM ORIGIN</small>
              <h4>Kameswaram Coastal Lands, Nagapattinam</h4>
              <p>Direct from traditional farmers • Zero chemical polishing • Certified pure</p>
            </div>
          </div>
          <div className="harvest-grid">
            <div className="harvest-item">
              <span className="item-tag">TRADITIONAL RICE</span>
              <b>Mappillai Samba &amp; Heritage Rice</b>
              <small>Naturally grown, chemical-free traditional rice</small>
            </div>
            <div className="harvest-item">
              <span className="item-tag">PALMYRA &amp; CASHEWS</span>
              <b>Palmyra Tubers, Seeds &amp; Cashews</b>
              <small>Authentic palm products and premium processed cashews</small>
            </div>
            <div className="harvest-item">
              <span className="item-tag">MORINGA &amp; GROUNDNUTS</span>
              <b>Pure Moringa Powder &amp; Groundnuts</b>
              <small>Nutrient-dense moringa and farm-direct quality groundnuts</small>
            </div>
            <div className="harvest-item">
              <span className="item-tag">DRY FISH (KARUVADU)</span>
              <b>Traditional Coastal Dried Fish</b>
              <small>Authentic locally sourced varieties, sun-dried naturally</small>
            </div>
          </div>
          <div className="harvest-footer-trust">
            <span>✓ Pan-India Home Delivery</span>
            <span>✓ Wholesale Bulk B2B Supply</span>
            <span>✓ Transparent Farm Gate Price</span>
          </div>
        </div>
      </div>
    );
  }

  return null;
}



function ProductIcon({ id, className = '', size = 26 }) {
  if (id === 'ameyy-bills') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <path d="M6 7h12M6 11h7" />
        <circle cx="17" cy="11" r="1" fill="currentColor" />
      </svg>
    );
  }
  if (id === 'ameyy-sos-switch') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3" fill="currentColor" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
      </svg>
    );
  }
  if (id === 'ameyy-mobile-apps') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="5" y="2" width="14" height="20" rx="3" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
        <line x1="9" y1="6" x2="15" y2="6" />
        <path d="M9 10h6M9 14h4" />
      </svg>
    );
  }
  if (id === 'ameyy-custom-crm') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="12" cy="18" r="3" />
        <line x1="8.5" y1="7.5" x2="15.5" y2="7.5" />
        <line x1="7.5" y1="8.5" x2="10.5" y2="15.5" />
        <line x1="16.5" y1="8.5" x2="13.5" y2="15.5" />
      </svg>
    );
  }
  if (id === 'ameyy-pcs') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <circle cx="12" cy="14" r="3.5" />
        <line x1="8" y1="6" x2="16" y2="6" />
        <circle cx="12" cy="14" r="1" fill="currentColor" />
        <line x1="12" y1="10.5" x2="12" y2="17.5" />
        <line x1="8.5" y1="14" x2="15.5" y2="14" />
      </svg>
    );
  }
  if (id === 'ameyy-harvest') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M11 20A7 7 0 0 1 4 13C4 7 11 3 20 3c0 9-4 16-11 16z" />
        <path d="M11 20v-8M11 12l4-3" />
      </svg>
    );
  }
  return <span>★</span>;
}


function ProductModal({ product, onClose, onAction }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  return (
    <div className="product-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-product-title">
      <div className="product-modal-content" onClick={(e) => e.stopPropagation()} style={{ '--modal-accent': product.accentColor }}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close product details">✕</button>

        <div className="modal-top">
          <div className="modal-icon-badge" style={{ color: product.accentColor, borderColor: product.cardBorder }}>
            <ProductIcon id={product.id} size={30} />
          </div>
          <div className="modal-header-text">
            <div className="modal-badges">
              <span className="modal-num">PRODUCT #{product.number}</span>
              <span className="modal-category-tag" style={{ color: product.accentColor }}>{product.category}</span>
              {product.flagship && <span className="modal-flagship-tag">★ FLAGSHIP PRODUCT</span>}
              <span className="modal-status-tag">{product.status}</span>
            </div>
            <h2 id="modal-product-title">{product.name}</h2>
            <p className="modal-tagline" style={{ color: product.subTextColor }}>{product.tagline}</p>
          </div>
        </div>

        <div className="modal-body-scroll">
          {/* Executive Performance Capsules */}
          {product.specCapsules && (
            <div className="modal-spec-metrics-row">
              {product.specCapsules.map((item, idx) => (
                <div className="modal-metric-card" key={idx}>
                  <small>{item.label}</small>
                  <b>{item.val}</b>
                </div>
              ))}
            </div>
          )}

          {/* Overview Statement */}
          <div className="modal-block">
            <h4 className="modal-section-title">Product Purpose &amp; Architecture</h4>
            <p className="modal-purpose-text">{product.purpose || product.shortDescription}</p>
          </div>

          {/* 4 Bento Architecture Modules */}
          {product.modules && (
            <div className="modal-block">
              <h4 className="modal-section-title">Core Architecture &amp; Production Systems</h4>
              <div className="modal-bento-grid">
                {product.modules.map((mod, idx) => (
                  <div className="modal-bento-card" key={idx}>
                    <div className="modal-bento-header">
                      <span className="bento-num-badge" style={{ color: product.accentColor }}>0{idx + 1}</span>
                      <h5>{mod.title}</h5>
                    </div>
                    <p>{mod.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Target Customers & Platforms */}
          <div className="modal-split-grid">
            <div className="modal-block">
              <h4 className="modal-section-title">Target Deployment Verticals</h4>
              <div className="modal-chips-wrap">
                {product.targetCustomers.map((cust, idx) => (
                  <span className="modal-chip" key={idx}>{cust}</span>
                ))}
              </div>
            </div>

            <div className="modal-block">
              <h4 className="modal-section-title">Platform Architecture</h4>
              <div className="modal-chips-wrap">
                {product.platforms.map((plat, idx) => (
                  <span className="modal-chip modal-chip-tech" key={idx}>⚡ {plat}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="modal-btn-secondary" onClick={onClose}>
            Back to Products
          </button>
          <button 
            className="modal-btn-primary button button-dark" 
            onClick={() => onAction(product)}
            style={{ background: `linear-gradient(135deg, ${product.accentColor} 0%, #0e3ec4 100%)` }}
          >
            {product.ctaText} <Arrow />
          </button>
        </div>
      </div>
    </div>
  );
}

function ProductColorCard({ product, onOpenModal }) {
  return (
    <article 
      className="color-product-card" 
      style={{ 
        background: product.cardBg, 
        borderColor: product.cardBorder,
        '--card-accent': product.accentColor,
        '--card-glow': product.glowColor
      }}
      onClick={() => onOpenModal(product)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { 
        if (e.key === 'Enter' || e.key === ' ') { 
          e.preventDefault(); 
          onOpenModal(product); 
        } 
      }}
      aria-label={`View full specifications for ${product.name}`}
    >
      <div className="card-top-row">
        {/* Custom SVG Icon Squircle */}
        <div className="card-icon-squircle" style={{ color: product.accentColor }}>
          <ProductIcon id={product.id} size={28} />
        </div>

        <div className="card-top-right-group">
          <span className="card-num-tag">#{product.number}</span>
          {product.flagship && <span className="card-flagship-pill">★ FLAGSHIP</span>}

          {/* Eye button at the right end of each card */}
          <button 
            type="button" 
            className="card-eye-btn" 
            onClick={(e) => { 
              e.stopPropagation(); 
              onOpenModal(product); 
            }}
            title={`View all ${product.name} specifications`}
            aria-label={`View all ${product.name} specifications`}
          >
            <span className="eye-glyph">👁️</span>
          </button>
        </div>
      </div>

      <div className="card-body-content">
        <div className="card-vertical-badge" style={{ color: product.accentColor }}>
          {product.vertical}
        </div>
        <h3 className="card-product-title">
          {product.name}
        </h3>
        <p className="card-product-tagline" style={{ color: product.subTextColor }}>
          {product.tagline}
        </p>
        <p className="card-product-simple-desc">
          {product.shortDescription}
        </p>

        {product.specCapsules && (
          <div className="card-spec-capsules">
            {product.specCapsules.map((capsule, i) => (
              <span className="card-spec-tag" key={i}>
                <b>{capsule.label}:</b> {capsule.val}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="card-bottom-row">
        <div className="card-view-specs-pill">
          <span className="eye-glyph">👁️</span>
          <span>View all specs</span>
          <span className="arrow-glyph">→</span>
        </div>
      </div>
    </article>
  );
}


function Products({ onOpenModal, onQuickAction }) {
  const [activeProductId, setActiveProductId] = useState('ameyy-bills');
  const [viewMode, setViewMode] = useState('carousel'); // 'carousel', 'all-grid', or 'spotlight'
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [viewAllMode, setViewAllMode] = useState(false);
  const [switchStates, setSwitchStates] = useState({ pump: true, lights: false, sos: false });
  const [currentTime, setCurrentTime] = useState(() => new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function handleToggleSwitch(key) {
    setSwitchStates(prev => ({ ...prev, [key]: !prev[key] }));
  }

  const filteredProducts = productsData;
  const activeProduct = filteredProducts.find(p => p.id === activeProductId) || filteredProducts[0] || productsData[0];

  // 2-SECOND CAROUSEL AUTO-ADVANCE TIMER
  useEffect(() => {
    if (isPaused || isHovered || viewAllMode || filteredProducts.length <= 1) return;

    const timer = setInterval(() => {
      setCarouselIndex(prev => (prev + 1) % filteredProducts.length);
    }, 2000); // EXACT 2-SECOND AUTO MOVE!

    return () => clearInterval(timer);
  }, [isPaused, isHovered, viewAllMode, filteredProducts.length]);

  // Keep carouselIndex bounded when category filter changes
  useEffect(() => {
    if (carouselIndex >= filteredProducts.length) {
      setCarouselIndex(0);
    }
  }, [filteredProducts.length, carouselIndex]);

  function handlePrevSlide() {
    setCarouselIndex(prev => (prev - 1 + filteredProducts.length) % filteredProducts.length);
  }

  function handleNextSlide() {
    setCarouselIndex(prev => (prev + 1) % filteredProducts.length);
  }

  function handlePrev() {
    const currentIndex = filteredProducts.findIndex(p => p.id === activeProduct.id);
    const nextIndex = (currentIndex - 1 + filteredProducts.length) % filteredProducts.length;
    setActiveProductId(filteredProducts[nextIndex].id);
  }

  function handleNext() {
    const currentIndex = filteredProducts.findIndex(p => p.id === activeProduct.id);
    const nextIndex = (currentIndex + 1) % filteredProducts.length;
    setActiveProductId(filteredProducts[nextIndex].id);
  }

  // Seamless loop for spotlight thumbnail dock marquee
  const dockRepeat = filteredProducts.length <= 2 ? 8 : filteredProducts.length <= 4 ? 4 : 2;
  const dockHalf = Array.from({ length: dockRepeat }).flatMap(() => filteredProducts);
  const dockMarqueeList = [...dockHalf, ...dockHalf];

  return (
    <section id="products" className="section-shell products-section">
      <div className="section-heading">
        <div>
          <div className="eyebrow"><span className="eyebrow-line" /> COMPLETE PRODUCT SUITE</div>
          <h2>Engineered for scale.<br />Built for <span className="gradient-text">every domain.</span></h2>
        </div>
        <div className="products-heading-right">
          <p>Explore 6 specialized products across enterprise software, business operations, IoT emergency alerts, high-performance computing, and agriculture.</p>
          <div className="view-mode-toggle">
            <button 
              type="button" 
              className={`mode-btn ${!viewAllMode && viewMode === 'carousel' ? 'is-active' : ''}`}
              onClick={() => { setViewMode('carousel'); setViewAllMode(false); }}
            >
              <span>🎠 2s Auto Carousel</span>
            </button>
            <button 
              type="button" 
              className={`mode-btn ${viewAllMode || viewMode === 'all-grid' ? 'is-active' : ''}`}
              onClick={() => { setViewMode('all-grid'); setViewAllMode(true); }}
            >
              <span>👁️ View All Products</span>
            </button>
            <button 
              type="button" 
              className={`mode-btn ${viewMode === 'spotlight' ? 'is-active' : ''}`}
              onClick={() => { setViewMode('spotlight'); setViewAllMode(false); }}
            >
              <span>🌟 Interactive Spotlight</span>
            </button>
          </div>
        </div>
      </div>

      {viewMode === 'spotlight' ? (
        /* STUNNING SPOTLIGHT THEATER SHOWCASE */
        <div className="spotlight-theater">
          <div className="spotlight-stage" style={{ '--accent': activeProduct.accentColor }}>
            <div className="spotlight-ambient-glow" style={{ background: `radial-gradient(circle, ${activeProduct.accentColor}28 0%, transparent 70%)` }} />
            
            {/* Left Column: Product Story & Specifications */}
            <div className="spotlight-info">
              <div className="spotlight-top-meta">
                <span className="spotlight-number">{activeProduct.number} / 06</span>
                <span className="spotlight-category-badge">{activeProduct.category}</span>
                {activeProduct.flagship && <span className="flagship-badge">★ FLAGSHIP</span>}
                <span className="spotlight-status-pill">{activeProduct.status}</span>
              </div>

              <h3 className="spotlight-title">{activeProduct.name}</h3>
              <p className="spotlight-tagline" style={{ color: activeProduct.accentColor }}>{activeProduct.tagline}</p>
              <p className="spotlight-purpose">{activeProduct.purpose}</p>

              <div className="spotlight-features-checklist">
                <span className="section-label">KEY CAPABILITIES</span>
                <div className="features-checklist-grid">
                  {activeProduct.features.slice(0, 4).map((feat, idx) => (
                    <div className="spotlight-feature-row" key={idx}>
                      <span className="check-bullet" style={{ color: activeProduct.accentColor }}>✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="spotlight-meta-tags">
                <div>
                  <span className="meta-tag-label">Target Audience:</span>
                  <div className="meta-tag-pills">
                    {activeProduct.targetCustomers.slice(0, 3).map((cust, idx) => (
                      <span className="audience-pill" key={idx}>{cust}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="meta-tag-label">Deployment:</span>
                  <div className="meta-tag-pills">
                    {activeProduct.platforms.map((plat, idx) => (
                      <span className="platform-pill" key={idx}>⚡ {plat}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="spotlight-actions">
                <button 
                  type="button" 
                  className="button button-dark spotlight-cta-primary"
                  onClick={() => onQuickAction(activeProduct)}
                  style={{ background: `linear-gradient(135deg, ${activeProduct.accentColor} 0%, #0e3ec4 100%)` }}
                >
                  {activeProduct.ctaText} <Arrow />
                </button>
                <button 
                  type="button" 
                  className="spotlight-details-btn"
                  onClick={() => onOpenModal(activeProduct)}
                >
                  Deep-Dive Specs <Arrow diagonal />
                </button>
              </div>
            </div>

            {/* Right Column: Live Interactive Visual UI Mockup */}
            <div className="spotlight-visual">
              <ProductVisualMockup 
                product={activeProduct} 
                switchStates={switchStates}
                onToggleSwitch={handleToggleSwitch}
                currentTime={currentTime}
              />
            </div>
          </div>

          {/* Interactive Bento Thumbnail Dock in Continuous Marquee Mode */}
          <div className="spotlight-dock-wrap">
            <div className="dock-nav-bar">
              <span className="dock-label">SELECT A PRODUCT TO INSPECT LIVE (AUTO-SCROLLING DOCK • HOVER TO PAUSE):</span>
              <div className="dock-arrows">
                <button type="button" className="dock-arrow-btn" onClick={handlePrev} aria-label="Previous Product">‹</button>
                <button type="button" className="dock-arrow-btn" onClick={handleNext} aria-label="Next Product">›</button>
              </div>
            </div>

            <div className="spotlight-dock-marquee-container">
              <div className="spotlight-dock-marquee-track">
                {dockMarqueeList.map((item, idx) => (
                  <div
                    key={`${item.id}-${idx}`}
                    className={`dock-card ${item.id === activeProduct.id ? 'is-active' : ''} ${item.flagship ? 'is-flagship-dock' : ''}`}
                    onClick={() => setActiveProductId(item.id)}
                    style={{ '--card-accent': item.accentColor }}
                  >
                    <div className="dock-card-top">
                      <span className="dock-card-num">{item.number}</span>
                      <span className="dock-card-icon" style={{ borderColor: item.accentColor }}>{item.icon}</span>
                    </div>
                    <b className="dock-card-title">{item.name}</b>
                    <small className="dock-card-category">{item.category}</small>
                    {item.flagship && <span className="dock-flagship-dot" title="Flagship Product">★</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : viewAllMode || viewMode === 'all-grid' ? (
        /* ALL PRODUCTS VIEW: BASED ON PRODUCT COLOR AS BACKGROUND */
        <div className="view-all-products-section">
          <div className="view-all-header-bar">
            <div className="view-all-title-info">
              <span className="view-all-badge">👁️ ALL 6 PRODUCTS • COLOR-CODED DOMAINS</span>
              <p>Explore all products styled with their distinctive background color identities. Click any eye button to inspect specifications.</p>
            </div>
            <button 
              type="button" 
              className="back-to-carousel-btn"
              onClick={() => { setViewAllMode(false); setViewMode('carousel'); }}
            >
              <span>🎠 Back to 2s Auto Carousel</span>
            </button>
          </div>

          <div className="all-products-color-grid">
            {filteredProducts.map((item) => (
              <ProductColorCard
                key={item.id}
                product={item}
                onOpenModal={onOpenModal}
              />
            ))}
          </div>
        </div>
      ) : (
        /* 2-SECOND AUTO-MOVING CAROUSEL WITH EYE BUTTON AT THE RIGHT END */
        <div className="carousel-products-section">
          <div className="carousel-controls-bar">
            <div className="carousel-status-info">
              <div className="live-pill">
                <span className="live-dot" />
                <span>AUTO-ADVANCING (2s)</span>
              </div>
              <span className="carousel-counter-text">
                Product <b>{carouselIndex + 1}</b> of <b>{filteredProducts.length}</b> • <b>{filteredProducts[carouselIndex]?.name}</b>
              </span>
            </div>

            <div className="carousel-btns-group">
              <button 
                type="button" 
                className="carousel-nav-btn" 
                onClick={handlePrevSlide} 
                title="Previous Product"
                aria-label="Previous Product"
              >
                ‹
              </button>
              <button 
                type="button" 
                className={`carousel-ctrl-btn ${isPaused ? 'is-paused-btn' : ''}`} 
                onClick={() => setIsPaused(!isPaused)} 
                title={isPaused ? "Resume 2s Carousel" : "Pause 2s Carousel"}
              >
                {isPaused ? '▶ Play' : '⏸ Pause'}
              </button>
              <button 
                type="button" 
                className="carousel-nav-btn" 
                onClick={handleNextSlide} 
                title="Next Product"
                aria-label="Next Product"
              >
                ›
              </button>

              {/* EYE BUTTON AT THE RIGHT END TO VIEW ALL PRODUCTS BASED ON PRODUCT COLOR AS BACKGROUND */}
              <button 
                type="button" 
                className="view-all-eye-pill"
                onClick={() => { setViewAllMode(true); setViewMode('all-grid'); }}
                title="View all products with color background"
              >
                <span className="eye-icon">👁️</span>
                <span className="eye-label">View All Products</span>
              </button>
            </div>
          </div>

          {/* 2-second countdown timer bar */}
          <div className="carousel-timer-bar-wrap">
            <div 
              key={carouselIndex} 
              className={`carousel-timer-fill ${isPaused || isHovered ? 'is-paused' : ''}`} 
            />
          </div>

          {/* Sliding Carousel Viewport */}
          // Seamless 3x repeat array to guarantee infinite, flush cards across all carousel steps
          <div 
            className="carousel-viewport"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div 
              className="carousel-track" 
              style={{ 
                transform: `translateX(calc(-${carouselIndex} * ((100% - (var(--cards-per-view) - 1) * var(--carousel-gap)) / var(--cards-per-view) + var(--carousel-gap))))` 
              }}
            >
              {[...filteredProducts, ...filteredProducts, ...filteredProducts].map((item, idx) => (
                <ProductColorCard
                  key={`${item.id}-${idx}`}
                  product={item}
                  onOpenModal={onOpenModal}
                />
              ))}
            </div>
          </div>

          {/* Dot Navigation Indicators matching each product's card color */}
          <div className="carousel-dots-row">
            {filteredProducts.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                className={`carousel-dot-btn ${carouselIndex === idx ? 'is-active' : ''}`}
                style={{ 
                  backgroundColor: item.accentColor,
                  boxShadow: carouselIndex === idx ? `0 0 12px ${item.accentColor}` : 'none'
                }}
                onClick={() => setCarouselIndex(idx)}
                title={`Go to ${item.name}`}
                aria-label={`Go to ${item.name}`}
              />
            ))}
          </div>
        </div>
      )}

      <div className="products-foot">
        <div>
          <span>HAVE A CUSTOM REQUIREMENT OR NEED MULTI-PRODUCT INTEGRATION?</span>
          <p className="products-foot-sub">We configure custom CRM pipelines, IoT emergency alert networks, custom PC rigs, and specialized business software tailored to your workflows.</p>
        </div>
        <a className="button button-dark" href="#contact">
          Schedule a Consultation <Arrow />
        </a>
      </div>
    </section>
  );
}

const appTech = [
  { name: 'TypeScript', icon: 'TS', color: '#3178c6' },
  { name: 'React', icon: '⚛', color: '#00d8ff' },
  { name: 'Dart', icon: '🎯', color: '#0175c2' },
  { name: 'Flutter', icon: '⚡', color: '#02569b' },
  { name: 'MobX', icon: '🟠', color: '#ff9955' },
  { name: 'Hive', icon: '🔷', color: '#f59e0b' },
  { name: 'Next.js', icon: '▲', color: '#ffffff' },
  { name: 'Swift', icon: '🕊', color: '#f05138' },
  { name: 'Kotlin', icon: '🟣', color: '#7f52ff' },
];

const backendTech = [
  { name: 'TypeScript', icon: 'TS', color: '#3178c6' },
  { name: 'express.js', icon: 'ex', color: '#ffffff' },
  { name: '.NET', icon: '.NET', color: '#512bd4' },
  { name: 'Node.js', icon: '⬢', color: '#68a063' },
  { name: 'Python', icon: '🐍', color: '#ffde57' },
  { name: 'Firebase', icon: '🔥', color: '#ffa611' },
  { name: 'Django', icon: 'dj', color: '#092e20' },
  { name: 'Go', icon: 'Go', color: '#00add8' },
  { name: 'PostgreSQL', icon: '🐘', color: '#336791' },
];

function TechStack() {
  return <section id="tech-stack" className="techstack-section section-shell">
    <div className="section-heading">
      <div>
        <div className="eyebrow"><span className="eyebrow-line" /> OUR TECHNOLOGY STACK</div>
        <h2>Built with a modern,<br />scalable <span className="gradient-text">technology stack.</span></h2>
      </div>
      <p>Behind every successful technology solution lies the right strategy, architecture, and execution. We bring all three with battle-tested frameworks.</p>
    </div>

    <div className="bento-tech-grid">
      {/* 1. Design & Prototyping (Blue Card) */}
      <div className="bento-card bento-blue">
        <h3 className="bento-title">Design &amp; Prototyping</h3>
        <div className="bento-chips-grid">
          <div className="bento-chip">
            <span className="bento-badge figma-badge">
              <svg viewBox="0 0 38 57" fill="none" width="14" height="21">
                <path d="M19 28.5C19 23.25 23.25 19 28.5 19C33.75 19 38 23.25 38 28.5C38 33.75 33.75 38 28.5 38C23.25 38 19 33.75 19 28.5Z" fill="#1ABCFE"/>
                <path d="M0 47.5C0 42.25 4.25 38 9.5 38H19V47.5C19 52.75 14.75 57 9.5 57C4.25 57 0 52.75 0 47.5Z" fill="#0ACF83"/>
                <path d="M19 0V19H28.5C33.75 19 38 14.75 38 9.5C38 4.25 33.75 0 28.5 0H19Z" fill="#FF7262"/>
                <path d="M0 9.5C0 14.75 4.25 19 9.5 19H19V0H9.5C4.25 0 0 4.25 0 9.5Z" fill="#F24E1E"/>
                <path d="M0 28.5C0 33.75 4.25 38 9.5 38H19V19H9.5C4.25 19 0 23.25 0 28.5Z" fill="#A259FF"/>
              </svg>
            </span>
            <span>Figma</span>
          </div>
          <div className="bento-chip">
            <span className="bento-badge framer-badge">F</span>
            <span>Framer</span>
          </div>
          <div className="bento-chip">
            <span className="bento-badge ps-badge">Ps</span>
            <span>Photoshop</span>
          </div>
          <div className="bento-chip">
            <span className="bento-badge ai-badge">Ai</span>
            <span>Illustrator</span>
          </div>
        </div>
      </div>

      {/* 2. App Development (Dark Card with Scrolling Marquee) */}
      <div className="bento-card bento-dark">
        <h3 className="bento-title">App Development (Web &amp; Mobile)</h3>
        <div className="bento-marquee-container">
          <div className="bento-marquee-track">
            {[...appTech, ...appTech].map((tech, idx) => (
              <div className="bento-pill" key={idx}>
                <span className="pill-badge" style={{ color: tech.color }}>{tech.icon}</span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Backend Development (Dark Card with Reverse Scrolling Marquee) */}
      <div className="bento-card bento-dark">
        <h3 className="bento-title">Backend Development</h3>
        <div className="bento-marquee-container">
          <div className="bento-marquee-track bento-reverse">
            {[...backendTech, ...backendTech].map((tech, idx) => (
              <div className="bento-pill" key={idx}>
                <span className="pill-badge" style={{ color: tech.color }}>{tech.icon}</span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Database (Blue Card) */}
      <div className="bento-card bento-blue">
        <h3 className="bento-title">Database</h3>
        <div className="bento-chips-grid">
          <div className="bento-chip">
            <span className="bento-badge">🐬</span>
            <span>MySQL</span>
          </div>
          <div className="bento-chip">
            <span className="bento-badge">🍃</span>
            <span>MongoDB</span>
          </div>
          <div className="bento-chip">
            <span className="bento-badge">🪐</span>
            <span>Azure Cosmos DB</span>
          </div>
          <div className="bento-chip">
            <span className="bento-badge">🐘</span>
            <span>PostgreSQL</span>
          </div>
        </div>
      </div>
    </div>
  </section>;
}

const testimonials = [
  {
    quote: "Super Service",
    author: "Sri Amman Pipes & Electricals",
    role: "Hardware & Retailer",
    tag: "Ameyy Bills POS",
    logoUrl: "/Amman_pipes.png"
  },
  {
    quote: "Amazing Team",
    author: "Mersal Media",
    role: "Media & Production",
    tag: "Custom CRM Suite",
    logoUrl: "/mersal.png"
  },
  {
    quote: "Budget Friendly",
    author: "Vairavan Automations",
    role: "IoT & Automation",
    tag: "Ameyy Mobile App",
    logoUrl: "/Vairavan_automations.png"
  },
  {
    quote: "Impressed",
    author: "G.S Info Tech",
    role: "IT & Hardware",
    tag: "Ameyy PCs Fleet",
    logoUrl: "/gs_infotech.png"
  },
  {
    quote: "Trusted Partner",
    author: "Senthamizha Mobiles",
    role: "Retail & Branch Ops",
    tag: "Retail CRM Suite",
    logoUrl: "/senthamizha_mobiles.png"
  }
];

function Customers() {
  return (
    <section id="testimonials" className="customers-section section-shell">
      <div className="section-heading">
        <div>
          <div className="eyebrow"><span className="eyebrow-line" /> CLIENT SUCCESS STORIES</div>
          <h2>What our clients say about<br />our <span className="gradient-text">engineering craft.</span></h2>
        </div>
        <p>Direct feedback from enterprise clients and retail founders powered by Ameyy technology solutions.</p>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((item, idx) => (
          <article className="testimonial-card" key={idx}>
            <div className="testimonial-stars" aria-label="5 stars">★★★★★</div>
            <p className="testimonial-quote" title={item.quote}>“{item.quote}”</p>
            <div className="testimonial-meta">
              <div className="testimonial-avatar" aria-hidden="true">
                <img src={item.logoUrl} alt={item.author} className="testimonial-avatar-logo" />
              </div>
              <div className="testimonial-meta-info">
                <h4>{item.author}</h4>
                <p>{item.role}</p>
                <span className="testimonial-badge">{item.tag}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return <section id="about" className="about-section">
    <div className="section-shell about-layout">
      <div className="about-intro"><div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> A LITTLE ABOUT US</div><h2>Technology<br />should feel like<br /><span className="gradient-text">possibility.</span></h2></div>
      <div className="about-content"><p className="about-lead">Ameyy Digital Services (அ மெய்) is a team of curious thinkers and makers building for a more connected, capable future.</p><p className="about-copy">We partner with businesses to shape digital products and experiences with a clear purpose. Across software, artificial intelligence, IoT, and high-performance computing, our approach is collaborative, considered, and always grounded in real-world results.</p><a className="about-link" href="#contact">Get to know us <Arrow /></a>
        <div className="principles">{principles.map(([number, title, copy]) => <div className="principle" key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div>
      </div>
    </div>
    <div className="about-graphic" aria-hidden="true"><span>A</span><i /></div>
  </section>;
}

function FormAlertIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14" aria-hidden="true">
      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
  );
}

function FormCheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );
}

const FORM_EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
const FORM_NAME_REGEX = /^[\p{L}\p{M}\s.'-]+$/u;

function Career() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    message: ''
  });
  const [resumeData, setResumeData] = useState({
    file: null,
    filename: '',
    contentType: '',
    base64: '',
    size: 0
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  const [busy, setBusy] = useState(false);
  const fileInputRef = useRef(null);

  function validate(field, value) {
    const val = String(value || '').trim();
    if (field === 'name') {
      if (!val) return 'Full name is required.';
      if (val.length < 2) return 'Name must be at least 2 characters.';
      if (val.length > 80) return 'Name cannot exceed 80 characters.';
      if (!FORM_NAME_REGEX.test(val)) return 'Please enter a valid name using letters.';
    }
    if (field === 'email') {
      if (!val) return 'Email address is required.';
      if (!FORM_EMAIL_REGEX.test(val)) return 'Please enter a valid email address (e.g. name@domain.com).';
    }
    if (field === 'role') {
      if (!val) return 'Please select an area of interest or role.';
    }
    if (field === 'message') {
      if (val.length > 3000) return 'Note cannot exceed 3,000 characters.';
    }
    return '';
  }

  function handleChange(field, val) {
    setFormData(prev => ({ ...prev, [field]: val }));
    if (touched[field]) {
      const err = validate(field, val);
      setErrors(prev => ({ ...prev, [field]: err }));
    }
    if (submitStatus.message) setSubmitStatus({ type: '', message: '' });
  }

  function handleBlur(field) {
    setTouched(prev => ({ ...prev, [field]: true }));
    const err = validate(field, formData[field]);
    setErrors(prev => ({ ...prev, [field]: err }));
  }

  function handleFileChange(e) {
    const file = e.target.files?.[0];
    setTouched(prev => ({ ...prev, resume: true }));
    if (!file) {
      setResumeData({ file: null, filename: '', contentType: '', base64: '', size: 0 });
      setErrors(prev => ({ ...prev, resume: 'Please attach your resume file.' }));
      return;
    }

    const lowerName = file.name.toLowerCase();
    const validExts = ['.pdf', '.doc', '.docx'];
    const hasValidExt = validExts.some(ext => lowerName.endsWith(ext));
    const validMimes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];

    if (!hasValidExt || (file.type && !validMimes.includes(file.type))) {
      setResumeData({ file: null, filename: '', contentType: '', base64: '', size: 0 });
      setErrors(prev => ({ ...prev, resume: 'Only PDF or Word documents (.pdf, .doc, .docx) are supported.' }));
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setResumeData({ file: null, filename: '', contentType: '', base64: '', size: 0 });
      setErrors(prev => ({ ...prev, resume: `File size (${(file.size / (1024 * 1024)).toFixed(1)} MB) exceeds 2 MB limit.` }));
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const b64 = String(reader.result).split(',')[1];
      setResumeData({
        file,
        filename: file.name,
        contentType: file.type || 'application/pdf',
        base64: b64,
        size: file.size
      });
      setErrors(prev => ({ ...prev, resume: '' }));
    };
    reader.onerror = () => {
      setErrors(prev => ({ ...prev, resume: 'Could not read the file. Please try again.' }));
    };
    reader.readAsDataURL(file);
  }

  async function submit(event) {
    event.preventDefault();
    const newErrors = {
      name: validate('name', formData.name),
      email: validate('email', formData.email),
      role: validate('role', formData.role),
      message: validate('message', formData.message),
      resume: !resumeData.base64 ? 'Please attach your resume (PDF or Word document).' : ''
    };
    setTouched({ name: true, email: true, role: true, message: true, resume: true });
    setErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) {
      setSubmitStatus({
        type: 'error',
        message: 'Please resolve the highlighted errors before submitting your application.'
      });
      return;
    }

    setBusy(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          role: formData.role.trim(),
          message: formData.message.trim(),
          resume: {
            filename: resumeData.filename,
            contentType: resumeData.contentType,
            content: resumeData.base64
          }
        })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Could not send your application. Please try again.');

      setSubmitStatus({
        type: 'success',
        message: 'Thanks for reaching out! Your application has been sent. We will review your profile shortly.'
      });
      setFormData({ name: '', email: '', role: '', message: '' });
      setResumeData({ file: null, filename: '', contentType: '', base64: '', size: 0 });
      if (fileInputRef.current) fileInputRef.current.value = '';
      setTouched({});
      setErrors({});
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error.message || 'Something went wrong. Please try again.'
      });
    } finally {
      setBusy(false);
    }
  }

  return <section id="career" className="career-section section-shell">
    <div className="career-left">
      <div className="eyebrow"><span className="eyebrow-line" /> CAREERS AT AMEYY</div>
      <h2>Make room for<br />your <span className="gradient-text">next.</span></h2>
      <p>Bring your perspective, your questions, and your ambition. We’d love to hear what you’re excited to build.</p>
      <div className="career-perk">
        <span className="perk-icon">✳</span>
        <div>
          <b>Good people. Good work.</b>
          <small>We’re always open to meeting thoughtful talent.</small>
        </div>
      </div>
      <div className="career-image">
        <img src="/AY_AMEYY_DIGITAL_SERVICES.jpeg" alt="Ameyy Digital Services logo" />
        <span>COME BUILD WITH US <b>↗</b></span>
      </div>
    </div>
    <div className="career-form-wrap">
      <div className="form-heading">
        <span>01 / SAY HELLO</span>
        <h3>Let’s start with you.</h3>
        <p>Share a little about yourself and attach your resume.</p>
      </div>
      <form className="application-form" onSubmit={submit} noValidate>
        <div className={`form-field-group ${errors.name && touched.name ? 'has-error' : ''}`}>
          <label>Your name <span className="req-star">*</span>
            <input 
              name="name" 
              value={formData.name}
              onChange={e => handleChange('name', e.target.value)}
              onBlur={() => handleBlur('name')}
              autoComplete="name" 
              placeholder="Jane Smith" 
              className={errors.name && touched.name ? 'input-error' : ''}
              required 
            />
          </label>
          {errors.name && touched.name && (
            <span className="field-error-msg"><FormAlertIcon /> {errors.name}</span>
          )}
        </div>

        <div className={`form-field-group ${errors.email && touched.email ? 'has-error' : ''}`}>
          <label>Email address <span className="req-star">*</span>
            <input 
              type="email" 
              name="email" 
              value={formData.email}
              onChange={e => handleChange('email', e.target.value)}
              onBlur={() => handleBlur('email')}
              autoComplete="email" 
              placeholder="jane@example.com" 
              className={errors.email && touched.email ? 'input-error' : ''}
              required 
            />
          </label>
          {errors.email && touched.email && (
            <span className="field-error-msg"><FormAlertIcon /> {errors.email}</span>
          )}
        </div>

        <div className={`form-field-group ${errors.role && touched.role ? 'has-error' : ''}`}>
          <label>Area of interest <span className="req-star">*</span>
            <select 
              name="role" 
              value={formData.role} 
              onChange={e => handleChange('role', e.target.value)}
              onBlur={() => handleBlur('role')}
              className={errors.role && touched.role ? 'select-error' : ''}
              required
            >
              <option value="" disabled>Select a team or role</option>
              <option value="Product & Design">Product &amp; Design</option>
              <option value="Engineering">Engineering</option>
              <option value="Digital Strategy">Digital Strategy</option>
              <option value="Hardware & IoT">Hardware &amp; IoT</option>
              <option value="Sales & Operations">Sales &amp; Operations</option>
              <option value="Something else">Something else</option>
            </select>
          </label>
          {errors.role && touched.role && (
            <span className="field-error-msg"><FormAlertIcon /> {errors.role}</span>
          )}
        </div>

        <div className={`form-field-group ${errors.message && touched.message ? 'has-error' : ''}`}>
          <label>A note for us
            <textarea 
              name="message" 
              value={formData.message}
              onChange={e => handleChange('message', e.target.value)}
              onBlur={() => handleBlur('message')}
              placeholder="What are you excited about?" 
              rows="3" 
            />
          </label>
          {errors.message && touched.message && (
            <span className="field-error-msg"><FormAlertIcon /> {errors.message}</span>
          )}
          <span className="char-count">{formData.message.length} / 3000</span>
        </div>

        <div className={`form-field-group ${errors.resume && touched.resume ? 'has-error' : ''}`}>
          <label className="upload-field">Resume <span className="req-star">*</span>
            <span className="upload-box">
              <input 
                ref={fileInputRef}
                type="file" 
                name="resume" 
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" 
                onChange={handleFileChange}
                required 
              />
              <span className="upload-icon">↑</span>
              <span><b>Choose a file</b> or drop it here<small>PDF or Word · up to 2 MB</small></span>
            </span>
          </label>
          {resumeData.filename && (
            <div className="upload-selected-badge">
              <FormCheckIcon /> {resumeData.filename} ({(resumeData.size / 1024).toFixed(0)} KB)
            </div>
          )}
          {errors.resume && touched.resume && (
            <span className="field-error-msg"><FormAlertIcon /> {errors.resume}</span>
          )}
        </div>

        {submitStatus.message && (
          <div className={submitStatus.type === 'success' ? 'form-banner-success' : 'form-banner-error'}>
            {submitStatus.type === 'success' ? <FormCheckIcon /> : <FormAlertIcon />}
            <span>{submitStatus.message}</span>
          </div>
        )}

        <button className="button button-dark form-submit" type="submit" disabled={busy}>
          {busy ? 'Sending…' : 'Send application'} <Arrow />
        </button>
      </form>
    </div>
  </section>;
}

function Contact({ prefilledInterest = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: prefilledInterest || '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (prefilledInterest) {
      setFormData(prev => ({ ...prev, interest: prefilledInterest }));
      setErrors(prev => ({ ...prev, interest: '' }));
    }
  }, [prefilledInterest]);

  function validate(field, value) {
    const val = String(value || '').trim();
    if (field === 'name') {
      if (!val) return 'Full name is required.';
      if (val.length < 2) return 'Name must be at least 2 characters.';
      if (val.length > 80) return 'Name cannot exceed 80 characters.';
      if (!FORM_NAME_REGEX.test(val)) return 'Please enter a valid name using letters.';
    }
    if (field === 'email') {
      if (!val) return 'Email address is required.';
      if (val.length < 5 || val.length > 150) return 'Email must be between 5 and 150 characters.';
      if (!FORM_EMAIL_REGEX.test(val)) return 'Please enter a valid email address (e.g. name@company.com).';
    }
    if (field === 'interest') {
      if (!val) return 'Please choose a product or service of interest.';
    }
    if (field === 'message') {
      if (!val) return 'Please enter your message or enquiry details.';
      if (val.length < 10) return `Message must be at least 10 characters (currently ${val.length}).`;
      if (val.length > 3000) return 'Message cannot exceed 3,000 characters.';
    }
    return '';
  }

  function handleChange(field, val) {
    setFormData(prev => ({ ...prev, [field]: val }));
    if (touched[field]) {
      const err = validate(field, val);
      setErrors(prev => ({ ...prev, [field]: err }));
    }
    if (submitStatus.message) setSubmitStatus({ type: '', message: '' });
  }

  function handleBlur(field) {
    setTouched(prev => ({ ...prev, [field]: true }));
    const err = validate(field, formData[field]);
    setErrors(prev => ({ ...prev, [field]: err }));
  }

  async function submit(event) {
    event.preventDefault();
    const newErrors = {
      name: validate('name', formData.name),
      email: validate('email', formData.email),
      interest: validate('interest', formData.interest),
      message: validate('message', formData.message),
    };
    setTouched({ name: true, email: true, interest: true, message: true });
    setErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) {
      setSubmitStatus({
        type: 'error',
        message: 'Please resolve the highlighted errors before submitting.'
      });
      return;
    }

    setBusy(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          interest: formData.interest.trim(),
          message: formData.message.trim(),
        })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Could not send your message.');

      setSubmitStatus({
        type: 'success',
        message: 'Thanks! Your enquiry has been received. Our team will contact you shortly.'
      });
      setFormData({ name: '', email: '', interest: '', message: '' });
      setTouched({});
      setErrors({});
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error.message || 'Something went wrong. Please try again.'
      });
    } finally {
      setBusy(false);
    }
  }

  return <section id="contact" className="contact-section">
    <div className="section-shell contact-layout">
      <div className="contact-copy">
        <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> YOUR NEXT MOVE</div>
        <h2>Let’s make<br />something <span className="gradient-text">matter.</span></h2>
        <p>Have an idea, want a live product demo, or looking to deploy our solutions? We are ready to assist you.</p>
        <a className="contact-email" href="#contact-form">Tell us about it <Arrow diagonal /></a>
        <div className="contact-orb" aria-hidden="true"><span>A</span></div>
      </div>
      <div id="contact-form" className="contact-panel">
        <div className="form-heading">
          <span>02 / GET IN TOUCH</span>
          <h3>Tell us what’s on your mind.</h3>
        </div>
        <form className="application-form" onSubmit={submit} noValidate>
          <div className={`form-field-group ${errors.name && touched.name ? 'has-error' : ''}`}>
            <label>Your name <span className="req-star">*</span>
              <input 
                name="name" 
                value={formData.name}
                onChange={e => handleChange('name', e.target.value)}
                onBlur={() => handleBlur('name')}
                autoComplete="name" 
                placeholder="Jane Smith" 
                className={errors.name && touched.name ? 'input-error' : ''}
                required 
              />
            </label>
            {errors.name && touched.name && (
              <span className="field-error-msg"><FormAlertIcon /> {errors.name}</span>
            )}
          </div>

          <div className={`form-field-group ${errors.email && touched.email ? 'has-error' : ''}`}>
            <label>Email address <span className="req-star">*</span>
              <input 
                name="email" 
                type="email" 
                value={formData.email}
                onChange={e => handleChange('email', e.target.value)}
                onBlur={() => handleBlur('email')}
                autoComplete="email" 
                placeholder="jane@example.com" 
                className={errors.email && touched.email ? 'input-error' : ''}
                required 
              />
            </label>
            {errors.email && touched.email && (
              <span className="field-error-msg"><FormAlertIcon /> {errors.email}</span>
            )}
          </div>

          <div className={`form-field-group ${errors.interest && touched.interest ? 'has-error' : ''}`}>
            <label>Product or Service of Interest <span className="req-star">*</span>
              <select 
                name="interest" 
                value={formData.interest} 
                onChange={e => handleChange('interest', e.target.value)}
                onBlur={() => handleBlur('interest')}
                className={errors.interest && touched.interest ? 'select-error' : ''}
                required
              >
                <option value="" disabled>Choose a product or service</option>
                <optgroup label="Main Products">
                  <option value="Ameyy Bills (GST Billing)">Ameyy Bills (GST Billing)</option>
                  <option value="Ameyy SOS Switch">Ameyy SOS Switch (IoT Emergency Alert)</option>
                  <option value="Ameyy Mobile Apps">Ameyy Mobile Apps (Business &amp; Hotel Ops)</option>
                  <option value="Ameyy Custom CRM">Ameyy Custom CRM (Custom Workflows)</option>
                  <option value="Ameyy PCs (Custom Systems)">Ameyy PCs (Custom Rigs &amp; Workstations)</option>
                  <option value="Ameyy Harvest (Farm Products)">Ameyy Harvest (Farm Produce &amp; Food)</option>
                </optgroup>
                <optgroup label="Technology Services">
                  <option value="Digital product engineering">Digital Product Engineering</option>
                  <option value="Website or web experience">Website or Web Experience</option>
                  <option value="Technology partnership">Technology Partnership</option>
                  <option value="Something else">Something else</option>
                </optgroup>
              </select>
            </label>
            {errors.interest && touched.interest && (
              <span className="field-error-msg"><FormAlertIcon /> {errors.interest}</span>
            )}
          </div>

          <div className={`form-field-group ${errors.message && touched.message ? 'has-error' : ''}`}>
            <label>Your message <span className="req-star">*</span>
              <textarea 
                name="message" 
                rows="3" 
                value={formData.message}
                onChange={e => handleChange('message', e.target.value)}
                onBlur={() => handleBlur('message')}
                className={errors.message && touched.message ? 'textarea-error' : ''}
                placeholder={formData.interest ? `Please share your requirements or questions regarding ${formData.interest}...` : "A few details about your project or enquiry…"} 
                required 
              />
            </label>
            {errors.message && touched.message && (
              <span className="field-error-msg"><FormAlertIcon /> {errors.message}</span>
            )}
            <span className="char-count">{formData.message.length} / 3000</span>
          </div>

          {submitStatus.message && (
            <div className={submitStatus.type === 'success' ? 'form-banner-success' : 'form-banner-error'}>
              {submitStatus.type === 'success' ? <FormCheckIcon /> : <FormAlertIcon />}
              <span>{submitStatus.message}</span>
            </div>
          )}

          <button className="button button-light" type="submit" disabled={busy}>
            {busy ? 'Sending…' : 'Send your message'} <Arrow />
          </button>
        </form>
      </div>
    </div>
  </section>;
}


function Footer() {
  return <footer className="site-footer"><div className="section-shell footer-main"><div className="footer-brand-block"><Brand footer /><p>Ameyy Digital Services (அ மெய்) — Thoughtful digital, built for what’s next.</p><div className="footer-links"><a href="#products">Products</a><a href="#tech-stack">Tech Stack</a><a href="#clients">Clients</a><a href="#about">About</a><a href="#career">Career</a><a href="#contact">Contact</a></div></div><div className="footer-contact"><h2>Contact &amp; Offices</h2><div className="footer-contact-grid"><div><span>Enquiries</span><a href="mailto:ameyy.support@gmail.com">ameyy.support@gmail.com</a></div><div><span>Phone</span><a href="tel:+918883280816">+91 8883280816</a></div><div><span>Chennai unit</span><p>No. 55 Narayana Samy Nagar, Village High Road, Sholinganallur, Chennai - 600119</p></div><div><span>Registered unit</span><p>1/176 Vairavan Kadu, Kameswaram, Thirupoonidi-East, Nagapattinam - 611110</p></div><div><span>Udyam Reg</span><p>UDYAM-TN-13-0043166</p></div></div></div></div><div className="section-shell footer-bottom"><span>© {new Date().getFullYear()} Ameyy Digital Services (அ மெய்)</span><span>MADE WITH INTENTION <b>✳</b></span><a href="#home">BACK TO TOP ↑</a></div></footer>;
}

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [prefilledInterest, setPrefilledInterest] = useState('');

  function handleOpenModal(product) {
    setSelectedProduct(product);
  }

  function handleSelectForContact(product) {
    setSelectedProduct(null);
    setPrefilledInterest(product.interestOption || product.name);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Partners onSelectForContact={handleSelectForContact} />
        <Marquee />
        <Products 
          onOpenModal={handleOpenModal} 
          onQuickAction={handleSelectForContact} 
        />
        <TechStack />
        <Customers />
        <About />
        <Career />
        <Contact prefilledInterest={prefilledInterest} />
      </main>
      <Footer />
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
          onAction={handleSelectForContact} 
        />
      )}
    </>
  );
}
