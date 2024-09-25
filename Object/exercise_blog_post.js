function Blog(title, author, views, comments, live) {
    this.title = title;
    this.author = author;
    this.views = views;
    this.comments = {
        author: comments.author,
        body: comments.body
    };
    this.isLive = live;
}


const newBlog = new Blog('A', 'B', 34.9, { author: "XYZ", body: "Nice blog" }, false);

console.log(newBlog)