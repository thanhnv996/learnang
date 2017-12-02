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
1. Cấu trúc Project
2. Assets
3. Unit
4. Img-for-sentences

	Danh sách các hình ảnh cho mỗi chủ đề
 
	Với chủ đề “Time”(hình ảnh “1” trong “unit” ) ta sẽ có hình ảnh s_1 (trong “img-for-sentences”) tương ứng. Trong s_1 lại là danh sách các hình ảnh liên quan đến các câu hỏi về thời gian. 
 

5.	Atlasjson
	
	Như trình bày ở trên , ta có hình ảnh s_1 sẽ gồm danh sách các frame , ứng với mỗi frame là 1 câu hỏi trong chủ đề “Time”.
Bây giờ ta sẽ cần dùng Atlasjson để lấy các frame trong “s_1”.

	a.	Atlas là gì ? 

	*	Như ta đã biết trong địa lý : Atlat tiếng Hy Lạp cổ đại: Ἄτλας là thuật ngữ dùng để chỉ một tập bản đồ; điển hình là bản đồ trái đất hoặc một khu vực của trái đất.
	*	Đối với Phaser , Atlas cũng đóng vai trò như một bản đồ đối với 1 hình ảnh nào đó:	
 			
		> Key : Tên của Atlas.
        > TextureURL : URL hình ảnh cần chuyển về Atlas.
		> AtlasURL : URL AtlasJson.
AtlasData : Định dạng load Atlas.
b.	AtlasJson là gì ? 
Nếu Atlas giống như 1 tấm bản đồ thì ta có thể coi AtlasJson giống như 1 cuốn sổ ghi lại các địa chỉ của các nhà :
Giả sử mỗi hình ảnh là một bản đồ thì tương ứng ta có các frame trên hình ảnh là các ngôi nhà trên bản đồ và AtlasJson chính là cuốn sổ địa chỉ mà ta cần phải có để xác định các frame:  
  
			
Xét Object thứ nhất (frame 1)   ta có : 
	“filename” = “0” : tên File là “0”
“frame” : {x = 1 , y = 1 , w = 164 , h: 163} 
			X là hoành độ góc trên cùng bên trái của frame.
			Y là tung độ góc trên bên trái của frame.
			W là width – độ rộng của frame.
			H là height – chiều cao của frame.
Như vậy khi ta có 1 hình ảnh gồm nhiều frame và 1 AtlasJson ta sẽ  lấy được 1 danh sách các frame trong hình ảnh đó.
6.	Sentences
Gồm tập hợp các file Json , mỗi file Json là 1 chủ đề : 
 
Hình ảnh trên là file Json về chủ đề “Time” . File này là 1 mảng các Object . Mỗi object lại là một câu hỏi :
•	Line : Câu đầy đủ / chính xác . 
•	Alt1 : Câu thứ nhất bị thiếu .
•	Alt2 : Câu thứ 2 bị thiếu . tương tự với alt3 và alt4. 

## IV. Xây dựng game
## V. Tài liệu tham khảo




































