const ctxEvolucao = document.getElementById("graficoEvolucao");

new Chart(ctxEvolucao, {
    type: "line",

    data: {
        labels: [
            "Jan", "Fev", "Mar", "Abr",
            "Mai", "Jun", "Jul", "Ago",
            "Set", "Out", "Nov", "Dez"
        ],

        datasets: [{
            label: "Patrimônios",
            data: [400, 500, 430, 620, 680, 950, 1000, 880, 1000, 1200, 1200, 1250],
            borderColor: "#0878E8",
            backgroundColor: "rgba(8, 120, 232, 0.15)",
            fill: true,
            tension: 0.4
        }]
    },

    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});