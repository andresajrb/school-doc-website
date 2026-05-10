export type YearNumber = 1 | 2 | 3 | 4 | 5;

export type ResourceKind =
  | 'pdf'
  | 'video'
  | 'docx'
  | 'ppt'
  | 'image'
  | 'audio'
  | 'link';

export interface DriveResource {
  id: string;
  title: string;
  kind: ResourceKind;
  url: string;
}

export interface Topic {
  id: string;
  title: string;
  resources: DriveResource[];
}

export interface Subject {
  id: string;
  name: string;
  icon?: string;
  color?: string;
  topics: Topic[];
}

export interface Moment {
  id: 1 | 2 | 3;
  label: string;
  subjects: Subject[];
}

export interface BicentenariaBook {
  id: string;
  title: string;
  subtitle?: string;
  cover: string;
  pdfUrl: string;
}

export interface YearData {
  year: YearNumber;
  label: string;
  slug: string;
  available: boolean;
  bicentenariaBooks: BicentenariaBook[];
  moments: Moment[];
}

import { year1Data } from '@/data/years/1er';
import { year2Data } from '@/data/years/2do';

const emptyMoments: Moment[] = [
  { id: 1, label: 'Primer Lapso', subjects: [] },
  { id: 2, label: 'Segundo Lapso', subjects: [] },
  { id: 3, label: 'Tercer Lapso', subjects: [] },
];

export const resourcesByYear: YearData[] = [
  year1Data,
  year2Data,
  { year: 3, label: '3er Año', slug: '3er', available: false, bicentenariaBooks: [], moments: emptyMoments },
  { year: 4, label: '4to Año', slug: '4to', available: false, bicentenariaBooks: [], moments: emptyMoments },
  { year: 5, label: '5to Año', slug: '5to', available: false, bicentenariaBooks: [], moments: emptyMoments },
];

export function getYearBySlug(slug: string): YearData | undefined {
  return resourcesByYear.find(y => y.slug === slug);
}

export function countResources(year: YearData): number {
  return year.moments.reduce(
    (acc, m) => acc + m.subjects.reduce(
      (a, s) => a + s.topics.reduce((x, t) => x + t.resources.length, 0), 0,
    ), 0,
  );
}
