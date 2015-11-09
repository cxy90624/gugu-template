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
		    content:mytel
		});  
		$(".input-tel-btn").on('click',function(){
			layer.closeAll(); //疯狂模式，关闭所有层
		})           
	});
	/*登录弹框*/
	var loginHtml='<div class="alogin-inner">\
						<div class="input-tel-title">登录</div>\
						<div class="login-alert-cont">\
							<div class="login-alert-cont-inner">\
								<div class="alogin-yzm clearfix">\
									<span class="a-span">手机号</span>\
									<input class="alogin-num" type="tel" maxlength="11" placeholder="请输入手机号">\
										<!-- 倒计时开始yzm-color变为yzm-color1-->\
									<div class="login-yzm-div yzm-color">\
										<span>获取验证码</span>\
										<span style="display: none;">60S</span>\
									</div>\
								</div>\
								<div class="alogin-print">\
									<span class="a-span1">验证码</span>\
									<input id="agree" class="alogin-print-input" placeholder="请输入验证码" type="text" />\
								</div>\
							</div>\
						</div>\
						<div class="alogin-agreement">\
							<input class="login-check" checked="checked" type="checkbox" />\
							<label for="agree">我已阅读并同意<a href="#" class="alogin-a">《用户协议》</a>\
							</label>\
						</div>\
						<p class="alogin-btn">登录</p>\
	</div>'
	$('.div-pn-content').on('click', function(){
		layer.open({
			type:0, //page层
			title: false,
			area: ['90%', '238px'],
			shadeClose: true, //点击遮罩关闭
			shade: 0.6, //遮罩透明度
			btn:false,
			closeBtn:false,
			shift: -1, //0-6的动画形式，-1不开启
			content:loginHtml
		});

	});

	
})
/*大转盘转完之后出结果的弹框*/
function showAlert(){
	var mycontHtml='<div class="alert-bg">' +
		'<p class="alert-result">中奖了!</p>' +
		'<p class="alert-cont">恭喜您获得二等奖，请不要忘记去在有效期内使用优惠券哟！优惠券吗请到我的里面查看并且使用</p>'+
		'<div class="alert-btn">知道了</div>'+
		'</div>'

	layer.open({
		type: 1,
		title: false,
		closeBtn: false,
		shadeClose: false,
		content: mycontHtml,
		style: 'width:90%;background-color:white;border-radius:5px;padding:30px 0px;'
	});
}