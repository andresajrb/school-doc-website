'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  FileText,
  Video,
  FileSpreadsheet,
  Image as ImageIcon,
  Link as LinkIcon,
  Music,
  BookOpen,
  Inbox,
  ArrowLeft,
} from 'lucide-react';
import type { Moment, Subject, Topic, DriveResource, ResourceKind } from '@/lib/resources';
import { isPlaceholder } from '@/lib/drive';

interface Props {
  moments: Moment[];
}

const KIND_ICON: Record<ResourceKind, typeof FileText> = {
  pdf: FileText,
  video: Video,
  docx: FileText,
  ppt: FileSpreadsheet,
  image: ImageIcon,
  audio: Music,
  link: LinkIcon,
};

const KIND_COLOR: Record<ResourceKind, string> = {
  pdf: 'text-red-400',
  video: 'text-blue-400',
  docx: 'text-sky-400',
  ppt: 'text-orange-400',
  image: 'text-purple-400',
  audio: 'text-pink-400',
  link: 'text-school-yellow',
};

export default function ResourceExplorer({ moments }: Props) {
  const [momentId, setMomentId] = useState<1 | 2 | 3>(1);
  const [subjectId, setSubjectId] = useState<string | null>(null);

  const currentMoment = useMemo(
    () => moments.find(m => m.id === momentId),
    [moments, momentId],
  );
  const currentSubject = useMemo(
    () => currentMoment?.subjects.find(s => s.id === subjectId) ?? null,
    [currentMoment, subjectId],
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-6">
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <div className="rounded-lg border border-school-border bg-school-surface/60 overflow-hidden">
          {moments.map(m => {
            const active = m.id === momentId;
            return (
              <button
                key={m.id}
                onClick={() => {
                  setMomentId(m.id);
                  setSubjectId(null);
                }}
                className={`w-full flex items-center justify-between px-4 py-3 text-left font-display font-semibold text-sm transition-colors border-b border-school-border last:border-b-0 ${
                  active
                    ? 'bg-school-yellow text-school-red'
                    : 'text-school-muted hover:bg-school-surface hover:text-school-text'
                }`}
              >
                <span className="uppercase tracking-wide">{m.label}</span>
                <ChevronRight size={16} className={active ? 'rotate-90 transition-transform' : ''} />
              </button>
            );
          })}
        </div>
      </aside>

      <div className="min-h-[400px]">
        <AnimatePresence mode="wait">
          {!currentSubject ? (
            <motion.div
              key={`subjects-${momentId}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.2 }}
            >
              <SubjectGrid
                subjects={currentMoment?.subjects ?? []}
                onSelect={id => setSubjectId(id)}
              />
            </motion.div>
          ) : (
            <motion.div
              key={`topics-${subjectId}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <TopicList
                subject={currentSubject}
                onBack={() => setSubjectId(null)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function SubjectGrid({
  subjects,
  onSelect,
}: {
  subjects: Subject[];
  onSelect: (id: string) => void;
}) {
  if (subjects.length === 0) {
    return <EmptyState message="Aún no hay materias cargadas para este lapso." />;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
      {subjects.map((s, i) => (
        <motion.button
          key={s.id}
          onClick={() => onSelect(s.id)}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: i * 0.04 }}
          whileHover={{ y: -4 }}
          className="group relative overflow-hidden rounded-xl border border-school-border bg-school-surface hover:border-school-yellow/50 text-left p-5 transition-colors"
        >
          <div
            className="absolute inset-y-0 left-0 w-1.5"
            style={{ backgroundColor: s.color ?? '#f4c842' }}
          />
          <div className="flex items-start gap-3">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
              style={{ backgroundColor: `${s.color ?? '#f4c842'}22` }}
            >
              <BookOpen size={22} style={{ color: s.color ?? '#f4c842' }} />
            </div>
            <div className="min-w-0">
              <h3 className="font-display font-bold text-school-text text-base leading-tight mb-1">
                {s.name}
              </h3>
              <p className="text-school-muted text-xs">
                {s.topics.length} tema{s.topics.length !== 1 && 's'} ·{' '}
                {s.topics.reduce((a, t) => a + t.resources.length, 0)} recursos
              </p>
            </div>
          </div>
          <div className="mt-4 inline-flex items-center gap-1 text-xs font-display font-semibold text-school-yellow opacity-0 group-hover:opacity-100 transition-opacity">
            Ver Recursos <ChevronRight size={12} />
          </div>
        </motion.button>
      ))}
    </div>
  );
}

function TopicList({ subject, onBack }: { subject: Subject; onBack: () => void }) {
  const [openTopicId, setOpenTopicId] = useState<string | null>(
    subject.topics[0]?.id ?? null,
  );

  return (
    <div>
      <button
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-school-muted hover:text-school-yellow text-sm font-display mb-4 transition-colors"
      >
        <ArrowLeft size={14} /> Volver a materias
      </button>

      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${subject.color ?? '#f4c842'}22` }}
        >
          <BookOpen size={20} style={{ color: subject.color ?? '#f4c842' }} />
        </div>
        <h2 className="font-display font-black text-2xl text-school-text">
          {subject.name}
        </h2>
      </div>

      {subject.topics.length === 0 ? (
        <EmptyState message="Aún no hay temas cargados para esta materia." />
      ) : (
        <div className="space-y-2">
          {subject.topics.map(topic => (
            <TopicAccordion
              key={topic.id}
              topic={topic}
              isOpen={openTopicId === topic.id}
              onToggle={() =>
                setOpenTopicId(openTopicId === topic.id ? null : topic.id)
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}

function TopicAccordion({
  topic,
  isOpen,
  onToggle,
}: {
  topic: Topic;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-lg border border-school-border bg-school-surface overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-school-surface/80 transition-colors"
      >
        <span className="font-display font-semibold text-school-text text-sm">
          {topic.title}
        </span>
        <div className="flex items-center gap-2">
          <span className="text-school-muted text-xs">
            {topic.resources.length}
          </span>
          <ChevronRight
            size={16}
            className={`text-school-muted transition-transform ${isOpen ? 'rotate-90' : ''}`}
          />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-3 pt-1 border-t border-school-border/60">
              {topic.resources.length === 0 ? (
                <p className="text-school-muted text-xs py-3">
                  No hay recursos en este tema todavía.
                </p>
              ) : (
                <ul className="divide-y divide-school-border/50">
                  {topic.resources.map(r => (
                    <ResourceRow key={r.id} resource={r} />
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ResourceRow({ resource }: { resource: DriveResource }) {
  const Icon = KIND_ICON[resource.kind];
  const colorClass = KIND_COLOR[resource.kind];
  const unavailable = isPlaceholder(resource.url);

  const content = (
    <>
      <div className={`shrink-0 ${colorClass}`}>
        <Icon size={16} />
      </div>
      <span className="flex-1 text-sm text-school-text">{resource.title}</span>
      <span className="text-[10px] uppercase tracking-wider text-school-muted font-display font-semibold">
        {resource.kind}
      </span>
    </>
  );

  if (unavailable) {
    return (
      <li className="flex items-center gap-3 py-2.5 opacity-60 cursor-not-allowed">
        {content}
      </li>
    );
  }

  return (
    <li>
      <a
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 py-2.5 hover:text-school-yellow transition-colors group"
      >
        {content}
        <ExternalHint />
      </a>
    </li>
  );
}

function ExternalHint() {
  return (
    <span className="text-school-muted group-hover:text-school-yellow transition-colors">
      <ChevronRight size={14} />
    </span>
  );
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="py-16 text-center">
      <Inbox className="mx-auto mb-3 text-school-muted" size={40} />
      <p className="text-school-muted text-sm">{message}</p>
    </div>
  );
}
