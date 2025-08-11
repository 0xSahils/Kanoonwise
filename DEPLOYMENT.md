# KanoonWise Deployment Guide

## 🚀 Deploy to Render.com

### Prerequisites
- GitHub account
- Render.com account (free)
- PostgreSQL database (Render provides free tier)

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Create Database on Render
1. Go to https://render.com/
2. Click "New" → "PostgreSQL"
3. Name: `kanoonwise-db`
4. Plan: Free
5. Copy the "External Database URL" after creation

### Step 3: Deploy Web Service
1. Click "New" → "Web Service"
2. Connect your GitHub repository
3. Configure:
   - **Name**: `kanoonwise-app`
   - **Environment**: `Node`
   - **Build Command**: `npm run render-build`
   - **Start Command**: `npm start`
   - **Plan**: Free

### Step 4: Environment Variables
Add these in Render dashboard:

```
NODE_ENV=production
DB_URL=your_postgresql_url_from_step_2
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production_2024
JWT_ACCESS_EXPIRATION=15m
JWT_REFRESH_EXPIRATION=7d
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=creature7985@gmail.com
SMTP_PASS=voam emuv paeq drbr
EMAIL_FROM=creature7985@gmail.com
SEND_REAL_EMAILS=true
USE_ETHEREAL_EMAIL=false
```

### Step 5: Deploy
- Click "Create Web Service"
- Wait for deployment (5-10 minutes)
- Your app will be live at: `https://kanoonwise-app.onrender.com`

## 🔧 Project Structure (Root Directory Deployment)
```
kanoonwise_project/
├── package.json          # Root package.json with build scripts
├── backend/
│   ├── src/server.js     # Serves frontend in production
│   └── package.json      # Backend dependencies
├── frontend/
│   ├── dist/            # Built frontend (created during build)
│   └── package.json     # Frontend dependencies
```

## ✅ Build Process
1. `npm run render-build` installs all dependencies
2. Frontend builds to `frontend/dist/`
3. Backend serves static files from `frontend/dist/`
4. Single port deployment (backend serves everything)

## 🌐 Alternative: Railway.app
Similar process, just use Railway instead of Render.

## 🔍 Troubleshooting
- Check build logs in Render dashboard
- Ensure all environment variables are set
- Database connection string format is correct
