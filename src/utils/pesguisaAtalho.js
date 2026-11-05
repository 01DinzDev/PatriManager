const inputFind = document.getElementById("inputFind");

document.addEventListener("keydown", (event) => {

    // Atalho CTRL + K
    if (event.ctrlKey && event.key.toLowerCase() === "k") {

        event.preventDefault();

        inputFind.focus();
        inputFind.select();

    }

});