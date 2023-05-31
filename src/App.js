import React from 'react';
import  Anime from "./img/Anime Wallpapers.jpg"
import Gif from "./img/jett-dif-jett.gif"
import micro from "./img/mirco-cabbia.jpg"
import {useState} from 'react';
import './App.css';
function App() {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const [comments, setComments] = useState([
    'Ir para codigos      .',
    'Ir para feed back      .',
    'Ir para minhas artes      .',
  ]);

  const handleRemoveComment = (index) => {
    setComments((prevComments) => {
      const updatedComments = [...prevComments];
      updatedComments.splice(index, 1);
      return updatedComments;
    });
  };
  const styles = {
    container: {
      textAlign: 'center',
      marginTop: '100px',
    },
    heading: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    paragraph: {
      fontSize: '18px',
    },
  };
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPost.trim() !== '') {
      const post = {
        id: Date.now(),
        content: newPost,
      };
      setPosts((prevPosts) => [...prevPosts, post]);
      setNewPost('');
    }
  };

  const handlePostChange = (e) => {
    setNewPost(e.target.value);
  };

  const handleDeletePost = (postId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };


  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Minha Página </h1>
      <img src={Gif} alt='imagem do fundo' title='imagem anime'/>
      <div
    className="container"
    style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
    }}
  />
    <h1>Posts</h1>
    <img src={micro} alt="imagem" title='imagem anime'style={{ width: '1890px', height: '100vh', background: 'cover'}}/> 
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -200%)', color: 'red', fontSize: '100px', fontWeight: 'bold' }}>
        Bem-vindo, fico feliz em te ve no meu site 😄
    </div>
      <div style={{ position: 'relative', textAlign: 'center' }}>
      <img src={Anime} alt='imagem do fundo' title='imagem anime'style={{ width: '1890px', height: '100vh', background: 'cover'}}/>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -200%)', color: 'red', fontSize: '100px', fontWeight: 'bold' }}>
        Bem-Vindos 
           Ao 
        dark code
        </div>
        <div>
      <h1>Posts</h1>
      <form onSubmit={handlePostSubmit}>
        <textarea
          value={newPost}
          onChange={handlePostChange}
          placeholder="Digite seu post..."
          rows={4}
        />
        <button type="submit">Postar</button>
      </form>
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.content}</p>
          <button onClick={() => handleDeletePost(post.id)}>Deletar</button>
          <hr />
        </div>
      ))}
      </div>
        <div>
        {Array.from({ length: 5 }, (_, index) => (
          <span
            key={index}
            style={{ color: rating >= index + 1 ? 'gold' : 'gray' }}
            onClick={() => setRating(index + 1)}
          >
            ❤️
          </span>
        ))}
      </div>
      <select value={rating} onChange={handleRatingChange}>
        <option value={0}>Selecione uma classificação</option>
        {Array.from({ length: 5 }, (_, index) => (
          <option key={index} value={index + 1}>
            {index + 1} estrela{index !== 0 ? 's' : ''}
          </option>
        ))}
      </select>
      </div>
      
      
      {comments.map((comment, index) => (
        <div key={index} style={{ margin: '10px', padding: '10px', display: 'flex', justifyContent: 'flex-end'}}>
          <span>{comment}</span>
          <button onClick={() => handleRemoveComment(index)}>❌</button>
        </div>
      ))}
    </div>
  );
}

export default App;