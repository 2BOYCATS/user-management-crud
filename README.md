# User Management 👥

โปรเจกต์จัดการรายชื่อผู้ใช้นี้ใช้ฝึกเรียกข้อมูลจาก REST API ด้วย fetch แบบ async/await ครบทั้ง 4 เมธอด 
ได้แก่ GET, POST, PUT และ DELETE ข้อมูลผู้ใช้สมมุติถูกเก็บไว้ในไฟล์ users.json และให้บริการผ่าน JSON Server ระบบดึงรายชื่อมาแสดงเป็นตาราง สามารถเพิ่ม แก้ไข และลบผู้ใช้ได้จากหน้าเว็บ

🧷[Live Demo](https://2boycats.github.io/user-management-crud/)

## ✨ Features
- แสดงรายชื่อผู้ใช้ทั้งหมดในตาราง พร้อมจำนวนผู้ใช้
- เพิ่มผู้ใช้ใหม่ผ่านฟอร์มป๊อปอัป
- แก้ไขข้อมูลผู้ใช้ในหน้าฟอร์มแยก
- ลบผู้ใช้ได้ด้วยการกดปุ่มเดียว
- จัดการข้อผิดพลาดเบื้องต้นเมื่อเรียก API ไม่สำเร็จ

## 🛠️ Tech Stack
- HTML, CSS, JavaScript
- JSON Server (v0.17.4)

## 🚀 วิธีรันโปรเจกต์
1. เปิดโฟลเดอร์โปรเจกต์ด้วย VS Code
2. ตั้งตั้ง [Node.js](https://nodejs.org/) หากยังไม่มี
3. ติดตั้ง dependencies:
   
   ```bash
   npm install
   ```
5. เปิด JSON Server (จะรันที่ `http://localhost:3000`)
   
   ```bash
   npm run server
   ```
7. ใช้ Live Server เปิดไฟล์ `index.html`

## 🔌API Endpoints
Base URL: `http://localhost:3000`

| Method | Endpoint | การทำงาน |
| --- | --- | --- |
| `GET` | `/users` | ดึงผู้ใช้ทั้งหมด |
| `GET` | `/users/:id` | ดึงผู้ใช้ตาม id |
| `POST` | `/users` | เพิ่มผู้ใช้ใหม่ |
| `PUT` | `/users/:id` | แก้ไขข้อมูลผู้ใช้ |
| `DELETE` | `/users/:id` | ลบผู้ใช้ |

ตัวอย่างข้อมูลผู้ใช้
```json
{
  "id": 1,
  "first_name": "Robert",
  "last_name": "Smith",
  "email": "robert123@gmail.com"
}
```

## 🔄️ การทำงานของระบบ
1. เมื่อเปิดหน้าเว็บ ระบบจะเรียก `GET /users` เพื่อดึงรายชื่อมาแสดงในตาราง
2. กดปุ่ม Add User กรอกข้อมูลแล้วส่งไปที่ `POST /users` จากนั้นดึงรายชื่อใหม่มาแสดง
3. กดปุ่มแก้ไข (✏️) ระบบเปิดหน้า `formEditUser.html?id=...` ดึงข้อมูลเดิมด้วย `GET /users/:id` มาใส่ฟอร์มแล้วบันทึกด้วย `PUT /users/:id`
4. กดปุ่มลบ (🗑️) ระบบส่ง `DELETE /users/:id` แล้วดึงรายชื่อใหม่มาแสดง

## 📁 โครงสร้างโปรเจกต์
```
.
├── index.html           # หน้ารายชื่อผู้ใช้ + ฟอร์มเพิ่มผู้ใช้
├── formEditUser.html    # หน้าแก้ไขผู้ใช้
├── scripts/
│   ├── app.js           # GET (ทั้งหมด), POST, DELETE
│   └── edit.js          # GET (ตาม id), PUT
├── styles/
│   ├── main.css
│   └── formEditUser.css
├── users.json           # ฐานข้อมูลจำลองสำหรับ JSON Server
└── package.json
```

## 📝 หมายเหตุ
- ต้องเปิด JSON Server `(npm run server)` ก่อนเปิดหน้าเว็บ ไม่เช่นนั้นตารางจะแสดงเป็นแถวว่าง
- เมื่อเพิ่ม แก้ไข หรือลบผู้ใช้ ข้อมูลจะถูกเขียนลงไฟล์ `users.json` โดยตรง

## 📚 สิ่งที่ได้เรียนรู้
- การส่งคำขอ `GET`, `POST`, `PUT`, `DELETE` ด้วย `fetch` และจัดการผลลัพธ์ที่ได้กลับมา
- การสร้าง REST API จำลองด้วย JSON Server
- การส่งข้อมูลข้ามหน้าด้วย URL query parameter (?id=)

## 🔮 แผนพัฒนาต่อ
- เพิ่มช่องค้นหาและกรองรายชื่อผู้ใช้
