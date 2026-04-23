import React from 'react';
import { motion } from 'framer-motion';
import LessonCard from '../components/LessonCard';
import { lessons } from '../data/lessons';

const LessonsPage = () => {
  return (
    <div>
      <h1>All Lessons</h1>
      <div className="filters">
        <select>
          <option value="all">All Tracks</option>
          <option value="track1">Track 1</option>
          <option value="track2">Track 2</option>
          // Add more tracks as needed
        </select>
        <select>
          <option value="all">All Phases</option>
          <option value="phase1">Phase 1</option>
          <option value="phase2">Phase 2</option>
          // Add more phases as needed
        </select>
      </div>
      <div className="lesson-list">
        {lessons.map((lesson) => (
          <motion.div 
            key={lesson.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LessonCard lesson={lesson} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LessonsPage;