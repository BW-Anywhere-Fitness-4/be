Secret Family Recipes
Backend Project for Lambda School's Build Week, deployed Link is https://back-end-build-weeks.herokuapp.com/

/--------------------------------------------/ AUTH ROUTES /-----------------------------------/

Register a User method url: /api/users/register

http method: [POST]

Headers
name	type	required	description
Content-Type	String	Yes	Must be application/json
Body
name	type	required	description
first_name  String	Yes	Must be unique
last_name   String	Yes	Must be unique
username	String	Yes	Must be unique
email	    String	Yes	Must be unique
password	String	Yes	Must be unique
role_id     Integer Yes Must be unique
Example
{
    
    first_name: "user-01-first",
    last_name: "user-01-last",
    email: "user-01@test.com",
    username: "user-01",
    password: bcrypt.hashSync("password-01", 14),
    role_id: 1
}
Response
201 (Created)
Example Response
{
  "id": 3,
  "username": "samim2020",
  "email": "samim2020@gmail.com",
  "password": "$2a$16$JHcX.XNj8bppwVij5ypXTunk/MR2qTRNXQ43IuRBt/JjlGOEbOCxe"
}
409 (Conflict)
  {
    "message": "User is already taken!"
  }
/----------------------------------------/

Login a User
method url: /api/auth/login

http method: [POST]

Headers
name	type	required	description
Content-Type	String	Yes	Must be application/json
Body
name	type	required	description
username	String	Yes	must be registered user
password	String	Yes	
Example
{
	"username": "samim2020",
	"password": "samim2020"
}
Response
200 (Ok)
no issues logging in

Example response
{
  "message": "You logged in successfuly!"
}
401 (UnAuthorized)
  {
    message: "Invalid credentials"
  }
500 (Bad Request)
  {
    message: "Error logging in",
    error: {
      "errno": 1,
      "code": "SOME_ERROR"
    }
  }
/--------------------------------------------/ Recipes ROUTES /-----------------------------------/

Get all Recipes
method url: /api/recipes

http method: [GET]

Headers
name	type	required	description
Authorization	String	Yes	Authorization token from login
Response
200 (Ok)
Example response
[
  {
    "id": 1,
    "title": "Beet Hummus",
    "ingredients": "2, 15 oz. cans of chickpeas / 1, 15 oz. can cut or whole beets, drained (about 8.5 oz) / ½ Cup fresh lemon juice (about 2 ½ lemons) / 2 small garlic cloves, minced / 3 Tbsp. tahini paste / Salt, to taste / Olive oil, to drizzle / Cumin, to garnish",
    "instructions": "1 - Strain one can of chickpeas and set aside. 2 - Combine half of the first can of drained chickpeas with the whole second can, and warm in their liquid in a small saucepan. Once they come to a gentle simmer, strain out the chickpea juice and blend in a food processor while still warm into a fine purée. 3 - Add in the beets and continue to blend until smooth. 4 - Next, add the tahini, followed by the garlic, lemon juice, and salt. Pulse again until combined. Taste and season with more salt if needed. 5 - Serve garnished with the rest of the chickpeas, a drizzle of olive oil, and a sprinkle of cumin if desired.",
    "source": "fruitsandveggies.org",
    "category": "Veggies",
    "photo": "https://fruitsandveggies.org/wp-content/uploads/2018/12/beet-hummus-thumb-800x267.jpg"
  },
  {
    "id": 2,
    "title": "Quinoa Salad with Corn and Peas",
    "ingredients": "1 cup uncooked quinoa / 2 cups water / 1 can (15 oz.) Libby’s® Whole Kernel Sweet Corn, drained / 1 can (15 oz.) Libby’s® Sweet Peas, drained / 1⁄2 cup diced red onion / 2 large tomatoes, seeded and diced / 4 oz. fresh mozzarella, diced / 1⁄8 cup chopped fresh parsley / 1 Tbsp lemon juice / 2 Tbsp olive oil",
    "instructions": "Add quinoa and water to medium pot and bring it to a boil. Cover, then reduce heat to simmer and cook 15 minutes. Remove from heat and let sit covered for 5 minutes. Place into large bowl and fluff with fork. Let cool. ThenAdd corn, peas, onions, tomato, cheese, parsley, lime juice and olive oil. Gently toss mixture until combined.",
    "source": "fruitsandveggies.org",
    "category": "Veggies",
    "photo": "https://fruitsandveggies.org/wp-content/uploads/2019/02/Quinoa%20Salad%20with%20Libbys%20Corn%20and%20Peas%20small-277x218.jpg"
  },
]
401 (UnAuthorized)
  {
    message: "shall not pass!"
  }
