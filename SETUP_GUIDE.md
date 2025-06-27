# 🚀 How to Connect Your Portfolio to GitHub

Follow these simple steps to get your portfolio on GitHub:

## Step 1: Create a GitHub Account (if you don't have one)
1. Go to [github.com](https://github.com)
2. Click "Sign up" and create your account
3. Verify your email address

## Step 2: Create a New Repository
1. Once logged in, click the "+" icon in the top right corner
2. Select "New repository"
3. Name it `portfolio` or `sujal-portfolio`
4. Make sure it's set to "Public"
5. **DON'T** check "Add a README file" (we already have one)
6. Click "Create repository"

## Step 3: Download Your Project Files
Since we're in a browser environment, you'll need to download the files:

1. **Right-click** in the file explorer on the left
2. Select "Download" or use the download option in your browser
3. This will download all your project files as a ZIP

## Step 4: Set Up Git Locally
1. **Extract** the downloaded ZIP file to a folder on your computer
2. **Open Terminal/Command Prompt** in that folder
3. **Run these commands one by one:**

```bash
# Initialize git repository
git init

# Add all files
git add .

# Make your first commit
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote (replace YOUR_USERNAME with your actual GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git push -u origin main
```

## Step 5: Connect Netlify to GitHub
1. **Claim your Netlify site** using this link:
   https://app.netlify.com/claim?utm_source=bolt#eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfaWQiOiI1aDZmZEstVktNTXZuRjNiRlZUaktfU2JKVGgzNlNfMjJheTlpTHhVX0Q4Iiwic2Vzc2lvbl9pZCI6IjUwODc2OTA0OjU3MzU1MzUiLCJpYXQiOjE3NTEwMTA4MzR9.j_w_RDgusKLc9STAuaNwXV1wwJ5g0VZ2vF6VUSKuX1M

2. **In your Netlify dashboard:**
   - Go to "Site settings"
   - Click "Build & deploy"
   - Click "Link to repository"
   - Connect your GitHub account
   - Select your portfolio repository
   - Set build command: `npm run build`
   - Set publish directory: `out`
   - Click "Save"

## 🎉 You're Done!
Now whenever you push changes to GitHub, Netlify will automatically update your live website!

## Need Help?
If you get stuck on any step, here are some resources:
- [GitHub's Hello World Guide](https://guides.github.com/activities/hello-world/)
- [Git Installation Guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Netlify Documentation](https://docs.netlify.com/)

## Quick Commands Reference
```bash
# To update your site after making changes:
git add .
git commit -m "Update portfolio"
git push
```

Your live site will be at: https://your-site-name.netlify.app