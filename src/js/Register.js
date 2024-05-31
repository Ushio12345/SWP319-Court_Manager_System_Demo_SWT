export default async function getInformationRegister(event) {
    event.preventDefault();

    const userName = document.getElementById("userName")?.value.trim();
    const phoneNumber = document.getElementById("phoneNumber")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const password = document.getElementById("password")?.value.trim();
    const rePassword = document.getElementById("re-password")?.value.trim();
    const selectedRoles = document.querySelectorAll('input[name="role"]:checked');

    const errorMessages = {
        userName: "Bạn chưa nhập tên đăng nhập.",
        phoneNumber: "Bạn chưa nhập số điện thoại.",
        email: "Bạn chưa nhập email.",
        password: "Bạn chưa nhập password.",
        rePassword: "Bạn chưa nhập lại mật khẩu.",
        role: "Bạn chưa chọn loại tài khoản.",
    };

    document.getElementById("lock").addEventListener("click", function (icon) {
        const type = password.getAttribute("type") === "password" ? "text" : "password";
        password.setAttribute("type", type);
        this.classList.toggle("fa-lock");
        this.classList.toggle("fa-eye");
    });
    let isValid = true;

    const userNameError = document.getElementById("userName-error");
    const phoneNumberError = document.getElementById("phoneNumber-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const rePasswordError = document.getElementById("re-password-error");
    const roleError = document.getElementById("role-error");

    if (userNameError) userNameError.innerHTML = "";
    if (phoneNumberError) phoneNumberError.innerHTML = "";
    if (emailError) emailError.innerHTML = "";
    if (passwordError) passwordError.innerHTML = "";
    if (rePasswordError) rePasswordError.innerHTML = "";
    const wrongRepass = document.getElementById("wrong-repass");
    if (wrongRepass) wrongRepass.innerHTML = "";

    if (!userName) {
        if (userNameError) userNameError.innerHTML = errorMessages.userName;
        isValid = false;
    }
    if (!phoneNumber) {
        if (phoneNumberError) phoneNumberError.innerHTML = errorMessages.phoneNumber;
        isValid = false;
    }
    if (!email) {
        if (emailError) emailError.innerHTML = errorMessages.email;
        isValid = false;
    }
    if (!password) {
        if (passwordError) passwordError.innerHTML = errorMessages.password;
        isValid = false;
    }
    if (!rePassword) {
        if (rePasswordError) rePasswordError.innerHTML = errorMessages.rePassword;
        isValid = false;
    }
    if (selectedRoles.length === 0) {
        if (roleError) roleError.innerHTML = errorMessages.role;
        isValid = false;
    }

    if (!isValid) return;

    if (password !== rePassword) {
        if (wrongRepass) wrongRepass.innerHTML = "Mật khẩu chưa khớp. Xin vui lòng nhập lại!";
        return;
    }

    try {
        // Assuming you have imported axios before using it here
        // const response = await axios.post("/api/checkUser", { email });
        // Handle the response here
    } catch (error) {
        console.error("An error occurred while checking user existence:", error);
    }
}
