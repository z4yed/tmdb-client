# The Movie Central : Release_v1

## Live Link

- https://tmdb-client.vercel.app

## Requirements

- https://soapy-anteater-e7d.notion.site/VueJS-Developer-b967aadd8c4149f194a3025857d01bfa

## Tools and Packages used

- Vue JS v3.
- Composition API.
- Vue router v4.
- Swiper JS for showing carousel.
- Axios for calling all the APIs.
- SCSS for styling.
- Vercel for free hosting.

## Features and functionalities

- APIs that are integrated are totally on `TV Series` instead of `Movies`.
- Pixel perfect designs from birds eye view.
- Google Authentication
- Global state management using `Vuex` library.
- Usage of `localstorage` to store authenticated user info.
- Not diplaying Watchlist and Liked series slider in the home page for unauthenticated users.
- Authenticated users can mark series to `Watchlist` or `Liked List` and this options are not available to the guest users.
- `Watchlist` and `Liked List` are synced on the `TMDB` database instantly. Upon page refresh the data remains updated.

## Best practice followed

- Creating and using `Reusable` components.
- BEM naming convension for class names.
- Using `.env` to keep secret values.
- Separate constant file to manage constant values.

## Known issues and future works

- Making it responsive for mobile and tablets.
- Search functionality once the design is given.
- Making `Vuex` modular instead of writing all login in a single file.
- Browser compatibility is not tested hence some of the css might get broken in some browser.
- There are some hardcoded values that can be moved in a constant file.

## List of APIs integrated from TMDB

API Reference URLs:

- https://developer.themoviedb.org/reference/trending-tv
- https://developer.themoviedb.org/reference/genre-tv-list
- https://developer.themoviedb.org/reference/tv-series-airing-today-list
- https://developer.themoviedb.org/reference/tv-series-popular-list
- https://developer.themoviedb.org/reference/tv-series-top-rated-list
- https://developer.themoviedb.org/reference/tv-series-details
- https://developer.themoviedb.org/reference/tv-series-similar
- https://developer.themoviedb.org/reference/account-add-favorite
- https://developer.themoviedb.org/reference/account-add-to-watchlist

## Risk factors

- All the API calls is done from `my own tmdb user account` programmatically using the `access token` that is given by `tmdb`. Hense exposing the site to public is might be a risk for my account.

--
&copy; [Md Zayed Hassan](https://z4yed.netlify.app)
