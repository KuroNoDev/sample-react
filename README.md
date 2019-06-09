This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

Technologies used: `React`, `Redux`, `Typescript`

https://jsonplaceholder.typicode.com/ is used for mockup requests

# Pages

## Posts

Endpoints used:
* https://jsonplaceholder.typicode.com/posts - Get all posts

Redux:
* Post `visited` state and number of `comments` are updated whenever a post is clicked

## Post

Endpoints used:
* https://jsonplaceholder.typicode.com/posts/`postId` - Get post
* https://jsonplaceholder.typicode.com/comments?postId=`postId` - Get all comments of post

Redux:
* Post `visited` state and number of `comments` are updated whenever a post is visited

## Albums

Endpoints used:
* https://jsonplaceholder.typicode.com/albums - Get all albums
* https://jsonplaceholder.typicode.com/photos?albumId=`albumId` - Get photos of an album

Redux:
* Album's `photos` property is updated for every successful `/photos` request