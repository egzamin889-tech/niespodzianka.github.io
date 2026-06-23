function showPage(id){

    document
        .querySelectorAll(".page")
        .forEach(p => p.classList.remove("active"));

    document
        .getElementById(id)
        .classList.add("active");
}

const gallery =
    document.getElementById("gallery");

for(let i=1;i<=34;i++){

    const img =
        document.createElement("img");

    img.src =
        `zdjecia/foto${i}.jpeg`;

    gallery.appendChild(img);
}

const options = [];

function addOption(){

    const input =
        document.getElementById("optionInput");

    if(input.value.trim() === "")
        return;

    options.push(input.value);

    input.value = "";
}

function spinWheel(){

    if(options.length === 0){

        document
            .getElementById("wheelResult")
            .innerHTML =
            "Dodaj opcje!";

        return;
    }

    const result =
        options[
            Math.floor(
                Math.random() *
                options.length
            )
        ];

    document
        .getElementById("wheelResult")
        .innerHTML =
        "❤️ Wylosowano:<br><b>" +
        result +
        "</b>";
}
