/**
 * Created by Chongqing on 2017/12/11.
 */
function handle(a, b, c) {
    var r = parseInt(1, 10);
    b = b + 1;
    while (b != 1) {
        r = r * a;
        r = r % c;
        b--;
    }
    console.log(r);
    return r;
}

$(function () {
    var p, q, n, e, fie;
    $('#on_lock').click(function () {
        p = $('#key_p').val() * 1;
        q = $('#key_q').val() * 1;
        e = $('#key_e').val() * 1;
        n = p * q;
        fie = (p - 1) * (q - 1);
        if (e < 1 || e > fie) {
            alert('e输入错误请重新输入');
        }
        var d = 1;
        while (((e * d) % fie) != 1)   d++;
        $('#unlock_key').val(d);//得到私钥
        $('#unlock_key1').val(n);//n的值
        var psw = parseInt($('#psw').val(), 10);
        var c = handle(psw, e, n);
        $('#result').html("密文为" + c);
    });
    $('#un_lock').click(function () {
        var unlock_n = $('#unlock_key1').val() * 1;
        var key = $('#unlock_key').val() * 1;
        var psw_text = $('#psw').val() * 1;
        var c = handle(psw_text, key, unlock_n);
        $('#result').html("明文为" + c);
    })

});