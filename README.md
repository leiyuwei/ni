ni.js

## 入门

更多实例在App文件夹项目下

```
<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
		<title></title>

	</head>

	<body>

		<header class="mui-bar mui-bar-nav">
			<h1 class="mui-title">ni 好</h1>
		</header>
		<div class="mui-content">
			<button type="button" class="mui-btn" onclick="gallery()">照片选取</button>
			<button type="button" class="mui-btn" onclick="sendShare()">打开分享</button>
			<button type="button" class="mui-btn" onclick="sendMsg()">页面通知</button>
			<button type="button" class="mui-btn" onclick="getCache()">缓存信息</button>
			<button type="button" class="mui-btn" onclick="openSlider()">侧边菜单</button>
			<br />
			<button type="button" class="mui-btn" onclick="sliderWindow()">多窗口滑动切换</button>
		</div>

		<script src="js/ni.js"></script>
		<script>
			var sm, group
			var broadcast = new ni.Broadcast()

			// 删除之前say事件
			broadcast.remove('say')

			// 监听say事件
			broadcast.listen('say', function(data) {
				alert('Hello, ' + data.name)
			})
			
			

			ni.ready(function() {
				console.log('ni ready')
			})

			ni.plusReady(function() {
				console.log('ni plusReady')

				// 初始化侧滑菜单
				sm = new ni.SliderMenu({
					url: '2.html'
				})

			})

			/**
			 * 照片选取
			 */
			function gallery() {
				ni.gallery(function(err, imgs) {
					var arr = []
					for(var i = 0; i < imgs.length; i++) {
						arr.push(imgs[i])
					}
					alert(arr)
				}, 10) //10张
			}

			/**
			 * 打开分享
			 */
			function sendShare() {
				// wxhy: 微信好友    
				// wxpyq: 微信朋友圈
				// qq: 腾讯QQ
				// sinaweibo: 新浪微博
				new ni.Share('qq', function(err, data) {
					if(err) {
						console.log(err)
					}
					console.log(JSON.stringify(data))
				}, {
					img: '_www/img/vhp.png', //图片地址
					href: 'https://github.com/NewsNIng/ni', //分享的超链接
					title: '分享标题', //当且仅当href存在时有效
					content: '分享内容' //当且仅当href存在时有效
				})
			}

			/**
			 * 页面通知
			 */
			function sendMsg() {

				// 发送say事件
				broadcast.send('say', {
					name: 'Ni Hao'
				}, {
					self: true, // 是否通知当前页面  默认不通知
					//ids: [] // 通知特定id的webview, 默认为全部
				})
			}

			/**
			 * 获取缓存
			 */
			function getCache() {
				// 获取点击次数，本地标识不存在时，初始化默认值为1
				var clickCount = new ni.Cache('CLICK_COUNT', 1)
				// 每次点击自增1，同时被保存到本地
				alert(clickCount.data++)
			}

			/**
			 * 侧边菜单
			 */
			function openSlider() {
				sm && sm.show()
			}

			/**
			 * 窗口滑动切换
			 */
			function sliderWindow() {
				plus.webview.create('parent.html').show('pop-in', 250)
			}
		</script>
	</body>

</html>
```
