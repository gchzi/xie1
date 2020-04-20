var index = 0,
    num = 6,
    itemWidth = 520,
    timer = undefined;
    timerFun();


function move(dirction) {
    //执行点击动作时，自动轮播的动画的计时器应该清空
    clearTimeout(timer);
    // 是否立即执行停止当前动画
    $('.img-box').stop(false,true);
    if(dirction == "next"){
        index++;
        // 实现瞬间移动到1的位置功能
        if(index > num){
            $('.img-box').css({
                left: 0
            });
            index = 1;
        }
    }else if(dirction == "prev"){
        index--;  
        if(index < 0){
            $('.img-box').css({
                left: num * -itemWidth
            });
            index = 5;
        }
    }
    $('.img-box').animate({
        left: index * -itemWidth
    },function() {/*点击的动画完成之后自动开始轮播*/
        timerFun()
    });
}
$('.prevBtn').click(function(){
    move('prev')

    // index--;
    // $('.img-box').animate({
    //     left: index * +itemWidth
    // });

});
// /*创建一个自动轮播的动画*/
function timerFun() {
    timer = setTimeout(function() {
        move('next')
    }, 2000)
}
$('.nextBtn').click(function(){
    move('next');
    // index++;
    // $('.img-box').animate({
    //     left: index * -itemWidth
    // });
    
});
