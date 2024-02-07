---
permalink: /signup
---

<html>
    <h1 style="text-align: center;">
        Create Account!
    </h1>
</html>

<!-- style -->

<style>
        .login-button {
    width: 200px; /* Set the desired width */
    height: 30px; /* Set the desired height */
    font-size: 20px; /* Set the desired font size */
    font-weight: bold;
    background-color: lightgrey;
    /* Additional styles can be added as needed */
  }
    </style>

<!-- html -->

<html><head>
<p></p>
<form action="javascript:create_user();">
    <p><label>
        Name:
        <input type="text" name="uid" id="name" required>
    </label></p>
    <p><label>
        User ID:
        <input type="text" name="uid" id="uid" required>
    </label></p>
    <p><label>
        Password:
        <input type="password" name="password" id="password" required>
    </label></p>
    <p><label>
        DOB:
        <input type="date" name="uid" id="dob" required>
    </label></p>
    <p><label>
        Email:
        <input type="text" name="uid" id="email" required>
    </label></p>
    <p>
        <button class="login-button">Create</button>
    </p>
</form>

<!-- javascript -->

<script type="module" defer="">
    // uri variable and options object are obtained from config.js
    import { uri, options } from '{{site.baseurl}}/assets/js/api/config.js';

    function create_user(){
        // Set Authenticate endpoint
        const url = uri + '/api/users';

        // Set the body of the request to include login data from the DOM
        const body = {
            name: document.getElementById("name").value,
            uid: document.getElementById("uid").value,
            password: document.getElementById("password").value,
            dob: document.getElementById("dob").value,
            email: document.getElementById("email").value,
        };

        // Change options according to Authentication requirements
        const authOptions = {
            ...options, // This will copy all properties from options
            method: 'POST', // Override the method property
            cache: 'no-cache', // Set the cache property
            body: JSON.stringify(body)
        };

        // Fetch JWT to create user
        fetch(url, authOptions)
        .then(response => {
            // handle error response from Web API
            if (!response.ok) {
                const errorMsg = 'Signup error: ' + response.status;
                console.log(errorMsg);
                alert("Error creating user :O");
                return;
            }
            // Success!!!
            // Redirect to login ??
                alert("User created successfully!");
        })
        // catch fetch errors (ie ACCESS to server blocked)
        .catch(err => {
            console.error(err);
        });
    }

    // Attach login_user to the window object, allowing access to form action
    window.create_user = create_user;
</script>
</head></html>