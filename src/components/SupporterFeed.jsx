import React, { useState } from 'react';

export default function SupporterFeed() {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState('');

  return (
    <div>
      <h2>Supporter Comments</h2>
      {comments.map((c, i) => <p key={i}><span className="badge">Top Supporter</span> {c}</p>)}
      <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Leave a message..." />
      <button onClick={() => { setComments([...comments, text]); setText(''); }}>Post</button>
    </div>
  );
}

