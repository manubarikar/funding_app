import React, { useState } from 'react';
import { ref, push, set } from 'firebase/database';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebase';
import { auth } from '../firebase';

export default function CampaignWizard() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [goal, setGoal] = useState('');
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const handlePublish = async () => {
    if (!title || !description || !goal || files.length === 0) {
      alert("Please fill all fields and upload at least one image.");
      return;
    }

    setLoading(true);
    const user = auth.currentUser;
    const imageUrls = [];

    try {
      // Upload each image to Firebase Storage
      for (const file of files) {
        const fileRef = storageRef(storage, `campaigns/${Date.now()}_${file.name}`);
        await uploadBytes(fileRef, file);
        const url = await getDownloadURL(fileRef);
        imageUrls.push(url);
      }

      // Save campaign data to Realtime Database
      const campaignRef = push(ref(db, 'campaigns'));
      await set(campaignRef, {
        title,
        description,
        goal: parseFloat(goal),
        images: imageUrls,
        creator: user?.email || "anonymous",
        createdAt: new Date().toISOString()
      });

      alert("Campaign published successfully!");
      setTitle('');
      setDescription('');
      setGoal('');
      setFiles([]);
    } catch (error) {
      console.error("Publish error:", error);
      alert("Failed to publish campaign.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Create Campaign</h2>
      <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      <input type="number" placeholder="Goal Amount" value={goal} onChange={e => setGoal(e.target.value)} />
      <input type="file" multiple onChange={e => setFiles([...e.target.files])} />
      <div>
        {files.map((file, i) => (
          <img key={i} src={URL.createObjectURL(file)} alt="preview" style={{ width: '100px', margin: '5px' }} />
        ))}
      </div>
      <button onClick={handlePublish} disabled={loading}>
        {loading ? "Publishing..." : "Publish"}
      </button>
    </div>
  );
}