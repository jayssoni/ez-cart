# Vercel Deployment Guide - Dream Décor

## 🚀 Deploy Kaise Karein

### Option 1: Separate Deployments (Recommended)

#### Frontend Deploy:
1. Vercel dashboard me jao
2. "New Project" click karo
3. GitHub repo select karo
4. **Root Directory**: `frontend` set karo
5. **Framework Preset**: Vite select karo
6. **Build Command**: `npm run build`
7. **Output Directory**: `dist`
8. Environment Variables add karo:
   - `VITE_SERVER_URL` = your backend URL
   - Add Firebase config variables if needed
9. Deploy click karo

#### Admin Deploy:
1. Same process repeat karo
2. **Root Directory**: `admin` set karo
3. Baaki sab same
4. Deploy karo

### Option 2: Monorepo Deployment

Agar ek hi repo se dono deploy karni hai:

1. Root me se deploy karo
2. Multiple projects create karo Vercel me
3. Har project ke liye alag environment variables set karo

## ⚙️ Environment Variables

### Frontend (.env):
```
VITE_SERVER_URL=https://your-backend-url.com
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_id
VITE_FIREBASE_APP_ID=your_app_id
```

### Admin (.env):
```
VITE_SERVER_URL=https://your-backend-url.com
```

## 🔧 Common Issues & Fixes

### Issue 1: "404 on page refresh"
✅ **Fixed**: vercel.json with rewrites already added

### Issue 2: "Environment variables not working"
✅ **Fix**: 
- Vercel dashboard me Environment Variables section me add karo
- Local .env file Vercel pe upload nahi hoti
- Redeploy karo after adding variables

### Issue 3: "Build fails"
✅ **Fix**:
- Check Node version (should be 18.x or higher)
- Run `npm install` locally first
- Check for TypeScript/ESLint errors: `npm run lint`

### Issue 4: "Routes not working"
✅ **Fixed**: vercel.json me proper rewrites added

### Issue 5: "Tailwind CSS not loading"
✅ **Fix**: 
- Ensure `@import "tailwindcss"` is in index.css
- Check if Tailwind plugin is in vite.config.js
- Both already configured ✓

## 📝 Pre-Deployment Checklist

- [ ] All environment variables noted down
- [ ] Backend URL ready
- [ ] Firebase config ready (if using)
- [ ] Build works locally: `npm run build`
- [ ] Preview works locally: `npm run preview`
- [ ] Git changes committed
- [ ] Pushed to GitHub

## 🎯 Step-by-Step Deployment

### Frontend:
```bash
cd frontend
npm install
npm run build
npm run preview  # Test locally
```

### Admin:
```bash
cd admin
npm install
npm run build
npm run preview  # Test locally
```

## 🔗 After Deployment

1. Custom domain add karo (optional)
2. Environment variables verify karo
3. Test all routes
4. Check API connections
5. Monitor Vercel logs for errors

## 🆘 Agar Problem Aaye

1. Vercel dashboard me "Deployments" tab check karo
2. Build logs dekho error ke liye
3. Function logs check karo runtime errors ke liye
4. Redeploy karo if needed

## 📞 Backend Deployment

Backend ko alag deploy karo (Railway, Render, Heroku):
- Railway.app (recommended)
- Render.com
- Heroku
- DigitalOcean

Backend URL ko frontend/admin env variables me add karna mat bhoolna!
