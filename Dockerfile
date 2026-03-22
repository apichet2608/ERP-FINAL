FROM node:22-bookworm-slim

# ตั้งค่า Environment
ENV CHROME_PATH=/usr/bin/chromium \
    TZ=Asia/Bangkok \
    PGTZ=Asia/Bangkok \
    DEBIAN_FRONTEND=noninteractive

# 1. ติดตั้ง Dependencies และ Chromium
RUN apt-get update && apt-get install -y --no-install-recommends \
    chromium \
    fonts-liberation \
    fonts-thai-tlwg \
    libasound2 \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libcups2 \
    libdrm2 \
    libgbm1 \
    libgtk-3-0 \
    libnspr4 \
    libnss3 \
    libx11-xcb1 \
    libxcomposite1 \
    libxdamage1 \
    libxfixes3 \
    libxrandr2 \
    xdg-utils \
    wget \
    ca-certificates \
    fontconfig \
    && rm -rf /var/lib/apt/lists/*

# 2. ติดตั้งฟอนต์ Sarabun (โหลดเฉพาะไฟล์ที่ใช้จริง)
# สร้างโฟลเดอร์และดาวน์โหลดไฟล์ ttf โดยตรงจาก GitHub (ไม่ต้อง unzip ไฟล์ยักษ์)
RUN mkdir -p /usr/share/fonts/truetype/sarabun && \
    BASE_URL="https://github.com/google/fonts/raw/main/ofl/sarabun" && \
    wget -q -P /usr/share/fonts/truetype/sarabun/ "$BASE_URL/Sarabun-Regular.ttf" && \
    wget -q -P /usr/share/fonts/truetype/sarabun/ "$BASE_URL/Sarabun-Bold.ttf" && \
    wget -q -P /usr/share/fonts/truetype/sarabun/ "$BASE_URL/Sarabun-Italic.ttf" && \
    wget -q -P /usr/share/fonts/truetype/sarabun/ "$BASE_URL/Sarabun-BoldItalic.ttf" && \
    fc-cache -f -v

WORKDIR /app

# (ถ้ามีไฟล์ package.json)
# COPY package*.json ./
# RUN npm install --production

# COPY . .

# สั่งรันแอปของคุณ
# CMD ["node", "index.js"]

# ... (ส่วนติดตั้ง Chromium และ Fonts เดิมของคุณ) ...

WORKDIR /app

# 1. คัดลอกไฟล์ package.json เพื่อลง dependencies
COPY package*.json ./
RUN npm install --production

# 2. คัดลอกโค้ดทั้งหมด (รวมถึงโฟลเดอร์ dist ที่ build แล้ว) เข้าไปใน Image
COPY . .

# 3. สำคัญ: Cloud Run จะกำหนด Port ผ่าน Environment Variable ชื่อ $PORT
# NestJS ของคุณต้องฟัง (listen) ที่ port นี้ (ปกติคือ 8080)
EXPOSE 3000

# สั่งรันแอป (ใช้ path ให้ถูกตามโปรเจคคุณ)
CMD ["node", "dist/main.js"]