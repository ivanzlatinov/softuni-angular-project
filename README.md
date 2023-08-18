# Travel Blog project made by Ivan Zlatinov



## Available Scripts

In the project directory, you can open 2 terminals and run :

### `cd travel-blog to open client folder than type ng s`

Runs the app in the development mode.

### `cd server to open server folder than type npm start `

Runs the server to be used for data fetching.

## Description

This app is designed to resemble a travel blog. The users are able to create posts, and  view others' posts or edit/delete their own posts.

## Guests

The guests of this page are able to look at the catalog but not the details and reach pages such as home, about us, login and register 

### Home
Button leading to catalog and page, beneath there are recent posts section with posts containing details button ,but there has to be a logged in user to access them 

### Details

Preview the selected post destination, cost, description and duration of the trip 

### Register and Login

In order for the guests to be able to successfully register and/or log in, they are required to fill in a valid email, username wiht atleast 5 characters and a password, consisting of at least 5 characters.

## Users

The logged-in users can add new posts, which they can also edit or delete. 


### Create

The users are able to create new posts, containing title, cost, image link, duration of the  trip  and description. All the inputs have validation which have to be met.

### Edit

Users can edit their own posts which also have validation

### My posts

Users can see their own posts