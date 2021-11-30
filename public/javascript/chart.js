//console.log(expenseArray = "in chart js")



//dates 
const labels = [

    // "date":"2021-12-01"
    // "date":"2021-12-01"
    // "date":"2021-12-02"
    // "date":"2021-12-03"

    "2021-12-01",

    "2021-12-01",

    "2021-12-02",

    "2021-12-03"




];
const data = {
    labels: labels,
    datasets: [{
        label: 'Daily Expenses',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        // data is money
        data: [
            50, 20, 10, 250
        ],
    }]
};


const config = {
    type: 'bar',
    data: data,
    options: {}
};


const myChart = new Chart(
    document.getElementById('myChart'),
    config
);