# 📝 DailyTasks-Website (JavaScript)

A simple and practical **DailyTasks-Website** built with **Vanilla JavaScript, HTML, and Bootstrap**.
This project helps users manage daily tasks with features such as adding, completing, searching, filtering, and storing tasks locally.

---

## 🚀 Features

* ➕ Add new tasks
* ⌨️ Press **Enter** to add tasks quickly
* ✅ Mark tasks as **completed**
* ❌ Delete tasks
* 🔎 Search tasks by keyword
* 📂 Filter tasks:

  * All
  * Active
  * Completed
* 🧹 Clear completed tasks
* 💾 Save tasks using **LocalStorage**
* 🎨 Simple responsive UI using **Bootstrap**

---

## 🛠️ Technologies Used

* **HTML5**
* **CSS3**
* **Bootstrap 5**
* **JavaScript (ES6)**

---

## 📂 Project Structure

```
todo-app
│
├── index.html     # Main UI structure
├── script.js      # Application logic
└── README.md      # Project documentation
```

---

## ⚙️ How to Run the Project

1. Download or clone this repository:

```
git clone https://github.com/your-username/todo-app.git
```

2. Open the project folder.

3. Run the application by opening:

```
index.html
```

Or use **Live Server** in VS Code.

---

## 💡 How It Works

* Tasks are stored in an array called `todos`.
* Each todo item contains:

```
{
  id: number,
  text: string,
  done: boolean
}
```

* Data is saved in **LocalStorage**, so tasks remain even after refreshing the page.

---

## 📸 Demo Features

Example workflow:

1. Add a task
2. Mark task as completed
3. Search for tasks
4. Filter active or completed tasks
5. Clear completed tasks

---

## 🎯 Learning Purpose

This project was created to practice:

* JavaScript **DOM manipulation**
* **Array methods** (`map`, `filter`)
* **Event handling**
* **LocalStorage**
* **Basic frontend application structure**

---

## 👨‍💻 Author

**Nguyễn Hữu Lập**
Software Engineering Student – FPT University
