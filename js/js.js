$(function () {
    $("#msg").click(function () {
        var phone = $("#phone").val();
        var price = $(".card-price").find("input[type='radio']:checked").val();
        $.ajax({
            type: "post",
            url: "/playcard/",
            cache: false,
            data: {
                price: price,
                phone: phone
            },
            dataType: "json",
            success: function() {
                alert("发送成功！");
            },
            error: function() {
                alert("错误！");
            }
        })
    });
});