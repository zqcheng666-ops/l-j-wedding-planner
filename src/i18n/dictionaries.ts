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
        { id: "inspiration", label: "Inspiration" },
        { id: "services", label: "Arbeitsweise" },
        { id: "moments", label: "Ausgewählte Hochzeiten" },
        { id: "contact", label: "Kontakt" }
      ]
    },
    hero: {
      imageAlt: "Elegante europäische Hochzeitslocation mit warmem Licht",
      kicker: "Maßgeschneiderte Hochzeiten für moderne Romantiker",
      title: "Ruhige, hochwertige Hochzeitsplanung in Deutschland & Europa",
      subtitle:
        "Für chinesischsprachige und internationale Paare planen wir Schlosshochzeiten, Destination Weddings und deutsch-chinesisch-englische Hochzeitskoordination. Von Location-Kommunikation und Budgetplanung bis zur Umsetzung am Hochzeitstag machen wir europäische Hochzeitsplanung klar, elegant und vertrauensvoll.",
      primaryCta: "Beratung buchen",
      secondaryCta: "Arbeitsweise entdecken",
      note: "Deutsche lokale Ressourcen / Europäische Locations / Mehrsprachige Umsetzung"
    },
    about: {
      eyebrow: "Über L&J",
      title: "Ein deutsches Planungsstudio für Paare, die Europa bewusst wählen.",
      paragraphs: [
        "L&J Wedding Planner ist ein hochwertiges Hochzeitsplanungsstudio in Deutschland, spezialisiert auf Destination Weddings, Schlosshochzeiten und interkulturelle Feiern für chinesischsprachige und internationale Paare.",
        "Gegründet von Eva Li und Lukas Cheng, verbinden wir deutsche lokale Ressourcen, chinesische Kommunikation, deutsch-chinesisch-englische Koordination sowie europäische Location- und Dienstleistererfahrung mit einem klaren Sinn für Ästhetik und Umsetzung."
      ],
      highlights: [
        "Gründergeführt von Eva Li & Lukas Cheng",
        "Deutsch, Chinesisch und Englisch",
        "Europäische Locations & Dienstleister",
        "Ästhetik und Umsetzung aus einer Hand"
      ],
      asideTitle: "Aus dem Wunsch nach mehr Ruhe entstanden.",
      asideText:
        "Wir möchten Paaren, die aus der Ferne planen, nicht nur schöne Ideen geben, sondern Orientierung, klare Kommunikation und das Gefühl, verstanden zu werden."
    },
    services: {
      eyebrow: "Unsere Arbeitsweise",
      title: "Von der ersten Idee bis zum Hochzeitstag begleiten wir mit Struktur, Ästhetik und Ruhe.",
      intro:
        "Unsere Arbeit bündelt Planung, Erlebnisgestaltung und Ablaufsteuerung in einem klaren Prozess, damit Sie verstehen, wie aus einer Idee eine umsetzbare europäische Hochzeit wird.",
      imageAlt: "Hochzeitsplanung mit Moodboard, Papeterie, Blumen und europäischen Locationbildern",
      imageCaption: "Vom Konzept bis zum Hochzeitstag",
      offeringsLabel: "A. Was wir anbieten",
      experiencesLabel: "B. Welche Erlebnisse wir gestalten",
      processLabel: "C. Wie wir vorgehen",
      items: [
        {
          title: "Komplette Hochzeitsplanung",
          label: "Ganzheitliche Begleitung",
          description:
            "Ganzheitliche Begleitung von der ersten Idee bis zum letzten Gastmoment: Konzept, Budget, Design, Dienstleisterauswahl, Ablaufplanung, Gästemanagement und verlässliche Umsetzung vor Ort."
        },
        {
          title: "Destination Wedding in Europa",
          label: "Feiern an besonderen Orten",
          description:
            "Planung für Hochzeiten in Deutschland und Europa, einschließlich Schloss-, Gutshof- und Hotelsettings, Reiseablauf, Gästeerlebnis, lokaler Logistik und kultureller Erwartungen."
        },
        {
          title: "Hochzeitstag & mehrsprachige Koordination",
          label: "Deutsch, Chinesisch und Englisch",
          description:
            "Souveräne Tagesleitung für bereits geplante Hochzeiten sowie klare Kommunikation mit Locations, Gastronomie, Floristik, Foto, Video, Musik, Familien und Gästen."
        }
      ]
    },
    experiences: {
      eyebrow: "Besondere Erlebnisse",
      title: "Erlebnisse, die wir für Ihre Hochzeit möglich machen.",
      items: [
        {
          title: "Deutsche Schlosshochzeit",
          description:
            "Eine romantische Kulisse mit historischer Architektur, feiner Tischkultur und präzisem Ablauf."
        },
        {
          title: "Kirchliche Trauung",
          description:
            "Feierliche Zeremonien mit ruhiger Dramaturgie, Familiengefühl und sensibler Abstimmung vor Ort."
        },
        {
          title: "Kleine hochwertige Destination Wedding",
          description:
            "Bewusst reduzierte Gästelisten, dafür mehr Zeit, Atmosphäre und persönliche Erlebnisse."
        },
        {
          title: "Europäisches Dinner",
          description:
            "Lange Tafeln, Kerzenlicht, Floristik, Menüfolge und ein Gästefluss, der sich natürlich anfühlt."
        },
        {
          title: "Champagnerempfang",
          description:
            "Leichte, elegante Empfangsmomente zwischen Zeremonie, Fotos und Dinner."
        },
        {
          title: "Gästeempfang",
          description:
            "Ankunft, Transfers, Willkommensmomente und Orientierung für internationale Gäste."
        },
        {
          title: "Interkulturelles Ritualdesign",
          description:
            "Chinesische, deutsche und internationale Elemente werden sensibel verbunden, ohne überladen zu wirken."
        },
        {
          title: "Reise- & Bildgeschichte",
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
      eyebrow: "Stilinspiration",
      title: "Die Atmosphäre, die wir lieben und gestalten.",
      intro:
        "Dieser Bereich zeigt unsere bevorzugte ästhetische Richtung: zurückhaltend, elegant, natürlich und geprägt von europäischen Orten.",
      items: [
        {
          src: "/images/inspiration-castle-natural.png",
          alt: "Schlosszeremonie mit goldenen Details",
          title: "Schlosshochzeit",
          caption: "Natürliche Grüntöne und architektonische Tiefe statt klassischer Blütenfülle."
        },
        {
          src: "/images/inspiration-church-minimal.png",
          alt: "Feierliche europäische Zeremonie mit warmem Licht",
          title: "Kirchliche Trauung",
          caption: "Wenige Elemente, viel Raum: eine stille Interpretation von weniger ist mehr."
        },
        {
          src: "/images/inspiration-lakeside-private-vows.png",
          alt: "Freie Trauung am europäischen See",
          title: "Gelübde am See",
          caption: "Ein privater Moment nur für das Paar, ruhig und nah am Wasser."
        },
        {
          src: "/images/manor-dinner.jpg",
          alt: "Elegantes Dinner in einem europäischen Gutshaus",
          title: "Europäische lange Tafel",
          caption: "Gehobene Tischkultur, Kerzenlicht und ein Ablauf, der sich mühelos anfühlt."
        },
        {
          src: "/images/table-design.jpg",
          alt: "Champagnerfarbene Tischgestaltung mit Blumen",
          title: "Florale Details",
          caption: "Reduzierte Farben, feine Materialien und eine ruhige Dramaturgie."
        },
        {
          src: "/images/planning-editorial.png",
          alt: "Brautdetails mit Papeterie und Stoffstrukturen",
          title: "Papeterie & Geschenke",
          caption: "Papeterie, Stoffe und kleine Gesten erzählen die Geschichte des Tages."
        }
      ]
    },
    selectedWeddings: {
      eyebrow: "Selected Weddings",
      title: "Ausgewählte Hochzeiten mit klarer Umsetzung.",
      intro:
        "Jedes Format zeigt Ort, Gästezahl, Leistungsumfang, Hochzeitstyp und Umsetzungsfokus, damit sichtbar wird, wie Planung vor Ort wirklich greifbar wird.",
      labels: {
        guests: "Beispielgröße",
        service: "Leistung",
        type: "Hochzeitstyp",
        highlight: "Umsetzungsfokus"
      },
      items: [
        {
          src: "/images/case-private-castle-stuttgart.png",
          alt: "Schloss Hochzeit in Deutschland",
          title: "Private Schlosshochzeit bei Stuttgart",
          location: "Region Stuttgart, Deutschland",
          guests: "ca. 60 Personen",
          service: "Planung / Location-Kommunikation / Dienstleisterkoordination / Hochzeitstag",
          type: "Schlosshochzeit",
          highlight: "Zeremonie im Schloss, Dinner-Flow, Gästeempfang und deutsch-chinesisch-englische Kommunikation."
        },
        {
          src: "/images/case-lakeside-bavaria.png",
          alt: "Kleine europäische Reisehochzeit am See",
          title: "Intime Hochzeit am See in Bayern",
          location: "Bayern, Deutschland",
          guests: "ca. 30 Personen",
          service: "Destination Wedding Planung / Reiseablauf / visuelle Regie",
          type: "Kleine hochwertige Destination Wedding",
          highlight: "Intime Zeremonie, Gästereise, Fotomomente und ruhige Tagesdramaturgie."
        },
        {
          src: "/images/case-frankfurt-dinner.png",
          alt: "Europäisches Hochzeitsdinner in einem Gutshaus",
          title: "Deutsch-Chinesische Hochzeit in Frankfurt",
          location: "Frankfurt am Main",
          guests: "ca. 80 Personen",
          service: "Dinner-Konzept / Dienstleisterabstimmung / Ablaufplanung",
          type: "Interkulturelle Hochzeit & Dinner",
          highlight: "Lange Tafel, Floristik, Kerzenlicht, Empfangssituation und präzise Serviceabläufe."
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
        budgetRange: { label: "Budgetrahmen", placeholder: "Bitte wählen" },
        serviceNeed: { label: "Gewünschte Leistung", placeholder: "Bitte wählen" },
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
      ],
      budgetOptions: [
        { value: "not-sure", label: "Noch nicht sicher" },
        { value: "under-20000", label: "Unter 20.000 €" },
        { value: "20000-50000", label: "20.000–50.000 €" },
        { value: "50000-100000", label: "50.000–100.000 €" },
        { value: "over-100000", label: "Über 100.000 €" }
      ],
      serviceOptions: [
        { value: "full-planning", label: "Komplette Hochzeitsplanung" },
        { value: "destination-wedding", label: "Destination Wedding in Europa" },
        { value: "castle-wedding", label: "Schlosshochzeit" },
        { value: "day-coordination", label: "Koordination am Hochzeitstag" },
        { value: "venue-vendor", label: "Location- / Dienstleisterkommunikation" },
        { value: "not-sure", label: "Noch nicht sicher, erst Beratung gewünscht" }
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
        { id: "inspiration", label: "风格灵感" },
        { id: "services", label: "服务方式" },
        { id: "moments", label: "案例展示" },
        { id: "contact", label: "联系" }
      ]
    },
    hero: {
      imageAlt: "温暖光线中的欧洲高端婚礼场地",
      kicker: "为现代浪漫主义者定制婚礼",
      title: "在德国与欧洲，策划一场从容而高级的婚礼",
      subtitle:
        "为中文及国际新人提供城堡婚礼、目的地婚礼与中德英多语言婚礼统筹。从场地沟通、预算规划到婚礼日执行，让复杂的欧洲婚礼筹备变得清晰、优雅、安心。",
      primaryCta: "预约咨询",
      secondaryCta: "了解服务方式",
      note: "中文新人 / 国际新人 · 德国本地资源 · 欧洲场地执行"
    },
    about: {
      eyebrow: "品牌介绍",
      title: "为中文及国际新人，统筹德国与欧洲婚礼。",
      paragraphs: [
        "L&J Wedding Planner 是一家位于德国的高端婚礼策划工作室，专注于为中文及国际新人提供德国与欧洲目的地婚礼、城堡婚礼和跨文化婚礼统筹服务。",
        "工作室由 Eva Li 与 Lukas Cheng 共同创立。我们长期生活和工作在德国，熟悉德国本地资源、欧洲场地与供应商对接方式，也理解中文新人在异国筹备婚礼时最需要的清晰沟通、审美判断与落地执行。"
      ],
      highlights: [
        "Eva Li 与 Lukas Cheng 创始人亲自参与",
        "中文沟通优势，中德英多语言协调",
        "德国本地资源与欧洲场地对接",
        "审美设计与现场执行双重能力"
      ],
      asideTitle: "创立动机",
      asideText:
        "我们希望帮助新人在异国筹备婚礼时，不只是得到漂亮的方案，也获得清晰、安心和被理解的体验。"
    },
    services: {
      eyebrow: "我们的服务方式",
      title: "从想法到婚礼日，我们如何陪你完成。",
      intro:
        "我们把服务内容、婚礼体验与推进流程整合在一个清晰的服务逻辑里，让你知道我们到底如何帮助一场欧洲婚礼从概念走向落地。",
      imageAlt: "包含情绪板、婚礼纸品、花艺和欧洲场地照片的婚礼策划桌面",
      imageCaption: "从概念到婚礼日",
      offeringsLabel: "A. 我们提供什么",
      experiencesLabel: "B. 我们能创造什么体验",
      processLabel: "C. 我们如何推进流程",
      items: [
        {
          title: "全案婚礼策划",
          label: "从灵感到落地",
          description:
            "从最初灵感到婚礼结束，全程协助婚礼概念、预算规划、设计审美、供应商选择、流程安排、宾客统筹与现场落地。"
        },
        {
          title: "欧洲目的地婚礼",
          label: "跨城市与跨国家统筹",
          description:
            "为德国及欧洲多地婚礼提供完整支持，涵盖城堡、庄园、酒店等场地选择，旅行安排、宾客体验、当地协调与跨文化沟通。"
        },
        {
          title: "婚礼日执行与多语言统筹",
          label: "中德英清晰沟通",
          description:
            "适合已完成主要筹备的新人，由我们负责婚礼日前确认、当天现场执行，以及场地、餐饮、花艺、摄影摄像、音乐、家人与宾客之间的中德英沟通。"
        }
      ]
    },
    experiences: {
      eyebrow: "特色体验",
      title: "我们可以为婚礼创造的体验。",
      items: [
        {
          title: "德国城堡婚礼",
          description:
            "在历史建筑与现代审美之间，打造优雅而有仪式感的婚礼体验。"
        },
        {
          title: "教堂婚礼",
          description:
            "在庄重的仪式感与亲密的家庭氛围之间，协调场地、流程与宾客感受。"
        },
        {
          title: "小型高端目的地婚礼",
          description:
            "更少的宾客、更高的体验密度，让每个片刻都从容而亲密。"
        },
        {
          title: "欧式长桌晚宴",
          description:
            "将餐桌设计、灯光、花艺、菜单节奏与宾客动线整合成完整晚宴体验。"
        },
        {
          title: "香槟酒会",
          description:
            "为仪式后、晚宴前或欢迎环节设计轻松而精致的交流时刻。"
        },
        {
          title: "宾客接待",
          description:
            "统筹抵达、接驳、欢迎信息与现场指引，让异地宾客更安心。"
        },
        {
          title: "跨文化仪式设计",
          description:
            "将中国、德国与国际婚礼元素自然融合，避免堆砌，保留温度。"
        },
        {
          title: "旅拍与影像视觉叙事",
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
      eyebrow: "风格灵感",
      title: "我们偏好的婚礼美学方向与设计氛围。",
      intro:
        "呈现我们喜欢并擅长打造的婚礼氛围：克制、优雅、自然、有欧洲场地感。",
      items: [
        {
          src: "/images/inspiration-castle-natural.png",
          alt: "带有金色细节的城堡婚礼仪式",
          title: "城堡婚礼",
          caption: "用自然绿植与建筑层次替代繁复花量，呈现更松弛的城堡仪式。"
        },
        {
          src: "/images/inspiration-church-minimal.png",
          alt: "温暖光线中的欧洲仪式空间",
          title: "教堂婚礼",
          caption: "少即是多，用留白、单枝花材与烛光体现安静的仪式美。"
        },
        {
          src: "/images/inspiration-lakeside-private-vows.png",
          alt: "欧洲湖畔婚礼誓言",
          title: "湖畔誓言",
          caption: "没有宾客喧闹，只有新人彼此交换誓言的私密时刻。"
        },
        {
          src: "/images/manor-dinner.jpg",
          alt: "欧洲庄园中的优雅晚宴",
          title: "欧式长桌晚宴",
          caption: "烛光、餐桌与从容流动的晚宴节奏。"
        },
        {
          src: "/images/table-design.jpg",
          alt: "香槟色花艺餐桌设计",
          title: "花艺设计细节",
          caption: "克制的色彩、细腻的材质与优雅动线。"
        },
        {
          src: "/images/planning-editorial.png",
          alt: "婚礼纸品、礼物与面料细节",
          title: "纸品与礼物细节",
          caption: "纸品、材质与细节共同讲述婚礼故事。"
        }
      ]
    },
    selectedWeddings: {
      eyebrow: "真实案例 / Selected Weddings",
      title: "比漂亮图片更重要的是完整执行。",
      intro:
        "案例板块以更信息化的方式呈现地点、人数、服务范围、婚礼类型与执行亮点，让客户看到一场婚礼背后的真实统筹能力。",
      labels: {
        guests: "示例规模",
        service: "服务内容",
        type: "婚礼类型",
        highlight: "执行亮点"
      },
      items: [
        {
          src: "/images/case-private-castle-stuttgart.png",
          alt: "德国城堡婚礼案例",
          title: "Private Castle Wedding near Stuttgart",
          location: "斯图加特周边私人城堡场地",
          guests: "约 60 人",
          service: "婚礼策划 / 场地沟通 / 供应商协调 / 婚礼日执行",
          type: "城堡婚礼",
          highlight: "城堡仪式、晚宴动线、宾客接待、中德英多语言沟通。"
        },
        {
          src: "/images/case-lakeside-bavaria.png",
          alt: "欧洲湖畔目的地婚礼案例",
          title: "Intimate Lakeside Wedding in Bavaria",
          location: "德国巴伐利亚湖区",
          guests: "约 30 人",
          service: "目的地婚礼策划 / 旅行动线 / 视觉统筹",
          type: "小型高端目的地婚礼",
          highlight: "亲密仪式、宾客旅行体验、旅拍时间线与自然情绪设计。"
        },
        {
          src: "/images/case-frankfurt-dinner.png",
          alt: "欧式庄园晚宴案例",
          title: "Chinese-German Wedding in Frankfurt",
          location: "德国法兰克福",
          guests: "约 80 人",
          service: "晚宴设计 / 供应商协调 / 婚礼日流程统筹",
          type: "中德跨文化婚礼与晚宴",
          highlight: "长桌布置、花艺烛光、迎宾酒会、餐饮节奏与现场执行。"
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
        budgetRange: { label: "预算范围", placeholder: "请选择" },
        serviceNeed: { label: "服务需求", placeholder: "请选择" },
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
      ],
      budgetOptions: [
        { value: "not-sure", label: "还不确定" },
        { value: "under-20000", label: "20,000 € 以下" },
        { value: "20000-50000", label: "20,000–50,000 €" },
        { value: "50000-100000", label: "50,000–100,000 €" },
        { value: "over-100000", label: "100,000 € 以上" }
      ],
      serviceOptions: [
        { value: "full-planning", label: "全案婚礼策划" },
        { value: "destination-wedding", label: "欧洲目的地婚礼" },
        { value: "castle-wedding", label: "城堡婚礼" },
        { value: "day-coordination", label: "婚礼日执行" },
        { value: "venue-vendor", label: "场地 / 供应商沟通" },
        { value: "not-sure", label: "还不确定，希望先咨询" }
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
      title: "L&J Wedding Planner | Calm, Refined Wedding Planning Across Germany & Europe",
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
        { id: "inspiration", label: "Inspiration" },
        { id: "services", label: "How We Work" },
        { id: "moments", label: "Weddings" },
        { id: "contact", label: "Contact" }
      ]
    },
    hero: {
      imageAlt: "Elegant European wedding venue in warm light",
      kicker: "Bespoke weddings for modern romantics",
      title: "Calm, Refined Wedding Planning Across Germany & Europe",
      subtitle:
        "For Chinese-speaking and international couples, we plan castle weddings, destination celebrations and German-Chinese-English wedding coordination. From venue communication and budget planning to wedding day execution, we make complex European weddings feel clear, elegant and reassuring.",
      primaryCta: "Book a Consultation",
      secondaryCta: "Explore How We Work",
      note: "Chinese-speaking couples / international families · German resources · European venue execution"
    },
    about: {
      eyebrow: "About L&J",
      title: "A Germany-based planning studio for couples choosing Europe with intention.",
      paragraphs: [
        "L&J Wedding Planner is a high-end wedding planning studio based in Germany, specializing in destination weddings, castle weddings and cross-cultural celebrations for Chinese-speaking and international couples.",
        "Founded by Eva Li and Lukas Cheng, we combine German local resources, Chinese communication, German-Chinese-English coordination and European venue and vendor experience with both aesthetic direction and precise execution."
      ],
      highlights: [
        "Founder-led by Eva Li & Lukas Cheng",
        "Chinese, German and English coordination",
        "German resources and European venue access",
        "Aesthetic direction and execution ability"
      ],
      asideTitle: "Founded to make planning feel calmer.",
      asideText:
        "We want couples planning from abroad to receive more than a beautiful concept: clear guidance, reassuring communication and the feeling of being truly understood."
    },
    services: {
      eyebrow: "How We Work",
      title: "From first idea to wedding day, this is how we help you bring it to life.",
      intro:
        "We bring service scope, wedding experience and planning process into one clear structure, so you can understand how a European wedding becomes both beautiful and executable.",
      imageAlt: "Wedding planning table with moodboard, stationery, florals and European venue images",
      imageCaption: "From concept to wedding day",
      offeringsLabel: "A. What we provide",
      experiencesLabel: "B. What we can create",
      processLabel: "C. How we move forward",
      items: [
        {
          title: "Full Wedding Planning",
          label: "Complete planning",
          description:
            "Complete support from first concept to the final guest moment, including concept development, budget, design direction, vendor sourcing, timeline planning, guest coordination and on-site execution."
        },
        {
          title: "Destination Wedding",
          label: "European celebrations",
          description:
            "Wedding planning across Germany and Europe, including castle, manor and hotel settings, travel flow, guest experience, local logistics and cultural expectations."
        },
        {
          title: "Wedding Day & Multilingual Coordination",
          label: "German, Chinese and English",
          description:
            "Calm day-of leadership for couples who have already planned the essentials, with clear coordination between venues, catering, florals, photo, video, music, families and guests."
        }
      ]
    },
    experiences: {
      eyebrow: "Signature Experiences",
      title: "Experiences we can shape for your wedding.",
      items: [
        {
          title: "German Castle Wedding",
          description:
            "A romantic architectural setting with refined hosting, candlelit atmosphere and precise flow."
        },
        {
          title: "Church Ceremony",
          description:
            "Ceremonies with dignity, intimacy, family warmth and thoughtful on-site coordination."
        },
        {
          title: "Small High-End Destination Wedding",
          description:
            "A considered guest list, richer experience and more room for meaningful moments."
        },
        {
          title: "European Long-Table Dinner",
          description:
            "Tablescape, lighting, florals, menu rhythm and guest flow shaped into one elegant dinner experience."
        },
        {
          title: "Champagne Reception",
          description:
            "Light, elegant moments for arrival, post-ceremony mingling or pre-dinner hosting."
        },
        {
          title: "Guest Hosting",
          description:
            "Arrival, transfers, welcome moments and clear guidance for international guests."
        },
        {
          title: "Cross-Cultural Ceremony Design",
          description:
            "Chinese, German and international traditions are blended with sensitivity and restraint."
        },
        {
          title: "Travel & Visual Storytelling",
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
      eyebrow: "Style Inspiration",
      title: "The wedding atmosphere we love to create.",
      intro:
        "A glimpse into the aesthetic direction we prefer and shape: restrained, elegant, natural and rooted in a sense of European place.",
      items: [
        {
          src: "/images/inspiration-castle-natural.png",
          alt: "Castle wedding ceremony with golden details",
          title: "Castle Wedding",
          caption: "Natural greenery and architectural depth instead of abundant classic florals."
        },
        {
          src: "/images/inspiration-church-minimal.png",
          alt: "European ceremony space in warm light",
          title: "Church Ceremony",
          caption: "Less is more: negative space, single stems and candlelight with quiet restraint."
        },
        {
          src: "/images/inspiration-lakeside-private-vows.png",
          alt: "Lakeside wedding vows in Europe",
          title: "Lakeside Vows",
          caption: "A private vow moment for the couple alone, quiet and close to the water."
        },
        {
          src: "/images/manor-dinner.jpg",
          alt: "Elegant dinner in a European manor house",
          title: "European Long-Table Dinner",
          caption: "Fine dining, candlelight and a flow that feels effortless."
        },
        {
          src: "/images/table-design.jpg",
          alt: "Champagne-toned floral table design",
          title: "Floral Design Details",
          caption: "Restrained color, fine materials and a graceful guest flow."
        },
        {
          src: "/images/planning-editorial.png",
          alt: "Wedding stationery, gifts and textile details",
          title: "Stationery & Gift Details",
          caption: "Stationery, texture and small gestures carry the story of the day."
        }
      ]
    },
    selectedWeddings: {
      eyebrow: "Selected Weddings",
      title: "Beyond beautiful images, execution is what matters.",
      intro:
        "Each wedding is presented through location, guest count, service scope, wedding type and execution highlights, so the planning work behind the images becomes clear.",
      labels: {
        guests: "Example scale",
        service: "Service",
        type: "Wedding type",
        highlight: "Execution highlight"
      },
      items: [
        {
          src: "/images/case-private-castle-stuttgart.png",
          alt: "German castle wedding case",
          title: "Private Castle Wedding near Stuttgart",
          location: "Stuttgart region, Germany",
          guests: "Approx. 60 guests",
          service: "Wedding planning / venue communication / vendor coordination / wedding day execution",
          type: "Castle wedding",
          highlight: "Castle ceremony, dinner flow, guest hosting and German-Chinese-English communication."
        },
        {
          src: "/images/case-lakeside-bavaria.png",
          alt: "European lakeside destination wedding case",
          title: "Intimate Lakeside Wedding in Bavaria",
          location: "Bavaria, Germany",
          guests: "Approx. 30 guests",
          service: "Destination wedding planning / travel flow / visual direction",
          type: "Small high-end destination wedding",
          highlight: "Intimate ceremony, guest travel experience, photo timeline and natural emotional flow."
        },
        {
          src: "/images/case-frankfurt-dinner.png",
          alt: "European manor dinner wedding case",
          title: "Chinese-German Wedding in Frankfurt",
          location: "Frankfurt am Main, Germany",
          guests: "Approx. 80 guests",
          service: "Dinner concept / vendor coordination / wedding day timeline",
          type: "Cross-cultural wedding & dinner",
          highlight: "Long-table setting, florals, candlelight, reception moment and precise service flow."
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
        budgetRange: { label: "Budget Range", placeholder: "Please choose" },
        serviceNeed: { label: "Service Need", placeholder: "Please choose" },
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
      ],
      budgetOptions: [
        { value: "not-sure", label: "Not sure yet" },
        { value: "under-20000", label: "Under 20,000 €" },
        { value: "20000-50000", label: "20,000–50,000 €" },
        { value: "50000-100000", label: "50,000–100,000 €" },
        { value: "over-100000", label: "Over 100,000 €" }
      ],
      serviceOptions: [
        { value: "full-planning", label: "Full Wedding Planning" },
        { value: "destination-wedding", label: "European Destination Wedding" },
        { value: "castle-wedding", label: "Castle Wedding" },
        { value: "day-coordination", label: "Wedding Day Coordination" },
        { value: "venue-vendor", label: "Venue / Vendor Communication" },
        { value: "not-sure", label: "Not sure yet, would like to consult first" }
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
