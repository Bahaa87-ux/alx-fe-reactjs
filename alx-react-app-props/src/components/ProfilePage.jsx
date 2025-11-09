import UserInfo from './UserInfo';

function ProfilePage() {
  // لم نعد نحتاج لتمرير userData كـ prop
  return (
    <div style={{
      padding: '20px',
      textAlign: 'center'
    }}>
      <h2 style={{ color: '#2c3e50' }}>Profile Page</h2>
      <UserInfo />
    </div>
  );
}

export default ProfilePage;