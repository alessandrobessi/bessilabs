export interface Room {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  themes: string[];
}

export const ROOMS: Room[] = [
  {
    name: 'Computation',
    slug: 'the-engine',
    tagline: 'Computation, infrastructure, and systems engineering.',
    description:
      'The technical core of the lab. A space for computation, programming languages, interpreters, Linux, Kubernetes, distributed systems, AI engineering, and the mechanics of software.',
    themes: ['computation', 'SICP', 'programming languages', 'Linux', 'infrastructure', 'Kubernetes', 'AI', 'observability'],
  },
  {
    name: 'Drawing',
    slug: 'the-eye',
    tagline: 'Drawing, perception, and visual discipline.',
    description:
      'A study of perception and the discipline of seeing. Negative space, form, proportion, anatomy, line quality — and the effort to see what is present instead of what the mind assumes.',
    themes: ['drawing', 'perception', 'negative space', 'form', 'proportion', 'anatomy', 'line quality'],
  },
  {
    name: 'Chess',
    slug: 'the-board',
    tagline: 'Chess, strategy, and decision-making under constraint.',
    description:
      'A study of decision-making in a bounded strategic system. Calculation, blunders, pattern recognition, and cognitive errors under pressure.',
    themes: ['chess', 'strategy', 'calculation', 'pattern recognition', 'decision-making', 'cognitive errors'],
  },
  {
    name: 'Music',
    slug: 'the-ear',
    tagline: 'Music, harmony, and the study of structured time.',
    description:
      'A study of sound, structure, interpretation, and embodied timing. Piano, bass, harmony, transcription, phrasing — and the difference between playing notes and hearing form.',
    themes: ['music', 'piano', 'bass', 'harmony', 'rhythm', 'transcription', 'phrasing', 'listening'],
  },
  {
    name: 'Training',
    slug: 'the-body',
    tagline: 'Endurance, strength, and physiological adaptation.',
    description:
      'A study of training, adaptation, and physiological systems. Endurance, strength, fatigue, nutrition, and what physical discipline reveals about all other disciplines.',
    themes: ['endurance', 'strength', 'swimming', 'running', 'cycling', 'nutrition', 'recovery', 'adaptation'],
  },
  {
    name: 'Philosophy',
    slug: 'the-inner-lab',
    tagline: 'Philosophy, reflection, and the architecture of attention.',
    description:
      'A reflective space for the internal architecture behind the external work. Discipline, focus, Zen, identity, ambition, self-observation, and the private architecture behind public work.',
    themes: ['philosophy', 'discipline', 'focus', 'identity', 'ambition', 'self-observation', 'mastery'],
  },
  {
    name: 'Field Notes',
    slug: 'field-notes',
    tagline: 'Fragments, logs, and unfinished thoughts.',
    description:
      'A lightweight format for frequent publishing without requiring every post to be a polished essay. Short observations, updates, incomplete ideas, logs, and rough experiments that may later become something larger.',
    themes: ['fragments', 'observations', 'logs', 'experiments', 'sketches'],
  },
];

export function getRoomBySlug(slug: string): Room | undefined {
  return ROOMS.find((r) => r.slug === slug);
}
