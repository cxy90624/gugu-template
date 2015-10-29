$(function(){
	var mytel='<div class="input-tel-inner">\
					<div class="input-tel-title">领取优惠券</div>\
					<input class="input-tel-num" placeholder="请输入手机号">\
					<div class="input-tel-btn layui-layer-btn0">放入账户</div>\
				</div>'
	var mysuccess='<div class="input-tel-inner">\
						<div class="input-tel-title">领取成功</div>\
						<p class="input-tel-p">优惠券已放入账户18209384612</p>\
						<div class="input-tel-btn">关闭</div>\
					</div>'
	var mychance='<div class="input-tel-inner">\
						<div class="input-tel-title">已经领过了</div>\
						<p class="input-tel-p2">掌柜说了，每个人只能领取3张，你已经领过了，不能再领啦！</p>\
						<div class="input-tel-btn input-tel-btnmt">关闭</div>\
					</div>'
	$('.div-pn-content').on('click', function(){
	    layer.open({
		    type:0, //page层
		    title: false,
		    area: ['90%', '214px'],
		    shadeClose: true, //点击遮罩关闭
		    shade: 0.6, //遮罩透明度
		    btn:false,
		    closeBtn:false,
		    shift: -1, //0-6的动画形式，-1不开启
		    content:mysuccess
		});  
		$(".input-tel-btn").on('click',function(){
			layer.closeAll(); //疯狂模式，关闭所有层
		})           
	});
	
})