import matter from 'gray-matter';

// Dummy data for lessons
const lessons = [
    { slug: 'lesson-1', title: 'Lesson 1', track: 'Track 1', phase: 'Phase 1' },
    { slug: 'lesson-2', title: 'Lesson 2', track: 'Track 2', phase: 'Phase 2' },
    { slug: 'lesson-3', title: 'Lesson 3', track: 'Track 1', phase: 'Phase 1' },
];

export function getAllLessons() {
    return lessons;
}

export function getLessonBySlug(slug) {
    return lessons.find(lesson => lesson.slug === slug);
}

export function getLessonsByTrack(track) {
    return lessons.filter(lesson => lesson.track === track);
}

export function getLessonNavigation() {
    // Assuming navigation is based on the lessons
    return lessons.map(lesson => ({ slug: lesson.slug, title: lesson.title }));
}

export function getLessonsByPhase(phase) {
    return lessons.filter(lesson => lesson.phase === phase);
}