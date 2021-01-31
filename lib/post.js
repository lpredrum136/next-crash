import axios from 'axios'

export const getPosts = async limit => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    )
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const getPostIds = async pathLimit => {
  try {
    const posts = await getPosts(pathLimit)

    // Returns an array that looks like this. Each element must be an object with 'params' key and object with 'id' key
    // to match [id].js
    // [
    //   {
    //     params: {
    //       id: 'post id 1'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'post id 2'
    //     }
    //   }
    // ]

    // or you can return
    // return posts.map(post => `/posts/${post.id}`)

    return posts.map(post => ({
      params: {
        id: `${post.id}` // must be string
      }
    }))
  } catch (error) {
    console.log(error)
  }
}

export const getPostById = async id => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    )
    return response.data
  } catch (error) {
    console.log(error)
  }
}
