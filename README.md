# Goals

have a users table
  - username
  - email
  - password

have a items table
  - name
  - description
  - price

and users will vote on items in the items table

item_votes table that belongs to an item and a user

item_votes table
  - user_id
  - item_id
  - upvote : boolean
  - downvote : boolean
