# GitHub Fetcher
A simple web app to fetch git repos using GitHub api v3

## How it works
The client enters a term to search for and send a get request to the server. The server send an api request to GitHub apis. The server stores the returned list of repos in the memory(no database is used).

## Technologies 
- Nodejs/Express for the backend
- Reactjs for te frontend

## Installation
Inside repoFetch repo, run the following to install all dependencies:
```
npm install
```
## Run

```
node server.js
```
If it went well, you can find the app up and running at http://localhost:8000

## API Test
```
npm run test
```
## API methods:
API methods exist inside api in three files:
```
-----api
--------githubhelper.js
--------databookmark.js
--------jsonhelper.js
```

- fetchData() :runs an api using GitHub api to search based on a given term and return the repos that match the search( the default repos limit is 30).
- addBookmark(): add a bookmark on a given repo id.
- getAllBookmarks(): get all previous added bookmarks.
- removeBookmark(): remove a given bookmark by repo id.

## React Components
The frontend consists of a few pages(Home,login,bookmarks), I use react-route for transition between pages. For style, a plain css and flexbot were used.

The following are the main react components(note: I didn't use redux for state management).

- Home.jsx: the combine all components togather
- Repolist.jsx : an array of Repo components
- Repo.jsx : holds repo infomation
- Bookmarkedrepo.jsx : shows bookmarked repos
- Search.jsx: holds a search input element
