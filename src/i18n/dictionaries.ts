import type { Locale } from "./config";

export const dictionaries = {
  de: {
    meta: {
      title: "L&J Wedding Planner | Luxuriöse Hochzeitsplanung in Deutschland & Europa",
      description:
        "Elegante Hochzeitsplanung für Schloss-, Reise- und mehrsprachige Hochzeiten in Deutschland und Europa."
    },
    nav: {
      brand: "L&J Wedding Planner",
      openMenu: "Navigation öffnen",
      closeMenu: "Navigation schließen",
      languageLabel: "Sprache wählen",
      consultation: "Beratung",
      items: [
        { id: "about", label: "Über uns" },
        { id: "services", label: "Leistungen" },
        { id: "experiences", label: "Erlebnisse" },
        { id: "process", label: "Ablauf" },
        { id: "moments", label: "Momente" },
        { id: "contact", label: "Kontakt" }
      ]
    },
    hero: {
      imageAlt: "Elegante europäische Hochzeitslocation mit warmem Licht",
      kicker: "Maßgeschneiderte Hochzeiten für moderne Romantiker",
      title: "Luxuriöse Hochzeitsplanung in Deutschland & Europa",
      subtitle:
        "Für Paare mit Sinn für Ästhetik gestalten wir elegante, gelassene und unverwechselbare Hochzeitserlebnisse in Europa.",
      primaryCta: "Beratung buchen",
      secondaryCta: "Hochzeitsreise beginnen",
      note: "Schloss-, Reise- und mehrsprachige Hochzeiten"
    },
    about: {
      eyebrow: "Über L&J",
      title: "Ruhige Präzision, kulturelles Feingefühl und ein Blick für das Schöne.",
      paragraphs: [
        "L&J Wedding Planner ist ein in Deutschland ansässiges Hochzeitsplanungsteam für anspruchsvolle Paare, die eine europäische Hochzeit mit persönlicher Tiefe, Stil und Klarheit wünschen.",
        "Wir verbinden deutsch-chinesisches Kulturverständnis mit strukturierter Planung, sicherer Kommunikation mit Locations und Dienstleistern, hochwertigem Design und verlässlicher Umsetzung vor Ort.",
        "Gegründet wurde L&J Wedding Planner von Eva Li und Lukas Cheng. Wir leben und arbeiten seit vielen Jahren in Deutschland und kennen die kulturellen Unterschiede, die Kommunikation mit europäischen Hochzeitslocations und die Details einer hochwertigen Umsetzung. Unser Ziel ist, dass Paare im Ausland nicht nur ein schönes Konzept erhalten, sondern Klarheit, Sicherheit und das Gefühl, wirklich verstanden zu werden."
      ],
      highlights: [
        "Deutsch-chinesische Kulturkompetenz",
        "Ort- und Dienstleisterkommunikation",
        "Budget, Ablauf und Gästemanagement",
        "Designkonzept und ästhetische Regie"
      ],
      asideTitle: "Für Paare, die Europa bewusst wählen.",
      asideText:
        "Ob Schloss, Weingut, Seevilla oder intime Hochzeitszeremonie: Wir übersetzen Ihre Geschichte in ein Fest, das sich leicht anfühlt und lange nachklingt."
    },
    services: {
      eyebrow: "Leistungen",
      title: "Planung, Gestaltung und Umsetzung mit internationalem Anspruch.",
      items: [
        {
          title: "Komplette Hochzeitsplanung",
          label: "Ganzheitliche Begleitung",
          description:
            "Ganzheitliche Begleitung von der ersten Idee bis zum letzten Gastmoment, inklusive Budget, Design, Dienstleisterauswahl und Ablaufsteuerung."
        },
        {
          title: "Reisehochzeit in Europa",
          label: "Feiern an besonderen Orten",
          description:
            "Planung für Hochzeiten in Deutschland und Europa, abgestimmt auf Reise, Gästeerlebnis, lokale Logistik und kulturelle Erwartungen."
        },
        {
          title: "Schloss Hochzeit",
          label: "Historische Kulissen",
          description:
            "Sorgfältige Suche, Abstimmung und Inszenierung von Schlosslocations mit Sinn für Historie, Atmosphäre und moderne Eleganz."
        },
        {
          title: "Koordination am Hochzeitstag",
          label: "Souveräne Tagesleitung",
          description:
            "Professionelle Tageskoordination für Paare, die bereits geplant haben und am Hochzeitstag eine souveräne Leitung wünschen."
        },
        {
          title: "Kommunikation mit Location & Dienstleistern",
          label: "Klare Abstimmung",
          description:
            "Klare Kommunikation mit Orten, Gastronomie, Floristik, Foto, Video, Musik und weiteren Partnern auf Deutsch, Chinesisch und Englisch."
        },
        {
          title: "Mehrsprachiger Hochzeitsservice",
          label: "Deutsch, Chinesisch und Englisch",
          description:
            "Mehrsprachige Betreuung für Paare, Familien und Gäste, damit kulturelle Details verstanden und harmonisch umgesetzt werden."
        }
      ]
    },
    experiences: {
      eyebrow: "Besondere Erlebnisse",
      title: "Europäische Orte, fein kuratierte Details und ein Fest, das zu Ihnen passt.",
      items: [
        {
          title: "Deutsche Schloss Hochzeit",
          description:
            "Eine romantische Kulisse mit historischer Architektur, feiner Tischkultur und präzisem Ablauf."
        },
        {
          title: "Europäische Gutshof Hochzeit",
          description:
            "Private Landsitze, Weingüter und elegante Hideaways für ein intimes, stilvolles Wochenende."
        },
        {
          title: "Kleine hochwertige Reisehochzeit",
          description:
            "Bewusst reduzierte Gästelisten, dafür mehr Zeit, Atmosphäre und persönliche Erlebnisse."
        },
        {
          title: "Interkulturelle Hochzeit",
          description:
            "Chinesische, deutsche und internationale Elemente werden sensibel verbunden, ohne überladen zu wirken."
        },
        {
          title: "Visuelle Hochzeitsgeschichte",
          description:
            "Foto, Video, Papeterie und Raumgestaltung folgen einer klaren visuellen Erzählung."
        }
      ]
    },
    process: {
      eyebrow: "Ablauf",
      title: "Ein klarer Ablauf bringt Ruhe in komplexe Entscheidungen.",
      steps: [
        {
          title: "Erstgespräch",
          label: "Kennenlernen und Einordnung",
          description:
            "Wir verstehen Ihre Wünsche, Prioritäten, Familienkonstellation, Reiserahmen und erste Budgetvorstellung."
        },
        {
          title: "Konzept & Budget",
          label: "Stilrichtung und Rahmen",
          description:
            "Aus Ihrer Vision entsteht ein stimmiges Konzept mit realistischem Budget, Stilrichtung und Entscheidungslogik."
        },
        {
          title: "Location- & Dienstleisterkoordination",
          label: "Recherche und Abstimmung",
          description:
            "Wir recherchieren, vergleichen, verhandeln und koordinieren Locations sowie Dienstleister in Europa."
        },
        {
          title: "Design & Zeitplan",
          label: "Gestaltung und Ablauf",
          description:
            "Design, Tagesplan, Gästefluss und technische Details werden zu einem ruhigen Gesamtbild verbunden."
        },
        {
          title: "Umsetzung am Hochzeitstag",
          label: "Präsente Leitung vor Ort",
          description:
            "Am Hochzeitstag führen wir alle Fäden zusammen, damit Sie präsent bleiben und den Moment genießen können."
        }
      ]
    },
    portfolio: {
      eyebrow: "Portfolio / Momente",
      title: "Europäische Hochzeitsmomente mit ruhiger Eleganz.",
      intro:
        "Schlosszeremonien, elegante Dinners und feine Details zeigen die warme, internationale Ästhetik von L&J.",
      items: [
        {
          src: "/images/castle-ceremony.jpg",
          alt: "Schlosszeremonie mit goldenen Details",
          title: "Schlosszeremonie",
          caption: "Eine klassische europäische Kulisse, modern und warm inszeniert."
        },
        {
          src: "/images/manor-dinner.jpg",
          alt: "Elegantes Dinner in einem europäischen Gutshaus",
          title: "Gutshof Dinner",
          caption: "Gehobene Tischkultur, Kerzenlicht und ein Ablauf, der sich mühelos anfühlt."
        },
        {
          src: "/images/bridal-details.jpg",
          alt: "Brautdetails mit Papeterie und Stoffstrukturen",
          title: "Brautdetails",
          caption: "Papeterie, Stoffe und kleine Gesten erzählen die Geschichte des Tages."
        },
        {
          src: "/images/lakeside-vows.jpg",
          alt: "Freie Trauung am europäischen See",
          title: "Gelübde am See",
          caption: "Intime Reisehochzeiten mit viel Raum für Nähe."
        },
        {
          src: "/images/table-design.jpg",
          alt: "Champagnerfarbene Tischgestaltung mit Blumen",
          title: "Tischgestaltung",
          caption: "Reduzierte Farben, feine Materialien und eine ruhige Dramaturgie."
        },
        {
          src: "/images/visual-story.jpg",
          alt: "Hochzeitsfilm und visuelle Erzählung",
          title: "Visuelle Geschichte",
          caption: "Foto und Film werden früh in die ästhetische Planung eingebunden."
        }
      ]
    },
    testimonials: {
      eyebrow: "Kundenstimmen",
      title: "Worte von Paaren, die sich getragen fühlen wollten.",
      items: [
        {
          quote:
            "L&J hat unsere Schloss Hochzeit in Bayern mit so viel Ruhe geführt, dass wir den Tag wirklich erleben konnten. Jede Entscheidung fühlte sich klar und persönlich an.",
          author: "Y. & M.",
          meta: "Schloss Hochzeit, Bayern"
        },
        {
          quote:
            "Unsere Familien sprechen Deutsch, Chinesisch und Englisch. Die Kommunikation war warm, präzise und unglaublich entlastend.",
          author: "L. & T.",
          meta: "Interkulturelle Hochzeit, Frankfurt"
        },
        {
          quote:
            "Vom ersten Stimmungsbild bis zum letzten Transfer war alles durchdacht. Das Ergebnis war elegant, aber nie steif.",
          author: "J. & A.",
          meta: "Reisehochzeit, Toskana"
        }
      ]
    },
    faq: {
      eyebrow: "FAQ",
      title: "Häufige Fragen",
      items: [
        {
          question: "Planen Sie Hochzeiten außerhalb Deutschlands?",
          answer:
            "Ja. Wir begleiten Hochzeiten in Deutschland und an ausgewählten europäischen Orten, abhängig von Ort, Saison und Projektumfang."
        },
        {
          question: "Können Sie Deutsch, Chinesisch und Englisch abdecken?",
          answer:
            "Ja. Wir unterstützen Paare, Familien, Locations und Dienstleister in Deutsch, Chinesisch und Englisch."
        },
        {
          question: "Ist nur eine Koordination am Hochzeitstag möglich?",
          answer:
            "Ja. Wenn die wesentlichen Elemente bereits geplant sind, übernehmen wir die finale Abstimmung und die Leitung am Hochzeitstag."
        },
        {
          question: "Helfen Sie bei der Suche nach Schloss- oder Hotellocations?",
          answer:
            "Ja. Wir unterstützen bei Recherche, Vorauswahl, Kommunikation, Besichtigungen und Angebotsvergleich."
        },
        {
          question: "Kann Foto- und Videoplanung integriert werden?",
          answer:
            "Ja. Wir stimmen Foto, Video und visuelle Dramaturgie früh mit dem Gesamtkonzept ab und empfehlen passende Partner."
        }
      ]
    },
    contact: {
      eyebrow: "Contact",
      title: "Erzählen Sie uns von Ihrer Hochzeit.",
      intro:
        "Nach Ihrer Anfrage prüfen wir in der Regel zunächst Hochzeitsdatum, Stadt, Gästezahl, Budgetrahmen und gewünschte Leistungen. Wenn die ersten Eckdaten realistisch zusammenpassen, stimmen wir den nächsten persönlichen Gesprächstermin mit Ihnen ab.",
      submit: "Anfrage senden",
      submitting: "Wird gesendet",
      successTitle: "Vielen Dank für Ihre Anfrage.",
      successText:
        "Ihre Nachricht ist angekommen. Wir melden uns zeitnah und persönlich bei Ihnen.",
      errorTitle: "Die Nachricht konnte nicht gesendet werden.",
      errorText:
        "Bitte prüfen Sie die Angaben oder versuchen Sie es später erneut.",
      requiredNote: "Pflichtfelder sind markiert.",
      honeypot: "Website",
      fields: {
        name: { label: "Name", placeholder: "Ihr Name" },
        email: { label: "E-Mail", placeholder: "name@example.com" },
        phone: { label: "Telefon / WhatsApp", placeholder: "+49 ..." },
        weddingDate: { label: "Hochzeitsdatum", placeholder: "" },
        location: { label: "Hochzeitsstadt / Location", placeholder: "München, Schloss, Hotel ..." },
        guestCount: { label: "Gästezahl", placeholder: "z. B. 60" },
        preferredLanguage: { label: "Bevorzugte Sprache", placeholder: "Bitte wählen" },
        message: {
          label: "Nachricht",
          placeholder: "Erzählen Sie uns von Ihrer Vision, Location, Gästen und Prioritäten."
        },
        gdprConsent: {
          label:
            "Ich stimme zu, dass meine Angaben zur Bearbeitung meiner Anfrage verarbeitet werden."
        }
      },
      languageOptions: [
        { value: "de", label: "Deutsch" },
        { value: "zh", label: "中文" },
        { value: "en", label: "English" }
      ]
    },
    footer: {
      line: "Luxuriöse Hochzeitsplanung für Deutschland, Europa und interkulturelle Feiern.",
      impressum: "Impressum",
      datenschutz: "Datenschutz",
      rights: "Alle Rechte vorbehalten."
    },
    legal: {
      backHome: "Zurück zur Startseite",
      impressum: {
        title: "Impressum",
        intro: "",
        sections: [
          {
            title: "Anbieter",
            body: [
              "L&J Wedding Planner",
              "Klosterstraße 81",
              "40211 Düsseldorf",
              "Deutschland"
            ]
          },
          {
            title: "Kontakt",
            body: ["E-Mail: ljweddingstudio@gmail.com", "Telefon: +49 176 45077022"]
          },
          {
            title: "Verantwortlich für den Inhalt",
            body: ["Eva Li und Lukas Cheng"]
          }
        ]
      },
      datenschutz: {
        title: "Datenschutz",
        intro:
          "Wir informieren Sie darüber, welche personenbezogenen Daten beim Besuch dieser Website und bei der Nutzung des Kontaktformulars verarbeitet werden.",
        sections: [
          {
            title: "Verantwortliche Stelle",
            body: [
              "L&J Wedding Planner",
              "Klosterstraße 81",
              "40211 Düsseldorf",
              "Deutschland",
              "E-Mail: ljweddingstudio@gmail.com",
              "Telefon: +49 176 45077022"
            ]
          },
          {
            title: "Kontaktformular",
            body: [
              "Wenn Sie das Kontaktformular nutzen, verarbeiten wir die von Ihnen eingegebenen Angaben, um Ihre Anfrage zu beantworten und eine mögliche Zusammenarbeit vorzubereiten."
            ]
          },
          {
            title: "E-Mail-Versand über Resend",
            body: [
              "Die Website nutzt Resend zum Versand der Kontaktanfragen per E-Mail. Dabei werden die Formularinhalte an den E-Mail-Dienstleister übermittelt."
            ]
          },
          {
            title: "Speicherdauer",
            body: [
              "Anfragen werden nur so lange gespeichert, wie es für Kommunikation, Angebotserstellung oder gesetzliche Pflichten erforderlich ist."
            ]
          },
          {
            title: "Ihre Rechte",
            body: [
              "Sie können Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung sowie Widerspruch verlangen, soweit die gesetzlichen Voraussetzungen erfüllt sind."
            ]
          }
        ]
      }
    }
  },
  zh: {
    meta: {
      title: "L&J Wedding Planner | 德国与欧洲高端婚礼策划",
      description:
        "面向德国及欧洲华人客户的高端婚礼策划，专注城堡婚礼、目的地婚礼与中德英多语言服务。"
    },
    nav: {
      brand: "L&J Wedding Planner",
      openMenu: "打开导航",
      closeMenu: "关闭导航",
      languageLabel: "选择语言",
      consultation: "预约咨询",
      items: [
        { id: "about", label: "品牌介绍" },
        { id: "services", label: "服务内容" },
        { id: "experiences", label: "特色体验" },
        { id: "process", label: "服务流程" },
        { id: "moments", label: "案例展示" },
        { id: "contact", label: "联系" }
      ]
    },
    hero: {
      imageAlt: "温暖光线中的欧洲高端婚礼场地",
      kicker: "为现代浪漫主义者定制婚礼",
      title: "德国与欧洲高端婚礼策划",
      subtitle:
        "为懂得生活美学的新人，打造优雅、从容、独一无二的欧洲婚礼体验。",
      primaryCta: "预约咨询",
      secondaryCta: "开启你们的婚礼旅程",
      note: "城堡婚礼、目的地婚礼与中德英多语言服务"
    },
    about: {
      eyebrow: "品牌介绍",
      title: "以从容的节奏、精确的执行和跨文化理解，完成一场真正属于你的欧洲婚礼。",
      paragraphs: [
        "L&J Wedding Planner 是位于德国的婚礼策划团队，服务希望在德国及欧洲举办高端婚礼的新人。",
        "我们理解中德文化差异，也熟悉欧洲场地与供应商沟通方式。从预算、流程、设计审美到婚礼日落地执行，我们帮助新人把复杂的筹备变得清晰、优雅、有掌控感。",
        "L&J Wedding Planner 由 Eva Li 与 Lukas Cheng 共同创立。我们长期生活和工作在德国，熟悉中德文化差异、欧洲婚礼场地沟通方式以及高端婚礼的执行细节。我们希望帮助新人在异国筹备婚礼时，不只是得到漂亮的方案，也获得清晰、安心和被理解的体验。"
      ],
      highlights: [
        "中德跨文化理解",
        "场地与供应商沟通",
        "预算、流程与宾客统筹",
        "婚礼设计与视觉审美"
      ],
      asideTitle: "为选择欧洲的新人而生。",
      asideText:
        "无论是城堡、酒庄、湖畔庄园，还是小型高端目的地婚礼，我们都将你的故事转化为自然、精致、值得回味的庆典。"
    },
    services: {
      eyebrow: "服务内容",
      title: "从全案策划到婚礼日执行，以国际化标准照顾每个细节。",
      items: [
        {
          title: "全案婚礼策划",
          label: "从灵感到落地",
          description:
            "从最初灵感到婚礼结束，全程协助预算、设计、供应商选择、流程规划与现场统筹。"
        },
        {
          title: "欧洲目的地婚礼",
          label: "跨城市与跨国家统筹",
          description:
            "为德国及欧洲多地婚礼提供旅行、宾客体验、当地协调与跨文化沟通支持。"
        },
        {
          title: "城堡婚礼",
          label: "历史场地与现代审美",
          description:
            "协助寻找、沟通并呈现适合高端婚礼的德国及欧洲城堡场地。"
        },
        {
          title: "婚礼日执行",
          label: "当天现场统筹",
          description:
            "适合已完成主要筹备的新人，由我们负责婚礼日前确认与当天现场执行。"
        },
        {
          title: "场地与供应商沟通",
          label: "德中英清晰协调",
          description:
            "以德语、中文、英语协调场地、餐饮、花艺、摄影摄像、音乐及其他供应商。"
        },
        {
          title: "中德英多语言婚礼服务",
          label: "照顾新人、家人与宾客",
          description:
            "为新人、家人、宾客与欧洲服务团队建立顺畅沟通，照顾文化细节与仪式表达。"
        }
      ]
    },
    experiences: {
      eyebrow: "特色体验",
      title: "欧洲场地、精致细节与属于你们的庆祝方式。",
      items: [
        {
          title: "德国城堡婚礼",
          description:
            "在历史建筑与现代审美之间，打造优雅而有仪式感的婚礼体验。"
        },
        {
          title: "欧洲庄园婚礼",
          description:
            "精选庄园、酒庄和私密度假场地，适合完整的婚礼周末。"
        },
        {
          title: "小型高端目的地婚礼",
          description:
            "更少的宾客、更高的体验密度，让每个片刻都从容而亲密。"
        },
        {
          title: "中德跨文化婚礼",
          description:
            "将中国、德国与国际婚礼元素自然融合，避免堆砌，保留温度。"
        },
        {
          title: "婚礼影像与视觉叙事",
          description:
            "将摄影、摄像、纸品与空间设计纳入统一的视觉故事。"
        }
      ]
    },
    process: {
      eyebrow: "服务流程",
      title: "清晰的流程，让复杂的婚礼筹备变得安定。",
      steps: [
        {
          title: "初步咨询",
          label: "了解需求与方向",
          description:
            "了解你们的期待、家庭结构、婚礼地点、宾客情况与初步预算。"
        },
        {
          title: "婚礼概念与预算",
          label: "建立风格与预算框架",
          description:
            "建立整体概念、预算框架、风格方向和后续决策逻辑。"
        },
        {
          title: "场地与供应商统筹",
          label: "筛选、沟通与协调",
          description:
            "筛选、沟通、比较并协调欧洲场地和供应商资源。"
        },
        {
          title: "婚礼设计与流程安排",
          label: "视觉与动线统一",
          description:
            "将视觉设计、仪式安排、宾客动线和技术细节统一到完整流程中。"
        },
        {
          title: "婚礼日执行",
          label: "现场落地与节奏把控",
          description:
            "婚礼当天由我们统筹现场，让你们真正享受每个瞬间。"
        }
      ]
    },
    portfolio: {
      eyebrow: "案例 / 瞬间",
      title: "欧洲婚礼灵感与真实瞬间。",
      intro:
        "从城堡仪式、庄园晚宴到目的地婚礼细节，呈现 L&J 对空间、光线与情绪的审美把控。",
      items: [
        {
          src: "/images/castle-ceremony.jpg",
          alt: "带有金色细节的城堡婚礼仪式",
          title: "城堡仪式",
          caption: "经典欧洲场景，以现代、温暖的方式呈现。"
        },
        {
          src: "/images/manor-dinner.jpg",
          alt: "欧洲庄园中的优雅晚宴",
          title: "庄园晚宴",
          caption: "烛光、餐桌与从容流动的晚宴节奏。"
        },
        {
          src: "/images/bridal-details.jpg",
          alt: "婚礼纸品与面料细节",
          title: "新娘细节",
          caption: "纸品、材质与细节共同讲述婚礼故事。"
        },
        {
          src: "/images/lakeside-vows.jpg",
          alt: "欧洲湖畔婚礼誓言",
          title: "湖畔誓言",
          caption: "亲密的小型目的地婚礼，留出更多真实情绪。"
        },
        {
          src: "/images/table-design.jpg",
          alt: "香槟色花艺餐桌设计",
          title: "餐桌设计",
          caption: "克制的色彩、细腻的材质与优雅动线。"
        },
        {
          src: "/images/visual-story.jpg",
          alt: "婚礼影像与视觉叙事",
          title: "视觉叙事",
          caption: "在策划早期就纳入影像叙事，让画面更完整。"
        }
      ]
    },
    testimonials: {
      eyebrow: "客户评价",
      title: "来自新人们的温柔反馈。",
      items: [
        {
          quote:
            "L&J 把我们的巴伐利亚城堡婚礼安排得非常从容。我们不需要一直担心细节，终于可以真正享受那一天。",
          author: "Y. & M.",
          meta: "德国巴伐利亚城堡婚礼"
        },
        {
          quote:
            "我们的家人分别使用中文、德语和英语。L&J 的沟通非常清晰，也很照顾长辈感受。",
          author: "L. & T.",
          meta: "法兰克福中德跨文化婚礼"
        },
        {
          quote:
            "从情绪板到宾客接驳，每个环节都被想得很细。最后的效果高级，但一点都不紧绷。",
          author: "J. & A.",
          meta: "托斯卡纳目的地婚礼"
        }
      ]
    },
    faq: {
      eyebrow: "常见问题",
      title: "常见问题",
      items: [
        {
          question: "是否服务德国以外的欧洲婚礼？",
          answer:
            "可以。我们服务德国及部分欧洲目的地婚礼，具体取决于地点、日期、场地条件与项目规模。"
        },
        {
          question: "是否可以提供中德英沟通？",
          answer:
            "可以。我们可协助新人、家人、场地和供应商进行中文、德语、英语沟通。"
        },
        {
          question: "是否可以只做婚礼日执行？",
          answer:
            "可以。如果主要筹备已经完成，我们可以接手最终确认、流程表和婚礼当天现场执行。"
        },
        {
          question: "是否可以协助寻找城堡或酒店场地？",
          answer:
            "可以。我们可协助进行场地筛选、沟通、看场安排、报价比较和合同前信息整理。"
        },
        {
          question: "是否可以结合摄影摄像服务？",
          answer:
            "可以。我们会根据整体风格推荐合适的摄影摄像团队，并协调影像时间线。"
        }
      ]
    },
    contact: {
      eyebrow: "联系咨询",
      title: "告诉我们你们正在期待的婚礼。",
      intro:
        "提交咨询后，我们通常会先了解婚礼日期、城市、人数、预算方向与服务需求，并在初步判断可行性后安排沟通。",
      submit: "发送咨询",
      submitting: "发送中",
      successTitle: "感谢你的咨询。",
      successText:
        "我们已经收到信息，会尽快以你偏好的语言与你联系。",
      errorTitle: "信息暂时无法发送。",
      errorText:
        "请检查填写内容，或稍后再试一次。",
      requiredNote: "带标记的字段为必填。",
      honeypot: "网站",
      fields: {
        name: { label: "姓名", placeholder: "你的姓名" },
        email: { label: "邮箱", placeholder: "name@example.com" },
        phone: { label: "电话 / WhatsApp", placeholder: "+49 ..." },
        weddingDate: { label: "婚礼日期", placeholder: "" },
        location: { label: "婚礼城市 / 场地", placeholder: "慕尼黑、城堡、酒店 ..." },
        guestCount: { label: "宾客人数", placeholder: "例如 60" },
        preferredLanguage: { label: "首选沟通语言", placeholder: "请选择" },
        message: {
          label: "留言",
          placeholder: "可以简单描述你们的婚礼想法、场地、宾客和最在意的部分。"
        },
        gdprConsent: {
          label:
            "我同意提交的信息被用于处理本次咨询。"
        }
      },
      languageOptions: [
        { value: "de", label: "Deutsch" },
        { value: "zh", label: "中文" },
        { value: "en", label: "English" }
      ]
    },
    footer: {
      line: "服务德国、欧洲及中德跨文化高端婚礼。",
      impressum: "网站法律信息",
      datenschutz: "隐私政策",
      rights: "保留所有权利。"
    },
    legal: {
      backHome: "返回首页",
      impressum: {
        title: "网站法律信息",
        intro: "",
        sections: [
          {
            title: "服务提供方",
            body: [
              "L&J Wedding Planner",
              "Klosterstraße 81",
              "40211 Düsseldorf",
              "德国"
            ]
          },
          {
            title: "联系方式",
            body: ["邮箱：ljweddingstudio@gmail.com", "电话：+49 176 45077022"]
          },
          {
            title: "内容负责人",
            body: ["Eva Li 和 Lukas Cheng"]
          }
        ]
      },
      datenschutz: {
        title: "隐私政策",
        intro:
          "我们在此说明访问本网站及使用联系表单时，相关个人信息会如何被处理。",
        sections: [
          {
            title: "责任方",
            body: [
              "L&J Wedding Planner",
              "Klosterstraße 81",
              "40211 Düsseldorf",
              "德国",
              "邮箱：ljweddingstudio@gmail.com",
              "电话：+49 176 45077022"
            ]
          },
          {
            title: "联系表单",
            body: [
              "当你使用联系表单时，我们会处理你填写的信息，用于回复咨询和准备后续沟通。"
            ]
          },
          {
            title: "通过 Resend 发送邮件",
            body: [
              "网站使用 Resend 将联系表单内容发送至指定邮箱。提交表单时，相关内容会传递给该邮件服务。"
            ]
          },
          {
            title: "保存期限",
            body: [
              "咨询信息仅在沟通、报价准备或法律义务所需期间保存。"
            ]
          },
          {
            title: "你的权利",
            body: [
              "在符合法律条件的情况下，你可以请求查询、更正、删除、限制处理或提出反对。"
            ]
          }
        ]
      }
    }
  },
  en: {
    meta: {
      title: "L&J Wedding Planner | Luxury Wedding Planning in Germany & Europe",
      description:
        "Elegant wedding planning for castle, destination and multilingual weddings across Germany and Europe."
    },
    nav: {
      brand: "L&J Wedding Planner",
      openMenu: "Open navigation",
      closeMenu: "Close navigation",
      languageLabel: "Choose language",
      consultation: "Consultation",
      items: [
        { id: "about", label: "About" },
        { id: "services", label: "Services" },
        { id: "experiences", label: "Experiences" },
        { id: "process", label: "Process" },
        { id: "moments", label: "Moments" },
        { id: "contact", label: "Contact" }
      ]
    },
    hero: {
      imageAlt: "Elegant European wedding venue in warm light",
      kicker: "Bespoke weddings for modern romantics",
      title: "Luxury Wedding Planning in Germany & Europe",
      subtitle:
        "For couples with a refined sense of beauty, we create elegant, calm and deeply personal wedding experiences across Europe.",
      primaryCta: "Book a Consultation",
      secondaryCta: "Start Your Wedding Journey",
      note: "Castle weddings, destination celebrations and multilingual planning"
    },
    about: {
      eyebrow: "About L&J",
      title: "Calm precision, cultural fluency and an eye for enduring beauty.",
      paragraphs: [
        "L&J Wedding Planner is a Germany-based planning studio for discerning couples who want a European wedding with personal meaning, style and clarity.",
        "We combine Chinese-German cultural understanding with structured planning, confident venue and vendor communication, refined design direction and reliable on-site execution.",
        "L&J Wedding Planner was founded by Eva Li and Lukas Cheng. Having lived and worked in Germany for many years, we understand Chinese-German cultural differences, the communication style of European wedding venues and the execution details behind high-end celebrations. We want couples planning from abroad to receive more than a beautiful concept: clear guidance, a sense of calm and the feeling of being truly understood."
      ],
      highlights: [
        "Chinese-German cultural fluency",
        "Venue and vendor communication",
        "Budget, timeline and guest coordination",
        "Design concept and aesthetic direction"
      ],
      asideTitle: "For couples who choose Europe with intention.",
      asideText:
        "From castles and vineyards to lakeside villas and intimate fine-art elopements, we translate your story into a celebration that feels effortless and memorable."
    },
    services: {
      eyebrow: "Services",
      title: "Planning, design and execution with an international standard.",
      items: [
        {
          title: "Full Wedding Planning",
          label: "Complete planning",
          description:
            "Complete support from first concept to the final guest moment, including budget, design, vendor sourcing and timeline management."
        },
        {
          title: "Destination Wedding",
          label: "European celebrations",
          description:
            "Wedding planning across Germany and Europe, aligned with travel, guest experience, local logistics and cultural expectations."
        },
        {
          title: "Castle Wedding",
          label: "Historic venues",
          description:
            "Thoughtful sourcing, communication and styling for castle venues with a sense of history, atmosphere and modern elegance."
        },
        {
          title: "Wedding Day Coordination",
          label: "Calm on-site leadership",
          description:
            "Professional day-of coordination for couples who have planned the essentials and want calm leadership on the wedding day."
        },
        {
          title: "Vendor & Venue Communication",
          label: "Clear coordination",
          description:
            "Clear communication with venues, caterers, florists, photo, video, music and other partners in German, Chinese and English."
        },
        {
          title: "Bilingual Wedding Service",
          label: "German, Chinese and English",
          description:
            "Multilingual care for couples, families and guests, so cultural details are understood and gracefully delivered."
        }
      ]
    },
    experiences: {
      eyebrow: "Signature Experiences",
      title: "European settings, carefully curated details and a celebration that feels like you.",
      items: [
        {
          title: "German Castle Wedding",
          description:
            "A romantic architectural setting with refined hosting, candlelit atmosphere and precise flow."
        },
        {
          title: "European Manor Wedding",
          description:
            "Private estates, vineyards and elegant hideaways for an intimate wedding weekend."
        },
        {
          title: "Small High-End Destination Wedding",
          description:
            "A considered guest list, richer experience and more room for meaningful moments."
        },
        {
          title: "Cross-Cultural Wedding",
          description:
            "Chinese, German and international traditions are blended with sensitivity and restraint."
        },
        {
          title: "Wedding Visual Storytelling",
          description:
            "Photo, film, stationery and spatial design follow one coherent visual narrative."
        }
      ]
    },
    process: {
      eyebrow: "Process",
      title: "A clear process brings calm to complex decisions.",
      steps: [
        {
          title: "Initial Consultation",
          label: "Understanding the brief",
          description:
            "We understand your wishes, priorities, family context, travel needs and first budget direction."
        },
        {
          title: "Concept & Budget",
          label: "Creative and financial clarity",
          description:
            "Your vision becomes a cohesive concept with realistic budget, style direction and decision logic."
        },
        {
          title: "Venue & Vendor Coordination",
          label: "Research and alignment",
          description:
            "We research, compare, negotiate and coordinate venues and wedding partners across Europe."
        },
        {
          title: "Design & Timeline",
          label: "Aesthetic and event flow",
          description:
            "Design, event flow, guest movement and technical details are shaped into one calm experience."
        },
        {
          title: "Wedding Day Execution",
          label: "On-site implementation",
          description:
            "On the wedding day we bring every thread together, so you can stay present and enjoy the moment."
        }
      ]
    },
    portfolio: {
      eyebrow: "Portfolio / Moments",
      title: "European wedding moments with quiet elegance.",
      intro:
        "Castle ceremonies, elegant dinners and destination wedding details reflect L&J's warm, international aesthetic.",
      items: [
        {
          src: "/images/castle-ceremony.jpg",
          alt: "Castle wedding ceremony with golden details",
          title: "Castle Ceremony",
          caption: "A classic European setting, styled with modern warmth."
        },
        {
          src: "/images/manor-dinner.jpg",
          alt: "Elegant dinner in a European manor house",
          title: "Manor Dinner",
          caption: "Fine dining, candlelight and a flow that feels effortless."
        },
        {
          src: "/images/bridal-details.jpg",
          alt: "Bridal stationery and textile details",
          title: "Bridal Details",
          caption: "Stationery, texture and small gestures carry the story of the day."
        },
        {
          src: "/images/lakeside-vows.jpg",
          alt: "Lakeside wedding vows in Europe",
          title: "Lakeside Vows",
          caption: "Intimate destination weddings with space for genuine emotion."
        },
        {
          src: "/images/table-design.jpg",
          alt: "Champagne-toned floral table design",
          title: "Table Design",
          caption: "Restrained color, fine materials and a graceful guest flow."
        },
        {
          src: "/images/visual-story.jpg",
          alt: "Wedding film and visual storytelling",
          title: "Visual Story",
          caption: "Photo and film become part of the aesthetic plan from the beginning."
        }
      ]
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "Words from couples who wanted to feel fully held.",
      items: [
        {
          quote:
            "L&J guided our Bavarian castle wedding with such calm that we could truly live the day. Every decision felt clear and personal.",
          author: "Y. & M.",
          meta: "Castle wedding, Bavaria"
        },
        {
          quote:
            "Our families speak Chinese, German and English. The communication was warm, precise and incredibly reassuring.",
          author: "L. & T.",
          meta: "Cross-cultural wedding, Frankfurt"
        },
        {
          quote:
            "From the first moodboard to the last shuttle, everything was carefully considered. The result was elegant, never stiff.",
          author: "J. & A.",
          meta: "Destination wedding, Tuscany"
        }
      ]
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      items: [
        {
          question: "Do you plan weddings outside Germany?",
          answer:
            "Yes. We support weddings in Germany and selected European destinations, depending on location, season and project scope."
        },
        {
          question: "Can you communicate in Chinese, German and English?",
          answer:
            "Yes. We support couples, families, venues and vendors in Chinese, German and English."
        },
        {
          question: "Can you provide wedding day coordination only?",
          answer:
            "Yes. If the essential planning is already complete, we can take over final coordination and on-site leadership."
        },
        {
          question: "Can you help find castle or hotel venues?",
          answer:
            "Yes. We assist with research, shortlisting, communication, viewings and offer comparison."
        },
        {
          question: "Can photography and videography be integrated?",
          answer:
            "Yes. We align photo, film and visual flow early in the planning and recommend fitting creative partners."
        }
      ]
    },
    contact: {
      eyebrow: "Contact",
      title: "Tell us about the wedding you are imagining.",
      intro:
        "After you submit an inquiry, we usually review your wedding date, city, guest count, budget direction and service needs first. Once the initial details feel feasible, we will arrange the next conversation with you.",
      submit: "Send Inquiry",
      submitting: "Sending",
      successTitle: "Thank you for your inquiry.",
      successText:
        "Your message has arrived. We will get back to you personally soon.",
      errorTitle: "The message could not be sent.",
      errorText:
        "Please check your details or try again later.",
      requiredNote: "Required fields are marked.",
      honeypot: "Website",
      fields: {
        name: { label: "Name", placeholder: "Your name" },
        email: { label: "Email", placeholder: "name@example.com" },
        phone: { label: "Phone / WhatsApp", placeholder: "+49 ..." },
        weddingDate: { label: "Wedding Date", placeholder: "" },
        location: { label: "Wedding Location", placeholder: "Munich, castle, hotel ..." },
        guestCount: { label: "Guest Count", placeholder: "e.g. 60" },
        preferredLanguage: { label: "Preferred Language", placeholder: "Please choose" },
        message: {
          label: "Message",
          placeholder: "Tell us about your vision, location, guests and priorities."
        },
        gdprConsent: {
          label:
            "I agree that my details may be processed to respond to this inquiry."
        }
      },
      languageOptions: [
        { value: "de", label: "Deutsch" },
        { value: "zh", label: "中文" },
        { value: "en", label: "English" }
      ]
    },
    footer: {
      line: "Luxury wedding planning for Germany, Europe and cross-cultural celebrations.",
      impressum: "Legal Notice",
      datenschutz: "Privacy Policy",
      rights: "All rights reserved."
    },
    legal: {
      backHome: "Back to home",
      impressum: {
        title: "Legal Notice",
        intro: "",
        sections: [
          {
            title: "Provider",
            body: [
              "L&J Wedding Planner",
              "Klosterstraße 81",
              "40211 Düsseldorf",
              "Germany"
            ]
          },
          {
            title: "Contact",
            body: ["Email: ljweddingstudio@gmail.com", "Phone: +49 176 45077022"]
          },
          {
            title: "Responsible for content",
            body: ["Eva Li and Lukas Cheng"]
          }
        ]
      },
      datenschutz: {
        title: "Privacy Policy",
        intro:
          "We explain how personal data is processed when you visit this website or use the contact form.",
        sections: [
          {
            title: "Controller",
            body: [
              "L&J Wedding Planner",
              "Klosterstraße 81",
              "40211 Düsseldorf",
              "Germany",
              "Email: ljweddingstudio@gmail.com",
              "Phone: +49 176 45077022"
            ]
          },
          {
            title: "Contact form",
            body: [
              "When you use the contact form, we process the details you provide to respond to your inquiry and prepare potential collaboration."
            ]
          },
          {
            title: "Email delivery via Resend",
            body: [
              "The website uses Resend to send contact inquiries by email. The form content is transmitted to the email service provider."
            ]
          },
          {
            title: "Retention",
            body: [
              "Inquiries are stored only as long as needed for communication, proposal preparation or legal obligations."
            ]
          },
          {
            title: "Your rights",
            body: [
              "You may request access, correction, deletion, restriction of processing and objection where the legal requirements are met."
            ]
          }
        ]
      }
    }
  }
} as const;

export type Dictionary = (typeof dictionaries)[Locale];

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
