const dummyData = {
    currentUser: {
      id: 1,
      name: "John Doe",
      avatar: "https://via.placeholder.com/100",
      email: "johndoe@example.com",
      blogs: [
        { id: 1, title: "My First Blog", content: "This is the content of my first blog." },
        { id: 2, title: "Learning React", content: "React is a powerful library for building UIs." },
      ],
    },
    blogs: [
      {
        id: 1,
        title: "Exploring JavaScript",
        image: "https://via.placeholder.com/600x400",
        content: "JavaScript is the backbone of modern web development.",
        author: "Jane Smith",
        avatar: "https://via.placeholder.com/50",
        likes: 120,
        comments: [
          { user: "John Doe", text: "Great blog post!" },
          { user: "Alice", text: "Very informative." },
        ],
      },
      {
        id: 2,
        title: "CSS Grid vs Flexbox",
        image: "https://via.placeholder.com/600x400",
        content: "Choosing the right layout system can be tricky.",
        author: "John Doe",
        avatar: "https://via.placeholder.com/50",
        likes: 85,
        comments: [
          { user: "Jane Smith", text: "Thanks for clarifying this!" },
          { user: "Mark", text: "I always struggle with this." },
        ],
      },
    ],
  };
  
  export default dummyData;
  