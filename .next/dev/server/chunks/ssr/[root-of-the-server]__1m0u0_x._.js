module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/services/data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getService",
    ()=>getService,
    "services",
    ()=>services
]);
const services = [
    {
        slug: "cybersecurity-risk-advisory",
        number: "01",
        title: "Cybersecurity Risk Advisory",
        summary: "Understand, prioritize and manage risks that could affect your business, technology, data or customers.",
        purpose: "We help organizations identify, understand, prioritize and manage cybersecurity risks that could affect business objectives, technology, data, customers or regulatory obligations.",
        problem: "You need a clear view of your current exposure, but the available information is fragmented, overly technical or difficult to turn into a decision.",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1800&q=85",
        imageAlt: "Close-up of secure server hardware and blue status lights",
        areas: [
            "Cybersecurity maturity assessment",
            "Cybersecurity risk assessment",
            "Threat risk assessment",
            "Cloud security risk assessment",
            "AI security risk assessment",
            "Regulatory gap assessment",
            "Third-party risk assessment"
        ],
        outcomes: [
            "A defensible view of current maturity and exposure",
            "Prioritized findings tied to business impact",
            "Risk registers, treatment plans and practical roadmaps",
            "Management briefings that support investment and accountability"
        ],
        frameworks: [
            "NIST CSF 2.0",
            "CIS Critical Security Controls",
            "ISO/IEC 27001"
        ]
    },
    {
        slug: "cybersecurity-governance",
        number: "02",
        title: "Cybersecurity Governance",
        summary: "Turn business requirements and obligations into clear ownership, policies and repeatable operating practices.",
        purpose: "We help organizations translate risk, business requirements and regulatory obligations into approved policies, standards, responsibilities and repeatable operating practices.",
        problem: "Your policies may exist, but ownership, exceptions, review cycles and day-to-day operating procedures are not clear enough to make security accountable.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=85",
        imageAlt: "Abstract blue network lines and digital connections",
        areas: [
            "Security policy development",
            "Data privacy governance",
            "Security standards and procedures",
            "Business continuity planning",
            "Disaster recovery planning",
            "Governance roles and decision rights",
            "Exception and review processes"
        ],
        outcomes: [
            "Approved policies and standards that people can operate",
            "Clear accountability, decision rights and control ownership",
            "Practical governance calendars and review cycles",
            "Continuity and recovery planning aligned to business priorities"
        ],
        frameworks: [
            "ISO/IEC 27001",
            "ISO 22301",
            "ISO 27701",
            "PIPEDA",
            "GDPR"
        ]
    },
    {
        slug: "cybersecurity-operational-resilience",
        number: "03",
        title: "Cybersecurity Operational Resilience",
        summary: "Prepare to prevent, detect, respond to, recover from and adapt to cyber threats and disruption.",
        purpose: "We strengthen an organization's ability to prevent, detect, respond to, recover from and adapt to cybersecurity incidents and operational disruptions.",
        problem: "An incident, outage or technology change could interrupt critical services before teams know who should act, what matters most or how recovery will work.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1800&q=85",
        imageAlt: "Rows of illuminated server equipment in a data centre",
        areas: [
            "Cyber threat intelligence",
            "Cloud security",
            "Incident response",
            "Identity and access management",
            "Network, endpoint and device security",
            "Incident response and digital forensics",
            "Emerging technology and AI security",
            "Data loss prevention",
            "Security operations advisory"
        ],
        outcomes: [
            "Reduced attack exposure across critical environments",
            "Clearer response roles, escalation paths and priorities",
            "Improved access governance and recovery readiness",
            "Practical advice for resilient technology operations"
        ],
        frameworks: [
            "NIST CSF 2.0",
            "ISO 22301",
            "CIS Critical Security Controls"
        ]
    },
    {
        slug: "regulatory-framework-compliance",
        number: "04",
        title: "Regulatory Framework Compliance",
        summary: "Prepare for assurance and certification activities with a practical path from gaps to readiness.",
        purpose: "We support assessment, readiness, implementation, advisory and control improvement. We do not issue certifications or independent attestations.",
        problem: "A customer, regulator, auditor or certification project is asking for evidence of stronger controls, and you need to know what is missing and what to do next.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1800&q=85",
        imageAlt: "Abstract close-up of a secure digital interface",
        areas: [
            "ISO/IEC 27001 readiness",
            "ISO 22301 business continuity",
            "ISO 27701 privacy",
            "NIST CSF 2.0 and NIST SP 800-53",
            "CIS Critical Security Controls",
            "SOC 2 readiness",
            "PCI DSS readiness",
            "PIPEDA, GDPR and HIPAA support",
            "AI governance framework alignment"
        ],
        outcomes: [
            "A clear readiness baseline and gap register",
            "Evidence mapped to applicable criteria",
            "Prioritized remediation actions and ownership",
            "Support preparing for external certification or attestation activities"
        ],
        frameworks: [
            "ISO/IEC 27001",
            "ISO 22301",
            "ISO 27701",
            "NIST",
            "SOC 2",
            "PCI DSS",
            "PIPEDA",
            "GDPR",
            "HIPAA"
        ]
    },
    {
        slug: "it-audit-control-assurance",
        number: "05",
        title: "IT Audit & Control Assurance",
        summary: "Get an independent, evidence-based view of technology controls, governance and control effectiveness.",
        purpose: "We provide independent, evidence-based assessment of technology controls, governance, risk management and control effectiveness.",
        problem: "Leadership, internal audit or a business partner needs confidence that important technology controls are designed appropriately and working as intended.",
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1800&q=85",
        imageAlt: "Secure server hardware viewed in blue light",
        areas: [
            "IT General Controls review",
            "IT internal audit",
            "Access management",
            "Change management",
            "Computer operations",
            "Backup and recovery",
            "Development controls",
            "Interfaces, key reports and service organization controls"
        ],
        outcomes: [
            "Independent findings supported by evidence",
            "An objective view of design and operating effectiveness",
            "Risk-based remediation recommendations",
            "Clear reporting for management, audit committees and stakeholders"
        ],
        frameworks: [
            "NIST SP 800-53",
            "SOC 2 Trust Services Criteria",
            "ISO/IEC 27001"
        ]
    },
    {
        slug: "cybersecurity-program-development",
        number: "06",
        title: "Cybersecurity Program Development",
        summary: "Build sustainable security capabilities with strategy, governance, metrics and accountable execution.",
        purpose: "We help organizations build sustainable cybersecurity management capabilities rather than relying on one-time documents or isolated projects.",
        problem: "Security goals are understood, but initiatives, ownership, metrics and operating processes are not yet connected into a sustainable program.",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1800&q=85",
        imageAlt: "Abstract security interface with illuminated data lines",
        areas: [
            "Information security management system development",
            "AI management system development",
            "Cybersecurity strategy",
            "Multi-year security roadmaps",
            "Target operating models",
            "Security metrics and reporting",
            "Program governance and implementation support"
        ],
        outcomes: [
            "A strategy connected to business objectives and risk appetite",
            "A sequenced roadmap with accountable owners",
            "Operating calendars, metrics and management processes",
            "A durable foundation for continuous improvement"
        ],
        frameworks: [
            "ISO/IEC 27001",
            "ISO/IEC 42001",
            "NIST CSF 2.0",
            "CIS Controls"
        ]
    },
    {
        slug: "security-awareness-training",
        number: "07",
        title: "Security Awareness Training",
        summary: "Improve workforce security behaviour through practical, measurable and role-relevant learning.",
        purpose: "We reduce human-related cybersecurity risk and improve workforce security knowledge through measurable, role-relevant learning activities.",
        problem: "Employees are expected to make security-sensitive decisions every day, but generic training is not changing behaviour in the roles that carry the most risk.",
        image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1800&q=85",
        imageAlt: "Abstract digital network pattern in blue and teal",
        areas: [
            "Ethical phishing simulations",
            "Executive security awareness",
            "Privileged user training",
            "Finance and high-risk role training",
            "Developer and technology team training",
            "Security culture improvement",
            "Targeted learning and reporting"
        ],
        outcomes: [
            "Measurable awareness and behaviour baselines",
            "Role-relevant learning for higher-risk teams",
            "Improved recognition and reporting of suspicious activity",
            "Actionable results for management and security leaders"
        ],
        frameworks: [
            "CIS Critical Security Controls",
            "ISO/IEC 27001"
        ]
    }
];
function getService(slug) {
    return services.find((service)=>service.slug === slug);
}
}),
"[project]/app/services/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServicesPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-rsc] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-rsc] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/data.ts [app-rsc] (ecmascript)");
;
;
;
const metadata = {
    title: "Cybersecurity Services | Atlantic Fortis",
    description: "Explore Atlantic Fortis cybersecurity advisory, governance, resilience, compliance, audit, program development and awareness services."
};
function ServicesPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "servicesPage",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "serviceNav",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "brand",
                        href: "/",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "brandMark",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/app/services/page.tsx",
                                    lineNumber: 12,
                                    columnNumber: 94
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/services/page.tsx",
                                lineNumber: 12,
                                columnNumber: 66
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "ATLANTIC",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/app/services/page.tsx",
                                        lineNumber: 12,
                                        columnNumber: 140
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "FORTIS"
                                    }, void 0, false, {
                                        fileName: "[project]/app/services/page.tsx",
                                        lineNumber: 12,
                                        columnNumber: 146
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/services/page.tsx",
                                lineNumber: 12,
                                columnNumber: 126
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/services/page.tsx",
                        lineNumber: 12,
                        columnNumber: 36
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "button dark",
                        href: "/#contact",
                        children: [
                            "Request a Consultation ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/app/services/page.tsx",
                                lineNumber: 12,
                                columnNumber: 237
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/services/page.tsx",
                        lineNumber: 12,
                        columnNumber: 170
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/services/page.tsx",
                lineNumber: 12,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "servicesPageIntro",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "eyebrow",
                        children: "OUR CAPABILITIES"
                    }, void 0, false, {
                        fileName: "[project]/app/services/page.tsx",
                        lineNumber: 13,
                        columnNumber: 44
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: [
                            "Cybersecurity support",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/app/services/page.tsx",
                                lineNumber: 13,
                                columnNumber: 116
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                children: "built around your needs."
                            }, void 0, false, {
                                fileName: "[project]/app/services/page.tsx",
                                lineNumber: 13,
                                columnNumber: 122
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/services/page.tsx",
                        lineNumber: 13,
                        columnNumber: 91
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "From risk visibility and governance to assurance, resilience and sustainable program development, Atlantic Fortis helps organizations make confident security decisions."
                    }, void 0, false, {
                        fileName: "[project]/app/services/page.tsx",
                        lineNumber: 13,
                        columnNumber: 160
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/services/page.tsx",
                lineNumber: 13,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "servicesPageGrid",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["services"].map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "serviceIndexCard",
                        href: `/services/${service.slug}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "serviceNumber",
                                children: service.number
                            }, void 0, false, {
                                fileName: "[project]/app/services/page.tsx",
                                lineNumber: 14,
                                columnNumber: 156
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: service.title
                            }, void 0, false, {
                                fileName: "[project]/app/services/page.tsx",
                                lineNumber: 14,
                                columnNumber: 211
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: service.summary
                            }, void 0, false, {
                                fileName: "[project]/app/services/page.tsx",
                                lineNumber: 14,
                                columnNumber: 235
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "textLink",
                                children: [
                                    "Explore service ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/app/services/page.tsx",
                                        lineNumber: 14,
                                        columnNumber: 302
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/services/page.tsx",
                                lineNumber: 14,
                                columnNumber: 259
                            }, this)
                        ]
                    }, service.slug, true, {
                        fileName: "[project]/app/services/page.tsx",
                        lineNumber: 14,
                        columnNumber: 70
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/services/page.tsx",
                lineNumber: 14,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "serviceCta",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "eyebrow",
                                children: "NOT SURE WHERE TO START?"
                            }, void 0, false, {
                                fileName: "[project]/app/services/page.tsx",
                                lineNumber: 15,
                                columnNumber: 42
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Bring us the business concern."
                            }, void 0, false, {
                                fileName: "[project]/app/services/page.tsx",
                                lineNumber: 15,
                                columnNumber: 97
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "We can help connect the concern, requirement or risk to the right starting point."
                            }, void 0, false, {
                                fileName: "[project]/app/services/page.tsx",
                                lineNumber: 15,
                                columnNumber: 136
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/services/page.tsx",
                        lineNumber: 15,
                        columnNumber: 37
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "button light",
                        href: "/#contact",
                        children: [
                            "Start a conversation ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                size: 17
                            }, void 0, false, {
                                fileName: "[project]/app/services/page.tsx",
                                lineNumber: 15,
                                columnNumber: 296
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/services/page.tsx",
                        lineNumber: 15,
                        columnNumber: 230
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/services/page.tsx",
                lineNumber: 15,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/services/page.tsx",
        lineNumber: 11,
        columnNumber: 10
    }, this);
}
}),
"[project]/app/services/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/services/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1m0u0_x._.js.map