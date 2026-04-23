// app/page.tsx

import React from 'react';

const HomePage = () => {
  return (
    <div>
      <header>
        <h1>Welcome to SysDes Learning</h1>
        <p>Your journey to mastering system design starts here.</p>
      </header>

      <section>
        <h2>Learning Tracks</h2>
        {/* Learning tracks cards should go here */}
      </section>

      <section>
        <h2>Featured Lessons</h2>
        {/* Featured lessons should go here */}
      </section>

      <section>
        <h2>Recent Lessons</h2>
        {/* Recent lessons grid should go here */}
      </section>

      <footer>
        <p>&copy; 2026 SysDes. All Rights Reserved.</p>
        {/* Metadata configuration */}
      </footer>
    </div>
  );
};

export default HomePage;