# EasyPay University - Heroku Deployment Guide

## Prerequisites
- Heroku account (free tier works fine)
- Git installed on your machine
- Node.js 18+ installed locally

## Deployment Options

### Option 1: Deploy via Heroku CLI (Recommended)

1. **Install Heroku CLI**
   ```bash
   # Download from: https://devcenter.heroku.com/articles/heroku-cli
   # Or install via npm:
   npm install -g heroku
   ```

2. **Login to Heroku**
   ```bash
   heroku login
   ```

3. **Create Heroku App**
   ```bash
   cd easypayuniversity
   heroku create your-app-name
   # Example: heroku create easypay-university-training
   ```

4. **Set Node.js Buildpack (automatic detection)**
   ```bash
   heroku buildpacks:set heroku/nodejs
   ```

5. **Deploy**
   ```bash
   git push heroku main
   ```

6. **Open Your App**
   ```bash
   heroku open
   ```

### Option 2: Deploy via GitHub Integration

1. **Go to Heroku Dashboard**
   - Visit: https://dashboard.heroku.com/
   - Click "New" → "Create new app"

2. **App Configuration**
   - App name: `easypay-university-training` (or your preferred name)
   - Region: United States (or your preferred region)
   - Click "Create app"

3. **Connect to GitHub**
   - Go to "Deploy" tab
   - Select "GitHub" as deployment method
   - Connect your GitHub account
   - Search for repository: `easypayuniversity`
   - Click "Connect"

4. **Enable Auto Deploy (Optional)**
   - Scroll to "Automatic deploys"
   - Select "main" branch
   - Click "Enable Automatic Deploys"

5. **Manual Deploy**
   - Scroll to "Manual deploy"
   - Select "main" branch
   - Click "Deploy Branch"

## Configuration Files Added

### Procfile
```
web: npm start
```
Tells Heroku how to start the application.

### package.json Updates
- Added `heroku-postbuild` script for automatic building
- Added Node.js engine requirements
- All necessary dependencies included

### app.json
- Heroku app metadata
- Buildpack configuration
- Environment variables

## Environment Variables
No environment variables are required for this application since it uses:
- Client-side state management
- Local storage for persistence
- No external APIs or databases

## Build Process
1. Heroku detects Node.js project
2. Installs dependencies (`npm install`)
3. Runs build script (`npm run build`)
4. Starts application (`npm start`)

## Expected URLs
After deployment, your app will be available at:
- `https://your-app-name.herokuapp.com`

## Monitoring & Logs
```bash
# View app logs
heroku logs --tail

# Check app status
heroku ps

# Open app in browser
heroku open
```

## Troubleshooting

### Common Issues:
1. **Build Failure**: Check Node.js version compatibility
2. **App Crash**: Review logs with `heroku logs --tail`
3. **Slow Loading**: First request may be slow on free tier (dyno sleeping)

### Solutions:
- Ensure Node.js version >= 18.0.0
- All dependencies are in `dependencies`, not `devDependencies`
- Build succeeds locally with `npm run build`

## Free Tier Limitations
- App sleeps after 30 minutes of inactivity
- 550 free dyno hours per month
- Apps may take 10-30 seconds to wake up

## Estimated Deployment Time
- **Initial Setup**: 5-10 minutes
- **First Deploy**: 5-15 minutes (build process)
- **Subsequent Deploys**: 2-5 minutes

## Post-Deployment Testing
1. Visit your Heroku URL
2. Test the complete gamification workflow:
   - Complete a training module quiz
   - Verify EasyPay Bucks are awarded
   - Check balance in header
   - Visit Currency Exchange page
   - Test gift card redemption interface

## Support
- Heroku Documentation: https://devcenter.heroku.com/
- Next.js on Heroku: https://elements.heroku.com/buildpacks/mars/create-next-app-buildpack