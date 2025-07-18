const UserProfile = (props) => {
  return (
    <div style={{
      border: '1px solid gray',
      padding: '20px',
      margin: '20px auto',
      maxWidth: '400px',
      textAlign: 'left',
      borderRadius: '10px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ color: 'blue', fontSize: '24px' }}>{props.name}</h2>
      <p style={{ fontSize: '18px' }}>
        Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span>
      </p>
      <p style={{ fontSize: '18px' }}>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;
