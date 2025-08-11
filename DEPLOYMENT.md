# KanoonWise Deployment Guide

## 🚀 Deploy to Render.com with Neon Database

### Prerequisites

- GitHub account
- Render.com account (free)
- Neon.tech account (free PostgreSQL database)

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Create Database on Neon

1. Go to https://neon.tech/
2. Sign up/Sign in with GitHub
3. Click "Create Project"
4. Configure:
   - **Project name**: `kanoonwise-db`
   - **Database name**: `kanoonwise_db`
   - **Region**: Choose closest to your users
   - **Plan**: Free (3GB storage)
5. Copy the "Connection String" from the dashboard

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
DB_URL=your_neon_connection_string_from_step_2
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production_2024
JWT_ACCESS_EXPIRATION=15m
JWT_REFRESH_EXPIRATION=7d
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_gmail_app_password
EMAIL_FROM=your_email@gmail.com
SEND_REAL_EMAILS=true
USE_ETHEREAL_EMAIL=false
```

**Important**:

- Replace `your_neon_connection_string_from_step_2` with actual Neon connection string
- Use Gmail App Password (not regular password) for SMTP_PASS
- Generate strong JWT_SECRET using: `node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"`

### Step 5: Deploy

- Click "Create Web Service"
- Wait for deployment (5-10 minutes)
- Your app will be live at: `https://kanoonwise-app.onrender.com`

### Step 6: Setup Database (One-time)

After deployment, run migrations and seed data:

**Option A: Using Render Shell**

1. Go to your web service dashboard
2. Click "Shell" tab
3. Run:

```bash
cd backend
npm run db:migrate
npm run db:seed:all
```

**Option B: Using Local Connection to Neon**

```bash
# Set your Neon DB_URL in backend/.env
cd backend
npm run db:migrate
npm run db:seed:all
```

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
