var posts=["posts/51509cba.html","posts/f82d5031.html","posts/b6951580.html","posts/61467062.html","posts/2c58d330.html","posts/9b75ca55.html","posts/82a40561.html","posts/fed1faec.html","posts/ff2f24f1.html","posts/a2a881f3.html","posts/52bd0754.html","posts/d9da9cb3.html","posts/d50a.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};