import type { GovernanceForm } from '../types.js';

export const GOVERNANCE_FORMS: GovernanceForm[] = [
  {
    "id": "digital-democracy",
    "name": "Digital Democracy",
    "description": "Digital Democracy, as framed by the Civilization VI analogy Weyl and Tang invoke, is the third techno-ideology of the Information Era — distinct from both Synthetic Technocracy (AI-driven centralization) and Corporate Libertarianism (crypto-driven atomization). It envisions technology as a tool for deepening and scaling democratic participation, augmenting human collective cognition rather than replacing it, and facilitating rich communication and connection across diverse communities. The book presents large-scale Digital Democracy as a dream 'we have only begun to imagine, one that requires unprecedented technology to have any chance of being realized,' pointing to Taiwan as the most advanced real-world instantiation.",
    "diagnostic_questions": [
      "Does the technology in question augment human collective decision-making rather than replacing or bypassing it?",
      "Does the design facilitate communication and connection across differences rather than concentrating control in a small group of engineers or capital holders?",
      "Does the governance approach depend on meaningful public participation, consent mechanisms, and legitimation beyond periodic elections?",
      "Is there active public-sector investment and facilitation, rather than withdrawal or hostility, toward this technological direction?",
      "Does the technological path resist both the centralizing tendencies of AI technocracy and the atomizing tendencies of crypto libertarianism?"
    ],
    "countered_failure_mode_ids": [
      "monist-technocracy",
      "atomist-libertarianism",
      "engagement-maximization",
      "authoritarian-digital-governance"
    ],
    "example_case_ids": [],
    "source_chapter": "Ch. 2-0"
  },
  {
    "id": "intelligence-augmentation",
    "name": "Intelligence Augmentation (IA)",
    "description": "Intelligence Augmentation (IA), as the book uses the term, refers to the design trajectory in which technology complements and expands individual and collective human creativity rather than automating or replacing human labor and cognition. Weyl and Tang identify the personal computer (1980s), the internet (1990s), and smartphones (2000s) as the canonical IA technologies — none fitting neatly into either the Technocratic or Libertarian stories. Acemoglu and Restrepo's framing of 'reinstatement' (technologies that create new tasks for labor) versus 'displacement' (automation) is cited to show that IA-oriented technological directions produced the balanced productivity and income-growth of the mid-century Golden Age, while their decline contributed to the Digital Stagnation.",
    "diagnostic_questions": [
      "Does the technology primarily expand the range of tasks humans can perform, rather than substituting for human labor?",
      "Is productivity growth associated with this technology broadly shared across the income distribution?",
      "Does the technology facilitate richer communication and collaboration rather than market transactions, secrecy, or private property enforcement?",
      "Is the technology designed as a complement to human judgment rather than a replacement for it?",
      "Does the development history show roots in public or academic institutions oriented toward human empowerment rather than profit-driven automation?"
    ],
    "countered_failure_mode_ids": [
      "monist-technocracy",
      "automation-displacement"
    ],
    "example_case_ids": [],
    "source_chapter": "Ch. 2-0"
  },
  {
    "id": "tridemism",
    "name": "Tridemism (三民主義 / Three Principles of the People)",
    "description": "Tridemism is the official governing philosophy of the Republic of China, articulated by Sun Yat-Sen in 1905, comprising three principles: 民族/Mínzú (civil clan / nationalism, emphasizing ethnic pluralism), 民權/Mínquán (civil rights / democracy, combining election, recall, initiative, referendum, and five-Yuan separation of powers), and 民生/Mínshēng (civil livelihood / socialism, drawing on Georgist land value taxation, cooperative enterprise, and anti-monopoly stances). The philosophy synthesized Confucian traditions, Japanese democratic reform influences, Christian thought, American pragmatism via John Dewey, and Henry George's political economy. In Taiwan, Tridemism underpinned constitutional provisions supporting cooperative enterprise and land reform, contributing to egalitarian economic foundations and a robust Third Sector.",
    "diagnostic_questions": [
      "Does the governance design combine political rights (election, recall, initiative, referendum) with economic equity mechanisms such as land value taxation or cooperative ownership?",
      "Is ethnic or cultural pluralism (多元) embedded structurally in the constitutional or institutional design rather than treated as an afterthought?",
      "Does the framework draw on multiple philosophical traditions (e.g., Confucian, pragmatist, democratic, cooperative) rather than a single ideological lineage?",
      "Are there explicit constitutional provisions supporting cooperative enterprises or restricting private monopoly power?",
      "Does the governance philosophy connect democratic participation to livelihood and material welfare, not only to formal political rights?"
    ],
    "countered_failure_mode_ids": [
      "atomist-libertarianism",
      "monist-technocracy"
    ],
    "example_case_ids": [
      "roc-land-reform-taiwan",
      "taiwan-cooperative-sector"
    ],
    "source_chapter": "Ch. 2-1"
  },
  {
    "id": "five-yuan-separation-of-powers",
    "name": "Five-Yuan Separation of Powers",
    "description": "The ROC constitutional framework divides governmental power among five Yuans rather than the European three-branch model: the Legislative, Executive, and Judicial branches are supplemented by the Control Yuan (oversight and audit, drawing on Confucian censorate traditions) and the Examination Yuan (civil service credentialing). This design reflects Sun Yat-Sen's synthesis of Western democratic structures with Chinese institutional traditions, aiming to prevent concentration of power and embed accountability through multiple independent bodies. Taiwan's actual democratic practice has evolved around this framework, with the system providing structural checks that differ from both Westminster and US constitutional models.",
    "diagnostic_questions": [
      "Does the governance system include dedicated bodies for oversight/audit and for credentialing/examination separate from the legislature and executive?",
      "Are accountability mechanisms drawn from multiple cultural or historical traditions rather than a single constitutional lineage?",
      "Does the design structurally prevent any single branch from consolidating control over both law-making and civil service selection?",
      "Is there an independent body with the mandate to investigate and impeach officials outside of the ordinary legislative process?"
    ],
    "countered_failure_mode_ids": [
      "monist-technocracy"
    ],
    "example_case_ids": [],
    "source_chapter": "Ch. 2-1"
  },
  {
    "id": "sunflower-movement-reverse-mentorship",
    "name": "Reverse Mentorship / Youth-Government Co-governance",
    "description": "Following the 2014 Sunflower Movement occupation of Taiwan's legislature, the government at the time gained respect for the protesters and ministers invited younger 'reverse mentors' drawn from youth and civil society to help them understand emerging civic and digital concerns. This practice — government ministers actively learning from and co-creating policy with younger digital natives and civic society actors — became institutionalized through roles such as the world's first minister in charge of digital participation, and eventually the creation of the Ministry of Digital Affairs in 2022. The model represents a structural inversion of hierarchical knowledge flow between state and civil society, channeling protest energy into collaborative governance innovation.",
    "diagnostic_questions": [
      "Does the governance design include formal mechanisms for younger or less institutionally powerful actors to educate and reshape senior decision-makers?",
      "Is there a pathway from civil society protest or occupation to institutionalized co-governance roles?",
      "Are digital participation roles embedded within government at a ministerial level, not just as advisory committees?",
      "Does the process result in lasting institutional changes (new ministries, new parties, policy reversals) rather than symbolic consultation?"
    ],
    "countered_failure_mode_ids": [
      "monist-technocracy"
    ],
    "example_case_ids": [
      "sunflower-movement",
      "vtaiwan-deliberation"
    ],
    "source_chapter": "Ch. 2-1"
  },
  {
    "id": "vtaiwan-deliberation",
    "name": "vTaiwan Deliberative Process",
    "description": "vTaiwan is a participatory governance process developed in Taiwan that combines online and offline deliberation to produce actionable policy recommendations. It uses tools like Pol.is to surface areas of broad consensus across diverse participants, then translates that consensus into regulatory proposals that government agencies commit to act upon. The process moves through structured phases — from problem framing to open consultation to stakeholder deliberation to concrete legislative or regulatory output — and is facilitated by g0v civic hackers working in collaboration with government ministers.",
    "diagnostic_questions": [
      "Is there a contested regulatory or policy question where multiple stakeholder groups hold divergent interests?",
      "Is there a government body willing to commit to acting on deliberative outcomes?",
      "Can the process combine asynchronous online input with structured in-person dialogue?",
      "Are civic technologists available to facilitate and build the supporting tools?",
      "Does the issue lend itself to a phase-based process moving from open consultation toward concrete legislative output?"
    ],
    "countered_failure_mode_ids": [
      "monist-technocracy",
      "engagement-maximization"
    ],
    "example_case_ids": [
      "vtaiwan"
    ],
    "source_chapter": "Ch. 2-2"
  },
  {
    "id": "polis-clustering",
    "name": "Pol.is Opinion Clustering",
    "description": "Pol.is is an open-source surveying and deliberation tool that collects short statements from participants and uses dimensionality reduction and clustering algorithms to visualize areas of agreement and disagreement across a population. Rather than amplifying conflict, it surfaces 'rough consensus' — statements that win majority support across otherwise opposing clusters — giving facilitators and policymakers a map of where diverse groups converge. It has been deployed in vTaiwan consultations and other civic contexts to move large-scale online conversations toward actionable common ground.",
    "diagnostic_questions": [
      "Is there a need to surface consensus across a large, diverse, and potentially polarized group?",
      "Would a visual map of opinion clusters help facilitators identify bridging positions?",
      "Is the policy question one where participants can meaningfully respond to short opinion statements?",
      "Is there value in separating 'divisive' statements from 'consensus' statements before moving to deliberation?",
      "Can the process tolerate asynchronous, open-ended participation at scale?"
    ],
    "countered_failure_mode_ids": [
      "engagement-maximization",
      "monist-technocracy"
    ],
    "example_case_ids": [
      "vtaiwan",
      "polis-bowling-green"
    ],
    "source_chapter": "Ch. 2-2"
  },
  {
    "id": "g0v-civic-hacking",
    "name": "g0v (gov-zero) Civic Hacking",
    "description": "g0v is a decentralized Taiwanese civic-tech community that forks government websites and data services, replacing the 'o' in '.gov' with a zero to signal civic alternatives to official infrastructure. Contributors build open-source tools — from budget visualization to parliamentary transcript search to mask availability maps — outside formal government structures, then offer them back to government agencies willing to adopt them. The model treats government data and services as a commons to be improved collaboratively, blurring the boundary between civil society and the state.",
    "diagnostic_questions": [
      "Is there government data or a public service that could be made more accessible or legible through civic redesign?",
      "Are there volunteer technologists willing to work outside official structures to build public-interest tools?",
      "Is there a culture of forking and open-source contribution that could be redirected toward civic infrastructure?",
      "Would a 'show, don't tell' approach — building a working alternative — be more effective than lobbying for change?",
      "Is there a government agency that might adopt a community-built tool if it proved its value?"
    ],
    "countered_failure_mode_ids": [
      "monist-technocracy",
      "atomist-libertarianism"
    ],
    "example_case_ids": [
      "g0v",
      "moedict",
      "mask-map-taiwan"
    ],
    "source_chapter": "Ch. 2-2"
  },
  {
    "id": "open-government-participation",
    "name": "Open Government with Participation Infrastructure",
    "description": "Taiwan's open government model, developed after the Sunflower Movement and institutionalized under Digital Minister Audrey Tang, embeds participatory mechanisms — including collaborative meetings, public petitions thresholds, and civic-tech integrations — directly into executive branch operations. Government agencies are required to engage with citizen petitions that exceed a signature threshold, and 'participation officers' within agencies serve as bridges between civil society and bureaucratic process. The model treats transparency and participation not as add-ons but as operating principles of the executive branch itself.",
    "diagnostic_questions": [
      "Is there an executive agency willing to institutionalize participation officers or equivalents?",
      "Does the government publish its data and deliberative processes in machine-readable, open formats?",
      "Is there a petition or threshold mechanism that triggers mandatory government engagement?",
      "Are civic technologists embedded in or formally liaising with government agencies?",
      "Does the participation infrastructure connect to actual decision-making authority, not just advisory processes?"
    ],
    "countered_failure_mode_ids": [
      "monist-technocracy",
      "authoritarian-digital-governance"
    ],
    "example_case_ids": [
      "vtaiwan",
      "join-platform",
      "presidential-hackathon"
    ],
    "source_chapter": "Ch. 2-2"
  },
  {
    "id": "quadratic-voting",
    "name": "Quadratic Voting",
    "description": "Quadratic Voting (QV) is a mechanism that allows participants to express not just the direction but the intensity of their preferences across a range of options. Each participant is allocated a budget of voice credits, and the cost of casting multiple votes for a single option rises quadratically, so casting k votes costs k² credits. Taiwan's Presidential Hackathon used QV to let citizens and civil servants select winning projects, making it likely that every participant would have supported at least one winner and allowing those with strong preferences to meaningfully boost favored projects.",
    "diagnostic_questions": [
      "Are participants choosing among multiple options where the strength of preference matters, not just direction?",
      "Is there a risk that a simple majority vote would drown out intensely held minority preferences?",
      "Can participants be allocated a finite budget of voice credits to create meaningful trade-offs?",
      "Is the goal to surface broad consensus while also amplifying strong minority support?"
    ],
    "countered_failure_mode_ids": [
      "engagement-maximization",
      "captured-dao-plutocracy"
    ],
    "example_case_ids": [
      "presidential-hackathon"
    ],
    "source_chapter": "Ch. 2-2"
  },
  {
    "id": "crowdsourced-fact-checking",
    "name": "Crowdsourced Fact-Checking",
    "description": "Crowdsourced fact-checking harnesses networks of citizen volunteers who rapidly respond to trending social media content and messages forwarded from private channels to a public comment box. Research comparing Taiwan's Cofacts platform to professional fact-checking services found that crowdsourced systems can respond faster, with equal accuracy, and more engagingly than bandwidth-constrained professional checkers. This model combines speed and scale with civic engagement, embedding information integrity directly into the communities most affected by misinformation.",
    "diagnostic_questions": [
      "Is the volume of potentially misleading content too high for professional fact-checkers to address alone?",
      "Are there communities of engaged citizens with the contextual knowledge to evaluate specific rumors?",
      "Does the misinformation spread primarily through private messaging channels that are hard for institutions to monitor?",
      "Is there a need to respond in culturally resonant and engaging ways rather than through authoritative institutional voice?"
    ],
    "countered_failure_mode_ids": [
      "engagement-maximization",
      "authoritarian-digital-governance"
    ],
    "example_case_ids": [
      "cofacts-crowdsourced-factchecking"
    ],
    "source_chapter": "Ch. 2-2"
  },
  {
    "id": "participatory-hackathon",
    "name": "Participatory Civic Hackathon (Jothon)",
    "description": "Participatory civic hackathons—exemplified by g0v's 'jothons'—bring together diverse teams of technical and non-technical participants (often with majority non-technical and near gender parity) to collaboratively address civic problems rather than commercial outcomes. Unlike typical industry hackathons, these events orient participants toward public-interest challenges in close collaboration with civil society organizations. Taiwan's Presidential Hackathon extended this practice by convening mixed teams of civil servants, academics, activists, and technologists to propose tools, social practices, and data custody arrangements for civic benefit.",
    "diagnostic_questions": [
      "Is the problem domain one where non-technical domain knowledge (legal, social, organizational) is as important as technical skills?",
      "Can the hackathon be oriented toward public-interest outcomes rather than commercial product development?",
      "Are there civil society organizations whose participation would ground the work in real community needs?",
      "Is there institutional support (governmental or civic) to lend legitimacy and implementation pathways to winning proposals?"
    ],
    "countered_failure_mode_ids": [
      "monist-technocracy",
      "engagement-maximization"
    ],
    "example_case_ids": [
      "g0v-civic-hacking",
      "presidential-hackathon"
    ],
    "source_chapter": "Ch. 2-2"
  },
  {
    "id": "privacy-preserving-contact-tracing",
    "name": "Privacy-Preserving Contact Tracing",
    "description": "Privacy-preserving contact tracing designs public-health digital tools with strong anonymization and decentralization features, developed through close cooperation between government health officials and civil society groups concerned about surveillance. Taiwan's pandemic response achieved broad adoption of phone-based social distancing and tracing systems precisely because the design process involved g0v community members deeply concerned about privacy, producing systems that received broad public trust and acceptance despite Taiwan lacking an independent privacy protection regime.",
    "diagnostic_questions": [
      "Is there a significant civil society constituency with privacy concerns that could block adoption of a surveillance-adjacent tool?",
      "Can anonymization and decentralization be built in at the architecture level rather than added as policy constraints?",
      "Is there an existing collaborative relationship between government technologists and civic privacy advocates?",
      "Does broad adoption depend on public trust rather than legal mandate?"
    ],
    "countered_failure_mode_ids": [
      "surveillance-capitalism",
      "authoritarian-digital-governance"
    ],
    "example_case_ids": [
      "taiwan-pandemic-response"
    ],
    "source_chapter": "Ch. 2-2"
  },
  {
    "id": "open-data-civic-apps",
    "name": "Open Government Data with Civic App Layer",
    "description": "This governance form pairs government commitments to open, machine-readable data publication with a civil society layer that builds civic applications on top of that data—often faster and more usefully than government itself. Taiwan's g0v movement pioneered this by scraping and 'forking' government websites, and during the COVID-19 pandemic, civic hacker Howard Wu rapidly built a Mask App using government-published pharmacy inventory data. In some cases the civic apps proved so effective that government 'merged' them back into official services.",
    "diagnostic_questions": [
      "Is the relevant government data currently published in machine-readable, open-licensed formats?",
      "Is there an active civic hacker or developer community with the capacity and motivation to build on that data?",
      "Are the use cases time-sensitive in ways that favor rapid civic iteration over slow government procurement?",
      "Does the government have a culture of accepting or incorporating externally developed civic tools?"
    ],
    "countered_failure_mode_ids": [
      "monist-technocracy",
      "engagement-maximization"
    ],
    "example_case_ids": [
      "g0v-civic-hacking",
      "taiwan-mask-app"
    ],
    "source_chapter": "Ch. 2-2"
  },
  {
    "id": "alignment-assembly",
    "name": "Alignment Assembly",
    "description": "Alignment assemblies convene citizen participants to deliberate on the regulation and steering of AI foundation models, ensuring that values embedded in powerful systems reflect the public's interests. Taiwan pioneered this format, convening assemblies through the Ministry of Digital Affairs beginning in May 2023. This form connects broad civic participation to the technical and policy decisions that shape AI development, and has become increasingly common internationally as a mechanism for democratic governance of AI.",
    "diagnostic_questions": [
      "Is the technology in question (e.g., a foundation model) capable of embedding values that affect large populations?",
      "Are current regulatory or technical governance processes insufficiently accountable to affected publics?",
      "Is there a government or institutional actor willing to convene and respond to citizen deliberation on AI?",
      "Are there diverse stakeholder communities (civil society, technical experts, affected communities) who can contribute meaningfully to deliberation?"
    ],
    "countered_failure_mode_ids": [
      "monist-technocracy",
      "atomist-libertarianism"
    ],
    "example_case_ids": [
      "taiwan-alignment-assemblies"
    ],
    "source_chapter": "Ch. 2-2"
  },
  {
    "id": "participation-officer-network",
    "name": "Participation Officer Network",
    "description": "A participation officer network embeds trained civil servants across government departments who are committed to citizen participation, cross-departmental collaboration, and digital feedback. Taiwan's PDIS created a Participation Officer (PO) network that acted as internal supporters and conduits for ⿻ practices, translating between civic communities and bureaucratic processes and helping to sustain participatory practices beyond individual ministerial champions. This institutional form operationalizes civic participation as a standing government capacity rather than an ad hoc initiative.",
    "diagnostic_questions": [
      "Is there a risk that participatory practices will be siloed in a single ministry or champion and fail to diffuse across government?",
      "Are there civil servants in multiple agencies who are already informally supporting civic participation but lack institutional backing?",
      "Does the government have a mechanism for peer learning and coordination among civil servants on participation practices?",
      "Can participation be made a recognized role with career legitimacy rather than an extracurricular activity?"
    ],
    "countered_failure_mode_ids": [
      "monist-technocracy"
    ],
    "example_case_ids": [
      "pdis-participation-officer-network"
    ],
    "source_chapter": "Ch. 2-2"
  },
  {
    "id": "plurality-cross-difference-collaboration",
    "name": "⿻ (Plurality) Cross-Difference Collaboration",
    "description": "⿻ as a governance and social form names the capacity of diverse groups to act together across lines of difference without flattening that difference into uniformity. Weyl and Tang present ⿻ as rejecting both the monist impulse (one universal logic — AI, market, or state — absorbs all diversity) and the atomist impulse (individuals transact independently, severing social ties). Instead, ⿻ cultivates collaborative institutions that are strengthened by, rather than despite, the diversity of their participants.",
    "diagnostic_questions": [
      "Does the governance structure require participants to erase or subordinate their distinct identities and affiliations in order to cooperate?",
      "Does collaboration across groups generate new shared capacity that neither group could produce alone?",
      "Are the social differences among participants treated as a resource for collective intelligence rather than a problem to be managed away?",
      "Does the design resist both top-down unification and pure peer-to-peer atomism?",
      "Is the system designed so that bridging across difference is itself rewarded or structurally enabled?"
    ],
    "countered_failure_mode_ids": [
      "monist-technocracy",
      "atomist-libertarianism"
    ],
    "example_case_ids": [
      "vtaiwan-deliberation",
      "polis-clustering",
      "g0v-civic-hacking",
      "quadratic-voting"
    ],
    "source_chapter": "Ch. 3-0"
  },
  {
    "id": "federated-identity",
    "name": "Federated / Intersectional Social Identity",
    "description": "Rather than treating identity as a single, atomic credential issued by one authority, federated identity systems recognise that each person belongs to overlapping groups — family, profession, locale, religion, language community — and allow these affiliations to compose into a rich, intersectional social identity. The book illustrates this with Taiwan's network of overlapping associations and with internet protocols that allow credentials from multiple issuers to interoperate. This form counters both the monist impulse to collapse identity into one state-issued number and the atomist impulse to treat identity as purely self-sovereign.",
    "diagnostic_questions": [
      "Does the system allow a participant to bring credentials or affiliations from more than one issuing authority rather than requiring a single login identity?",
      "Are group memberships treated as overlapping and composable rather than mutually exclusive categories?",
      "Does the design explicitly accommodate people who straddle multiple linguistic, cultural, or institutional communities?",
      "Would a participant who belongs to many small, intersecting communities be more or less legible than one who fits a single dominant category?"
    ],
    "countered_failure_mode_ids": [
      "monist-technocracy",
      "atomist-libertarianism"
    ],
    "example_case_ids": [
      "vtaiwan-deliberation",
      "g0v-civic-hacking"
    ],
    "source_chapter": "Ch. 3-1"
  },
  {
    "id": "plural-publics",
    "name": "⿻ Publics (Overlapping Networked Communities)",
    "description": "⿻ publics describes governance and social arrangements in which communities are not discrete, bounded units but nested, overlapping networks — each individual participating simultaneously in many circles of association. Drawing on Dewey's notion of 'the public' and network science, the book frames this as the natural social substrate for ⿻ (plurality): decisions emerge from the interplay of many partially-overlapping publics rather than from a single sovereign or a market of isolated individuals. This form makes visible the diversity of group affiliations that monist and atomist framings both erase.",
    "diagnostic_questions": [
      "Are community boundaries treated as permeable and overlapping rather than hard and exclusive?",
      "Does the governance design surface the multiple group memberships that participants already hold?",
      "Is collective action coordinated through networks of networks rather than through a single hierarchical authority or a pure price mechanism?",
      "Does the design allow a community to share members with other communities without forcing an exclusive affiliation?"
    ],
    "countered_failure_mode_ids": [
      "monist-technocracy",
      "atomist-libertarianism"
    ],
    "example_case_ids": [
      "g0v-civic-hacking",
      "vtaiwan-deliberation",
      "open-government-participation"
    ],
    "source_chapter": "Ch. 3-1"
  },
  {
    "id": "diversity-and-democracy-co-evolution",
    "name": "Diversity–Democracy Co-evolution",
    "description": "The book argues that democracy and diversity are not merely compatible but mutually constitutive: democratic processes generate new forms of diversity (new identities, communities, and ways of life), and that diversity in turn demands more sophisticated democratic forms to manage the resulting conflicts collaboratively. Taiwan's historical trajectory — from Confucian hierarchy through colonial rule to a pluralist democracy that embraces its multi-ethnic, multi-lingual composition — is offered as a living demonstration. This governance form names the iterative, co-evolutionary dynamic rather than treating diversity as a fixed input and democracy as a fixed output.",
    "diagnostic_questions": [
      "Does the governance design treat the community's diversity as stable and given, or does it anticipate that new groups and identities will emerge from the participatory process itself?",
      "Are mechanisms in place to surface and legitimise newly-formed subgroups or cross-cutting alliances that did not exist when the process was designed?",
      "Does the design allow democratic norms to evolve as the community's composition changes over time?",
      "Is diversity framed as a resource for collective problem-solving rather than purely as a source of friction to be managed?"
    ],
    "countered_failure_mode_ids": [
      "monist-technocracy",
      "atomist-libertarianism"
    ],
    "example_case_ids": [
      "vtaiwan-deliberation",
      "g0v-civic-hacking",
      "open-government-participation"
    ],
    "source_chapter": "Ch. 3-1"
  },
  {
    "id": "self-organizing-criticality",
    "name": "Self-Organizing Criticality",
    "description": "Self-organizing criticality is the process by which complex systems steer toward and widen the 'narrow corridor' between chaotic and orderly states — the 'edge of chaos' — where life-like, unpredictable, and developing structures emerge. Complexity scientists use this concept to describe how governance and social systems can sustain complexity rather than collapsing into either Technocratic rigidity or Libertarian atomism. ⿻ draws on this scientific concept to frame the normative task of democratic design as one of cultivating and expanding this corridor, drawing on wisdom from many sciences rather than any single set of analogies.",
    "diagnostic_questions": [
      "Is the system at risk of collapsing into either rigid top-down control (Technocratic order) or fragmented, uncoordinated atomism (Libertarian chaos)?",
      "Are there feedback mechanisms that allow the system to detect and respond to proximity to either extreme — excessive centralization or excessive fragmentation?",
      "Does the governance design draw on diverse disciplinary analogies rather than a single universal framework?",
      "Are participants able to reconfigure and adapt the system's structure as conditions change, rather than being locked into fixed rules or pure spontaneous order?"
    ],
    "countered_failure_mode_ids": [
      "monist-technocracy",
      "atomist-libertarianism"
    ],
    "example_case_ids": [],
    "source_chapter": "Ch. 3-1"
  },
  {
    "id": "metascience-decentralized-community",
    "name": "Decentralized Scientific Community Governance",
    "description": "The metascience literature documents that decentralized scientific communities — composed of mostly independent, non-overlapping teams using varied methods and drawing on a broad spectrum of prior work — tend to yield more reliable and innovative knowledge than centralized communities marked by repeated collaborations and narrow methodological range. ⿻ governance draws on this finding to argue that analogous structures in civic and institutional design, where diverse intersecting communities validate and build on each other's work, produce more robust and creative outcomes. Findings have been replicated in patents and GitHub software projects, suggesting the principle transcends any single domain.",
    "diagnostic_questions": [
      "Are the teams or communities involved in knowledge production or governance largely independent of one another, or do repeated collaborations and shared methodological assumptions dominate?",
      "Do incentive structures reward novelty and cross-disciplinary combination, or do they primarily reward citation count and publication in established venues?",
      "Is there meaningful diversity in the methods and prior literature that participants draw upon?",
      "Are replication and independent validation built into the community's norms, rather than relying on centralized authority to certify results?"
    ],
    "countered_failure_mode_ids": [
      "monist-technocracy"
    ],
    "example_case_ids": [],
    "source_chapter": "Ch. 3-1"
  },
  {
    "id": "sortition-citizens-assembly",
    "name": "Sortition / Citizens' Assembly",
    "description": "Sortition selects participants for governance bodies by random lot rather than election, producing assemblies whose demographic composition mirrors the broader population. The book treats citizens' assemblies as a ⿻ primitive that counters the homogenizing tendencies of winner-take-all electoral politics by ensuring a statistically representative cross-section of the polity deliberates on contested questions. Ireland's Citizens' Assembly on abortion and constitutional change is cited as a prominent instance where randomly selected citizens reached considered judgments that elected legislatures had deadlocked on.",
    "diagnostic_questions": [
      "Is the decision-making body selected by random lot rather than election or appointment?",
      "Does the participant pool statistically mirror the demographic diversity of the affected population?",
      "Is the process designed to surface considered judgment on questions where electoral politics has stalled?",
      "Are deliberation support structures (expert testimony, facilitated small-group discussion) in place to help randomly selected participants engage substantively?"
    ],
    "countered_failure_mode_ids": [
      "monist-technocracy",
      "atomist-libertarianism"
    ],
    "example_case_ids": [
      "ireland-citizens-assembly"
    ],
    "source_chapter": "Ch. 3-2"
  },
  {
    "id": "deliberative-polling",
    "name": "Deliberative Polling",
    "description": "Deliberative polling, developed by James Fishkin, combines random sampling with structured deliberation: a representative sample of citizens is brought together, given balanced briefing materials, and facilitated through small-group and plenary discussion before and after which their views are measured. The book cites deliberative polling as evidence that opinion change toward more considered, cross-cutting positions is achievable at scale when diverse citizens are given genuine information and time to engage, making it a ⿻ precedent for augmenting democratic legitimacy beyond periodic elections.",
    "diagnostic_questions": [
      "Is the participant sample drawn randomly to achieve demographic representativeness?",
      "Are participants provided with balanced, expert-reviewed briefing materials before deliberation begins?",
      "Does the process measure opinion shifts before and after deliberation to surface considered judgment?",
      "Is facilitation structured to ensure cross-cutting dialogue rather than reinforcing pre-existing clusters?"
    ],
    "countered_failure_mode_ids": [
      "monist-technocracy",
      "big-tech-engagement-maximization"
    ],
    "example_case_ids": [],
    "source_chapter": "Ch. 3-2"
  },
  {
    "id": "networked-property-regimes",
    "name": "Networked (⿻) Property Regimes",
    "description": "A ⿻ approach to property inspired by Henry George's argument that land value is a collective product of intersecting social entities — universities, municipalities, nation-states, and other networked contributors — rather than the creation of any single private owner. Under this framing, property rights (usus, abusus, fructus) and the revenues derived from them are distributed across the multiple overlapping social circles that contributed to creating value, in proportion to their contribution. Taiwan's land value tax design is cited as a partially-implemented example. The Henry George Theorem formalizes how shared infrastructure that generates land value can be funded by taxing that value back.",
    "diagnostic_questions": [
      "Can the value of the asset or resource be traced to contributions from multiple overlapping social entities (universities, cities, states, professional networks)?",
      "Is there a mismatch between who captures the value and who or what actually created it through networked interdependence?",
      "Would a tax or revenue-sharing mechanism tied to land or resource value enable productive use while funding the shared infrastructure that generated that value?",
      "Do existing private property rules block productive use or allow passive capture of collectively-created value?",
      "Is the asset embedded in a geography or network where different scales of governance (local, regional, national, global) each plausibly contributed to its value?"
    ],
    "countered_failure_mode_ids": [
      "atomist-libertarianism"
    ],
    "example_case_ids": [],
    "source_chapter": "Ch. 3-2"
  },
  {
    "id": "polycentric-governance",
    "name": "Polycentric Governance",
    "description": "Polycentric governance, developed by Vincent and Elinor Ostrom, organises collective life through many overlapping, semi-autonomous centres of authority rather than a single sovereign or market. Each centre operates at the scale appropriate to the problem it addresses, and centres coordinate through negotiation, competition, and mutual adjustment rather than top-down command. The book frames polycentrism as the institutional counterpart to the network topology that emerged from ARPA research: resilient because no single node controls the whole, and adaptive because local units can experiment while the wider system learns.",
    "diagnostic_questions": [
      "Is the problem genuinely multi-scale, requiring local responsiveness alongside system-wide coordination?",
      "Would concentrating authority in a single body create capture risks or information bottlenecks?",
      "Are there already multiple semi-autonomous groups managing overlapping aspects of the same resource or issue?",
      "Can units at different scales credibly commit to mutual adjustment without a hierarchical arbiter?",
      "Does the governance situation resemble a commons whose rules are best set by nested, overlapping communities?"
    ],
    "countered_failure_mode_ids": [
      "monist-technocracy",
      "atomist-libertarianism"
    ],
    "example_case_ids": [],
    "source_chapter": "Ch. 3-3"
  },
  {
    "id": "partial-common-ownership",
    "name": "Partial Common Ownership",
    "description": "Partial common ownership is the broader design principle, traced in the book through Henry George's land-value tax, the legal realists, and Weyl & Posner's 'Radical Markets', that no owner holds absolute rights over an asset—instead, a community of affected parties retains a perpetual stake expressed through fees, revenue sharing, or governance rights. The book situates this alongside quadratic mechanisms as one of the core ⿻ property forms because it keeps ownership open to revision as the social context of the asset changes.",
    "diagnostic_questions": [
      "Does the asset appreciate in value primarily because of community investment rather than individual effort?",
      "Is a single owner capturing rents that were created collectively?",
      "Would shared governance or revenue rights align incentives between the holder and the broader community?",
      "Is there precedent—formal or informal—for communal claims on this type of asset?",
      "Could a holding fee or revenue-share arrangement be practically administered and politically legitimated?"
    ],
    "countered_failure_mode_ids": [
      "atomist-libertarianism",
      "monist-technocracy"
    ],
    "example_case_ids": [],
    "source_chapter": "Ch. 3-3"
  },
  {
    "id": "data-coalitions",
    "name": "Data Coalitions / Data Unions",
    "description": "Data coalitions are collective bargaining structures in which individuals pool their data as a shared asset, negotiate terms with platforms or researchers on members' behalf, and distribute resulting value back to contributors. The book grounds this form in the analogy to labour unions and cooperative property, arguing that data—like land—generates value through the social context in which it is produced and therefore warrants collective rather than purely individual ownership. Data coalitions are presented as a ⿻ mechanism for converting surveillance capitalism's extractive data flows into sources of shared wealth and democratic accountability.",
    "diagnostic_questions": [
      "Are individuals currently generating data whose value accrues almost entirely to a platform rather than to themselves?",
      "Is there a coherent community of data producers who share interests strong enough to support collective action?",
      "Would pooled negotiating power change the terms platforms can impose on individual users?",
      "Is there a governance structure capable of representing members' interests and distributing benefits fairly?",
      "Could data-coalition membership serve as an identity anchor for other ⿻ participation rights?"
    ],
    "countered_failure_mode_ids": [
      "surveillance-capitalism",
      "atomist-libertarianism"
    ],
    "example_case_ids": [],
    "source_chapter": "Ch. 3-3"
  },
  {
    "id": "rights-as-os",
    "name": "Rights as Operating System (Rights OS)",
    "description": "⿻ frames rights not as static, individual entitlements frozen in natural law, but as a dynamic 'operating system' — a layered infrastructure of protocols and standards that enables diverse social collaborations to run on top of it. Just as a software OS abstracts hardware complexity and provides stable interfaces for applications, Rights OS provides the underlying rules of personhood, association, commerce, and expression that allow pluralistic social forms to emerge and interoperate. The book treats this framing as a departure from both monist conceptions (rights as a single sovereign's grant) and atomist conceptions (rights as prepolitical individual trumps), instead casting them as collectively maintained, evolvable infrastructure.",
    "diagnostic_questions": [
      "Are the rights in question treated as fixed, prepolitical entitlements, or as evolving collective infrastructure that enables new social forms?",
      "Does the governance system allow rights 'protocols' to be updated or extended as new collaborative forms emerge?",
      "Is there a layered architecture — some foundational rights that enable others — rather than a flat list of individual entitlements?",
      "Do rights here primarily protect individuals in isolation, or do they also constitute the conditions for diverse group formation and cross-difference collaboration?"
    ],
    "countered_failure_mode_ids": [
      "monist-technocracy",
      "atomist-libertarianism"
    ],
    "example_case_ids": [
      "vtaiwan-deliberation",
      "g0v-civic-hacking"
    ],
    "source_chapter": "Ch. 4-0"
  },
  {
    "id": "plurality-freedom",
    "name": "⿻ (Plurality) Freedom",
    "description": "⿻ freedom is the book's articulation of liberty as neither negative freedom (freedom from interference) nor positive freedom (capacity enabled by the state), but as the freedom to participate in and constitute multiple, overlapping social groups and networks. Freedom in this sense is fundamentally relational and emergent: it grows from the richness and diversity of one's intersectional social memberships rather than from isolation or from a single sovereign guarantee. The book positions ⿻ freedom as requiring active maintenance of the plural social infrastructure — the 'operating system' of rights — that makes diverse association possible.",
    "diagnostic_questions": [
      "Does the design protect individuals primarily from interference, primarily enable individual capacities, or does it actively support participation in multiple, overlapping social groups?",
      "Is freedom here understood as a relational property — something constituted by the diversity and richness of social ties — rather than a property of isolated individuals?",
      "Does the system allow people to hold multiple, non-hierarchical group memberships that together constitute their identity?",
      "Are the conditions for plural association — shared protocols, interoperable identity, collective rights infrastructure — treated as public goods worth maintaining?"
    ],
    "countered_failure_mode_ids": [
      "monist-technocracy",
      "atomist-libertarianism"
    ],
    "example_case_ids": [
      "intersectional-social-identity",
      "federated-identity"
    ],
    "source_chapter": "Ch. 4-0"
  },
  {
    "id": "social-attestation-networks",
    "name": "Social Attestation Networks",
    "description": "Social attestation networks establish identity and reputation through webs of mutual recognition among peers, organizations, and institutions rather than through top-down registration systems. The book highlights that identity in ⿻ systems is fundamentally relational: who you are is constituted by who recognizes you and in what capacity. Participants can accumulate overlapping attestations — from employers, civic groups, professional bodies, or neighbors — that together form a portable, composable identity profile that no single issuer controls. This mirrors how human social identity actually forms through relationships and shared history.",
    "diagnostic_questions": [
      "Does the governance context require some trust in participants' identities without centralizing that trust?",
      "Are there multiple existing institutions (employers, associations, civic bodies) whose recognition of a participant could serve as meaningful attestation?",
      "Would purely self-sovereign identity (no external verification) be insufficient for the governance stakes involved?",
      "Is there a risk of Sybil attacks or fake-account manipulation that peer attestation could help mitigate?",
      "Could participants' differing community memberships confer different roles, rights, or voting weights in a principled way?"
    ],
    "countered_failure_mode_ids": [
      "monist-technocracy",
      "atomist-libertarianism",
      "captured-dao-plutocracy"
    ],
    "example_case_ids": [
      "federated-identity",
      "vtaiwan-deliberation"
    ],
    "source_chapter": "Ch. 4-1"
  },
  {
    "id": "associational-infrastructure",
    "name": "Associational Infrastructure",
    "description": "Associational infrastructure refers to the layered civic, digital, and institutional scaffolding that enables diverse, cross-cutting associations to form, persist, and exercise collective power. The book argues that healthy democracies depend not just on individual rights or state institutions but on a rich ecology of associations — unions, cooperatives, religious communities, professional societies, and digital publics — that mediate between the individual and the state. When this middle layer atrophies (as under both hyper-individualist and hyper-centralized regimes), ⿻ collapses into either atomism or monism. Rebuilding it is framed as a core design challenge for ⿻ technology.",
    "diagnostic_questions": [
      "Are there functioning intermediary organizations (cooperatives, guilds, civic groups) between individuals and the state or platform?",
      "Do digital tools support persistent group formation across difference, not just one-time votes or transactions?",
      "Is the associational layer diverse enough that no single organization captures the whole civic space?",
      "Does the infrastructure allow associations to federate or coordinate without merging into a single hierarchy?"
    ],
    "countered_failure_mode_ids": [
      "monist-technocracy",
      "atomist-libertarianism",
      "captured-dao-plutocracy"
    ],
    "example_case_ids": [
      "g0v-civic-hacking",
      "vtaiwan-deliberation",
      "polis-clustering"
    ],
    "source_chapter": "Ch. 4-2"
  },
  {
    "id": "contextual-confidence-protocols",
    "name": "Contextual Confidence Protocols",
    "description": "Contextual confidence protocols are technical and social standards that allow participants in a networked system to clearly establish and protect the context of their communications — knowing who they are speaking to, what is shared among them, and ensuring that information does not leak outside its intended audience. As developed by Jain, Hitzig, and Mishkin, the concept holds that digital systems can be designed so that communities maintain strong internal common beliefs while shielding those beliefs from external surveillance or internal over-sharing. This combines publicity technologies (e.g., distributed ledgers, open protocols) with privacy-enhancing technologies (e.g., zero-knowledge proofs, designated verifier proofs) to achieve what the book calls '⿻ publics'.",
    "diagnostic_questions": [
      "Do participants in this community have a reliable way to know who else is in the conversation and what they share?",
      "Is there a technical or procedural mechanism that prevents information from leaking to unintended audiences outside the group?",
      "Does the system distinguish between common knowledge within a group and publicly available information?",
      "Are privacy protections focused only on external surveillance, or do they also guard against internal over-sharing?",
      "Does the design support the formation of multiple distinct communities with separate, protected contexts?"
    ],
    "countered_failure_mode_ids": [
      "surveillance-capitalism",
      "big-tech-engagement-maximization"
    ],
    "example_case_ids": [
      "spritely-project",
      "activitypub-federation"
    ],
    "source_chapter": "Ch. 5-3"
  },
  {
    "id": "designated-verifier-proofs",
    "name": "Designated Verifier Proofs (DVPs)",
    "description": "Designated verifier proofs are a cryptographic technique in which a proof of authenticity is targeted to a single recipient and appears potentially forged to everyone else. This makes over-shared information untrustworthy to unintended recipients, since they cannot distinguish genuine proofs from fabricated ones. The book highlights DVPs as a promising tool for protecting group context from internal over-sharing — a limitation of most existing privacy technologies, which focus on external snooping rather than the equally important problem of information leaking beyond its intended community.",
    "diagnostic_questions": [
      "Is the primary privacy threat internal over-sharing rather than external surveillance?",
      "Can the information in question be independently and immediately verified by an unintended recipient?",
      "Is there a need to protect group-specific information while still allowing authenticated communication within the group?",
      "Would making shared information untrustworthy to outsiders (rather than merely unavailable) be sufficient protection?"
    ],
    "countered_failure_mode_ids": [
      "surveillance-capitalism"
    ],
    "example_case_ids": [],
    "source_chapter": "Ch. 5-3"
  },
  {
    "id": "community-distributed-ledger",
    "name": "Community-Scoped Distributed Ledger",
    "description": "A community-scoped distributed ledger is a governance form in which a shared record of information is maintained only among members of a defined community group, using cryptographic techniques such as designated verifier proofs to ensure that the ledger's contents — and the fact that they constitute common knowledge — cannot be credibly shared outside the community. Unlike public blockchains motivated by financial incentives, this form prioritizes the creation of common beliefs and coordinated understanding among a specific group of people rather than among anonymous validators. The book envisions that combining such ledgers with more sophisticated voting rules could instantiate richer and more nuanced notions of common knowledge than present distributed ledgers allow.",
    "diagnostic_questions": [
      "Is the goal to establish common knowledge within a bounded community rather than a general public?",
      "Are participants motivated by shared interests or civic goals rather than financial gain?",
      "Does the governance of the ledger need to reflect the actual views of community members rather than whoever can profit from validation?",
      "Is it important that the community's shared record cannot be credibly disclosed to outsiders?",
      "Would more expressive voting rules (beyond simple consensus) better capture the community's collective understanding?"
    ],
    "countered_failure_mode_ids": [
      "captured-dao-plutocracy",
      "surveillance-capitalism"
    ],
    "example_case_ids": [],
    "source_chapter": "Ch. 5-3"
  },
  {
    "id": "federated-open-social-protocols",
    "name": "Federated Open Social Protocols",
    "description": "Federated open social protocols are technical standards — such as ActivityPub, the AT Protocol (BlueSky), and the Decentralized Social Networking Protocol — that enable social networking across independently operated servers without reliance on a single proprietary platform. By distributing control over social infrastructure, these protocols allow communities to form and communicate through open, interoperable systems rather than through privately owned platforms that surveil and monetize interactions. The book frames these as a necessary but insufficient step toward ⿻ publics: they address publication and reach but do not by themselves create the strong common beliefs or contextual protection that genuine freedom of association requires.",
    "diagnostic_questions": [
      "Is the community currently dependent on a single proprietary platform for its social infrastructure?",
      "Does the design allow community members to migrate, fork, or self-host their participation without losing their social graph?",
      "Does the protocol support the establishment of context — i.e., knowing who is in a given conversation and what they share?",
      "Are privacy protections built into the protocol, or is publication the only affordance provided?",
      "Does the protocol allow communities to set their own norms and governance rules?"
    ],
    "countered_failure_mode_ids": [
      "surveillance-capitalism",
      "big-tech-engagement-maximization"
    ],
    "example_case_ids": [
      "activitypub-federation",
      "bluesky-atproto"
    ],
    "source_chapter": "Ch. 5-3"
  },
  {
    "id": "privacy-enhancing-technologies-pets",
    "name": "Privacy-Enhancing Technologies (PETs) for Group Context",
    "description": "Privacy-enhancing technologies (PETs) are a family of cryptographic and computational techniques — including zero-knowledge proofs, secure multi-party computation, homomorphic encryption, confidential computing, differential privacy, and federated learning — that allow information to be processed, shared, or verified while limiting exposure of the underlying sensitive data. The book emphasizes that most PETs have been developed to protect individual communications from external surveillance, but that extending them to protect the shared context of groups from internal over-sharing is an emerging frontier. When combined with open networking standards, PETs form a key technical layer for achieving ⿻ publics.",
    "diagnostic_questions": [
      "Is the privacy threat primarily external (snooping by outsiders) or internal (over-sharing by members)?",
      "Does the system need to allow computation on sensitive data without exposing the underlying data to any single party?",
      "Are there data in the system that pertain to multiple individuals or groups, making unilateral disclosure a risk to others?",
      "Does the use case require provable privacy guarantees rather than just normative or policy-based constraints?",
      "Are quantum-resistant cryptographic schemes necessary given the threat model?"
    ],
    "countered_failure_mode_ids": [
      "surveillance-capitalism"
    ],
    "example_case_ids": [],
    "source_chapter": "Ch. 5-3"
  },
  {
    "id": "plural-money",
    "name": "⿻ (Plural) Money",
    "description": "The book's umbrella framing for a ⿻ approach to commercial trust that supersedes both universal currency and purely private cash. Rather than collapsing all value into a single fungible medium, ⿻ money encompasses a spectrum from polycentric community currencies to fully distributed interpersonal-debt networks. The core move is treating money as a historically contingent simplification for pre-digital information limits, and asking what richer representations of value — recording the specifics of contributions, relationships, and obligations — become possible with modern computation and identity infrastructure. This sits alongside identity and property systems as one of the three pillars of ⿻ digital infrastructure.",
    "diagnostic_questions": [
      "Is the value being tracked fundamentally joint or supermodular, such that splitting it across individual money holdings loses critical information?",
      "Are there multiple communities whose currencies should partially interoperate but not fully dissolve into one another?",
      "Does the governance context require distinguishing between different kinds of social esteem (civic, professional, familial) that money flattens?",
      "Would contextually integral ledgers — ones that prevent holders from revealing balances outside the community — serve the community's integrity needs?",
      "Is the current reliance on universal currency a legacy of pre-digital information limits rather than a genuine fit to the community's value structure?"
    ],
    "countered_failure_mode_ids": [
      "atomist-libertarianism",
      "monist-technocracy",
      "surveillance-capitalism"
    ],
    "example_case_ids": [
      "plurality-book-community-currency",
      "lets-local-exchange",
      "holochain-trust-network"
    ],
    "source_chapter": "Ch. 4-3"
  },
  {
    "id": "quadratic-funding",
    "name": "Quadratic Funding",
    "description": "Quadratic Funding (QF) is a mechanism for allocating public or pooled resources to public goods in proportion to the breadth of community support rather than the depth of any individual donor's contribution. Contributions from many small donors are matched from a central pool at a rate that squares the sum of square roots of individual contributions, meaning wide participation multiplies impact far more than concentrated wealth. Developed by Weyl, Hitzig, and Buterin, QF operationalizes the intuition that public goods derive their value from the number of people who benefit, not from the preferences of the wealthiest backers. It has been piloted in Gitcoin Grants for open-source software funding and explored for broader civic resource allocation.",
    "diagnostic_questions": [
      "Is the resource being allocated a public good whose value grows with the number of beneficiaries rather than any single patron's stake?",
      "Is there a diverse population of potential small contributors whose aggregate breadth of support could meaningfully signal community priority?",
      "Is there a central matching pool — from government, philanthropy, or a protocol treasury — that can be distributed according to a formula rather than a committee decision?",
      "Does the current allocation mechanism favor concentrated donors or insiders over broad community preference?",
      "Are mechanisms available to prevent Sybil attacks or collusion that would game the matching formula?"
    ],
    "countered_failure_mode_ids": [
      "captured-dao-plutocracy",
      "atomist-libertarianism"
    ],
    "example_case_ids": [
      "gitcoin-grants-qf"
    ],
    "source_chapter": "Ch. 4-4"
  },
  {
    "id": "data-dignity-ownership",
    "name": "Data Dignity / Data as Labor",
    "description": "Data Dignity is a framework, advanced by Weyl and others, that treats personal data as a form of labor whose value accrues to the individuals and communities that generate it rather than exclusively to platforms that harvest it. Under this framing, individuals and their representative data coalitions negotiate terms for data use, receive compensation, and retain rights to withdraw or redirect their data contributions. The framework draws an analogy to labor markets: just as workers organize to bargain collectively over the terms of their labor, data workers can form unions or coalitions to bargain over data licensing. It counters surveillance capitalism by making data flows legible, compensated, and revocable rather than unilateral platform extractions.",
    "diagnostic_questions": [
      "Are individuals currently providing data — behavioral, biological, social — to platforms without compensation or meaningful consent?",
      "Is there an existing or nascent collective structure (data union, cooperative, advocacy group) through which data contributors could negotiate collectively?",
      "Does the platform's business model depend heavily on proprietary data that originates from user activity?",
      "Could data contributors credibly threaten withdrawal or redirection of their data contributions to improve bargaining position?",
      "Are there technical standards or legal frameworks (e.g., data portability mandates) that could support collective data bargaining?"
    ],
    "countered_failure_mode_ids": [
      "surveillance-capitalism",
      "big-tech-engagement-maximization"
    ],
    "example_case_ids": [
      "data-coalitions"
    ],
    "source_chapter": "Ch. 4-4"
  },
  {
    "id": "ipfs-peer-to-peer-storage",
    "name": "Peer-to-Peer Distributed Storage (IPFS model)",
    "description": "The Interplanetary File System (IPFS), pioneered by Juan Benet and Protocol Labs and explicitly modeled on Licklider's Intergalactic Computer Network vision, is an open protocol that allows computers worldwide to offer storage to each other in a peer-to-peer, fragmented, encrypted, and distributed manner. This architecture promotes redundancy, robustness, and data secrecy/integrity without depending on centralized cloud providers. Taiwan's Ministry of Digital Affairs and other governments facing adversarial threats have adopted IPFS-based storage to avoid dependence on centralized services that adversaries might control. The Filecoin system was created alongside it to enable commercial transactions and incentivize broad storage participation.",
    "diagnostic_questions": [
      "Does the data need to be stored in a way that avoids dependence on any single centralized provider that could be coerced or compromised?",
      "Is the primary storage use case 'deep' or archival rather than requiring ultra-low-latency real-time access?",
      "Would the participants benefit from an open standard that any provider can implement rather than a proprietary cloud?",
      "Is there a geopolitical or adversarial threat model that makes centralized hosting risky?",
      "Can the storage system tolerate some retrieval latency in exchange for decentralization and privacy guarantees?"
    ],
    "countered_failure_mode_ids": [
      "big-tech-concentration",
      "authoritarian-digital-governance"
    ],
    "example_case_ids": [
      "taiwan-moda-ipfs-storage",
      "protocol-labs-filecoin"
    ],
    "source_chapter": "Ch. 4-3"
  },
  {
    "id": "plural-namespace-governance",
    "name": "⿻ Namespace / Domain Governance (Network-Centrality + Real-Time Auction)",
    "description": "The book describes the de facto property regime governing internet namespaces today as a hybrid of network-centrality-based ranking (as in Google's original PageRank, which ranks pages by their importance to the browsing public rather than their owners' private title) combined with real-time auctions for paid placement. This emergent system implicitly accounts for the public interest in stability and the real-time demands of those who would pay for the namespace, moving away from simple private property toward a ⿻ form that mixes collective direction and market signals. The book frames this — alongside evolving spectrum licensing — as an inadvertent prototype for ⿻ property: responsive to real challenges, though designed without public engagement or democratic legitimacy.",
    "diagnostic_questions": [
      "Is the resource in question one whose value depends heavily on its network position and public recognition rather than on the owner's private use?",
      "Would simple private property in this resource create holdout problems or domain-squatting dynamics that block public benefit?",
      "Could a combination of collective relevance signals and real-time auctions better balance stability, public interest, and willingness-to-pay than a static license?",
      "Is there an existing algorithm or public process that already aggregates collective preferences about which claimant should control the resource?",
      "Would the current governance of this resource benefit from explicit public engagement and democratic legitimacy rather than technocratic engineering alone?"
    ],
    "countered_failure_mode_ids": [
      "atomist-libertarianism",
      "big-tech-concentration",
      "monist-technocracy"
    ],
    "example_case_ids": [
      "icann-domain-governance",
      "google-pagerank-namespace"
    ],
    "source_chapter": "Ch. 4-3"
  },
  {
    "id": "multilingual-accessibility-infrastructure",
    "name": "Multilingual Accessibility Infrastructure",
    "description": "Multilingual accessibility infrastructure refers to the systematic provision of civic-technology interfaces, deliberative platforms, and government services in multiple languages, including indigenous and minority languages, so that linguistic difference does not translate into exclusion from ⿻ participation. The book points to Taiwan's experience with Mandarin, Taiwanese Hokkien, Hakka, and indigenous languages as a lived example of this challenge, and highlights open-source machine translation and community-localization projects as mechanisms that lower the cost of multilingual provision. This form of infrastructure recognizes language as a dimension of diversity that ⿻ systems are designed to bridge rather than erase.",
    "diagnostic_questions": [
      "Does the platform or governance process serve communities whose primary language differs from the dominant administrative language?",
      "Are translation and localization treated as afterthoughts or as core infrastructure investments?",
      "Do indigenous or minority-language speakers have equivalent functional access to deliberative tools and civic interfaces?",
      "Are community-led localization efforts (rather than solely automated translation) part of the accessibility strategy?"
    ],
    "countered_failure_mode_ids": [],
    "example_case_ids": [
      "moedict-open-dictionary"
    ],
    "source_chapter": "Ch. 4-5"
  },
  {
    "id": "assistive-technology-civic-inclusion",
    "name": "Assistive Technology for Civic Inclusion",
    "description": "Assistive technology for civic inclusion encompasses tools and design practices—screen readers, captioning, alternative input devices, plain-language interfaces—that ensure people with disabilities can participate fully in digital public life and ⿻ governance systems. The book treats accessibility for disabled users not as a compliance requirement but as a substantive dimension of the broader ⿻ commitment to including the full range of human diversity in collaborative democratic processes. Platforms designed with accessibility from the start embody the principle that difference is a resource rather than an edge case to be accommodated afterward.",
    "diagnostic_questions": [
      "Are accessibility standards (e.g., WCAG) integrated into the design process from the outset, or bolted on after deployment?",
      "Can participants with visual, motor, cognitive, or hearing differences engage with the deliberative or governance interface on equivalent terms?",
      "Is disability represented among the design and testing communities for civic-tech platforms?",
      "Does the platform treat accessibility as a civic infrastructure investment rather than a legal obligation?"
    ],
    "countered_failure_mode_ids": [],
    "example_case_ids": [],
    "source_chapter": "Ch. 4-5"
  },
  {
    "id": "coalition-governance-framework",
    "name": "Regional Coalition Governance Framework",
    "description": "A governance framework designed for voluntary coalitions of independent actors (such as regional vineyards or landholders) who share a common infrastructure challenge. The framework adapts existing collaborative models to local circumstances, emphasizing inclusive discussion, fair cost-sharing, and consensus-building rather than driving predetermined outcomes. As illustrated in the Bordeaux hail cannon scenario, a municipal or association representative configures the platform to fit regional needs, dispatches a changelog for transparency, and provides guidance on common hurdles without disclosing confidential details from past projects.",
    "diagnostic_questions": [
      "Is there a group of independent actors who share a collective-action problem requiring coordinated infrastructure investment?",
      "Does the coalition need a governance structure that distributes costs and benefits equitably among participants with varying levels of initial buy-in?",
      "Is there existing skepticism or mistrust among potential participants that a pilot program and transparent deliberation process could help address?",
      "Can the framework be adapted from a proven model (e.g., a trade association's collaborative tools) rather than built from scratch?",
      "Is the goal to foster inclusive discussion and consensus rather than to guarantee a specific technological or policy outcome?"
    ],
    "countered_failure_mode_ids": [],
    "example_case_ids": [],
    "source_chapter": "Ch. 4-3"
  },
  {
    "id": "deliberation-vs-voting-spectrum",
    "name": "Depth-Breadth Deliberation-Voting Spectrum",
    "description": "The book frames deliberation and voting not as opposites but as two points along a continuous spectrum trading depth of collaboration against breadth of participation. High-quality deliberation allows richer airing of perspectives but requires small, often selected groups (via election or sortition), while voting scales to large, diverse populations at the cost of thin signals — typically a single choice among predetermined options. ⿻ aims to push the entire production possibilities frontier outward, enabling richer collaboration across broader social difference at every point along this spectrum.",
    "diagnostic_questions": [
      "Is the governance challenge one of reaching broad consensus across a large, diverse population, or one of reaching rich, nuanced agreement among a smaller group?",
      "Does the current design force a choice between depth of deliberation and breadth of participation, or does it attempt to extend both simultaneously?",
      "Are participants limited to thin signals (e.g., a single vote among fixed options), or do they have opportunities for richer expression of perspective?",
      "Has the process considered intermediate modalities between pure voting and pure deliberation that could offer better depth-breadth trade-offs?"
    ],
    "countered_failure_mode_ids": [
      "premature-optimization",
      "monist-technocracy"
    ],
    "example_case_ids": [
      "vtaiwan-deliberation",
      "polis-clustering",
      "sortition-citizens-assembly",
      "deliberative-polling"
    ],
    "source_chapter": "Ch. 5-0"
  },
  {
    "id": "regenerating-diversity-design",
    "name": "Regenerating Diversity Through Collaboration",
    "description": "The book identifies a structural risk in ⿻ collaboration design: successfully bridging social differences can erode the very diversity that makes collaboration productive, analogous to an energy system that depletes its own fuel. The ⿻ response is to design collaborative technologies so that bridging generates new forms of social difference — new fields, new political cleavages, new hybrid cultures — rather than homogenizing participants toward a common mean. This principle applies across the full depth-breadth spectrum, from intimate relationships to global markets.",
    "diagnostic_questions": [
      "Does the collaboration design include mechanisms for generating new forms of social difference, or does it only bridge existing ones?",
      "Is there a risk that achieving consensus or shared understanding in this context will reduce the productive diversity available for future collaboration?",
      "Are there historical analogues (e.g., interdisciplinary field formation, fusion cuisine, political realignment) suggesting that bridging in this domain tends to produce new diversity rather than homogenization?",
      "Has the design accounted for the long-term depletion of the social 'low entropy' that powers the collaboration?"
    ],
    "countered_failure_mode_ids": [
      "cultural-homogenization",
      "premature-optimization"
    ],
    "example_case_ids": [
      "plurality-cross-difference-collaboration",
      "cross-difference-collaboration"
    ],
    "source_chapter": "Ch. 5-0"
  },
  {
    "id": "plural-management-protocol",
    "name": "⿻ Management Protocol",
    "description": "The ⿻ Management Protocol (also called 'Plural Management') is a governance form for open collaborative projects in which collective prioritization, contribution recognition, and reward distribution are linked through community currencies, group identity tokens, and crowd-funding mechanisms. Work priorities are determined by the community, contributors are recognized via tokens used in voting and issue prioritization, and quantitative rewards flow to those whose contributions address collectively-ranked challenges. The Plurality book itself was governed this way, recorded on a distributed ledger via the open-source GitRules protocol grounded in participation rather than financial incentives.",
    "diagnostic_questions": [
      "Is the project structured so that contribution recognition and reward are derived from community-determined priorities rather than centralized editorial or financial authority?",
      "Does the governance use community currencies or identity tokens to link participation, voting weight, and reward?",
      "Is the full record of contributions and prioritization decisions stored on an open, auditable distributed ledger?",
      "Are contentious issues in the project routed to deliberation tools rather than resolved by a central authority?"
    ],
    "countered_failure_mode_ids": [
      "captured-dao-plutocracy",
      "atomist-libertarianism"
    ],
    "example_case_ids": [
      "g0v-civic-hacking",
      "quadratic-funding"
    ],
    "source_chapter": "Ch. 5-0"
  },
  {
    "id": "approval-voting",
    "name": "Approval Voting",
    "description": "Approval voting is an electoral method in which voters may cast votes for as many candidates as they wish, with the candidate receiving the most approval votes winning. The book highlights it as a ⿻-aligned primitive because it simultaneously broadens consensus (the winner has wide general approval) and enables greater diversity of candidates (voters are not forced to strategically abandon third-party preferences to avoid spoiler effects). It is presented as an example of how a simple design choice can expand both collaboration breadth and diversity simultaneously.",
    "diagnostic_questions": [
      "Is the current voting system forcing voters to choose between expressing genuine preferences and avoiding spoiler effects?",
      "Would a broader, more diverse candidate field be viable if voters were not constrained to a single choice?",
      "Does the goal include both achieving wide consensus on the outcome and preserving space for a plurality of distinct options?",
      "Is the electorate large and diverse enough that thin-signal voting methods are required, making approval voting a plausible middle path?"
    ],
    "countered_failure_mode_ids": [
      "premature-optimization",
      "atomist-libertarianism"
    ],
    "example_case_ids": [],
    "source_chapter": "Ch. 5-0"
  },
  {
    "id": "supermodular-collaboration",
    "name": "Supermodular Collaboration Across Diversity",
    "description": "The book frames ⿻ collaborative technology around the mathematical concept of supermodularity — the property that the whole produced by collaboration is greater than the sum of separately achievable parts. Applied to social difference, this means designing tools so that the gains from collaboration increase with the degree of diversity among participants, rather than requiring homogeneity. The concept grounds the book's full spectrum of governance forms, from intimate co-creation to global markets, as instances of harnessing social 'low entropy' analogous to industrial harnessing of physical energy.",
    "diagnostic_questions": [
      "Does the collaborative system create outcomes that participants could not have achieved separately, and does this surplus increase with participant diversity?",
      "Is the design sensitive to the multiple dimensions of diversity (linguistic, professional, jurisdictional, generational, etc.) rather than a single axis?",
      "Are gains from collaboration defined by the norms and values of participating communities rather than by a single external welfare metric?",
      "Does the system risk reducing diversity through successful collaboration, and if so, are there regenerative mechanisms built in?"
    ],
    "countered_failure_mode_ids": [
      "premature-optimization",
      "monist-technocracy",
      "atomist-libertarianism"
    ],
    "example_case_ids": [
      "plurality-cross-difference-collaboration",
      "vtaiwan-deliberation",
      "quadratic-funding"
    ],
    "source_chapter": "Ch. 5-0"
  },
  {
    "id": "post-symbolic-communication",
    "name": "Post-Symbolic Communication",
    "description": "Post-symbolic communication refers to modes of shared experience and coordination that operate beneath or beyond discrete linguistic symbols — conveying meaning through sensation, immersion, shared physiological states, or direct neural/sensory coupling rather than through words or formal signs. The book draws on Jaron Lanier's coinage to describe how virtual reality, haptic interfaces, brain-computer interfaces, and shared immersive environments allow participants to communicate feelings, spatial relationships, and creative intent that language alone cannot fully encode. This form does not replace symbolic communication but augments it, enabling richer cross-difference understanding among people who lack a common linguistic frame.",
    "diagnostic_questions": [
      "Are participants trying to convey experiences, sensations, or creative states that resist adequate encoding in shared natural language or formal notation?",
      "Does the communication context involve people from radically different linguistic, cultural, or embodied backgrounds where symbolic translation is lossy?",
      "Is there infrastructure available (VR, haptic feedback, shared immersive environments, or BCI-adjacent tools) that could carry sub-symbolic or supra-symbolic signal?",
      "Would a shared somatic or perceptual experience substitute for lengthy symbolic negotiation of meaning?"
    ],
    "countered_failure_mode_ids": [
      "monist-technocracy",
      "atomist-libertarianism"
    ],
    "example_case_ids": [],
    "source_chapter": "Ch. 5-1"
  },
  {
    "id": "immersive-shared-reality",
    "name": "Immersive Shared Reality",
    "description": "Immersive shared reality is a governance and collaboration form in which participants co-inhabit a computationally rendered environment — via virtual or augmented reality — that gives them a common perceptual ground for deliberation, creative collaboration, or collective sense-making. Rather than exchanging text-based arguments, participants experience and manipulate shared spatial objects, environments, and perspectives, enabling forms of empathy and coordination not achievable through documents or video calls. The book positions immersive shared reality as a key ⿻ infrastructure for bridging experiential divides and supporting augmented deliberation across difference.",
    "diagnostic_questions": [
      "Are the participants physically dispersed in ways that prevent shared embodied experience, yet need to develop common ground on spatial, experiential, or design questions?",
      "Would inhabiting a shared simulated environment (a proposed urban development, a contested ecosystem, a historical site) materially change how participants understand each other's stakes?",
      "Is there a dimension of the problem — e.g., aesthetic, somatic, or spatial — that text-based deliberation systematically flattens?",
      "Does the community have access to, or interest in building, VR/AR infrastructure for civic or governance purposes?"
    ],
    "countered_failure_mode_ids": [
      "monist-technocracy",
      "atomist-libertarianism"
    ],
    "example_case_ids": [],
    "source_chapter": "Ch. 5-1"
  },
  {
    "id": "augmented-deliberation",
    "name": "Augmented Deliberation",
    "description": "Augmented deliberation describes the use of computational tools — including AI-assisted translation, clustering algorithms, visualization, and immersive media — to enhance the quality, scale, and cross-difference reach of democratic deliberation beyond what unaided human conversation can achieve. The book treats this as a ⿻ governance form that neither replaces human judgment nor merely automates consensus-finding, but instead amplifies participants' capacity to perceive shared structure in diverse viewpoints and to communicate across experiential, linguistic, and cultural gaps. Tools like Polis, real-time multilingual translation, and shared immersive environments are offered as instantiations.",
    "diagnostic_questions": [
      "Is the deliberation failing because of scale (too many participants for structured dialogue) or diversity (too many linguistic/cultural registers to bridge)?",
      "Are participants' underlying areas of agreement invisible because the current format only surfaces conflict and disagreement?",
      "Would computational summarization, clustering, or visualization help participants see the shape of collective opinion without collapsing it to a single number?",
      "Is there a role for immersive or sensory media that could carry meaning not easily encoded in text-based argument?"
    ],
    "countered_failure_mode_ids": [
      "monist-technocracy",
      "engagement-maximization"
    ],
    "example_case_ids": [
      "polis-clustering",
      "vtaiwan-deliberation"
    ],
    "source_chapter": "Ch. 5-1"
  },
  {
    "id": "creative-collaboration-form",
    "name": "Creative Collaboration (⿻ Creative Form)",
    "description": "Creative collaboration in the ⿻ sense treats artistic and expressive co-creation as a governance-relevant practice: diverse participants contribute distinct perspectives, and the joint work exceeds what any single contributor could produce alone. The book frames this not merely as aesthetic output but as a demonstration of how difference, rather than erasing itself into consensus, generates supermodular value — the surplus that arises when collaboration across difference produces outcomes richer than the sum of parts. Examples range from jazz improvisation and open-source software to collaborative fiction and wiki-style encyclopedias, where contributors with divergent knowledge and styles interlock rather than converge.",
    "diagnostic_questions": [
      "Does the creative process depend on the active interplay of distinct contributors whose differences remain visible in the output, rather than being smoothed into a single voice?",
      "Is the value produced by the collaboration genuinely supermodular — i.e., does the joint output exceed what any subset of contributors could have achieved independently?",
      "Are participants able to build on each other's contributions iteratively, with attribution and provenance traceable through the work?",
      "Does the community or platform supporting the collaboration have norms or structures that protect and celebrate difference rather than enforcing stylistic or ideological homogeneity?"
    ],
    "countered_failure_mode_ids": [
      "monist-technocracy",
      "atomist-libertarianism",
      "engagement-maximization"
    ],
    "example_case_ids": [
      "g0v-civic-hacking",
      "wikipedia-open-encyclopedia",
      "open-source-software-commons"
    ],
    "source_chapter": "Ch. 5-3"
  },
  {
    "id": "wikipedia-open-encyclopedia",
    "name": "Wikipedia as ⿻ Collaborative Knowledge",
    "description": "Wikipedia is cited in Plurality as a large-scale example of creative collaboration governed by emergent norms rather than top-down editorial authority. Its Five Pillars — including the principle that there are 'no firm rules' beyond core editorial policies — allow editors worldwide with divergent expertise, cultural backgrounds, and viewpoints to co-produce a knowledge commons. Disputes are mediated through talk pages, noticeboards, and arbitration committees rather than managerial hierarchy. The book treats Wikipedia as evidence that ⿻ governance of creative work is viable at massive scale, producing outputs of significant epistemic value from voluntary, cross-difference collaboration.",
    "diagnostic_questions": [
      "Are editorial disputes resolved through transparent deliberative processes (talk pages, mediation, arbitration) that any participant can invoke?",
      "Does the project's norm structure allow for genuine disagreement to be surfaced and worked through rather than suppressed by administrators?",
      "Is the knowledge produced genuinely cross-difference, drawing on contributors from many linguistic, cultural, and disciplinary communities?",
      "Does the platform's design make contribution histories and attribution visible, sustaining accountability without centralized gatekeeping?"
    ],
    "countered_failure_mode_ids": [
      "monist-technocracy",
      "engagement-maximization",
      "surveillance-capitalism"
    ],
    "example_case_ids": [],
    "source_chapter": "Ch. 5-3"
  },
  {
    "id": "alien-ai-creative-collaboration",
    "name": "Alien AI as Creative Collaborator",
    "description": "A governance form for creative and intellectual collaboration in which AI systems are trained not to mimic human strategies but to develop genuinely unfamiliar, 'alien' approaches — as exemplified by AlphaGo Zero's self-play training — and then fed back to human collaborators to expand the diversity of human creative output. The book draws on James Evans' framing of 'alien intelligence' and research showing that interacting with superhuman Go strategies increased novelty and diversity in human play. Applied to the cultural sphere, this approach aspires to generate novel artistic forms that provoke new directions among human creators.",
    "diagnostic_questions": [
      "Is there a risk that the current collaborative process converges too quickly on consensus-driven or algorithmically predictable outputs?",
      "Would introducing non-human, adversarially-trained perspectives help participants escape local creative optima?",
      "Is the creative domain one where 'alien' strategies (trained solely against other models, not on human data) could surface genuinely novel forms?",
      "Are there feedback mechanisms to translate machine-generated novelty back into human-legible creative inspiration?",
      "Does the community have the capacity to engage critically with AI-generated outputs rather than deferring to them?"
    ],
    "countered_failure_mode_ids": [
      "homogenization-of-creativity",
      "over-reliance-on-technology"
    ],
    "example_case_ids": [
      "alphago-zero-alien-strategy"
    ],
    "source_chapter": "Ch. 5-5"
  },
  {
    "id": "bridging-based-consensus",
    "name": "Bridging-Based Consensus",
    "description": "Bridging-based consensus is a deliberative design principle in which decision outputs are grounded in statements or proposals that achieve support across otherwise-opposed opinion clusters, rather than those that maximize aggregate or majority approval. The ⿻ framing treats this as a structural counter to polarization: by requiring cross-cluster endorsement rather than simple majorities, the form ensures that outcomes reflect genuine overlapping agreement rather than the preferences of the largest faction. Polis and similar tools operationalize this by algorithmically identifying high-cross-group-support statements as the actionable consensus candidates.",
    "diagnostic_questions": [
      "Has the deliberation mapped distinct opinion clusters rather than treating participants as a uniform pool?",
      "Are consensus outputs evaluated by their support across clusters rather than their aggregate approval rating?",
      "Is there an explicit mechanism for identifying and elevating bridging statements over majority-only positions?",
      "Does the institutional process receiving the outputs have the capacity to distinguish bridging consensus from majoritarian outcomes?",
      "Is the bridging criterion transparent to participants so they can understand why some statements advance and others do not?"
    ],
    "countered_failure_mode_ids": [
      "engagement-maximization",
      "monist-technocracy"
    ],
    "example_case_ids": [
      "polis-clustering",
      "vtaiwan-deliberation",
      "alignment-assembly"
    ],
    "source_chapter": "Ch. 5-4"
  },
  {
    "id": "networked-in-person-deliberation",
    "name": "Networked In-Person Deliberation (Fora / Cortico Model)",
    "description": "This governance form centers recorded in-person conversations on challenging topics and uses natural language processing and privacy-preserving identity protocols to allow insights from those conversations to travel across communities without exposing individual speakers. The MIT Center for Constructive Communication's Cortico/Fora platform exemplifies this approach: community members, with speaker permission, lift consequential highlights to stakeholders such as government officials or organizational leadership. This method combines the legitimacy and depth of face-to-face exchange with the networked reach of digital infrastructure, and has been used in civic processes including mayoral elections and community engagement with under-served populations.",
    "diagnostic_questions": [
      "Are the communities involved more likely to engage meaningfully through in-person or voice-based conversation than through text-based online platforms?",
      "Is protecting participant privacy and maintaining speaker consent a primary design constraint?",
      "Is the goal to surface insights that travel to decision-makers rather than to directly aggregate votes or ratings?",
      "Does the engagement involve under-served communities for whom fast digital modes of communication may lack legitimacy?",
      "Is there a need to connect multiple geographically or socially dispersed conversation groups around a shared set of emerging themes?"
    ],
    "countered_failure_mode_ids": [
      "engagement-maximization",
      "atomist-libertarianism"
    ],
    "example_case_ids": [
      "cortico-fora-civic-deliberation"
    ],
    "source_chapter": "Ch. 5-4"
  },
  {
    "id": "llm-collective-representative",
    "name": "LLM-Based Collective Representative (Synthetic Party / Talk to the City Model)",
    "description": "Generative foundation models (GFMs) fine-tuned on the expressed views, text, and values of a community can serve as interactive collective representatives — not of a single person, but of a group's aggregate and diverse perspectives. The book cites Denmark's Synthetic Party (Det Syntetiske Parti), which trained a GFM on data from over 200 micro-parties representing the 15-20% of Danish voters who persistently abstain, aiming to give voice to disenfranchised constituencies. Similarly, the 'Talk to the City' project allows users to converse with an agent embodying a community's synthesized views. Such models could function as an aid, complement, or check on human representatives, and could in principle represent non-human entities such as ecosystems or future generations.",
    "diagnostic_questions": [
      "Is there a constituency — such as abstentionist voters, under-represented communities, or non-human entities — whose perspectives are systematically excluded from deliberation?",
      "Is there sufficient textual or data material from the constituency to fine-tune or ground a generative model on their expressed views?",
      "Is the goal to create an interactive interlocutor rather than a static summary of views?",
      "Are there safeguards in place to prevent the model from censoring minority perspectives or homogenizing the community's diversity?",
      "Is the model intended as a complement or check on human representatives rather than a replacement for direct participation?"
    ],
    "countered_failure_mode_ids": [
      "monist-technocracy",
      "engagement-maximization"
    ],
    "example_case_ids": [
      "synthetic-party-denmark",
      "talk-to-the-city-project"
    ],
    "source_chapter": "Ch. 5-4"
  },
  {
    "id": "world-cafe-open-space-deliberation",
    "name": "World Café / Open Space Technology (Networked Small-Group Dialogue)",
    "description": "World Café and Open Space Technology are structured facilitation methods that allow dozens to thousands of people to convene simultaneously in small groups for rich dialogue, with written notes from each cluster synthesized and distributed to all participants. These methods blend the interactivity and richness of in-person conversation with the reach of written communication, and represent a long-established tradition of navigating the trade-off between diversity and bandwidth in deliberation. They are part of a rich 'dialogue and deliberation' research and practice tradition spanning 50-60 years, alongside tools like Liberating Structures and the practices documented by the National Coalition for Dialogue and Deliberation.",
    "diagnostic_questions": [
      "Is the group large enough (dozens to thousands) that unstructured open discussion would be unmanageable, but small-group dialogue could generate rich perspectives?",
      "Is there a need to synthesize insights across many simultaneous conversations into a shared body of knowledge?",
      "Is in-person (or synchronous virtual) participation feasible for all or most participants?",
      "Does the facilitating organization have capacity to manage the 'harvest' — careful synthesis of notes from many small groups?",
      "Is the goal to surface emergent themes and build shared understanding rather than to reach a binding vote or decision?"
    ],
    "countered_failure_mode_ids": [
      "engagement-maximization"
    ],
    "example_case_ids": [],
    "source_chapter": "Ch. 5-4"
  },
  {
    "id": "adaptive-administration",
    "name": "Adaptive Administration",
    "description": "Adaptive administration is a governance form in which regulatory and administrative processes are designed to evolve continuously alongside the technologies and communities they govern, rather than locking in fixed rules in advance. Drawing on Taiwan's experience, Weyl and Tang describe how regulatory sandboxes, iterative rulemaking, and close collaboration between civic technologists and government agencies allow policy to be updated as new information and new social formations emerge. This form treats governance itself as a living experiment, with feedback loops between implementers, affected communities, and rule-makers built into the design.",
    "diagnostic_questions": [
      "Are the rules governing a technology or practice updated on a continuous or iterative basis rather than set once through legislation?",
      "Do regulatory sandboxes or pilot programs exist that allow experimentation before full-scale deployment?",
      "Are affected communities and implementers brought into the rulemaking process as co-designers rather than passive subjects?",
      "Is there a formal feedback mechanism that routes real-world outcomes back into the rule-revision process?",
      "Does the administrative structure have the capacity to differentiate responses based on local context or emerging community norms?"
    ],
    "countered_failure_mode_ids": [
      "monist-technocracy",
      "atomist-libertarianism"
    ],
    "example_case_ids": [
      "vtaiwan-deliberation",
      "g0v-civic-hacking",
      "open-government-participation"
    ],
    "source_chapter": "Ch. 5-5"
  },
  {
    "id": "next-gen-badging",
    "name": "Next-Generation Badging (Micro/Mezzo/Macro Credentials)",
    "description": "Proposed by Danielle Allen, David Kidd, and Ariana Zetlin, next-generation badging replaces traditional coursework and grades with a layered system of composable credentials: granular 'micro badges' certifying specific measurable skills ladder up through 'mezzo badges' to 'macro badges' recognizable by employers and educational institutions. The structure directly mirrors the architecture of neural networks, where combinations of lower-level inputs trigger progressively higher-level, more meaningful outputs. The system is grounded in educational psychology research emphasizing the granular nature of skills and is intended to widen opportunity for historically marginalized and academically non-traditional students excluded by rigid grade-based structures. GFMs, social networks, verifiable credentials, and distributed ledgers are identified as enabling technologies for navigating, producing, and establishing trust around these layered credentials.",
    "diagnostic_questions": [
      "Are students from non-traditional or marginalized backgrounds excluded from opportunity primarily because their accomplishments do not fit the format of standardized transcripts or grades?",
      "Could a composable, layered credential system better reflect the actual granular skills of a diverse population than existing degree or grade structures?",
      "Is there infrastructure (verifiable credentials, distributed ledgers, social networks) available to establish the trust and transparency that composable badges require?",
      "Could GFMs help employers or institutions navigate the more complex credential profiles that a diverse badging system would produce?",
      "Does the current credentialing system force learners into narrow educational and career paths in ways that reduce social diversity and waste talent?"
    ],
    "countered_failure_mode_ids": [
      "gofai-bureaucratic-automation",
      "colonial-administrative-overwrite"
    ],
    "example_case_ids": [
      "next-gen-badging"
    ],
    "source_chapter": "Ch. 5-5"
  },
  {
    "id": "square-root-voting",
    "name": "Square-Root (Penrose) Voting",
    "description": "Square-root voting, originating with Lionel Penrose, addresses the problem of proportional representation across groups of different sizes by assigning each group a voting weight equal to the square root of its population or stake rather than a linear proportion. The justification is statistical: uncorrelated voters within a group tend to cancel each other out, so a group's effective influence grows only as the square root of its size. This principle of 'degressive proportionality' is approximately used in several elements of European Union governance across member nations.",
    "diagnostic_questions": [
      "Are there distinct blocs or groups whose internal votes are largely correlated, while votes across blocs are largely uncorrelated?",
      "Is there a legitimacy concern that linear proportional weighting would give large blocs disproportionate power over outcomes?",
      "Does the governance context involve federations of groups with widely varying sizes, such as nations in a union?",
      "Are the groups being weighted sufficiently internally unified to treat each as a single correlated actor?"
    ],
    "countered_failure_mode_ids": [
      "weighted-voting-paradox",
      "tyranny-of-majority"
    ],
    "example_case_ids": [
      "eu-council-voting"
    ],
    "source_chapter": "Ch. 5-6"
  },
  {
    "id": "liquid-democracy",
    "name": "Liquid Democracy (LD)",
    "description": "Liquid democracy allows any voter to either cast their vote directly or delegate it to another person, who may in turn re-delegate it, creating bottom-up, emergent patterns of representation. The concept traces back to Charles Dodgson (Lewis Carroll) and extends proportional representation by allowing fluid, issue-by-issue delegation rather than fixed representative mandates. Liquid democracy has been adopted in corporate and DAO governance and in limited political contexts such as Iceland, though it has a noted tendency to concentrate power in a small number of hands as delegation flows disproportionately to prominent figures.",
    "diagnostic_questions": [
      "Do participants vary widely in their expertise or engagement across different issue areas, suggesting that delegation to trusted specialists would be valued?",
      "Is the community large enough that direct voting on every issue is impractical for most members?",
      "Are there mechanisms in place to prevent excessive power concentration from cascading delegation chains?",
      "Is there a desire for representation to emerge organically from social trust rather than from fixed geographic or demographic boundaries?"
    ],
    "countered_failure_mode_ids": [
      "rigid-representation",
      "tyranny-of-majority"
    ],
    "example_case_ids": [
      "iceland-liquid-democracy"
    ],
    "source_chapter": "Ch. 5-6"
  },
  {
    "id": "futarchy-predictive-voting",
    "name": "Futarchy / Predictive Voting",
    "description": "Predictive voting, as proposed by Robin Hanson under the name 'Futarchy', combines prediction markets with voting: participants vote on values or desired outcomes, while prediction markets are used to identify which policies are most likely to achieve those outcomes. In the governance of the Plurality book itself, participants can simultaneously vote on proposals and predict the outcome of a decision, being rewarded for accurate predictions. Such systems are described as particularly useful when there is a large range of proposals, since predictions can surface proposals deserving attention that voting can then decide upon.",
    "diagnostic_questions": [
      "Is the decision space large enough that voters cannot evaluate all proposals without some filtering or attention-guiding mechanism?",
      "Are there separable empirical questions (what will work?) and normative questions (what do we want?) that could be handled by prediction and voting respectively?",
      "Is there a participant population with sufficient forecasting ability and incentive to participate in prediction markets?",
      "Would rewarding accurate predictions of collective outcomes be seen as legitimate rather than gameable by the community?"
    ],
    "countered_failure_mode_ids": [
      "information-poor-voting",
      "agenda-setting-capture"
    ],
    "example_case_ids": [
      "plurality-book-governance"
    ],
    "source_chapter": "Ch. 5-6"
  },
  {
    "id": "ranked-choice-voting",
    "name": "Ranked Choice / Instant-Runoff Voting",
    "description": "In ranked choice voting, participants rank a number of alternatives rather than selecting just one; the decision procedure then uses these full rankings, typically through a runoff mechanism that progressively eliminates the least-supported candidates and redistributes their votes to remaining alternatives. The book notes that ranked choice systems have a ⿻ character both literally (allowing multiple preferences to be expressed) and structurally (enabling greater party diversity by reducing the Duverger 'spoiler effect'). Arrow's Impossibility Theorem, however, establishes that no system relying solely on ranked inputs can fully satisfy all reasonable criteria for representing the common will.",
    "diagnostic_questions": [
      "Is the Duverger spoiler effect preventing viable third-party or minority candidates from being taken seriously?",
      "Do voters have clear ordinal preferences across candidates rather than just a single preferred choice?",
      "Is the community prepared to accept the complexity of a runoff counting procedure in exchange for reduced strategic voting incentives?",
      "Are there more than two serious candidates where the ordering of elimination rounds could affect the outcome?"
    ],
    "countered_failure_mode_ids": [
      "plurality-rule-duverger",
      "tyranny-of-majority"
    ],
    "example_case_ids": [],
    "source_chapter": "Ch. 5-6"
  },
  {
    "id": "participatory-market-design",
    "name": "Participatory Design and Prediction Markets",
    "description": "A set of mechanisms that use digital platforms to allow more dynamic, bottom-up resource allocation both within organizations and between organizations and their customers. Examples include platforms where customers contribute and are rewarded for new product designs (e.g., Roblox, Lego Ideas) and internal prediction markets where stakeholders are rewarded for accurately forecasting company-relevant outcomes such as product sales. These mechanisms harness dispersed local knowledge and incentivize honest revelation of preferences and information, extending the logic of mechanism design into organizational governance.",
    "diagnostic_questions": [
      "Does the organization possess large, dispersed communities of users or workers whose tacit knowledge about products or outcomes exceeds what central management can access?",
      "Is there a domain — product design, demand forecasting, project prioritization — where aggregating distributed signals would improve decisions?",
      "Can participants be meaningfully rewarded for accurate predictions or valuable design contributions without creating perverse incentives?",
      "Is the platform context one where community co-creation generates network effects or loyalty that adds value beyond the specific contributions?",
      "Would prediction markets need to be insulated from broader financial markets to prevent manipulation or conflicts of interest?"
    ],
    "countered_failure_mode_ids": [
      "monist-technocracy",
      "atomist-libertarianism"
    ],
    "example_case_ids": [
      "roblox-user-creation",
      "lego-ideas"
    ],
    "source_chapter": "Ch. 5-7"
  },
  {
    "id": "economies-of-esteem",
    "name": "Economies of Esteem",
    "description": "Online systems in which quantitative markers of social esteem or social capital — badges, follower counts, leaderboards, hyperlinks, reputation scores — partly or fully replace transferable money as the currency of accomplishment and recognition. These esteem economies can interoperate with broader markets through monetization channels such as advertising, sponsorship, and crowdfunding, allowing communities to maintain non-monetary incentive structures while still connecting to material support. The form is related to local currency markets and shares their goal of insulating core community values from distortion by external financial forces.",
    "diagnostic_questions": [
      "Is the community one where intrinsic motivation and social recognition are primary drivers of contribution, and where monetary payment might crowd out or distort those motivations?",
      "Are there clear, legible signals of contribution quality or community standing that can serve as the basis for esteem metrics?",
      "Does the community want to maintain internal value alignment while still allowing members to benefit materially from external monetization channels?",
      "Would a leaderboard, badge, or link-based reputation system be perceived as legitimate and non-gameable by community members?",
      "Can the esteem system be designed to resist capture by wealthy or highly-networked participants who might dominate rankings through resources rather than genuine contribution?"
    ],
    "countered_failure_mode_ids": [
      "atomist-libertarianism",
      "big-tech-engagement-maximization"
    ],
    "example_case_ids": [
      "github-reputation-system",
      "wikipedia-barnstars"
    ],
    "source_chapter": "Ch. 5-7"
  },
  {
    "id": "polypolitan-migration",
    "name": "Polypolitan Migration Policy",
    "description": "A proposed approach to international labor mobility in which migration is conditioned upon endorsement or support from one or more civil society organizations in the receiving country, rather than solely on state-administered criteria. As developed by philosopher Danielle Allen, this extends and combines existing practices in Canada (private community-based sponsorship) and Taiwan (multiple qualifying pathways for long-term work permits). The mechanism diffuses the stringent control of labor mobility by nation-states while maintaining accountability to civil society and facilitating social integration, drawing on ⿻ associational infrastructure rather than centralized bureaucratic gatekeeping.",
    "diagnostic_questions": [
      "Is the jurisdiction seeking to expand labor mobility while maintaining accountability for social integration and avoiding harms associated with unchecked migration?",
      "Are there robust civil society organizations — faith communities, professional associations, ethnic mutual-aid networks — that can meaningfully vouch for and support incoming migrants?",
      "Does the existing state-administered migration system fail to harness the distributed knowledge of communities about which migrants would integrate well?",
      "Could private sponsorship pathways be extended beyond current narrow categories (e.g., refugees) to a broader class of economic migrants?",
      "Would multi-pathway qualification systems reduce the concentration of gatekeeping power in any single state agency or political process?"
    ],
    "countered_failure_mode_ids": [
      "atomist-libertarianism",
      "monist-technocracy"
    ],
    "example_case_ids": [
      "canada-private-sponsorship",
      "taiwan-work-permit-pathways"
    ],
    "source_chapter": "Ch. 5-7"
  },
  {
    "id": "circular-investment-henry-george-theorem",
    "name": "Circular Investment (Henry George Theorem)",
    "description": "A fiscal mechanism grounded in the Henry George Theorem — proved by Vickrey and published by Arnott and Stiglitz — which holds that correctly designed common ownership taxes on land and other assets can raise sufficient revenue to fund all subsidies required for supermodular (public good) investments. The theorem suggests a near-limitless potential for pairing innovation in taxation and common property with allocation of funds to supermodular activity, analogous to a superconducting circuit. A simple illustration is that building better local public schools raises surrounding land values; a land tax captures this uplift and can in principle fund the full cost of the investment.",
    "diagnostic_questions": [
      "Is there a supermodular investment — infrastructure, education, research — whose social returns are substantially capitalized into nearby asset values, particularly land?",
      "Is it possible to design a common ownership or land value tax that captures this uplift without distorting investment incentives?",
      "Does the jurisdiction have the administrative and legal capacity to implement and enforce a land value or partial common ownership tax?",
      "Could the resulting revenue stream be earmarked or matched to specific supermodular public goods in a way that creates a self-reinforcing investment cycle?",
      "Are there inter-temporal or cross-jurisdictional dimensions of the investment that standard fiscal tools fail to capture, suggesting a need for ⿻ funding extensions?"
    ],
    "countered_failure_mode_ids": [
      "atomist-libertarianism",
      "monist-technocracy"
    ],
    "example_case_ids": [
      "taiwan-land-self-assessment"
    ],
    "source_chapter": "Ch. 5-7"
  },
  {
    "id": "plurality-marketing-bridging",
    "name": "⿻ Marketing (Bridging-Based Diffusion Strategy)",
    "description": "⿻ Marketing is a diffusion approach that selects endorsers, media coverage, and events by mapping the primary lines of division within a target audience and choosing vectors with respect across those divisions, then recursively applying the same logic to each sub-community. Weyl and Tang implemented this approach for the book itself, constructing a recursive 'tree' of audience segments two levels deep and seeking endorsements that bridge across each fork. The goal is to spread a new technology or idea in rough balance across existing social divides, so that no single community captures the benefit and the authority of the innovation grows through a networked, legitimate process rather than top-down imposition.",
    "diagnostic_questions": [
      "Does the diffusion strategy map the primary social divisions within the target audience before selecting endorsers or channels?",
      "Are endorsers or media vectors chosen for cross-cutting prestige — credibility that spans, rather than speaks only to, a single sub-community?",
      "Is the selection process applied recursively to sub-communities rather than only at the top level?",
      "Does the approach aim for balanced spread across existing social divides rather than maximizing adoption within the most receptive segment?",
      "Is the marketing treated as an experiment to learn from, with outcomes fed back into the strategy?"
    ],
    "countered_failure_mode_ids": [],
    "example_case_ids": [],
    "source_chapter": "Ch. 6-0"
  },
  {
    "id": "square-root-scale-seeding",
    "name": "Square-Root Scale Seeding",
    "description": "Square-root scale seeding is a ⿻ theory-of-change heuristic in which the most fertile experimental communities are those whose size is approximately the square root of the total population one aims to eventually reach. In a world of roughly 10 billion people, this suggests units of around 100,000 — large enough to contain the internal diversity needed for most ⿻ applications, yet small enough that 100,000 such units could together cover the entire global population, enabling both robust within-community experimentation and diverse, balanced cross-community diffusion. The heuristic maps onto mid-sized municipalities, large corporations, religious dioceses, large universities, and mid-sized civic organizations, all of which recur as natural seeding sites in Weyl and Tang's sectoral analysis.",
    "diagnostic_questions": [
      "Does the candidate community contain enough internal diversity to enable the ⿻ application being tested?",
      "Is the community small enough that many similar communities exist, allowing diverse, balanced seeding across social divides?",
      "Does the community have the institutional capacity to manage systemic harms and benefits as they arise?",
      "Does the community hold sufficient prestige within some broader network that successful experiments could spread?",
      "Are communities at this scale loosely networked with each other, enabling cross-community learning without premature consolidation?"
    ],
    "countered_failure_mode_ids": [
      "blitzscaling-adoption",
      "rct-experimentation-on"
    ],
    "example_case_ids": [
      "g0v-civic-hacking",
      "vtaiwan-deliberation"
    ],
    "source_chapter": "Ch. 6-0"
  },
  {
    "id": "community-based-experimentation-with",
    "name": "Community-Based 'Experimentation With' (Participatory Action Research Model)",
    "description": "'Experimentation with' is a mode of technology development in which communities of early adopters — who often include system designers themselves — co-create tools, contribute applications, and shape desired outcomes through iterative learning rather than pre-specified metrics. Weyl and Tang trace this approach to Participatory Action Research in public health and to the early digital ecosystem that laid the foundation for ⿻, including time-sharing, personal computing, and many networked applications. Systems spread to adjacent communities through many rounds of learning from unexpected uses and feeding that learning back into design, rather than through centralized approval and rapid mass disbursement. The approach contrasts with both randomized controlled trial 'experimentation on' communities and venture-capital-driven blitzscaling.",
    "diagnostic_questions": [
      "Are early adopters both users and contributors to the technology, not merely subjects of an experiment designed by outside experts?",
      "Does the development process treat systemic harms and interdependencies as they arise, rather than testing for them via pre-specified metrics before launch?",
      "Is spread driven by adjacent communities adopting and adapting the technology, rather than by centralized disbursement?",
      "Are applications created by community members made available to other communities as part of the diffusion process?",
      "Is the governing community broad enough — across social sectors, not just technically sophisticated early adopters — to account for spillovers on those outside the initial adopter group?"
    ],
    "countered_failure_mode_ids": [
      "blitzscaling-adoption",
      "rct-experimentation-on"
    ],
    "example_case_ids": [
      "g0v-civic-hacking",
      "vtaiwan-deliberation"
    ],
    "source_chapter": "Ch. 6-0"
  },
  {
    "id": "worker-ownership-cooperative",
    "name": "Worker Ownership and Cooperative Governance",
    "description": "Worker ownership and cooperative governance structures give employees formal decision-making authority over their firms, including voting rights on major strategic and operational choices. The book points to the Mondragon Corporation and similar cooperatives as enduring examples where worker-members elect boards and share in profits, countering the concentration of power in shareholder-dominated firms. Weyl and Tang situate these models as partial realizations of ⿻ principles at the workplace scale, noting that co-ops tend to sustain more equitable wage distributions and greater job security than investor-owned counterparts.",
    "diagnostic_questions": [
      "Do workers hold formal voting rights over strategic decisions, not merely advisory roles?",
      "Is profit distributed according to labor contribution or democratic formula rather than capital share alone?",
      "Are governance structures resilient enough to resist buyout or conversion back to investor ownership?",
      "Does the cooperative structure span multiple scales — individual shop floor, firm-wide, and sectoral federation?",
      "Is there an accessible pathway for new workers to acquire membership stakes without prohibitive buy-in costs?"
    ],
    "countered_failure_mode_ids": [
      "shareholder-primacy-capture",
      "atomist-libertarianism"
    ],
    "example_case_ids": [
      "mondragon-cooperative",
      "up-and-go-cooperative"
    ],
    "source_chapter": "Ch. 6-1"
  },
  {
    "id": "plural-hiring-intersectional-talent",
    "name": "⿻ Hiring via Intersectional Talent Verification",
    "description": "⿻ hiring uses network-based identity and credential verification, large language models (LLMs), and remote shared reality to broaden recruiting beyond standard career paths. LLMs trained for cross-context translation help hiring managers recognize equivalent qualifications across diverse social backgrounds, while network-based verification systems allow secure attestation of accomplishments across wide social distances rapidly and cheaply. Remote shared reality enables interactive recruiting events in a wider range of venues at lower cost, and accelerates acculturation and onboarding. The approach aims to optimize for diversity in sophisticated, intersectional ways rather than simply matching population proportions in salient demographic categories.",
    "diagnostic_questions": [
      "Does the organization currently recruit from a narrow set of degree programs or professional backgrounds, missing talented candidates from non-standard paths?",
      "Are credential verification and résumé interpretation across diverse social contexts a significant bottleneck in hiring?",
      "Is the organization seeking to represent the intersectional diversity of its customer base among its employees?",
      "Would remote recruiting events lower the cost of reaching underrepresented talent pools?",
      "Is there a need to help applicants better understand which roles their non-standard backgrounds qualify them for?"
    ],
    "countered_failure_mode_ids": [],
    "example_case_ids": [],
    "source_chapter": "Ch. 6-1"
  },
  {
    "id": "participatory-epidemic-surveillance",
    "name": "Participatory Epidemic Surveillance",
    "description": "Participatory epidemic surveillance engages citizens and communities as active data contributors and co-interpreters in public health monitoring, rather than treating them as passive subjects of top-down surveillance systems. The book points to Taiwan's COVID-19 response, where civic hackers and government collaborated to create open data dashboards and participatory mask-map apps, distributing both the work of data collection and the benefits of transparency. This form harnesses the distributed knowledge of communities—pharmacies, clinics, neighborhoods—to produce real-time, high-resolution health intelligence that centralized systems miss. It counters surveillance-capitalism and monist-technocracy failure modes by keeping data flows accountable to affected communities rather than opaque state or corporate actors.",
    "diagnostic_questions": [
      "Are affected communities able to contribute to and interpret health surveillance data, rather than only being surveilled?",
      "Does the system distribute the benefits of health data transparency back to participants and neighborhoods?",
      "Is the data infrastructure open and auditable by civic actors, not just government or corporate operators?",
      "Does the design allow for local variation and community-specific health intelligence rather than one-size-fits-all metrics?",
      "Are there mechanisms for communities to contest, correct, or enrich centrally aggregated health data?"
    ],
    "countered_failure_mode_ids": [
      "monist-technocracy",
      "surveillance-capitalism"
    ],
    "example_case_ids": [
      "privacy-preserving-contact-tracing",
      "open-data-civic-apps",
      "g0v-civic-hacking"
    ],
    "source_chapter": "Ch. 6-2"
  },
  {
    "id": "plural-clinical-trial-design",
    "name": "⿻ Clinical Trial Design",
    "description": "⿻ clinical trial design refers to the application of plurality principles—diversity, distributed participation, and intersectional representation—to the design and governance of medical research. Rather than recruiting narrow, demographically homogeneous trial populations or concentrating trial design authority in central research institutions, this approach distributes trial design across patient communities, advocacy groups, and clinicians with diverse backgrounds. The book connects this to the broader ⿻ argument that diversity in participants and perspectives is not just ethically desirable but epistemically productive, generating findings that are more generalizable and more sensitive to variation across populations. Community-based participatory research and adaptive trial designs are cited as precedents.",
    "diagnostic_questions": [
      "Does the trial design process include meaningful input from patient communities and advocacy groups, not just research institutions?",
      "Is the participant population designed to reflect intersectional diversity, or does it default to historically overrepresented groups?",
      "Are findings disaggregated and reported in ways that reveal variation across demographic and community lines?",
      "Do affected communities have governance rights over how trial data is shared, published, or commercialized?",
      "Is the trial methodology adaptive, allowing for iteration based on community feedback during the research process?"
    ],
    "countered_failure_mode_ids": [
      "monist-technocracy"
    ],
    "example_case_ids": [],
    "source_chapter": "Ch. 6-2"
  },
  {
    "id": "community-health-governance",
    "name": "Community Health Governance",
    "description": "Community health governance denotes governance arrangements in which local communities exercise meaningful authority over health resource allocation, care priorities, and health system design, rather than delegating all such decisions to state bureaucracies or market mechanisms. The book frames this as a ⿻ application of polycentric and federated governance principles to health, pointing to models such as community health centers, participatory budgeting applied to local health funds, and Indigenous health governance structures as instantiations. These arrangements recognize that communities possess situated knowledge about their own health needs that neither central planners nor market prices reliably aggregate, and that legitimacy in health governance depends on proximity and accountability to affected populations.",
    "diagnostic_questions": [
      "Do local communities have formal authority—not just advisory roles—in decisions about health resource allocation and care priorities?",
      "Is there a mechanism for communities to surface and act on local health knowledge that would be invisible to central planners?",
      "Are accountability relationships structured so that health system administrators answer to local communities, not only to higher-level bureaucracies?",
      "Does the governance structure accommodate meaningful variation in health priorities and care models across communities?",
      "Are marginalized or under-resourced communities specifically empowered, rather than only communities with existing organizational capacity?"
    ],
    "countered_failure_mode_ids": [
      "monist-technocracy",
      "atomist-libertarianism"
    ],
    "example_case_ids": [
      "participatory-budgeting-workplace"
    ],
    "source_chapter": "Ch. 6-2"
  },
  {
    "id": "health-production-society",
    "name": "Health Production Society",
    "description": "A ⿻ form of social health insurance reconceived as a mutual-aid society that finances the *conditions required for* health rather than merely paying for treatment of disease or infirmity. Such a society pools risk and redistributes benefits across communities that share common environmental, behavioral, or professional health risks — spanning clean water and nutrition in developing contexts to substance-abuse mitigation in wealthy ones — and can be formed at local, national, or global scales. The model draws on historical precedents including Roman *collegia* and medieval German *Knappschaften*, extending their logic through ⿻ financing mechanisms and privacy-preserving technologies to produce coordinated, community-grounded health rather than simply restoring it.",
    "diagnostic_questions": [
      "Does the community share common environmental, behavioral, or professional health risks that make pooled, proactive investment more effective than individual insurance?",
      "Are the relevant health determinants highly localized and grounded in shared values, professional goals, or belief systems that a centralized insurer would struggle to address?",
      "Is there an existing 'association' — shared space for common belief — around which a health production society could be organized?",
      "Would separating health financing from the wage-tax/formal-sector model unlock participation by currently excluded populations?",
      "Does the scope of intervention extend beyond treating disease to financing social determinants such as nutrition, sanitation, or behavioral health?"
    ],
    "countered_failure_mode_ids": [
      "monist-technocracy",
      "atomist-libertarianism"
    ],
    "example_case_ids": [
      "global-fund-aids-tb-malaria"
    ],
    "source_chapter": "Ch. 6-2"
  },
  {
    "id": "health-impact-tokenization",
    "name": "Health Impact Tokenization",
    "description": "A ⿻ mechanism for representing, coordinating, and trading the full social value of health investments — including insurance-type outcomes (mortality/morbidity risk reduction) and broader knock-on impacts (economic, familial, societal) — through digital certificates and open impact pools. Tokens can be used to participate in governance of projects or funding pools, to trade and invest, to exchange for services, or to fund further projects; bundling and trading can make buying health impact as simple as purchasing carbon credits. The approach uses a combination of technocratic outcome evaluation and crowd-sourced intelligence (drawing on ⿻ voting mechanisms) to tokenize impact, and relies on generative foundation models to accelerate instrument formation and adapt them to specific investments.",
    "diagnostic_questions": [
      "Is there a significant gap between the full social value of a health investment and the financing it is able to attract, suggesting that win-win investments remain blocked?",
      "Are health funders, implementers, and beneficiaries fragmented in ways that an open coordination standard and shared impact pool could address?",
      "Would tokenized governance rights give direct beneficiaries meaningful participation in health financing decisions?",
      "Can the insurance value of outcomes (e.g. lives saved) and the broader market and non-market impacts be represented digitally so they become tradeable?",
      "Is there a 'fractal' or cascading structure of impact — from project-level to aggregate — that could support layered health-impact markets?"
    ],
    "countered_failure_mode_ids": [
      "missing-markets-health",
      "coordination-failure-health"
    ],
    "example_case_ids": [
      "global-fund-aids-tb-malaria"
    ],
    "source_chapter": "Ch. 6-2"
  },
  {
    "id": "deliberative-pandemic-policy",
    "name": "Deliberative Pandemic Policy",
    "description": "A ⿻ governance form in which online deliberative, collaborative, voting, and prediction-market tools are used to aggregate the wisdom of diffuse publics — including non-expert populations such as civic associations — for formulating public health policy under conditions of massive uncertainty. The approach treats localized and contextual knowledge held by communities as a ⿻ good, to be harvested without imposing centralized control or sacrificing privacy. Taiwan's response to COVID-19 exemplifies this form: government rapidly supported citizen-led initiatives (g0v, Polis) for tasks such as mask-supply tracking, enabling an 'extitutional' approach that was later institutionalized. The form assumes that preserving social cohesion and public trust in policymakers is at least as important as getting any single policy decision correct.",
    "diagnostic_questions": [
      "Is there massive uncertainty about key policy-relevant facts such that diffuse public knowledge may outperform closed expert deliberation?",
      "Are there citizen-led online initiatives already emerging that government could empower rather than supplant?",
      "Would aggregating localized and contextual knowledge through deliberative or prediction-market tools provide information orders of magnitude beyond what expert panels alone can supply?",
      "Is social cohesion and public trust in policymakers at risk of erosion under a top-down, expert-only model?",
      "Can privacy-preserving technologies enable broad participation without exposing personal data to surveillance by central authorities?"
    ],
    "countered_failure_mode_ids": [
      "monist-technocracy",
      "engagement-maximization"
    ],
    "example_case_ids": [
      "vtaiwan-deliberation",
      "g0v-civic-hacking",
      "polis-clustering"
    ],
    "source_chapter": "Ch. 6-2"
  },
  {
    "id": "indigenous-health-co-administration",
    "name": "Indigenous Health Co-Administration",
    "description": "A governance form in which colonialist successor administrations collaborate with Indigenous communities to co-administer healthcare and health services according to Indigenous community values, allowing for self-determination of solutions by Indigenous peoples. Emerging experiments in Canada and Australia involve learning from Indigenous health models and co-designing systems that are responsive to cultural value systems. Generative foundation models are identified as a promising tool to leverage large and diffuse textual bodies produced in these initiatives — representing the 'point of view' of organizations or entire cultures as a queryable 'synthetic wisdom' — to reimagine and redesign healthcare administration along non-colonialist lines, as discussed in the book's treatment of augmented deliberation.",
    "diagnostic_questions": [
      "Is healthcare currently administered through a model originating in colonial governance that does not reflect the values or self-determination of Indigenous communities?",
      "Are there large and diffuse bodies of textual data from Indigenous health initiatives that could be leveraged by generative foundation models to surface cultural perspectives?",
      "Would a co-administration model — rather than full handover or continued unilateral control — allow for meaningful self-determination while maintaining shared infrastructure?",
      "Can the 'point of view' of an Indigenous community be represented as a queryable 'individual' in deliberative AI tools to inform incentive-compatible healthcare design?",
      "Are there existing 'extitutional' Indigenous-led health practices that could be formalized or connected to broader health governance without being subsumed by it?"
    ],
    "countered_failure_mode_ids": [
      "monist-technocracy",
      "authoritarian-digital-governance"
    ],
    "example_case_ids": [],
    "source_chapter": "Ch. 6-2"
  },
  {
    "id": "federated-medical-data-sharing",
    "name": "Federated Medical Data Sharing",
    "description": "A ⿻ data governance form that enables large-scale sharing of medical data — diagnostic images, clinical notes, administrative records — across institutions while preserving patient privacy through privacy-enhancing technologies such as zero- or low-knowledge proofs, federated learning, and cryptographic foundations. Rather than requiring patients to trade privacy for utility (as in Web2 platforms), this form builds cryptographic principles from the foundation so that medical research and practice can draw on vast, diffuse, unstructured datasets without incurring open-ended privacy liability. The approach enables GFMs to identify weak or confounded signals as the basis for novel causal insights, and could make post-approval regulatory changes far more dynamic and adaptive.",
    "diagnostic_questions": [
      "Is potentially valuable medical data currently siloed across institutions in ways that prevent the compilation of large datasets needed for diagnosis of rare conditions or population-level causal inference?",
      "Would zero- or low-knowledge proofs allow specific kinds of information to be reliably shared without over-sharing, respecting both medical privacy and research needs?",
      "Is there a current trade-off between privacy and utility in accessing medical services that cryptographic architectures could eliminate?",
      "Can federated learning or secure multiparty computation enable model training across distributed data without centralizing sensitive records?",
      "Are there variations in medical practice and outcomes across institutions that, if queryable, could yield counterfactual insights analogous to regression discontinuity design?"
    ],
    "countered_failure_mode_ids": [
      "surveillance-capitalism",
      "monist-technocracy"
    ],
    "example_case_ids": [],
    "source_chapter": "Ch. 6-2"
  },
  {
    "id": "public-interest-media-funding",
    "name": "Public-Interest Media Funding",
    "description": "Public-interest media funding describes mechanisms — including public broadcasters, journalism endowments, news vouchers, and quadratic-funding-style grants — designed to sustain journalism that serves broad civic needs rather than advertiser or engagement imperatives. The book draws on examples including the BBC, NPR, and proposals for civic news vouchers modeled on quadratic funding, where citizens direct small allocations toward news outlets they value, with funds matched in proportion to breadth of support rather than dollar amount. This form counters the market failure in local and accountability journalism that surveillance-capitalism business models have accelerated.",
    "diagnostic_questions": [
      "Is local or accountability journalism in the target context under financial pressure from advertising-revenue collapse?",
      "Are there existing public-media institutions whose mandates could be extended or whose funding models could be updated to include participatory allocation?",
      "Would a news-voucher or quadratic-funding mechanism be administratively feasible given the jurisdiction's media landscape?",
      "Do potential recipient outlets have sufficient independence from government or large advertiser capture to serve genuine public-interest functions?",
      "Is there political will to frame journalism funding as civic infrastructure rather than subsidy to a particular industry?"
    ],
    "countered_failure_mode_ids": [
      "engagement-maximization",
      "surveillance-capitalism",
      "media-capture"
    ],
    "example_case_ids": [
      "quadratic-funding"
    ],
    "source_chapter": "Ch. 6-3"
  },
  {
    "id": "plural-media-literacy-education",
    "name": "⿻ Media Literacy Education",
    "description": "⿻ media literacy education goes beyond traditional fact-checking curricula to cultivate the capacity to navigate diversity of sources, perspectives, and epistemic communities — treating media literacy as a civic and collaborative skill rather than an individual critical-thinking exercise. The book draws on Taiwan's approach, where media literacy is embedded in civic education and linked to crowdsourced fact-checking platforms, enabling citizens to contribute to shared informational infrastructure rather than merely consume or evaluate it. This form treats the development of shared epistemic norms as a collective governance challenge as much as an educational one.",
    "diagnostic_questions": [
      "Does existing media-literacy education focus primarily on individual skill-building, or does it incorporate collective and participatory dimensions?",
      "Are there civic-tech platforms (fact-checking, annotation, Polis-style deliberation) that could be integrated into educational curricula?",
      "Is there institutional support — from ministries of education, school boards, or community organizations — for updating media literacy frameworks?",
      "Does the curriculum treat misinformation as primarily a supply-side or demand-side problem, and how does that framing shape interventions?",
      "Are there models from other countries (Taiwan, Finland) whose pedagogical approaches could be adapted?"
    ],
    "countered_failure_mode_ids": [
      "engagement-maximization",
      "filter-bubble-fragmentation",
      "surveillance-capitalism"
    ],
    "example_case_ids": [
      "crowdsourced-fact-checking",
      "digital-literacy-civic-education"
    ],
    "source_chapter": "Ch. 6-3"
  },
  {
    "id": "cryptographic-source-protection",
    "name": "Cryptographically Secure Source Protection",
    "description": "Cryptographic source protection uses zero-knowledge proofs (ZKPs) based on public credentials to allow journalistic sources to remain confidential even to journalists themselves, while still proving relevant elements of their position or identity to audiences. Designated verifier signatures and related ⿻ cryptographic tools allow a nuanced mix of trustworthy and private disclosures, protecting community norms of confidentiality while enabling sources to override those norms at personal cost when critical public-interest disclosures are required. The approach avoids a pure cryptographic arms race by grounding disclosure decisions in social and reputational stakes.",
    "diagnostic_questions": [
      "Does a source need to prove credibility (e.g., organizational position) to a journalistic audience without revealing their identity?",
      "Is there a risk that revealing more identifying information would narrow the pool of possible sources and expose the individual?",
      "Are designated verifier signatures or ZKP-based credential systems available to the journalist and source?",
      "Does the situation involve tension between organizational confidentiality norms and broader public-interest disclosure?"
    ],
    "countered_failure_mode_ids": [
      "surveillance-capitalism",
      "authoritarian-digital-governance"
    ],
    "example_case_ids": [],
    "source_chapter": "Ch. 6-4"
  },
  {
    "id": "community-context-aware-feed-curation",
    "name": "Community-Context-Aware Feed Curation",
    "description": "Community-context-aware feed curation redesigns social media algorithms to surface 'communities' based on both platform-internal behavioral signals (views, likes, shares, group membership) and external data such as social science findings or explicit self-identification. For each community, the algorithm highlights content that represents rough internal consensus as well as important points of division, and offers users exposure to consensus content from communities on other sides of those divides. The design counters false-consensus and pluralistic-ignorance effects by making visible which content is broadly agreed upon within a citizen's communities and which is divisive, while reshaping creator incentives toward stories that bring people together.",
    "diagnostic_questions": [
      "Does the current feed algorithm optimize primarily for individual engagement in ways that amplify false consensus or filter-bubble effects?",
      "Are there identifiable communities — based on behavior or self-identification — whose internal consensus and points of division could be surfaced to members?",
      "Would surfacing 'what your community agrees on' versus 'what divides your community' change how creators and users engage with content?",
      "Is there a risk of pluralistic ignorance (silent majorities unable to act) or false consensus (extremes appearing mainstream) that structured community context could correct?"
    ],
    "countered_failure_mode_ids": [
      "engagement-maximization",
      "affective-polarization"
    ],
    "example_case_ids": [
      "community-notes-bridging",
      "polis-clustering"
    ],
    "source_chapter": "Ch. 6-4"
  },
  {
    "id": "plural-environmental-governance",
    "name": "⿻ Environmental Governance",
    "description": "⿻ environmental governance applies the plurality framework to ecological challenges by recognizing that environmental systems — watersheds, forests, atmospheric commons — cut across administrative, cultural, and species boundaries in ways that resist both centralized technocratic management and pure market mechanisms. The book treats environmental governance as a domain where ⿻ tools (polycentric coordination, data coalitions, participatory sensing, partial common ownership of natural assets) are especially well-suited, because the diversity of affected stakeholders and the complexity of ecosystems call for the kind of structured cross-difference collaboration that ⿻ is designed to enable.",
    "diagnostic_questions": [
      "Does the environmental challenge involve multiple overlapping jurisdictions, communities, or stakeholder groups with different relationships to the affected ecosystem?",
      "Are market-based mechanisms (carbon credits, cap-and-trade) failing to reflect the full diversity of community and ecological interests?",
      "Is there an opportunity to use participatory or sensor data to make environmental impacts legible to non-expert stakeholders?",
      "Could partial common ownership or data coalition models realign incentives between private landholders and broader ecological communities?",
      "Is the current governance structure treating the environment as a unitary resource rather than a site of plural, intersecting claims?"
    ],
    "countered_failure_mode_ids": [
      "monist-technocracy",
      "atomist-libertarianism"
    ],
    "example_case_ids": [],
    "source_chapter": "Ch. 6-4"
  },
  {
    "id": "carbon-partial-common-ownership",
    "name": "Partial Common Ownership of Natural Assets",
    "description": "Applying partial common ownership (Harberger-style self-assessment with turnover taxes) to natural assets such as land, forests, mineral rights, or carbon stocks creates a mechanism by which private holders retain use rights but pay a continuous social return calibrated to their own declared valuation. The book suggests this form can realign incentives in environmental governance by ensuring that the social and ecological value of natural commons is not fully captured by private titleholders, while avoiding the coordination failures of pure public ownership. Combined with data commons and participatory sensing, it can generate revenue streams for ecological stewardship.",
    "diagnostic_questions": [
      "Are private owners of ecologically significant land or resources capturing rents that exceed their productive contribution, at the expense of broader ecological communities?",
      "Is there a credible self-assessment and turnover mechanism that could be piloted on a class of natural assets?",
      "Would continuous social returns from natural asset ownership fund meaningful public ecological investment?",
      "Does the current titling regime create lock-in that prevents reallocation of land to higher-ecological-value uses?",
      "Could partial common ownership reduce the political resistance to land-value or carbon taxation by tying it to owner self-declaration?"
    ],
    "countered_failure_mode_ids": [
      "atomist-libertarianism"
    ],
    "example_case_ids": [],
    "source_chapter": "Ch. 6-4"
  },
  {
    "id": "natural-personhood-guardian-representation",
    "name": "Natural Personhood & Guardian Representation",
    "description": "A governance form in which waterways or other natural ecosystems are granted legal personhood and assigned human guardians who represent their interests in social and legal decisions. Examples include the Whanganui River in New Zealand, the Magpie River (Muteshekau Shipu) in Canada, and the Ganga and Yamuna rivers in India. This form extends participatory governance beyond human communities to include the interests of non-human entities, creating legal standing for ecosystems that would otherwise be voiceless in institutional processes. The book presents this as complementary to data coalitions and digital twins: the river's digital twin can simultaneously be viewed as a subject with rights and responsibilities and as a shared ⿻ good.",
    "diagnostic_questions": [
      "Is the ecosystem in question a transjurisdictional or shared resource whose degradation affects multiple communities?",
      "Are there existing cultural, indigenous, or legal traditions that recognize the ecosystem as a participant or rights-bearing entity?",
      "Can a community of stakeholders who rely on and care for the ecosystem serve as credible guardians or stewards?",
      "Does the governance challenge involve cross-border or multi-party coordination where no single authority holds jurisdiction?",
      "Is there a data infrastructure (e.g., a digital twin or GFM) that could give the ecosystem a representable 'voice' in deliberations?"
    ],
    "countered_failure_mode_ids": [
      "monist-technocracy",
      "atomist-libertarianism"
    ],
    "example_case_ids": [
      "whanganui-river-personhood",
      "lass-citizen-environmental-sensing"
    ],
    "source_chapter": "Ch. 6-6"
  },
  {
    "id": "peer-learning-network",
    "name": "Peer Learning Network",
    "description": "A distributed educational structure in which learners teach and learn from one another across difference, rather than receiving instruction from a single authoritative source. The book presents this as a ⿻ form because it instantiates diversity as a resource — the variation in what participants know and have experienced is the substrate from which collective understanding grows. Peer learning networks can operate digitally, in person, or in hybrid modes, and are often organized around project-based challenges rather than fixed curricula.",
    "diagnostic_questions": [
      "Are learners regularly positioned as both teachers and students, rather than one or the other?",
      "Does the learning structure leverage diversity of background and experience as a core input rather than an obstacle to manage?",
      "Is the curriculum emergent or co-created, rather than fixed and delivered top-down?",
      "Does participation span communities or institutions that would not otherwise interact?",
      "Are assessments or credentials generated by the community of peers rather than exclusively by external authorities?"
    ],
    "countered_failure_mode_ids": [
      "monist-technocracy",
      "atomist-libertarianism"
    ],
    "example_case_ids": [
      "g0v-civic-hacking",
      "participatory-hackathon"
    ],
    "source_chapter": "Ch. 6-5"
  },
  {
    "id": "plurality-pluralism-education",
    "name": "⿻ Pluralism Education",
    "description": "An approach to formal and informal education that treats navigating difference — across cultures, disciplines, lived experiences, and ways of knowing — as a core civic and intellectual competency. Rather than treating pluralism as a byproduct of liberal tolerance, ⿻ pluralism education positions the active cultivation of cross-difference understanding as a goal of curriculum design, pedagogical method, and institutional structure. The book associates this with the Deweyan tradition of education as democratic preparation, updated for a networked world where the relevant publics are diverse and overlapping.",
    "diagnostic_questions": [
      "Does the educational program treat exposure to and collaboration across difference as a central learning objective rather than incidental?",
      "Are students given structured opportunities to encounter and work through genuine disagreement?",
      "Does the curriculum draw on multiple epistemic traditions, not only dominant Western or technocratic frameworks?",
      "Are pedagogical methods designed to build bridging capacity, not only bonding within homogeneous cohorts?",
      "Is the institution's own governance structured to model the pluralism it teaches?"
    ],
    "countered_failure_mode_ids": [
      "monist-technocracy",
      "atomist-libertarianism"
    ],
    "example_case_ids": [],
    "source_chapter": "Ch. 6-5"
  },
  {
    "id": "project-based-collaborative-learning",
    "name": "Project-Based Collaborative Learning",
    "description": "A pedagogical form in which learners acquire knowledge and skills through sustained engagement with real-world problems, typically in teams that cut across disciplinary, cultural, or institutional boundaries. The book frames this as especially aligned with ⿻ because genuine problems do not respect the boundaries of academic disciplines or social identities, so project-based work naturally recruits diversity and rewards collaborative synthesis. Assessment in this form tends to be portfolio- or outcome-based rather than standardized-test-based.",
    "diagnostic_questions": [
      "Are learners working on problems with genuine stakes and real-world audiences, rather than purely synthetic exercises?",
      "Do teams deliberately mix participants across disciplinary, cultural, or institutional lines?",
      "Is assessment based on artifacts, demonstrations, or community feedback rather than individual standardized tests?",
      "Does the project structure require negotiation and integration of genuinely different knowledge and perspectives?",
      "Are projects connected to civic, social, or community contexts rather than purely academic ones?"
    ],
    "countered_failure_mode_ids": [
      "monist-technocracy"
    ],
    "example_case_ids": [
      "participatory-hackathon",
      "g0v-civic-hacking"
    ],
    "source_chapter": "Ch. 6-5"
  },
  {
    "id": "digital-civic-apprenticeship",
    "name": "Digital Civic Apprenticeship",
    "description": "A learning form in which novices are embedded within active civic-technology or open-government projects, acquiring skills and civic identity through participation in real governance work rather than simulated classroom exercises. The book points to g0v and related civic-hacking communities as instantiating this model, where contributors of all skill levels join working projects, learn from more experienced peers, and progressively take on greater responsibility. This form is distinguished from internships by the open, contributory, and non-hierarchical character of the host community.",
    "diagnostic_questions": [
      "Are learners contributing to live projects with real civic stakes, not just training exercises?",
      "Is the community open to contributors at multiple skill levels without formal gatekeeping?",
      "Do novices have access to experienced practitioners through shared collaborative tools and communication channels?",
      "Does participation build a lasting civic identity and network, not just a line on a résumé?",
      "Is the project's output publicly available and governed by the contributing community?"
    ],
    "countered_failure_mode_ids": [
      "monist-technocracy"
    ],
    "example_case_ids": [
      "g0v-civic-hacking",
      "participatory-hackathon"
    ],
    "source_chapter": "Ch. 6-5"
  },
  {
    "id": "next-gen-credentialing",
    "name": "Next-Generation Credentialing",
    "description": "A set of credential and badging systems that capture competencies, contributions, and collaborative achievements that traditional degrees and standardized tests do not measure — including civic participation, cross-cultural collaboration, open-source contribution, and deliberative skill. The book frames next-generation credentialing as a key enabler of ⿻ learning ecosystems because it makes visible the skills and networks that ⿻ governance depends on, allowing learners, employers, and communities to recognize and reward them. These systems are typically community-issued, stackable, and interoperable rather than controlled by a single institution.",
    "diagnostic_questions": [
      "Does the credential capture competencies (e.g., deliberative skill, cross-cultural collaboration) that traditional transcripts miss?",
      "Is the credential issued or co-validated by a community of practice rather than exclusively by a single institution?",
      "Are credentials stackable and portable across institutional contexts?",
      "Does the credentialing system create incentives for civic and collaborative contributions, not only individual academic achievement?",
      "Is the credential legible to both civic organizations and labor markets?"
    ],
    "countered_failure_mode_ids": [
      "monist-technocracy",
      "atomist-libertarianism"
    ],
    "example_case_ids": [
      "next-gen-badging"
    ],
    "source_chapter": "Ch. 6-5"
  },
  {
    "id": "digital-public-infrastructure-dpi",
    "name": "Digital Public Infrastructure (DPI)",
    "description": "DPI is a governance and investment model in which public sector actors — governments, charities, and transnational civil society networks — fund and steward open digital protocols, standards, and services as shared infrastructure rather than leaving them to private monopolies. The book cites India Stack, Estonia's X-Road, Taiwan's civic-tech stack, Brazil's Pix, and Singapore's FAST as exemplars. DPI is distinguished from both purely state-directed technology (the PRC model) and purely market-driven development (the US model) by its emphasis on civil society leadership, open interoperability, and public mission.",
    "diagnostic_questions": [
      "Is the underlying digital infrastructure openly licensed and interoperable rather than proprietary?",
      "Is development governed by a multi-sectoral network (government, civil society, open-source communities) rather than a single corporation or ministry?",
      "Does the infrastructure serve as a platform enabling decentralized private and civic innovation on top of it?",
      "Is there explicit public or charitable funding for the core protocols, distinct from revenue-seeking product layers?",
      "Does the initiative have a transnational or internationally interoperable character rather than purely national scope?"
    ],
    "countered_failure_mode_ids": [
      "monist-technocracy",
      "atomist-libertarianism",
      "big-tech-monopolization",
      "surveillance-capitalism"
    ],
    "example_case_ids": [
      "india-stack",
      "estonia-x-road",
      "vtaiwan-deliberation",
      "g0v-civic-hacking",
      "presidential-hackathon-taiwan"
    ],
    "source_chapter": "Ch. 7-0"
  },
  {
    "id": "digital-ministry-participatory-mission-setting",
    "name": "Digital Ministry with Participatory Mission-Setting",
    "description": "This governance form involves a dedicated government ministry or agency focused on digital affairs that sets technology policy missions through participatory and collaborative processes with civil society, rather than through military-technocratic or purely bureaucratic channels. Taiwan's Ministry of Digital Affairs (est. 2022), Ukraine's Ministry of Digital Transformation, and Japan's Digital Agency are cited as examples. These ministries are described as more natural forums for setting visionary goals in a participatory way than traditional military-industrial hosts like ARPA, and are expected to form transnational networks analogous to how ARPANET linked university nodes.",
    "diagnostic_questions": [
      "Does the ministry or agency have an explicit mandate to engage civil society and the public in setting its technology mission?",
      "Is it positioned to collaborate with peer digital ministries in other countries as a transnational network node?",
      "Does it coordinate with open-source communities and non-profit technology developers, not just private corporations?",
      "Is there a mechanism for participatory input (e.g., hackathons, deliberative assemblies, quadratic voting) in prioritizing public digital investments?",
      "Does the ministry treat ⿻ infrastructure development as a core agenda item comparable to physical infrastructure?"
    ],
    "countered_failure_mode_ids": [
      "monist-technocracy",
      "atomist-libertarianism"
    ],
    "example_case_ids": [
      "vtaiwan-deliberation",
      "g0v-civic-hacking",
      "presidential-hackathon-taiwan"
    ],
    "source_chapter": "Ch. 7-0"
  },
  {
    "id": "plurality-aligned-tax-design",
    "name": "⿻-Aligned Tax Design",
    "description": "This governance form describes a class of fiscal instruments designed not merely to raise revenue but to directly enact ⿻ aims — discouraging concentrated digital power, funding transnational open infrastructure, and recycling the value of shared digital goods back to their sources. The book proposes a set of criteria — Directly ⿻ (D⿻), Jurisdictional Alignment (JA), Revenue Alignment (RA), and Financial Adequacy (FA) — and sketches candidate taxes including concentrated computational asset taxes, digital land taxes, implicit data/attention exchange taxes, digital asset taxes, commons-derived data taxes, and flexible/gig work taxes. The gas tax funding road infrastructure is cited as a historical precedent for industry acceptance of taxes that fund the substrate their business depends on.",
    "diagnostic_questions": [
      "Does the tax directly discourage concentration of digital power or surveillance, rather than merely raising general revenue?",
      "Is the jurisdictional scope of the tax matched to the transnational entity that would disburse the funds?",
      "Do those who pay the tax broadly benefit from the public infrastructure it funds?",
      "Is the tax designed to be adaptive to the specific value flows of the digital economy (e.g., data, attention, computation) rather than mapped onto pre-digital tax categories?",
      "Could the tax realistically be part of a coalition of businesses and governments supportive of ⿻ infrastructure investment?"
    ],
    "countered_failure_mode_ids": [
      "big-tech-monopolization",
      "surveillance-capitalism",
      "atomist-libertarianism"
    ],
    "example_case_ids": [],
    "source_chapter": "Ch. 7-0"
  },
  {
    "id": "antitrust-as-governance-reform",
    "name": "Antitrust as ⿻ Governance Reform",
    "description": "Rather than using antitrust law primarily to break up or punish dominant firms, this governance form reframes competition policy as a mechanism for mandating stakeholder governance and interoperability. The book argues that antitrust authorities could require firms to give meaningful voice to customers, suppliers, and workers — using ⿻ technologies like quadratic voting — as an alternative remedy to anticompetitive conduct, and consider governance representation as a mitigating factor in enforcement. Interoperability mandates, financial regulatory reform to allow non-standard voting systems, and accommodation of worker and stakeholder voice are presented as complementary levers that avoid the downsides of inhibiting scaled collaboration.",
    "diagnostic_questions": [
      "Is there evidence that concentrated market power is being used to disadvantage customers, suppliers, or workers in ways that governance reform could address?",
      "Could mandated interoperability or stakeholder representation serve as a structural remedy rather than divestiture?",
      "Are current financial regulations biased toward one-share-one-vote rules that entrench plutocratic governance?",
      "Is there an opportunity to require or incentivize quadratic or other ⿻ voting forms in corporate governance as a condition of regulatory approval?",
      "Does the regulatory context allow for experimentation with governance remedies before imposing punitive action?"
    ],
    "countered_failure_mode_ids": [
      "big-tech-monopolization",
      "captured-dao-plutocracy",
      "atomist-libertarianism"
    ],
    "example_case_ids": [],
    "source_chapter": "Ch. 7-0"
  },
  {
    "id": "arpa-coopetitive-mission-driven-rd",
    "name": "ARPA-Style Coopetitive, Mission-Driven R&D Network",
    "description": "This governance form describes a model of public investment in technology development that sets a clear societal mission (rather than funding general curiosity-driven research), supports a distributed network of competing-yet-cooperating nodes (universities, labs, or open-source communities) each experimenting on components of that mission, and standardizes results across the network. Lick's IPTO at ARPA is the canonical example: it funded a network of university labs with the explicit mission of human-computer symbiosis and attack-resilient networking, without prejudging which technical approaches would succeed, and the resulting 'coopetition' produced ARPANET and modern computer science. The book argues this model needs updating for today's multipolar, open-source-centered digital world.",
    "diagnostic_questions": [
      "Is there a clearly articulated mission vision beyond general research support or industrial competitiveness?",
      "Are funded nodes encouraged to compete on implementations while cooperating on interoperability standards?",
      "Is the primary beneficiary civil society and the open digital ecosystem rather than private for-profit firms?",
      "Does the structure avoid concentrating authority in a single national military-industrial complex?",
      "Are civil society actors (open-source communities, NGOs) treated as legitimate nodes alongside academic and government ones?"
    ],
    "countered_failure_mode_ids": [
      "monist-technocracy",
      "atomist-libertarianism",
      "big-tech-monopolization"
    ],
    "example_case_ids": [
      "g0v-civic-hacking",
      "presidential-hackathon-taiwan"
    ],
    "source_chapter": "Ch. 7-0"
  }
];
