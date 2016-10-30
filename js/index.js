function run() {
    var index = $(this).attr('data-index');
    $('th').eq(index-1).removeClass('off').addClass('on');
    $('th').eq(!(index-1)).removeClass('on').addClass('off');
    $("#imgid").attr('src', './img/h0' + index + '.jpg');
    if(index == 1 )
        $("#output").attr('href','./game.html');
    else
        $("#output").attr('href','./travel.html');
}
$("th").mousemove(run);
