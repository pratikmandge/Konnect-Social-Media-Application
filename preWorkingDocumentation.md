![image](https://github.com/pratikmandge/Social_Media_Application/assets/88229260/0b7532e1-1ab5-4c29-a5a9-1525a6d8ad53)



### Database Tables

**Plese add more tables as needed

List of the tables that may be required for a Social Media application and their corresponding columns:

### Users Table
- **id**: primary key for the user
- **username**: the user's username (unique)
- **email**: the user's email address (unique)
- **password**: the user's password
- **name**: the user's full name
- **bio**: the user's bio or profile description
- **profile_image**: the URL to the user's profile image
- **created_at**: the timestamp of when the user was created

### Posts Table
- **id**: primary key for the post
- **user_id**: foreign key referencing the user who created the post
- **image_url**: the URL to the image associated with the post
- **caption**: the text caption associated with the post
- **created_at**: the timestamp of when the post was created

### Comments Table
- **id**: primary key for the comment
- **user_id**: foreign key referencing the user who created the comment
- **post_id**: foreign key referencing the post that the comment is associated with
- **content**: the text content of the comment
- **created_at**: the timestamp of when the comment was created

### Likes Table
- **id**: primary key for the like
- **user_id**: foreign key referencing the user who liked the post/comment
- **post_id**: foreign key referencing the post that the like is associated with
- **comment_id**: foreign key referencing the comment that the like is associated with (nullable)
- **created_at**: the timestamp of when the like was created
    
### Follows Table
- **id**: primary key for the follow
- **follower_id**: foreign key referencing the user who is following
- **following_id**: foreign key referencing the user who is being followed
- **created_at**: the timestamp of when the follow was created

Each table should have a primary key column named `id` to uniquely identify each row. 
- **The `users` table should have a unique constraint on both the `username` and `email` columns to ensure that each user has a unique username and email address. 
- **The `posts` and `comments` tables should have foreign key constraints on their `user_id` columns to ensure that each post or comment is associated with a valid user. 
- **The `comments` table should also have a foreign key constraint on its `post_id` column to ensure that each comment is associated with a valid post. 
- **The `likes` table should have foreign key constraints on its `user_id`, `post_id`, and `comment_id` columns to ensure that each like is associated with valid users, posts, and comments. 
- **The `follows` table should have foreign key constraints on its `follower_id` and `following_id` columns to ensure that each follow is associated with valid users.