500 (Bad Request)
  {
    message: "Error logging in",
    error: {
      "errno": 1,
      "code": "SOME_ERROR"
    }
  }
/----------------------------------------/

Get a single Recipe
method url: /api/recipes/:id

http method: [GET]

Response
200 (Ok)
Example response
{
  "id": 2,
  "title": "Quinoa Salad with Corn and Peas",
  "ingredients": "1 cup uncooked quinoa / 2 cups water / 1 can (15 oz.) Libby’s® Whole Kernel Sweet Corn, drained / 1 can (15 oz.) Libby’s® Sweet Peas, drained / 1⁄2 cup diced red onion / 2 large tomatoes, seeded and diced / 4 oz. fresh mozzarella, diced / 1⁄8 cup chopped fresh parsley / 1 Tbsp lemon juice / 2 Tbsp olive oil",
  "instructions": "Add quinoa and water to medium pot and bring it to a boil. Cover, then reduce heat to simmer and cook 15 minutes. Remove from heat and let sit covered for 5 minutes. Place into large bowl and fluff with fork. Let cool. ThenAdd corn, peas, onions, tomato, cheese, parsley, lime juice and olive oil. Gently toss mixture until combined.",
  "source": "fruitsandveggies.org",
  "category": "Veggies",
  "photo": "https://fruitsandveggies.org/wp-content/uploads/2019/02/Quinoa%20Salad%20with%20Libbys%20Corn%20and%20Peas%20small-277x218.jpg"
}
401 (UnAuthorized)
  {
    message: "shall not pass!"
  }
500 (Bad Request)
  {
    message: "Failed to get the recipe"
  }
/----------------------------------------/

Add a New Recipe
method url: /api/recipes

http method: [POST]

Body
name	type	required	description
title	String	Yes	
ingredients	String	Yes	
instructions	String	Yes	
source	String	Yes	
category	String	Yes	
photo	String	Yes	
Example
{
  "title": "Pumpkin Overnight Oats",
	"ingredients": "½ cup oats, dry / ½ cup canned pumpkin / 3 TBSP orange juice / ½ teaspoon pumpkin pie spice / 2 teaspoons maple syrup / 1 TBSP dried cranberries / 1 TBSP pecans, chopped",
  "instructions": "1 - Mix together oats, pumpkin, orange juice, spice, and maple syrup. 2 - Place in the refrigerator in a covered container and let sit overnight or for a few hours. When ready to eat, top with cranberries and pecans.",
	  "source": "fruitsandveggies.org",
    "category": "Veggies",
  "photo": "https://fruitsandveggies.org/wp-content/uploads/2019/10/leslie-Pumpkin-Overnight-Oats-sized-for-banner-1440x480.jpg"
}
Response
200 (Ok)
Example response
{
  "id": 4,
  "title": "Pumpkin Overnight Oats",
  "ingredients": "½ cup oats, dry / ½ cup canned pumpkin / 3 TBSP orange juice / ½ teaspoon pumpkin pie spice / 2 teaspoons maple syrup / 1 TBSP dried cranberries / 1 TBSP pecans, chopped",
  "instructions": "1 - Mix together oats, pumpkin, orange juice, spice, and maple syrup. 2 - Place in the refrigerator in a covered container and let sit overnight or for a few hours. When ready to eat, top with cranberries and pecans.",
  "source": "fruitsandveggies.org",
  "category": "Veggies",
  "photo": "https://fruitsandveggies.org/wp-content/uploads/2019/10/leslie-Pumpkin-Overnight-Oats-sized-for-banner-1440x480.jpg"
}
401 (UnAuthorized)
  {
    message: "shall not pass!"
  }
