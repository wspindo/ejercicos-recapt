let auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2019,
    esAutomatico: true,
    dueñosAnteriores: ["Juan", "Carlos"]
};

alert(`Marca: ${auto.marca}\nModelo: ${auto.modelo}\nAño: ${auto.año}\nAutomático: ${auto.esAutomatico ? "Sí" : "No"}\nDueños anteriores: ${auto.dueñosAnteriores.join(", ")}`);
