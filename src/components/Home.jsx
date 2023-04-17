import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="animate-charcter">Welcome to our Blog Site!</h3>
          <hr />
          <p className="animate-charcter">This is a community blog site where anyone can write about their experiences and thoughts.</p>
          <hr />
          <p className="animate-charcter">Feel free to browse through the posts and leave a comment!</p>
          <hr />
        </div>
        </div>
  
      <div className="card">
        <img src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/09/how-to-write-a-blog-post.png" alt="Blog post" />
      </div>
      <div className="card">
        <img src="https://media.sproutsocial.com/uploads/2019/09/how-to-write-a-blog-post.svg" alt="Blog post" />
      </div>
      <div className="card">
        <img src="https://wordtracker-swoop-uploads.s3.amazonaws.com/uploads/ckeditor/pictures/1247/content_wordtracker_blog_article_image.jpg" alt="Blog post" />
      </div>
    </div>
  );
};

export default Home;
