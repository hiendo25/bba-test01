# Tổng hợp kiến thức đã học từ Lesson 2

## Git

### 1. Ba vùng làm việc của Git
- **Working directory** → nơi chứa code local.  
- **Staging Area** → nơi tạm lưu thay đổi đã chọn.  
- **Repository** → nơi lưu trữ lịch sử commit.  

 Quy trình cơ bản: 
1. Tạo code ở **working directory**.  
2. `git add <file>` hoặc `git add .` → copy file vào **staging area**.  
3. `git commit -m "message"` → chuyển file từ **staging area** sang **repository**.  
4. Sau commit, file không còn ở staging nữa.  

---

### 2. Git Workflow

#### 🔹 Dùng **global config**
- Quy trình: `init → config (global) → add → commit → push`  
- Chỉ cần config `user.name` và `user.email` **một lần** cho toàn bộ repo trong máy.  
- Tất cả repo sau này sẽ tự dùng chung config này.  
- Nếu repo nào cần khác thì phải config lại mà **không dùng flag `--global`**.  

#### 🔹 Dùng **local config** (không global)
- Quy trình: `init → config (local) → add → commit → push`  
- Mỗi repo phải config `user.name` và `user.email` riêng.  
- Từ lần 2 trở đi repo đó không cần config lại nữa.  
- Repo khác muốn dùng phải config lại từ đầu.  

---

##  JavaScript

### 1. Chạy file JS
- `node filename.js` → biên dịch 1 file.  
- Phải `cd` đến folder chứa file `.js` để run.  

---

### 2. Comment
- Comment 1 dòng: `// ...`  
- Comment nhiều dòng: `/* ... */`  
- Hoặc bôi đen đoạn code → **Ctrl + /**  

---

### 3. Biến và Hằng
- **Biến (`let`, `var`)** → giá trị thay đổi được.  
  - Ưu tiên dùng **`let`** vì dễ debug hơn `var`.  
- **Hằng (`const`)** → giá trị cố định, không thay đổi.  

---

### 4. Toán tử 1 ngôi (++ / --)

- **Prefix**: `++x`, `--y` (tăng/giảm trước, trả về sau)  
```js
let d = 10;
let c = ++d; // d = 11, c = 11
c = --d;     // d = 10, c = 10

```
- Postfix: `x++`, `y--`   ( trả về trước, tăng sau)

```js
let d = 10; 
c = d++; // d = 11, c = 10
c = d--;     // d = 9, c = 10
```
---

### 5. Loop
```js

for (i = 0; i < 30; i++) {
   // kq muốn in ra
}
```
- i = 0 → điều kiện khởi tạo.

- i < 30 → điều kiện chạy/dừng.

- i++ → cập nhật sau mỗi vòng lặp.

