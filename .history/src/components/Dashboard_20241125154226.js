import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar'; // Nieuwe sidebar component
import UploadPreview from '../components/UploadPreview';

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="content">
        <h1>Welkom bij het Dashboard</h1>
        <UploadPreview /> {/* Voeg de upload preview toe */}
      </div>
    </div>
  );
};

export default Dashboard;