400 (Bad Request)
Body was empty

  {
    message: "Please provide title, instructions, ingredients and photo for the post."
  }
500 (Bad Request)
{
    message: "Failed to add the recipe",
}

/----------------------------------------/

Modify a Single Recipe
method url: /api/recipes/:id

http method: [PUT]

Body
Any of the following

name	type	required	description
title	String	Yes	
ingredients	String	Yes	
instructions	String	Yes	
source	String	Yes	
category	String	Yes	
photo	String	Yes	
Example
{
  "title": "Pumpkin Overnight Oats",
	"ingredients": "½ cup oats, dry / ½ cup canned pumpkin / 3 TBSP orange juice / ½ teaspoon pumpkin pie spice / 2 teaspoons maple syrup / 1 TBSP dried cranberries / 1 TBSP pecans, chopped",
  "instructions": "1 - Mix together oats, pumpkin, orange juice, spice, and maple syrup. 2 - Place in the refrigerator in a covered container and let sit overnight or for a few hours. When ready to eat, top with cranberries and pecans.",
	  "source": "fruitsandveggies.org",
    "category": "Veggies",
  "photo": "https://fruitsandveggies.org/wp-content/uploads/2019/10/leslie-Pumpkin-Overnight-Oats-sized-for-banner-1440x480.jpg"
}

Response
200 (Ok)
Example response
{
  "id": 4,
  "title": "Pumpkin Overnight Oats",
  "ingredients": "½ cup oats, dry / ½ cup canned pumpkin / 3 TBSP orange juice / ½ teaspoon pumpkin pie spice / 2 teaspoons maple syrup / 1 TBSP dried cranberries / 1 TBSP pecans, chopped",
  "instructions": "1 - Mix together oats, pumpkin, orange juice, spice, and maple syrup. 2 - Place in the refrigerator in a covered container and let sit overnight or for a few hours. When ready to eat, top with cranberries and pecans.",
  "source": "fruitsandveggies.org",
  "category": "Veggies",
  "photo": "https://fruitsandveggies.org/wp-content/uploads/2019/10/leslie-Pumpkin-Overnight-Oats-sized-for-banner-1440x480.jpg"
}

401 (UnAuthorized)
  {
    message: "shall not pass!"
  }

400 (Bad Request)
Body was empty

  {
    message: "Please provide title, instructions, ingredients and photo for the post."
  }

500 (Bad Request)
{
    message: "Failed to update the recipe",
}
===============================================================================================
===============================================================================================
===============================================================================================
/----------------------------------------/

Delete a Recipe
method url: /api/recipes/:id

http method: [DELETE]

Response
200 (Ok)
Example response
{
    message: "Recipe is deleted!
}

500 (Bad Request)
{
    message: "Failed to delete the recipe",
}
Endpoints for Classes

// GET Classes

"http://localhost:5000/api/classes"

---------------------

// GET Classes by ID

"http://localhost:5000/api/classes/:id"

---------------------

// PUT  Edit Class

"http://localhost:5000/api/classes/:id"

---------------------

// POST Add new Class

"http://localhost:5000/api/classes"

---------------------

// DELETE remove Class

http://localhost:5000/api/classes/:id


******************************************************

Endpoints for users

// GET users

"http://localhost:5000/api/users"

----------------------

// POST : Register New User

"http://localhost:5000/api/register"

----------------------

POST : LOGIN

http://localhost:5000/api/login

----------------------

GET :: LOGOUT

http://localhost:5000/api/logout






# back end ....

Backend for BW-Anywhere-Fitness-4

1. TRELLO: https://trello.com/b/JjJ3ZOLc/bw-anywhere-fitness-4
2. GITHUB: https://github.com/BW-Anywhere-Fitness-4
3. PVD: https://docs.google.com/document/d/1fkh7kFRpKlcdhTLri6i1EcJKL_-_5bIPk4pXvgfb4aE/edit?usp=sharing
