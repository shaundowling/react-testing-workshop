# React Testing Workshop

## Radge React Workshop Review App - Specification

### Workshop Details
- Displays a header with the workshop Title, Instructor Name, Average review score
- Displays the duration of the workshop in real time from when it started

### Reviews
- Displays a list of reviews fetched from local storage
- Each review displays reviewer name, review text and rating
- In order to remove reviews that don't fit with the instructors world view each review 
should be deletable

### New Review
- Displays a form with name, body, and rating
- rating accepts the number of slices between 0 - 6, 6 being a full pizza
- name must be more than 2 characters long if provided
- if no name is provided it should use 'anonymous'
- Since no one wants to read a novel the review body should be capped at 139
  characters

## Testing

#### `App`

- dependency is called correctly
- components interact correctly
- reviews are correctly persisted retrieved
- the rating logic works

#### `ReviewItem`

- displays the correct elements / sub components
- Is the callback invoked when the delete button is clicked

#### `ReviewList`

- renders the correct number of reviews based on props
- delete callback propagates with the correct values

#### `NewReview`

- form submits the correct data
- validation works correctly
- cannot be submitted with invalid data

#### `WorkshopDetails`

- displays the correct things
- calculates and displays the correct average rating

#### `DurationTimer`

- displays the correct thing based on the time (time stub)
- when active it updates every second

#### `Rating`

- displays the correct number
