	$(function(){
      $('#fullpage').fullpage({
        // ����һ��Ļ��ʱ��  ����
        scrollingSpeed:700,
        // �������� index.html#fo1
        anchors:['fo1','fo2','fo3','fo4'],
        // ���Ը�Ⱥ��ѡ����
        // fixedElements:'nav,',
        // paddingTop:20,
        // paddingBottom:30,
        // ���������ײ��򶥲�֮���ܷ�������� Ĭ��false
        // continuousVertical:true,
        // С���
        navigation:true,
        // С�����߻����ұ�
        // navigationPosition:'left',
        // ÿһ��С�����ʾ����
        navigationTooltips:['��¼�ٶ�����','���ȣ������ռ��봦��','ȫ�棺��������߼���ܹ�','רҵ��רҵ���ݿ��ӻ�'],
        // ����ǰС���Ƿ������ʾ����
        showActiveTooltip:true,
        // // ����һ����Ļ�����afterLoad;
        // afterLoad:function(name,index){
        //    //name�ǵ�ǰ���ŵ����� index��ǰ�ǵڼ���
        // }
        // // �뿪һ����Ļ�����onLeave;
        // onleave:function(index,next,dir){
        //   //index �������뿪�� nextȥ������  dir���� ����up  ����down
        //   if(index === 5){
        //     $("#section5 h1").addClass('ff');
        //   }
        // }
        onleave:function(index,next,dir){
          //index �������뿪�� nextȥ������  dir���� ����up  ����down
          if(index === 1){
            alert(1)
            // $("#section5 h1").addClass('ff');
          }
        }
      })
    })
