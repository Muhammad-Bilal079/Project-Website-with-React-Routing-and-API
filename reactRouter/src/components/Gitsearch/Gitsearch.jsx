import React, { useState } from 'react';

function GitHubUserSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://api.github.com/users/${searchTerm}`);
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
        setError(null);
        console.log(data);
      } else {
        setError('User not found');
        setUserData(null);
      }
      
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data');
      setUserData(null);
    }
  };

  return (
    <div style={{backgroundColor:'gray'}}>
      <div style={{
        display:'flex',
        justifyContent: 'center',
      }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a GitHub username"
          value={searchTerm}
          onChange={handleChange}
          style={{padding:'10px',outline: 'none',borderRadius:'6px',backgroundColor:'orange',color:'black',margin:'5px'}}
        />
        <button type="submit" style={{backgroundColor:'red',padding:'10px',borderRadius:'5px',margin:'5px'}}>Search</button>
      </form>
      </div>
      {error && <p>{error}</p>}
      {userData && (
        
        <div style={{display:'flex',justifyContent:'center',textAlign:'center',alignContent:'center'}}>

    {/* <div>    <h2 style={{fontSize:'20px',margin:'10px auto'}}>{userData.login}</h2></div> */}
        <div> <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} height={250} width={250} style={{borderRadius:'50%'}}/></div>
          
          <div style={{margin:'60px 20px',fontSize:'20px'}}>
          <p>Name: {userData.name}</p>
          <p>Location: {userData.location}</p>
          <p>Followers: {userData.followers || "0"}</p>
          </div>

        </div>
      )}
    </div>
  );
}

export default GitHubUserSearch;