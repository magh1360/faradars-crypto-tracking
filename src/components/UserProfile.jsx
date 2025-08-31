import React, { useState, useEffect } from 'react';

// استایل‌های کامپوننت
const styles = {
  container: {
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    maxWidth: '500px',
    margin: '50px auto',
    padding: '25px',
    borderRadius: '15px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f8f9fa',
    textAlign: 'center',
  },
  avatar: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '4px solid #4e6ef2',
    marginBottom: '20px',
  },
  name: {
    fontSize: '28px',
    fontWeight: 'bold',
    margin: '10px 0',
    color: '#2d3748',
  },
  title: {
    fontSize: '18px',
    color: '#4e6ef2',
    marginBottom: '20px',
  },
  infoContainer: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '12px',
    marginTop: '20px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  },
  infoItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '12px 0',
    borderBottom: '1px solid #e2e8f0',
  },
  infoLabel: {
    fontWeight: '600',
    color: '#4a5568',
  },
  infoValue: {
    color: '#2d3748',
  },
  button: {
    backgroundColor: '#4e6ef2',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '20px',
    transition: 'background-color 0.3s',
  },
};

const UserProfile = () => {
  const [user, setUser] = useState({
    name: 'سارا محمدی',
    title: 'توسعه دهنده فرانت‌اند',
    email: 'sara.mohammadi@example.com',
    location: 'تهران، ایران',
    website: 'saramohammadi.ir',
    bio: 'توسعه‌دهنده React با بیش از ۴ سال تجربه در ساخت رابط کاربری زیبا و کاربرپسند.',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  useEffect(() => {
    setEditedUser(user);
  }, [user]);

  const handleEditToggle = () => {
    if (isEditing) {
      setUser(editedUser);
    }
    setIsEditing(!isEditing);
  };

  const handleInputChange = (field, value) => {
    setEditedUser({
      ...editedUser,
      [field]: value,
    });
  };

  return (
    <div style={styles.container}>
      <img 
        src="https://randomuser.me/api/portraits/women/68.jpg" 
        alt="پروفایل کاربر" 
        style={styles.avatar}
      />
      
      {isEditing ? (
        <div>
          <input 
            type="text" 
            value={editedUser.name} 
            onChange={(e) => handleInputChange('name', e.target.value)}
            style={{...styles.name, border: '1px solid #ccc', padding: '8px', width: '80%'}}
          />
          <input 
            type="text" 
            value={editedUser.title} 
            onChange={(e) => handleInputChange('title', e.target.value)}
            style={{...styles.title, border: '1px solid #ccc', padding: '8px', width: '80%'}}
          />
        </div>
      ) : (
        <div>
          <h2 style={styles.name}>{user.name}</h2>
          <p style={styles.title}>{user.title}</p>
        </div>
      )}
      
      <div style={styles.infoContainer}>
        <div style={styles.infoItem}>
          <span style={styles.infoLabel}>ایمیل:</span>
          {isEditing ? (
            <input 
              type="email" 
              value={editedUser.email} 
              onChange={(e) => handleInputChange('email', e.target.value)}
              style={{border: '1px solid #ccc', padding: '4px', width: '60%'}}
            />
          ) : (
            <span style={styles.infoValue}>{user.email}</span>
          )}
        </div>
        
        <div style={styles.infoItem}>
          <span style={styles.infoLabel}>موقعیت:</span>
          {isEditing ? (
            <input 
              type="text" 
              value={editedUser.location} 
              onChange={(e) => handleInputChange('location', e.target.value)}
              style={{border: '1px solid #ccc', padding: '4px', width: '60%'}}
            />
          ) : (
            <span style={styles.infoValue}>{user.location}</span>
          )}
        </div>
        
        <div style={styles.infoItem}>
          <span style={styles.infoLabel}>وبسایت:</span>
          {isEditing ? (
            <input 
              type="text" 
              value={editedUser.website} 
              onChange={(e) => handleInputChange('website', e.target.value)}
              style={{border: '1px solid #ccc', padding: '4px', width: '60%'}}
            />
          ) : (
            <span style={styles.infoValue}>{user.website}</span>
          )}
        </div>
        
        <div style={{...styles.infoItem, borderBottom: 'none', flexDirection: 'column', alignItems: 'flex-start'}}>
          <span style={styles.infoLabel}>درباره من:</span>
          {isEditing ? (
            <textarea 
              value={editedUser.bio} 
              onChange={(e) => handleInputChange('bio', e.target.value)}
              style={{border: '1px solid #ccc', padding: '8px', width: '95%', minHeight: '80px', marginTop: '8px'}}
            />
          ) : (
            <p style={{...styles.infoValue, marginTop: '8px', textAlign: 'right', lineHeight: '1.6'}}>{user.bio}</p>
          )}
        </div>
      </div>
      
      <button 
        style={{
          ...styles.button,
          backgroundColor: isEditing ? '#28a745' : '#4e6ef2'
        }}
        onClick={handleEditToggle}
      >
        {isEditing ? 'ذخیره تغییرات' : 'ویرایش پروفایل'}
      </button>
    </div>
  );
};

export default UserProfile;