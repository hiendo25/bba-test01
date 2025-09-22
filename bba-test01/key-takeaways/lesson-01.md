# Tổng hợp kiến thức đã học từ Lesson 1

##  Playwright

### Ưu điểm
- Cross-browser: chạy trên nhiều trình duyệt (Chromium, Firefox, WebKit)  
- Cross-platform: hỗ trợ nhiều hệ điều hành (Windows, macOS, Linux)  
- Auto-wait: tự động chờ các element sẵn sàng trước khi thao tác  
- Web-first assertions: kiểm tra element ngay trong môi trường web  
- Tracing: ghi lại log, screenshot, video khi chạy test  
- Codegen: hỗ trợ tự sinh code khi thao tác thủ công  
- Cú pháp đơn giản, hiện đại, dễ học, dễ tiếp cận  

---

##  Cài đặt Playwright
1. Tạo một thư mục project mới  
2. Cài đặt Playwright: `npm init playwright@latest ` 

---

##  Git Config cơ bản

### Cấu hình thông tin người dùng
- Config username: git config --global user.name "Hien"  
- Config email: git config --global user.email "dothanhhien2409@gmail.comm"  

### Cấu hình branch mặc định
- git config --global init.defaultBranch main  

>Lưu ý:  
- Dùng flag --global → áp dụng cho tất cả repository trên máy  
- Bỏ --global → chỉ áp dụng cho repo hiện tại (cấu hình riêng)  

---

##  Đưa code lên GitHub (từ zero đến push)
1. Tạo repository trên GitHub (trống)  
2. Khởi tạo repo local: git init  
3. Liên kết với repo trên GitHub: git remote add origin <ssh_link>  
4. Thêm code vào staging area: git add .  
5. Commit code: git commit -m "init project"  
6. Push code lên GitHub (nhánh main): git push origin main  
