import React from 'react';
import './TopicViewer.css';

const TopicViewer = ({ topic }) => {
  return (
    <div className="topic-viewer">
      <h2>{topic.title}</h2>
      <div className="topic-content">
        <p>{topic.content}</p>
      </div>
    </div>
  );
};

export default TopicViewer;
