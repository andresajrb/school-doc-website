export type ResourceType = 'pdf' | 'video' | 'presentation' | 'link' | 'document';

export interface Resource {
  id: string;
  title: string;
  subject: string;
  year: 1 | 2 | 3 | 4 | 5;
  type: ResourceType;
  url: string;
  description?: string;
  tags?: string[];
}

export interface Subject {
  name: string;
  resources: Resource[];
}

export interface YearResources {
  year: 1 | 2 | 3 | 4 | 5;
  label: string;
  subjects: Subject[];
}

// Datos de ejemplo — poblar con los links reales al agregar contenido
export const resourcesByYear: YearResources[] = [
  {
    year: 1,
    label: '1° Año',
    subjects: [
      {
        name: 'Matemáticas',
        resources: [
          {
            id: 'mat-1-01',
            title: 'Operaciones básicas — Guía de ejercicios',
            subject: 'Matemáticas',
            year: 1,
            type: 'pdf',
            url: '#',
            description: 'Suma, resta, multiplicación y división.',
            tags: ['aritmética', 'operaciones'],
          },
        ],
      },
      {
        name: 'Lengua y Literatura',
        resources: [
          {
            id: 'len-1-01',
            title: 'Comprensión lectora — Textos narrativos',
            subject: 'Lengua y Literatura',
            year: 1,
            type: 'document',
            url: '#',
            tags: ['lectura', 'narrativa'],
          },
        ],
      },
    ],
  },
  {
    year: 2,
    label: '2° Año',
    subjects: [
      {
        name: 'Matemáticas',
        resources: [
          {
            id: 'mat-2-01',
            title: 'Álgebra introductoria',
            subject: 'Matemáticas',
            year: 2,
            type: 'pdf',
            url: '#',
            tags: ['álgebra', 'ecuaciones'],
          },
        ],
      },
    ],
  },
  {
    year: 3,
    label: '3° Año',
    subjects: [
      {
        name: 'Biología',
        resources: [
          {
            id: 'bio-3-01',
            title: 'La célula — Estructura y funciones',
            subject: 'Biología',
            year: 3,
            type: 'video',
            url: '#',
            tags: ['célula', 'biología'],
          },
        ],
      },
    ],
  },
  {
    year: 4,
    label: '4° Año',
    subjects: [
      {
        name: 'Física',
        resources: [
          {
            id: 'fis-4-01',
            title: 'Leyes de Newton — Presentación',
            subject: 'Física',
            year: 4,
            type: 'presentation',
            url: '#',
            tags: ['física', 'newton', 'movimiento'],
          },
        ],
      },
    ],
  },
  {
    year: 5,
    label: '5° Año',
    subjects: [
      {
        name: 'Química',
        resources: [
          {
            id: 'qui-5-01',
            title: 'Tabla periódica — Guía completa',
            subject: 'Química',
            year: 5,
            type: 'pdf',
            url: '#',
            tags: ['química', 'tabla periódica'],
          },
        ],
      },
    ],
  },
];

export const allResources: Resource[] = resourcesByYear.flatMap(yr =>
  yr.subjects.flatMap(sub => sub.resources)
);
