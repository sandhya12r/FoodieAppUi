# Foodie App

# project-documentation

<p align="center">
  <a href="" rel="noopener">
 <img width=100px height=100px src="public\logo.png" alt="Project logo"></a>
</p>



<h3 align="center">Foodie - Online Delivery App</h3>

---
<div align="center">

  [![Status](https://img.shields.io/badge/status-active-success.svg)]()
  [![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>


## 📝 Table of Contents
- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Project View](#projectView)
- [Features](features)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>
A website for a fictitious restauran named 'Appetite', which is responsive on all screen sizes as well as has different set of functionalities depending upon the type of user you are. Admins can add and edit dishes, while a user can add the dishes to the cart, and place the order. With Next-Auth, we have also achived google integration for setting up login for the user using their Google Accounts.

## 🏁 Getting Started <a name = "getting_started"></a>
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites
Things you need to install.
- VS Code
- Eclipse IDE
- Java Enterprise Edititon
- Nodejs
- Nextjs
- SQL

You also need to creata a google application by going on this link https://console.cloud.google.com/.
After the app is created copy your uinque CLIENT_ID AND CLIENT_SECRET into .env.local in the respective fields.

### Installing
You need to clone two repositories for this web application to work.
- Appetite_FrontEnd: https://github.com/sandhya12r/FoodieAppUi
- Appetite-Services: https://github.com/sandhya12r/FoodieApp

FrontEnd Installation:

After successfully cloning the two repositories. Open the Appetite_FrontEnd with VS Code. Open the terminal in the VS Code using 'CTRL'+ ` . In the terminal install the dependencies using the following commands

```
npm install next-auth
npm install react-redux
npm install @reduxjs/toolkit
npm install axios
npm i react-router
npm i react-router-dom
npm i bcryptjs
npm install mongoose
npm install mongodb
npm install formik --save
```

Once thats done, you can run the frontend of the web-application by using the following command

```
npm run dev
```

BackEnd Installation:

Open the backend project in EclipseIDE. Verify and match the SQL server port number with the one installed in your system. Then create a database in the SQL using following command.
```
CREATE DATABASE restaurant_db;
```
Then run the program as Java Application on server port 8080 (It will automatically run on this port number). Once both the servers are up and running, open the following link in Chrome
```
http://localhost:3000/
```
You should see a login page if you are running it for the first time.

## 🔧 Running the tests <a name = "tests"></a>
If your application is properly running, you will be taken to login page.
Click Login with Google. On successful login you will be redirected to the home page.


## 🎈 Project View <a name="projectView"></a>
### Login Page
<!-- ![LoginPage](public\Login_Page.png) -->
<img src="public\Login_Page.png" alt= “” width="900">

### Register Page
<!-- ![RegisterPage](public\RegisterPage.png) -->
<img src="public\RegisterPage.png" alt= “” width="1000">

### Google Login *User* (GIF)
<!-- ![LoginProcess](public\GoogleLoginProcess.gif) -->
<img src="public\GoogleLogin.png" alt= “” width="1000">

### ADD To Cart *User Feature* (GIF)
<!-- ![AddToCart](public\AddToCartProcess.gif) -->
<img src="public\AddToCartProcess.gif" alt= “” width="1000">

### Create Dish *User Feature*
<!-- ![CreateDish](public\CreateDish.png) -->
<img src="public\CreateDish.png" alt= “” width="1000">

### Edit Dish *Admin Feature* (GIF)
<!-- ![EditDish](public\EditCartProcess.gif) -->
<img src="public\EditCartProcess.gif" alt= “” width="1000">

### Real Time Updation of No of items in cart
![UpdateNoInCart](public\RealTimeUpdation.gif)


## 🚀 Features <a name = "features"></a>
### Admin Features
- Create and Add Dish (Add dish form)
    1. Add Dish Name
    2. Add Dish Price
    3. Add Dish Description
    4. Add Dish Cuisine
    5. Add Dish Time
    6. Add Dish Tag
    7. Add Dish Image
- Edit Dish
    1. Edit Dish Name
    2. Edit Dish Price
    3. Edit Dish Cuisine
    4. Edit Dish Time
    5. Edit Dish Tag
- Delete Dish

### User Features
- User login using Google accounts
- User login by registering user
- User Register
- Log out user
- Add dish to cart
- View Dish in cart
- Remove Dish from Cart
- Real time cart updation
- Place order

### Other Features
- Original Design
- Material UI
- Responsive Webpages

## ✍️ Authors <a name = "authors"></a>
- [@Sandhya](https://github.com/sandhya12r) -Full Stack Developer


## 🎉 Acknowledgements <a name = "acknowledgement"></a>
- Instructed By - @juniedenysolomon
- Inspiration - @bhupendraparihar
- References - @juniedenysolomon
- Skill-Lynk - [@Skill-Lync](https://skill-lync.com/)