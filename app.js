// from data.js
var table = data;
var button = d3.select("#filter-btn");
var tbody = d3.select("tbody");

// table w/ appends
function buildTable(table) {
    table.forEach(function(ufodata) {
        var row = tbody.append("tr");
        row.append("td").attr('scope', 'row').text(ufodata.datetime);
        row.append("td").text(ufodata.city);
        row.append("td").text(ufodata.state);
        row.append("td").text(ufodata.country);
        row.append("td").text(ufodata.shape);
    });
}

// button to filter
button.on("click", function() {
        var row = d3.select("tbody").selectAll("td");
        row.remove();
        d3.event.preventDefault();
        var inputdate = d3.select("#datetime");
        var inputvalue = inputdate.property("value");
        let filData = table;
        var filtered = filData.filter(tbody => tbody.datetime = inputvalue);
        buildTable(filtered);
});

buildTable(table);
