var posts=["posts/51509cba.html","posts/f82d5031.html","posts/61467062.html","posts/b6951580.html","posts/2c58d330.html","posts/9b75ca55.html","posts/82a40561.html","posts/92cffa3e.html","posts/b2b2e9b9.html","posts/69c8e57d.html","posts/59de09a5.html","posts/fed1faec.html","posts/ff2f24f1.html","posts/d9da9cb3.html","posts/d50a.html","posts/a2a881f3.html","posts/52bd0754.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};