var posts=["posts/f82d5031.html","posts/2c58d330.html","posts/fed1faec.html","posts/61467062.html","posts/ff2f24f1.html","posts/b6951580.html","posts/d9da9cb3.html","posts/d50a.html","posts/a2a881f3.html","posts/52bd0754.html","posts/51509cba.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};