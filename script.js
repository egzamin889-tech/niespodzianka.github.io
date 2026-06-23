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

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.lineWidth = 4;
ctx.lineCap = "round";

let drawing = false;

function getPosition(event){

    const rect = canvas.getBoundingClientRect();

    let clientX;
    let clientY;

    if(event.touches){

        clientX = event.touches[0].clientX;
        clientY = event.touches[0].clientY;

    }else{

        clientX = event.clientX;
        clientY = event.clientY;

    }

    return {

        x:
            (clientX - rect.left)
            * (canvas.width / rect.width),

        y:
            (clientY - rect.top)
            * (canvas.height / rect.height)

    };
}

canvas.addEventListener("mousedown", () => {
    drawing = true;
});

canvas.addEventListener("mouseup", () => {
    drawing = false;
    ctx.beginPath();
});

canvas.addEventListener("mouseleave", () => {
    drawing = false;
    ctx.beginPath();
});

canvas.addEventListener("mousemove", (e) => {

    if(!drawing) return;

    const pos = getPosition(e);

    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);

});

canvas.addEventListener("touchstart", () => {
    drawing = true;
});

canvas.addEventListener("touchend", () => {
    drawing = false;
    ctx.beginPath();
});

canvas.addEventListener("touchmove", (e) => {

    e.preventDefault();

    if(!drawing) return;

    const pos = getPosition(e);

    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);

});

function clearCanvas(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

}
