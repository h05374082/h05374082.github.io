$('#x').hide();
var output = d3.select('#output');
var color = new Array("white", "gray");
var n = 5;
for (var i = 0; i < n; i++)
    for (var j = 0; j < n; j++) {
        var rect = output.append('rect');
        rect.attr('data-index', i * n + j).attr('value', 1).attr('x', j * 60).attr('y', i * 60).attr('width', '60').attr('height', '60').attr('stroke', 'black').attr('fill', color[1]).attr('storke-width', '2');
    }    
var $rect = $('rect');
$rect.bind('click', function () {
    var index = $(this).attr('data-index');
    var num = new Array(-n, -1, 0, 1, n);
    for (var i = 0; i < 5; i++) {
        if ((index % n == 0) && (i == 1))
            continue;
        if ((index % n == (n - 1)) && (i == 3))
            continue;
        if ((Math.floor(index / n) == 0) && (i == 0))
            continue;
        if ((Math.floor(index / n) == n - 1) && (i == 4)){
            continue;}
        var $rect1 = $rect.eq(index * 1 + num[i]);
        var val = $rect1.attr('value');
        val = (val * 1 + 1) % 2;
        $rect1.attr('fill', color[val]).attr('value', val);
    }
    var k = 0;
    for (var i = 0; i < n * n; i++) {
        if ($rect.eq(i).attr('fill') == "gray")
            break;
        k++;
    }
    
    if (k == n * n) {
        console.log("complete");
        $('#x').show();
    }
    k = 0;
})

