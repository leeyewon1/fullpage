$(function () {
    // 괄호 치면 함수 ex) ~ 아 일을 해라 라는 뜻
    // (..) - /
    // {..} - 이름이 붙어있는 자료 / 이름이 중요
    // [..] - 순서가 있는 자료 / 이름이 없음 
    // 자료는 콤마로 구분

    $('.main').fullpage({
        anchors: ['01', '02', '03', '04', '05'],
        // 오른쪽 옆 점박이 나오는것
        // navigation: true,
        onLeave: function (index, nextIndex, direction) {
            $('.gnb li').removeClass('on');
            $('.gnb li').eq(nextIndex - 1).addClass('on');

            $('.section').removeClass('on');
            $('.section').eq(nextIndex - 1).addClass('on');
        },
    });
})