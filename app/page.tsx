import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

// Icon components
const ExternalLinkIcon = () => (
  <svg className="external-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
  </svg>
);

const ProtocolIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
  </svg>
);

const UtilitiesIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="3" width="7" height="7" rx="1"/>
    <rect x="14" y="3" width="7" height="7" rx="1"/>
    <rect x="3" y="14" width="7" height="7" rx="1"/>
    <rect x="14" y="14" width="7" height="7" rx="1"/>
  </svg>
);

const TreasuryIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="8" width="18" height="13" rx="2"/>
    <path d="M7 8V6a5 5 0 0 1 10 0v2"/>
    <circle cx="12" cy="15" r="2"/>
  </svg>
);

const DiceIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <circle cx="8" cy="8" r="1" fill="currentColor"/>
    <circle cx="16" cy="8" r="1" fill="currentColor"/>
    <circle cx="8" cy="16" r="1" fill="currentColor"/>
    <circle cx="16" cy="16" r="1" fill="currentColor"/>
    <circle cx="12" cy="12" r="1" fill="currentColor"/>
  </svg>
);

const CalculatorIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="4" y="2" width="16" height="20" rx="2"/>
    <rect x="6" y="4" width="12" height="4"/>
    <circle cx="8" cy="12" r="1" fill="currentColor"/>
    <circle cx="12" cy="12" r="1" fill="currentColor"/>
    <circle cx="16" cy="12" r="1" fill="currentColor"/>
    <circle cx="8" cy="16" r="1" fill="currentColor"/>
    <circle cx="12" cy="16" r="1" fill="currentColor"/>
    <circle cx="16" cy="16" r="1" fill="currentColor"/>
  </svg>
);

const KeyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>
  </svg>
);

const BatchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M16 3h5v5M8 3H3v5M3 16v5h5M16 21h5v-5M12 8v8M8 12h8"/>
  </svg>
);

const SplitIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="18" cy="5" r="3"/>
    <circle cx="6" cy="12" r="3"/>
    <circle cx="18" cy="19" r="3"/>
    <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"/>
  </svg>
);

const SaleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
);

const GigIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
    <rect x="9" y="3" width="6" height="4" rx="1"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>
);

const GovernanceIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2L2 7h20L12 2z"/>
    <rect x="4" y="9" width="4" height="10"/>
    <rect x="10" y="9" width="4" height="10"/>
    <rect x="16" y="9" width="4" height="10"/>
    <path d="M2 19h20v2H2z"/>
  </svg>
);

const OperationsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);

const ProductIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
    <polyline points="2 17 12 22 22 17"/>
    <polyline points="2 12 12 17 22 12"/>
  </svg>
);

const LightbulbIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.3A7 7 0 0 0 12 2z"/>
  </svg>
);

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10"/>
    <polygon points="10 8 16 12 10 16 10 8" fill="currentColor"/>
  </svg>
);

// HOST Demo Icons
const BellIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="1.5">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  </svg>
);

const ScoutIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 16V8M12 8l-3 3M12 8l3 3"/>
  </svg>
);

const GridIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="1.5">
    <rect x="3" y="3" width="4" height="4"/>
    <rect x="10" y="3" width="4" height="4"/>
    <rect x="17" y="3" width="4" height="4"/>
    <rect x="3" y="10" width="4" height="4"/>
    <rect x="10" y="10" width="4" height="4"/>
    <rect x="17" y="10" width="4" height="4"/>
    <rect x="3" y="17" width="4" height="4"/>
    <rect x="10" y="17" width="4" height="4"/>
    <rect x="17" y="17" width="4" height="4"/>
  </svg>
);

const SmartphoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.5">
    <rect x="5" y="2" width="14" height="20" rx="2"/>
    <line x1="12" y1="18" x2="12" y2="18"/>
  </svg>
);

const RocketIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>
);

const TrendingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
    <polyline points="17 6 23 6 23 12"/>
  </svg>
);

