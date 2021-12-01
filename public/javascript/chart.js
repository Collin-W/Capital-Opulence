console.log("in chart js")


$('#submit-expense-row').click(() => {

    console.log(expenseArray)
    dateArray = expenseArray.map((x) => {
        return x.date
    })

    intArray = expenseArray.map((x) => {
        return x.amount
    })

    const labels = dateArray


    const data = {
        labels: labels,
        datasets: [{
            label: 'Daily Expenses',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            // data is money
            data: intArray,
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


})