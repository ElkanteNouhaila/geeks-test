import axios from 'axios';

export async function fetchPosts() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    response.data.forEach(post => {
      console.log(post.title);
    });
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}