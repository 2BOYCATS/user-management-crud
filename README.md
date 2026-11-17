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
4. เปิด JSON Server (จะรันที่ `http://localhost:3000`)
   ```bash
   npm run server
   ```
5. ใช้ Live Server เปิดไฟล์ `index.html`

## 🔌API Endpoints
Base URL: `http://localhost:3000`

