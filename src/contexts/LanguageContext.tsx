import React, { createContext, useContext, ReactNode } from 'react';

interface LanguageContextType {
  t: (key: string) => string;
}

const translations = {
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
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const t = (key: string): string => {
    return translations[key as keyof typeof translations] || key;
  };

  return (
    <LanguageContext.Provider value={{ t }}>
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