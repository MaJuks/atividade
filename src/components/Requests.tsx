import { useState, useEffect } from 'react';
import axios from 'axios';

interface RequestsProps {
  username: string;
}

export function Requests({ username }: RequestsProps) {
  const [userData, setUserData] = useState<any>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      if (!username) return;

      try {
        const response = await axios.get(`https://api.github.com/users/${username}`, {
          headers: {
            'Accept': 'application/vnd.github+json',
            'X-GitHub-Api-Version': '2022-11-28'
          }
        });
        setUserData(response.data);
        setError('');
      } catch (err) {
        setUserData(null);
        setError('Usuário não encontrado 😢');
      }
    };

    fetchUser();
  }, [username]);

  return (
    <div className='m-10 bg-[#ffeaf4] flex items-center justify-center p-10 rounded-[24px] font-[Comic_Sans_MS] flex-col'>
      {error && <p className="text-[#d06fa8] mb-5 text-2xl">{error}</p>}

      {userData && (
        <div className="bg-[#fff0f7] p-10 rounded-[24px] shadow-[0px_10px_20px_rgba(255,182,193,0.4)] text-center">
          <img src={userData.avatar_url} alt="Avatar" className="w-24 h-24 rounded-full mx-auto shadow-[0px_10px_20px_rgba(255,182,193,0.4)]" />
          <h2 className="text-xl font-bold mt-2">{userData.name || userData.login}</h2>
          <p>{userData.bio}</p>
          <p>👥 {userData.followers} seguidores</p>
          <p>📦 {userData.public_repos} repositórios públicos</p>
        </div>
      )}
    </div>
  );
}
