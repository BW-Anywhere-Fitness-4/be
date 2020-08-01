Backend Project for Lambda School's Build Week, deployed Link is https://be-bw-anywherefitness.herokuapp.com/

**/--------------------------------------------/ AUTH ROUTES /-----------------------------------/**

**Register a User**
_method url_: `/api/auth/register`

_http method_: **[POST]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `Content-Type` | String | Yes      | Must be application/json |

#### Body

| name         | type    | required | description    |
| ------------ | ------- | -------- | -------------- |
| `first_name` | String  | Yes      | Must be unique |
| `last_name`  | String  | Yes      | Must be unique |
| `email`      | String  | Yes      | Must be unique |
| `username`   | String  | Yes      | Must be unique |
| `password`   | String  | Yes      | Must be unique |
| `role_id`    | integer | Yes      | Must be unique |

#### Example

```
{
    first_name: "user-01-first",
    last_name: "user-01-last",
    email: "user-01@test.com",
    username: "user-01",
    password: "password-04",
    role_id: 1
}
```

#### Response

##### 201 (Created)

###### Example Response

```
{
    "user_id": 18,
    "first_name": "test12",
    "last_name": "test32",
    "email": "ddfdfdf@test1.com",
    "username": "test125",
    "role": "instructor"
}
```

##### 409 (Conflict)

```
  {
    "message": "User is already taken!"
  }
```

**/----------------------------------------/**

### **Login a User**

_method url_: `/api/auth/login`

_http method_: **[POST]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `Content-Type` | String | Yes      | Must be application/json |

#### Body

| name       | type   | required | description             |
| ---------- | ------ | -------- | ----------------------- |
| `username` | String | Yes      | must be registered user |
| `password` | String | Yes      |                         |

#### Example

```
{
	"username": "test5",
	"password": "abcd1234"
}
```

#### Response

##### 200 (Ok)

> no issues logging in

###### Example response

```
{
  "message": "Welcome test5!"
}
```

##### 401 (UnAuthorized)

```
  {
    "You shall not pass!"
  }
```

##### 500 (Bad Request)

```
  {
    message: "Something went wrong",
    error: {
      "errno": 1,
      "code": "SOME_ERROR"
    }
  }
```

**/----------------------------------------/**

### \*\*Get users by id

_method url_: `/api/users/:id`

_http method_: **[GET]**

#### Response

##### 200 (Ok)

###### Example response

```
{
  "user_id": 5,
  "first_name": "user-05-first",
  "last_name": "user-05-last",
  "email": "user-05@test.com",
  "username": "test6",
  "role": "instructor"
}
```

##### 401 (UnAuthorized)

```
  {
    message: "shall not pass!"
  }
```

##### 500 (Bad Request)

```
  {
    message: "Failed to get the class"
  }
```

**/----------------------------------------/**

### \*\*Get users with the specified role

_method url_: `/api/users/roles/:role_id`

_http method_: **[GET]**

#### Response

##### 200 (Ok)

###### Example response

```
[
  {
    "user_id": 2,
    "first_name": "user-02-first",
    "last_name": "user-02-last",
    "email": "user-02@test.com",
    "username": "user-02",
    "role": "client"
  },
  {
    "user_id": 3,
    "first_name": "user-03-first",
    "last_name": "user-03-last",
    "email": "user-03@test.com",
    "username": "user-03",
    "role": "client"
  },
  {
    "user_id": 4,
    "first_name": "user-04-first",
    "last_name": "user-04-last",
    "email": "user-04@test.com",
    "username": "user-04",
    "role": "client"
  },
  {
    "user_id": 7,
    "first_name": "user-07-first",
    "last_name": "user-07-last",
    "email": "user-07@test.com",
    "username": "user-07",
    "role": "client"
  },
  {
    "user_id": 8,
    "first_name": "user-08-first",
    "last_name": "user-08-last",
    "email": "user-08@test.com",
    "username": "user-08",
    "role": "client"
  },
  {
    "user_id": 9,
    "first_name": "user-09-first",
    "last_name": "user-09-last",
    "email": "user-09@test.com",
    "username": "user-09",
    "role": "client"
  },
  {
    "user_id": 10,
    "first_name": "user-10-first",
    "last_name": "user-10-last",
    "email": "user-10@test.com",
    "username": "user-10",
    "role": "client"
  },
  {
    "user_id": 11,
    "first_name": "user-11-first",
    "last_name": "user-11-last",
    "email": "user-11@test.com",
    "username": "user-11",
    "role": "client"
  },
  {
    "user_id": 12,
    "first_name": "user-12-first",
    "last_name": "user-12-last",
    "email": "user-12@test.com",
    "username": "user-12",
    "role": "client"
  },
  {
    "user_id": 14,
    "first_name": "user-14-first",
    "last_name": "user-14-last",
    "email": "user-14@test.com",
    "username": "user-14",
    "role": "client"
  },
  {
    "user_id": 15,
    "first_name": "user-15-first",
    "last_name": "user-15-last",
    "email": "user-15@test.com",
    "username": "user-15",
    "role": "client"
  }
]
```

##### 401 (UnAuthorized)

```
  {
    message: "shall not pass!"
  }
```

##### 500 (Bad Request)

```
  {
    message: "Failed to get the user"
  }
```

**/----------------------------------------/**

### **Modify a Single User**

_method url_: `/api/users/:id`

_http method_: **[PUT]**

#### Body

Any of the following

| name       | type    | required | description |
| ---------- | ------- | -------- | ----------- |
| `username` | String  | Yes      |             |
| `password` | Integer | Yes      |             |

#### Example

```
{
    "user_id": 5,
    "first_name": "user-05-first",
    "last_name": "user-05-last",
    "email": "user-05@test.com",
    "username": "test6",
    "role": "instructor"
}

```

#### Response

##### 200 (Ok)

##### 401 (UnAuthorized)

```
  {
    message: "shall not pass!"
  }

```

##### 400 (Bad Request)

Body was empty

```
  {
    message: "Please provide all the required material."
  }

```

##### 500 (Bad Request)

```
{
    message: "Failed to update the user",
}

```

**/----------------------------------------/**

### **Delete a User**

_method url_: `/api/users/:id`

_http method_: **[DELETE]**

#### Response

##### 200 (Ok)

###### Example response

```
{
    message: "User is deleted!
}

```

##### 500 (Bad Request)

```
{
    message: "Failed to delete the user",
}

```

**/--------------------------------------------/ Classes ROUTES /-----------------------------------/**

### **Get all Classes**

_method url_: `/api/classes`

_http method_: **[GET]**

#### Headers

| name            | type   | required | description                    |
| --------------- | ------ | -------- | ------------------------------ |
| `Authorization` | String | Yes      | Authorization token from login |

#### Response

##### 200 (Ok)

###### Example response

```
[
  {
    "class_id": 1,
    "class_name": "Jogging",
    "instructor_id": 1,
    "instructor_username": "user-01",
    "type": "aerobic",
    "class_date": "2020-07-25",
    "class_time": "09:00:00",
    "duration": 45,
    "intensity": "moderate",
    "location": "track",
    "number_of_attendees": 5,
    "max_class_size": 10
  },
  {
    "class_id": 2,
    "class_name": "Weight Training 101",
    "instructor_id": 5,
    "instructor_username": "test6",
    "type": "strength",
    "class_date": "2020-07-26",
    "class_time": "11:00:00",
    "duration": 40,
    "intensity": "low",
    "location": "weight room 2a",
    "number_of_attendees": 4,
    "max_class_size": 5
  },
  {
    "class_id": 3,
    "class_name": "Swimming 101",
    "instructor_id": 6,
    "instructor_username": "user-06",
    "type": "aerobic",
    "class_date": "2020-07-29",
    "class_time": "15:30:00",
    "duration": 45,
    "intensity": "moderate",
    "location": "pool",
    "number_of_attendees": 5,
    "max_class_size": 10
  },
  {
    "class_id": 5,
    "class_name": "Weight Training 4",
    "instructor_id": 5,
    "instructor_username": "test6",
    "type": "flexibility",
    "class_date": "2020-07-26",
    "class_time": "11:00:00",
    "duration": 40,
    "intensity": "low",
    "location": "weight room 2a",
    "number_of_attendees": 4,
    "max_class_size": 5
  },
  {
    "class_id": 6,
    "class_name": "Running 101",
    "instructor_id": 1,
    "instructor_username": "user-01",
    "type": "aerobic",
    "class_date": "2020-08-07",
    "class_time": "10:00:00",
    "duration": 30,
    "intensity": "high",
    "location": "track",
    "number_of_attendees": 5,
    "max_class_size": 10
  }
]
```

##### 401 (UnAuthorized)

```
  {
    message: "shall not pass!"
  }
```

##### 500 (Bad Request)

```
  {
    message: "Something went wrong",
    error: {
      "errno": 1,
      "code": "SOME_ERROR"
    }
  }
```

**/----------------------------------------/**

### **Get a single Class**

_method url_: `/api/classes/:id`

_http method_: **[GET]**

#### Response

##### 200 (Ok)

###### Example response

```
{
  "class_id": 1,
  "class_name": "Jogging",
  "instructor_id": 1,
  "instructor_username": "user-01",
  "type": "aerobic",
  "class_date": "2020-07-25",
  "class_time": "09:00:00",
  "duration": 45,
  "intensity": "moderate",
  "location": "track",
  "number_of_attendees": 5,
  "max_class_size": 10
}
```

##### 401 (UnAuthorized)

```
  {
    message: "shall not pass!"
  }
```

##### 500 (Bad Request)

```
  {
    message: "Failed to get the class"
  }
```

**/----------------------------------------/**

### **Add a New Class**

_method url_: `/api/classes`

_http method_: **[POST]**

#### Body

| name                  | type    | required | description |
| --------------------- | ------- | -------- | ----------- |
| `class_name`          | String  | Yes      |             |
| `instructor_id`       | Integer | Yes      |             |
| `class_date`          | Integer | Yes      |             |
| `class_time`          | Integer | Yes      |             |
| `duration`            | Integer | Yes      |             |
| `intensity`           | String  | Yes      |             |
| `location`            | String  | Yes      |             |
| `number_of_attendees` | Integer | Yes      |             |
| `max_class_size`      | Integer | Yes      |             |

#### Example

```
{
    "class_name": "Weight Training 453",
    "instructor_id": 5,
    "class_date": "2020-07-26",
    "class_time": "11:00:00",
    "duration": 40,
    "intensity": "low",
    "location": "weight room 2a",
    "number_of_attendees": 4,
    "max_class_size": 5
}
```

#### Response

##### 200 (Ok)

##### 401 (UnAuthorized)

```
  {
    message: "shall not pass!"
  }
```

##### 400 (Bad Request)

Body was empty

```
  {
    message: "Please provide all the required materials."
  }
```

##### 500 (Bad Request)

```
{
    message: "Failed to add the class",
}

```

**/----------------------------------------/**

### **Modify a Single Class**

_method url_: `/api/classes/:id`

_http method_: **[PUT]**

#### Body

Any of the following

| name                  | type    | required | description |
| --------------------- | ------- | -------- | ----------- |
| `class_name`          | String  | Yes      |             |
| `instructor_id`       | Integer | Yes      |             |
| `class_date`          | Integer | Yes      |             |
| `class_time`          | Integer | Yes      |             |
| `duration`            | Integer | Yes      |             |
| `intensity`           | String  | Yes      |             |
| `location`            | String  | Yes      |             |
| `number_of_attendees` | Integer | Yes      |             |
| `max_class_size`      | Integer | Yes      |             |

#### Example

```
{
    "class_id": 5,
    "class_name": "Weight Training 4",
    "instructor_id": 5,
    "instructor_username": "test6",
    "type": "flexibility",
    "class_date": "2020-07-26",
    "class_time": "11:00:00",
    "duration": 40,
    "intensity": "low",
    "location": "weight room 2a",
    "number_of_attendees": 4,
    "max_class_size": 5
}

```

#### Response

##### 200 (Ok)

##### 401 (UnAuthorized)

```
  {
    message: "shall not pass!"
  }

```

##### 400 (Bad Request)

Body was empty

```
  {
    message: "Please provide all the required material."
  }

```

##### 500 (Bad Request)

```
{
    message: "Failed to update the class",
}

```

**/----------------------------------------/**

### **Delete a Class**

_method url_: `/api/classes/:id`

_http method_: **[DELETE]**

#### Response

##### 200 (Ok)

###### Example response

```
{
    message: "removed": 1
}

```

##### 500 (Bad Request)

```
{
    message: "Failed to delete the class.",
}

```
