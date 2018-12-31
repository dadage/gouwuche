$('#itcast').fullpage({

    navigation: true,
    sectionsColor: ['#f9dd67', '#84a2d4', '#ef674d', '#ffeedd', '#cf4759', '#85d9ed', '#8ac060', '#84d9ed'],
    afterLoad: function (a, index) {

        // 谁滚出来，就让谁加一个类叫animation
        // 是复原transtion动画的
        $('.section').eq(index - 1).addClass('animation').siblings().removeClass('animation');


        //滚出去的时候，要恢复原样，换句话说就是要把jQuery动画加的效果去掉就恢复了
        //jQuery动画的本质其实加的是行内样式，所以换句话说，我们只要把行内样式删掉，它就复原成我们自己写的CSS默认样式了
        $('.section>div img').removeAttr('style');
        $('.section>div div').removeAttr('style');

        // 第二屏用jQuery做动画
        if (index == 2) {

            //如果是第二屏，才做jQuery动画
            $('.section2 .search01').animate({

                marginLeft: -111

            }, 1000, 'easeOutBack', function () {

                //动画完了把search01隐藏，search02显示
                $('.section2 .search01').hide();
                $('.section2 .search02').show();

                //继续让search02往右上走并且还要缩小
                $('.section2 .search02').delay(600).animate({

                    marginLeft: 130,
                    bottom: 450,
                    width: 148

                }, 1000);

                $('.section2 .sofas').delay(600).animate({

                    width: 441,
                }, 1000);
            });
        }else if(index == 4){

            //第四屏动画
            $('.section4 .carBox').animate({

                marginLeft:1200

            },2500,"easeInElastic",function(){

                $('.section4 .keyboard').animate({
                    opacity:1
                },1000);
            });
        }else if(index == 6){

            // 如果是第六屏
            $('.section6 .box').animate({

                top:10

            },1000,function(){

                //让小车开动
                //本质上背景图片在动
                $('.section6 .street').animate({

                    backgroundPositionX:-1300

                },2500,function(){

                    //车开完，快递员出来
                    $('.section6 .man').animate({

                        height:140,
                    },1000,function(){

                        //快递员出来完了后，往右走
                        $('.section6 .man').animate({

                            right:-200

                        },1000,function(){

                            $('.section6 .door').show();
                            
                            // setTimeout("$('.section6 .girl').show();",500);
                            
                            //下面这句话和上面这句话是一样的，如果你的计时器调用的代码，只有一句话，那么可以写成字符串
                            setTimeout(function(){

                                $('.section6 .girl').show();

                            },500);
                        });
                    });
                });
            })
        }else if(index == 8){

            $('.section8').mousemove(function(e){

                // console.log('....');
                $('.section8 .hand').css('left',e.pageX - 65);
                $('.section8 .hand').css('top',e.pageY - 10);
            });

            $('.section8 .again').click(function(){

                // fullpage提供了一个专门用来跳转到指定屏数的方法
                // 写几就代表跳到第几屏
                $.fn.fullpage.moveTo(1);
            });
        }
    }
});