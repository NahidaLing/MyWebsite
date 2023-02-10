window.addEventListener('load', function () {
	iziToast.settings({
		timeout: 10000,
		close: false,
		progressBar: true,
		layout: '1',
		backgroundColor: '#00000040',
		titleColor: '#efefef',
		messageColor: '#efefef',
		icon: 'Fontawesome',
		iconColor: '#efefef',
	});
	let bgimg = Math.floor(Math.random() * 9) + 1;
	document.body.style.background = "url(https://api.maho.cc/random-img/pc.php?12) no-repeat"//"url(./source/img/background" + bgimg + ".webp) no-repeat"
	// loadJS('source/js/yinghua.js',function(){

	// });

	showCard ("test","page-home");
})
function loadJS( url, callback ){
    var script = document.createElement('script'),
        fn = callback || function(){};
    script.type = 'text/javascript';
     //IE
    if(script.readyState){
        script.onreadystatechange = function(){
            if( script.readyState == 'loaded' || script.readyState == 'complete' ){
                script.onreadystatechange = null;
                fn();
            }
        };
    }else{
        //其他浏览器
        script.onload = function(){
            fn();
        };
    }
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}
function showCard(lastehide,cardid) {
	let hide = document.getElementById(lastehide)
	let cards = document.getElementById(cardid)
	hide.style.opacity = 0;
	setTimeout( function(){
		hide.style.display = "none";
		cards.style.display = ""
		cards.style.opacity = 1;
	}, 500 );
}

function bt_info() {
	showCard ("page-home","page-info");
}
function bt_blog() {
	showCard ("page-home","test");
	setTimeout( function(){
		window.open("/blog/","_self" );
	}, 500 );
}
function bt_text_click () {
	iziToast.show({
		timeout: 1000,
		icon: "fa-solid fa-circle-exclamation",
		message: '?????'
	});
}
layui.config({
	version: '1627194905069' //更新 js 缓存
});
layui.use(['layer'], function () { //引入需要的模块
	var $ = layui.jquery, layer = layui.layer //弹层
	window.bt_email = function () {
		layer.open({
			title: '邮箱联系',
			content: '<span style="color:#000000">EMAIL:catfeitu@qq.com</span>',
			btn: ['打开邮箱', '复制邮箱', '取消'],
			yes: function(index, layero){
				layer.open({
					type: 2,
					area: ['90%', '98%'],
					title: '邮箱联系',
					content: 'http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=RyQmMyEiLjMyBzY2aSQoKg',
					maxmin:true
				});
			},
			btn2: function(index, layero){
				copy('catfeitu@qq.com');
				iziToast.show({
					timeout: 1000,
					icon: "fa-solid fa-circle-exclamation",
					message: '复制成功'
				});
			},
			btn3: function(index, layero){
			},
			cancel: function(){ 
				//右上角关闭回调
				//return false 开启该代码可禁止点击该按钮关闭
			}
		});
	};
	window.bt_qq = function () {
		layer.open({
			title: 'QQ联系',
			content: '<span style="color:#000000">QQ:3205711786</span>',
			btn: ['快速跳转', '复制QQ', '取消'],
			yes: function(index, layero){
				layer.open({
					type: 2,
					area: ['70%', '70%'],
					title: 'QQ联系',
					content: 'https://wpa.qq.com/msgrd?v=3&uin=3205711786&site=qq&menu=yes',
				});
			},
			btn2: function(index, layero){
				copy('3205711786');
				iziToast.show({
					timeout: 1000,
					icon: "fa-solid fa-circle-exclamation",
					message: '复制成功'
				});
			},
			btn3: function(index, layero){
			},
			cancel: function(){ 
				//右上角关闭回调
				//return false 开启该代码可禁止点击该按钮关闭
			}
		});
	};
	window.bt_discord = function () {
		layer.open({
			title: 'Discord',
			content: '<span style="color:#000000">Discord标签:feitu#8429</span>',
			btn: ['复制Discord标签并跳转', '仅复制标签', '取消'],
			yes: function(index, layero){
				copy('feitu#8429');
				window.open("https://discord.com/channels/@me", "_blank", "resizable,scrollbars,status");
				iziToast.show({
					timeout: 1000,
					icon: "fa-solid fa-circle-exclamation",
					message: '已在新窗口打开Discord'
				});
			},
			btn2: function(index, layero){
				copy('feitu#8429');
				iziToast.show({
					timeout: 1000,
					icon: "fa-solid fa-circle-exclamation",
					message: '复制成功'
				});
			},
			btn3: function(index, layero){
			},
			cancel: function(){ 
				//右上角关闭回调
				//return false 开启该代码可禁止点击该按钮关闭
			}
		});
	};
	window.bt_github = function () {
		window.open("https://github.com/CatNiangFeitu", "_blank", "resizable,scrollbars,status");
		iziToast.show({
			timeout: 1000,
			icon: "fa-solid fa-circle-exclamation",
			message: '已在新窗口打开Github'
		});
	};
	window.bt_home = function () {
		showCard ("page-info","test");
		showCard ("test","page-home");
		iziToast.show({
			timeout: 1000,
			icon: "fa-solid fa-circle-exclamation",
			message: '已返回到首页'
		});
	};
	window.bt_tools_qbind = function () {
		if (window.screen.width < 1000) {
			layer.open({
				type: 2,
				area: ['100%', '100%'],
				title: 'Q绑查询',
				maxmin:true,
				content: 'http://www.feitu.tk/tools/qbind/qq.html',
			});
		}
		else {
			layer.open({
				type: 2,
				area: ['30%', '100%'],
				title: 'Q绑查询',
				maxmin: true,
				shade: false,
				fixed: true,
				content: 'http://www.feitu.tk/tools/qbind/qq.html',
			});
		}
	};
});
function copy(message) {
	let transfer = document.createElement('input');
	document.body.appendChild(transfer);
	transfer.value = message
	transfer.focus();
	transfer.select();
	if (document.execCommand('copy')) {
		document.execCommand('copy');
	}
transfer.blur();
document.body.removeChild(transfer);
}
//屏蔽右键
document.oncontextmenu = function () {
    iziToast.show({
        timeout: 2000,
        icon: "fa-solid fa-circle-exclamation",
        message: '为了浏览体验，本站禁用右键'
    });
    return false;
}
