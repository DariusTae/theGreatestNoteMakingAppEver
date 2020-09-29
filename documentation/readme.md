Funtappd is a replica of Untappd that will include features to create a user profile, find beers, read/write reviews for beers, include a feed for the reviews.

## Team Darius
> Darius Freeman: Project Manager, UX Dev. Lead, Backend Dev. Lead



## Features-List (MVP)
### Notes - Create, Read, Update, & Delete (CRUD)
- Collection of notes available for users to review.
- Notes will belong to a single user.
- As the notes owner I want to have a collection of notes(notebooks) with the ability to add, update, or delete them.
- Should be able to search notes based on date or key word(maybe).
- <b>Expected Completion Date:</b> Wednesday

### Check Notes, Update Notes, Delete Notes
- Ability to check notes, update notes, delete notes. Same with Notebooks.
- Users check-in
- As the user
- <b>Expected Completion Date:</b> Thursday

### Sign-up
- Users will have an opportunity to sign-up by creating an account gaining access to more site features.
- <b>Expected Completion Date:</b> Monday

### Sign-in
- Returning users may sign-into their accounts and resume rating, reviewing, and exploring beers and breweries.
- For security purposes, the site will automatically logout users when their timed session expires due to inactivity.
- As a customer I want the ability to sign-into my account if I'm ever logged out so that I can continue to gain access to site features.
- <b>Expected Completion Date:</b> Monday


# Routes/Endpoints
- GET `/` - Root page ('Wooonderous')
- GET `/api/session` - Login page
- POST `/api/users` - Create User
- POST `/api/session` - Login form submission
- POST `/api/notes` - Create Notes
- POST `/api/notebooks` - Create Notebooks
- PATCH `/api/notes/noteId` - Update notes
- GET `/api/users/:userId/notes` - List of notes user has created
- GET `/api/users/:userId/notebooks` - ':id' => notebooks page derived from user ID
# Bonus Features
- GET `/api/users/:userId` - User Profile/User Home Page(not sure about this un)
- PATCH `/api/users/:userId/settings` - Edit user profile
