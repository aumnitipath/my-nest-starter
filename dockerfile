# ใช้ node เป็น base image
FROM node:18-alpine

# กำหนด working directory ใน container
WORKDIR /app

# คัดลอกไฟล์ package.json และ package-lock.json ไปยัง working directory
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm install

# คัดลอกไฟล์ทั้งหมดในโฟลเดอร์ปัจจุบันไปยัง working directory
COPY . .

# สร้างโปรเจค (ออปชันนี้สำหรับ NestJS)
RUN npm run build

# เปิดพอร์ต 3000
EXPOSE 3000

# คำสั่งเริ่มต้นเมื่อ container เริ่มทำงาน
CMD ["npm", "run", "start:prod"]