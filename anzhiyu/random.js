var posts=["posts/61467062.html","posts/fed1faec.html","posts/ff2f24f1.html","posts/f82d5031.html","posts/a2a881f3.html","posts/d9da9cb3.html","posts/51509cba.html","posts/52bd0754.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};