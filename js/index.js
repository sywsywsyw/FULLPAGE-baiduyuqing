	$(function(){
      $('#fullpage').fullpage({
        // 滚动一屏幕的时间  毫秒
        scrollingSpeed:700,
        // 分享连接 index.html#fo1
        anchors:['fo1','fo2','fo3','fo4'],
        // 可以给群组选择器
        // fixedElements:'nav,',
        // paddingTop:20,
        // paddingBottom:30,
        // 当滚动到底部或顶部之后能否继续滚动 默认false
        // continuousVertical:true,
        // 小点点
        navigation:true,
        // 小点点左边还是右边
        // navigationPosition:'left',
        // 每一个小点的提示文字
        navigationTooltips:['登录百度舆情','领先：数据收集与处理','全面：舆情分析逻辑与架构','专业：专业数据可视化'],
        // 到当前小点是否出现提示文字
        showActiveTooltip:true,
        // // 进入一个屏幕会调用afterLoad;
        // afterLoad:function(name,index){
        //    //name是当前这张的名字 index当前是第几张
        // }
        // // 离开一个屏幕会调用onLeave;
        // onleave:function(index,next,dir){
        //   //index 从那张离开的 next去到那张  dir方向 向上up  向下down
        //   if(index === 5){
        //     $("#section5 h1").addClass('ff');
        //   }
        // }
        onleave:function(index,next,dir){
          //index 从那张离开的 next去到那张  dir方向 向上up  向下down
          if(index === 1){
            alert(1)
            // $("#section5 h1").addClass('ff');
          }
        }
      })
    })
