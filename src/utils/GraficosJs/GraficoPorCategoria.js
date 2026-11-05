const ctxCategoria = document.getElementById("graficoCategoria");

new Chart(ctxCategoria, {
    type: "doughnut",

    data: {
        labels: [
            "Informática",
            "Mobiliário",
            "Equipamentos",
            "Outros"
        ],

        datasets: [{
            data: [40, 30, 20, 10],

            backgroundColor: [
                "#398BE8",
                "#43BD75",
                "#FF963D",
                "#A94FE0"
            ],

            borderWidth: 0
        }]
    },

    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "65%"
    }
});