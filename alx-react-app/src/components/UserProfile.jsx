const UserProfile = (props) => {
  return (
    <div style={{ 
      border: '1px solid #ccc', 
      padding: '16px', 
      borderRadius: '8px', 
      maxWidth: '300px', 
      margin: '20px auto', 
      textAlign: 'center',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)'
    }}>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p> {/* <-- Capital 'B' added here */}
    </div>
  );
};

export default UserProfile;
