// Common functions for all pages

// Set the current year in the footer
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('year').textContent = new Date().getFullYear();
});

// Profile page: Show image name after 10 seconds
if (document.getElementById('image-name')) {
    setTimeout(() => {
        document.getElementById("image-name").style.display = "block";
    }, 10000);
}

// Mark to Grade Converter
function convertMark() {
    let mark = document.getElementById("mark-input").value;
    let result = document.getElementById("result");
    let grade;

    try {
        mark = parseInt(mark);
        if (isNaN(mark)) throw "Invalid number.";
        if (mark < 0 || mark > 100) throw "Mark out of range.";

        if (mark > 90) grade = "A";
        else if (mark > 80) grade = "B";
        else if (mark > 70) grade = "C";
        else if (mark > 50) grade = "D";
        else grade = "F";

        result.innerText = `Your grade is: ${grade}`;
    } catch (error) {
        result.innerText = `Error: ${error}`;
    }
}

// Staff page: Sorting table
function sortTable(colIndex) {
    let table = document.querySelector('table');
    let rows = Array.from(table.querySelectorAll('tr:nth-child(n+2)'));
    let isNumeric = colIndex === 5 || colIndex === 3;

    rows.sort((rowA, rowB) => {
        let cellA = rowA.children[colIndex].textContent.trim();
        let cellB = rowB.children[colIndex].textContent.trim();

        if (isNumeric) {
            cellA = parseInt(cellA.replace(/[^\d.-]/g, ''));
            cellB = parseInt(cellB.replace(/[^\d.-]/g, ''));
        }

        if (cellA < cellB) return -1;
        if (cellA > cellB) return 1;
        return 0;
    });

    rows.forEach(row => table.appendChild(row));  // Reorder rows in the table
}

// Weather page: Convert temperature
function convertWeather() {
    let temp = parseFloat(document.getElementById('temp-input').value);
    if (isNaN(temp)) {
        document.getElementById('result').textContent = "Please enter a valid number.";
        return;
    }
    let celsius = (temp - 32) * 5 / 9;
    let kelvin = celsius + 273.15;

    document.getElementById('result').textContent = `${temp}°F = ${celsius.toFixed(2)}°C = ${kelvin.toFixed(2)}K`;
}
