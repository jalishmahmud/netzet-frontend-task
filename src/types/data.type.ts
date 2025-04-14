export interface HeroSectionContent {
  announcementBanner: {
    segment1: string;
    segment2: string;
  };
  headline: string;
  subheading: string;
  benefits: string[];
  ctaText: string;
  quizNote: string;
  disclaimerText: string;
  footerCopyright: string;
}

export interface NavLinks {
  id: number;
  label: string;
  url: string;
}
