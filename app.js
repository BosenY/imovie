var express = require('express')
var path = require('path')
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000
var app = express()

app.set('views', './views/pages')
app.set('view engine', 'jade')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname,'bower_components')))
app.listen(port)

console.log('iMovie started on port ' + port)

//index page
app.get('/', function (req, res)  {
	res.render('index', {
		title:'iMovie 首页',
		movies: [{
			title:'釜山行',
			_id: 1,
			poster:'http://imgs.aixifan.com/content/2016_09_10/1473499184.jpg'
		},{
			title:'釜山行',
			_id: 2,
			poster:'http://imgs.aixifan.com/content/2016_09_10/1473499184.jpg'
		},{
			title:'釜山行',
			_id: 3,
			poster:'http://imgs.aixifan.com/content/2016_09_10/1473499184.jpg'
		},{
			title:'釜山行',
			_id: 4,
			poster:'http://imgs.aixifan.com/content/2016_09_10/1473499184.jpg'
		},{
			title:'釜山行',
			_id: 5,
			poster:'http://imgs.aixifan.com/content/2016_09_10/1473499184.jpg'
		},{
			title:'釜山行',
			_id: 6,
			poster:'http://imgs.aixifan.com/content/2016_09_10/1473499184.jpg'
		}]
	})
})

//admin page
app.get('/admin/movie', function (req, res)  {
	res.render('admin', {
		title:'iMovie 后台管理',
		movie: {
			title: ' ',
			doctor: ' ',
			country: ' ',
			year: ' ',
			language: ' ',
			summary: ' ',
			poster: ' ',
			flash: ' '
		}
	})
})

//detail page
app.get('/movie/:id', function (req, res)  {
	res.render('detail', {
		title: 'iMovie 影片详情页',
		movie: {
			title: '釜山行',
			doctor: '延相昊',
			country: '韩国',
			year: 2016,
			language: '韩语',
			poster: 'http://imgs.aixifan.com/content/2016_09_10/1473499184.jpg',
			flash: 'http://cdn.aixifan.com/flash/player-view-homura.swf?beta=true&type=acfun&vid=4172159&videoId=4172159&autoplay=0',
			summary: '《釜山行》是由延相昊执导，孔刘、马东锡、郑有美、崔宇植、安昭熙、金秀安等主演的灾难片，影片于2016年7月20日在韩国上映。影片讲述主人公单亲爸爸石宇与女儿秀安乘坐KTX高速列车往釜山，列车上由一位少女身上带来的僵尸病毒开始肆虐且不断扩散，倾刻间列车陷入灾难的故事'
              }
	})
})

//list page
app.get('/admin/list', function (req, res)  {
	res.render('list', {
		title:'iMovie 后台-影片列表',
		movies: [{
			_id: 1,
			title: '釜山行',
			doctor: '程亮/林博',
			country: '韩国',
			year: 2014,
			language: '汉语',
			summary: '《釜山行》是由延相昊执导，孔刘、马东锡、郑有美、崔宇植、安昭熙、金秀安等主演的灾难片，影片于2016年7月20日在韩国上映。影片讲述主人公单亲爸爸石宇与女儿秀安乘坐KTX高速列车往釜山，列车上由一位少女身上带来的僵尸病毒开始肆虐且不断扩散，倾刻间列车陷入灾难的故事',
			poster: 'http://imgs.aixifan.com/content/2016_09_10/1473499184.jpg',
			flash: 'http://cdn.aixifan.com/flash/player-view-homura.swf?beta=true&type=acfun&vid=4172159&videoId=4172159&autoplay=0'
		}]
	})
})
