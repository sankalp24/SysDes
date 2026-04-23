// lib/types.ts

// Interface for a Lesson
export interface Lesson {
    id: string;
    title: string;
    description?: string;
    createdAt: string;
    updatedAt: string;
}

// Interface for Lesson with detailed content
export interface LessonWithContent extends Lesson {
    content: string;
}

// Metadata associated with a Lesson
export interface LessonMetadata {
    lessonId: string;
    views: number;
    likes: number;
    duration: number; // in minutes
}

// Core types used in the application
export type LessonStatus = 'draft' | 'published' | 'archived';
export type UserRole = 'admin' | 'instructor' | 'student';
