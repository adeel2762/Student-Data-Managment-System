# 🎓 Student Information Management System

A simple **Student Information Management System** built using **HTML, Bootstrap, and Vanilla JavaScript**. This project demonstrates how to perform CRUD (Create, Read, Update) operations without using any external database or localStorage.

## 📌 Project Objective

The objective of this project is to understand:

* Bootstrap form design
* Reading form data using the **FormData API**
* Storing data in JavaScript objects
* Managing data using arrays
* Rendering dynamic tables
* Editing existing records
* Updating data in real time

## 🚀 Features

* Responsive student information form using Bootstrap
* Read form values using the FormData API
* Store student records in a global `studentsList` array
* Display all student records in a Bootstrap table
* Edit existing student information
* Update records instantly
* Dynamic table rendering after every change

## 🛠️ Technologies Used

* HTML5
* Bootstrap 5
* CSS3
* Vanilla JavaScript (ES6)

## 📂 Project Structure

```text
Student-Data-Management-System/
│── index.html
│── style.css
│── script.js
└── README.md
```

## 📖 How It Works

### Step 1 – Fill the Form

Enter the student's information in the Bootstrap form.

### Step 2 – Submit the Form

When the form is submitted, JavaScript uses the **FormData() API** to collect all input values.

### Step 3 – Store Data

Each student's information is converted into an object and stored inside the global array:

```javascript
studentsList
```

### Step 4 – Render Data

The `render()` function loops through the `studentsList` array and creates table rows dynamically.

### Step 5 – Edit Record

Clicking the **Edit** button loads the selected student's data back into the form.

### Step 6 – Update Record

After editing, clicking the Update button saves the modified data back into the corresponding object inside the `studentsList` array and refreshes the table.

## 📚 Concepts Covered

* HTML Forms
* Bootstrap Components
* DOM Manipulation
* FormData API
* Arrays
* Objects
* Functions
* Loops
* CRUD Operations
* Event Handling

## 👨‍💻 Author

**Adeel Ashraf**

GitHub: https://github.com/adeel2762
