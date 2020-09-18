&nbsp;

<div style="text-align:center"><img width="400" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/A24_logo.svg/1024px-A24_logo.svg.png" /></div>
&nbsp;

# A24 movies app

This challenge has 2 parts, one for javascript and one for WordPress

## Tasks

### 1. The react app

We started a React app and we'll need you to add some features for us.

First of all, you'll need an API key from The Movie DB. It's of course free to register and then you can find your API key here: https://www.themoviedb.org/settings/api

The app has 2 views:

1. Homepage
   1. show badge next to release date if the movie hasn't been released yet (hint: you can use the [Badge](https://chakra-ui.com/badge) from Chakra-ui). It can say something like "New" or "Unreleased" for example.
   2. The stars ratings are currently broken. All stars are filled with green color. In the code you'll see that they should be split in green and grey, depending on the score. There's a bug in that logic. Your task here is to fix that logic.
2. Movie single view
   1. display the release year next to the title.
   2. add the director (keep in mind that a movie can have multiple directors, like Uncut Gems for example)
   3. add list of Genres, don't need to be clickeable.
   4. List the first 5 top billed cast. You'll need the (ListItem component) from Chakra-ui.

### 2. The WordPress part

Create a WordPress plugin that loads your React app ONLY, in the homepage.
If you need a local WP, maybe try [LocalWP](https://localwp.com/), with it you can spin up a WP site in a couple of minutes.
The plugin doesn't need to have any admin interface once is active.
We know time is limited, so the filename of the React app can be hardcoded.

## Practicalities

When you're ready to work on the challenge, clone (and not fork) the repo.

When you're ready to submit your challenge, share the link to your repo with us.
If you prefer to keep it private, we will provide you with some emails to invite
to the repo.
For the WordPress plugin, you can include it on the same repo or you can zip it and send it by email (please exclude ignored files/directories like /node_modules).
If you have questiong regarding the file structure of the repo to host both parts of the challenge, feel free to ask :)

We're excited to have you take on this challenge and looking forward to seeing
your solution. Happy coding!

### [🚀 See our solution in action 🚀](https://airtame-movies-challenge.vercel.app/)

<hr>

## Available Scripts

## Develop

> You'll need [Node](https://nodejs.org/en/) and
> [Yarn](https://classic.yarnpkg.com/en/) installed

- run `yarn` to install dependencies
- run `yarn start` to start development environment

## Build

> You'll need [Node](https://nodejs.org/en/) and
> [Yarn](https://classic.yarnpkg.com/en/) installed

- run `yarn` to install dependencies
- run `yarn build` to start development environment
- output is in `build` directory,
  [ready to be deployed](https://create-react-app.dev/docs/deployment/)

## Data

All data is fetched from the Movie Database
[themoviedb.org](https://www.themoviedb.org/).

## Technologies

> This project was bootstrapped with
> [Create React App](https://github.com/facebook/create-react-app). You can
> learn more in the
> [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

- [React](https://reactjs.org/) - UI library
- [Chakra UI](https://chakra-ui.com/) - Design system and component library,
  with [Emotion](https://emotion.sh), its peer dependency
- [SWR](https://swr.now.sh/) - Data fetching and caching library
- [React Router v6](https://github.com/ReactTraining/react-router/blob/f59ee5488bc343cf3c957b7e0cc395ef5eb572d2/docs/installation/getting-started.md) -
  routing library