// SVG Workflow Diagrams
const ChainOfCustodySVG = () => (
  <svg viewBox="0 0 800 200" className="workflow-svg" style={{ width: '100%', height: 'auto' }}>
    {/* Background */}
    <defs>
      <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#7bc47f" stopOpacity="0.2"/>
        <stop offset="100%" stopColor="#a8e6a3" stopOpacity="0.2"/>
      </linearGradient>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#7bc47f"/>
      </marker>
    </defs>

    {/* Step 1 */}
    <rect x="20" y="40" width="200" height="120" rx="12" fill="url(#greenGradient)" stroke="#7bc47f" strokeWidth="1"/>
    <text x="120" y="75" textAnchor="middle" fill="#a8e6a3" fontSize="14" fontWeight="600">CONTRACT</text>
    <text x="120" y="100" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="12">Executes and calls</text>
    <text x="120" y="118" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="12">HOST with target</text>
    <text x="120" y="136" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="12">URL and payload</text>

    {/* Arrow 1 */}
    <line x1="230" y1="100" x2="290" y2="100" stroke="#7bc47f" strokeWidth="2" markerEnd="url(#arrowhead)"/>

    {/* Step 2 */}
    <rect x="300" y="40" width="200" height="120" rx="12" fill="url(#greenGradient)" stroke="#7bc47f" strokeWidth="1"/>
    <text x="400" y="75" textAnchor="middle" fill="#a8e6a3" fontSize="14" fontWeight="600">VALIDATOR</text>
    <text x="400" y="100" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="12">Signs the outbound</text>
    <text x="400" y="118" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="12">request with its</text>
    <text x="400" y="136" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="12">private key</text>

    {/* Arrow 2 */}
    <line x1="510" y1="100" x2="570" y2="100" stroke="#7bc47f" strokeWidth="2" markerEnd="url(#arrowhead)"/>

    {/* Step 3 */}
    <rect x="580" y="40" width="200" height="120" rx="12" fill="url(#greenGradient)" stroke="#7bc47f" strokeWidth="1"/>
    <text x="680" y="75" textAnchor="middle" fill="#a8e6a3" fontSize="14" fontWeight="600">RECEIVER</text>
    <text x="680" y="100" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="12">Verifies signature,</text>
    <text x="680" y="118" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="12">creating auditable</text>
    <text x="680" y="136" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="12">proof of origin</text>
  </svg>
);

