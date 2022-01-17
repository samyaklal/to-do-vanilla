const task = document.getElementById("task");
const add = document.getElementById("add");
const list = document.getElementById("list");

add.addEventListener("click", () => {
    if (!task.value) {
        return;
    }

    list.innerHTML += `<li>
        <span>${task.value}</span>
        <button>Remove</button>
    </li>`;

    task.value = "";
});

list.addEventListener("click", (e) => {
    if (e.target.textContent === "Remove") {
        list.innerHTML = list.innerHTML.replace(e.target.parentElement.outerHTML, "");
    }
});

task.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        add.click();
    }
});