import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import EditPost from './EditPost';
import About from './About';
import Missing from './Missing';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import api from './api/posts';
import useWindowSize from './hooks/useWindowSize';
import useAxiosFetch from './hooks/useAxiosFetch';

function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postBody, setPostBody] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [editBody, setEditBody] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const history = useHistory();
  const { width } = useWindowSize();
  const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts')
  
  
  useEffect(() => {
    const filteredResults = posts.filter(post => (
      (post.title).toLowerCase().includes(search.toLowerCase())
      || (post.body).toLowerCase().includes(search.toLowerCase())
    ));

    setSearchResults(filteredResults.reverse());
  }, [posts, search]);

  useEffect(() => {
    setPosts(data);
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length -1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = {id, title: postTitle, datetime, body: postBody};
    try {
      const response = await api.post('/posts', newPost);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle('');
      setPostBody('');
      history.push('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const postsList = posts.filter(post => post.id !== id);
      setPosts(postsList);
      history.push('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
      
    }
  }

  const handleEdit = async (id) => {
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatedPost = {id, title: editTitle, datetime, body: editBody};
    try {
       const response = await api.put(`/posts/${id}`, updatedPost);
       setPosts(posts.map(post => post.id === id ? { ...response.data } : post));
       setEditTitle('');
       setEditBody('');
       history.push('/');
    } catch (err) {
      console.log(`Error: ${err.message}`); 
    }
  }

  return (
    <div className="App">
      <Header title="React JS Blog" width={width}/>
      <Nav search={search} setSearch={setSearch} />
      <Switch>
        <Route exact path='/'>
          <Home posts={searchResults} isLoading={isLoading} fetchError={fetchError}/>
        </Route>
        <Route exact path='/post'>
          <NewPost 
            handleSubmit={handleSubmit}
            postBody={postBody}
            setPostBody={setPostBody}
            postTitle={postTitle}
            setPostTitle={setPostTitle}
          />
        </Route>
        <Route exact path='/edit/:id'>
          <EditPost
            posts={posts} 
            handleEdit={handleEdit}
            editBody={editBody}
            setEditBody={setEditBody}
            editTitle={editTitle}
            setEditTitle={setEditTitle}
          />
        </Route>
        <Route path='/post/:id'>
          <PostPage posts={posts} handleDelete={handleDelete}/>
        </Route>
        <Route path='/about' component={About} />
        <Route path='*' component={Missing} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
