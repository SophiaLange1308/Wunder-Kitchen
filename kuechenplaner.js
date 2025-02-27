import init, * as wasm from "./pkg/kuechenplaner.js";

async function run() {
    await init(); // WebAssembly initialisieren
    document.getElementById("calculate").addEventListener("click", () => {
        const width = parseFloat(document.getElementById("width").value);
        const depth = parseFloat(document.getElementById("depth").value);
        const height = parseFloat(document.getElementById("height").value);
        if (isNaN(width) || isNaN(depth) || isNaN(height)) {
            alert("Bitte gültige Maße eingeben.");
            return;
        }

        const kitchen = new wasm.Kitchen(width, depth, height); // Hier `wasm.Kitchen` nutzen
        document.getElementById("result").innerText = kitchen.calculate_modules();
    });
}

run();

