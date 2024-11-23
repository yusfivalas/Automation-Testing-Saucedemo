# 🧪 WDIO Automation Testing Project

This is an end-to-end automation testing suite for www.saucedemo.com, developed with **WebdriverIO (WDIO)** and **Jasmine**. The project covers multiple test scenarios to ensure the robustness of core features in a web application.

---

## 🚀 Features and Scenarios

### 🔑 **Login Scenarios**
- ✅ **Success Login**: Tests login with valid credentials.
- ❌ **Failed Login**: Verifies error handling for invalid login attempts.

### 📦 **Product Sorting on Homepage**
- 🔤 Sort products **A to Z** (alphabetically).
- 🔠 Sort products **Z to A** (reverse alphabetical order).
- 💲 Sort products by **price (high to low)**.
- 💵 Sort products by **price (low to high)**.

### 🧑‍💻 **User Workflow**
- 🔓 **Logout Process**: Ensures users can securely log out.
- 🛒 **Full Workflow (Login to Checkout)**: Covers the complete user flow, from logging in to checking out a product.

---

## 🛠️ Tech Stack

- **Automation Framework**: [WebdriverIO (WDIO)](https://webdriver.io/)
- **Testing Framework**: [Jasmine](https://jasmine.github.io/)
- **Programming Language**: JavaScript/TypeScript

---

## 📂 Test Folder Structure

```plaintext
📁 test
 ├── 📁 pageobjects
     ├── 📄 cart.js                           # Page object contains element scrapped from cart page
     ├── 📄 checkoutcomplete.js               # Page object contains element scrapped from compete checkout page
     ├── 📄 checkoutone.js                    # Page object contains element scrapped from checkout step one page
     ├── 📄 checkouttwo.js                    # Page object contains element scrapped from checkout step two page
     ├── 📄 homepage.js                       # Page object contains element scrapped from the homepage
     ├── 📄 login.page.js                     # Page object contains element scrapped from the login page
     ├── 📄 page.js                           # Main page object with shared methods and functionality
     ├── 📄 secure.page.js                    # Subclass for specific page selectors and methods
 ├── 📁 specs
     ├── 📁 homepage
          ├── 📄 sort.js                      # Test cases for checking all sorting functions in one go
          ├── 📄 sortAtoZ.js                  # Test cases for checking alphabetical sort
          ├── 📄 sortPriceHiToLo.js           # Test cases for checking sorting function based on product price from High price to Low price
          ├── 📄 sortPriceLoToHi.js           # Test cases for checking sorting function based on product price from Low price to High price
          ├── 📄 sortZtoA.js                  # Test cases for checking the sorting function in reversed alphabetical order
     ├── 📁 login
          ├── 📄 login.js                     # Test cases for checking the login process with a valid credential
          ├── 📄 negativeLogin.js             # Test cases for verifying error handling for invalid login attempts
     ├── 📁 logout
          ├── 📄 logout.js                    # Test cases for checking the logout process
     ├── 📄 checkout.js                       # Test cases for checking the complete user flow, from login into the checkout process
```

## 🧩 How to Run the Tests

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher).
- Browser driver (e.g., ChromeDriver) or equivalent setup.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yusfivalas/Automation-Testing-Saucedemo.git
   ```

## 📢 Feedback and Contributions

We welcome your feedback and contributions to enhance this project! Here's how you can contribute:

1. Report Issues: Found a bug or have suggestions? Open an Issue and let us know.
2. Fork the Repository: Create your own branch to make updates or improvements.
3. Submit a Pull Request: Once you're done, submit a pull request, and we'll review it!
4. If you have questions, feel free to contact me at yusfikrismon@gmail.com.

