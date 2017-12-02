# <center>Báo cáo môn học Các vấn đề hiện đại trong Công nghệ 
## <center> HTML5 Game : Framework Phaser
### Thành viên nhóm
* Nguyễn Văn Thành
* Phan Công Thắng
* Vũ Thị Thùy
---
## I. Giới thiệu
Phaser là một game framework cho desktop và mobile. Nó nhanh, miễn phí và là mã nguồn mở. Phiên bản Phaser hiện tại là 2.6.2. Nó hỗ trợ cho cả WebGL và Canvas. Nó có một loạt các tính năng giúp bạn trong việc phát triển game. 
## II. Cài đặt
1. Cài đặt Web server. 

	Sử dụng WAMP Server hoặc XAMPP , cả hai đều có hướng dẫn cài đặt dễ dàng. Đặc biệt WAMP cài đặt một biểu tượng vào khay hệ thống của bạn, từ đó bạn có thể dừng lại và khởi động lại các dịch vụ, cũng như sửa đổi cài đặt Apache chẳng hạn như tạo một bí danh thư mục mới cho một dự án.
2. Cài đặt Editor
	
	Sử dụng SublimeText hoặc Editor ưa thích.
3. Tải thư viện Phaser

	* Tải thư viện Phaser từ trang chủ của Phaser : [https://phaser.io ](https://phaser.io "Phaser")
	* Giải nén file RAR download được sau đó coppy vào Project Game.
## III. Chuẩn bị dữ liệu
1. **Cấu trúc Project**
2. **Assets**
3. **Unit**
4. **Img-for-sentences**

	Danh sách các hình ảnh cho mỗi chủ đề
 
	Với chủ đề “Time”(hình ảnh “1” trong “unit” ) ta sẽ có hình ảnh s_1 (trong “img-for-sentences”) tương ứng. Trong s_1 lại là danh sách các hình ảnh liên quan đến các câu hỏi về thời gian. 
 

5.	**Atlasjson**
	
	Như trình bày ở trên , ta có hình ảnh s_1 sẽ gồm danh sách các **frame** , ứng với mỗi **frame** là 1 câu hỏi trong chủ đề “**Time**”.
Bây giờ ta sẽ cần dùng **Atlasjson** để lấy các **frame** trong “s_1”.

	a.	**Atlas là gì ?** 

	*	Như ta đã biết trong địa lý : Atlat tiếng Hy Lạp cổ đại: Ἄτλας là thuật ngữ dùng để chỉ một tập bản đồ; điển hình là bản đồ trái đất hoặc một khu vực của trái đất.
	*	Đối với Phaser , Atlas cũng đóng vai trò như một bản đồ đối với 1 hình ảnh nào đó:	
 		> ### atlasJSONHash(key,textureURL,atlasURL,atlasData)

		* Key : Tên của Atlas.
        * TextureURL : URL hình ảnh cần chuyển về Atlas.
		* AtlasURL : URL AtlasJson.
		* AtlasData : Định dạng load Atlas.

	b.	**AtlasJson là gì ?** 

	Nếu Atlas giống như 1 tấm bản đồ thì ta có thể coi AtlasJson giống như 1 cuốn sổ ghi lại các địa chỉ của các nhà :
Giả sử mỗi hình ảnh là một bản đồ thì tương ứng ta có các frame trên hình ảnh là các ngôi nhà trên bản đồ và AtlasJson chính là cuốn sổ địa chỉ mà ta cần phải có để xác định các frame:  

	Xét Object thứ nhất (frame 1)   ta có : 
	*	“filename” = “0” : tên File là “0”
	*   “frame” : {x = 1 , y = 1 , w = 164 , h: 163} 
		* X là hoành độ góc trên cùng bên trái của frame.
		* Y là tung độ góc trên bên trái của frame.
		* W là width – độ rộng của frame.
		* H là height – chiều cao của frame.

Như vậy khi ta có 1 hình ảnh gồm nhiều frame và 1 AtlasJson ta sẽ  lấy được 1 danh sách các frame trong hình ảnh đó.
6. Sentences

	Gồm tập hợp các file Json , mỗi file Json là 1 chủ đề : 
	Hình ảnh trên là file Json về chủ đề “Time” . File này là 1 mảng các Object . Mỗi object lại là một câu hỏi :
	* Line : Câu đầy đủ / chính xác . 
	* Alt1 : Câu thứ nhất bị thiếu .
	* Alt2 : Câu thứ 2 bị thiếu . tương tự với alt3 và alt4. 

## IV. Xây dựng game
1.	**Tạo file index.html trong Project game**
2.	**Import thư viện Phaser và các file Javascript trong index.html**
	```
	<script type="text/javascript" src='phaser.min.js'></script>
	<script type="text/javascript" src='Boot.js'></script>
	<script type="text/javascript" src='Preloader.js'></script>
	<script type="text/javascript" src='Welcome.js'></script>
	<script type="text/javascript" src='MainMenu.js'></script>
	<script type="text/javascript" src='Play.js'></script> 
	```
3. **Khởi tạo game**

	```javascript
	<script type="text/javascript">
		window.onload = function(){
			var game = new Phaser.Game(1000,500,Phaser.CANVAS,'');
			game.state.add('Boot',Game.Boot);
			game.state.add('Preloader',Game.Preloader);
			game.state.add('Welcome',Game.Welcome);
			game.state.add('MainMenu',Game.MainMenu);
			game.state.add('Play',Game.Play);
			game.state.start('Boot');
		}
	</script>
	```

	a. **Phaser.Game**
	> ### new Game(width, height, renderer, parent, state, transparent, antialias, physicsConfig)

	Tên | Kiểu | Mặc định | Mô tả
	--- | --- | --- | ---
	width	|Số / Chuỗi	|800	|Chiều rộng trò chơi ( pixel).
	height|	Số / Chuỗi|	600|	Chiều cao trò chơi (pixel).
	Renderer	|Số|	Phaser.AUTO	|Trình renderer sử dụng.
	Parent	|Chuỗi /HTML Element	|‘’|	Phần tử DOM trong frames của trò chơi .
	State|	Object|	NULL	|Đối tượng trạng thái mặc định.Đối tượng này bao gồm các chức năng Phaser.State(tải trước , tạo , cập nhật và hiển thị) hoặc có thể là NULL.|
	|Transparent|	Boolean	|False|	Sử dụng Background Canvas trong suốt hoặc  không .|
	Antialias	|Boolean	|True|	Vẽ tất cả các kết cấu hình ảnh chống aliased hay không. Mặc định là cho kết cấu mịn, nhưng vô hiệu hóa nếu trò chơi của bạn có tính năng pixel.|
	PhysicsConfig|	Object	|NULL	|Một vật cấu hình đối tượng để đáp ứng mặt Vật lý thực tế.
	b. **Phaser.State**
	> ### new State()
	**State** là một lớp cơ sở mà có thể được mở rộng. Nó cung cấp truy cập nhanh đến các chức năng phổ biến như camera, bộ nhớ cache, đầu vào, kết hợp, âm thanh và nhiều hơn nữa.
Về cơ bản , khi chúng ta chia một trò chơi thành “blocks” , ví dụ như màn hình menu , màn hình chơi game , màn hình config game , … thì mỗi “blocks” này có thể phát triển thành một state.
	* **Game.state.add(keyState,gamePrototype)**

		States tuyên bố được thực hiện bởi game.state.add: đối số đầu tiên là tên của state, trong khi thứ hai là tên của hàm để gọi bên trong state đó.
	* **Game.state.start(keyState)**

		* Khởi chạy states có tên là keyState. 
	
		* Trong trường hợp này ta khởi chạy state Boot đầu tiên. 
4. **Boot.js**
	```javascript
	var Game = {};
	Game.Boot = function(game){};
	Game.Boot.prototype = {
		preload:function(){
			this.load.image('preloaderBar','assets/preloader.png')
		},
		create:function(){
			this.state.start('Preloader');
		}
	}
	```
	* **Boot** là một state đặc biệt : nó điều chỉnh các giai đoạn và tỷ lệ.
	* **Boot** gồm tính năng preload và tạo các functions().
		* **Preload**: Tải hình ảnh thanh load game.
		* **This.state.start(‘Preloader’)**:Chuyển qua state Preloader.

5. **Preloader.js**
	```javascript
	Game.Preloader = function(game){
		this.preloadBar = null ; 
	}
	WebFontConfig = {
	    google: {
	      families: ['Revalia']
	    }
	};
	Game.Preloader.prototype = {
		preload:function(){
			this.load.image('background-welcome', 'assets/background-welcome.png');
			this.load.image('background-menu', 'assets/background-menu.png');
	
		    this.load.image('is-country', 'assets/is-country.png');
		    this.load.image('is-number', 'assets/is-number.png');
		    this.load.image('is-yourname', 'assets/is-yourname.png');
	
		    this.load.atlas('0', 'img/s_0.png', 'atlasjson/atlasjson_0.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
		    this.load.atlas('1', 'img/s_1.png', 'atlasjson/atlasjson_1.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
	
		     this.load.image('t0', 'assets/unit/0.png');
		     this.load.image('t1', 'assets/unit/1.png');
		},
		create:function(){
			this.state.start('Welcome');
		}
	}
	```

	**Preloader**: **Loader** xử lý tải tất cả các nội dung bên ngoài như **Hình ảnh, Âm thanh, Textures Atlases** và các tệp dữ liệu. Trình tải sử dụng kết hợp tải trọng thẻ (ví dụ: các phần tử Hình ảnh) và **XHR** và cung cấp sự gọi lại tiến bộ và hoàn thành. Tải song song (xem enableParallel) được hỗ trợ và bật theo mặc định. Load-trước hành vi của các tài nguyên song song được kiểm soát bởi các điểm đồng bộ như đã thảo luận trong **withSyncPoint**.

	* **Game.load.script()**
 
		Thêm tệp JavaScript ('script') vào Loader. Các JavaScript được nạp sẽ tự động chuyển thành một thẻ script và được thực hiện, vì vậy hãy cẩn thận những gì bạn tải! Một callback, sẽ được gọi như là thẻ script đã được tạo ra, cũng có thể được chỉ định. Việc gọi lại phải trả lại dữ liệu có liên quan.
		
		Tên	|Kiểu	|Mô tả
		--- | --- | ---
		Key	|String|	Key của file Script.
		url	|String|	URL của file JavaScript.
		Callback|	Function|	Gọi lại tùy chọn sẽ được gọi sau khi thẻ script đã tải, vì vậy có thể thực hiện xử lý bổ sung.
		callbackContext	|Object|	Bối cảnh theo đó gọi lại sẽ được áp dụng. Nếu không được chỉ định, nó sẽ sử dụng bản thân callback như là ngữ cảnh.

	* **Game.load.image()**
 
		Thêm 'hình ảnh' vào Loader.
		Tên|	Kiểu|	Mô tả
		--- | --- | ---
		key	|String|	Key của ảnh trong “game”.
		url |	String|	URL của file ảnh.
		overwrite|	boolean	|Nếu một tập tin chưa tải với một phím kết hợp đã tồn tại trong hàng đợi, mục này sẽ ghi đè lên nó.

	* **Game.load.atlas()**
 
		Thêm một cấu trúc Atlas mới ('textureatlas') vào Loader. Textures Atlases có thể được tạo ra bằng các công cụ như Texture Packer và Shoebox.
		Tên	|Kiểu	|Mô tả
		--- | --- | ---
		Key	|String	|Key của file cấu trúc atlas.
		TextureURL|	String|	URL của file hình ảnh cấu trúc atlas.
		atlasURL	|String|	URL của tệp dữ liệu cấu trúc Atlas(json/xml).
		atlasData	|Object	|Đối tượng dữ liệu ( json hoặc xml) . Không cần nếu dữ liệu được nạp từ URL.
		Format	|Number|	Giá trị mô tả định dạng dữ liệu.
	* **Game.load.spritesheet()**
 
		Thêm một sprite sheet mới ('spritesheet') vào bộ nạp.
		Sprite : là một thành phần không thể thiếu trong game, là một đối tượng đồ họa được vẽ lên màn hình(Screen). Có thể thao tác chúng và làm chúng di chuyển.
		Sprite Sheet : là tập hợp nhiều các Sprite . Giúp dễ dàng quản lý file hình ảnh , làm giảm kích thước tập tin tổng thể so với từng Sprite riêng rẽ.
		Tên|	Kiểu|	Mô tả
		--- | --- | ---
		Key|	String|	Khóa chính của file Sheet
		url|	String|	URL của file Sheet
		frameWidth|	Number|	Chiều rộng mỗi một frame riêng lẻ.
		frameHeight|	Number	|Chiều cao mỗi một frame riêng lẻ.
		frameMax	|Number	|Số khung hình(frames) trong sprite sheet. Nếu giá trị là null , nó sẽ tự chia thành các khung(frame).
		Margin|	Number|	Nếu các frame đã được vẽ lề thì cần xác định giá trị .
		spacing|	Number	|Giá trị khoảng cách giữa các frame trong sprite sheet.
		
	Sau khi nạp xong các thành phần vào Loader. Hàm create sẽ chuyển state sang state Welcome

	
**6.	Welcome.js**
 	```javascript
	Game.Welcome = function(game){
	};
	Game.Welcome.prototype = {
		create:function(game){
	
			this.add.sprite(0, 0, 'background-welcome');
	
			this.createButton(game,"Play",game.world.centerX,game.world.centerY-200,100,25,function(){
				this.state.start('MainMenu');
			});
			this.createButton(game,"About",game.world.centerX,game.world.centerY-150,100,25,function(){
				this.state.start('');
			});
		},
		update:function(game){
	
		},
		createButton:function(game,string,x,y,w,h,callback){
			var button1  = game.add.button(x,y,'button',callback,this,2,1,0);
			button1.anchor.setTo(0.5,0.5);
			button1.width=w;
			button1.height= h ; 
	
			var txt = game.add.text(button1.x,button1.y,string,{
				font:"14px Arial",
				fill:"#f1f1f1",
				align:"center"
			});
			txt.anchor.setTo(0.5,0.5);
		}
	}
	```
	*	Tạo hàm **createButton** để custom button, gồm các params :  
		*	**Game** : Trò chơi được khởi tạo của chúng ta .
		*	**String** : Value của button .
		*	**X** : vị trí X .
		*	**Y** : vị trí Y.
		*	**W** : chiều rộng button.
		*	**H** : chiều cao button.
		*	**Callback** : hàm được gọi khi click vào button.
	*	**Game.world** : Một trò chơi chỉ có một **world**. **World** là một nơi trừu tượng trong đó tất cả các đối tượng trò chơi sống. Nó không bị ràng buộc bởi các giới hạn **stage** và có thể được bất kỳ kích thước. Bạn nhìn vào **world** thông qua máy ảnh. Tất cả các đối tượng trò chơi sống trong thế giới ở các tọa độ trên **world**. Theo mặc định, **world** được tạo cùng kích thước với **Stage**. 
	*	**Game.world.centerX** : 
Lấy vị trí **X** tương ứng với điểm trung tâm của **world**.
	*	**Game.world.centerY** : 
Lấy vị trí **Y** tương ứng với điểm trung tâm của **world**.
	*	Khi tạo xong các button đã được custom cho trò chơi . Khi click vào button “**Play**” hàm **callback** sẽ được gọi và state chuyển thành **MainMenu**.
**7.	MainMenu.js**
 	```javascript
	Game.MainMenu = function(game){
	};
	var unitClick,countSet = 0 ;
	Game.MainMenu.prototype = {
		create:function(game){
			this.add.sprite(0, 0, 'background-menu');
			this.createButton(game,"Verbs 1",'t19',200,100,120,50,function(){
				unitClick = 19 ;
				this.state.start('Play');
			});
			this.createButton(game,"Verbs 2","t20",300,100,120,50,function(){
				unitClick = 20 ;
				this.state.start('Play');
			});
			 var buttonBack  = game.add.button(50,30,'button-back',function (){game.state.start('Welcome');},this,2,1,0);
			    buttonBack.anchor.setTo(0.5,0.5);
			    buttonBack.width=50;
			    buttonBack.height= 50 ; 
		},
		update:function(game){
		},
		createButton:function(game,string,picturename,x,y,w,h,callback){
			var button1  = game.add.button(x,y,picturename,callback,this,2,1,0);
	
			button1.anchor.setTo(0.5,0.5);
			button1.width=75;
			button1.height=75 ; 
		},
	}
	```
	*	Hàm createButton của MainMenu.js được custom thêm params “pictureName”  và loại bỏ text cho button. Button này đơn thuần chỉ là 1 hình ảnh .
	*	Khi click button hàm callback được gọi và truyền giá trị cho biến “unitClick” . Ở đây “unitClick” sẽ nằm trong khoảng từ 0 đến 23 ,  tương ứng với số file sentencesJson . Và sau đó state sẽ chuyển sang Play state.
8.	Play.js
	*	Khởi tạo các biến toàn cục.
	 	```javascript
		Game.Play = function(game){
		};
		
		var myJson ={} ; 
		var sets  ;  // biến lưu các bộ câu hỏi của Unit
		var answerSet=new Array(); // mảng lưu các bộ đáp án 
		var countAnswerSet = 0; // biến đếm bộ đáp án
		var lengthAnswerSet ; // chiều dài số phần tử bộ đáp án
		var countQuestion = 0 ;  // biến đếm số câu hỏi đã trả lời
		var groupButton1 ; // group lưu các button là các đáp án
		var imgSuggest; // hình ảnh gợi ý cho câu hỏi 
		var boxanswer; // hình ảnh - background trả lời 
		// mảng lưu các từ đã trả lời đúng cho câu hỏi
		var answerinBox = ['...','...','...','...','...']; 
		var answerinBoxTxt;	// biến text để chứa câu trả lời (nằm đè trên boxanswer)
		var circleNotifi; // biến lưu hình tròn (thông báo trả lời đúng hay sai)
		var graphics;	// biến đồ họa 
		var countCorrect = 0 , txtCountCorrect;  // đếm số câu trả lời đúng 
		var countWrong  = 0 , txtCountWrong; 	// đếm câu trả lời sai
		```
	*	Khi bắt đầu chơi mới ta cần cài cho các giá trị trở thành 0 .
		```javascript
		Game.Play.prototype = {
			create:function(game) {
		
				countSet = 0;
				countQuestion = 0 ;
				countAnswerSet = 0 ;
				countCorrect = 0 ;
				countWrong  = 0 ; 
				
				var fileName  = 'sentences/sentences_'+unitClick+'.json';
		
		
				function getAllSupportedItems( ) {
				    return $.getJSON(fileName).then(function (data) {
				        return data;
				    });
				}
		
				
				// Usage:
				getAllSupportedItems().done(function (items) {
		
				    myJson = items; 
				    sets = myJson.sets;
		```
 
	*	Tiếp theo  ta cần lấy URL của file sentences json tương ứng với “unitClick” được truyền từ bên MainMenu.js
	*	Hàm getAllSuportedItems hỗ trợ đọc file sentences json (sử dụng jquery) và trả lại chuỗi Json được bắt lại sau khi đọc xong. 
	*	Thêm các element cần thiết cho game
 		```javascript
		groupButton1 = game.add.group();
		groupAnswerinBox  = game.add.group();
		// background cho state Play
		game.add.sprite(0, 0, 'background-topic');

		// button Back
	    var buttonBack 	= game.add.button(50,30,'button-back',function (){game.state.start('MainMenu');},this,2,1,0);
	    buttonBack.anchor.setTo(0.5,0.5);
	    buttonBack.width=50;
	    buttonBack.height= 50 ; 

	    // background cho hình ảnh gợi ý
	   	var bgrImgS = game.add.sprite(game.world.centerX-130,20,'background-imgSuggest');
	   	bgrImgS.scale.setTo(1.5,1);
	    bgrImgS.alpha = 0.7; 

	    // background hộp câu trả lời
	    boxanswer = game.add.sprite(200,150,'box-answer');
		boxanswer.scale.setTo(0.75,0.25);
		
		// hình ảnh gợi ý
		imgSuggest = game.add.sprite(game.world.centerX-50,20,unitClick);
	    imgSuggest.frameName = countSet.toString();
	    imgSuggest.backgroundColor = "white";
	    imgSuggest.inputEnabled = true;
	    imgSuggest.input.pixelPerfectClick = true;
		```
	*	Phân tích JSON Sentences , tạo các bộ câu trả lời . Ban đầu countSet  = 0 , tức là ta đang lấy câu đầu tiên trong bộ câu hỏi (sets). 
 
		||

		Ở đây answerSet(bộ câu trả lời) sẽ là 1 mảng 2 chiều , ta sẽ phân tích thành 1 ma trận : 
 
		Với mỗi hàng ngang sẽ là 1 answerSet ( 1 bộ câu trả lời ) và ta có 4 bộ câu câu trả lời  . 
		Số bộ trả lời còn tùy thuộc vào số từ của câu trả lời đúng : .
		Và code của trình tự này là : 

			set =sets[countSet];
		    alt1 = set.alt1;	alt1 = alt1.split(" "); 
		    alt2 = set.alt2;	alt2 = alt2.split(" ");
		    alt3 = set.alt3;	alt3 = alt3.split(" ");
		    alt4 = set.alt4;	alt4 = alt4.split(" ");
		    line = set.line;	line = line.split(" ");
		    lengthAnswerSet = line.length;

		    updateAnswerInBox(game,lengthAnswerSet);
		    
		    for( i = 0 ; i < line.length ; i++){
		    	answerSet[i] = new Array();
		    	if ( alt1[i]!=='_')	answerSet[i].push(alt1[i]) ; 
		    	if ( alt2[i]!=='_')	answerSet[i].push(alt2[i]) ; 
		    	if ( alt3[i]!=='_')	answerSet[i].push(alt3[i]) ; 
		    	if ( alt4[i]!=='_')	answerSet[i].push(alt4[i]) ; 
		    	answerSet[i].push(line[i]) ; 
		    	answerSet[i] = shuffle(answerSet[i]);
		    }

	* Và bây giờ ta chỉ cần thêm các bộ câu trả lời vào các button. Trước hết ta thêm bộ câu trả lời đầu tiên vào button ( countAnswerSet = 0 ) 
		```javascript
			 var width = 0 ; 
			    for( j = 0 ; j< answerSet[countAnswerSet].length ; j++){
			    	width += 50;
			    	width += answerSet[countAnswerSet][j].length*16 ; 
			    }
	
			    x_first =  (1100 - width)/2;
	
			    for( j = 0 ; j< 5 ; j++){
			    	if(answerSet[countAnswerSet][j]){
			    		createButton(game,answerSet[countAnswerSet][j],line[countAnswerSet],x_first,game.world.centerY+50,answerSet[countAnswerSet][j].length*16,50,function(){});
			    		x_first += 50 ;
			    		x_first += answerSet[countAnswerSet][j].length*16;
			    	}
			    	
			    }
		```
	* createButton()

				function createButton(game,string,answer,x,y,w,h,callback){
					......
				
					button1.events.onInputDown.add(checkAnswer, 
						{game:game,textClick:string , answer:answer , button : button1 , txt :txt ,groupButton1:groupButton1});
				}

		 Khi click vào button sẽ gọi đến hàm checkAnswer để kiếm tra đáp án trong button có đúng hay không .Ta cần truyển thêm tham số cho hàm checkAnswer , quan trọng nhất là textClick (text hiển thị trên button) và answer(câu trả lời chính xác) . 
	* checkAnswer()
			
		 	function checkAnswer(items){
				// alert(this.textClick+'	'+this.answer);
				if(this.textClick === this.answer){
			
					graphics.beginFill(0x00FF00, 1);
					graphics.drawCircle(500, 450, 75);
					this.game.time.events.add(1000, function() {    
						graphics.beginFill(0xFFFFFF, 1);
						graphics.drawCircle(500, 450, 75);
					}, this);
			
					imgSuggest.kill();
					this.button.kill();
					this.txt.kill();
					this.groupButton1.removeAll(false,false);
			
					countCorrect++;
					txtCountCorrect.text = countCorrect;
			
					nextAnswerSet(this.game);
				}else{
					graphics.beginFill(0xFF0000, 1);
					graphics.drawCircle(500, 450, 75);
					this.game.time.events.add(1000, function() {    
						graphics.beginFill(0xFFFFFF, 1);
						graphics.drawCircle(500, 450, 75);
					}, this);
			
					items.kill();
					this.button.kill();
					this.txt.kill();
			
					countWrong++;
					txtCountWrong.text = countWrong;
				}
			}
		Sau khi callback của button được gọi nó sẽ truyền param textClick(text-đáp án lựa chọn) và answer(text-đáp án chính xác). Ta sẽ kiểm tra đáp án lựa chọn có là chính xác không. 
		Nếu sai ta sử dụng graphic ( đồ họa trong Phaser ) để hiển thị hiệu ứng chọn sai hủy button(đáp án) đó, tăng câu sai thêm 1 . 
		Còn nếu đúng ta sử dụng graphic ( đồ họa trong Phaser ) để hiển thị hiệu ứng chính xác ,hủy groupButton ( danh sách các button đáp án ) , hủy text , tăng số đáp án chính xác lên 1 và quan trọng nhất là chạy hàm nextAnswerSet() .
	* nextAnswerSet()

		 	function nextAnswerSet(game) {
				countAnswerSet++;
				if(countAnswerSet<lengthAnswerSet){
					imgSuggest = game.add.sprite(game.world.centerX-50,20,unitClick);
					...
			
				    set =sets[countSet];
				    ....
			
				    for( i = 0 ; i < line.length ; i++){
				    	answerSet[i] = new Array();
				    	...
				    }
			
				    for( j = 0 ; j< 5 ; j++){
				    	if(answerSet[countAnswerSet][j]){
				    		createButton(game,answerSet[countAnswerSet][j],line[countAnswerSet],x_first,game.world.centerY+50,answerSet[countAnswerSet][j].length*16,50,function(){});
				    	}
				    }
				}else{
					countAnswerSet=0; countSet++;
					if(countSet<20){
						answerinBox = ['...','...','...','...','...'];
						updateAnswerInBox(game,lengthAnswerSet);
			
						imgSuggest = game.add.sprite(game.world.centerX-50,20,unitClick); ... 
			
					    set =sets[countSet]; ...
					    
					    for( i = 0 ; i < line.length ; i++){
					    	answerSet[i] = new Array();
					    }
			
					    for( j = 0 ; j< 5 ; j++){
					    	if(answerSet[countAnswerSet][j]){
					    		createButton(game,answerSet[countAnswerSet][j],line[countAnswerSet],x_first,game.world.centerY+50,answerSet[countAnswerSet][j].length*16,50,function(){});
					    	}
					    }
					}else {
						answerinBox = [' ','You have completed.','Thank','you! <3',' '];
						updateAnswerInBox(game,5);
					}
				}
				
			}
		
		Sau khi trả lời đúng ta sẽ tăng biến đếm bộ câu trả lời thêm 1 . Nếu bộ câu trả lời chưa vượt quá , khi đó ta reset hình ảnh gợi ý mới , button được thêm bộ câu trả lời mới và vẫn có hàm callback() đến checkAnswer và nếu checkAnswer đúng sẽ lại chạy đến hàm nextAnswerSet (đệ quy) . 
		Nó sẽ đệ quy như thế cho đến khi biến đếm bộ câu trả lời bị vượt quá số lượng. Khi này biến countSet(đếm câu hỏi) sẽ được tăng thêm 1 đơn vị. và nó sẽ nhảy sang câu hỏi tiếp theo với danh sách bộ câu trả lời mới. 
		Trường hợp tiếp theo là khi biến countSet bị vượt quá ( số câu hỏi là có giới hạn ) khi đó ta sẽ hiển thị thông báo là Unit đã hoàn thành.  
 
## V. Tài liệu tham khảo
1.	[https://phaser.io/](https://phaser.io/)
2.	[http://www.html5gamedevs.com/forum/14-phaser/](http://www.html5gamedevs.com/forum/14-phaser/)
3.	[https://gamedevelopment.tutsplus.com/articles/how-to-learn-the-phaser-html5-game-engine--gamedev-13643](https://gamedevelopment.tutsplus.com/articles/how-to-learn-the-phaser-html5-game-engine--gamedev-13643)
4.	[http://jquery.com/](http://jquery.com/)

## VI. Demo
	Link demo game : [https://elearning-gamecom.000webhostapp.com](https://elearning-gamecom.000webhostapp.com)
		
