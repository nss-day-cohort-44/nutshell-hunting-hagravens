import { LoginForm } from "./auth/LoginForm.js"
import { RegisterForm } from "./auth/RegisterForm.js"
import { Nutshell } from "./Nutshell.js"
import { useTask,getTask} from "./Task/taskProvider.js"
import { taskAsHTML} from "./Task/taskHTMLconverter.js"

/*
    1. Check if the user is authenticated by looking in session storage for `activeUser`
    2. If so, render the Nutshell component
    3. If not, render the login and registration forms
    4. Also, if the user authenticates, and the login form is initially shown
        ensure that the Nutshell component gets rendered
*/
if (!sessionStorage.length) {
    LoginForm()
    RegisterForm()
} else {
    Nutshell()
}


// LoginForm()
// RegisterForm()
// Nutshell()
