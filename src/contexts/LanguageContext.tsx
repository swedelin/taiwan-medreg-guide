import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ja' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ja: {
    // Header
    companyName: 'Regiestar',
    companySubtitle: '医療機器登録',
    services: 'サービス',
    process: 'プロセス',
    contact: 'お問い合わせ',
    linkedin: 'LinkedIn',
    freeConsultation: '無料相談',
    menu: 'メニュー',
    
    // Hero
    heroTitle: '台湾医療機器',
    heroTitleHighlight: '登録サービス',
    heroDescription: '台湾における医療機器登録の専門的な規制コンサルティング。',
    heroButton1: '無料相談を受ける',
    heroButton2: 'サービスを見る',
    
    // Services
    servicesTitle: '当社の実績',
    servicesDescription: '台湾で成功した医療機器登録の事例です。',
    service1: '医用画像機器',
    service2: 'AI/ソフトウェアソリューション',
    service3: '薬剤溶出カテーテル',
    service4: '筋肉刺激装置',
    service5: '嗅覚検査',
    service6: '涙液検査',
    service7: 'う蝕検出',
    service8: '外科器具',
    
    // Process
    processTitle: '当社の登録プロセス',
    processStep1Title: '初期評価',
    processStep1Description: '機器の仕様と意図された用途を分析し、台湾市場参入に適した規制経路を決定します。',
    processStep2Title: '書類準備',
    processStep2Description: '台湾FDA要件に従い、包括的な技術ファイル、臨床データ、規制申請書類を準備します。',
    processStep3Title: '規制当局への提出',
    processStep3Description: '台湾FDAとのすべてのコミュニケーションを処理し、審査プロセスを管理し、規制に関する質問や要求に対応します。',
    processStep4Title: '承認と市場投入',
    processStep4Description: '承認後、市販後要件、品質システムの維持、継続的な規制遵守をサポートします。',
    
    // Contact
    contactTitle: '医療機器の登録準備はできていますか？',
    contactDescription: '台湾での医療機器登録に関する専門的なガイダンスを提供します。無料相談とパーソナライズされた規制戦略について、お気軽にお問い合わせください。',
    contactName: '氏名',
    contactCompany: '会社名',
    contactEmail: 'メールアドレス',
    contactDeviceType: '機器タイプ',
    contactDetails: 'プロジェクト詳細',
    contactSubmit: '相談を送信',
    contactInfoTitle: 'お問い合わせ情報',
    contactInfoEmail: 'メール',
    whyChooseTitle: 'なぜ私たちを選ぶのか？',
    whyChoose1: '台湾の医療機器規制における10年以上の経験',
    whyChoose2: 'TFDAとの確立されたパートナーシップ',
    whyChoose3: '高い成功率と迅速な承認実績',
    whyChoose4: '登録から市場投入までの包括的サポート',
    
    // FAQ
    faqTitle: '台湾における医療機器登録に関するFAQ',
    faqQ1: '台湾で医療機器を販売するには、どのような手続きが必要ですか？',
    faqA1: '台湾の医療機器規制に基づき、製造業者は台湾市場で医療機器を販売するために、台湾食品医薬品局（TFDA）に販売承認を申請する必要があります。特に高リスクに分類される医療機器については、技術資料、試験データ、臨床データなどの追加提出が求められる場合があります。また、海外製造業者は台湾国内に現地代理人を指定しなければなりません。現地代理人は、医療機器の登録手続きを管理し、TFDAとの連絡窓口としての役割を担います。',
    faqQ2: 'QSDとは何ですか？',
    faqA2: 'QSDは「輸入医療機器品質システム文書（Quality System Documentation）」の略称です。これは、台湾に輸入される医療機器に対して、外国の製造業者が実施している品質管理体制が台湾のGMP（適正製造基準）に適合しているかどうかを、文書に基づいて審査する制度です。QSDは、台湾政府が輸入医療機器の品質を確保するために設けている審査プロセスの一つであり、登録時に必要な重要な要件となっています。',
  },
  en: {
    // Header
    companyName: 'Regiestar',
    companySubtitle: 'Medical Device Registration',
    services: 'Services',
    process: 'Process',
    contact: 'Contact',
    linkedin: 'LinkedIn',
    freeConsultation: 'Free Consultation',
    menu: 'Menu',
    
    // Hero
    heroTitle: 'Taiwan Medical Device',
    heroTitleHighlight: 'Registration Service',
    heroDescription: 'Professional regulatory consulting for medical device registration in Taiwan.',
    heroButton1: 'Get Free Consultation',
    heroButton2: 'View Our Services',
    
    // Services
    servicesTitle: 'Our Proven Track Record',
    servicesDescription: 'Examples of successful medical device registrations we\'ve completed in Taiwan.',
    service1: 'Medical Imaging Devices',
    service2: 'AI/Software Solutions',
    service3: 'Drug Eluting Catheters',
    service4: 'Muscle Stimulators',
    service5: 'Olfactory Testing',
    service6: 'Tear Testing',
    service7: 'Caries Detection',
    service8: 'Surgical Instruments',
    
    // Process
    processTitle: 'Our Registration Process',
    processStep1Title: 'Initial Assessment',
    processStep1Description: 'We analyze your device specifications, intended use, and determine the appropriate regulatory pathway for Taiwan market entry.',
    processStep2Title: 'Documentation Preparation',
    processStep2Description: 'Our team prepares comprehensive technical files, clinical data, and regulatory submissions according to Taiwan FDA requirements.',
    processStep3Title: 'Regulatory Submission',
    processStep3Description: 'We handle all communications with Taiwan FDA, manage the review process, and address any regulatory queries or requests.',
    processStep4Title: 'Approval & Launch',
    processStep4Description: 'Upon approval, we assist with post-market requirements, quality system maintenance, and ongoing regulatory compliance.',
    
    // Contact
    contactTitle: 'Ready to Register Your Medical Device?',
    contactDescription: 'Get expert guidance for your Taiwan medical device registration. Contact us for a free consultation and personalized regulatory strategy.',
    contactName: 'Name',
    contactCompany: 'Company',
    contactEmail: 'Email',
    contactDeviceType: 'Device Type',
    contactDetails: 'Project Details',
    contactSubmit: 'Send Consultation',
    contactInfoTitle: 'Contact Information',
    contactInfoEmail: 'Email',
    whyChooseTitle: 'Why Choose Us?',
    whyChoose1: 'Over 10 years of experience in Taiwan medical device regulations',
    whyChoose2: 'Established partnerships with TFDA',
    whyChoose3: 'High success rate and proven track record of fast approvals',
    whyChoose4: 'Comprehensive support from registration to market launch',
    
    // FAQ
    faqTitle: 'FAQ about Medical Device Registration in Taiwan',
    faqQ1: 'What procedures are required to sell medical devices in Taiwan?',
    faqA1: 'According to Medical Devices Act, to sell medical devices in the Taiwan market, you must apply for manufacturing and marketing approval from the Taiwan Food and Drug Administration (TFDA). For medical devices classified as high-risk, additional submissions such as technical documentation, test data, and clinical data may be required. Foreign manufacturers must also designate a Taiwan Agent within Taiwan. The Taiwan Agent manages the medical device registration procedures and serves as the liaison with TFDA.',
    faqQ2: 'What is QSD?',
    faqA2: 'QSD stands for "Quality System Documentation for Imported Medical Devices." This is a system that reviews, based on documentation, whether the quality management system implemented by foreign manufacturers for medical devices imported into Taiwan complies with Taiwan\'s GMP (Good Manufacturing Practice) standards. QSD is one of the review processes established by the Taiwan government to ensure the quality of imported medical devices and is an important requirement during registration.',
    faqQ3: 'Which medical devices can be imported via the Listing Process?',
    faqA3: 'The following Class I (low-risk) medical devices are eligible for import through the simplified Listing Process (no pre-market review required):\n\nClinical Chemistry & Hematology: Continuous flow sequential multiple chemistry analyzer for clinical use, Discrete photometric chemistry analyzer for clinical use, High-pressure liquid chromatography (HPLC) system for clinical use, Colorimeter, photometer, or spectrophotometer for clinical use, Electrophoresis apparatus for clinical use, Enzyme analyzer for clinical use, Fluorometer for clinical use, Automated urinalysis system, Dye and chemical solution stains, Blood mixing and weighing devices, Blood bank centrifuge for in vitro diagnostic use, Immunonephelometer equipment\n\nGas & Pressure Measurement: Uncompensated Thorpe tube flowmeter, Compensated Thorpe tube flowmeter, Gas pressure gauge, Pressure regulator\n\nDental Materials & Accessories: Resin applicator, Optical impression systems for CAD/CAM, Resin impression tray material, Abrasive devices and accessories, Saliva absorbers, Articulation paper, Prophylaxis cups, Rubber dam and accessories, Impression tubes, Preformed impression trays, Intraoral dental wax\n\nGeneral Hospital & Patient Care: Stomach pH electrode, Hernia support, External aesthetic restoration prosthesis, Non-inflatable extremity splint, AC-powered adjustable hospital bed, Manual adjustable hospital bed, Pediatric hospital bed, Non-powered flotation therapy mattress, Therapeutic medical binder, Skin pressure protectors, Manual patient transfer device, Hand-carried stretcher\n\nOphthalmic Instruments: Ophthalmic chair, Keratoscope, Stereopsis measuring instrument, Perimeter, Pupillometer, Ophthalmic refractometer, Manual refractor, Stereoscope, Ophthalmic operating spectacles (loupes)\n\nPhysical Medicine & Orthopedic Devices: Non-powered orthopedic traction apparatus and accessories, Force-measuring platform, Isokinetic testing and evaluation system, Cane, Crutch, External limb orthotic component, External limb prosthetic component, Limb orthosis, Truncal orthosis, Plinth, Arm sling, Non-powered sitz bath, Cold pack, Moist heat pack, Powered heating pad, Traction accessory\n\nRadiology & Nuclear Medicine: Nuclear uptake probe, Diagnostic X-ray high-voltage generator, Radiographic head holder, Radiographic table',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const getInitialLanguage = (): Language => {
    if (typeof window !== 'undefined') {
      return window.location.pathname.startsWith('/jp') ? 'ja' : 'en';
    }
    return 'en';
  };
  
  const [language, setLanguage] = useState<Language>(getInitialLanguage());

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};