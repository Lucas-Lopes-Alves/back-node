username = document.getElementById("username")
password = document.getElementById("password")
botao = document.getElementById("butao")

botao.addEventListener("click", async () => {
    await fetch("http://localhost:5000/cadastro", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: `${username.value}`,
            password: `${password.value}`
        })
    });
})