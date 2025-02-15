<!-- 
A simple HTML login form with a Login action when the button is pressed.  

The form triggers the login_user function defined in the JavaScript below when the Login button is pressed.
-->

<html><head>
    <style>
        .login-button {
            width: 200px;
            height: 30px;
            font-size: 20px;
            font-weight: bold;
            background-color: lightgrey;
            text-align: center;
            /* Additional styles can be added as needed */
        }

        .center-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
    </style>
<h1 style="text-align: center;">Login</h1>
<p></p>
<form action="javascript:login_user();">
    <p><label>
        User ID:
        <input type="text" name="uid" id="uid" required>
    </label></p>
    <p><label>
        Password:
        <input type="password" name="password" id="password" required>
    </label></p>
    <p>
        <button class="login-button">Login</button>
    </p>
</form>
<h3>Dont have an account?</h3>
<a href="/student/signup">Create an account</a>


<!-- 
Below JavaScript code is designed to handle user authentication in a web application. It's written to work with a backend server that uses JWT (JSON Web Tokens) for authentication.

The script defines a function when the page loads. This function is triggered when the Login button in the HTML form above is pressed. 
 -->
<script type="module" defer="">
    // uri variable and options object are obtained from config.js
    import { uri, options } from '{{site.baseurl}}/assets/js/api/config.js';

    function login_user(){
        // Set Authenticate endpoint
        const url = uri + '/api/users/authenticate';

        // Set the body of the request to include login data from the DOM
        const body = {
            uid: document.getElementById("uid").value,
            password: document.getElementById("password").value,
        };

        // Change options according to Authentication requirements
        const authOptions = {
            ...options, // This will copy all properties from options
            method: 'POST', // Override the method property
            cache: 'no-cache', // Set the cache property
            body: JSON.stringify(body)
        };

        // Fetch JWT
        fetch(url, authOptions)
        .then(response => {
            // handle error response from Web API
            if (!response.ok) {
                const errorMsg = 'Login error: ' + response.status;
                console.log(errorMsg);
                alert("Login error!")
                window.location.href = "{{site.baseurl}}/401"
                return;
            }
            // Success!!!
            // Redirect to the database page
            console.log("Login success")
            window.location.href = "{{site.baseurl}}/data/database";
        })
        // catch fetch errors (ie ACCESS to server blocked)
        .catch(err => {
            console.error(err);
        });
    }

    // Attach login_user to the window object, allowing access to form action
    window.login_user = login_user;
</script>
</head></html>