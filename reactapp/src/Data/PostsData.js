import postpic1 from "../img/postpic1.jpg"
import postpic2 from "../img/postpic2.jpg"
import postpic3 from "../img/postpic3.JPG"

export const PostsData = [
    {
        "id": 9,
        "postId": 0,
        "title": "First Post",
        "content": "Here is first post of user1",
        "photoPath": postpic1,
        "createdAt": "2023-07-21",
        "updatedAt": "2023-07-21",
        "user": {
            "id": 1,
            "username": "user1",
            "password": "$2a$10$tYnVCHT4EG5TtoySrNGXDerB0hxLhPCkh07/PRADGrXg.5TCBWA1m",
            "email": "user1@gmai.com",
            "bio": "This is my profile",
            "dateOfBirth": "2001-01-01",
            "profilePhotoPath": postpic1,
            "coverPhotoPath": null,
            "registrationDate": "2023-07-20",
            "role": "USER",
            "enabled": true,
            "authorities": [
                {
                    "authority": "USER"
                }
            ],
            "accountNonLocked": true,
            "accountNonExpired": true,
            "credentialsNonExpired": true
        },
        "likedByUsers": [
            {
                "id": 1,
                "username": "user1",
                "password": "$2a$10$tYnVCHT4EG5TtoySrNGXDerB0hxLhPCkh07/PRADGrXg.5TCBWA1m",
                "email": "user1@gmai.com",
                "bio": "This is my profile",
                "dateOfBirth": "2001-01-01",
                "profilePhotoPath": null,
                "coverPhotoPath": null,
                "registrationDate": "2023-07-20",
                "role": "USER",
                "enabled": true,
                "authorities": [
                    {
                        "authority": "USER"
                    }
                ],
                "accountNonLocked": true,
                "accountNonExpired": true,
                "credentialsNonExpired": true
            },
            {
                "id": 2,
                "username": "user2",
                "password": "$2a$10$hk4YNmEoZwlmOUx8l6TIRuf0t6ULgSe5FkIqOD5uhBSoJ2KZbsQ82",
                "email": "user2@gmail.com",
                "bio": null,
                "dateOfBirth": "2002-02-02",
                "profilePhotoPath": null,
                "coverPhotoPath": null,
                "registrationDate": "2023-07-20",
                "role": "ADMIN",
                "enabled": true,
                "authorities": [
                    {
                        "authority": "ADMIN"
                    }
                ],
                "accountNonLocked": true,
                "accountNonExpired": true,
                "credentialsNonExpired": true
            }
        ]
    },
    {
        "id": 10,
        "postId": 0,
        "title": "Second Post",
        "content": "Here is second post of user1",
        "photoPath": null,
        "createdAt": "2023-07-21",
        "updatedAt": "2023-07-21",
        "user": {
            "id": 1,
            "username": "user1",
            "password": "$2a$10$tYnVCHT4EG5TtoySrNGXDerB0hxLhPCkh07/PRADGrXg.5TCBWA1m",
            "email": "user1@gmai.com",
            "bio": "This is my profile",
            "dateOfBirth": "2001-01-01",
            "profilePhotoPath": null,
            "coverPhotoPath": null,
            "registrationDate": "2023-07-20",
            "role": "USER",
            "enabled": true,
            "authorities": [
                {
                    "authority": "USER"
                }
            ],
            "accountNonLocked": true,
            "accountNonExpired": true,
            "credentialsNonExpired": true
        },
        "likedByUsers": [
            {
                "id": 1,
                "username": "user1",
                "password": "$2a$10$tYnVCHT4EG5TtoySrNGXDerB0hxLhPCkh07/PRADGrXg.5TCBWA1m",
                "email": "user1@gmai.com",
                "bio": "This is my profile",
                "dateOfBirth": "2001-01-01",
                "profilePhotoPath": null,
                "coverPhotoPath": null,
                "registrationDate": "2023-07-20",
                "role": "USER",
                "enabled": true,
                "authorities": [
                    {
                        "authority": "USER"
                    }
                ],
                "accountNonLocked": true,
                "accountNonExpired": true,
                "credentialsNonExpired": true
            }
        ]
    },
    {
        "id": 16,
        "postId": 0,
        "title": "First Post user3",
        "content": "Here is the first post of user3 with post photo",
        "photoPath": "src/main/resources/asset/postPhotos/post_0_1690049656263.jpg",
        "createdAt": "2023-07-22",
        "updatedAt": "2023-07-22",
        "user": {
            "id": 13,
            "username": "user3",
            "password": "$2a$10$hxao1f4Hj4wN0qkoaUg2UOr0Wtsvr8JitYVHVHA8K/rTLdEGMyrqW",
            "email": "user3@gmail.com",
            "bio": null,
            "dateOfBirth": "2003-03-03",
            "profilePhotoPath": null,
            "coverPhotoPath": null,
            "registrationDate": "2023-07-22",
            "role": "USER",
            "enabled": true,
            "authorities": [
                {
                    "authority": "USER"
                }
            ],
            "accountNonLocked": true,
            "accountNonExpired": true,
            "credentialsNonExpired": true
        },
        "likedByUsers": []
    },
    {
        "id": 17,
        "postId": 0,
        "title": "First Post user1",
        "content": "Here is the first post of user1 with post photo",
        "photoPath": "src/main/resources/asset/postPhotos/post_0_1690049853405.jpg",
        "createdAt": "2023-07-22",
        "updatedAt": "2023-07-22",
        "user": {
            "id": 1,
            "username": "user1",
            "password": "$2a$10$tYnVCHT4EG5TtoySrNGXDerB0hxLhPCkh07/PRADGrXg.5TCBWA1m",
            "email": "user1@gmai.com",
            "bio": "This is my profile",
            "dateOfBirth": "2001-01-01",
            "profilePhotoPath": null,
            "coverPhotoPath": null,
            "registrationDate": "2023-07-20",
            "role": "USER",
            "enabled": true,
            "authorities": [
                {
                    "authority": "USER"
                }
            ],
            "accountNonLocked": true,
            "accountNonExpired": true,
            "credentialsNonExpired": true
        },
        "likedByUsers": []
    },
    {
        "id": 18,
        "postId": 0,
        "title": "First Post user1",
        "content": "Here is the first post of user1 with post photo",
        "photoPath": "src/main/resources/asset/postPhotos/post_0_1690051786932.jpg",
        "createdAt": "2023-07-22",
        "updatedAt": "2023-07-22",
        "user": {
            "id": 1,
            "username": "user1",
            "password": "$2a$10$tYnVCHT4EG5TtoySrNGXDerB0hxLhPCkh07/PRADGrXg.5TCBWA1m",
            "email": "user1@gmai.com",
            "bio": "This is my profile",
            "dateOfBirth": "2001-01-01",
            "profilePhotoPath": null,
            "coverPhotoPath": null,
            "registrationDate": "2023-07-20",
            "role": "USER",
            "enabled": true,
            "authorities": [
                {
                    "authority": "USER"
                }
            ],
            "accountNonLocked": true,
            "accountNonExpired": true,
            "credentialsNonExpired": true
        },
        "likedByUsers": []
    },
    {
        "id": 19,
        "postId": 0,
        "title": "First Post user1",
        "content": "Here is the first post of user1 with post photo",
        "photoPath": "src/main/resources/asset/postPhotos/post_0_1690054487875.jpg",
        "createdAt": "2023-07-22",
        "updatedAt": "2023-07-22",
        "user": {
            "id": 1,
            "username": "user1",
            "password": "$2a$10$tYnVCHT4EG5TtoySrNGXDerB0hxLhPCkh07/PRADGrXg.5TCBWA1m",
            "email": "user1@gmai.com",
            "bio": "This is my profile",
            "dateOfBirth": "2001-01-01",
            "profilePhotoPath": null,
            "coverPhotoPath": null,
            "registrationDate": "2023-07-20",
            "role": "USER",
            "enabled": true,
            "authorities": [
                {
                    "authority": "USER"
                }
            ],
            "accountNonLocked": true,
            "accountNonExpired": true,
            "credentialsNonExpired": true
        },
        "likedByUsers": []
    },
    {
        "id": 25,
        "postId": 0,
        "title": "gdf",
        "content": "gfd",
        "photoPath": "src/main/resources/asset/postPhotos/post_0_1690358222469.jpg",
        "createdAt": "2023-07-26",
        "updatedAt": "2023-07-26",
        "user": {
            "id": 24,
            "username": "",
            "password": "$2a$10$KA1uW4TxJMocLHv5pYTz2O/g68QbD68vKG1TDhFDhRiuijBZjNj/2",
            "email": "",
            "bio": null,
            "dateOfBirth": "",
            "profilePhotoPath": null,
            "coverPhotoPath": null,
            "registrationDate": "2023-07-24",
            "role": "USER",
            "enabled": true,
            "authorities": [
                {
                    "authority": "USER"
                }
            ],
            "accountNonLocked": true,
            "accountNonExpired": true,
            "credentialsNonExpired": true
        },
        "likedByUsers": []
    },
    {
        "id": 26,
        "postId": 0,
        "title": "post",
        "content": "from frontend",
        "photoPath": "src/main/resources/asset/postPhotos/post_0_1690358368497.jpg",
        "createdAt": "2023-07-26",
        "updatedAt": "2023-07-26",
        "user": {
            "id": 24,
            "username": "",
            "password": "$2a$10$KA1uW4TxJMocLHv5pYTz2O/g68QbD68vKG1TDhFDhRiuijBZjNj/2",
            "email": "",
            "bio": null,
            "dateOfBirth": "",
            "profilePhotoPath": null,
            "coverPhotoPath": null,
            "registrationDate": "2023-07-24",
            "role": "USER",
            "enabled": true,
            "authorities": [
                {
                    "authority": "USER"
                }
            ],
            "accountNonLocked": true,
            "accountNonExpired": true,
            "credentialsNonExpired": true
        },
        "likedByUsers": []
    },
    {
        "id": 27,
        "postId": 0,
        "title": "post",
        "content": "from frontend",
        "photoPath": "src/main/resources/asset/postPhotos/post_0_1690358820207.jpg",
        "createdAt": "2023-07-26",
        "updatedAt": "2023-07-26",
        "user": {
            "id": 24,
            "username": "",
            "password": "$2a$10$KA1uW4TxJMocLHv5pYTz2O/g68QbD68vKG1TDhFDhRiuijBZjNj/2",
            "email": "",
            "bio": null,
            "dateOfBirth": "",
            "profilePhotoPath": null,
            "coverPhotoPath": null,
            "registrationDate": "2023-07-24",
            "role": "USER",
            "enabled": true,
            "authorities": [
                {
                    "authority": "USER"
                }
            ],
            "accountNonLocked": true,
            "accountNonExpired": true,
            "credentialsNonExpired": true
        },
        "likedByUsers": []
    },
    {
        "id": 28,
        "postId": 0,
        "title": "post \" \"",
        "content": "user1 upload image",
        "photoPath": "src/main/resources/asset/postPhotos/post_0_1690363329278.jpg",
        "createdAt": "2023-07-26",
        "updatedAt": "2023-07-26",
        "user": {
            "id": 24,
            "username": "",
            "password": "$2a$10$KA1uW4TxJMocLHv5pYTz2O/g68QbD68vKG1TDhFDhRiuijBZjNj/2",
            "email": "",
            "bio": null,
            "dateOfBirth": "",
            "profilePhotoPath": null,
            "coverPhotoPath": null,
            "registrationDate": "2023-07-24",
            "role": "USER",
            "enabled": true,
            "authorities": [
                {
                    "authority": "USER"
                }
            ],
            "accountNonLocked": true,
            "accountNonExpired": true,
            "credentialsNonExpired": true
        },
        "likedByUsers": []
    },
    {
        "id": 29,
        "postId": 0,
        "title": "post \" \"",
        "content": "user1 upload image",
        "photoPath": "src/main/resources/asset/postPhotos/post_0_1690363473161.jpg",
        "createdAt": "2023-07-26",
        "updatedAt": "2023-07-26",
        "user": {
            "id": 24,
            "username": "",
            "password": "$2a$10$KA1uW4TxJMocLHv5pYTz2O/g68QbD68vKG1TDhFDhRiuijBZjNj/2",
            "email": "",
            "bio": null,
            "dateOfBirth": "",
            "profilePhotoPath": null,
            "coverPhotoPath": null,
            "registrationDate": "2023-07-24",
            "role": "USER",
            "enabled": true,
            "authorities": [
                {
                    "authority": "USER"
                }
            ],
            "accountNonLocked": true,
            "accountNonExpired": true,
            "credentialsNonExpired": true
        },
        "likedByUsers": []
    },
    {
        "id": 30,
        "postId": 0,
        "title": "user \"\" ",
        "content": "local host post",
        "photoPath": "src/main/resources/asset/postPhotos/post_0_1690364799125.jpg",
        "createdAt": "2023-07-26",
        "updatedAt": "2023-07-26",
        "user": {
            "id": 24,
            "username": "",
            "password": "$2a$10$KA1uW4TxJMocLHv5pYTz2O/g68QbD68vKG1TDhFDhRiuijBZjNj/2",
            "email": "",
            "bio": null,
            "dateOfBirth": "",
            "profilePhotoPath": null,
            "coverPhotoPath": null,
            "registrationDate": "2023-07-24",
            "role": "USER",
            "enabled": true,
            "authorities": [
                {
                    "authority": "USER"
                }
            ],
            "accountNonLocked": true,
            "accountNonExpired": true,
            "credentialsNonExpired": true
        },
        "likedByUsers": []
    },
    {
        "id": 31,
        "postId": 0,
        "title": "user \"\" ",
        "content": "local host post",
        "photoPath": "src/main/resources/asset/postPhotos/post_0_1690364810260.jpg",
        "createdAt": "2023-07-26",
        "updatedAt": "2023-07-26",
        "user": {
            "id": 24,
            "username": "",
            "password": "$2a$10$KA1uW4TxJMocLHv5pYTz2O/g68QbD68vKG1TDhFDhRiuijBZjNj/2",
            "email": "",
            "bio": null,
            "dateOfBirth": "",
            "profilePhotoPath": null,
            "coverPhotoPath": null,
            "registrationDate": "2023-07-24",
            "role": "USER",
            "enabled": true,
            "authorities": [
                {
                    "authority": "USER"
                }
            ],
            "accountNonLocked": true,
            "accountNonExpired": true,
            "credentialsNonExpired": true
        },
        "likedByUsers": []
    },
    {
        "id": 32,
        "postId": 0,
        "title": "abc",
        "content": "post with reset",
        "photoPath": "src/main/resources/asset/postPhotos/post_0_1690365178506.jpg",
        "createdAt": "2023-07-26",
        "updatedAt": "2023-07-26",
        "user": {
            "id": 24,
            "username": "",
            "password": "$2a$10$KA1uW4TxJMocLHv5pYTz2O/g68QbD68vKG1TDhFDhRiuijBZjNj/2",
            "email": "",
            "bio": null,
            "dateOfBirth": "",
            "profilePhotoPath": null,
            "coverPhotoPath": null,
            "registrationDate": "2023-07-24",
            "role": "USER",
            "enabled": true,
            "authorities": [
                {
                    "authority": "USER"
                }
            ],
            "accountNonLocked": true,
            "accountNonExpired": true,
            "credentialsNonExpired": true
        },
        "likedByUsers": []
    }
]