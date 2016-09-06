google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawBars);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
  ['Página','Veces Guardada'],
  ['Wikipedia', 230],
  ['StackExchange', 126],
  ['Microsiervos', 115],
  ['Twitter', 64],
  ['PDFs', 62],
  ['Politikon', 60],
  ['BPS Research Digest', 55],
  ['Github', 36],
  ['Sociological Images', 35],
  ['Otros', 1765]
  ,]);

  var options = {
    title: '',
    legend: { position: 'none' },
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}

function drawBars() {
  var data = google.visualization.arrayToDataTable([
    ['Semana', 'Artículos guardados',{ role: 'style' }],
    ['Jun 15', 48, "lightcoral"],
    ['Jul 15', 43, "lightcoral"],
    ['Jul 15', 53,"darkseagreen"],
    ['Jul 15', 59,"darkseagreen"],
    ['Jul 15', 50,"darkseagreen"],
    ['Ago 15', 64,"darkseagreen"],
    ['Ago 15', 61,"darkseagreen"],
    ['Ago 15', 35,"darkseagreen"],
    ['Ago 15', 46,"darkseagreen"],
    ['Ago 15', 47,"darkseagreen"],
    ['Sep 15', 36,"darkseagreen"],
    ['Sep 15', 23,"darkseagreen"],
    ['Sep 15', 21,"silver"],
    ['Sep 15', 34,"silver"],
    ['Oct 15', 25,"silver"],
    ['Oct 15', 28,"silver"],
    ['Oct 15', 28,"silver"],
    ['Oct 15', 22,"silver"],
    ['Nov 15', 33,"silver"],
    ['Nov 15', 29,"silver"],
    ['Nov 15', 50,"silver"],
    ['Nov 15', 31,"silver"],
    ['Nov 15', 22,"silver"],
    ['Dic 15', 29,"silver"],
    ['Dic 15', 24,"silver"],
    ['Dic 15', 39,"darkseagreen"],
    ['Dic 15', 28,"darkseagreen"],
    ['Ene 16', 32,"darkseagreen"],
    ['Ene 16', 31,"silver"],
    ['Ene 16', 38,"lightcoral"],
    ['Ene 16', 46,"lightcoral"],
    ['Feb 16', 35,"lightcoral"],
    ['Feb 16', 30,"lightcoral"],
    ['Feb 16', 21,"silver"],
    ['Feb 16', 14,"silver"],
    ['Feb 16', 43,"silver"],
    ['Mar 16', 22,"silver"],
    ['Mar 16', 24,"silver"],
    ['Mar 16', 31,"darkseagreen"],
    ['Mar 16', 45,"silver"],
    ['Abr 16', 36,"silver"],
    ['Abr 16', 67,"silver"],
    ['Abr 16', 57,"silver"],
    ['Abr 16', 61,"silver"],
    ['May 16', 67,"silver"],
    ['May 16', 66,"silver"],
    ['May 16', 84,"silver"],
    ['May 16', 99,"silver"],
    ['May 16', 59,"silver"],
    ['Jun 16', 56,"lightcoral"],
    ['Jun 16', 80,"lightcoral"],
    ['Jun 16', 43,"lightcoral"],
    ['Jun 16', 91,"lightcoral"],
    ['Jul 16', 53,"lightcoral"],
    ['Jul 16', 46,"darkseagreen"],
    ['Jul 16', 40,"darkseagreen"],
    ['Jul 16', 66,"darkseagreen"],
    ['Ago 16', 43,"darkseagreen"],
  ]);
  var options = {
    title: "",
    bar: {groupWidth: '95%'},
    legend: { position: 'none' },
  };
  var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}
