import type { PolicyStrategy } from '../types.js';

export const POLICY_STRATEGIES: PolicyStrategy[] = [
  {
    "id": "public-rd-investment-it",
    "name": "Public R&D Investment in Information Technology",
    "description": "The chapter documents how democratic governments once drove foundational breakthroughs in information technology—computers, the internet, GPS—through direct public research funding. It argues that the dramatic decline in public R&D expenditure as a share of GDP in developed democracies, while authoritarian regimes like the PRC have scaled up targeted IT investment, represents a collective policy choice that has ceded the direction of technology to private, profit-driven actors with anti-democratic tendencies. Restoring proactive public investment is framed as a precondition for democratic technology.",
    "target_failure_mode_ids": [
      "monist-technocracy",
      "atomist-libertarianism",
      "declining-democratic-tech-investment"
    ],
    "example_case_ids": [],
    "source_chapter": "Ch. 2-0"
  },
  {
    "id": "digital-public-services-mandate",
    "name": "Democratic Provision of Digital Public Services",
    "description": "The chapter observes that just as governments once built postal services and public libraries as the backbone of democratic communication, today's democratic governments have largely failed to provide or adequately fund digital public infrastructure—social media alternatives, open standards, digital identity, and digital currencies. It points to the negligible public support for open-source social infrastructure like Mastodon and ActivityPub as evidence of this gap, contrasting it with authoritarian states' active deployment of digital public services. The implication is that democratic governments need mandates and funding mechanisms to provision and sustain digital public goods.",
    "target_failure_mode_ids": [
      "declining-democratic-tech-investment",
      "big-tech-engagement-maximization",
      "surveillance-capitalism"
    ],
    "example_case_ids": [
      "mastodon-activitypub"
    ],
    "source_chapter": "Ch. 2-0"
  },
  {
    "id": "antitrust-tech-regulation-democracy",
    "name": "Antitrust and Regulatory Intervention in Technology Markets",
    "description": "The chapter notes that regulators in both the EU and US have responded to technology's threats to democracy with dramatically increased antitrust scrutiny and a suite of regulatory instruments—including the GDPR, the Data Governance Act, the Digital Markets Act, and the Digital Services Act. While acknowledging these actions have clear policy rationales and could be part of a positive technology agenda, the authors warn that operating in a purely negative, techlash-driven register—without a positive technology vision—risks positioning democratic governance as purely an adversarial force rather than a constructive one.",
    "target_failure_mode_ids": [
      "surveillance-capitalism",
      "big-tech-engagement-maximization",
      "monist-technocracy"
    ],
    "example_case_ids": [],
    "source_chapter": "Ch. 2-0"
  },
  {
    "id": "open-source-commons-support",
    "name": "Public Support for Open-Source Software and Digital Commons",
    "description": "The chapter highlights that open-source software and commons-based digital goods like Wikipedia have become critical public resources in the digital age, yet democratic governments have consistently failed to fund them and have even structurally disadvantaged them relative to private charities—for example, by generally barring open-source software providers from tax-exempt status. The authors contrast this neglect with the active digital infrastructure investments of authoritarian states, framing public financial and legal support for open-source and digital commons as a foundational democratic technology policy.",
    "target_failure_mode_ids": [
      "declining-democratic-tech-investment",
      "atomist-libertarianism"
    ],
    "example_case_ids": [
      "wikipedia",
      "mastodon-activitypub"
    ],
    "source_chapter": "Ch. 2-0"
  },
  {
    "id": "democratic-tech-vision-positive-agenda",
    "name": "Articulating a Positive Democratic Technology Vision",
    "description": "The chapter argues that a core failure of democratic policymakers has been their inability or unwillingness to articulate a positive technology vision—instead defaulting to a purely regulatory, techlash-driven posture that positions democracy as technology's adversary rather than its ally. It contends that the combination of negative tone, disconnection from allied developments in technology, and a lack of proactive public investment has created an 'industry under siege' dynamic that reinforces the gulf between technology and democracy. Overcoming this requires democratic governments to develop and pursue an affirmative technology agenda grounded in pluralist, augmenting values.",
    "target_failure_mode_ids": [
      "declining-democratic-tech-investment",
      "monist-technocracy",
      "atomist-libertarianism"
    ],
    "example_case_ids": [],
    "source_chapter": "Ch. 2-0"
  },
  {
    "id": "digital-ministry-civic-tech-mandate",
    "name": "Ministry of Digital Affairs with Civic-Tech Mandate",
    "description": "Taiwan created one of the world's first ministerial roles dedicated to digital participation, eventually institutionalized as the Ministry of Digital Affairs in 2022. The role grew directly out of the post-Sunflower period of reverse mentorship and government openness to civil society, culminating in Audrey Tang becoming both one of the world's first ministers in charge of digital participation (2016) and the first Minister of Digital Affairs. The book treats this ministry as the institutional capstone of a decade-long process of embedding ⿻ digital governance at the state level.",
    "target_failure_mode_ids": [],
    "example_case_ids": [
      "taiwan-digital-democracy",
      "vtaiwan-deliberation"
    ],
    "source_chapter": "Ch. 2-1"
  },
  {
    "id": "open-government-data-transparency-mandate",
    "name": "Open Government Data Transparency",
    "description": "Taiwan's government, reinforced by the g0v movement, adopted open and transparent data practices that made civic data publicly accessible by default. This created a foundation for civil-society actors to build tools like the Mask App during the COVID-19 pandemic, and for g0v hackers to create 'forked' alternative interfaces to government websites that were often more popular than the originals. Government ministers responded by 'merging' these civic-built designs back into official services.",
    "target_failure_mode_ids": [
      "monist-technocracy",
      "engagement-maximization"
    ],
    "example_case_ids": [
      "g0v-civic-hacking",
      "mask-map-app",
      "vtaiwan-deliberation"
    ],
    "source_chapter": "Ch. 2-2"
  },
  {
    "id": "participation-officer-network",
    "name": "Participation Officer Network",
    "description": "PDIS established a cross-departmental network of civil servants committed to citizen participation, inter-agency collaboration, and digital feedback within the Taiwanese government. These Participation Officers served as internal conduits and supporters for civic-technology practices, enabling the institutionalization of open-government methods across ministries rather than siloing them in a single unit.",
    "target_failure_mode_ids": [
      "monist-technocracy"
    ],
    "example_case_ids": [
      "vtaiwan-deliberation",
      "join-platform"
    ],
    "source_chapter": "Ch. 2-2"
  },
  {
    "id": "crowdsourced-fact-checking-public-support",
    "name": "Public Support for Crowdsourced Fact-Checking",
    "description": "Taiwan's government supported civil-society fact-checking initiatives like Cofacts and chatbot services by organizations such as MyGoPen and Gogolook, enabling rapid, citizen-driven responses to misinformation on private messaging platforms like Line. Government leaders modeled norms of 'humor over rumor' and 'fast, fun and fair' responses, helping to fight the 'infodemic' without resorting to content takedowns. Research shows these crowdsourced systems respond faster, equally accurately, and more engagingly than bandwidth-constrained professional fact-checkers.",
    "target_failure_mode_ids": [
      "engagement-maximization",
      "authoritarian-digital-governance"
    ],
    "example_case_ids": [
      "cofacts-fact-checking",
      "mygopen-chatbot"
    ],
    "source_chapter": "Ch. 2-2"
  },
  {
    "id": "presidential-hackathon-civic-prizes",
    "name": "Presidential Hackathon with Civic Prize Legitimacy",
    "description": "Taiwan's Presidential Hackathon convened mixed teams of civil servants, academics, activists, and technologists to propose civic tools and data-custody arrangements. Winners received a trophy featuring the President, granting them leverage to secure cooperation from government agencies and localities. This prize-as-legitimacy mechanism translated participatory hackathon outputs into actionable policy implementation, and was later extended to award real funding using Quadratic Funding for high-value civic projects.",
    "target_failure_mode_ids": [
      "monist-technocracy"
    ],
    "example_case_ids": [
      "presidential-hackathon",
      "quadratic-voting",
      "quadratic-funding"
    ],
    "source_chapter": "Ch. 2-2"
  },
  {
    "id": "digital-competence-education-mandate",
    "name": "Digital Competence as Core Curriculum Mandate",
    "description": "Since 2019, Taiwan's 12-Year Basic Education Curriculum has enshrined technology, information, and media literacy as a core competency for all students. The curriculum is designed to empower students to become active co-creators and discerning arbiters of media rather than passive consumers, building a societal foundation for ⿻ participation and resistance to disinformation from an early age.",
    "target_failure_mode_ids": [
      "engagement-maximization",
      "authoritarian-digital-governance"
    ],
    "example_case_ids": [],
    "source_chapter": "Ch. 2-2"
  },
  {
    "id": "alignment-assemblies-ai-governance",
    "name": "Alignment Assemblies for AI Foundation Model Governance",
    "description": "Taiwan pioneered the convening of citizen 'alignment assemblies' to participate in the regulation and steering of AI foundation models, a practice that has since become more common globally. These assemblies bring public voices into the technical governance of large AI systems, operationalizing the principle that societies affected by AI should have structured input into how those systems are aligned and deployed.",
    "target_failure_mode_ids": [
      "monist-technocracy"
    ],
    "example_case_ids": [
      "vtaiwan-deliberation"
    ],
    "source_chapter": "Ch. 2-2"
  },
  {
    "id": "gold-card-open-source-talent-pathway",
    "name": "Gold Card Residency Pathway for Open-Source Contributors",
    "description": "Taiwan's Gold Card program offers one of the most diversely accessible paths to permanent residence in the world, including a dedicated 'digital field' category for people who have contributed to open-source and public-interest software. This policy treats civic-technology contribution as a credential equivalent to other high-skilled fields, institutionally recognizing and attracting the talent base that sustains a ⿻ digital public sphere.",
    "target_failure_mode_ids": [],
    "example_case_ids": [
      "g0v-civic-hacking"
    ],
    "source_chapter": "Ch. 2-2"
  },
  {
    "id": "plurality-science-policy-decentralized-research",
    "name": "Decentralized, ⿻ Science Policy for Robust Knowledge Production",
    "description": "Metascience research shows that decentralized scientific communities — composed of mostly independent, non-overlapping teams using a variety of methods and drawing on a broad spectrum of earlier publications — tend to yield more reliable and innovative scientific knowledge than centralized communities marked by repeated collaborations and restricted approaches. This finding motivates science policy that funds diverse, non-overlapping research teams and resists consolidation of scientific agendas around dominant institutions or citation networks. New metrics that reward innovation and offset publication/citation biases can create a more ⿻ incentive structure for knowledge production.",
    "target_failure_mode_ids": [
      "monist-technocracy",
      "engagement-maximization"
    ],
    "example_case_ids": [
      "metascience-field",
      "github-oss-projects"
    ],
    "source_chapter": "Ch. 3-1"
  },
  {
    "id": "federated-identity-public-option-mandate",
    "name": "Federated / Intersectional Identity as Public-Option Infrastructure",
    "description": "Rather than allowing private platforms to own identity systems, the 'Lost Dao' framing points toward publicly governed, federated identity infrastructure as a democratic necessity. The book documents how early internet architects envisioned identity as a public layer — akin to a postal address — that no single actor should monopolize. Recovering this vision through public-option identity infrastructure (as Taiwan's digital identity system partially attempts) enables citizens to carry verifiable, interoperable credentials across services without surrendering sovereignty to a platform intermediary.",
    "target_failure_mode_ids": [
      "big-tech-platform-capture",
      "surveillance-capitalism",
      "monist-technocracy"
    ],
    "example_case_ids": [
      "taiwan-digital-identity",
      "estonia-x-road"
    ],
    "source_chapter": "Ch. 3-3"
  },
  {
    "id": "fediverse-decentralized-web-protocols",
    "name": "Decentralized Web / Fediverse Protocol Development as Policy-Supported Alternative Infrastructure",
    "description": "The Decentralized Web and Fediverse represent a strategy of building community-governed, non-commercial communication protocols—such as ActivityPub—as alternatives to mainstream corporate social media. Projects like Mastodon and BlueSky (spun off from Twitter as independent, non-profit) demonstrate how protocol-level diversity can counter platform monopolization of public discourse. The book frames this as a continuation of the original internet's \"network of networks\" vision, addressing the absence of identity and association layer protocols that were never built into the public internet.",
    "target_failure_mode_ids": [
      "private-sector-internet-capture",
      "engagement-maximization",
      "surveillance-capitalism"
    ],
    "example_case_ids": [
      "mastodon-fediverse",
      "bluesky-atproto",
      "activitypub-protocol"
    ],
    "source_chapter": "Ch. 3-3"
  },
  {
    "id": "multistakeholder-internet-governance",
    "name": "Multistakeholder / RFC-Style Open Standard Setting for Network Governance",
    "description": "The Request for Comments (RFC) process developed by Steve Crocker and institutionalized through Vint Cerf and Bob Kahn's TCP/IP leadership represents an alternative to both government top-down and corporate-controlled standard setting. This approach replaces centralized authority with informal, additive, geographically and sectorally dispersed collaboration across universities, government agencies, and corporations. The book presents this as a foundational ⿻ governance strategy—a \"network of networks\" model that contrasts with France's contemporaneous Minitel, which was standardized top-down by a government.",
    "target_failure_mode_ids": [
      "private-sector-internet-capture",
      "monist-technocracy"
    ],
    "example_case_ids": [
      "arpanet-rfc-process",
      "tcp-ip-standards",
      "world-wide-web-consortium"
    ],
    "source_chapter": "Ch. 3-3"
  },
  {
    "id": "social-recovery-credential-standard",
    "name": "Social Recovery as Credential Recovery Standard",
    "description": "A policy strategy emerging from ⿻ identity design is the standardization of social recovery mechanisms—where lost or stolen credentials are recovered through a threshold of trusted social relationships (e.g., 3-of-5 friends or institutions) rather than through a centralized authority or individually held keys. Vitalik Buterin has identified this as the 'gold standard' in Web3 communities, and Apple has begun adopting analogous approaches. Governments and platform regulators could mandate or incentivize such social recovery as the baseline for identity systems, reducing dependence on both surveillance-enabling central authorities and fragile self-managed keys. More sophisticated implementations, called 'community recovery', use voting methods to ensure that distinct, non-colluding segments of a user's social network jointly hold recovery power.",
    "target_failure_mode_ids": [
      "surveillance-capitalism",
      "atomist-libertarianism",
      "captured-dao-plutocracy"
    ],
    "example_case_ids": [
      "decentralized-identifiers-w3c",
      "verifiable-credentials-w3c"
    ],
    "source_chapter": "Ch. 4-1"
  },
  {
    "id": "contextual-integrity-data-governance-mandate",
    "name": "Contextual Integrity as Data Governance Mandate",
    "description": "Helen Nissenbaum's principle of 'contextual integrity'—that information should remain in the social setting for which it was intended—provides the normative foundation for a class of identity and data governance policies. The book argues that privacy in ⿻ identity systems is not primarily about individual control or secrecy but about protecting the collective norms of groups against inappropriate information flows across contexts. Regulators and standards bodies can embed contextual integrity requirements into identity federation protocols, requiring that attribute disclosures be scoped to the context in which they were originally generated and that cross-context linkage be opt-in and auditable. This reframes privacy law from an individual-rights instrument to a freedom-of-association protection.",
    "target_failure_mode_ids": [
      "surveillance-capitalism",
      "big-tech-engagement-maximization"
    ],
    "example_case_ids": [
      "aadhaar-india",
      "verifiable-credentials-w3c"
    ],
    "source_chapter": "Ch. 4-1"
  },
  {
    "id": "open-association-protocol-standards",
    "name": "Open Protocol Standards for Digital Freedom of Association",
    "description": "Convergence on widely accepted open technical standards—covering cryptography, distributed ledger consensus, and federated communications protocols such as ActivityPub—could enshrine a right to digital freedom of association. The book argues that standards bodies and open-source communities working across privacy-enhancing technologies and publication protocols are already laying the groundwork for networks where diverse associations can form and preserve themselves with formal guarantees of contextual integrity. This is treated as a policy-relevant coordination problem amenable to standards mandates and public support.",
    "target_failure_mode_ids": [
      "surveillance-capitalism",
      "big-tech-engagement-maximization",
      "atomist-libertarianism"
    ],
    "example_case_ids": [
      "activitypub-w3c-standard",
      "spritely-project",
      "bluesky-atproto"
    ],
    "source_chapter": "Ch. 5-3"
  },
  {
    "id": "anti-oversharing-technical-norms-policy",
    "name": "Technical and Normative Standards Against Internal Over-Sharing",
    "description": "The book identifies internal over-sharing—not only external snooping—as a fundamental threat to associational privacy, noting that strategies have primarily relied on norms, shaming, and ex-post punishment rather than cryptographic enforcement. It points to emerging techniques such as designated verifier proofs and message ephemerality (as pioneered by Snapchat and later adopted widely) as policy-relevant primitives that could be incorporated into platform design requirements or standards. Governments and standards bodies investing in research and adoption of these tools could provide associations with stronger guarantees against credible leaks.",
    "target_failure_mode_ids": [
      "surveillance-capitalism"
    ],
    "example_case_ids": [],
    "source_chapter": "Ch. 5-3"
  },
  {
    "id": "plural-payments-open-protocol-mandate",
    "name": "Plural Payments as Open Protocol Infrastructure",
    "description": "The book argues that payment systems, like identity and communication layers, are part of the core digital public infrastructure that shapes whether commerce enables or undermines democratic collaboration. Rather than leaving payment rails exclusively to proprietary platforms or card networks, ⿻ governance design favors open, interoperable payment protocols that allow diverse communities and institutions to transact across trust boundaries — analogous to how TCP/IP enabled networked communication without a single gatekeeper. Taiwan's experience with open banking initiatives and interoperable QR-code payment standards illustrates how public infrastructure framing can prevent payments from becoming a chokepoint for civic and commercial life.",
    "target_failure_mode_ids": [
      "monist-technocracy",
      "atomist-libertarianism",
      "big-tech-platform-capture"
    ],
    "example_case_ids": [
      "taiwan-open-banking",
      "taiwan-qr-payment-interoperability"
    ],
    "source_chapter": "Ch. 4-3"
  },
  {
    "id": "reputation-portability-cross-platform-standard",
    "name": "Reputation Portability and Cross-Platform Trust Standards",
    "description": "The chapter highlights how trust and reputation are currently siloed within proprietary platforms — ratings on one marketplace do not travel to another — which reinforces platform lock-in and concentrates power. A ⿻ policy approach would establish standards for reputation portability, allowing individuals and firms to carry verifiable attestations of trustworthiness across platforms and contexts without those attestations being controlled by any single intermediary. This connects to the broader ⿻ agenda of building identity and credential layers as commons infrastructure rather than proprietary assets.",
    "target_failure_mode_ids": [
      "big-tech-platform-capture",
      "surveillance-capitalism"
    ],
    "example_case_ids": [],
    "source_chapter": "Ch. 4-3"
  },
  {
    "id": "community-currency-protocols-plural-money",
    "name": "Community Currency Protocols and ⿻ Money",
    "description": "A ⿻ approach to commerce replaces or supplements universal fungible currency with polycentric community currencies whose use is bounded by the issuing community and whose inter-operation is governed by community consent. The book documents this as a design principle — community currencies can record contributions, enable collective decision-making (e.g., prioritizing changes to a shared text), and prevent holders from liquidating them into broader markets without community approval. This parallels how contextual integrity governs identity data, keeping value flows within the communities that generate them.",
    "target_failure_mode_ids": [
      "monist-technocracy",
      "atomist-libertarianism",
      "surveillance-capitalism"
    ],
    "example_case_ids": [
      "plurality-book-community-currency",
      "ethereum-community-currency-experiments"
    ],
    "source_chapter": "Ch. 4-3"
  },
  {
    "id": "partial-common-ownership-policy-mandate",
    "name": "Partial Common Ownership as Property Regime Policy",
    "description": "Partial common ownership (COST/Harberger tax) redesigns property rights so that owners self-assess the value of their assets, pay a recurring fee on that self-assessed value, and must sell at their declared price to any willing buyer. This structure keeps assets in the hands of those who value them most while generating revenue for public distribution, addressing both the monopoly inefficiency of standard property and the volatility of purely market-driven allocation. The book situates this as a ⿻ policy move that rebalances individual and collective claims on value, applicable to spectrum allocation, urban land, and digital assets.",
    "target_failure_mode_ids": [
      "monist-technocracy",
      "atomist-libertarianism"
    ],
    "example_case_ids": [
      "harberger-tax-spectrum-allocation",
      "partial-common-ownership-commerce-assets"
    ],
    "source_chapter": "Ch. 4-4"
  },
  {
    "id": "depreciating-licenses-creative-commons-policy",
    "name": "Depreciating Licenses and Plural Copyright Reform",
    "description": "The book proposes depreciating licenses as a policy instrument that allows intellectual property rights to decay over time in a structured way, releasing creative works progressively into the commons rather than maintaining monopoly control for the life of the copyright term plus extensions. This is presented as a ⿻ alternative to both total proprietarism and immediate open-sourcing, enabling creators to capture early value while ensuring eventual communal benefit. The approach is linked to broader plural property regimes that treat knowledge as a networked, collectively co-produced resource.",
    "target_failure_mode_ids": [
      "atomist-libertarianism",
      "surveillance-capitalism"
    ],
    "example_case_ids": [
      "creative-commons-licensing"
    ],
    "source_chapter": "Ch. 4-4"
  },
  {
    "id": "plural-property-networked-assets-policy",
    "name": "Plural Property Regime for Networked and Collective Assets",
    "description": "Rather than mapping all economic relationships onto binary individual-ownership or state-ownership, the book advocates for a plural property regime that recognizes the networked, relational nature of value creation — particularly in digital contexts where assets (data, code, attention, reputation) are co-produced across communities. Policy instruments include data coalitions, community land trusts applied to digital infrastructure, and tiered ownership structures that reflect the intersecting groups whose contributions generate the asset's value. This reframes property law as a tool for ⿻ rather than for atomist accumulation.",
    "target_failure_mode_ids": [
      "atomist-libertarianism",
      "monist-technocracy"
    ],
    "example_case_ids": [
      "data-coalitions-collective-bargaining",
      "partial-common-ownership-commerce-assets"
    ],
    "source_chapter": "Ch. 4-4"
  },
  {
    "id": "smart-contract-plural-governance-standard",
    "name": "Smart Contracts Redesigned for ⿻ Governance",
    "description": "The book critiques the dominant use of smart contracts in DAOs and crypto ecosystems as encoding atomist, one-token-one-vote plutocracy, and argues for redesigning contract primitives to support plural governance — e.g., incorporating quadratic voting, plural voting weights that reflect community membership rather than token holdings, and cross-community consent requirements for decisions that affect multiple overlapping groups. Policy support for open-source, auditable contract standards that embed ⿻ primitives is framed as essential to ensuring digital commerce does not entrench wealth concentration.",
    "target_failure_mode_ids": [
      "captured-dao-plutocracy",
      "atomist-libertarianism"
    ],
    "example_case_ids": [
      "quadratic-voting-colorado",
      "gitcoin-grants-quadratic-funding"
    ],
    "source_chapter": "Ch. 4-4"
  },
  {
    "id": "data-trusts-collective-bargaining-mandate",
    "name": "Data Trusts and Collective Data-Subject Representation",
    "description": "Policy and institutional design support the formation of data trusts, cooperatives, collaboratives, and 'mediators of individual data' (MIDs) that collectively represent the rights and interests of data subjects in negotiations with large data consumers. Because individual data creators cannot effectively bargain with the world's most powerful corporations, these fiduciary organizations—potentially following lines of existing institutions like unions or Wikipedia—are positioned to secure fair terms, enforce attribution, and govern data use collectively. The book draws an analogy between prohibitions on unilateral strikebreaking in labor law and norms that would prevent a single MIDs member from unilaterally disclosing shared data.",
    "target_failure_mode_ids": [
      "surveillance-capitalism",
      "atomist-libertarianism",
      "data-silos-hoarding"
    ],
    "example_case_ids": [
      "wikipedia-governance",
      "openmined-federated-learning"
    ],
    "source_chapter": "Ch. 5-5"
  },
  {
    "id": "universal-broadband-access-mandate",
    "name": "Universal Broadband Access as Public Infrastructure",
    "description": "The book frames broadband connectivity as a foundational prerequisite for ⿻ participation, arguing that universal access programs — whether through municipal networks, subsidized last-mile buildout, or public-option ISPs — are a condition of possibility for digital democracy rather than merely a consumer amenity. Taiwan's experience connecting remote indigenous communities and rural regions is cited as a model where government treats connectivity as civic infrastructure on par with roads or utilities. Without such access, the collaborative technologies that ⿻ depends on reproduce existing hierarchies of exclusion.",
    "target_failure_mode_ids": [
      "digital-divide-exclusion",
      "atomist-libertarianism"
    ],
    "example_case_ids": [
      "taiwan-broadband-indigenous-access"
    ],
    "source_chapter": "Ch. 4-5"
  },
  {
    "id": "plural-management-protocol-open-governance",
    "name": "⿻ Management Protocol for Open Collaborative Governance",
    "description": "The book documents the Plural Management Protocol (described with collaborators Tobin South, Leon Erichsen, Shrey Jain, Petar Maymounkov, Scott Moore, and E. Glen Weyl) as a policy-level approach to governing open collaborative projects by linking community currency, group identity tokens, crowd-funded prioritization, advanced voting, and prediction markets into an integrated governance stack recorded on a distributed ledger via open-source protocols such as GitRules. Contributors are recognized through tokens whose weight in collective decision-making is proportional to their validated contributions, replacing financial incentives with open-source participation norms. The book itself was governed using this protocol, demonstrating it as a replicable model for civic-tech and public-interest collaborative projects.",
    "target_failure_mode_ids": [
      "captured-dao-plutocracy",
      "atomist-libertarianism"
    ],
    "example_case_ids": [
      "plurality-book-git-governance",
      "gitrules-protocol"
    ],
    "source_chapter": "Ch. 5-0"
  },
  {
    "id": "cc0-open-licensing-civic-commons",
    "name": "CC0 Open Licensing for Civic Knowledge Commons",
    "description": "The book was released under a Creative Commons 0 license — reserving no rights to any content — as a deliberate policy demonstration that knowledge produced through ⿻ collaborative processes can be freely reused and remixed by any community worldwide. The authors frame CC0 as an operationalization of the open-source ethos applied to civic and democratic knowledge production, enabling the living document to evolve through community-managed git pull requests and global translation. This approach is presented as a replicable model for publicly funded research, civic deliberation outputs, and government-produced digital resources.",
    "target_failure_mode_ids": [
      "proprietary-platform-capture",
      "atomist-libertarianism"
    ],
    "example_case_ids": [
      "plurality-book-git-governance"
    ],
    "source_chapter": "Ch. 5-0"
  },
  {
    "id": "neuroethics-governance-bci-regulation",
    "name": "Neuroethics Governance & BCI Regulation",
    "description": "As brain-computer interfaces and neuromodulation technologies advance post-symbolic communication, governance frameworks addressing neuroethical challenges — including mental privacy, moral bio-enhancement, and the prevention of surveillance or manipulation via neural data — become necessary. The chapter identifies the risk that any window into the mind is also a window of influence, calling for structured lower-bandwidth communication forms (voting, markets, speech) as institutional counterweights to high-bandwidth neural connectivity. Regulatory frameworks in this space would address data sovereignty over neural signals and protect cognitive liberty.",
    "target_failure_mode_ids": [
      "surveillance-capitalism",
      "monist-technocracy",
      "authoritarian-digital-governance"
    ],
    "example_case_ids": [
      "park-of-aging-miraikan",
      "brain-spine-interface-walking"
    ],
    "source_chapter": "Ch. 5-5"
  },
  {
    "id": "structured-communication-democratic-counterweight",
    "name": "Structured Lower-Bandwidth Communication as Democratic Counterweight",
    "description": "The chapter argues that markets, voting systems, and deliberate speech act as essential counterbalances to the risks of high-bandwidth post-symbolic communication. These structured forms require senders to formulate and reflect before transmitting, preserving privacy, autonomy, and individual difference against the homogenizing pull of seamless telepathic or immersive connection. Policy support for maintaining and strengthening these structured channels — including democratic voting infrastructure and competitive markets — is framed as a vital check against the overreach of an all-encompassing telepathic matrix.",
    "target_failure_mode_ids": [
      "monist-technocracy",
      "atomist-libertarianism",
      "engagement-maximization"
    ],
    "example_case_ids": [],
    "source_chapter": "Ch. 5-5"
  },
  {
    "id": "isr-civic-spaces-digital-public-infrastructure",
    "name": "ISR Civic Spaces as Digital Public Infrastructure",
    "description": "Digital replicas of civic centers, town halls, and community spaces where people can gather to discuss, debate, and make decisions about their communities are envisioned as a form of public infrastructure. These spaces allow for more inclusive and accessible civic engagement, enabling participants to take part in local governance or community planning from anywhere in the world. By leveraging spatial intuitions from the physical world, they help improve the creation of context and common understanding online in ways that existing flat digital spaces do not. Plurality frames this as requiring governance by ⿻ principles of rights and interoperability rather than corporate control.",
    "target_failure_mode_ids": [
      "corporate-monopoly-isr",
      "digital-divide",
      "virtual-escapism"
    ],
    "example_case_ids": [
      "portals-policing-project",
      "1000-cut-journey",
      "becoming-homeless-vr"
    ],
    "source_chapter": "Ch. 5-2"
  },
  {
    "id": "open-standards-creative-collaboration-infrastructure",
    "name": "Open Standards and Interoperability Mandates for Creative Collaboration Platforms",
    "description": "The chapter argues that creative collaboration at scale depends on open, interoperable infrastructure — shared protocols for version control, attribution, remixing rights, and revenue sharing — rather than proprietary platform silos. The book points to GitHub and Wikipedia as partial precedents where open norms and open-source tooling enabled large-scale creative coordination, and suggests that extending analogous standards to music, film, and visual arts would unlock ⿻ creative potential currently locked inside platform walled gardens. Policy support for such standards is framed as a precondition for genuine creative plurality.",
    "target_failure_mode_ids": [
      "platform-monopoly-enclosure",
      "engagement-maximization"
    ],
    "example_case_ids": [
      "github-open-source",
      "wikipedia-collaborative-editing"
    ],
    "source_chapter": "Ch. 5-3"
  },
  {
    "id": "augmented-deliberation-civic-infrastructure",
    "name": "Augmented Deliberation as Civic Infrastructure",
    "description": "Governments and civic institutions invest in AI-assisted deliberative tools — such as Polis-style clustering, machine translation, and argument summarization — to help large populations find overlapping consensus across linguistic and cultural divides. Taiwan's vTaiwan and the Join platform demonstrate how these tools can surface surprising agreement on contentious regulatory questions by separating opinion mapping from adversarial debate. The strategy treats augmented deliberation not as a product feature but as public infrastructure analogous to roads or courts, requiring open standards, public funding, and participatory design.",
    "target_failure_mode_ids": [
      "monist-technocracy",
      "engagement-maximization",
      "atomist-libertarianism"
    ],
    "example_case_ids": [
      "v-taiwan-deliberation",
      "polis-clustering",
      "join-platform"
    ],
    "source_chapter": "Ch. 5-4"
  },
  {
    "id": "bridging-algorithm-platform-mandate",
    "name": "Bridging-Algorithm Mandate for Social Media Platforms",
    "description": "Rather than allowing engagement-maximizing collaborative filtering to dominate content ranking, platforms can be required or incentivized to deploy bridging-based algorithms that reward content receiving support across ideologically diverse user clusters. Community Notes on X demonstrates this principle at scale: notes are rated helpful based on cross-partisan support rather than aggregate popularity, surfacing accurate information while correcting the biases of like-minded echo chambers. Extending this principle to the main content feed — not just fact-check annotations — represents a policy direction the book highlights as a natural next step for ⿻ media governance.",
    "target_failure_mode_ids": [
      "echo-chamber-engagement-maximization",
      "engagement-maximization-pattern",
      "social-media-polarization"
    ],
    "example_case_ids": [
      "community-notes-x",
      "polis-vtaiwan"
    ],
    "source_chapter": "Ch. 5-4"
  },
  {
    "id": "intersectional-sortition-representation-protocol",
    "name": "Intersectional Sortition and Maximally-Diverse Committee Selection",
    "description": "The book argues that richer computational maps of social identity — produced by bridging systems and collective response platforms — could allow deliberative bodies to move beyond geography or simple demographic proxies toward intersectionally diverse participant selection. A protocol could be designed to choose the maximally diverse committee by minimizing the marginalization of the most socially distant participants, drawing on known social connections and affiliations rather than fixed demographic categories. This approach, potentially combined with liquid democracy mechanisms, could simultaneously achieve benefits of sortition, administrative assignment, and election.",
    "target_failure_mode_ids": [
      "monist-technocracy",
      "captured-representation-gap"
    ],
    "example_case_ids": [
      "polis-vtaiwan",
      "community-notes-x"
    ],
    "source_chapter": "Ch. 5-4"
  },
  {
    "id": "adaptive-administration-experimental-governance",
    "name": "Adaptive Administration as Experimental Governance",
    "description": "Weyl and Tang describe adaptive administration as a governance approach that treats policy implementation as iterative experimentation rather than fixed rule-following. Agencies are structured to pilot interventions at small scale, measure outcomes, and revise continuously — embedding the logic of scientific experimentation into bureaucratic practice. This model draws on Taiwan's experience of using rapid-iteration civic tools (e.g., the Join platform and presidential hackathon) to surface public priorities and adjust policy in near-real-time.",
    "target_failure_mode_ids": [
      "monist-technocracy",
      "captured-bureaucratic-rigidity"
    ],
    "example_case_ids": [
      "join-platform",
      "presidential-hackathon"
    ],
    "source_chapter": "Ch. 5-5"
  },
  {
    "id": "cross-cultural-legal-norm-translation-policy",
    "name": "Cross-Cultural Legal Norm Translation via GFMs",
    "description": "The chapter envisions deploying GFMs as low-cost translators across diverse cultural legal and property norms — analogous to how machine translation has made a wider range of spoken languages viable and interoperable. Just as cheaper language translation reduces pressure on minority-language communities to abandon their tongues, cheaper translation of customary norms could make a broader range of traditional legal and property practices sustainable alongside formal national legal regimes. This strategy treats cultural-legal interoperability as a public good, reducing the homogenizing pressure of modernity on traditional communities and enabling experimentation with diverse governance forms without requiring separation from existing legal jurisdictions.",
    "target_failure_mode_ids": [
      "bureaucratic-rigidity",
      "colonial-administrative-imposition"
    ],
    "example_case_ids": [],
    "source_chapter": "Ch. 5-5"
  },
  {
    "id": "plural-voting-electoral-reform-mandate",
    "name": "⿻ Voting as Electoral Reform Mandate",
    "description": "The book argues that moving away from winner-take-all plurality (single-mark) voting toward ⿻ voting systems—such as ranked-choice, approval, score, quadratic, and related methods—restructures electoral incentives so that candidates appealing across coalition lines are rewarded rather than penalized. Jurisdictions that adopt these systems (e.g., Alaska's ranked-choice reform, New York City's instant-runoff mayoral primaries) empirically see reduced negative campaigning and broader coalition-building. The strategy frames electoral method reform as a democracy-infrastructure investment analogous to upgrading communication protocols, not merely a procedural tweak.",
    "target_failure_mode_ids": [
      "monist-technocracy",
      "atomist-libertarianism",
      "two-party-duopoly-lock-in"
    ],
    "example_case_ids": [
      "alaska-ranked-choice-voting",
      "nyc-instant-runoff-voting",
      "quadratic-voting"
    ],
    "source_chapter": "Ch. 5-6"
  },
  {
    "id": "quadratic-voting-public-decisions-mandate",
    "name": "Quadratic Voting for Public Collective Decisions",
    "description": "Quadratic Voting (QV) allocates each participant a budget of 'voice credits' that can be spent on any number of issues, with the cost of each additional vote on a single issue rising quadratically; this lets individuals signal intensity of preference across a range of questions rather than casting a single binary ballot. The book presents QV as a ⿻ governance primitive deployable in legislatures, municipal budgets, and participatory policy processes, citing its use in the Colorado Democratic caucus and corporate shareholder settings. Because QV prices out dominance by any single intense faction while surfacing genuine cross-cutting preferences, it is framed as a structural remedy for both majoritarian tyranny and minority veto.",
    "target_failure_mode_ids": [
      "monist-technocracy",
      "atomist-libertarianism",
      "captured-dao-plutocracy"
    ],
    "example_case_ids": [
      "quadratic-voting",
      "colorado-democratic-caucus-qv"
    ],
    "source_chapter": "Ch. 5-6"
  },
  {
    "id": "quadratic-funding-public-goods-mandate",
    "name": "Quadratic Funding for Public Goods and Commons",
    "description": "Quadratic funding (QF) allocates matching pools to public goods projects in proportion to the square of the sum of square roots of individual contributions, mathematically privileging breadth of community support over the depth of large donors. The book presents QF as a policy mechanism that can be embedded in government grant programs, civic tech ecosystems, and cooperative platforms to surface genuine collective priorities rather than the preferences of the wealthy. Gitcoin Grants is cited as the canonical deployed instance, disbursing tens of millions to open-source public goods. The mechanism is positioned as a scalable democratic alternative to philanthropic or market-driven resource allocation for shared infrastructure.",
    "target_failure_mode_ids": [
      "plutocratic-resource-capture",
      "atomist-libertarianism",
      "monist-technocracy"
    ],
    "example_case_ids": [
      "gitcoin-grants-quadratic-funding",
      "gitcoin-grants"
    ],
    "source_chapter": "Ch. 5-7"
  },
  {
    "id": "supermodular-value-capture-social-policy",
    "name": "Supermodular Value-Capture Policy for Cross-Community Collaboration",
    "description": "The book advances a policy principle that economic and governance systems should be designed to capture and reward 'supermodular' value — gains that arise specifically from the combination of diverse contributors whose collaboration produces more than the sum of individual parts. Applied to social markets, this means structuring incentive and reward systems so that cross-community collaboration yields higher returns than siloed activity, directly countering homophilic market concentration. Quadratic funding and plural property mechanisms are the primary instruments proposed to operationalize this at scale.",
    "target_failure_mode_ids": [
      "atomist-libertarianism",
      "homophilic-network-capture",
      "engagement-maximization"
    ],
    "example_case_ids": [
      "gitcoin-grants-quadratic-funding",
      "partial-common-ownership-harberger"
    ],
    "source_chapter": "Ch. 5-7"
  },
  {
    "id": "stakeholder-corporation-antitrust-remedy",
    "name": "Stakeholder Corporation and Antitrust-as-Democracy",
    "description": "A cluster of renewed movements seeks to create corporations genuinely accountable to workers, customers, suppliers, and communities affected by negative externalities — through Environmental, Social and Governance principles, platform cooperativism, distributed autonomous organizations, data unions, and 'stakeholder remedies' in antitrust that mandate abused stakeholders receive a governance voice. Some of the most prominent large AI foundation model companies (OpenAI, Anthropic) have been structured as partial non-profits or long-term benefit corporations in this spirit. The book frames this as a ⿻ alternative to both pure shareholder primacy and blunt regulatory control.",
    "target_failure_mode_ids": [
      "market-power-monopoly",
      "corporate-governance-capture",
      "externalities-unaccounted"
    ],
    "example_case_ids": [
      "openai-capped-nonprofit",
      "platform-cooperativism",
      "dao-governance"
    ],
    "source_chapter": "Ch. 5-7"
  },
  {
    "id": "henry-george-theorem-circular-investment-policy",
    "name": "Henry George Theorem–Based Circular Investment Policy",
    "description": "The Henry George Theorem, proved by Vickrey and published by Arnott and Stiglitz, holds that taxes raised through correctly designed common-ownership taxes can in principle fund all subsidies required for supermodular investments — illustrated by the way better local schools raise land values that a land tax can then capture. The book presents this as a near-limitless engine for progress, analogous to a superconducting circuit, linking innovation in common-property taxation to the allocation of funds for supermodular activity. Realizing it requires ⿻ property systems that pair common-ownership taxes with community voting and deliberation over how captured value is spent.",
    "target_failure_mode_ids": [
      "public-goods-underprovision",
      "wealth-concentration-inequality",
      "market-power-monopoly"
    ],
    "example_case_ids": [
      "taiwan-land-self-assessment"
    ],
    "source_chapter": "Ch. 5-7"
  },
  {
    "id": "plurality-to-reality-societal-adoption",
    "name": "Societal Adoption Pathway for ⿻ Technologies",
    "description": "The chapter argues that translating ⿻ (plurality) from vision to reality requires coordinated adoption across civil society, government, and the private sector simultaneously — not sequential uptake. The book frames this as analogous to how the internet became infrastructure: through layered, overlapping investment by diverse actors who each saw partial value before the whole network effect emerged.",
    "target_failure_mode_ids": [
      "monist-technocracy",
      "atomist-libertarianism"
    ],
    "example_case_ids": [],
    "source_chapter": "Ch. 6-0"
  },
  {
    "id": "plural-marketing-bridging-endorsement-strategy",
    "name": "⿻ Marketing: Bridging-and-Covering Endorsement Strategy",
    "description": "The ⿻ Marketing approach applies the five criteria for ⿻ diffusion to the promotion of ideas and technologies themselves — choosing endorsers, media venues, and events that bridge primary social divisions and then recursively applying this logic to each sub-community. Rather than maximizing reach through a single dominant channel, this strategy seeks prestige across a diversity of networks (cultural, political, business, research) simultaneously, so that adoption spreads in rough balance across existing social divides. The book documents this approach as implemented in the marketing of Plurality itself, with a recursive tree of audience segments used to guide outreach choices.",
    "target_failure_mode_ids": [
      "blitzscaling-venture-capture",
      "engagement-maximization",
      "monist-technocracy"
    ],
    "example_case_ids": [
      "plurality-book-open-collaborative-authorship"
    ],
    "source_chapter": "Ch. 6-0"
  },
  {
    "id": "worker-ownership-plural-enterprise-policy",
    "name": "Worker Ownership and Plural Enterprise Mandates",
    "description": "The book argues that cooperative and worker-owned enterprise structures embody ⿻ principles at the workplace level, distributing governance rights across participants rather than concentrating them in shareholders. Policies that mandate or incentivize worker ownership — through tax treatment, legal form, or public procurement preferences — extend ⿻ design into the economy's productive core. Taiwan's constitutional mandate for cooperative enterprise is cited as a precedent for how states can embed plural ownership at scale.",
    "target_failure_mode_ids": [
      "atomist-libertarianism",
      "shareholder-primacy-corporate-governance"
    ],
    "example_case_ids": [
      "cooperative-enterprise-constitutional-mandate",
      "worker-cooperative-movement"
    ],
    "source_chapter": "Ch. 6-1"
  },
  {
    "id": "augmented-deliberation-workplace-meetings",
    "name": "Augmented Deliberation for Workplace Meetings and Strategy",
    "description": "Applying ⿻ deliberation tools such as Polis, Remesh, and All Our Ideas — augmented by LLMs — to corporate meeting culture, enabling asynchronous, inclusive, and scalable conversations that surface insights from across the organizational hierarchy rather than only from top executives. The book invokes W. Edwards Deming's Total Quality Management as a precedent, arguing that opening strategy conversations to tens of thousands of employee contributions and using collective intelligence to distill them into shared direction can transform top-down rituals into participative organizational sense-making.",
    "target_failure_mode_ids": [
      "top-down-organizational-hierarchy",
      "unproductive-meeting-culture",
      "dominant-personality-meeting-capture"
    ],
    "example_case_ids": [
      "polis-deliberation",
      "remesh-platform",
      "all-our-ideas"
    ],
    "source_chapter": "Ch. 6-1"
  },
  {
    "id": "participatory-health-data-governance",
    "name": "Participatory Health Data Governance through Data Coalitions",
    "description": "The chapter argues that health data — genomic, clinical, behavioral — is most productively governed through data coalitions or data unions in which patients and communities hold collective bargaining rights over how their information is used by researchers, insurers, and technology companies. Rather than individual consent frameworks that leave patients isolated, collective governance bodies negotiate terms, audit uses, and direct value back to contributing communities. Taiwan's experience with civic oversight of health databases is offered as a precedent.",
    "target_failure_mode_ids": [
      "surveillance-capitalism",
      "atomist-libertarianism"
    ],
    "example_case_ids": [
      "taiwan-covid-civic-response"
    ],
    "source_chapter": "Ch. 6-2"
  },
  {
    "id": "plural-clinical-trial-design-diverse-communities",
    "name": "⿻ Clinical Trial Design Across Diverse Communities",
    "description": "The book contends that clinical research has systematically underrepresented women, elderly people, and non-European populations, producing health knowledge that is both scientifically narrower and less equitable. A ⿻ approach to health R&D deliberately recruits across intersectional demographic groups, uses federated data architectures so communities retain governance over their own health records, and weights findings in ways that surface heterogeneous treatment effects rather than averaging them away. This reframes diversity in clinical research as an epistemic asset rather than a compliance burden.",
    "target_failure_mode_ids": [
      "monist-technocracy",
      "homogenization-of-difference"
    ],
    "example_case_ids": [],
    "source_chapter": "Ch. 6-2"
  },
  {
    "id": "community-health-worker-digital-augmentation",
    "name": "Digital Augmentation of Community Health Workers",
    "description": "The chapter highlights models — drawing on Taiwanese and global examples — in which community health workers (CHWs) are equipped with digital tools that augment rather than replace their relational, place-based knowledge. AI-assisted triage tools, multilingual symptom checkers, and local disease-surveillance dashboards are designed so that CHWs remain the interpretive and decision-making layer, with technology surfacing information to support their judgment. This preserves the trust networks and contextual understanding that formal health systems cannot replicate.",
    "target_failure_mode_ids": [
      "monist-technocracy",
      "engagement-maximization"
    ],
    "example_case_ids": [
      "taiwan-covid-civic-response"
    ],
    "source_chapter": "Ch. 6-2"
  },
  {
    "id": "open-source-drug-development-public-goods",
    "name": "Open-Source and Prize-Based Drug Development as Public Goods",
    "description": "The book argues that the patent-monopoly model of pharmaceutical development systematically under-invests in treatments for diseases concentrated in low-income or small populations and over-invests in lifestyle drugs for wealthy markets. A ⿻ policy alternative combines public R&D funding, open-source drug development consortia, and innovation prizes (analogous to quadratic-funding logic) that reward demonstrated public-health impact rather than revenue capture. Separating the funding of research from the right to charge monopoly prices is presented as a structural precondition for equitable global health.",
    "target_failure_mode_ids": [
      "atomist-libertarianism",
      "surveillance-capitalism"
    ],
    "example_case_ids": [],
    "source_chapter": "Ch. 6-2"
  },
  {
    "id": "plural-public-health-communication-bridging-misinformation",
    "name": "⿻ Public Health Communication with Bridging and Misinformation Inoculation",
    "description": "Drawing on Taiwan's experience during COVID-19, the book describes a public health communication strategy that treats information ecosystems as plural rather than monolithic. Rather than top-down official messaging, health ministries work with community health workers, civil-society fact-checkers, and social media platforms to distribute contextually adapted, multilingual health information — explicitly designed to bridge across communities with different priors and information sources. The approach integrates humor, transparency about uncertainty, and rapid rumor response ('humor over clamor') rather than authoritative decree.",
    "target_failure_mode_ids": [
      "authoritarian-digital-governance",
      "engagement-maximization"
    ],
    "example_case_ids": [
      "taiwan-covid-civic-response",
      "g0v-civic-hacking"
    ],
    "source_chapter": "Ch. 6-2"
  },
  {
    "id": "public-interest-journalism-funding-mandate",
    "name": "Public-Interest Journalism & Local News Funding",
    "description": "The book argues that democratic societies face a structural failure in news markets where engagement-maximizing platforms have defunded local journalism and public-interest reporting. It points to models such as public media funding, journalism cooperatives, and subsidized local newsrooms as ⿻ responses that sustain the informational commons democracy requires. Rather than leaving news production entirely to advertising markets or proprietary platforms, public investment in journalism treats accurate, cross-cutting information as a public good.",
    "target_failure_mode_ids": [
      "engagement-maximization",
      "surveillance-capitalism",
      "misinformation-ecosystem"
    ],
    "example_case_ids": [
      "community-notes-bridging-social-media",
      "crowdsourced-fact-checking"
    ],
    "source_chapter": "Ch. 6-3"
  },
  {
    "id": "cryptographic-source-protection-journalism-policy",
    "name": "Cryptographic Source Protection for Journalism",
    "description": "Zero-knowledge proofs and designated verifier signatures can allow journalistic sources to remain confidential even to journalists themselves while still proving elements of their position or credentials to audiences. This ⿻ cryptographic approach simultaneously enables trustworthy and private disclosures, protects community norms of confidentiality, and allows those norms to be overridden at personal cost in a broader social interest when critical. The book frames this as equivalent to moving every country up a category on the Reporters Without Borders World Press Freedom Index.",
    "target_failure_mode_ids": [
      "surveillance-capitalism",
      "authoritarian-digital-governance"
    ],
    "example_case_ids": [],
    "source_chapter": "Ch. 6-6"
  },
  {
    "id": "gfm-citizen-cojournalism-community-voice",
    "name": "GFM-Augmented Citizen Co-Journalism for Community Voice",
    "description": "Generative foundation models (GFMs) can learn from and synthesize community speech patterns, incorporate verified facts, and translate fluidly across languages and subcultural styles, enabling groups of citizens who are not trained journalists to convey their stories with precision and clarity to diverse publics. This addresses the long-standing tension between allowing a community to 'speak for itself' and crafting narratives digestible to outside audiences. The strategy is framed as an order-of-magnitude increase in the number of people who can meaningfully and helpfully participate in the journalistic process.",
    "target_failure_mode_ids": [
      "monist-technocracy",
      "engagement-maximization"
    ],
    "example_case_ids": [
      "wikipedia-collaborative-knowledge"
    ],
    "source_chapter": "Ch. 6-6"
  },
  {
    "id": "environmental-data-commons-open-sensors",
    "name": "Environmental Data Commons via Open Sensor Networks",
    "description": "The book documents how distributed, citizen-operated sensor networks and open environmental data commons can aggregate real-time air quality, water, and biodiversity measurements across jurisdictions. Rather than siloing environmental monitoring within regulatory agencies, this approach pools data through open protocols so communities, researchers, and policymakers can act on shared ground-truth readings. Taiwan's g0v community and related civic-tech actors have piloted such sensor-sharing infrastructure as a model for democratic environmental governance.",
    "target_failure_mode_ids": [
      "monist-technocracy",
      "atomist-libertarianism"
    ],
    "example_case_ids": [
      "g0v-civic-hacking",
      "open-street-map"
    ],
    "source_chapter": "Ch. 6-4"
  },
  {
    "id": "plural-environmental-governance-community-stewardship",
    "name": "Plural Environmental Governance through Community Stewardship",
    "description": "The chapter argues that environmental governance aligned with ⿻ principles distributes decision-making authority to overlapping communities — Indigenous land stewards, local watershed councils, urban neighbourhood associations — rather than concentrating it in centralized state agencies or market mechanisms alone. This polycentric model draws on Elinor Ostrom's commons research, which the book explicitly cites as foundational to ⿻ thinking about shared resources, and emphasises that cross-scale coordination between these communities produces more resilient and legitimate environmental outcomes than either technocratic or market-only approaches.",
    "target_failure_mode_ids": [
      "monist-technocracy",
      "atomist-libertarianism"
    ],
    "example_case_ids": [
      "ostrom-commons-governance"
    ],
    "source_chapter": "Ch. 6-4"
  },
  {
    "id": "plural-learning-environment-design",
    "name": "⿻ Learning Environment Design",
    "description": "Educational institutions are redesigned so that learning happens across diverse, cross-cutting social contexts rather than in age-segregated, standardized classrooms. The book points to models like one-room schoolhouses, mixed-age apprenticeships, and project-based learning as precursors to environments that cultivate collaborative intelligence across difference rather than individual performance on uniform tests.",
    "target_failure_mode_ids": [
      "monist-technocracy",
      "atomist-libertarianism"
    ],
    "example_case_ids": [
      "democratic-schools-learning-environments",
      "project-based-learning-plural"
    ],
    "source_chapter": "Ch. 6-5"
  },
  {
    "id": "open-credentials-plural-badging-learning",
    "name": "Open and Plural Credentialing for Learning",
    "description": "The book argues for replacing or supplementing narrow degree-based credentials with open, stackable, and contextually verifiable badges and records that capture a diverse range of skills, contributions, and collaborative achievements. This approach draws on projects like Mozilla Open Badges and the broader movement toward learner-owned, portable records that reflect the plurality of ways people learn and contribute.",
    "target_failure_mode_ids": [
      "atomist-libertarianism",
      "monist-technocracy"
    ],
    "example_case_ids": [
      "next-gen-badging-credentials",
      "mozilla-open-badges"
    ],
    "source_chapter": "Ch. 6-5"
  },
  {
    "id": "ai-augmented-plural-education",
    "name": "AI-Augmented ⿻ Education",
    "description": "The book envisions AI tools in education not as replacements for teachers or as engines of personalized, atomized instruction, but as facilitators of collaborative, cross-community learning. AI tutors and curriculum tools are designed to surface diverse perspectives, connect learners across difference, and augment the relational and deliberative dimensions of learning rather than optimizing for individual test performance.",
    "target_failure_mode_ids": [
      "monist-technocracy",
      "atomist-libertarianism"
    ],
    "example_case_ids": [
      "human-aware-ai-science-augmentation",
      "augmented-deliberation-civic-infrastructure"
    ],
    "source_chapter": "Ch. 6-5"
  },
  {
    "id": "digital-public-infrastructure-1pct-gdp-mandate",
    "name": "1% GDP Digital Public Infrastructure Investment Mandate",
    "description": "Weyl and Tang envision governments and charities devoting roughly 1% of GDP to digital public research, development, protocols, and infrastructure — amounting to nearly a trillion US dollars annually — compared to the current half-percent of GDP spent on all government R&D and the negligible fraction directed at open digital infrastructure. This investment level would represent at least a two-order-of-magnitude increase in public digital investment and would, given the multiplier effect of even limited financial support for open-source development, fundamentally transform the character of digital industries from a private-dominated economy into a ⿻ society. The policy draws on precedents from ARPA, India Stack, Taiwan, Brazil, and Singapore as evidence that public-mission digital infrastructure can catalyze decentralized private and civil innovation.",
    "target_failure_mode_ids": [
      "monist-technocracy",
      "atomist-libertarianism",
      "surveillance-capitalism",
      "big-tech-engagement-maximization"
    ],
    "example_case_ids": [
      "arpanet",
      "india-stack",
      "presidential-hackathon-taiwan",
      "civil-iot-taiwan"
    ],
    "source_chapter": "Ch. 7-0"
  },
  {
    "id": "dao-legal-framework-transnational-nonprofit",
    "name": "Legal Frameworks for Transnational Democratic Non-Profit Organizations",
    "description": "Weyl and Tang point to the persistent legal barriers facing open-source organizations, DAOs, and other innovative democratic transnational entities — including the dissolution of the Open Collective Foundation despite its purpose-built structure — as evidence that existing legal frameworks provide a severe competitive disadvantage to third-sector technology providers. New legal frameworks are needed to support and defend transnational democratic non-profit organizational forms, with Wyoming's DAO legislation cited as a rare early step. The book draws a parallel to the evolution of labor law, arguing that just as labor law evolved to empower collective bargaining, law must evolve to allow data workers and civil technology organizations to collectively exercise their rights without being outcompeted by concentrated private actors.",
    "target_failure_mode_ids": [
      "atomist-libertarianism",
      "captured-dao-plutocracy"
    ],
    "example_case_ids": [
      "open-collective-foundation",
      "gitcoin-grants"
    ],
    "source_chapter": "Ch. 7-0"
  },
  {
    "id": "digital-sector-plural-tax-instruments",
    "name": "⿻-Aligned Digital Tax Instruments for Infrastructure Funding",
    "description": "Weyl and Tang propose a suite of digital tax instruments designed to simultaneously raise revenue for ⿻ infrastructure and directly enact ⿻ aims, including: progressive common ownership taxes on concentrated computational assets (to deter cloud monopolization and dangerous-scale model training); digital land taxes on scarce digital space like spectrum, web addresses, and advertising inventory (to accrue naturally to transnational internet governance bodies); implicit data/attention exchange taxes on 'free' surveillance services; digital asset common ownership taxes; commons-derived data profit taxes; and gig work taxes. The gas-tax-for-roads precedent is cited to argue that industry stakeholders can be brought to support such taxes when they see the infrastructure benefits they fund, and the criteria of Direct ⿻ alignment, Jurisdictional Alignment, Revenue Alignment, and Financial Adequacy are offered as the evaluative framework.",
    "target_failure_mode_ids": [
      "surveillance-capitalism",
      "big-tech-engagement-maximization",
      "atomist-libertarianism"
    ],
    "example_case_ids": [
      "arpanet"
    ],
    "source_chapter": "Ch. 7-0"
  },
  {
    "id": "plurality-institute-academic-network",
    "name": "Plurality Institute: Transnational Academic Network for ⿻ Research",
    "description": "The book describes the Plurality Institute as a purpose-built institution to network academics working on ⿻ across disciplinary and institutional boundaries, shortening the loop from research ideation to practical experimentation. It exemplifies the intermediate-horizon strategy of forming new fields of inquiry around ⿻ and training experts who regularly cross the boundaries between knowledge creation and deployment, forging relationships with communities of practice.",
    "target_failure_mode_ids": [
      "monist-technocracy"
    ],
    "example_case_ids": [
      "plurality-book-open-collaborative-authorship"
    ],
    "source_chapter": "Conclusion"
  }
];
