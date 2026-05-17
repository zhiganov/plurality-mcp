import type { FailureMode } from '../types.js';

export const FAILURE_MODES: FailureMode[] = [
  {
    "id": "big-tech-polarization",
    "name": "Big Tech Polarization / Polarized Enclaves",
    "kind": "pattern",
    "signature": "Rapid digital platform growth lures individuals into polarized enclaves, thwarting cross-difference collaboration and sowing new forms of division even as the underlying technology has the potential to tie communities together.",
    "example": "The internet, despite its origins as a tool for connecting distant communities across space and time, has 'recently proven to be a powerful tool for thwarting those collaborations and sowing new forms of division.'",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "polarized social media feeds",
        "filter-bubble echo chambers"
      ],
      "state": [
        "authoritarian regimes leveraging digital division"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 2-1"
  },
  {
    "id": "technology-democracy-gulf",
    "name": "Widening Gulf Between Information Technology and Democracy",
    "kind": "pattern",
    "signature": "Technology and democracy are treated as opposed forces — tech accelerates centralization, surveillance, or market logic while democratic institutions stagnate or are actively undermined by digital tools. Spot it when technologists dismiss governance as friction and democrats treat technology as inherently threatening.",
    "example": "The opening of Ch. 2-0 frames the relationship between information technology and democracy as a 'widening gulf' — each advancing on its own trajectory with little constructive dialogue, leaving both worse off.",
    "pattern_ids": [],
    "domain_examples": {
      "state": [
        "Democratic backsliding accelerated by social-media disinformation"
      ],
      "dao": [
        "DAO governance captured by technical insiders dismissing 'politics'"
      ],
      "public_infrastructure": [
        "Civic-tech projects sidelined by incumbent digital platforms"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 2-0"
  },
  {
    "id": "monist-technocracy",
    "name": "Monist Technocracy",
    "kind": "pattern",
    "signature": "A single technically-optimal solution — whether an AI system, a market mechanism, or a platform algorithm — is positioned as superseding messy democratic deliberation. Governance is reduced to parameter-tuning by experts rather than legitimate collective choice. Look for rhetoric that frames politics as 'inefficiency' to be automated away.",
    "example": "Ch. 2-0 identifies 'monist' approaches in which technology is used to enforce one unified logic (market, state, or algorithmic) at the expense of democratic pluralism.",
    "pattern_ids": [],
    "domain_examples": {
      "dao": [
        "Token-weighted voting that treats governance as pure mechanism design"
      ],
      "state": [
        "Algorithmic regulation replacing legislative deliberation"
      ],
      "public_infrastructure": [
        "Smart-city platforms that optimize city life without resident input"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 2-0"
  },
  {
    "id": "atomist-libertarianism",
    "name": "Atomist Libertarianism",
    "kind": "pattern",
    "signature": "Technology is deployed to liberate isolated individuals from collective obligations — taxes, regulations, social contracts — by creating exit options (crypto, seasteading, private governance) that hollow out shared democratic infrastructure. Spot it when 'freedom' is defined as freedom from collective accountability rather than freedom through collective self-determination.",
    "example": "Ch. 2-0 contrasts 'atomist' visions — in which individuals transact freely outside any democratic framework — with ⿻ visions grounded in intersecting, overlapping publics.",
    "pattern_ids": [],
    "domain_examples": {
      "dao": [
        "Governance tokens used to exit regulatory jurisdiction rather than build community"
      ],
      "platform_cooperative": [
        "Private governance replacing public-option infrastructure"
      ],
      "movement": [
        "Exit-not-voice strategies in digital-rights organizing"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 2-0"
  },
  {
    "id": "authoritarian-digital-governance",
    "name": "Authoritarian Digital Governance",
    "kind": "pattern",
    "signature": "A state centralizes digital infrastructure and data flows to maximize surveillance, suppress dissent, and extend authoritarian control — framing technology as a tool of social management rather than civic participation. Look for: state-mandated platform compliance, social credit or scoring systems, cross-platform identity surveillance, and the absence of independent civic-tech or deliberative digital spaces.",
    "example": "The People's Republic of China's model of internet governance — the 'Great Firewall', social credit scoring, and platform-level surveillance — is cited in Plurality as the paradigmatic case of using digital technology to entrench authoritarian rule rather than enable ⿻ collaboration.",
    "pattern_ids": [],
    "domain_examples": {
      "state": [
        "PRC Great Firewall and social credit system"
      ],
      "public_infrastructure": [
        "state-controlled platform mandates"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 2-1"
  },
  {
    "id": "disinformation-interference",
    "name": "Authoritarian Disinformation and Electoral Interference",
    "kind": "pattern",
    "signature": "A well-resourced authoritarian actor targets a smaller democratic population with coordinated information manipulation ahead of elections; opinion polls diverge from results in directions favoring authoritarian-aligned candidates; post-election contestation and social polarization ensue.",
    "example": "Taiwan's January 13, 2024 general election was described as a test case: 'a more concerted, better-funded adversary focused on a considerably smaller population,' with generative AI models expected to 'turbocharge information manipulation and interference by authoritarian actors.'",
    "pattern_ids": [],
    "domain_examples": {
      "state": [
        "Taiwan 2024 general election disinformation campaign"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 2-1"
  },
  {
    "id": "taiwan-2024-election-disinformation",
    "name": "Taiwan 2024 General Election Disinformation Campaign",
    "kind": "instance",
    "signature": "A foreign authoritarian actor mounted a well-funded, concentrated disinformation effort against Taiwan's January 13, 2024 election — yet the targeted candidate outperformed polls and a largely consensual outcome prevailed, suggesting digital-democracy infrastructure helped absorb the attack.",
    "example": "Walking the streets of Taipei on the eve of that election, he saw no shortage of divisions for such attacks to exploit… Yet, despite these extreme divides… the January 13 election has become a positive model to the world, with the candidate of the party opposed by the authoritarian adversary outperforming opinion polls, calm prevailing after the election and a largely consensual outcome being reached.",
    "pattern_ids": [
      "disinformation-interference",
      "authoritarian-digital-governance"
    ],
    "domain_examples": {
      "state": [
        "Taiwan 2024 general election"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 2-1"
  },
  {
    "id": "white-terror-digital-suppression",
    "name": "White Terror: Authoritarian Suppression of Plural Identity",
    "kind": "instance",
    "signature": "An externally-imposed authoritarian government systematically suppresses indigenous or minority cultural identity through martial law, censorship of journalists and dissidents, imprisonment of opposition leaders, and forced linguistic assimilation — setting the stage for later democratic backlash.",
    "example": "Chiang and two million ROC soldiers and civilians relocated to Taiwan, declaring it the home of 'free China', while simultaneously imposing martial law on the eight million native, primarily Taigi- and Hakka-speaking population that came to be known as the 'White Terror'. Acting as dictator, Chiang positioned the ROC to the world as the true representatives of China.",
    "pattern_ids": [
      "authoritarian-digital-governance"
    ],
    "domain_examples": {
      "state": [
        "ROC martial law / White Terror 1949–1980s",
        "Kaohsiung Incident 1979"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 2-1"
  },
  {
    "id": "engagement-maximization",
    "name": "Engagement-Maximization / Outrage Amplification",
    "kind": "pattern",
    "signature": "Algorithmic feeds optimized for engagement metrics (clicks, shares, reactions) that systematically amplify outrage, fear, and polarizing content because such content generates the most interaction — measurable as a widening gap between what users say they want and what the algorithm serves them.",
    "example": "Social media platforms whose recommendation systems learned that outrage and tribalism reliably maximize time-on-site, turning civic discourse into a race to the bottom of emotional provocation.",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "Facebook News Feed algorithm",
        "YouTube recommendation rabbit-holes"
      ],
      "state": [
        "Platform accountability hearings (U.S. Senate, 2021)"
      ]
    },
    "countering_governance_form_ids": [
      "polis-style-clustering",
      "augmented-deliberation"
    ],
    "source_chapter": "Ch. 2-2"
  },
  {
    "id": "facebook-engagement-algorithm",
    "name": "Facebook Engagement Algorithm (outrage amplification instance)",
    "kind": "instance",
    "signature": "A recommendation and ranking system shown internally to amplify content provoking anger and anxiety because such content maximised engagement metrics, with internal research acknowledging the harm while the design remained unchanged.",
    "example": "Facebook's internal research (later surfaced by whistleblower Frances Haugen) documented that its algorithm systematically amplified outrage-inducing content; despite knowing this, the platform kept the engagement-maximizing design in place.",
    "pattern_ids": [
      "engagement-maximization"
    ],
    "domain_examples": {
      "online_community": [
        "Facebook News Feed 2016–2021"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 2-2"
  },
  {
    "id": "surveillance-capitalism",
    "name": "Surveillance Capitalism",
    "kind": "pattern",
    "signature": "Business models in which behavioral data harvested from users at scale is commodified and sold to predict and modify future behavior — turning citizens' digital lives into a raw-material extraction operation for private profit with no democratic accountability.",
    "example": "The advertising-funded internet business model, in which platforms record every click, pause, and social graph connection to build behavioral profiles sold to advertisers, insurers, and political campaigns.",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "Google/Alphabet ad-targeting infrastructure",
        "Meta behavioral profiling"
      ],
      "state": [
        "Cambridge Analytica / 2016 U.S. election targeting"
      ]
    },
    "countering_governance_form_ids": [
      "data-coalitions",
      "federated-identity"
    ],
    "source_chapter": "Ch. 2-2"
  },
  {
    "id": "digital-divide-exclusion",
    "name": "Digital Divide / Exclusion from Digital Democracy",
    "kind": "pattern",
    "signature": "Structural gaps in internet access, digital literacy, and device ownership that reproduce and deepen existing social inequalities — so that the populations most in need of democratic voice are the least able to participate in digital-democracy tools.",
    "example": "Rural and low-income communities globally who lack reliable broadband or smartphone access are systematically excluded from digital-participation platforms like online consultations, e-voting pilots, or civic-tech tools, concentrating digital-democratic power among already-privileged populations.",
    "pattern_ids": [],
    "domain_examples": {
      "state": [
        "Rural broadband gaps in the U.S. and Global South"
      ],
      "public_infrastructure": [
        "e-government portals inaccessible on low-bandwidth connections"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 2-2"
  },
  {
    "id": "misinformation-ecosystem",
    "name": "Misinformation / Infodemic Ecosystem",
    "kind": "pattern",
    "signature": "Networked environments in which false or misleading content spreads faster and wider than corrections, exploiting the same engagement-maximizing incentives that reward emotionally provocative content — detectable when viral falsehoods consistently outpace factual rebuttals in reach and speed.",
    "example": "The COVID-19 'infodemic' in which health misinformation — about vaccines, cures, and the virus's origins — spread virally across social platforms, overwhelming public-health messaging and undermining collective response.",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "WhatsApp health misinformation chains",
        "Anti-vaccine Facebook groups"
      ],
      "state": [
        "COVID-19 infodemic (WHO designation, 2020)"
      ]
    },
    "countering_governance_form_ids": [
      "augmented-deliberation",
      "polis-style-clustering"
    ],
    "source_chapter": "Ch. 2-2"
  },
  {
    "id": "audrey-tang-digital-minister",
    "name": "Audrey Tang as Taiwan's Digital Minister",
    "kind": "instance",
    "signature": "A civic hacker and open-source contributor brought into government as a 'reverse mentor' and later appointed Digital Minister — embodying the ⿻ model of bridging civil society, technology, and the state rather than treating them as separate spheres.",
    "example": "Audrey Tang's trajectory from g0v co-founder and vTaiwan facilitator to Taiwan's first Digital Minister (2016) is the book's central biographical throughline illustrating how ⿻ digital democracy can scale from grassroots hacking to state capacity.",
    "pattern_ids": [],
    "domain_examples": {
      "state": [
        "Taiwan Digital Ministry (MODA)",
        "vTaiwan civic-tech consultations"
      ],
      "public_infrastructure": [
        "g0v (gov-zero) infrastructure projects"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 2-2"
  },
  {
    "id": "vtaiwan-post-covid-decline",
    "name": "vTaiwan Post-COVID Participation Decline",
    "kind": "instance",
    "signature": "A deliberation platform loses its volunteer base and face-to-face meeting cadence when an external shock (pandemic) removes the social infrastructure sustaining participation, exposing its dependence on intensive volunteering and lack of governmental mandate.",
    "example": "The community's engagement experienced a downturn following the onset of the COVID-19 pandemic, which interrupted face-to-face meetings and led to decreased participation. The platform faced challenges due to the intensive volunteering effort required, the absence of mandates for governmental responses, and its somewhat narrow focus.",
    "pattern_ids": [
      "civic-disengagement-post-crisis"
    ],
    "domain_examples": {
      "public_infrastructure": [
        "vTaiwan 2020–2022 engagement drop"
      ]
    },
    "countering_governance_form_ids": [
      "augmented-deliberation"
    ],
    "source_chapter": "Ch. 2-2"
  },
  {
    "id": "infodemic-lockdown-parallel",
    "name": "Infodemic Without Takedowns / Pandemic Without Lockdowns Failure Avoidance",
    "kind": "instance",
    "signature": "A government facing simultaneous public-health and information crises chooses neither authoritarian suppression (lockdowns, takedowns) nor laissez-faire neglect, but instead uses fast, participatory, humor-forward civic-tech responses to contain both the disease and the misinformation — demonstrating that ⿻ infrastructure can substitute for coercive state power.",
    "example": "Together these policies have helped Taiwan fight off the 'infodemic' without takedowns, just as it fought off the pandemic without lockdowns. This culminated in the January 13, 2024 election in which a PRC campaign of unprecedented size and AI-fueled sophistication failed to polarize or noticeably sway the election.",
    "pattern_ids": [
      "foreign-disinformation-polarization",
      "engagement-maximization"
    ],
    "domain_examples": {
      "public_infrastructure": [
        "Taiwan COVID-19 mask app",
        "Cofacts fact-checking during pandemic"
      ],
      "state": [
        "Premier Su Tseng-chang 'humor over rumor' response"
      ]
    },
    "countering_governance_form_ids": [
      "cofacts-crowdsourced-fact-checking",
      "humor-over-rumor"
    ],
    "source_chapter": "Ch. 2-2"
  },
  {
    "id": "atomist-fragmentation",
    "name": "Atomist Fragmentation of Social Identity",
    "kind": "pattern",
    "signature": "Systems and governance designs treat individuals as isolated, context-free atoms — stripping away the overlapping group memberships, communities, and relational ties that actually constitute social identity. Spotted when: identity is reduced to a single universal credential; platforms treat users as undifferentiated individuals; governance ignores intersecting affiliations.",
    "example": "The book contrasts the 'atomist' view — in which society is composed of self-sufficient individuals interacting through markets — with the ⿻ view that individuals are constituted by their intersecting group memberships and network relationships.",
    "pattern_ids": [],
    "domain_examples": {
      "dao": [
        "token-weighted voting that treats each address as an identical atom"
      ],
      "state": [
        "national ID systems that collapse multi-layered civic identity into a single credential"
      ],
      "online_community": [
        "real-name-only platforms that erase pseudonymous community affiliations"
      ]
    },
    "countering_governance_form_ids": [
      "intersectional-social-identity",
      "federated-identity"
    ],
    "source_chapter": "Ch. 3-2"
  },
  {
    "id": "monist-homogenization",
    "name": "Monist Homogenization of Collective Life",
    "kind": "pattern",
    "signature": "A single overarching authority — state, platform, or ideology — flattens the diversity of communities and associations into one uniform framework. Spotted when: a platform or government insists there is only one valid community standard, one identity format, or one decision procedure for all groups.",
    "example": "The book describes the 'monist' failure as collapsing social diversity into a single collective will or a single market logic, erasing the intermediate layer of overlapping, cross-cutting communities that ⿻ depends on.",
    "pattern_ids": [],
    "domain_examples": {
      "state": [
        "nation-state-monism"
      ],
      "online_community": [
        "monoculture-tech-design"
      ],
      "platform_cooperative": [
        "platform policies that impose identical governance on all communities"
      ]
    },
    "countering_governance_form_ids": [
      "intersectional-social-identity"
    ],
    "source_chapter": "Ch. 3-2"
  },
  {
    "id": "network-inequality-capture",
    "name": "Network Inequality and Capture by Dense Cliques",
    "kind": "pattern",
    "signature": "Network structures become dominated by tightly clustered, high-degree nodes or cliques — wealthy, well-connected actors who can route information, resources, and influence while peripheral communities remain isolated. Spotted when: graph centrality is extremely skewed; a small number of nodes control most bridging ties; network effects compound existing economic or social inequalities.",
    "example": "The book notes that real social networks are neither the random graphs of early network science nor frictionless markets, but are shaped by homophily and structural inequality — producing 'rich-club' dynamics where densely connected elite clusters capture the benefits of connectivity.",
    "pattern_ids": [],
    "domain_examples": {
      "dao": [
        "DAO governance where a handful of large token-holders dominate proposal flow"
      ],
      "online_community": [
        "Twitter/X network where verified high-follower accounts set agenda for peripheral users"
      ],
      "state": [
        "lobbying networks where well-resourced interest groups monopolize access to legislators"
      ]
    },
    "countering_governance_form_ids": [
      "quadratic-voting",
      "quadratic-funding",
      "polis-style-clustering"
    ],
    "source_chapter": "Ch. 3-2"
  },
  {
    "id": "homophily-echo-chamber",
    "name": "Homophily-Driven Echo Chambers",
    "kind": "pattern",
    "signature": "Algorithmic and social forces push people toward ties with those who are already similar, reducing cross-cutting connections that enable ⿻ collaboration across difference. Spotted when: recommendation systems amplify in-group content; bridge ties between communities decay over time; deliberative forums sort into ideologically homogeneous clusters.",
    "example": "The chapter draws on network science research — citing McPherson, Smith-Lovin, and Cook — to show that 'birds of a feather flock together' (homophily) is one of the strongest forces shaping social networks, and that unchecked it produces fragmented, polarized network topologies inimical to ⿻.",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "Facebook newsfeed homophily producing filter bubbles"
      ],
      "federated_network": [
        "Mastodon instance-level blocking that isolates communities from cross-instance contact"
      ],
      "state": [
        "geographic partisan sorting producing legislative gridlock"
      ]
    },
    "countering_governance_form_ids": [
      "polis-style-clustering",
      "augmented-deliberation"
    ],
    "source_chapter": "Ch. 3-2"
  },
  {
    "id": "propertarian-enclosure",
    "name": "Propertarian Enclosure of Digital Commons",
    "kind": "pattern",
    "signature": "Open protocols and shared digital infrastructure get replaced by proprietary platforms; the commons is enclosed by corporate property rights, eliminating the collaborative substrate that enabled diverse participation.",
    "example": "The book describes how the early internet's open, commons-based architecture — built on TCP/IP, SMTP, and HTTP as public protocols — was progressively enclosed by proprietary platforms (Facebook, Google, Apple) that captured the value of networked interaction behind walled gardens.",
    "pattern_ids": [],
    "domain_examples": {
      "public_infrastructure": [
        "TCP/IP-to-platform enclosure"
      ],
      "online_community": [
        "open-web to walled-garden migration"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 3-3"
  },
  {
    "id": "lost-dao-internet",
    "name": "The Lost DAO of the Internet",
    "kind": "instance",
    "signature": "A historical moment when digital infrastructure could have been built on fundamentally ⿻ protocols for identity, property, and collective action — but wasn't — leaving a 'lost' alternative that haunt current failures of the internet.",
    "example": "Weyl and Tang argue that the early internet's architects (J.C.R. Licklider, the ARPANET team, and the early web's designers) envisioned a decentralized, collaborative, democratic medium. The specific protocols for social identity, shared data ownership, and collective governance were never standardized, leaving a 'lost DAO' — a missing layer of democratic infrastructure whose absence enabled both corporate enclosure and authoritarian capture.",
    "pattern_ids": [
      "propertarian-enclosure"
    ],
    "domain_examples": {
      "public_infrastructure": [
        "ARPANET missing governance layer",
        "early web identity vacuum"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 3-3"
  },
  {
    "id": "web3-hyper-financialization",
    "name": "Web3 Hyper-Financialization and Libertarian Capture",
    "kind": "pattern",
    "signature": "Projects inspired by legitimate gaps in internet infrastructure (identity, payments, provenance) get captured by libertarian and hyper-financialized ideologies, diverting cryptographic and blockchain tools away from democratic governance and toward speculative markets and atomist individualism.",
    "example": "Many projects in the web3 space have been influenced by Libertarianism and hyper-financialization, even as the enduring connection to original internet aspirations under Vitalik Buterin's leadership inspired ⿻-aligned projects like GitCoin and decentralized identity.",
    "pattern_ids": [
      "atomist-libertarianism"
    ],
    "domain_examples": {
      "dao": [
        "web3-libertarian-speculation"
      ],
      "public_infrastructure": [
        "bitcoin-atomist-capture"
      ]
    },
    "countering_governance_form_ids": [
      "quadratic-funding",
      "decentralized-identity"
    ],
    "source_chapter": "Ch. 3-3"
  },
  {
    "id": "att-centralized-network-resistance",
    "name": "AT&T Rejection of Packet Switching",
    "kind": "instance",
    "signature": "Dominant centralized telecoms dismiss distributed networking innovations that threaten their infrastructure monopoly, demonstrating how entrenched centralized architectures resist ⿻ alternatives even when technically superior.",
    "example": "While Baran received support and encouragement from scientists at Bell Labs, his ideas were roundly dismissed by AT&T, the national telephone monopoly in whose culture high-quality centralized dedicated machinery was deeply entrenched.",
    "pattern_ids": [
      "private-sector-protocol-capture",
      "monist-homogenization"
    ],
    "domain_examples": {
      "public_infrastructure": [
        "att-packet-switching-rejection"
      ]
    },
    "countering_governance_form_ids": [
      "open-protocol-standard-setting"
    ],
    "source_chapter": "Ch. 3-3"
  },
  {
    "id": "competitive-authoritarianism",
    "name": "Competitive Authoritarianism",
    "kind": "pattern",
    "signature": "Democratically elected leaders and governments curtail rights and liberties in ways that hollow out democratic functioning while maintaining electoral facades — converting nominal democracies into hybrid regimes where elections persist but rights underpinning genuine consent are eroded.",
    "example": "Levitsky and Way's 'competitive authoritarian' regimes: leaders use electoral legitimacy to gradually dismantle freedoms of speech, association, and press, turning elections into instruments of incumbent advantage rather than genuine popular will.",
    "pattern_ids": [],
    "domain_examples": {
      "state": [
        "Weimar Republic's collapse into Nazi electoral plurality",
        "contemporary competitive authoritarian regimes documented by Levitsky & Way"
      ]
    },
    "countering_governance_form_ids": [
      "rights-os-plural-foundation",
      "augmented-deliberation"
    ],
    "source_chapter": "Ch. 4-0"
  },
  {
    "id": "attention-flooding-suppression",
    "name": "Attention Flooding as Censorship",
    "kind": "pattern",
    "signature": "Rather than suppressing dissidents directly, adversaries flood the information commons with distractions, spam, and fabricated content to crowd out genuine political voice — exploiting information abundance and attention scarcity to achieve censorship-equivalent effects without literal censorship.",
    "example": "King, Pan and Roberts's documentation of how the Chinese government fabricates social media posts for strategic distraction rather than direct censorship, exploiting abundant information and scarce attention to drown out inconvenient voices.",
    "pattern_ids": [],
    "domain_examples": {
      "state": [
        "PRC fabricated social media posts for strategic distraction (King, Pan, Roberts)"
      ],
      "public_infrastructure": [
        "election interference via micro-targeted disinformation on global social media platforms"
      ]
    },
    "countering_governance_form_ids": [
      "augmented-deliberation",
      "polis-style-clustering"
    ],
    "source_chapter": "Ch. 4-0"
  },
  {
    "id": "attention-economy-authoritarian-capture",
    "name": "Attention Economy Sold to Authoritarian Influence",
    "kind": "instance",
    "signature": "Global social media platforms in democracies auction their users' attention — including through micro-targeting — to election interference and misinformation campaigns by adversarial actors, undermining the rights-protecting function that free speech was meant to serve.",
    "example": "Global social media platforms have 'auctioned the attention of their customers including with micro-targeting for election interference and misinformation by adversaries,' as highlighted in the international debate over TikTok's potential authoritarian influences.",
    "pattern_ids": [
      "engagement-maximization",
      "disinformation-interference",
      "attention-flooding-suppression"
    ],
    "domain_examples": {
      "public_infrastructure": [
        "TikTok authoritarian influence debate (2024)",
        "social media micro-targeting for election interference"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 4-0"
  },
  {
    "id": "proprietary-protocol-monopoly",
    "name": "Proprietary Protocol Monopoly over Digital Foundations",
    "kind": "pattern",
    "signature": "Fundamental affordances of networked life — identity, association, payments, data sharing — are controlled and quasi-monopolized by nation-state governments or private corporations rather than open, non-proprietary protocols, leaving citizens without meaningful digital rights analogous to civic rights.",
    "example": "There is no widely adopted non-proprietary protocol for identification, no widely adopted non-proprietary protocols for communication and group formation, no non-proprietary payment protocols, and no protocols for secure sharing of digital assets — these are almost all controlled by private corporations or nation-states.",
    "pattern_ids": [],
    "domain_examples": {
      "public_infrastructure": [
        "missing non-proprietary identity protocol",
        "missing non-proprietary communication/association protocol",
        "missing non-proprietary payment protocol",
        "missing non-proprietary data/computation sharing protocol"
      ],
      "platform_cooperative": [
        "India Stack as partial counter-example"
      ]
    },
    "countering_governance_form_ids": [
      "federated-identity",
      "data-coalitions",
      "digital-public-infrastructure"
    ],
    "source_chapter": "Ch. 4-0"
  },
  {
    "id": "identity-theft-impersonation",
    "name": "Identity Theft and Digital Impersonation",
    "kind": "pattern",
    "signature": "Absence of a robust, decentralized identity layer allows bad actors to impersonate individuals or institutions online, undermining trust in digital interactions. Spotting it: high rates of phishing, romance scams, fake accounts, and credential fraud across platforms that rely solely on passwords or self-asserted identity.",
    "example": "Without a foundational identity layer on the internet, individuals are routinely defrauded by impersonators — phishing attacks, romance scams, and fake accounts proliferate because there is no reliable way to verify who one is actually communicating with.",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "romance-scam-platforms",
        "phishing-via-email"
      ],
      "public_infrastructure": [
        "credential-stuffing-attacks"
      ]
    },
    "countering_governance_form_ids": [
      "federated-identity",
      "did-decentralized-identifiers"
    ],
    "source_chapter": "Ch. 4-1"
  },
  {
    "id": "binary-identity-verification",
    "name": "Binary / Monolithic Identity Verification",
    "kind": "pattern",
    "signature": "Systems that treat identity as a single, all-or-nothing credential — one login, one legal name, one national ID — collapsing the plural, intersectional nature of personhood into a single point of control or failure. Spotting it: platforms demanding a 'real name', single-sign-on monopolies, national ID as the sole gateway to digital services.",
    "example": "Prevailing identity systems force users into a binary: either fully verified with a government ID (exposing maximum personal data) or entirely pseudonymous (unable to establish any trust). This collapses the rich, layered reality of social identity — that a person is simultaneously a citizen, a professional, a community member, a family member — into a single credential.",
    "pattern_ids": [],
    "domain_examples": {
      "state": [
        "national-id-only-digital-services"
      ],
      "online_community": [
        "facebook-real-name-policy"
      ],
      "public_infrastructure": [
        "single-signon-monopoly"
      ]
    },
    "countering_governance_form_ids": [
      "federated-identity",
      "intersectional-social-identity"
    ],
    "source_chapter": "Ch. 4-1"
  },
  {
    "id": "decline-of-civic-associations",
    "name": "Decline of Civic Associations as ⿻ Publics",
    "kind": "pattern",
    "signature": "The institutional infrastructure of overlapping, cross-cutting civic associations — unions, churches, fraternal lodges, local press, civic clubs — that Tocqueville and Dewey identified as the backbone of democracy atrophies, leaving a vacuum filled by monist platforms or atomized individuals. Spot it when Putnam-style 'bowling alone' data accumulates: declining union membership, shrinking local newspaper circulation, falling participation in civic organizations.",
    "example": "Robert Putnam's 'Bowling Alone' documents the decades-long decline of associational life in the United States: union membership, civic club participation, and local press readership all fall simultaneously, weakening the overlapping cross-cutting publics that plural democracy requires.",
    "pattern_ids": [],
    "domain_examples": {
      "movement": [
        "bowling-alone-civic-decline"
      ],
      "state": [
        "local-newspaper-collapse",
        "union-membership-decline"
      ]
    },
    "countering_governance_form_ids": [
      "plural-publics-design",
      "federated-identity"
    ],
    "source_chapter": "Ch. 4-2"
  },
  {
    "id": "dewey-lippmann-debate-instance",
    "name": "Dewey–Lippmann Debate on the Public",
    "kind": "instance",
    "signature": "A foundational moment in democratic theory where two competing visions of the public — technocratic expert management (Lippmann) versus participatory, associative self-governance (Dewey) — were articulated, prefiguring the monist/atomist tension ⿻ theory diagnoses in contemporary tech.",
    "example": "Walter Lippmann's 'Public Opinion' (1922) and 'The Phantom Public' (1925) argued that the modern public is too large and complex for direct self-governance, advocating expert administration; John Dewey's 'The Public and Its Problems' (1927) countered that the solution is rebuilding cross-cutting communicative associations rather than replacing them with technocracy.",
    "pattern_ids": [
      "captured-public-sphere",
      "monist-technocracy"
    ],
    "domain_examples": {
      "state": [
        "lippmann-expert-administration",
        "dewey-associative-democracy"
      ]
    },
    "countering_governance_form_ids": [
      "plural-publics-design"
    ],
    "source_chapter": "Ch. 4-2"
  },
  {
    "id": "fragmented-group-sovereignty",
    "name": "Fragmented Group Sovereignty / Separatist Pluralism",
    "kind": "pattern",
    "signature": "A counter-move to monism that overcorrects into discrete, non-overlapping group identities — each community becomes a bounded sovereign unit with no shared cross-cutting public. Recognizable when 'safe spaces', platform fragmentation, or separatist community design eliminates bridging ties entirely rather than cultivating overlap. The ⿻ diagnosis is that this mirrors atomism at the group level: groups become atomic units just as individuals did under market liberalism.",
    "example": "Certain strands of identity politics or 'parallel polis' design that create entirely separate information environments for different communities — rather than overlapping, intersecting publics — reproduce the atomist error at the group level, eliminating the cross-cutting exposure that democratic pluralism requires.",
    "pattern_ids": [
      "atomist-libertarianism",
      "atomist-fragmentation"
    ],
    "domain_examples": {
      "online_community": [
        "platform-fragmentation-identity-silos"
      ],
      "movement": [
        "separatist-parallel-polis"
      ]
    },
    "countering_governance_form_ids": [
      "plural-publics-design",
      "polis-style-clustering"
    ],
    "source_chapter": "Ch. 4-2"
  },
  {
    "id": "context-collapse-online",
    "name": "Context Collapse in Online Communication",
    "kind": "pattern",
    "signature": "Platforms designed for mass broadcast dissolve the contextual boundaries that make association meaningful — participants cannot know who is in their audience, what they share, or whether their words will be misunderstood outside the intended community. Information spreads faster than the context needed to interpret it. Internal over-sharing is as easy as external snooping.",
    "example": "Proprietary social networks like Facebook and Twitter became 'digital public squares' that surveilled and monetized user interactions through targeted advertising, while offering users limited affordances for understanding their audiences or controlling contextual boundaries — producing the opposite of the protected common beliefs that free association requires.",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "facebook-real-name-policy-context-collapse",
        "twitter-broadcast-context-collapse"
      ],
      "public_infrastructure": [
        "proprietary-digital-public-square"
      ]
    },
    "countering_governance_form_ids": [
      "plural-publics",
      "contextual-confidence",
      "designated-verifier-proofs",
      "federated-social-networking"
    ],
    "source_chapter": "Ch. 5-5"
  },
  {
    "id": "over-sharing-internal-threat",
    "name": "Internal Over-Sharing as Privacy Threat",
    "kind": "pattern",
    "signature": "Cryptographic tools protect against external surveillance but leave associations vulnerable to members unilaterally disclosing group information to outsiders. Social engineering, phishing, and easy digital sharing mean the 'inside threat' is often more dangerous than external cracking. Almost all data is multiparty and thus every unilateral disclosure threatens others' privacy.",
    "example": "The Edward Snowden NSA leaks illustrate that internal moles and over-sharing are among the most important threats to information security — a pattern that extends to any association relying solely on external-facing cryptography without protection against internal over-sharing.",
    "pattern_ids": [],
    "domain_examples": {
      "state": [
        "nsa-snowden-leaks"
      ],
      "online_community": [
        "social-engineering-phishing"
      ],
      "public_infrastructure": [
        "danah-boyd-oversharing-networked-teens"
      ]
    },
    "countering_governance_form_ids": [
      "designated-verifier-proofs",
      "plural-publics",
      "contextual-confidence"
    ],
    "source_chapter": "Ch. 5-5"
  },
  {
    "id": "atomistic-privacy-framing",
    "name": "Atomistic Privacy Framing",
    "kind": "pattern",
    "signature": "Cryptographic and regulatory privacy tools are designed around the individual as the unit of protection, ignoring that nearly all data is multiparty and that group associations have privacy interests that cannot be reduced to the sum of individual protections. The resulting frameworks protect individuals from external snoops but leave group common beliefs unprotected from internal over-sharing.",
    "example": "Most cryptography and privacy regulation treat privacy as about individuals, yet almost every relevant category of data — genetic, communications, financial, location — pertains to multiple persons. EU GDPR and similar frameworks address individual data rights but provide no mechanism for protecting group contextual integrity or preventing unilateral over-sharing by members of an association.",
    "pattern_ids": [],
    "domain_examples": {
      "state": [
        "GDPR individual-rights framing",
        "US Census differential privacy gaps"
      ],
      "online_community": [
        "end-to-end encryption without over-sharing protection"
      ]
    },
    "countering_governance_form_ids": [
      "plural-publics",
      "contextual-confidence",
      "designated-verifier-proofs",
      "secure-multi-party-computation"
    ],
    "source_chapter": "Ch. 5-5"
  },
  {
    "id": "blockchain-community-gap",
    "name": "Blockchain Common-Machine vs. Common-Human Belief Gap",
    "kind": "pattern",
    "signature": "Distributed ledger technologies create consensus and common knowledge among machines but this does not directly translate into common beliefs among the people operating those machines. Financial incentives draw participants who run validator software for profit rather than those seeking non-commercial coordinated action, limiting DLTs' value for genuine civic association.",
    "example": "DLTs hold special promise for creating common beliefs among machines, but financial incentives for maintaining blockchains lead most participants — motivated by financial gain — to run 'validator' software rather than monitor activity directly. This implies participants are those who can profit, rather than those interested in common, non-commercial action.",
    "pattern_ids": [
      "web3-hyper-financialization"
    ],
    "domain_examples": {
      "dao": [
        "validator-incentive-drift",
        "blockchain-financial-coordination-only"
      ],
      "public_infrastructure": [
        "DLT-currency-coordination-without-civic-common-belief"
      ]
    },
    "countering_governance_form_ids": [
      "plural-publics",
      "contextual-confidence"
    ],
    "source_chapter": "Ch. 5-5"
  },
  {
    "id": "reputation-system-manipulation",
    "name": "Reputation System Manipulation",
    "kind": "pattern",
    "signature": "Centralized or thin reputation systems (star ratings, reviews) are gamed by coordinated fake reviews, astroturfing, or Sybil attacks; trust signals become unreliable or captured by well-resourced actors, undermining genuine peer-to-peer commerce.",
    "example": "Platforms like Amazon and Yelp face endemic fake-review ecosystems where sellers purchase five-star reviews, eroding the signal value of aggregate ratings for all participants.",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "Amazon fake-review farms",
        "Yelp review manipulation"
      ],
      "dao": [
        "Sybil-attacked governance reputation systems"
      ],
      "public_infrastructure": [
        "Government contractor rating inflation"
      ]
    },
    "countering_governance_form_ids": [
      "plural-reputation",
      "intersectional-social-identity",
      "data-coalitions"
    ],
    "source_chapter": "Ch. 4-3"
  },
  {
    "id": "identity-based-discrimination-commerce",
    "name": "Identity-Based Discrimination in Digital Commerce",
    "kind": "pattern",
    "signature": "When digital platforms expose demographic identity signals (race, gender, religion) during transactions, algorithmic or human actors discriminate, reproducing offline structural inequalities in ostensibly neutral digital markets.",
    "example": "Airbnb studies (e.g., Edelman et al.) documented lower acceptance rates for guests with stereotypically Black names, showing that digitizing commerce without pluralist identity design recreates discrimination at scale.",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "Airbnb racial discrimination studies"
      ],
      "public_infrastructure": [
        "Algorithmic lending discrimination",
        "Platform gig-work assignment bias"
      ]
    },
    "countering_governance_form_ids": [
      "intersectional-social-identity",
      "federated-identity"
    ],
    "source_chapter": "Ch. 4-3"
  },
  {
    "id": "airbnb-racial-discrimination",
    "name": "Airbnb Racial Discrimination (Edelman et al.)",
    "kind": "instance",
    "signature": "Named experimental studies finding lower host acceptance rates for guests with stereotypically Black names on Airbnb, illustrating how digitized commerce re-encodes offline racial bias absent ⿻ identity design.",
    "example": "Audit studies showed guests with distinctively African-American names faced significantly lower acceptance rates on Airbnb, demonstrating identity-based discrimination in a platform nominally committed to neutral ratings.",
    "pattern_ids": [
      "identity-based-discrimination-commerce"
    ],
    "domain_examples": {
      "online_community": [
        "Airbnb racial discrimination audit studies"
      ]
    },
    "countering_governance_form_ids": [
      "intersectional-social-identity"
    ],
    "source_chapter": "Ch. 4-3"
  },
  {
    "id": "thin-contract-monoculture",
    "name": "Thin Contract Monoculture",
    "kind": "pattern",
    "signature": "Digital commerce platforms reduce all exchange relationships to a single, legally-thin terms-of-service contract, stripping away the social context, relational norms, and community-specific trust infrastructure that make real markets work. Legal homogenization erases the variety of trust relationships different communities rely on.",
    "example": "Ride-hailing and gig platforms replace the dense web of local, relational, and reputational norms governing taxi or service work with a single algorithmically-enforced contract, eliminating drivers' and customers' ability to invoke community-specific trust signals.",
    "pattern_ids": [],
    "domain_examples": {
      "public_infrastructure": [
        "Ride-hailing platform ToS monoculture"
      ],
      "workplace": [
        "Gig-economy algorithmic management replacing relational norms"
      ],
      "online_community": [
        "Platform ToS as universal law across all communities"
      ]
    },
    "countering_governance_form_ids": [
      "plural-reputation",
      "data-coalitions",
      "intersectional-social-identity"
    ],
    "source_chapter": "Ch. 4-3"
  },
  {
    "id": "platform-payment-deplatforming",
    "name": "Payment Deplatforming as Coercive Control",
    "kind": "pattern",
    "signature": "When payment infrastructure is controlled by a small number of centralized intermediaries (credit card networks, PayPal, Stripe), those intermediaries can unilaterally exclude individuals, communities, or causes from digital commerce—exercising de facto governance power without democratic accountability.",
    "example": "WikiLeaks was cut off from Visa, Mastercard, PayPal, and Bank of America following U.S. government pressure in 2010, demonstrating how payment chokepoints become instruments of political coercion outside any legal process.",
    "pattern_ids": [],
    "domain_examples": {
      "public_infrastructure": [
        "WikiLeaks payment blockade 2010",
        "OnlyFans bank pressure to ban adult content"
      ],
      "state": [
        "OFAC sanctions chokepoints",
        "Canada Emergencies Act bank freezes 2022"
      ]
    },
    "countering_governance_form_ids": [
      "data-coalitions",
      "public-option-platforms"
    ],
    "source_chapter": "Ch. 4-3"
  },
  {
    "id": "wikileaks-payment-blockade",
    "name": "WikiLeaks Payment Blockade (2010)",
    "kind": "instance",
    "signature": "U.S. government pressure led Visa, Mastercard, PayPal, and Bank of America to simultaneously cut off WikiLeaks from payment infrastructure in 2010, illustrating how centralized payment chokepoints can be weaponized to coerce without legal process.",
    "example": "Following U.S. government pressure, major payment processors simultaneously blocked donations to WikiLeaks, effectively defunding the organization without a court order — a canonical instance of payment deplatforming as political coercion.",
    "pattern_ids": [
      "platform-payment-deplatforming"
    ],
    "domain_examples": {
      "public_infrastructure": [
        "WikiLeaks payment blockade 2010"
      ]
    },
    "countering_governance_form_ids": [
      "data-coalitions"
    ],
    "source_chapter": "Ch. 4-3"
  },
  {
    "id": "data-silo-trust-gap",
    "name": "Data Silo Trust Gap",
    "kind": "pattern",
    "signature": "In digital commerce, each platform hoards proprietary interaction and reputation data in closed silos. This means trust and reputation built on one platform cannot travel with individuals to other contexts, creating persistent switching costs, lock-in, and power asymmetry between platforms and users.",
    "example": "An eBay seller with thousands of positive reviews cannot port that reputation to a competing marketplace or to a local informal market, making their accumulated social capital hostage to eBay's platform decisions.",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "eBay reputation lock-in",
        "Uber driver rating non-portability"
      ],
      "dao": [
        "On-chain reputation fragmentation across chains"
      ],
      "platform_cooperative": [
        "Stocksy member reputation non-portability"
      ]
    },
    "countering_governance_form_ids": [
      "data-coalitions",
      "intersectional-social-identity",
      "federated-identity"
    ],
    "source_chapter": "Ch. 4-3"
  },
  {
    "id": "cryptocurrency-privacy-illusion",
    "name": "Cryptocurrency Privacy Illusion",
    "kind": "pattern",
    "signature": "A payment system markets itself as private/pseudonymous but on-chain transaction graphs allow well-resourced analysts to de-anonymize accounts, leaving users with false confidence in privacy while remaining exposed to surveillance.",
    "example": "Bitcoin's pseudonymous accounts were marketed as private, but researchers increasingly demonstrated that pseudonymous account controllers could be identified through chain analysis, undermining the privacy claims that attracted many users.",
    "pattern_ids": [],
    "domain_examples": {
      "dao": [
        "bitcoin-pseudonymity-failure"
      ],
      "public_infrastructure": [
        "zcash-tornado-cash-controversy"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 4-3"
  },
  {
    "id": "bitcoin-pseudonymity-failure",
    "name": "Bitcoin Pseudonymity Failure",
    "kind": "instance",
    "signature": "Bitcoin's pseudonymous ledger, once touted as enabling financial privacy, was shown to be readily de-anonymized by well-resourced chain analysis, revealing the privacy benefits as largely illusory.",
    "example": "Blackburn et al. (2022) documented how cooperation among an anonymous group protected Bitcoin during failures of decentralization, while simultaneously confirming that pseudonymous account controllers could increasingly be identified by analysts.",
    "pattern_ids": [
      "cryptocurrency-privacy-illusion"
    ],
    "domain_examples": {
      "dao": [
        "bitcoin-pseudonymity-failure"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 4-3"
  },
  {
    "id": "zcash-tornado-cash-controversy",
    "name": "Zcash / Tornado Cash Privacy-Accountability Conflict",
    "kind": "instance",
    "signature": "Privacy-enhancing cryptocurrency tools (Zcash, Tornado Cash) attracted government enforcement actions as regulators argued they enabled money laundering and sanctions evasion, illustrating the tension between financial privacy and legal accountability.",
    "example": "Tornado Cash, a 'mixer' service allowing users to obscure transaction trails on Ethereum, was sanctioned by the US Treasury and its developers prosecuted, becoming a flashpoint in the debate over privacy technology versus regulatory compliance.",
    "pattern_ids": [
      "cryptocurrency-privacy-illusion",
      "privacy-identity-tradeoff"
    ],
    "domain_examples": {
      "dao": [
        "zcash-tornado-cash-controversy"
      ],
      "state": [
        "zcash-tornado-cash-controversy"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 4-3"
  },
  {
    "id": "universal-currency-centralization",
    "name": "Universal Currency as Centralization",
    "kind": "pattern",
    "signature": "Any payment medium that aspires to universal fungibility — whether gold, fiat, or cryptocurrency — achieves trust by collapsing diverse forms of social value into a single homogeneous token, concentrating power and erasing contextual distinctions between communities and their relationships.",
    "example": "The book notes that 'any currency that aspires to universality is inherently highly centralized: it creates trust and cooperation by everyone ascribing value to the same thing,' making even decentralized cryptocurrencies structurally monist in their ambition.",
    "pattern_ids": [],
    "domain_examples": {
      "dao": [
        "bitcoin-pseudonymity-failure"
      ],
      "public_infrastructure": [
        "cbdc-centralization"
      ],
      "state": [
        "cbdc-centralization"
      ]
    },
    "countering_governance_form_ids": [
      "plural-money",
      "community-currency",
      "distributed-trust-network"
    ],
    "source_chapter": "Ch. 4-3"
  },
  {
    "id": "cbdc-centralization",
    "name": "Central Bank Digital Currency (CBDC) Centralization",
    "kind": "instance",
    "signature": "Government-issued digital currencies replicate the monist logic of cash at scale — all value expressed as claims on a single central authority — while adding state surveillance capacity and potentially eliminating cash-based financial privacy.",
    "example": "Dozens of countries, especially in Africa and Asia, have launched or piloted CBDCs. While responding to the cryptocurrency trend, CBDCs are critiqued in the book as 'responding to cryptocurrency by creating digital, currency-like claims on the central banks' — replicating centralization rather than enabling ⿻ commerce.",
    "pattern_ids": [
      "universal-currency-centralization"
    ],
    "domain_examples": {
      "state": [
        "cbdc-centralization"
      ],
      "public_infrastructure": [
        "cbdc-centralization"
      ]
    },
    "countering_governance_form_ids": [
      "plural-money"
    ],
    "source_chapter": "Ch. 4-3"
  },
  {
    "id": "money-as-poor-value-tracker",
    "name": "Money as Insufficient Tracker of Supermodular / Social Value",
    "kind": "pattern",
    "signature": "Standard money-based accounting fails in contexts of supermodular production (where collaboration creates more than the sum of parts) and social consumption (where goods are shared). Attributing joint value creation to individual monetary contributions misrepresents the actual structure of value.",
    "example": "Open-source software is a canonical case: multiple contributors collaborating on a shared codebase produce value that cannot be meaningfully divided among contributors by any simple monetary formula, and the resulting software provides utility to many simultaneously — making money-based management 'not function well.'",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "oss-supermodular-value-gap"
      ],
      "dao": [
        "web3-hyper-financialization"
      ]
    },
    "countering_governance_form_ids": [
      "plural-money",
      "community-currency",
      "quadratic-funding",
      "distributed-trust-network"
    ],
    "source_chapter": "Ch. 4-3"
  },
  {
    "id": "cash-decline-privacy-loss",
    "name": "Cash Decline and Systemic Privacy Loss",
    "kind": "pattern",
    "signature": "As cash is displaced by digital payment systems, the structural privacy that anonymous physical currency provided is eroded. Individual users choosing digital payment for convenience fail to account for the collective systemic effect: the elimination of any payment method outside institutional surveillance.",
    "example": "Privacy advocates and civil libertarians argue that the decline of cash 'will have systemic effects individual users fail to account for when choosing how to pay,' even as economist Kenneth Rogoff and anti-sanction-evasion advocates celebrate its decline.",
    "pattern_ids": [],
    "domain_examples": {
      "state": [
        "cash-decline-privacy-loss"
      ],
      "public_infrastructure": [
        "cbdc-centralization"
      ]
    },
    "countering_governance_form_ids": [
      "plural-money",
      "community-currency"
    ],
    "source_chapter": "Ch. 4-3"
  },
  {
    "id": "double-coincidence-obsolescence",
    "name": "Double-Coincidence-of-Wants Justification Obsolescence",
    "kind": "pattern",
    "signature": "The standard economic justification for universal money — that it solves the 'double coincidence of wants' — is treated as a necessary feature of pre-digital exchange but becomes obsolete when computation makes trading-cycle algorithms trivially cheap to run, revealing that continued reliance on universal money is an 'antiquated historical ritual' rather than a necessity.",
    "example": "The book points to kidney exchange algorithms (Roth, Sönmez, Ünver 2004) as evidence that economists already run 'trading cycles' directly without money in high-stakes contexts, implying that money's role as a medium of exchange rests on historical path dependency rather than irreplaceable function.",
    "pattern_ids": [],
    "domain_examples": {
      "public_infrastructure": [
        "double-coincidence-obsolescence"
      ],
      "state": [
        "double-coincidence-obsolescence"
      ]
    },
    "countering_governance_form_ids": [
      "distributed-trust-network",
      "plural-money"
    ],
    "source_chapter": "Ch. 4-3"
  },
  {
    "id": "data-as-individual-property",
    "name": "Data-as-Individual-Property Framing",
    "kind": "pattern",
    "signature": "Data about people is treated as either corporate property (platform model) or as atomistic individual property (data-ownership / 'my data' model); in both framings the relational and group-generated character of data is ignored, foreclosing collective governance of data.",
    "example": "The chapter critiques both the surveillance-capitalism model (platforms own data) and simplistic 'personal data ownership' proposals, arguing that most data is inherently relational — generated by interactions between people — and thus cannot be meaningfully governed by individual property titles alone.",
    "pattern_ids": [],
    "domain_examples": {
      "state": [
        "gdpr-individual-rights-only",
        "ccpa-individual-opt-out"
      ],
      "platform_cooperative": [
        "data-union-underdevelopment"
      ]
    },
    "countering_governance_form_ids": [
      "data-coalitions"
    ],
    "source_chapter": "Ch. 4-4"
  },
  {
    "id": "relational-contract-gap",
    "name": "Gap in Recognizing Relational and Group Contracts",
    "kind": "instance",
    "signature": "Cooperative, relational, and community-embedded agreements — employment relationships, platform participation terms, data-sharing arrangements — are shoehorned into bilateral contract templates, producing mismatches that harm weaker parties and suppress cooperative governance.",
    "example": "The chapter points to gig-economy platform contracts as a canonical case: the multi-party, relational, and power-asymmetric character of platform work is legally flattened into bilateral 'independent contractor' agreements, denying workers the collective rights that their actual interdependence warrants.",
    "pattern_ids": [
      "contract-as-bilateral-atomism"
    ],
    "domain_examples": {
      "state": [
        "gig-worker-misclassification"
      ],
      "platform_cooperative": [
        "platform-tos-take-it-or-leave-it"
      ]
    },
    "countering_governance_form_ids": [
      "data-coalitions"
    ],
    "source_chapter": "Ch. 4-4"
  },
  {
    "id": "digital-asset-underutilization",
    "name": "Digital Asset Underutilization / Silent Crisis of Fallow Compute",
    "kind": "pattern",
    "signature": "Vast majority of computation, storage, and data sits idle in personal devices or organizational silos while demand for compute and data collaboration goes unmet. Waste rates that would cause political scandal if seen in housing or labor go unnoticed in digital infrastructure.",
    "example": "Several times as many semiconductors are used in personal devices as go into cloud infrastructure, yet most personal devices sit mostly idle most of the day. The overwhelming majority of desperately needed data sits in organizational or jurisdictional silos, unable to power collaborative intelligence.",
    "pattern_ids": [],
    "domain_examples": {
      "public_infrastructure": [
        "cloud-centralization-mainframe-reversion",
        "ipfs-deep-storage-limits"
      ],
      "state": [
        "eu-gaia-x-data-federation",
        "taiwan-plural-innovation-strategy"
      ]
    },
    "countering_governance_form_ids": [
      "data-coalitions",
      "federated-learning",
      "ipfs-storage-protocol"
    ],
    "source_chapter": "Ch. 4-3"
  },
  {
    "id": "cloud-centralization-mainframe-reversion",
    "name": "Cloud Centralization as Mainframe Reversion",
    "kind": "instance",
    "signature": "Promised gains from cross-tenant resource sharing in the cloud were largely unrealized; instead, cloud providers built new centralized data centers while personal device compute remained fallow, recreating the mainframe model Lick's time-sharing vision sought to transcend.",
    "example": "Despite heralds of the cloud era promising efficiency from resource sharing across tenants, most gains came from physical cost savings of co-located data centers rather than meaningful cross-tenant sharing. Two cloud providers (Amazon and Microsoft) capture almost two-thirds of the market, and 60% of business data is stored in proprietary clouds.",
    "pattern_ids": [
      "digital-asset-underutilization",
      "proprietary-protocol-monopoly"
    ],
    "domain_examples": {
      "public_infrastructure": [
        "amazon-web-services-market-dominance",
        "microsoft-azure-market-dominance"
      ]
    },
    "countering_governance_form_ids": [
      "ipfs-storage-protocol"
    ],
    "source_chapter": "Ch. 4-3"
  },
  {
    "id": "gfm-training-data-opacity",
    "name": "GFM Training Data Opacity and Non-Consensual Ingestion",
    "kind": "instance",
    "signature": "Leading generative foundation models trained on undisclosed datasets scraped from public internet content without creator awareness or consent, capturing fructus of data creators' work while denying them usus/abusus rights.",
    "example": "The leading example of data ingestion without awareness or consent of data creators is the still-undisclosed data sets on which the generative foundation models (GFMs) were trained. Many who chose to publish data online believed they were sharing information for others to use, but did not perceive the full implications that sharing would have.",
    "pattern_ids": [
      "data-silo-organizational-barrier",
      "surveillance-capitalism"
    ],
    "domain_examples": {
      "public_infrastructure": [
        "openai-training-data",
        "gfm-undisclosed-datasets"
      ]
    },
    "countering_governance_form_ids": [
      "data-coalitions",
      "watermarking-attribution",
      "influence-functions-attribution"
    ],
    "source_chapter": "Ch. 4-3"
  },
  {
    "id": "data-rights-decomposition-failure",
    "name": "Failure to Decompose Data Rights (Usus/Abusus/Fructus)",
    "kind": "pattern",
    "signature": "Unlike physical assets where usus (right to use), abusus (right to alter/dispose), and fructus (right to value created) can be separated through rental and corporate arrangements, granting usus of data to a collaborator also effectively grants abusus and fructus — making safe data sharing structurally difficult without supporting legal, norm, and cryptographic frameworks.",
    "example": "The simplest ways of giving access to usus of data also allow the person granted access the ability to abuse or transfer the data to others (abusus) and the ability for others to gain financial benefit from those data (fructus), possibly at the expense of the person sharing it.",
    "pattern_ids": [],
    "domain_examples": {
      "public_infrastructure": [
        "gfm-training-data-opacity"
      ],
      "state": [
        "genetic-privacy-social-leakage"
      ]
    },
    "countering_governance_form_ids": [
      "smpc-homomorphic-encryption",
      "differential-privacy",
      "data-coalitions"
    ],
    "source_chapter": "Ch. 4-3"
  },
  {
    "id": "smart-contract-norm-substitution-failure",
    "name": "Smart Contract as Inadequate Substitute for Social Norms",
    "kind": "pattern",
    "signature": "Self-enforcing digital 'smart contracts' are deployed as if they can substitute for the evolved customary norms, legal precedent, and statutes that govern canonical relationships like rental and employment. Because contracts are necessarily incomplete and data has near-infinite possible uses, contractualist approaches produce unmanageable complexity without the underlying social understanding of collaborative expectations.",
    "example": "Self-enforcing digital 'smart contracts' might provide a way to implement such norms smoothly, but they cannot substitute for the process of creating a stable social understanding of how data collaboration works, what different parties can expect, and when various legal and technical enforcement mechanisms should and will kick in.",
    "pattern_ids": [
      "web3-hyper-financialization"
    ],
    "domain_examples": {
      "dao": [
        "smart-contract-incomplete-governance"
      ],
      "public_infrastructure": [
        "data-collaboration-contractualist-paralysis"
      ]
    },
    "countering_governance_form_ids": [
      "data-coalitions"
    ],
    "source_chapter": "Ch. 4-3"
  },
  {
    "id": "spectrum-private-property-holdout",
    "name": "Electromagnetic Spectrum Private Property and Holdout Problem",
    "kind": "instance",
    "signature": "Legacy spectrum licensees treated as private property holders can block reallocation demanded by new digital uses (WiFi, 5G), creating holdout problems that impede public-interest infrastructure development. Property-like entitlements based on interference-prevention assumptions break down as digital applications enable spectrum sharing.",
    "example": "The rapidly changing nature of uses for spectrum (e.g. moving from over-the-air broadcasting to 5G wireless) has dramatically changed interference patterns, requiring a reorganization of the spectrum against which legacy license holders can often serve as holdouts.",
    "pattern_ids": [
      "propertarian-enclosure"
    ],
    "domain_examples": {
      "state": [
        "fcc-spectrum-reallocation-auctions",
        "unlicensed-spectrum-proposals"
      ]
    },
    "countering_governance_form_ids": [
      "depreciating-licenses",
      "partial-common-ownership"
    ],
    "source_chapter": "Ch. 4-3"
  },
  {
    "id": "namespace-domain-squatting",
    "name": "Internet Namespace Private Property and Domain Squatting",
    "kind": "instance",
    "signature": "Domain name registration treated as property-like entitlement allows squatters, legacy owners serving limited audiences, and fraudsters exploiting brands to hold namespaces while contributing little public value. Search engines have evolved de facto property regimes based on network centrality and real-time auctions that better reflect public interest, but were designed without public engagement.",
    "example": "Treating name spaces as private property makes little sense, given that those who happen to own a name that is contested (e.g. 'ABC.com') may be domain squatters, legacy owners serving a limited audience, fraudsters exploiting a brand, etc.",
    "pattern_ids": [
      "propertarian-enclosure"
    ],
    "domain_examples": {
      "public_infrastructure": [
        "icann-domain-registration-system",
        "google-pagerank-namespace-regime"
      ]
    },
    "countering_governance_form_ids": [
      "depreciating-licenses",
      "partial-common-ownership"
    ],
    "source_chapter": "Ch. 4-3"
  },
  {
    "id": "technocratic-market-design-without-public",
    "name": "Technocratic Market Design Without Public Engagement",
    "kind": "pattern",
    "signature": "Innovative property and market mechanisms for digital infrastructure (spectrum auctions, search ranking algorithms, real-time ad auctions) are designed by teams of engineers and economists far from the public eye, without public understanding or democratic legitimacy. Few even recognize these systems operate, let alone consider whether they are appropriate.",
    "example": "These systems have been largely designed far from the public eye, without public understanding by teams of technocratic engineers and economists. Few even recognize that they operate much less believe they are appropriate.",
    "pattern_ids": [
      "monist-technocracy"
    ],
    "domain_examples": {
      "state": [
        "fcc-spectrum-auction-design",
        "google-pagerank-algorithm"
      ],
      "public_infrastructure": [
        "internet-ad-auction-real-time"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 4-3"
  },
  {
    "id": "device-os-gatekeeping",
    "name": "Device and OS Gatekeeping",
    "kind": "pattern",
    "signature": "Operating system and device manufacturers exert control over what applications and protocols users can access, filtering participation in digital civic life through proprietary app-store chokepoints. Spotting heuristics: civic apps blocked or delisted from app stores; government services requiring platform-approved apps; ⿻ identity or payment tools unavailable on major mobile OSes.",
    "example": "Major mobile platform gatekeepers (Apple App Store, Google Play) can block or remove applications, creating a chokepoint that undermines open civic infrastructure and channels participation through privately-controlled surfaces.",
    "pattern_ids": [],
    "domain_examples": {
      "public_infrastructure": [
        "removal of civic apps from app stores in authoritarian contexts"
      ],
      "state": [
        "government services locked to proprietary mobile platforms"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 4-5"
  },
  {
    "id": "deepfake-semantic-manipulation",
    "name": "Deepfake / Mimetic-Model Semantic Manipulation",
    "kind": "pattern",
    "signature": "Generative AI or synthetic media is used to corrupt shared information inputs at scale, making it impossible for citizens to distinguish authentic from fabricated content; democratic participation is undermined because different populations receive manipulated versions of a common reality rather than a shared factual substrate.",
    "example": "The 2023 Global Declaration on Information Integrity Online directly addressed the collective challenges posed by generative AI and its potential for mass manipulation, recognising deepfakes as a structural threat to information integrity.",
    "pattern_ids": [],
    "domain_examples": {
      "state": [
        "Global Declaration on Information Integrity Online (2023)"
      ],
      "public_infrastructure": [
        "Taiwan IPFS-based government websites hardened against DDoS and content manipulation"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 4-4"
  },
  {
    "id": "contextual-integrity-failure",
    "name": "Contextual Integrity Failure in Digital Access",
    "kind": "pattern",
    "signature": "Some populations receive accurate information while others receive corrupted or incomplete versions, destroying the common factual substrate required for democratic deliberation; unequal access to uncorrupted input data means that even nominally universal access becomes a tool of manipulation rather than empowerment.",
    "example": "As the chapter argues: 'If the information some receive is accurate and others corrupted, it is worse than if the latter had no access at all.' The diversity of perspective valued by ⿻ requires 'underlying common access to uncorrupted input data.'",
    "pattern_ids": [],
    "domain_examples": {
      "state": [
        "Rural-urban internet disparity amplified during COVID-19 pandemic"
      ],
      "public_infrastructure": [
        "Open government data initiatives undermined by selective or manipulated data releases"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 4-4"
  },
  {
    "id": "rural-urban-digital-divide-instance",
    "name": "Rural-Urban Internet Access Gap (Global, Pre-/Post-Pandemic)",
    "kind": "instance",
    "signature": "Pre-pandemic: 76% of urban households worldwide had home internet vs. 39% of rural households. In 2020 alone, 466 million people went online for the first time, making visible the scale of exclusion as work, education, and socialising moved online.",
    "example": "ITU data (2020): urban household internet penetration was nearly double that of rural households globally; 466 million new internet users came online in 2020, surfacing deep multifaceted inequalities in access contributing to economic, political, and social inequities.",
    "pattern_ids": [
      "digital-divide-exclusion"
    ],
    "domain_examples": {
      "state": [
        "ITU Facts and Figures (2022): rural-urban internet access gap"
      ],
      "public_infrastructure": [
        "Pandemic-accelerated move of public services online exposing access inequality"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 4-4"
  },
  {
    "id": "diia-mriik-corruption-opacity",
    "name": "Corruption Enabled by Closed, Non-Digital Government Services",
    "kind": "instance",
    "signature": "Absence of open digital public services allows corruption to flourish through opacity and gatekeeping; when citizens must navigate analogue or intermediary-dependent processes to access government services, accountability mechanisms fail and democratic participation is weakened.",
    "example": "Ukraine's Diia app 'has shown the world how digital technology can break down long-standing corruption' by providing secure, open digital public services; Estonia's mRiik was directly inspired by Diia, illustrating how the absence of such infrastructure previously enabled corruption.",
    "pattern_ids": [
      "contextual-integrity-failure"
    ],
    "domain_examples": {
      "state": [
        "Ukraine Diia app dismantling corruption through digital transparency",
        "Estonia mRiik built on Diia model (2023)"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 4-4"
  },
  {
    "id": "homogenization-through-bridging",
    "name": "Diversity Depletion via Collaboration Bridging",
    "kind": "pattern",
    "signature": "Successful collaboration across difference erodes the very diversity that made collaboration valuable. Cultural fusion, political consensus-building, and linguistic translation each risk flattening distinctive perspectives. Spotted when gains from bridging are celebrated without attention to whether the source diversity is being regenerated.",
    "example": "Globalization has both brought gains from trade, such as diversifying cuisine, while at the same time arguably homogenizing culture and thus possibly reducing the opportunity for such gains in the future.",
    "pattern_ids": [],
    "domain_examples": {
      "movement": [
        "globalization-cultural-homogenization"
      ],
      "state": [
        "political-consensus-undermining-dynamism"
      ],
      "online_community": [
        "platform-lingua-franca-cultural-flattening"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 5-0"
  },
  {
    "id": "web2-mission-drift-instance",
    "name": "Web2 Platform Mission Drift (Google, Facebook, Amazon)",
    "kind": "instance",
    "signature": "Platforms that began by digitizing genuine social goods — collective authority, social networks, commerce — but, lacking broader public goals, drifted toward engagement maximization and surveillance capitalism. The book names this as a canonical instance of unguided technical advance.",
    "example": "Google, Facebook and Amazon grew precisely out of a mentality of bringing critical features of real-world sociality (viz. collectively determined emergent authority, social networks and commerce) to the digital world. While these services have brought many important benefits to billions of people around the world, we have extensively reviewed above their many shortcomings and the dangerous path they have brought the world without a broader set of public goals to guide them.",
    "pattern_ids": [
      "unguided-technical-advance",
      "engagement-maximization"
    ],
    "domain_examples": {
      "online_community": [
        "Google search authority capture",
        "Facebook social graph capture",
        "Amazon commerce capture"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 5-0"
  },
  {
    "id": "post-symbolic-communication-gap",
    "name": "Post-Symbolic Communication Gap",
    "kind": "pattern",
    "signature": "Rich sensory, emotional, and embodied experience cannot be conveyed through existing symbolic media (text, speech, images); communication collapses to what symbols can carry, flattening context and nuance. Spotted when: shared digital media fail to bridge felt experience across cultural or perceptual distance; people report 'you had to be there'; cross-cultural or cross-sensory understanding requires immersive or direct-experience technologies rather than language.",
    "example": "The book describes how language and symbols are lossy compressions of lived experience — music, taste, touch, and spatial co-presence cannot be fully transmitted through text or even video, leaving entire registers of human understanding outside the reach of networked communication.",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "text-only forums losing emotional nuance",
        "video-call fatigue as partial substitute for presence"
      ],
      "public_infrastructure": [
        "remote government hearings missing embodied civic participation"
      ],
      "state": [
        "diplomatic negotiations failing without shared sensory context"
      ]
    },
    "countering_governance_form_ids": [
      "post-symbolic-communication",
      "immersive-shared-reality"
    ],
    "source_chapter": "Ch. 5-1"
  },
  {
    "id": "sensory-bandwidth-monopoly",
    "name": "Sensory Bandwidth Monopoly by Incumbent Media",
    "kind": "pattern",
    "signature": "A small number of dominant media formats (broadcast video, text messaging, social-media feeds) define the entire surface area of public communication, crowding out richer multi-sensory or immersive channels. Spotted when: civic and commercial platforms converge on the same low-bandwidth symbolic formats; investment in novel sensory-channel infrastructure is absent; public discourse is structurally limited to what those formats can represent.",
    "example": "The chapter observes that despite decades of internet development, most civic and social communication still flows through text and compressed video — formats optimized for legacy infrastructure rather than the full range of human perceptual bandwidth — leaving higher-resolution channels (haptic, spatial, olfactory) structurally absent from shared public life.",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "social-media text/image feeds as default public sphere"
      ],
      "public_infrastructure": [
        "government e-participation limited to typed comments and surveys"
      ],
      "movement": [
        "protest coordination constrained to text-based apps"
      ]
    },
    "countering_governance_form_ids": [
      "post-symbolic-communication",
      "immersive-shared-reality"
    ],
    "source_chapter": "Ch. 5-1"
  },
  {
    "id": "translation-as-colonization",
    "name": "Translation-as-Colonization",
    "kind": "pattern",
    "signature": "Forcing all communication through a dominant language or symbolic system erases the expressive resources of minority languages, oral traditions, and non-Western semiotic systems. Spotted when: participation in digital public life requires fluency in dominant-language text conventions; communities whose knowledge is embedded in non-textual or non-Western forms are systematically excluded or must self-translate at the cost of meaning.",
    "example": "The book identifies how the text-and-English-centric architecture of most digital platforms compels speakers of tonal languages, communities with oral traditions, and signers of visual languages to translate their knowledge into a foreign symbolic register — a structural form of epistemic loss that mirrors colonial language policies.",
    "pattern_ids": [
      "colonial-standardization"
    ],
    "domain_examples": {
      "online_community": [
        "Wikipedia's systematic underrepresentation of oral-tradition knowledge"
      ],
      "public_infrastructure": [
        "e-government portals inaccessible to speakers of minority languages without Latin scripts"
      ],
      "state": [
        "digital-identity systems requiring Latin-script legal names"
      ]
    },
    "countering_governance_form_ids": [
      "post-symbolic-communication"
    ],
    "source_chapter": "Ch. 5-1"
  },
  {
    "id": "consciousness-homogenization",
    "name": "Homogenization of Thought via High-Bandwidth Communication",
    "kind": "pattern",
    "signature": "High-bandwidth, post-symbolic communication causes individual perspectives to merge into collective consciousness, erasing differences and diversity. Spotted when shared immersive experience platforms suppress dissent or produce convergent beliefs rather than amplifying diverse perspectives.",
    "example": "The chapter cautions that 'High-bandwidth communication could lead to a homogenization of thoughts and experiences as individual perspectives merge into collective consciousness, erasing our differences.'",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "immersive-vr-platform-homogenization"
      ],
      "public_infrastructure": [
        "neural-mesh-monoculture"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 5-5"
  },
  {
    "id": "telepathy-skill-atrophy",
    "name": "Atrophy of Traditional Communication Skills via Over-Reliance on Direct Mind-Sharing",
    "kind": "pattern",
    "signature": "When communities or societies become dependent on direct mental or high-bandwidth sensory connections, structured linguistic and symbolic communication skills degrade, undermining the deliberate, reflective forms needed for democratic governance and cultural diversity.",
    "example": "The chapter warns of 'over-reliance on telepathic communication could lead to the atrophy of traditional communication skills and cultural practices, with people becoming dependent on direct mental connections.'",
    "pattern_ids": [],
    "domain_examples": {
      "state": [
        "post-symbolic-governance-dependency"
      ],
      "movement": [
        "cultural-practice-erosion-via-bci"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 5-5"
  },
  {
    "id": "matrix-simulation-dystopia",
    "name": "Simulated-Reality Disconnection (The Matrix Problem)",
    "kind": "pattern",
    "signature": "Immersive or neural technologies sever participants from the physical world entirely, creating a managed alternate reality controlled by external actors. Spotted when platform design prioritizes total immersion with no exit path and operator interests override participant awareness of physical reality.",
    "example": "The chapter cites E. M. Forster's 'The Machine Stops' (1909) and the 1999 film The Matrix as canonical warnings of a dystopia 'where participants no longer have a private inner world while also disconnecting from the outer world.'",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "total-immersion-platform-exit-denial"
      ],
      "public_infrastructure": [
        "state-managed-simulation-environment"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 5-5"
  },
  {
    "id": "matrix-simulation-dystopia-forster-instance",
    "name": "Forster's 'The Machine Stops' as Simulation Dystopia Instance",
    "kind": "instance",
    "signature": "E. M. Forster's 1909 short story depicts humanity living in isolated pods, communicating only through a global machine network, disconnected from physical reality — cited in Plurality as an early warning of simulation-disconnection risk.",
    "example": "E. M. Forster, 'The Machine Stops,' Oxford and Cambridge Review, November 1909 — cited by the chapter as warning against a dystopia where participants lose their private inner world and disconnect from the outer world.",
    "pattern_ids": [
      "matrix-simulation-dystopia"
    ],
    "domain_examples": {
      "online_community": [
        "the-machine-stops-forster"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 5-5"
  },
  {
    "id": "immersive-reality-identity-erosion",
    "name": "Immersive Reality Identity Erosion and Avatar Manipulation",
    "kind": "pattern",
    "signature": "In fully immersive environments, the anchoring of identity to persistent, intersectional social context breaks down: avatars can be stripped of cultural markers, social histories can be erased or spoofed, and the 'context collapse' problem intensifies because the immersive medium makes false presence feel real.",
    "example": "Users in VR social spaces encounter impersonation, harassment through avatar manipulation, and loss of the contextual cues (voice, appearance, social graph) that normally underpin trust — without the intersectional identity infrastructure that ⿻ design would provide.",
    "pattern_ids": [
      "context-collapse-online",
      "identity-theft-impersonation"
    ],
    "domain_examples": {
      "online_community": [
        "VR social platform harassment and avatar impersonation"
      ],
      "public_infrastructure": [
        "absence of persistent XR identity infrastructure"
      ]
    },
    "countering_governance_form_ids": [
      "intersectional-social-identity",
      "immersive-shared-reality"
    ],
    "source_chapter": "Ch. 5-2"
  },
  {
    "id": "synthetic-media-reality-collapse",
    "name": "Synthetic Media and the Collapse of Shared Reality",
    "kind": "pattern",
    "signature": "Generative AI and deepfake technologies produce photorealistic synthetic media — video, audio, imagery — at scale, eroding the evidentiary basis for shared factual reality. Public discourse can no longer distinguish authentic from fabricated experience, deepening polarization and enabling manipulation by state and non-state actors.",
    "example": "Deepfake video and audio of political figures, synthesized at low cost and distributed virally, undermines the epistemic commons needed for democratic deliberation — an intensification of the disinformation-ecosystem pattern into the immersive register.",
    "pattern_ids": [
      "deepfake-semantic-manipulation",
      "disinformation-interference",
      "misinformation-ecosystem"
    ],
    "domain_examples": {
      "state": [
        "deepfake political disinformation in election contexts"
      ],
      "online_community": [
        "synthetic media flooding social platforms"
      ]
    },
    "countering_governance_form_ids": [
      "immersive-shared-reality",
      "augmented-deliberation"
    ],
    "source_chapter": "Ch. 5-2"
  },
  {
    "id": "isr-corporate-monopoly-surveillance",
    "name": "ISR Corporate Control, Surveillance, and Monopolization",
    "kind": "pattern",
    "signature": "ISR platforms built without rights and interoperability norms become 'the most iron monopolistic cages we have known': intimate spaces simultaneously open to corporate surveillance, proprietary lock-in forecloses exit, and governance remains unaccountable to users. Look for: single-vendor metaverse environments, no data portability, behavioral data harvested at the sensory layer.",
    "example": "Unless ISR networks are built according to the principles of rights and interoperability and governed by broader ⿻ governance approaches, 'they will become the most iron monopolistic cages we have known.'",
    "pattern_ids": [],
    "domain_examples": {
      "public_infrastructure": [
        "Meta Horizon Worlds proprietary lock-in",
        "Apple Vision Pro closed ecosystem"
      ],
      "online_community": [
        "VR social platform behavioral data harvesting"
      ]
    },
    "countering_governance_form_ids": [
      "rights-os",
      "federated-identity"
    ],
    "source_chapter": "Ch. 5-2"
  },
  {
    "id": "ready-player-one-oasis-escapism",
    "name": "Ready Player One / OASIS — ISR Escapism Instance",
    "kind": "instance",
    "signature": "Fictional but canonical illustration: a fully immersive virtual world ('the OASIS') flourishes precisely because the physical world has been allowed to collapse, and mass adoption of the OASIS deepens that collapse — a concrete narrative embodiment of the virtual-escapism doom loop.",
    "example": "In Ernest Cline's *Ready Player One* (adapted by Spielberg), people retreat into the OASIS in response to social and environmental decline, further reinforcing that decline as they abandon civic engagement in the physical world.",
    "pattern_ids": [
      "virtual-escapism-civic-withdrawal"
    ],
    "domain_examples": {
      "online_community": [
        "Ready Player One OASIS"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 5-2"
  },
  {
    "id": "snow-crash-metaverse-escapism",
    "name": "Snow Crash Metaverse — ISR Escapism Instance",
    "kind": "instance",
    "signature": "Neal Stephenson's *Snow Crash* coined 'the Metaverse' as a dystopian ISR where social and civic withdrawal into virtual space mirrors and accelerates real-world collapse — the original literary template for the virtual-escapism failure mode.",
    "example": "In Stephenson's *Snow Crash*, people retreat into the Metaverse in response to social and environmental decline, further reinforcing that decline as they abandon civic engagement in the physical world.",
    "pattern_ids": [
      "virtual-escapism-civic-withdrawal"
    ],
    "domain_examples": {
      "online_community": [
        "Snow Crash Metaverse (Stephenson)"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 5-2"
  },
  {
    "id": "creative-monoculture-homogenization",
    "name": "Creative Monoculture Through Algorithmic Curation",
    "kind": "pattern",
    "signature": "Algorithmic recommendation and engagement-maximization logic funnels audiences toward a narrow band of popular content, collapsing the diversity of creative expression into a winner-take-all attention economy. Look for: long-tail creative works receiving near-zero distribution; platform revenue concentrated in top-percentile creators; cultural homogenization across regions.",
    "example": "The book argues that streaming and social-media algorithms trained on engagement compress the rich diversity of human creative output into a narrow mainstream, marginalizing minority-language, niche, and experimental works.",
    "pattern_ids": [
      "engagement-maximization"
    ],
    "domain_examples": {
      "online_community": [
        "Spotify algorithmic playlists crowding out independent music",
        "YouTube recommendation funneling toward viral content"
      ],
      "public_infrastructure": [
        "Netflix localization decisions driven by global subscriber metrics rather than local cultural diversity"
      ]
    },
    "countering_governance_form_ids": [
      "creative-collaborations",
      "quadratic-funding"
    ],
    "source_chapter": "Ch. 5-3"
  },
  {
    "id": "information-siloing-prize-competition",
    "name": "Information Siloing in Prize Competitions",
    "kind": "pattern",
    "signature": "Contestants in open competitions hoard findings and code to preserve competitive advantage, preventing cumulative progress and causing duplicated effort across teams.",
    "example": "The Vesuvius Challenge organizers introduced bi-monthly 'progress prizes' requiring open-source publication specifically to counter siloing — recognizing that without structural incentives, teams would withhold breakthroughs from one another.",
    "pattern_ids": [],
    "domain_examples": {
      "public_infrastructure": [
        "Vesuvius Challenge pre-progress-prize structure"
      ],
      "online_community": [
        "Netflix Prize early solo-team phase"
      ]
    },
    "countering_governance_form_ids": [
      "progress-prizes-open-source",
      "prize-competition-open-source-mandate"
    ],
    "source_chapter": "Ch. 5-5"
  },
  {
    "id": "solo-team-competition-failure",
    "name": "Solo-Team Competition Failure (Netflix Prize)",
    "kind": "instance",
    "signature": "A well-resourced prize competition stalls for years because leading teams optimize in isolation; breakthrough only occurs when diverse teams with diverse algorithms merge.",
    "example": "The 2009 Netflix Prize dragged on for more than two and a half years and only succeeded when leading teams gave up working alone and combined with diverse other teams and their diverse algorithms.",
    "pattern_ids": [
      "information-siloing-prize-competition"
    ],
    "domain_examples": {
      "public_infrastructure": [
        "Netflix Prize (2006–2009)"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 5-5"
  },
  {
    "id": "algorithmic-creative-homogenization",
    "name": "Algorithmic Homogenization of Creative Collaboration",
    "kind": "pattern",
    "signature": "Collaborative platforms deploy algorithms optimized for consensus and engagement, smoothing over unconventional ideas and unique perspectives in favor of algorithmic predictability, dampening true innovation and eroding cultural diversity.",
    "example": "The chapter warns that 'algorithms designed to enhance synergy could instead lead to a homogenization of ideas,' dampening innovation as unique perspectives are smoothed over in favor of consensus and algorithmic predictability.",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "GFM-mediated co-creation platforms"
      ],
      "movement": [
        "Global collaborative art platforms"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 5-5"
  },
  {
    "id": "corporate-creative-content-exploitation",
    "name": "Corporate Exploitation of Creative Collaboration Platforms",
    "kind": "pattern",
    "signature": "Creative collaborations taking place within corporate-owned digital platforms expose intellectual property to co-option, monetization, and surveillance; reducing creator incentives and risking collapse of the diversity that feeds GFM training data.",
    "example": "The chapter warns: 'As creative collaborations increasingly occur within digital platforms owned by corporations, the risk of intellectual property being co-opted, monetized, or used for surveillance and manipulation grows, threatening the integrity of the creative process. By reducing the incentive for creativity, such traps risk killing the goose of creativity and diversity that lays the golden eggs of training GFMs in the first place.'",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "Proprietary generative art platforms"
      ],
      "platform_cooperative": [
        "Creator platforms without attribution models"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 5-5"
  },
  {
    "id": "circle-surveillance-creativity-erosion",
    "name": "The Circle: Surveillance Erodes Individual Creative Genius",
    "kind": "instance",
    "signature": "A cautionary fictional case in which the constant demand for openness and sharing in a hyper-collaborative digital society stifles individual autonomy and the private interiority on which creative originality depends.",
    "example": "Dave Eggers's classic The Circle highlights the dangers of constant creative sharing to erode the very sense of self that is the locus of creative genius.",
    "pattern_ids": [
      "corporate-creative-content-exploitation",
      "surveillance-capitalism"
    ],
    "domain_examples": {
      "online_community": [
        "The Circle (Eggers, 2013) — fictional platform"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 5-5"
  },
  {
    "id": "cultural-diversity-erosion-global-platforms",
    "name": "Erosion of Cultural Diversity Through Global Creative Platforms",
    "kind": "instance",
    "signature": "Global collaborative platforms mediated by dominant-language or dominant-cultural GFMs overshadow local cultural expressions and minority voices, producing monolithic creative outputs that neutralize dissent and diversity.",
    "example": "The chapter warns of 'a risk that local cultural expressions and minority voices are overshadowed by dominant narratives,' ending in 'monolithic culture that neutralizes dissent and diversity.'",
    "pattern_ids": [
      "algorithmic-creative-homogenization",
      "creative-monoculture-homogenization"
    ],
    "domain_examples": {
      "online_community": [
        "GFM cross-cultural translation tools flattening local idiom"
      ],
      "movement": [
        "Global creative platforms privileging English-language content"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 5-5"
  },
  {
    "id": "deliberation-scale-quality-tradeoff",
    "name": "Deliberation Scale-Quality Tradeoff",
    "kind": "pattern",
    "signature": "A deliberative process either reaches large numbers of people but loses depth (broadcast, polling) or achieves depth but fails to scale (small-group deliberation, citizens' assemblies). Neither axis is satisfied simultaneously. Look for governance designs that explicitly choose one over the other and cite the tradeoff as unavoidable.",
    "example": "Traditional democratic deliberation faces a core tension: small group discussions (like citizens' assemblies) produce thoughtful, well-reasoned outcomes but involve only dozens or hundreds of people, while mass participation tools like surveys or referenda reach millions but flatten nuance into binary or low-dimensional choices.",
    "pattern_ids": [],
    "domain_examples": {
      "state": [
        "citizens-assembly-ireland",
        "icelandic-constitutional-assembly"
      ],
      "public_infrastructure": [
        "vtaiwan-polis-deliberation",
        "decidim-barcelona"
      ]
    },
    "countering_governance_form_ids": [
      "augmented-deliberation",
      "polis-style-clustering"
    ],
    "source_chapter": "Ch. 5-4"
  },
  {
    "id": "llm-opinion-homogenization",
    "name": "LLM-Driven Opinion Homogenization in Deliberation",
    "kind": "pattern",
    "signature": "Language models used as deliberation aids or summarizers compress participant diversity into a single synthetic consensus voice, erasing minority viewpoints and nuanced disagreement. Detectable when LLM-generated summaries are used as the authoritative record of a multi-stakeholder process, or when AI 'facilitation' replaces human moderators without diversity-preserving constraints.",
    "example": "When large language models are used to summarize deliberative input, they tend to generate a single coherent narrative that smooths over genuine disagreement — a form of computational consensus-manufacturing that can misrepresent the actual distribution of views among participants.",
    "pattern_ids": [
      "monist-technocracy"
    ],
    "domain_examples": {
      "state": [
        "ai-summarized-public-comment-rulemaking"
      ],
      "public_infrastructure": [
        "llm-town-hall-facilitation"
      ]
    },
    "countering_governance_form_ids": [
      "augmented-deliberation",
      "polis-style-clustering"
    ],
    "source_chapter": "Ch. 5-4"
  },
  {
    "id": "deliberation-without-action-link",
    "name": "Deliberation Disconnected from Decision-Making Power",
    "kind": "pattern",
    "signature": "Deliberative processes are conducted as exercises in consultation but their outputs carry no binding authority and are not structurally linked to actual policy or resource decisions. Participants invest time and good faith but observe no consequential change, producing deliberative fatigue and cynicism. Recognizable when participation platforms have no formal integration with legislative or executive processes.",
    "example": "Many participatory platforms and online consultation exercises gather public input that is then ignored or only symbolically acknowledged by decision-makers — a 'deliberation theater' that extracts legitimacy from participants without returning influence.",
    "pattern_ids": [],
    "domain_examples": {
      "state": [
        "uk-government-online-consultations",
        "eu-have-your-say-platform"
      ],
      "public_infrastructure": [
        "decidim-barcelona",
        "join-platform-taiwan"
      ]
    },
    "countering_governance_form_ids": [
      "augmented-deliberation"
    ],
    "source_chapter": "Ch. 5-4"
  },
  {
    "id": "community-notes-bridging-failure",
    "name": "Single-Spectrum Opinion Mapping Limitation",
    "kind": "pattern",
    "signature": "Bridging systems that collapse all social opinion onto a single ideological dimension (e.g., left-right) miss the intersectional richness of identity and may misrepresent pluralistic divisions; consensus-seeking on one axis can mask other axes of disagreement.",
    "example": "Community Notes places raters on a one-dimensional left-right spectrum, which works reasonably well for Western politics but may fail to capture other axes of social division in diverse global contexts.",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "Community Notes / Birdwatch single-spectrum rating"
      ],
      "state": [
        "Deliberative processes that reduce complex polity to binary partisan axis"
      ]
    },
    "countering_governance_form_ids": [
      "polis-bridging",
      "augmented-deliberation"
    ],
    "source_chapter": "Ch. 5-4"
  },
  {
    "id": "broad-listening-deficit",
    "name": "Broad Listening Deficit",
    "kind": "pattern",
    "signature": "Methods of broadcast have dramatically improved while 'broad listening' — one person or institution thoughtfully digesting a wide range of diverse perspectives — remains extremely costly and time-consuming; attention poverty creates sharp diversity-bandwidth trade-offs.",
    "example": "As Herbert Simon observed, 'a wealth of information creates a poverty of attention.' Deliberative processes that scale inclusion tend to produce analysis paralysis or thin, unread summaries that no decision-maker can digest.",
    "pattern_ids": [],
    "domain_examples": {
      "state": [
        "Public comment processes producing thousands of unread submissions",
        "UN consultations with voluminous civil-society input and little uptake"
      ],
      "online_community": [
        "Open-ended surveys with response sets too large for synthesis",
        "Reddit AMAs where most questions go unanswered"
      ]
    },
    "countering_governance_form_ids": [
      "augmented-deliberation",
      "polis-bridging",
      "community-notes",
      "talk-to-the-city"
    ],
    "source_chapter": "Ch. 5-4"
  },
  {
    "id": "llm-deliberation-legitimacy-gap",
    "name": "LLM-Mediated Deliberation Legitimacy Gap",
    "kind": "pattern",
    "signature": "When GFMs are used to conduct or summarize deliberations 'in silico', the transformation from inputs to outputs is opaque and hard to audit; unlike voting rules or market prices, it is difficult to achieve common understanding and legitimacy on how this transformation occurs, undermining its use as a basis for common action. GFMs also risk blind instruction-following that censors minority perspectives.",
    "example": "Using a large language model to synthesize thousands of public comments into a policy recommendation: the process may be faster than human review but lacks the transparent, auditable procedure that gives voting or administrative decisions their democratic legitimacy.",
    "pattern_ids": [],
    "domain_examples": {
      "state": [
        "AI-generated policy synthesis without auditable method",
        "Automated public-comment aggregation with opaque weighting"
      ],
      "dao": [
        "On-chain governance proposals summarized by LLM with no verifiable neutrality"
      ],
      "online_community": [
        "Platform trust-and-safety decisions mediated by undisclosed AI moderation"
      ]
    },
    "countering_governance_form_ids": [
      "augmented-deliberation",
      "community-notes"
    ],
    "source_chapter": "Ch. 5-4"
  },
  {
    "id": "x-community-notes-instance",
    "name": "X Community Notes (Birdwatch) — Bridging-Based Fact-Checking Instance",
    "kind": "instance",
    "signature": "A platform fact-checking system that uses cross-partisan consensus rather than majority vote: notes are rated 'helpful' only if they receive support across ideological lines, not merely from a large like-minded cluster.",
    "example": "Community Notes on X allows members to flag misleading posts and rate each other's notes; raters are placed on a discovered ideological spectrum and notes are surfaced only when their 'objective quality' score — based on cross-partisan support — is sufficiently high.",
    "pattern_ids": [
      "echo-chamber-algorithm",
      "community-notes-bridging-failure"
    ],
    "domain_examples": {
      "online_community": [
        "Community Notes / Birdwatch on X (Twitter)"
      ]
    },
    "countering_governance_form_ids": [
      "augmented-deliberation"
    ],
    "source_chapter": "Ch. 5-4"
  },
  {
    "id": "synthetic-party-denmark-instance",
    "name": "The Synthetic Party (Denmark) — AI-Driven Electoral Representation Instance",
    "kind": "instance",
    "signature": "A political party whose platform is algorithmically constructed by fine-tuning a GFM on the manifestos of micro-parties representing persistently abstaining voters; demonstrates both the potential and the democratic-legitimacy questions of GFM-based collective representation.",
    "example": "Det Syntetiske Parti (founded 2022) fine-tuned a GFM on data from over 200 Danish micro-parties that never gained seats, aiming to represent the ~15-20% persistent abstention rate. It is described as the world's first AI-led political party.",
    "pattern_ids": [
      "llm-deliberation-legitimacy-gap"
    ],
    "domain_examples": {
      "state": [
        "The Synthetic Party, Denmark (2022)"
      ]
    },
    "countering_governance_form_ids": [
      "augmented-deliberation"
    ],
    "source_chapter": "Ch. 5-4"
  },
  {
    "id": "anno-tokyo-gubernatorial-instance",
    "name": "Takahiro Anno Tokyo Gubernatorial Campaign — Participatory AI Deliberation Instance",
    "kind": "instance",
    "signature": "An electoral campaign using Talk to the City, GitHub, AI avatar, and Polis-style tools to conduct 'broad listening' at scale, inviting voter feedback and policy refinement through open digital channels; garnered 150,000 votes as a relatively unknown candidate.",
    "example": "In the 2024 Tokyo gubernatorial election, candidate Anno published his manifesto on GitHub, collected voter feedback via AI-handled calls and GitHub discussions (232 issues, 85 adopted changes), visualized perspectives with Talk to the City, and deployed an AI avatar (AI-Anno) that answered ~7,400 questions over 16 days.",
    "pattern_ids": [
      "broad-listening-deficit"
    ],
    "domain_examples": {
      "state": [
        "Takahiro Anno 2024 Tokyo gubernatorial campaign"
      ]
    },
    "countering_governance_form_ids": [
      "augmented-deliberation",
      "talk-to-the-city"
    ],
    "source_chapter": "Ch. 5-4"
  },
  {
    "id": "slow-legislature-regulatory-lag",
    "name": "Legislative Lag / Regulatory Ossification",
    "kind": "pattern",
    "signature": "Democratic legislatures and regulatory bodies move far more slowly than technological change, leaving governance vacuums that are filled either by private ordering (atomist) or by executive/technocratic fiat (monist). The gap between law-on-the-books and technological reality widens.",
    "example": "U.S. and EU legislatures taking years or decades to update communications law, privacy law, or financial regulation to reflect internet-era realities, during which time platforms self-regulate or regulatory arbitrage flourishes.",
    "pattern_ids": [
      "rigid-rule-based-administration"
    ],
    "domain_examples": {
      "state": [
        "Section 230 stasis despite platform evolution",
        "EU AI Act multi-year lag behind GPT-era deployments"
      ],
      "dao": [
        "DAO legal status limbo across jurisdictions"
      ]
    },
    "countering_governance_form_ids": [
      "adaptive-administration",
      "regulatory-sandboxes"
    ],
    "source_chapter": "Ch. 5-5"
  },
  {
    "id": "taiwan-auditor-general-adaptive-instance",
    "name": "Taiwan Adaptive Administration / Auditor-General Flexibility",
    "kind": "instance",
    "signature": "Named instance in Plurality of Taiwan's government experimenting with adaptive, outcome-oriented regulatory approaches coordinated through the digital ministry, as a counter-model to rigid rule-based bureaucracy.",
    "example": "Taiwan's approach to regulating emerging technologies through iterative public consultations, regulatory sandboxes, and coordination across ministries — enabling policy to co-evolve with civic input rather than ossify in statute.",
    "pattern_ids": [
      "rigid-rule-based-administration",
      "slow-legislature-regulatory-lag"
    ],
    "domain_examples": {
      "state": [
        "Taiwan digital ministry sandbox approach",
        "Taiwan fintech regulatory sandbox"
      ],
      "public_infrastructure": [
        "JOIN platform iterative policymaking"
      ]
    },
    "countering_governance_form_ids": [
      "adaptive-administration"
    ],
    "source_chapter": "Ch. 5-5"
  },
  {
    "id": "silo-based-government-fragmentation",
    "name": "Siloed Government / Interoperability Failure",
    "kind": "pattern",
    "signature": "Government ministries, agencies, and departments operate in isolated silos with incompatible data systems, mandates, and cultures. Cross-cutting problems — public health, climate, digital infrastructure — fall through the cracks between jurisdictions.",
    "example": "Pandemic response failures where public health agencies, emergency management bodies, and social services could not share data or coordinate action because of incompatible systems and jurisdictional barriers built up over decades.",
    "pattern_ids": [
      "rigid-rule-based-administration"
    ],
    "domain_examples": {
      "state": [
        "U.S. COVID data reporting fragmentation across 50 states",
        "NHS interoperability failures UK"
      ],
      "public_infrastructure": [
        "city/county/state digital service fragmentation"
      ]
    },
    "countering_governance_form_ids": [
      "adaptive-administration",
      "federated-identity-intersectional"
    ],
    "source_chapter": "Ch. 5-5"
  },
  {
    "id": "plurality-voting-name-collision",
    "name": "\"Plurality Voting\" Name Collision with First-Past-the-Post",
    "kind": "pattern",
    "signature": "The dominant, widely-used term for a ⿻ voting mechanism shares its name with one of the most-criticized legacy electoral systems (first-past-the-post / winner-takes-all), creating confusion, misattribution, and rhetorical vulnerability whenever the ⿻ meaning is invoked in public discourse.",
    "example": "The book notes that the term 'plurality voting' already denotes the standard first-past-the-post system, making the ⿻ use of 'plurality' as a voting family name liable to confuse audiences and conflate two radically different approaches to aggregating preferences.",
    "pattern_ids": [],
    "domain_examples": {
      "state": [
        "first-past-the-post-vs-plural-voting-confusion"
      ],
      "dao": [
        "token-plurality-vote-misuse"
      ]
    },
    "countering_governance_form_ids": [
      "quadratic-voting",
      "plural-voting"
    ],
    "source_chapter": "Ch. 5-6"
  },
  {
    "id": "winner-takes-all-voting",
    "name": "Winner-Takes-All / First-Past-the-Post Voting",
    "kind": "pattern",
    "signature": "Elections or governance decisions resolved by simple plurality or majority rule, collapsing diverse intensities of preference into binary outcomes, systematically marginalizing minority views, and ignoring the degree to which voters care about issues.",
    "example": "First-past-the-post electoral systems across liberal democracies reduce multi-dimensional preference landscapes to a single winner, suppressing minority coalition voices and generating winner-takes-all political dynamics that ⿻ voting mechanisms are designed to counter.",
    "pattern_ids": [],
    "domain_examples": {
      "state": [
        "us-electoral-college-fptp",
        "uk-westminster-fptp"
      ],
      "dao": [
        "one-token-one-vote-whale-capture"
      ]
    },
    "countering_governance_form_ids": [
      "quadratic-voting",
      "plural-voting",
      "conviction-voting",
      "sortition"
    ],
    "source_chapter": "Ch. 5-6"
  },
  {
    "id": "vote-buying-collusion-vulnerability",
    "name": "Vote-Buying and Collusion Vulnerability in Token/Coin Voting",
    "kind": "pattern",
    "signature": "Governance systems where votes are fungible and transferable enable wealthy actors or coordinated blocs to purchase, delegate, or coerce votes. Linear token-weighted voting compounds this: marginal cost of additional votes stays constant, so concentrated capital dominates.",
    "example": "In DAO governance with one-token-one-vote, whales can acquire governance tokens cheaply relative to the policy value at stake, buy bloc votes outright, or coordinate 'governance attacks' — a structural failure that quadratic voting's rising marginal cost is designed to deter.",
    "pattern_ids": [],
    "domain_examples": {
      "dao": [
        "compound-governance-whale-attack",
        "makerdao-vote-buying-instance"
      ],
      "state": [
        "voter-patronage-machine-politics"
      ]
    },
    "countering_governance_form_ids": [
      "quadratic-voting",
      "plural-voting"
    ],
    "source_chapter": "Ch. 5-6"
  },
  {
    "id": "compound-dao-governance-attack",
    "name": "Compound DAO Governance Attack",
    "kind": "instance",
    "signature": "A coordinated actor accumulates sufficient COMP governance tokens to pass a self-dealing proposal, exploiting the linear token-vote model where capital concentration directly translates to governance control.",
    "example": "The Compound protocol experienced governance proposals where large token holders could effectively control outcomes, illustrating how one-token-one-vote DAO governance degenerates into plutocracy under capital concentration — a canonical instance of vote-buying and collusion vulnerability.",
    "pattern_ids": [
      "vote-buying-collusion-vulnerability",
      "winner-takes-all-voting"
    ],
    "domain_examples": {
      "dao": [
        "compound-governance-whale-attack"
      ]
    },
    "countering_governance_form_ids": [
      "quadratic-voting",
      "plural-voting"
    ],
    "source_chapter": "Ch. 5-6"
  },
  {
    "id": "strategic-voting-preference-distortion",
    "name": "Strategic Voting and Preference Distortion",
    "kind": "pattern",
    "signature": "Voting systems that reward strategic misrepresentation — voting for a less-preferred option to block a worse one, burying candidates, or coordinating insincere coalitions — systematically distort the information content of elections and discourage honest expression of preferences.",
    "example": "Under first-past-the-post, voters routinely abandon their most-preferred candidate for a 'viable' lesser evil, producing elections whose outcomes do not reflect true preference distributions. ⿻ voting designs attempt to reduce these incentives by making sincere expression individually rational.",
    "pattern_ids": [],
    "domain_examples": {
      "state": [
        "us-third-party-spoiler-effect",
        "uk-tactical-voting"
      ],
      "dao": [
        "snapshot-strategic-bloc-voting"
      ]
    },
    "countering_governance_form_ids": [
      "quadratic-voting",
      "plural-voting",
      "conviction-voting"
    ],
    "source_chapter": "Ch. 5-6"
  },
  {
    "id": "approval-voting-strategic-collapse",
    "name": "Approval Voting Strategic Collapse",
    "kind": "pattern",
    "signature": "Approval voting, while improving on first-past-the-post, still collapses preference intensity to binary approve/disapprove signals. Sophisticated voters game approval thresholds; the system does not reward nuanced preference expression or cross-group coalition building.",
    "example": "Approval voting experiments show that strategic voters withhold approval from strong competitors even if they genuinely prefer them over the winner, reproducing some strategic distortions of FPTP and failing to capture the intensity information that quadratic designs preserve.",
    "pattern_ids": [
      "strategic-voting-preference-distortion"
    ],
    "domain_examples": {
      "state": [
        "fargo-nd-approval-voting-strategic-behavior"
      ],
      "public_infrastructure": [
        "approval-voting-participatory-budgeting-limits"
      ]
    },
    "countering_governance_form_ids": [
      "quadratic-voting",
      "plural-voting"
    ],
    "source_chapter": "Ch. 5-6"
  },
  {
    "id": "condorcet-cycling-instability",
    "name": "Condorcet Cycling and Voting Instability",
    "kind": "pattern",
    "signature": "Ranked or pairwise voting systems can produce cyclical majorities (A beats B, B beats C, C beats A) with no stable winner, making collective decisions arbitrary and manipulable by agenda-setters who control the order of pairwise comparisons.",
    "example": "Arrow's impossibility theorem and Condorcet paradoxes demonstrate that any voting system aggregating ranked preferences will either be dictatorial or produce intransitive social orderings — a fundamental instability that ⿻ voting sidesteps by reframing the goal from social-ordering to preference-intensity aggregation.",
    "pattern_ids": [],
    "domain_examples": {
      "state": [
        "legislative-committee-agenda-manipulation"
      ],
      "dao": [
        "ranked-choice-dao-governance-cycle"
      ]
    },
    "countering_governance_form_ids": [
      "quadratic-voting",
      "plural-voting"
    ],
    "source_chapter": "Ch. 5-6"
  },
  {
    "id": "quadratic-voting-sybil-vulnerability",
    "name": "Quadratic Voting Sybil Vulnerability",
    "kind": "pattern",
    "signature": "Quadratic voting's cost function (cost = votes²) assumes each identity is a single actor. If identities can be split (Sybil attacks), an actor can distribute votes across fake identities to reduce the quadratic cost premium, undermining the mechanism's anti-concentration properties.",
    "example": "A voter with a budget of 100 voice credits spending all on one issue pays 100 for 10 votes. By splitting into 10 fake identities each with 10 credits, the same actor gets 10×(√10) ≈ 31.6 effective votes — nearly tripling influence — demonstrating that QV's integrity depends on robust identity infrastructure.",
    "pattern_ids": [],
    "domain_examples": {
      "dao": [
        "gitcoin-grants-sybil-attack",
        "qv-DAO-sybil-split"
      ],
      "public_infrastructure": [
        "colorado-qv-pilot-identity-verification"
      ]
    },
    "countering_governance_form_ids": [
      "plural-voting",
      "quadratic-voting"
    ],
    "source_chapter": "Ch. 5-6"
  },
  {
    "id": "colorado-qv-pilot",
    "name": "Colorado Democratic Caucus Quadratic Voting Pilot",
    "kind": "instance",
    "signature": "A U.S. state legislative caucus allocates voice credits to members to vote quadratically on budget priorities, providing an early real-world test of QV in a formal governmental setting.",
    "example": "The Colorado Democratic caucus piloted quadratic voting to allocate legislative priorities among members, with each legislator receiving voice credits to distribute across competing budget items — an early governmental deployment demonstrating QV's feasibility beyond lab or DAO contexts.",
    "pattern_ids": [],
    "domain_examples": {
      "state": [
        "colorado-qv-pilot"
      ]
    },
    "countering_governance_form_ids": [
      "quadratic-voting"
    ],
    "source_chapter": "Ch. 5-6"
  },
  {
    "id": "gitcoin-grants-qf-instance",
    "name": "Gitcoin Grants Quadratic Funding",
    "kind": "instance",
    "signature": "An open-source funding platform uses quadratic funding — matching pool contributions proportional to the square root of individual donations — to surface community-endorsed OSS projects rather than relying on large-donor or committee discretion.",
    "example": "Gitcoin Grants applies quadratic funding to allocate matching funds to open-source projects, where the number of unique contributors matters more than total donation size — making broad community support more valuable than concentrated wealth, and surfacing projects backed by many small donors.",
    "pattern_ids": [
      "oss-maintainer-burnout"
    ],
    "domain_examples": {
      "dao": [
        "gitcoin-grants-qf-instance"
      ],
      "public_infrastructure": [
        "open-source-public-goods-funding"
      ]
    },
    "countering_governance_form_ids": [
      "quadratic-voting"
    ],
    "source_chapter": "Ch. 5-6"
  },
  {
    "id": "radicalxchange-plural-voting-experiments",
    "name": "RadicalxChange Plural Voting Experiments",
    "kind": "instance",
    "signature": "The RadicalxChange movement organizes conferences, workshops, and community governance experiments deploying quadratic and plural voting to make collective decisions, testing ⿻ voting mechanisms in civil-society and movement contexts.",
    "example": "RadicalxChange has used quadratic voting in conference session selection and community priority-setting, allowing participants to signal intensity of preference across competing proposals — acting as a civil-society testbed for ⿻ voting primitives before broader institutional adoption.",
    "pattern_ids": [],
    "domain_examples": {
      "movement": [
        "radicalxchange-qv-conference-governance"
      ],
      "dao": [
        "radicalxchange-plural-voting-dao-experiments"
      ]
    },
    "countering_governance_form_ids": [
      "quadratic-voting",
      "plural-voting"
    ],
    "source_chapter": "Ch. 5-6"
  },
  {
    "id": "finance-divorced-from-social-context",
    "name": "Finance Divorced from Social Context",
    "kind": "pattern",
    "signature": "Financial instruments and capital allocation mechanisms are designed to be context-free and universally fungible, severing the link between money and the social relationships, purposes, and communities that give economic activity meaning. Capital flows optimize for returns abstracted from community embeddedness.",
    "example": "Conventional finance treats capital as socially neutral — a dollar is a dollar regardless of its social provenance — rendering invisible the social networks, trust relationships, and collective goods that underpin productive economic activity. The book frames this as a failure to recognize the 'social' in social markets.",
    "pattern_ids": [],
    "domain_examples": {
      "dao": [
        "defi-context-free-capital"
      ],
      "state": [
        "central-bank-universal-currency"
      ],
      "platform_cooperative": [
        "platform-profit-extraction-from-community"
      ]
    },
    "countering_governance_form_ids": [
      "plural-money",
      "social-markets",
      "partial-common-ownership"
    ],
    "source_chapter": "Ch. 5-7"
  },
  {
    "id": "price-signal-crowding-out-social-signal",
    "name": "Price Signals Crowding Out Social Signals",
    "kind": "pattern",
    "signature": "When monetary price becomes the dominant coordination mechanism, it displaces richer social signals — reputation, reciprocity, shared identity, community norms — that enable more nuanced, context-sensitive allocation. Markets become less socially intelligent the more they price-optimize.",
    "example": "The book illustrates how purely price-mediated exchange in digital platforms erodes the community trust and social context that made early peer-to-peer sharing work, replacing community norms with algorithmic pricing — an instance of price signals crowding out social signals that had previously sustained cooperation.",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "airbnb-price-algorithm-displacing-trust"
      ],
      "dao": [
        "token-price-governance-displacement"
      ],
      "platform_cooperative": [
        "gig-platform-surge-pricing-erosion"
      ]
    },
    "countering_governance_form_ids": [
      "plural-money",
      "social-markets",
      "quadratic-funding"
    ],
    "source_chapter": "Ch. 5-7"
  },
  {
    "id": "monist-currency-monoculture",
    "name": "Monist Currency Monoculture",
    "kind": "pattern",
    "signature": "A single, universal currency serves as the sole legitimate medium of exchange, collapsing the diversity of value systems, community bonds, and social relationships into one scalar measure. This erases the plurality of economic communities and the distinct values they embody.",
    "example": "The dominance of national fiat currencies — and proposals to replace them with a single global currency or CBDC — represents a monist tendency that the book contrasts with the ⿻ vision of plural monies that can reflect different community memberships, purposes, and social relationships.",
    "pattern_ids": [],
    "domain_examples": {
      "state": [
        "national-fiat-currency-monoculture"
      ],
      "dao": [
        "single-token-governance-monoculture"
      ],
      "federated_network": [
        "universal-stablecoin-monoculture"
      ]
    },
    "countering_governance_form_ids": [
      "plural-money",
      "social-markets"
    ],
    "source_chapter": "Ch. 5-7"
  },
  {
    "id": "market-failure-in-social-goods",
    "name": "Market Failure in Social and Relational Goods",
    "kind": "pattern",
    "signature": "Standard markets systematically underprovide goods whose value is inherently relational, communal, or context-dependent — such as trust, social capital, civic participation, and shared identity — because they cannot be captured in bilateral price signals. Relational value is systematically destroyed or underproduced.",
    "example": "The book argues that markets structurally fail to produce adequate levels of social trust, civic participation, and community cohesion because these goods require multilateral, embeddedness-sensitive exchange mechanisms that bilateral price markets cannot supply — a failure that ⿻ social market designs seek to remedy.",
    "pattern_ids": [],
    "domain_examples": {
      "state": [
        "civic-association-decline-market-substitution"
      ],
      "online_community": [
        "platform-community-extraction"
      ],
      "movement": [
        "mutual-aid-network-market-displacement"
      ]
    },
    "countering_governance_form_ids": [
      "social-markets",
      "quadratic-funding",
      "plural-money",
      "data-coalitions"
    ],
    "source_chapter": "Ch. 5-7"
  },
  {
    "id": "oss-funding-gap",
    "name": "OSS Funding Gap",
    "kind": "pattern",
    "signature": "Open-source ecosystems produce enormous supermodular value but lack reliable revenue streams; traditional matching systems (e.g. GitHub Sponsors) can be captured by large donors whose contributions dominate matching pools, crowding out the distributed small-contributor signal that reflects genuine community need.",
    "example": "GitHub Sponsors could be manipulated by wealthy participants such as corporations, whose donations could command most matching funds.",
    "pattern_ids": [],
    "domain_examples": {
      "public_infrastructure": [
        "github-sponsors-capture"
      ],
      "online_community": [
        "oss-maintainer-burnout"
      ]
    },
    "countering_governance_form_ids": [
      "quadratic-funding",
      "plural-funding"
    ],
    "source_chapter": "Ch. 5-7"
  },
  {
    "id": "github-sponsors-donor-capture",
    "name": "GitHub Sponsors Donor Capture",
    "kind": "instance",
    "signature": "A matching-fund platform where large corporate donors can dominate the matching pool, effectively redirecting public-good subsidies toward projects they prefer rather than those most valued by the broad contributor community.",
    "example": "Traditional such systems (such as GitHub Sponsors) could be manipulated by wealthy participants (such as corporations), whose donations could command most matching funds.",
    "pattern_ids": [
      "oss-funding-gap"
    ],
    "domain_examples": {
      "public_infrastructure": [
        "GitHub Sponsors"
      ]
    },
    "countering_governance_form_ids": [
      "quadratic-funding",
      "plural-funding"
    ],
    "source_chapter": "Ch. 5-7"
  },
  {
    "id": "externality-blindness-market",
    "name": "Market Externality Blindness",
    "kind": "pattern",
    "signature": "Markets involve only transacting parties; those harmed or benefited by innovations (externalities) are structurally excluded from transactions. Precisely to the extent that new means of collaboration are revolutionary, corporations will not involve those affected, preventing benefits from being fully tapped or risks from being mitigated.",
    "example": "The victims (or in some cases beneficiaries) of these 'externalities' are, by construction, not directly party to market transactions. Thus, precisely to the extent that new means of collaboration developed in markets are revolutionary, markets and the corporations they spawn will not directly involve those affected by their innovations.",
    "pattern_ids": [],
    "domain_examples": {
      "state": [
        "environmental regulation capture",
        "zoning capture"
      ],
      "public_infrastructure": [
        "platform misinformation externality"
      ]
    },
    "countering_governance_form_ids": [
      "stakeholder-corporation",
      "emergent-publics-governance",
      "market-design"
    ],
    "source_chapter": "Ch. 5-7"
  },
  {
    "id": "regulation-capture-interest-groups",
    "name": "Regulatory and Zoning Capture by Interest Groups",
    "kind": "pattern",
    "signature": "Government-imposed restrictions on markets (regulation, zoning, Pigouvian taxes, tradeable permits) are the central tool against externalities, but given their economic stakes they are often captured or controlled by interest groups imperfectly aligned to even the supposedly relevant public.",
    "example": "Given their economic stakes [restrictions] are often captured/controlled by interest groups imperfectly aligned to the interests of even the supposedly relevant public.",
    "pattern_ids": [
      "neoliberal-corrective-tradeoffs"
    ],
    "domain_examples": {
      "state": [
        "zoning capture — Glaeser & Gyourko",
        "carbon-permit lobby capture"
      ],
      "public_infrastructure": [
        "telecom regulatory capture"
      ]
    },
    "countering_governance_form_ids": [
      "stakeholder-corporation",
      "emergent-publics-governance",
      "market-design"
    ],
    "source_chapter": "Ch. 5-7"
  },
  {
    "id": "market-power-concentration-diversity-erosion",
    "name": "Market Power Concentration and Diversity Erosion",
    "kind": "pattern",
    "signature": "Even in enriched social-market forms, markets tend to concentrate power in private organizations or limited cultural groups in ways that homogenize and erode diversity. This is identified as the primary risk against which ⿻ social-market design must guard.",
    "example": "What we must guard against most rigorously is the tendency of markets to concentrate power in private organizations or limited cultural groups in ways that homogenize and erode diversity.",
    "pattern_ids": [],
    "domain_examples": {
      "state": [
        "Amazon/Google/Meta global prominence exceeding nation-states"
      ],
      "online_community": [
        "platform monoculture"
      ],
      "dao": [
        "whale-dominated token governance"
      ]
    },
    "countering_governance_form_ids": [
      "partial-common-ownership",
      "plural-funding",
      "stakeholder-corporation",
      "emergent-publics-governance"
    ],
    "source_chapter": "Ch. 5-7"
  },
  {
    "id": "blitzscaling-harms",
    "name": "Blitzscaling and \"Move Fast and Break Things\"",
    "kind": "pattern",
    "signature": "A start-up receives large early injections of venture financing to rapidly grow its user base, leveraging network effects and learning from user data to achieve dominant market position before social harms are understood or managed. Adoption outpaces governance; spillovers on non-adopters are unaddressed.",
    "example": "OpenAI's ChatGPT reached 100 million users within a few months of launch, triggering widespread public concern and calls for regulation before any robust governance framework existed.",
    "pattern_ids": [],
    "domain_examples": {
      "public_infrastructure": [
        "chatgpt-100m-user-blitzscale"
      ],
      "platform_cooperative": [
        "ride-hailing-blitzscale"
      ],
      "online_community": [
        "social-media-blitzscale"
      ]
    },
    "countering_governance_form_ids": [
      "participatory-action-research",
      "plural-seed-diffusion-strategy"
    ],
    "source_chapter": "Ch. 6-0"
  },
  {
    "id": "chatgpt-100m-user-blitzscale",
    "name": "ChatGPT Blitzscaling to 100 Million Users",
    "kind": "instance",
    "signature": "A product reaches 100 million users within months of launch, far outpacing any community governance or harm-management infrastructure, prompting open letters calling for regulatory pause.",
    "example": "OpenAI's ChatGPT achieved 100 million users within a few months of its launch — the fastest consumer technology adoption on record — prompting the Future of Life Institute's open letter calling to \"Pause Giant AI Experiments\" (March 2023).",
    "pattern_ids": [
      "blitzscaling-harms",
      "engagement-maximization"
    ],
    "domain_examples": {
      "public_infrastructure": [
        "ChatGPT rapid adoption 2022-2023"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 6-0"
  },
  {
    "id": "experimentation-on-communities",
    "name": "\"Experimentation On\" Communities (RCT Model Applied to Social Change)",
    "kind": "pattern",
    "signature": "Economic and design experts construct interventions, test them on communities using preregistered metrics, and propagate thus-measured treatments broadly — modeled on randomized controlled trials from individual medical applications. Communities are subjects rather than co-designers; outcomes are reduced to pre-specified metrics; the community's own innovations and unexpected uses are discounted.",
    "example": "The spread of RCT methodology from medicine into development economics (Banerjee and Duflo's *Poor Economics*) encouraged a model where experts design, test, and scale interventions 'on' communities rather than 'with' them, sidelining the participatory, community-driven innovation that built early ⿻-adjacent digital technologies.",
    "pattern_ids": [],
    "domain_examples": {
      "state": [
        "development-economics-RCT-poverty-programs"
      ],
      "public_infrastructure": [
        "top-down-civic-tech-deployment"
      ]
    },
    "countering_governance_form_ids": [
      "participatory-action-research"
    ],
    "source_chapter": "Ch. 6-0"
  },
  {
    "id": "violent-revolution-democratic-failure",
    "name": "Violent Revolution Failing to Produce Lasting Democracy",
    "kind": "pattern",
    "signature": "Popular dissatisfaction with material conditions drives seizure of power before alternative governance forms have gained legitimacy or even been detailed. Dramatic upheavals are quickly reversed and/or accompanied by significant violence. Immediate material demands are placed ahead of the slower process of building social authority for new institutions.",
    "example": "Levitsky and Way found that not a single violent revolution in the twentieth century led to lasting democratic government. Arendt's analysis of the French Revolution illustrates the pattern: 'By placing immediate material demands and the power to achieve them ahead of the process of building authority, the French Revolution burdened the delicate process of building social legitimacy for a new system with more weight than it could bear.'",
    "pattern_ids": [],
    "domain_examples": {
      "state": [
        "french-revolution-arendt-analysis",
        "twentieth-century-violent-revolutions"
      ]
    },
    "countering_governance_form_ids": [
      "plural-seed-diffusion-strategy"
    ],
    "source_chapter": "Ch. 6-0"
  },
  {
    "id": "shareholder-primacy-workplace",
    "name": "Shareholder Primacy & Worker Exclusion from Governance",
    "kind": "pattern",
    "signature": "Corporate governance vests decision-making authority exclusively in capital owners; workers and affected communities have no formal voice in workplace policy, wages, or strategic direction. Profit maximization is treated as the sole legitimate objective.",
    "example": "The standard publicly-traded corporation model, in which shareholders elect boards and management sets conditions for workers without any worker representation on governance bodies — the dominant form critiqued throughout Ch. 6-1.",
    "pattern_ids": [],
    "domain_examples": {
      "workplace": [
        "standard Anglo-American publicly-traded corporation",
        "at-will employment regimes"
      ]
    },
    "countering_governance_form_ids": [
      "works-councils",
      "codetermination",
      "worker-cooperative-governance",
      "sociocracy"
    ],
    "source_chapter": "Ch. 6-1"
  },
  {
    "id": "gig-economy-atomization",
    "name": "Gig Economy Atomization & Misclassification",
    "kind": "pattern",
    "signature": "Platform firms classify workers as independent contractors rather than employees, stripping them of collective bargaining rights, benefits, and stable income while concentrating platform rents with owners. Workers interact with the platform atomistically, unable to organize or accumulate voice.",
    "example": "Uber, Lyft, and DoorDash classifying drivers as independent contractors — preventing collective bargaining and denying employment benefits — cited in Ch. 6-1 as a paradigm of atomist labor relations.",
    "pattern_ids": [],
    "domain_examples": {
      "workplace": [
        "Uber/Lyft driver misclassification",
        "DoorDash contractor model"
      ],
      "platform_cooperative": [
        "Up&Go worker-owned cleaning cooperative as counter-model"
      ]
    },
    "countering_governance_form_ids": [
      "platform-cooperative-governance",
      "data-coalitions"
    ],
    "source_chapter": "Ch. 6-1"
  },
  {
    "id": "germany-codetermination-instance",
    "name": "German Codetermination (Mitbestimmung) — Worker Board Representation",
    "kind": "instance",
    "signature": "Mandatory worker representation on supervisory boards of large German corporations, established by the Codetermination Act of 1976, giving workers equal or near-equal board seats to shareholder representatives.",
    "example": "German Mitbestimmung: workers hold half the seats on supervisory boards of firms with more than 2,000 employees, enabling worker voice in strategic decisions including plant closures, wage policy, and executive compensation — documented in Ch. 6-1 as a leading ⿻ workplace governance model.",
    "pattern_ids": [
      "shareholder-primacy-workplace"
    ],
    "domain_examples": {
      "workplace": [
        "German Mitbestimmung / Codetermination Act 1976",
        "Volkswagen supervisory board worker parity"
      ]
    },
    "countering_governance_form_ids": [
      "codetermination",
      "works-councils"
    ],
    "source_chapter": "Ch. 6-1"
  },
  {
    "id": "mondragon-cooperative-instance",
    "name": "Mondragón Cooperative Corporation",
    "kind": "instance",
    "signature": "Large-scale worker-owned cooperative network in the Basque Country, Spain, where workers are member-owners who elect governance bodies and share in profits and losses — demonstrating viability of cooperative ownership at industrial scale.",
    "example": "Mondragón Corporation: founded 1956, now one of Spain's largest business groups, with ~80,000 worker-owners across manufacturing, retail (Eroski), and finance (Laboral Kutxa) — cited in Ch. 6-1 as evidence that worker ownership scales beyond small artisan firms.",
    "pattern_ids": [
      "shareholder-primacy-workplace"
    ],
    "domain_examples": {
      "workplace": [
        "Mondragón Corporation Spain",
        "Eroski cooperative retail",
        "Laboral Kutxa cooperative bank"
      ]
    },
    "countering_governance_form_ids": [
      "worker-cooperative-governance"
    ],
    "source_chapter": "Ch. 6-1"
  },
  {
    "id": "employee-ownership-trust-uk-instance",
    "name": "UK Employee Ownership Trusts (EOTs)",
    "kind": "instance",
    "signature": "Tax-advantaged legal structure enabling founders to transfer business ownership to an employee-owned trust, giving workers a beneficial stake and voice in governance without requiring individual share purchase.",
    "example": "John Lewis Partnership and the wave of EOT conversions enabled by the UK Finance Act 2014 — referenced in Ch. 6-1 as a policy instrument for broadening worker ownership.",
    "pattern_ids": [
      "shareholder-primacy-workplace"
    ],
    "domain_examples": {
      "workplace": [
        "John Lewis Partnership",
        "UK EOT conversions post-2014 Finance Act"
      ]
    },
    "countering_governance_form_ids": [
      "worker-cooperative-governance"
    ],
    "source_chapter": "Ch. 6-1"
  },
  {
    "id": "remote-work-coordination-failure",
    "name": "Remote Work Coordination Failure & Isolation",
    "kind": "pattern",
    "signature": "Distributed or fully remote work arrangements—without supporting social infrastructure—fragment team cohesion, erode informal knowledge transfer, and produce isolation and burnout. Digital communication tools replicate surveillance hierarchies rather than enabling genuine collaboration.",
    "example": "The post-pandemic shift to full remote work at many tech firms, which revealed that asynchronous text communication (Slack, email) inadequately substituted for the social fabric of co-location, leading to documented declines in cross-team collaboration and worker well-being — discussed in Ch. 6-1.",
    "pattern_ids": [
      "hierarchical-management-monoculture"
    ],
    "domain_examples": {
      "workplace": [
        "post-pandemic full-remote tech firm fragmentation",
        "Slack/email substitution for in-person collaboration"
      ]
    },
    "countering_governance_form_ids": [
      "augmented-deliberation"
    ],
    "source_chapter": "Ch. 6-1"
  },
  {
    "id": "political-discussion-suppression-workplace",
    "name": "Workplace Political Discussion Suppression",
    "kind": "pattern",
    "signature": "Executives respond to political tensions entering the workplace by banning political discussions outright rather than building inclusive channels for deliberation. The suppression may reduce visible conflict but does not resolve underlying tensions and can undermine employee morale.",
    "example": "Coinbase and Basecamp both banned political discussions at work in 2021, suppressing rather than resolving employee tensions.",
    "pattern_ids": [],
    "domain_examples": {
      "workplace": [
        "Coinbase political discussion ban",
        "Basecamp political discussion ban"
      ]
    },
    "countering_governance_form_ids": [
      "augmented-deliberation",
      "polis-style-clustering"
    ],
    "source_chapter": "Ch. 6-1"
  },
  {
    "id": "coinbase-political-ban-instance",
    "name": "Coinbase/Basecamp Political Discussion Ban",
    "kind": "instance",
    "signature": "Named companies banning political speech at work as an executive-imposed monist solution to pluralism tensions — suppresses rather than resolves conflict.",
    "example": "In April 2021, Basecamp followed Coinbase in banning politics talk at work, drawing wide criticism for suppressing rather than engaging with employee concerns.",
    "pattern_ids": [
      "political-discussion-suppression-workplace"
    ],
    "domain_examples": {
      "workplace": [
        "Coinbase 2021 political ban",
        "Basecamp 2021 political ban"
      ]
    },
    "countering_governance_form_ids": [
      "augmented-deliberation"
    ],
    "source_chapter": "Ch. 6-1"
  },
  {
    "id": "centralized-intrapreneurship-failure",
    "name": "Centralized Intrapreneurship Failure",
    "kind": "pattern",
    "signature": "A small central office (e.g., a CTO office) is charged with coordinating cross-company investments and intrapreneurship but is necessarily less informed than those 'on the ground.' Individual '20% time' projects are idiosyncratic and rarely scale because they fail to bring enough people together. The result is an oscillation between over-centralized management and uncoordinated individual initiative, with neither model generating the cross-organizational cooperation needed for shared infrastructure or new ventures.",
    "example": "Microsoft's OCTO faced persistent challenges harnessing a small staff to decide major cross-cutting investments, while Google's 20% time model produced idiosyncratic projects that rarely aligned to broader mission or scaled.",
    "pattern_ids": [],
    "domain_examples": {
      "workplace": [
        "Microsoft OCTO Web3 strategy",
        "Google 20% time model"
      ]
    },
    "countering_governance_form_ids": [
      "quadratic-funding",
      "augmented-deliberation"
    ],
    "source_chapter": "Ch. 6-1"
  },
  {
    "id": "google-20-percent-time-instance",
    "name": "Google 20% Time Idiosyncratic Projects",
    "kind": "instance",
    "signature": "Google's policy of giving employees 20% of work time for passion projects produces projects that may be misaligned to broader organizational mission and fail to scale because they lack cross-organizational support and cooperation.",
    "example": "Google (now Alphabet) has traditionally given employees 20% of their time free to pursue passion projects, but this suffers the challenge that individuals may pursue idiosyncratic projects that at worst may not be aligned to the broader mission and at best usually fail to scale.",
    "pattern_ids": [
      "centralized-intrapreneurship-failure"
    ],
    "domain_examples": {
      "workplace": [
        "Google 20% time policy"
      ]
    },
    "countering_governance_form_ids": [
      "quadratic-funding"
    ],
    "source_chapter": "Ch. 6-1"
  },
  {
    "id": "narrow-hiring-pipeline",
    "name": "Narrow Hiring Pipeline",
    "kind": "pattern",
    "signature": "Organizations recruit primarily from a limited set of degree programs and professional backgrounds, excluding talented and diverse candidates. Recruiting from broader backgrounds is costly: identifying promising candidates, verifying non-standard credentials, traveling further, and onboarding those unfamiliar with organizational culture. This rigidity forces candidates into narrow learning and career paths.",
    "example": "Many businesses regret excluding talented and diverse candidates but find recruiting from non-standard backgrounds too costly — requiring them to learn to identify promising résumés from a broader range of settings and verify accomplishments outside typical channels.",
    "pattern_ids": [],
    "domain_examples": {
      "workplace": [
        "standard career path hiring",
        "credential-based recruiting filters"
      ]
    },
    "countering_governance_form_ids": [
      "intersectional-social-identity",
      "federated-identity"
    ],
    "source_chapter": "Ch. 6-1"
  },
  {
    "id": "health-insurance-adversarial-data-incentive",
    "name": "Adversarial Health-Data Incentives under Atomist Insurance",
    "kind": "pattern",
    "signature": "Insurers are incentivized to use health data to select low-risk individuals and deny coverage rather than to improve population health; individuals withhold data to avoid discrimination; data that could benefit collective health research is suppressed.",
    "example": "Private health insurers in the US use predictive data to screen applicants and limit payouts, creating incentives that run opposite to the collective-benefit logic of shared health data.",
    "pattern_ids": [
      "atomist-libertarianism",
      "surveillance-capitalism"
    ],
    "domain_examples": {
      "state": [
        "US pre-ACA medical underwriting practices"
      ],
      "public_infrastructure": [
        "genetic data discrimination risk under GINA gaps"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 6-2"
  },
  {
    "id": "taiwan-nhi-health-data-model",
    "name": "Taiwan National Health Insurance Data Commons",
    "kind": "instance",
    "signature": "A universal single-payer system generates comprehensive longitudinal health records for nearly the entire population; data is made available (with governance) for public-interest research; rapid COVID-19 response was partly enabled by cross-referencing NHI records with immigration and lab data.",
    "example": "Taiwan's NHI database, covering ~99% of the population, allowed rapid identification of COVID-19 risk factors and efficient mask-distribution logistics by integrating health and civic-identity records.",
    "pattern_ids": [],
    "domain_examples": {
      "public_infrastructure": [
        "Taiwan NHI COVID-19 response",
        "Taiwan mask distribution QR system"
      ]
    },
    "countering_governance_form_ids": [
      "data-coalitions",
      "plural-data-governance"
    ],
    "source_chapter": "Ch. 6-2"
  },
  {
    "id": "centralized-ai-health-diagnosis-displacement",
    "name": "Monist AI Displacing Clinical Judgment in Health",
    "kind": "pattern",
    "signature": "AI diagnostic tools trained on narrow or non-representative datasets are deployed as authoritative, displacing clinical deliberation; patients from under-represented groups receive worse outcomes; medical expertise is deskilled rather than augmented.",
    "example": "AI diagnostic tools trained primarily on data from wealthy, majority-population patients risk encoding and amplifying existing health disparities when deployed as the authoritative decision-layer rather than as a tool augmenting clinician judgment.",
    "pattern_ids": [
      "monist-technocracy"
    ],
    "domain_examples": {
      "public_infrastructure": [
        "dermatology AI trained on light-skin images",
        "sepsis-prediction algorithm bias studies"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 6-2"
  },
  {
    "id": "pharma-patent-monopoly-health",
    "name": "Pharmaceutical Patent Monopoly as ⿻ Failure",
    "kind": "pattern",
    "signature": "Intellectual-property law grants 20-year monopolies on drug formulas; prices are set to extract maximum willingness-to-pay from wealthy markets; access in lower-income countries is structurally blocked; R&D incentives are skewed toward profitable diseases, not neglected ones.",
    "example": "Pharmaceutical companies holding patents on antiretroviral drugs priced them out of reach for HIV/AIDS patients in sub-Saharan Africa through the late 1990s and early 2000s, until compulsory-licensing battles and generic production altered the landscape.",
    "pattern_ids": [
      "intellectual-property-monopoly"
    ],
    "domain_examples": {
      "state": [
        "TRIPS agreement access barriers",
        "COVID-19 vaccine IP waiver debate at WTO"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 6-2"
  },
  {
    "id": "mental-health-platform-harm",
    "name": "Platform Design Causing Mental-Health Harm",
    "kind": "pattern",
    "signature": "Engagement-maximizing algorithmic feeds amplify content that triggers anxiety, depression, social comparison, and eating disorders, especially in adolescents; internal research documenting harm is suppressed; regulatory disclosure is absent.",
    "example": "Internal Facebook/Instagram research leaked in the 2021 Frances Haugen disclosures showed the company knew Instagram worsened body-image issues for a significant share of teenage girls, yet continued its algorithmic feed design.",
    "pattern_ids": [
      "engagement-maximization",
      "surveillance-capitalism"
    ],
    "domain_examples": {
      "online_community": [
        "Instagram teen body-image research suppression"
      ],
      "public_infrastructure": [
        "UK Online Safety Act mental health provisions"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 6-2"
  },
  {
    "id": "frances-haugen-instagram-teen-mental-health",
    "name": "Facebook/Instagram Teen Mental-Health Research Suppression (Haugen)",
    "kind": "instance",
    "signature": "Leaked internal documents reveal platform awareness of mental-health harm; no corrective action taken; disclosure comes only through whistleblower leak.",
    "example": "Frances Haugen's 2021 disclosures revealed that Meta's internal research documented Instagram's negative effects on teenage girls' body image and mental health, but the findings were not acted upon internally nor disclosed to regulators.",
    "pattern_ids": [
      "mental-health-platform-harm",
      "engagement-maximization"
    ],
    "domain_examples": {
      "online_community": [
        "Instagram teen body-image suppression 2021"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 6-2"
  },
  {
    "id": "period-app-data-sale-post-dobbs",
    "name": "Period-Tracking App Data Sale After Dobbs",
    "kind": "instance",
    "signature": "Following the 2022 Dobbs decision, health advocates warned that menstrual-cycle data collected by consumer apps could be subpoenaed or purchased by law-enforcement and prosecutors seeking evidence of abortion.",
    "example": "After the US Supreme Court's 2022 Dobbs ruling, privacy researchers documented that popular period-tracking apps retained and shared sensitive reproductive-health data with third parties, creating legal risk for users in states criminalizing abortion.",
    "pattern_ids": [
      "wearable-health-surveillance-capture",
      "surveillance-capitalism"
    ],
    "domain_examples": {
      "public_infrastructure": [
        "Period-tracking app data sale 2022"
      ],
      "state": [
        "Dobbs reproductive-data risk"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 6-2"
  },
  {
    "id": "health-data-commons-collective-governance",
    "name": "Absence of Collective Health-Data Governance Infrastructure",
    "kind": "pattern",
    "signature": "No institutional layer sits between individual patients and large research/commercial entities to negotiate data terms collectively; patients cannot act as a polity; benefits of pooled health data accrue to intermediaries; alternative models (data trusts, data unions for health) remain marginal.",
    "example": "Absent a collective governance layer, patients contributing data to large biobank or EHR research programs have no mechanism to set terms, receive benefits, or redirect research priorities — mirroring the broader absence of data-coalition infrastructure the book documents.",
    "pattern_ids": [
      "data-rights-decomposition-failure",
      "ostrom-commons-erasure"
    ],
    "domain_examples": {
      "public_infrastructure": [
        "NHS data opt-out vs. collective governance gap",
        "23andMe data sale to pharma"
      ]
    },
    "countering_governance_form_ids": [
      "data-coalitions"
    ],
    "source_chapter": "Ch. 6-2"
  },
  {
    "id": "colonial-health-administration",
    "name": "Colonial Health Administration Model",
    "kind": "pattern",
    "signature": "Healthcare systems in former colonies mirror the administrative forms of the imperial center, with 'development' as an add-on mission. Indigenous models of health and community are excluded from governance. Results are mixed and legitimacy is contested.",
    "example": "In virtually every part of the world, healthcare is administered through a model originating in colonizing powers, usually as a mirror of the forms of administration found in the respective imperial centers but with the additional mission of 'development' tacked on.",
    "pattern_ids": [],
    "domain_examples": {
      "state": [
        "colonial-tropical-medicine-model",
        "canadian-indigenous-health-coadministration",
        "australian-indigenous-health-self-determination"
      ]
    },
    "countering_governance_form_ids": [
      "augmented-deliberation",
      "health-production-society"
    ],
    "source_chapter": "Ch. 6-2"
  },
  {
    "id": "private-health-insurance-adverse-selection",
    "name": "Private Health Insurance Adverse Selection",
    "kind": "pattern",
    "signature": "Insurers with better actuarial information draw off lower-risk individuals by charging less, leaving non-discriminating insurers with an adverse selection of high-risk patients. Private insurance in competitive markets collapses toward health savings plans with no meaningful risk pooling or redistribution.",
    "example": "Private health insurance in a market economy thus tends to reduce to an actuarially informed health savings plan (i.e. with no risk pooling or redistribution), similar to self-managed Health Savings Accounts (HSAs) in the US.",
    "pattern_ids": [
      "atomist-libertarianism",
      "market-atomism-bilateral-exchange"
    ],
    "domain_examples": {
      "state": [
        "us-health-savings-accounts-hsa"
      ]
    },
    "countering_governance_form_ids": [
      "health-production-society"
    ],
    "source_chapter": "Ch. 6-2"
  },
  {
    "id": "health-impact-accounting-failure",
    "name": "Health Impact Accounting Failure",
    "kind": "pattern",
    "signature": "Health services produce outcomes (lives saved, healthier lives) and broader social impacts whose full value is never counted, captured, or rendered tradeable. Win-win health investments remain blocked because the social value of health projects is systematically underrepresented in financing mechanisms.",
    "example": "Since the full social value of health projects is in practice never counted, let alone captured or rendered tradeable, many win-win health investments remain blocked.",
    "pattern_ids": [
      "market-failure-in-social-goods",
      "oss-supermodular-value-gap"
    ],
    "domain_examples": {
      "state": [
        "global-fund-aids-tb-malaria-roi-gap"
      ],
      "public_infrastructure": [
        "blended-finance-benefit-capture-failure"
      ]
    },
    "countering_governance_form_ids": [
      "health-impact-tokenization",
      "quadratic-funding"
    ],
    "source_chapter": "Ch. 6-2"
  },
  {
    "id": "blended-finance-benefit-capture-failure",
    "name": "Blended Finance Private Benefit Capture",
    "kind": "instance",
    "signature": "Blended-finance agreements promise to mobilize additional private funding but in practice allow private investors to capture the benefits of public de-risking while offering little or no financial incentive for beneficiary engagement or equitable benefit sharing.",
    "example": "Existing arrangements have tended to allow private investors to capture the benefits of public de-risking while offering little or no financial incentive to ensure the active engagement of direct (or indirect) beneficiaries or to reward the commitment of, for example, biological, behavioural, or other services by stakeholders and participants.",
    "pattern_ids": [
      "health-impact-accounting-failure",
      "networked-value-capture"
    ],
    "domain_examples": {
      "state": [
        "blended-finance-global-health-instruments"
      ]
    },
    "countering_governance_form_ids": [
      "health-impact-tokenization"
    ],
    "source_chapter": "Ch. 6-2"
  },
  {
    "id": "pandemic-expert-monopoly-policy",
    "name": "Pandemic Expert Monopoly on Policy",
    "kind": "pattern",
    "signature": "Public health policy during pandemics is formulated in closed-room consultations by epidemiological experts, excluding the distributed, localized knowledge of diverse publics. Policymakers systematically misjudge key unknowns that diffuse populations get closer to correct. Public trust and social cohesion erode when policy ignores crowd wisdom.",
    "example": "If diffuse populations of individuals or loosely organized non-health associations, such as soccer clubs, can formulate objectively better pandemic policy than a government that is advised by the world's top epidemiological experts, then governments are turning a blind eye to a critical source of information and analysis.",
    "pattern_ids": [
      "monist-technocracy",
      "technocratic-regulatory-capture"
    ],
    "domain_examples": {
      "state": [
        "covid-19-vaccine-timeline-misjudgment",
        "covid-19-social-distancing-tolerance-misjudgment"
      ],
      "public_infrastructure": [
        "taiwan-mask-supply-citizen-tracking-contrast"
      ]
    },
    "countering_governance_form_ids": [
      "augmented-deliberation",
      "polis-style-clustering"
    ],
    "source_chapter": "Ch. 6-2"
  },
  {
    "id": "covid-19-expert-policy-misjudgment",
    "name": "COVID-19 Expert Policy Misjudgment (2020)",
    "kind": "instance",
    "signature": "In early 2020, expert policymakers estimated vaccine development would take 'at least 18 months' (actual: ~5 months) and that populations would not tolerate social distancing (actual: diverse publics largely led government response in February–March 2020). Diverse publics led government response rather than following it.",
    "example": "Policymakers got these questions badly wrong, estimating 'at least 18 months' for the first and 'no' for the second when '5 months' and 'yes' were closer to correct. In fact, diverse publics worldwide largely led government response rather than following it during February and March of 2020.",
    "pattern_ids": [
      "pandemic-expert-monopoly-policy",
      "monist-technocracy"
    ],
    "domain_examples": {
      "state": [
        "covid-19-who-vaccine-timeline-estimate",
        "covid-19-social-distancing-public-response"
      ]
    },
    "countering_governance_form_ids": [
      "augmented-deliberation"
    ],
    "source_chapter": "Ch. 6-2"
  },
  {
    "id": "medical-data-web2-privacy-tradeoff",
    "name": "Medical Data Web2 Privacy–Utility Tradeoff",
    "kind": "pattern",
    "signature": "Medical administrative data is treated as safe until a system is hacked (phishing, data theft). Web2 medical systems impose an open-ended contingent liability for patient privacy in exchange for access to health services. In the long run, all individuals face data theft. Some diseases remain fatal because of failure to build cryptographic-first health data infrastructure.",
    "example": "Medical administrative data is 'safe' for everyone until the system is hacked because of, for example, a phishing attack: in the long run, we all face data theft with Web2 systems... no doubt some diseases today are still fatal only because of our failure to build such applications.",
    "pattern_ids": [
      "surveillance-capitalism",
      "privacy-identity-tradeoff",
      "data-silo-health-research-barrier"
    ],
    "domain_examples": {
      "public_infrastructure": [
        "web2-medical-ehr-phishing-theft"
      ],
      "state": [
        "post-dobbs-period-app-data-vulnerability"
      ]
    },
    "countering_governance_form_ids": [
      "federated-identity",
      "data-coalitions"
    ],
    "source_chapter": "Ch. 6-2"
  },
  {
    "id": "monist-atomist-health-model",
    "name": "Monist–Atomist Health Model",
    "kind": "pattern",
    "signature": "Health and healthcare are framed atomistically (individual bodies, individual risk, individual treatment) and monistically (standardized global interventions from colonial/imperial administrative models). Achieves major advances against atomistic threats (infectious disease, vaccine-preventable illness) but stalls against social, intersubjective, and non-communicable disease burdens. Half the world still lacks essential health services; mental health and NCD burdens go largely unaddressed.",
    "example": "In the past 75 years, the human race has added 25 years to global life expectancy... These advances were realized through a monist atomist model of health and healthcare... At the same time, progress in health-related Sustainable Development Goals has stalled or reversed.",
    "pattern_ids": [
      "monist-atomism",
      "colonial-health-administration"
    ],
    "domain_examples": {
      "state": [
        "smallpox-eradication-monist-model",
        "gavi-vaccine-alliance-monist-success",
        "sdg-health-stall-reversal"
      ],
      "public_infrastructure": [
        "who-tropical-medicine-colonial-model"
      ]
    },
    "countering_governance_form_ids": [
      "health-production-society",
      "health-impact-tokenization"
    ],
    "source_chapter": "Ch. 6-2"
  },
  {
    "id": "media-ownership-concentration",
    "name": "Media Ownership Concentration",
    "kind": "pattern",
    "signature": "A small number of corporate owners control a disproportionate share of news and media outlets; editorial diversity collapses; local journalism atrophies; coverage converges around the interests of owners and major advertisers.",
    "example": "Consolidation of newspaper and broadcast holdings by a handful of conglomerates, leaving hundreds of local markets with no independently owned daily newspaper.",
    "pattern_ids": [],
    "domain_examples": {
      "state": [
        "FCC media-ownership rule rollbacks"
      ],
      "public_infrastructure": [
        "local-newspaper-closure-wave"
      ]
    },
    "countering_governance_form_ids": [
      "public-interest-media-funding",
      "data-coalitions"
    ],
    "source_chapter": "Ch. 6-3"
  },
  {
    "id": "platform-algorithmic-news-curation",
    "name": "Platform Algorithmic News Curation",
    "kind": "pattern",
    "signature": "A handful of large platforms algorithmically determine what news and information citizens encounter; editorial judgment is replaced by engagement optimization; sensational, divisive, or emotionally arousing content is systematically surfaced over accurate or bridging content.",
    "example": "Facebook's News Feed algorithm deprioritized publisher content after 2018 algorithm changes, devastating traffic to news sites while amplifying outrage-inducing posts.",
    "pattern_ids": [
      "engagement-maximization"
    ],
    "domain_examples": {
      "online_community": [
        "facebook-news-feed-news-deprioritization"
      ],
      "public_infrastructure": [
        "twitter-algorithmic-timeline"
      ]
    },
    "countering_governance_form_ids": [
      "augmented-deliberation",
      "polis-style-clustering"
    ],
    "source_chapter": "Ch. 6-3"
  },
  {
    "id": "source-confidentiality-arms-race",
    "name": "Cryptographic Arms Race in Source Confidentiality",
    "kind": "pattern",
    "signature": "Organizations deploy increasingly sophisticated cryptographic protections on internal documents to prevent leaks; whistleblowers and journalists escalate counter-measures; the result is an escalating arms race that increases technical complexity without necessarily improving the social outcomes of accountability or press freedom.",
    "example": "As zero-knowledge proofs and designated verifier signatures allow journalists to verify source credentials without identity disclosure, organizations can equally deploy these tools to make credential-less document sharing non-credible, creating an 'arms race' rather than better social outcomes.",
    "pattern_ids": [],
    "domain_examples": {
      "state": [
        "wikileaks-organizational-arms-race"
      ],
      "public_infrastructure": [
        "source-confidentiality-zkp-escalation"
      ]
    },
    "countering_governance_form_ids": [
      "zero-knowledge-proofs",
      "designated-verifier-signatures",
      "intersectional-social-identity"
    ],
    "source_chapter": "Ch. 6-4"
  },
  {
    "id": "vr-limited-reach-empathy-gap",
    "name": "VR Empathy Gap — Limited Reach and Nausea Barriers",
    "kind": "pattern",
    "signature": "Immersive shared-reality journalism exists but reaches only limited audiences because of image quality problems, motion-sickness/nausea, and hardware cost. The medium's empathetic potential is not yet realized at scale.",
    "example": "Pioneering VR journalism works such as Milica Zec and Winslow Porter's *Tree* (2017), Decontee Davis's *Surviving Ebola* (2015), and Yasmin Elayat's *Zero Days VR* (2017) reached limited audiences given the image quality and nausea-related challenges of existing VR headsets.",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "vr-journalism-limited-scale"
      ],
      "public_infrastructure": [
        "empathic-vr-adoption-barrier"
      ]
    },
    "countering_governance_form_ids": [
      "immersive-shared-reality",
      "post-symbolic-communication"
    ],
    "source_chapter": "Ch. 6-4"
  },
  {
    "id": "citizen-journalism-verification-deficit",
    "name": "Citizen Journalism Verification Deficit",
    "kind": "pattern",
    "signature": "Citizen journalism and open-source intelligence movements broaden documentation of events but face persistent criticism over bias, rigor of fact verification, and legibility/digestibility for wider audiences. Without structured verification infrastructure, authentic community voices lack credibility pathways.",
    "example": "Citizen journalism has been central to documenting many of the most important events in recent years, from terrorist attacks to wars and police abuse, yet also faces significant criticism and social concern over bias, rigor of verification of facts, and legibility and digestibility.",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "osint-bellingcat-verification-gaps"
      ],
      "movement": [
        "citizen-journalism-police-abuse-documentation"
      ]
    },
    "countering_governance_form_ids": [
      "augmented-deliberation",
      "zero-knowledge-proofs",
      "cryptographic-source-verification"
    ],
    "source_chapter": "Ch. 6-4"
  },
  {
    "id": "carbon-market-monoculture",
    "name": "Carbon Market Monoculture",
    "kind": "pattern",
    "signature": "Environmental governance reduces the complexity of ecosystems and communities to a single metric (carbon price or offset), crowding out biodiversity, indigenous stewardship, and local ecological knowledge in favor of a tradeable commodity.",
    "example": "Carbon offset markets incentivize monoculture tree plantations that sequester carbon on paper while destroying biodiversity and displacing local communities, because the market only prices one dimension of ecological value.",
    "pattern_ids": [],
    "domain_examples": {
      "state": [
        "voluntary-carbon-market-offset-fraud",
        "redd-plus-displacement"
      ],
      "dao": [
        "carbon-dao-monoculture-instance"
      ]
    },
    "countering_governance_form_ids": [
      "quadratic-funding",
      "data-coalitions"
    ],
    "source_chapter": "Ch. 6-4"
  },
  {
    "id": "indigenous-ecological-knowledge-erasure",
    "name": "Indigenous and Local Ecological Knowledge Erasure",
    "kind": "pattern",
    "signature": "Colonial and technocratic environmental governance systems displace or ignore indigenous and community-based ecological knowledge in favor of standardized scientific metrics, eroding the diversity of environmental management approaches that has sustained many ecosystems for centuries.",
    "example": "State-run conservation regimes exclude indigenous stewards from land management decisions, replacing centuries of locally adapted practice with uniform protected-area rules that often worsen ecological outcomes.",
    "pattern_ids": [
      "colonial-standardization",
      "high-modernist-standardization"
    ],
    "domain_examples": {
      "state": [
        "fortress-conservation-indigenous-exclusion"
      ],
      "movement": [
        "land-rights-erasure-conservation"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 6-4"
  },
  {
    "id": "transjurisdictional-environmental-governance-failure",
    "name": "Transjurisdictional Environmental Governance Failure",
    "kind": "pattern",
    "signature": "Fluidity of natural systems — oceans, rivers, atmosphere — crosses political borders, but governance structures remain siloed within nations, cities, or agencies, leaving cross-border environmental problems without collective coordination mechanisms.",
    "example": "Climate change, biodiversity loss, and water management are inherently transjurisdictional, yet existing hierarchical governance structures tied to single towns, cities, or countries cannot address them, while open-source civic hacking culture and GFMs offer cross-disciplinary alternatives.",
    "pattern_ids": [],
    "domain_examples": {
      "state": [
        "nasa-ibm-geospatial-foundation-model"
      ],
      "public_infrastructure": [
        "lass-taiwan-civil-iot"
      ]
    },
    "countering_governance_form_ids": [
      "gfm-environmental-cogovernance",
      "data-coalitions",
      "civic-hacking-culture"
    ],
    "source_chapter": "Ch. 6-5"
  },
  {
    "id": "citizen-science-displacement",
    "name": "Displacement of Citizen Science by Authoritative Centralized Data",
    "kind": "pattern",
    "signature": "Environmental data collection and interpretation is monopolized by government agencies or expert institutions, crowding out local wisdom, community-gathered sensing, and citizen science — making communities research subjects rather than data-driven actors.",
    "example": "Before systems like LASS (Location Aware Sensor System) in Taiwan, environmental data relied on government agencies for input and maintenance, limiting community participation and local wisdom from entering the public knowledge base.",
    "pattern_ids": [],
    "domain_examples": {
      "public_infrastructure": [
        "lass-taiwan-civil-iot"
      ],
      "movement": [
        "civil-iot-taiwan-data-coalition"
      ]
    },
    "countering_governance_form_ids": [
      "data-coalitions",
      "citizen-science-open-sensing"
    ],
    "source_chapter": "Ch. 6-5"
  },
  {
    "id": "lass-taiwan-civil-iot-instance",
    "name": "LASS / Civil IoT Taiwan — Authoritative Data Displacement of Citizen Science",
    "kind": "instance",
    "signature": "LASS emerged precisely to counter centralized environmental data control: open-source citizen sensing replaced reliance on government agencies as the sole source of environmental truth.",
    "example": "Taiwan's Location Aware Sensor System (LASS) is an open-source environment sensing network that empowers ordinary citizens to gather and share information freely, developing into a model of digital communication that incorporates local wisdom through citizen science, rather than relying on authoritative organizations to shape public perceptions.",
    "pattern_ids": [
      "citizen-science-displacement",
      "environmental-data-silo"
    ],
    "domain_examples": {
      "public_infrastructure": [
        "lass-taiwan-civil-iot",
        "civil-iot-taiwan-data-coalition"
      ]
    },
    "countering_governance_form_ids": [
      "data-coalitions",
      "citizen-science-open-sensing"
    ],
    "source_chapter": "Ch. 6-5"
  },
  {
    "id": "whanganui-river-natural-personhood-instance",
    "name": "Whanganui River Legal Personhood — Rights Without ⿻ Infrastructure",
    "kind": "instance",
    "signature": "New Zealand granted the Whanganui River legal personhood with appointed guardians, but the case exemplifies the gap between legal recognition and operational ⿻ governance infrastructure for representing ecosystem interests.",
    "example": "The Whanganui river in New Zealand was granted natural legal personhood with inherent rights and appointed guardians, signifying a shared commitment to preserving these ecosystems for future generations — yet without data coalitions or GFM-based digital twins, guardianship remains institutionally thin.",
    "pattern_ids": [
      "natural-personhood-governance-gap"
    ],
    "domain_examples": {
      "state": [
        "whanganui-river-personhood-new-zealand"
      ]
    },
    "countering_governance_form_ids": [
      "gfm-environmental-cogovernance",
      "data-coalitions"
    ],
    "source_chapter": "Ch. 6-5"
  },
  {
    "id": "nasa-ibm-geospatial-model-instance",
    "name": "NASA–IBM Geospatial Foundation Model — Transjurisdictional Environmental AI",
    "kind": "instance",
    "signature": "A cross-institutional open-science collaboration producing a GFM from NASA earth observation data, tackling environmental justice across natural spaces and human communities — cited as an instance of cogovernance across borders overcoming single-jurisdiction limitations.",
    "example": "The US National Aeronautics and Space Administration's ongoing collaboration with IBM on a Geospatial Foundation Model based on NASA's earth observation data tackles crucial notions of environmental justice for natural spaces and human communities alike.",
    "pattern_ids": [
      "transjurisdictional-environmental-governance-failure"
    ],
    "domain_examples": {
      "public_infrastructure": [
        "nasa-ibm-geospatial-foundation-model"
      ]
    },
    "countering_governance_form_ids": [
      "gfm-environmental-cogovernance"
    ],
    "source_chapter": "Ch. 6-5"
  },
  {
    "id": "standardized-testing-monoculture",
    "name": "Standardized Testing Monoculture",
    "kind": "pattern",
    "signature": "A single, narrow metric (test score) stands in for the full complexity of learning; curricula converge toward teaching the test; diverse forms of knowledge and skill are crowded out; credential signals dominate over actual competence.",
    "example": "High-stakes standardized examinations that compress the richness of student learning into a single ranked score, producing curricula narrowed to tested domains and excluding collaborative, creative, and contextual knowledge.",
    "pattern_ids": [],
    "domain_examples": {
      "state": [
        "gaokao-monoculture-instance",
        "no-child-left-behind-testing-instance"
      ],
      "public_infrastructure": [
        "standardized-curriculum-lock-in"
      ]
    },
    "countering_governance_form_ids": [
      "plural-learning-credentials",
      "augmented-deliberation"
    ],
    "source_chapter": "Ch. 6-5"
  },
  {
    "id": "gaokao-monoculture-instance",
    "name": "China Gaokao Single-Metric College Admissions",
    "kind": "instance",
    "signature": "A single national exam score determines university admission for hundreds of millions of students, concentrating educational incentives around one metric and suppressing diverse learning pathways.",
    "example": "China's Gaokao university entrance examination, a single high-stakes test whose score is the near-exclusive determinant of higher-education access, exemplifying standardized-testing monoculture at national scale.",
    "pattern_ids": [
      "standardized-testing-monoculture"
    ],
    "domain_examples": {
      "state": [
        "gaokao-monoculture-instance"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 6-5"
  },
  {
    "id": "ai-personalization-without-collaboration",
    "name": "AI Personalization Without Collaboration",
    "kind": "pattern",
    "signature": "Adaptive learning systems optimize the individual student's path through content but do so in isolation, removing collaborative sense-making, peer learning, and the development of shared civic knowledge; personalization becomes a vector for atomization rather than empowerment.",
    "example": "Algorithmic tutoring systems that tailor content to each learner's performance history but eliminate the collaborative group work, debate, and joint inquiry through which students develop capacity for democratic participation.",
    "pattern_ids": [
      "atomist-libertarianism"
    ],
    "domain_examples": {
      "public_infrastructure": [
        "ai-personalization-without-collaboration"
      ],
      "online_community": [
        "ai-personalization-without-collaboration"
      ]
    },
    "countering_governance_form_ids": [
      "augmented-deliberation",
      "plural-learning-credentials"
    ],
    "source_chapter": "Ch. 6-5"
  },
  {
    "id": "surveillance-ed-tech-control",
    "name": "Surveillance EdTech and Learner Control",
    "kind": "pattern",
    "signature": "Educational technology platforms collect granular data on student behavior, attention, and performance; this data is used for institutional control, profiling, or commercial exploitation rather than learner empowerment; surveillance displaces trust-based pedagogy.",
    "example": "Proctoring software that monitors eye movements, keystrokes, and screen activity during remote exams, using behavioral surveillance to enforce compliance rather than assess genuine understanding.",
    "pattern_ids": [
      "surveillance-capitalism"
    ],
    "domain_examples": {
      "public_infrastructure": [
        "surveillance-ed-tech-control"
      ],
      "online_community": [
        "surveillance-ed-tech-control"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 6-5"
  },
  {
    "id": "civic-knowledge-erosion",
    "name": "Civic Knowledge Erosion Through Fragmented Learning",
    "kind": "pattern",
    "signature": "As educational content delivery is individualized and fragmented across platforms, the shared knowledge base that enables civic participation and democratic deliberation thins out; students lack common reference points for public reasoning.",
    "example": "Highly personalized content feeds in online learning platforms that ensure no two students encounter the same civic, historical, or scientific content, eroding the shared factual commons that democratic deliberation requires.",
    "pattern_ids": [
      "homophily-echo-chamber",
      "atomist-fragmentation"
    ],
    "domain_examples": {
      "public_infrastructure": [
        "civic-knowledge-erosion"
      ],
      "online_community": [
        "civic-knowledge-erosion"
      ]
    },
    "countering_governance_form_ids": [
      "augmented-deliberation"
    ],
    "source_chapter": "Ch. 6-5"
  },
  {
    "id": "plural-learning-credentials",
    "name": "⿻ Learning Credentials / Plural Education Infrastructure",
    "kind": "pattern",
    "signature": "Absence of interoperable, community-anchored credential infrastructure means learners cannot assemble composable records of diverse skills, local knowledge, and collaborative achievement; the design space for plural learning governance remains unfilled.",
    "example": "The gap between the richness of what students actually learn across communities, mentorships, and open platforms versus the narrow degree-based credential system that labor markets and civic institutions recognize, illustrating the need for plural, portable learning records.",
    "pattern_ids": [
      "credential-monopoly-learning",
      "standardized-testing-monoculture"
    ],
    "domain_examples": {
      "public_infrastructure": [
        "plural-learning-credentials"
      ],
      "state": [
        "plural-learning-credentials"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 6-5"
  },
  {
    "id": "edtech-engagement-without-community",
    "name": "Edtech Engagement Without Collaborative Community",
    "kind": "pattern",
    "signature": "Online learning platforms optimize for individual completion metrics and personalization without fostering cross-cultural collaboration, open content, or community co-creation; learners remain atomized consumers rather than co-creators of knowledge.",
    "example": "AI can help build more broadly inclusive cross-cultural communication models, but if neutral datasets and bias detection tools are not used, datasets may corrupt or influence generations of AI.",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "platform-ed-tech-data-silo",
        "ai-personalization-without-collaboration"
      ]
    },
    "countering_governance_form_ids": [
      "augmented-deliberation"
    ],
    "source_chapter": "Ch. 6-6"
  },
  {
    "id": "biased-training-data-generational-corruption",
    "name": "Biased Training Data Corrupting Generational AI Learning",
    "kind": "pattern",
    "signature": "AI systems trained on datasets lacking neutral, diverse, or bias-detected inputs propagate and amplify cultural biases across generations of learners; harmful or discriminatory language goes unchecked, shaping future datasets in a self-reinforcing loop.",
    "example": "If not done so, these datasets may corrupt or influence generations of AI. Labeled instructions will start to change, undermining the important learning path of broader thought communication.",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "llm-opinion-homogenization"
      ],
      "state": [
        "civic-knowledge-erosion"
      ]
    },
    "countering_governance_form_ids": [
      "augmented-deliberation"
    ],
    "source_chapter": "Ch. 6-6"
  },
  {
    "id": "taiwan-2019-curriculum-resilience-instance",
    "name": "Taiwan 2019 Basic Education Curriculum Resilience",
    "kind": "instance",
    "signature": "A national curriculum reform that combines physical and digital learning tools, centres 'spontaneity, interaction, and common good' as core values, and yields measurable pandemic resilience gains (PISA/ICCS 2022).",
    "example": "Taiwan's diverse co-creation teaching model of 2019 Basic Education Curriculum successfully combines physical and digital learning tools, and regards 'spontaneity, interaction, and common good' as new core values, inspiring a sense of mission towards global sustainable development.",
    "pattern_ids": [
      "rote-memorization-rigidity",
      "one-size-fits-all-curriculum"
    ],
    "domain_examples": {
      "state": [
        "taiwan-2019-curriculum-resilience-instance"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 6-6"
  },
  {
    "id": "futurelearn-open-university-platform-instance",
    "name": "FutureLearn / Open University Cross-Cultural Online Learning",
    "kind": "instance",
    "signature": "Europe's largest online course platform, backed by the UK Open University, offering free courses including English learning for refugees and UNESCO-partnered lifelong learning projects — countering access exclusion and credential monopoly.",
    "example": "FutureLearn is Europe's largest online course platform, bringing together course resources from universities and professional institutions; it also collaborates with UNESCO on global lifelong learning projects and offers free courses for refugees, allowing anyone to access quality education at low or zero cost.",
    "pattern_ids": [
      "digital-divide-learning-exclusion",
      "credential-monopoly-learning"
    ],
    "domain_examples": {
      "online_community": [
        "futurelearn-open-university-platform-instance"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 6-6"
  },
  {
    "id": "minerva-mobile-university-instance",
    "name": "Minerva Mobile University",
    "kind": "instance",
    "signature": "A globally-recruited, campus-free university where students rotate through different cities each semester, using online small-group models to practise critical thinking and cross-cultural practical application — disrupting traditional campus and credential monopoly.",
    "example": "Minerva breaks the limitations of traditional campuses. Students migrate to different cities every semester, interacting with diverse teaching methods and cultural characteristics through practical application, adopting global recruitment and online small group models, encouraging critical thinking and practical application-oriented cooperation.",
    "pattern_ids": [
      "rote-memorization-rigidity",
      "credential-monopoly-learning"
    ],
    "domain_examples": {
      "online_community": [
        "minerva-mobile-university-instance"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 6-6"
  },
  {
    "id": "talk-to-the-city-taiwan-instance",
    "name": "Talk to the City — Taiwan Augmented Deliberation for AI Alignment",
    "kind": "instance",
    "signature": "Taiwan's Ministry of Digital Affairs deployed the open-source 'Talk to the City' tool in its Alignment Assemblies / Ideathon to use AI-assisted clustering for public deliberation, ensuring completeness of information, cross-cultural understanding, and social resilience against AI bias.",
    "example": "Taiwan has used augmented deliberation technologies such as 'Talk to the City', based on the concept of open source, to mitigate the impact of AI. Through public participation, it ensures the completeness of information, transcends cultural understanding, and ensures social resilience.",
    "pattern_ids": [
      "biased-training-data-generational-corruption",
      "llm-deliberation-legitimacy-gap"
    ],
    "domain_examples": {
      "public_infrastructure": [
        "talk-to-the-city-taiwan-instance"
      ]
    },
    "countering_governance_form_ids": [
      "augmented-deliberation"
    ],
    "source_chapter": "Ch. 6-6"
  },
  {
    "id": "us-neoliberal-tech-model",
    "name": "US Neoliberal Private-Sector Technology Model",
    "kind": "pattern",
    "signature": "Government disengages from technology development beyond defense and welfare; privatization of operating systems, social networks, cloud, and identity infrastructure leads to monopolistic dominance; antitrust is the primary (and largely insufficient) corrective tool.",
    "example": "Despite pioneering ARPANET, the US privatized almost all further development of personal computing, operating systems, physical and social networking, and cloud infrastructure, allowing monopolistic dominance to emerge in search, smartphone applications, cloud services, and operating systems.",
    "pattern_ids": [],
    "domain_examples": {
      "state": [
        "US antitrust against Microsoft",
        "New Brandeis movement antitrust enforcement failures"
      ],
      "public_infrastructure": [
        "ARPANET privatization",
        "nsfnet-backbone-privatization"
      ]
    },
    "countering_governance_form_ids": [
      "digital-public-infrastructure",
      "arpa-coopetitive-model"
    ],
    "source_chapter": "Ch. 7-0"
  },
  {
    "id": "prc-state-steered-tech-model",
    "name": "PRC State-Steered Technology Development Model",
    "kind": "pattern",
    "signature": "Five-Year Plans direct state power toward national security, surveillance, and chip development; crackdowns on consumer/fintech activity not aligned with party priorities; foundation model investment tightly coupled to censorship and dissent monitoring requirements.",
    "example": "CCP Five-Year Plans have increasingly directed regulatory actions, party-driven directives to domestic technology companies, and government-driven R&D toward hard/physical technology, national security, chip development, and surveillance, with a dramatic fall in fintech and web3 activity following crackdowns.",
    "pattern_ids": [
      "authoritarian-digital-governance"
    ],
    "domain_examples": {
      "state": [
        "PRC 14th Five-Year Plan technology steering",
        "PRC crackdown on fintech and web3"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 7-0"
  },
  {
    "id": "eu-regulatory-importer-model",
    "name": "EU Regulatory-Importer Technology Model",
    "kind": "pattern",
    "signature": "Jurisdiction primarily imports technical frameworks from US and PRC; leverages market power to impose human-rights-oriented regulation (Brussels Effect) but does not define an alternative positive technological model; copycat legislation in other jurisdictions.",
    "example": "The EU has primarily acted as an importer of technical frameworks, but has set global standards for privacy (GDPR), AI (AI Act), and competition (DSA, DMA, Data Act), shaping behavior of both US and Chinese firms who seek to sell into the European market without defining an alternative positive technological model.",
    "pattern_ids": [],
    "domain_examples": {
      "state": [
        "GDPR as Brussels Effect privacy standard",
        "EU AI Act",
        "Digital Markets Act / Digital Services Act"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 7-0"
  },
  {
    "id": "military-technocracy-agenda-setting",
    "name": "Military Technocracy as Illegitimate Agenda-Setter for Digital Infrastructure",
    "kind": "pattern",
    "signature": "Digital infrastructure development is centered in military-industrial complexes without broad public deliberation on mission; legitimacy cannot be sustained as digital technology shapes every aspect of contemporary life beyond national security; public has no meaningful role in shaping the direction of development.",
    "example": "Lick observed that even by the late 1970s the ARPA model centered around the American military-industrial complex was already a poor fit; he argued that 'decisions about the development and exploitation of computer technology must be made not only in the public interest but in the interest of giving the public itself the means to enter into the decision-making processes that will shape their future.'",
    "pattern_ids": [
      "monist-technocracy"
    ],
    "domain_examples": {
      "state": [
        "ARPA IPTO post-1970s legitimacy decline",
        "military-centered digital agenda without democratic mandate"
      ]
    },
    "countering_governance_form_ids": [
      "digital-ministries-network",
      "augmented-deliberation"
    ],
    "source_chapter": "Ch. 7-0"
  },
  {
    "id": "third-sector-legal-infrastructure-gap",
    "name": "Legal Infrastructure Gap for Transnational Democratic Non-Profit Technology Organizations",
    "kind": "pattern",
    "signature": "Open-source and civil-society technology organizations lack legal frameworks that support their non-profit orientation and international presence simultaneously; DAOs face legal barriers in most jurisdictions; data coalitions lack collective-bargaining-equivalent protections; the competitive disadvantage of third-sector technology providers is structural.",
    "example": "The Open Collective Foundation was created almost exclusively to allow open-source organizations to maintain non-profit orientation and international presence simultaneously, but despite taking a substantial cut of project revenues was unable to sustain itself and is in the process of dissolving. DAOs constantly run into legal barriers that only a few jurisdictions like Wyoming have just begun to address.",
    "pattern_ids": [
      "third-sector-sustainability-gap"
    ],
    "domain_examples": {
      "dao": [
        "DAO legal barriers in most jurisdictions",
        "Wyoming DAO legislation as partial exception"
      ],
      "public_infrastructure": [
        "Open Collective Foundation dissolution",
        "OSS organizations lacking transnational legal forms"
      ]
    },
    "countering_governance_form_ids": [
      "data-coalitions"
    ],
    "source_chapter": "Ch. 7-0"
  },
  {
    "id": "open-collective-foundation-dissolution",
    "name": "Open Collective Foundation Dissolution",
    "kind": "instance",
    "signature": "A fiscal host created specifically to support international non-profit open-source organizations was unable to sustain itself financially despite charging substantial fees, illustrating the structural disadvantage of third-sector technology providers.",
    "example": "The Open Collective Foundation was created almost exclusively for the purpose of allowing open-source organizations to maintain non-profit orientation and international presence, and helped support the Plurality project, but despite taking a substantial cut of project revenues was unable to sustain itself and is in the process of dissolving as of this writing.",
    "pattern_ids": [
      "third-sector-legal-infrastructure-gap",
      "third-sector-sustainability-gap"
    ],
    "domain_examples": {
      "public_infrastructure": [
        "Open Collective Foundation dissolution 2024"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 7-0"
  },
  {
    "id": "digital-tax-avoidance-intangible-assets",
    "name": "Digital Sector Tax Avoidance via Geographic Ambiguity and Intangible Assets",
    "kind": "pattern",
    "signature": "Data, network effects, and employee know-how can be booked in low-tax jurisdictions regardless of where value is created; free services with implicit surveillance bargains escape labor and value-added taxation; digital monopolies extract value from transnational commons without proportionate contribution to public infrastructure.",
    "example": "Data and networks of collaboration and know-how among employees at companies, often spanning national borders, can often be booked in countries with low corporate tax rates even if they mostly occur in jurisdictions with higher rates. Many free services come with an implicit bargain of surveillance, leading neither the service nor the implicit labor to be taxed as it would be if this price were explicit.",
    "pattern_ids": [
      "networked-value-capture",
      "surveillance-capitalism"
    ],
    "domain_examples": {
      "state": [
        "Big Tech profit-shifting to low-tax jurisdictions",
        "Implicit data/attention exchange escaping taxation"
      ],
      "public_infrastructure": [
        "Cloud monopolies extracting value without contributing to digital public infrastructure"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 7-0"
  },
  {
    "id": "fait-accompli-techno-lock-in",
    "name": "Fait Accompli Techno-Lock-In",
    "kind": "pattern",
    "signature": "The window for democratic course-correction closes as everyday technology becomes deeply dependent on a particular AI or metaverse architecture before alternative governance structures are in place; late-stage reversal becomes practically impossible.",
    "example": "The Conclusion warns that within three to five years 'a critical mass of the technology that people and companies use every day will have become deeply dependent on \"AI\" and \"the metaverse\". At that point, we won't be able to reverse the fait accompli that Technocracy and Libertarianism have generated for us.'",
    "pattern_ids": [
      "monist-technocracy",
      "atomist-libertarianism"
    ],
    "domain_examples": {
      "public_infrastructure": [
        "Proprietary AI infrastructure becoming default civic layer before public alternatives exist"
      ],
      "state": [
        "Platform-dependent government services with no migration path"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Conclusion"
  }
];