const TransactionAsSignatureSVG = () => (
  <svg viewBox="0 0 800 280" className="workflow-svg" style={{ width: '100%', height: 'auto' }}>
    <defs>
      <linearGradient id="greenGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#7bc47f" stopOpacity="0.2"/>
        <stop offset="100%" stopColor="#a8e6a3" stopOpacity="0.2"/>
      </linearGradient>
      <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#7bc47f"/>
      </marker>
    </defs>

    {/* Step 1 - Fund */}
    <rect x="20" y="80" width="200" height="120" rx="12" fill="url(#greenGradient2)" stroke="#7bc47f" strokeWidth="1"/>
    <text x="120" y="110" textAnchor="middle" fill="#a8e6a3" fontSize="18" fontWeight="600">FUND</text>
    <text x="120" y="135" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="11">Paying party funds their</text>
    <text x="120" y="153" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="11">contractual obligation,</text>
    <text x="120" y="171" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="11">signing by transaction</text>

    {/* Arrow 1 */}
    <line x1="230" y1="140" x2="290" y2="140" stroke="#7bc47f" strokeWidth="2" markerEnd="url(#arrowhead2)"/>

    {/* Step 2 - Sign */}
    <rect x="300" y="80" width="200" height="120" rx="12" fill="url(#greenGradient2)" stroke="#7bc47f" strokeWidth="1"/>
    <text x="400" y="110" textAnchor="middle" fill="#a8e6a3" fontSize="18" fontWeight="600">SIGN</text>
    <text x="400" y="135" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="11">Other parties sign in</text>
    <text x="400" y="153" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="11">parallel—like a multisig,</text>
    <text x="400" y="171" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="11">but for legal agreements</text>

    {/* Arrow to Execute (upper branch) */}
    <path d="M510 140 L540 140 L540 70 L570 70" stroke="#7bc47f" strokeWidth="2" fill="none" markerEnd="url(#arrowhead2)"/>

    {/* Arrow to Document (lower branch) */}
    <path d="M510 140 L540 140 L540 210 L570 210" stroke="#7bc47f" strokeWidth="2" fill="none" markerEnd="url(#arrowhead2)"/>

    {/* Step 3a - Execute */}
    <rect x="580" y="10" width="200" height="120" rx="12" fill="url(#greenGradient2)" stroke="#7bc47f" strokeWidth="1"/>
    <text x="680" y="40" textAnchor="middle" fill="#a8e6a3" fontSize="18" fontWeight="600">EXECUTE</text>
    <text x="680" y="65" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="11">Contract holds funds in</text>
    <text x="680" y="83" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="11">escrow, releasing per</text>
    <text x="680" y="101" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="11">agreed terms</text>

    {/* Step 3b - Document */}
    <rect x="580" y="150" width="200" height="120" rx="12" fill="url(#greenGradient2)" stroke="#7bc47f" strokeWidth="1"/>
    <text x="680" y="180" textAnchor="middle" fill="#a8e6a3" fontSize="18" fontWeight="600">DOCUMENT</text>
    <text x="680" y="205" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="11">HOST triggers AI workflow,</text>
    <text x="680" y="223" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="11">generating signed PDF with</text>
    <text x="680" y="241" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="11">all party addresses</text>
  </svg>
);

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        {/* About Vertical Foundation */}
        <section id="about" className="section-padding bg-dark-custom">
          <div className="container">
            <div className="row align-items-center mb-5">
              <div className="col-lg-5 mb-4 mb-lg-0">
                <h2 className="display-5 fw-bold mb-4">Stewards of the Ecosystem</h2>
                <p className="lead text-muted-custom">
                  Vertical Foundation is the governing body behind Vitruveo, responsible for
                  the protocol&apos;s development, treasury management, and long-term growth.
                </p>
              </div>
              <div className="col-lg-7">
                <p className="text-muted-custom mb-4">
                  We don&apos;t just oversee Vitruveo—we actively build it. From core protocol
                  upgrades to the applications that run on top of it, our team handles the
                  end-to-end development that keeps the ecosystem moving forward. We maintain
                  the validator network, manage chain upgrades, and develop the utilities that
                  developers and users rely on daily.
                </p>
                <p className="text-muted-custom">
                  But governance alone doesn&apos;t sustain an ecosystem. Most blockchain foundations
                  survive by selling tokens, diluting their community with each funding round.
                  We&apos;re taking a different path: building revenue-generating products we call
                  &quot;Verticals&quot; that fund operations while showcasing what Vitruveo can do.
                  Real utility driving real value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Manage */}
        <section className="section-padding bg-dark-alt">
          <div className="container">
            <h2 className="display-5 fw-bold text-center mb-5">What We Manage</h2>

            <div className="row mb-5">
              <div className="col-lg-4 mb-4 mb-lg-0">
                <div className="card-dark p-4 h-100">
                  <div className="icon-container">
                    <ProtocolIcon />
                  </div>
                  <h3 className="h4 text-green mb-3">The Protocol</h3>
                  <p className="text-muted-custom mb-3">
                    Vitruveo is built on a modified Geth client with custom capabilities
                    layered on top. We control the roadmap, coordinate hard forks, and
                    implement new features at the protocol level.
                  </p>
                  <p className="text-muted-custom mb-0">
                    Our validator network runs 24/7, and we&apos;re responsible for its health,
                    uptime, and security. When something needs to change at the deepest level
                    of the chain, that decision runs through us.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mb-4 mb-lg-0">
                <div className="card-dark p-4 h-100">
                  <div className="icon-container">
                    <UtilitiesIcon />
                  </div>
                  <h3 className="h4 text-green mb-3">Core Utilities</h3>
                  <p className="text-muted-custom mb-3">
                    Beyond the chain itself, we build and maintain the essential infrastructure
                    that makes Vitruveo usable: <a href="https://scope.vitruveo.ai" target="_blank" rel="noopener noreferrer" className="text-green">Scope<ExternalLinkIcon /></a> for asset discovery and
                    management, the native DEX for trading, and the Bridge for
                    moving assets between chains.
                  </p>
                  <p className="text-muted-custom mb-0">
                    These aren&apos;t third-party integrations—they&apos;re first-party products we
                    develop, host, and improve continuously. When users interact with Vitruveo,
                    they&apos;re often using our software.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card-dark p-4 h-100">
                  <div className="icon-container">
                    <TreasuryIcon />
                  </div>
                  <h3 className="h4 text-green mb-3">The Treasury</h3>
                  <p className="text-muted-custom mb-3">
                    We manage the ecosystem treasury through a multisig wallet, designated for grants, incentives,
                    and strategic initiatives. This isn&apos;t a slush fund—every allocation is
                    deliberate, aimed at growing the ecosystem sustainably.
                  </p>
                  <p className="text-muted-custom mb-0">
                    Our approach favors OTC deals over market sales to minimize price impact.
                    The goal is to deploy capital where it creates lasting value, not to dump
                    tokens for short-term runway.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Vitruveo Ecosystem */}
        <section id="vitruveo" className="section-padding bg-dark-custom">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">The Vitruveo Ecosystem</h2>
              <p className="lead text-muted-custom">
                An EVM-compatible Layer 1 blockchain designed from the ground up for the AI era.
              </p>
            </div>

            <div className="row mb-5">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <p className="lead text-muted-custom mb-4" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                  Vitruveo starts with the battle-tested foundation of Geth, then adds capabilities
                  that other chains simply don&apos;t have. Our focus is on bridging the gap between
                  Web2 and Web3—making it possible for smart contracts to interact with the
                  traditional internet in ways that were previously impossible without complex
                  middleware.
                </p>
                <p className="lead text-muted-custom" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                  This isn&apos;t about competing with Ethereum on TPS or gas fees. It&apos;s about
                  building a chain where AI agents can operate natively, where contracts can
                  trigger real-world actions, and where developers can build applications that
                  blur the line between on-chain and off-chain.
                </p>
              </div>
              <div className="col-lg-6">
                <div className="card-dark p-4">
                  <h4 className="h5 mb-4">Ecosystem Applications</h4>
                  <div className="d-flex flex-column gap-3">
                    <a href="https://www.vitruveo.ai" target="_blank" rel="noopener noreferrer"
                       className="d-flex align-items-center text-decoration-none p-3 rounded"
                       style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                      <div className="flex-grow-1">
                        <div className="fw-semibold text-white">Vitruveo<ExternalLinkIcon /></div>
                        <div className="small text-muted-custom">Main ecosystem portal</div>
                      </div>
                    </a>
                    <a href="https://explorer.vitruveo.ai" target="_blank" rel="noopener noreferrer"
                       className="d-flex align-items-center text-decoration-none p-3 rounded"
                       style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                      <div className="flex-grow-1">
                        <div className="fw-semibold text-white">Explorer<ExternalLinkIcon /></div>
                        <div className="small text-muted-custom">Block explorer and transaction viewer</div>
                      </div>
                    </a>
                    <a href="https://scope.vitruveo.ai" target="_blank" rel="noopener noreferrer"
                       className="d-flex align-items-center text-decoration-none p-3 rounded"
                       style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                      <div className="flex-grow-1">
                        <div className="fw-semibold text-white">Scope<ExternalLinkIcon /></div>
                        <div className="small text-muted-custom">Asset discovery and management</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The HOST Protocol */}
        <section id="technology" className="section-padding bg-dark-alt">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">The HOST Protocol</h2>
              <p className="lead text-muted-custom">
                HTTP Outbound Service Triggers—Vitruveo&apos;s answer to the blockchain isolation problem.
              </p>
            </div>

            <div className="row mb-5">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <h3 className="h4 text-green mb-4">The Silent Problem</h3>
                <p className="text-muted-custom mb-3">
                  Here&apos;s something most people don&apos;t think about: smart contracts are isolated by design.
                  They can receive transactions and emit logs, but they cannot reach out to the
                  outside world. They can&apos;t call an API. They can&apos;t send a webhook. They can&apos;t
                  even ping a server.
                </p>
                <p className="text-muted-custom mb-3">
                  This limitation forces developers to build elaborate workarounds. Oracle networks
                  poll for events. Middleware services watch logs and trigger actions. Every connection
                  between blockchain and reality requires a fragile bridge that someone has to build,
                  host, and maintain.
                </p>
                <p className="text-muted-custom">
                  For enterprise adoption, this is a dealbreaker. Businesses need provable chains of
                  custody—auditable proof that an on-chain event triggered a real-world action. Without
                  native connectivity, blockchain remains a closed system with limited practical utility.
                </p>
              </div>
              <div className="col-lg-6">
                <h3 className="h4 text-green mb-4">The Solution</h3>
                <p className="text-muted-custom mb-3">
                  HOST gives smart contracts a voice. When a contract executes on Vitruveo, it can
                  make HTTP requests directly—calling APIs, triggering webhooks, pushing data to any
                  web service. No oracles. No middleware. No third-party dependencies.
                </p>
                <p className="text-muted-custom mb-3">
                  Here&apos;s what makes it special: every outbound request is signed by the validator that
                  processed the transaction. This creates a cryptographic chain of custody—immutable proof
                  that a specific on-chain event triggered a specific off-chain action. It&apos;s not just
                  a log entry; it&apos;s validator-attested evidence that holds up to legal scrutiny.
                </p>
                <p className="text-muted-custom">
                  This changes what&apos;s possible. Contracts can generate documents, send notifications,
                  update external systems, and interact with AI services—all within the transaction flow,
                  all with cryptographic proof of origin.
                </p>
              </div>
            </div>

            <div className="card-dark p-4 p-lg-5 mb-5">
              <h3 className="h5 text-center mb-4">Chain of Custody</h3>
              <ChainOfCustodySVG />
            </div>

            <div className="mt-5">
              <h3 className="h4 text-center mb-4">HOST Demos</h3>
              <p className="text-muted-custom text-center mb-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
                See HOST in action. Live demonstrations showing how smart contracts on Vitruveo
                can interact with the outside world in real-time.
              </p>
              <div className="row g-4">
                <div className="col-md-6 col-lg-3">
                  <a href="https://www.vitruveo.ai/host/pass" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    <div className="card-dark p-4 h-100 text-center">
                      <div className="demo-icon mx-auto mb-3">
                        <SmartphoneIcon />
                      </div>
                      <h4 className="h5 text-white mb-2">Mobile Wallet Pass<ExternalLinkIcon /></h4>
                      <p className="text-muted-custom small mb-0">
                        Deliver digital passes to Apple Wallet or Google Wallet, triggered by on-chain transactions
                      </p>
                    </div>
                  </a>
                </div>
                <div className="col-md-6 col-lg-3">
                  <a href="https://www.vitruveo.ai/host/sheets" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    <div className="card-dark p-4 h-100 text-center">
                      <div className="demo-icon mx-auto mb-3">
                        <GridIcon />
                      </div>
                      <h4 className="h5 text-white mb-2">AI Google Sheets Update<ExternalLinkIcon /></h4>
                      <p className="text-muted-custom small mb-0">
                        Write data directly to a Google Sheet from a smart contract. Your transaction inserts a row with your wallet address and chosen number.
                      </p>
                    </div>
                  </a>
                </div>
                <div className="col-md-6 col-lg-3">
                  <a href="https://www.vitruveo.ai/host/scout" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    <div className="card-dark p-4 h-100 text-center">
                      <div className="demo-icon mx-auto mb-3">
                        <ScoutIcon />
                      </div>
                      <h4 className="h5 text-white mb-2">AI Alpha Scout<ExternalLinkIcon /></h4>
                      <p className="text-muted-custom small mb-0">
                        Trigger an AI research agent from the blockchain to discover crypto projects matching your risk profile
                      </p>
                    </div>
                  </a>
                </div>
                <div className="col-md-6 col-lg-3">
                  <a href="https://www.vitruveo.ai/host/ntfy" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    <div className="card-dark p-4 h-100 text-center">
                      <div className="demo-icon mx-auto mb-3">
                        <BellIcon />
                      </div>
                      <h4 className="h5 text-white mb-2">Ntfy Alerts<ExternalLinkIcon /></h4>
                      <p className="text-muted-custom small mb-0">
                        Send push notifications to any device directly from your smart contract function
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI-Native Blockchain */}
        <section className="section-padding bg-dark-custom">
          <div className="container">
            <div className="row align-items-center mb-5">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <h2 className="display-5 fw-bold mb-4">AI-Native by Design</h2>
                <p className="text-muted-custom mb-3">
                  HOST isn&apos;t just about calling APIs—it&apos;s the foundation for agentic workflows.
                  Transactions on Vitruveo can directly trigger AI agent behaviors, enabling
                  &quot;prompt-to-action&quot; patterns that were impossible before.
                </p>
                <p className="text-muted-custom">
                  Imagine a contract that, upon receiving payment, automatically calls an AI
                  service to generate a legal document, signs it cryptographically, stores it
                  on IPFS, and notifies all parties—all within a single transaction. That&apos;s
                  what AI-native means in practice.
                </p>
              </div>
              <div className="col-lg-6">
                <h3 className="h5 mb-4">Built-in Primitives</h3>
                <div className="row g-3">
                  <div className="col-6">
                    <a href="https://www.vitruveo.ai" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                      <div className="card-dark p-3 h-100">
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <div className="icon-container-sm">
                            <DiceIcon />
                          </div>
                          <div className="small fw-semibold text-white">Native Randomness<ExternalLinkIcon /></div>
                        </div>
                        <p className="text-muted-custom small mb-0">
                          Protocol-level RNG without oracle dependencies
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="col-6">
                    <a href="https://www.vitruveo.ai" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                      <div className="card-dark p-3 h-100">
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <div className="icon-container-sm">
                            <CalculatorIcon />
                          </div>
                          <div className="small fw-semibold text-white">DeFi Mathematics<ExternalLinkIcon /></div>
                        </div>
                        <p className="text-muted-custom small mb-0">
                          Built-in libraries for financial calculations
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="col-6">
                    <a href="https://www.vitruveo.ai" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                      <div className="card-dark p-3 h-100">
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <div className="icon-container-sm">
                            <KeyIcon />
                          </div>
                          <div className="small fw-semibold text-white">Passkey Auth<ExternalLinkIcon /></div>
                        </div>
                        <p className="text-muted-custom small mb-0">
                          WebAuthn support for seedless onboarding
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="col-6">
                    <a href="https://www.vitruveo.ai" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                      <div className="card-dark p-3 h-100">
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <div className="icon-container-sm">
                            <BatchIcon />
                          </div>
                          <div className="small fw-semibold text-white">Batched Transfers<ExternalLinkIcon /></div>
                        </div>
                        <p className="text-muted-custom small mb-0">
                          Multi-recipient transactions at reduced cost
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-accent p-4 p-lg-5">
              <div className="d-flex align-items-start gap-3">
                <div className="icon-container flex-shrink-0">
                  <LightbulbIcon />
                </div>
                <div>
                  <h3 className="h5 mb-3">The Competitive Edge</h3>
                  <p className="text-muted-custom mb-0">
                    Other chains can replicate HOST functionality—with months of development, custom
                    middleware, and ongoing maintenance. Vitruveo offers it out of the box, with
                    compliance-grade audit trails included. We solve the &quot;two worlds&quot; problem of code
                    versus reality, making blockchain practical for business use cases that other
                    chains simply cannot address.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vibe Legal */}
        <section id="vibe-legal" className="section-padding bg-dark-alt">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">Vibe Legal</h2>
              <p className="lead text-muted-custom">
                Our first Vertical: AI-powered contract generation that produces legally
                enforceable agreements backed by smart contract execution.
              </p>
            </div>

            <div className="row mb-5">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <h3 className="h4 text-green mb-4">The Problem with Contracts</h3>
                <p className="text-muted-custom mb-3">
                  Smart contracts execute code flawlessly, but they mean nothing in a courtroom.
                  Traditional legal agreements are enforceable but require manual execution and
                  trust between parties. Neither solution works well for the modern economy of
                  gig work, revenue shares, and digital asset transactions.
                </p>
                <p className="text-muted-custom">
                  You can have a perfect escrow contract on-chain, but if something goes wrong,
                  what do you show a judge? Code? That&apos;s not how civil law works.
                </p>
              </div>
              <div className="col-lg-6">
                <h3 className="h4 text-green mb-4">How Vibe Legal Works</h3>
                <p className="text-muted-custom mb-3">
                  You describe what you need in plain language. The Vibe Legal AI generates both
                  a smart contract and a corresponding legal agreement—a complete full-stack
                  application purpose-built for your specific transaction.
                </p>
                <p className="text-muted-custom">
                  When parties fund the contract, they&apos;re signing the agreement. The transaction
                  itself is the signature. HOST kicks off an AI agentic workflow that generates
                  PDF documentation with embedded Validator signature and visible EVM addresses
                  for all signatories that serves as court-admissible proof of the agreement and its terms.
                </p>
              </div>
            </div>

            <div className="card-dark p-4 p-lg-5 mb-5">
              <h3 className="h5 text-center mb-4">The Innovation: Transaction as Signature</h3>
              <TransactionAsSignatureSVG />
            </div>

            <h3 className="h5 text-center mb-4">Use Cases</h3>
            <div className="row mb-5">
              <div className="col-lg-4 mb-4 mb-lg-0">
                <div className="card-dark p-4 h-100">
                  <div className="icon-container">
                    <SplitIcon />
                  </div>
                  <h4 className="h5 mb-2">Split</h4>
                  <p className="small text-white-50 mb-3">Collaborative Revenue Sharing</p>
                  <p className="text-muted-custom mb-3">
                    Create revenue-sharing agreements that automatically route incoming payments
                    to all parties. No monthly accounting, no manual distributions—payments
                    stream instantly as they arrive.
                  </p>
                  <p className="text-muted-custom small">
                    Every distribution generates tax-compliant PDF receipts via HOST, giving all
                    parties documentation they can use for accounting and compliance.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mb-4 mb-lg-0">
                <div className="card-dark p-4 h-100">
                  <div className="icon-container">
                    <SaleIcon />
                  </div>
                  <h4 className="h5 mb-2">Sale</h4>
                  <p className="small text-white-50 mb-3">Trusted Asset Transfer</p>
                  <p className="text-muted-custom mb-3">
                    Escrow for high-value OTC transactions. Buyer funds the contract, seller
                    delivers the asset, both parties confirm—then funds release. If terms aren&apos;t
                    met within the time lock, funds return automatically.
                  </p>
                  <p className="text-muted-custom small">
                    The contract generates documentation at each stage, creating an auditable
                    record of the entire transaction.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card-dark p-4 h-100">
                  <div className="icon-container">
                    <GigIcon />
                  </div>
                  <h4 className="h5 mb-2">Gig</h4>
                  <p className="small text-white-50 mb-3">Milestone-Based Payments</p>
                  <p className="text-muted-custom mb-3">
                    Freelance contracts where clients prove solvency by funding upfront, and
                    workers get paid as they deliver approved milestones. No more chasing
                    invoices or wondering if you&apos;ll get paid.
                  </p>
                  <p className="text-muted-custom small">
                    Final payment releases generate &quot;Lien Waiver&quot; documentation—legal proof
                    that the work is complete and paid for.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Vision */}
        <section id="vision" className="section-padding bg-dark-custom">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">The Path Forward</h2>
              <p className="lead text-muted-custom">
                A sustainable ecosystem where utility drives value.
              </p>
            </div>

            <div className="row mb-5">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <h3 className="h4 text-green mb-4">Beyond Token Sales</h3>
                <p className="text-muted-custom mb-3">
                  Most blockchain foundations face the same dilemma: sell tokens to fund operations,
                  depressing price and diluting community. Or run lean and watch development stall.
                  Neither option builds long-term value.
                </p>
                <p className="text-muted-custom">
                  We&apos;re building a different model. Vibe Legal is the first Vertical—a product that
                  generates real USD revenue while demonstrating Vitruveo&apos;s unique capabilities.
                  That revenue funds operations. When we hit targets, we stop selling tokens entirely.
                </p>
              </div>
              <div className="col-lg-6">
                <h3 className="h4 text-green mb-4">Future Verticals</h3>
                <p className="text-muted-custom mb-3">
                  Vibe Legal proves the model, but it&apos;s just the beginning. The same pattern—AI-powered
                  application generation leveraging HOST and Vitruveo&apos;s unique primitives—applies
                  across industries.
                </p>
                <p className="text-muted-custom">
                  Vibe Logistics for supply chain. Vibe Assets for real-world asset tokenization.
                  Each Vertical showcases what Vitruveo can do, attracts new users and developers
                  to the ecosystem, and generates revenue that funds further growth.
                </p>
              </div>
            </div>

            <div className="card-dark p-4 p-lg-5">
              <h3 className="h4 text-center mb-5">The Vertical Vision</h3>
              <div className="row mb-5">
                <div className="col-lg-4 mb-4 mb-lg-0">
                  <div className="text-center mb-4">
                    <div className="icon-container-lg mx-auto">
                      <GovernanceIcon />
                    </div>
                    <div className="h4 text-green mb-3">Governance</div>
                  </div>
                  <p className="text-muted-custom mb-3">
                    As stewards of Vitruveo, we hold a fundamental responsibility: ensuring the protocol
                    evolves in ways that benefit the entire ecosystem. This means transparent decision-making,
                    careful treasury management, and long-term thinking over short-term gains.
                  </p>
                  <p className="text-muted-custom">
                    Every protocol upgrade, every grant allocation, every strategic partnership runs through
                    a governance process designed to protect and grow the ecosystem sustainably.
                  </p>
                </div>
                <div className="col-lg-4 mb-4 mb-lg-0">
                  <div className="text-center mb-4">
                    <div className="icon-container-lg mx-auto">
                      <RocketIcon />
                    </div>
                    <div className="h4 text-green mb-3">Operations</div>
                  </div>
                  <p className="text-muted-custom mb-3">
                    Traditional foundations dilute their communities to survive. We&apos;re building a different
                    model: revenue-generating products that fund operations while demonstrating the technology.
                    When Verticals succeed, token sales become unnecessary.
                  </p>
                  <p className="text-muted-custom">
                    This creates alignment between the Foundation and token holders. Our success depends on
                    building products people actually use, not on finding the next round of investors.
                  </p>
                </div>
                <div className="col-lg-4">
                  <div className="text-center mb-4">
                    <div className="icon-container-lg mx-auto">
                      <TrendingIcon />
                    </div>
                    <div className="h4 text-green mb-3">Growth</div>
                  </div>
                  <p className="text-muted-custom mb-3">
                    Each Vertical is a proof point—a live demonstration of what&apos;s possible when you combine
                    AI-native blockchain capabilities with real-world use cases. Vibe Legal is first, but
                    the pattern applies across industries: logistics, real estate, supply chain, and beyond.
                  </p>
                  <p className="text-muted-custom">
                    As Verticals grow, they bring users, developers, and capital into the Vitruveo ecosystem,
                    creating a virtuous cycle of adoption and innovation.
                  </p>
                </div>
              </div>
              <div className="text-center pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <p className="lead text-white mb-0">
                  A sustainable ecosystem where utility drives value.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
