# Notion Integration Setup Guide

This guide will help you set up Notion integration for your club website.

## 🎯 **Overview**

Your club officers can now add events and resources directly in Notion, and they'll automatically sync to your website every 6 hours.

## 📋 **Step 1: Create Notion Database**

1. **Go to [notion.so](https://notion.so)** and create a new page
2. **Add a database** by typing `/database` and selecting "Table"
3. **Name it** "Events" or "Club Events"

### **Database Properties:**

| Property Name | Type | Required | Description |
|---------------|------|----------|-------------|
| **Title** | Title | ✅ | Event title |
| **Date** | Date | ✅ | Event date |
| **Description** | Text | ✅ | Event description |
| **Slug** | Text | ✅ | URL slug (e.g., "python-workshop") |
| **Status** | Select | ✅ | Draft/Published |
| **Resources** | Multi-select | ❌ | Video, Slides, Recording, Article |
| **ResourceURLs** | Text | ❌ | URLs separated by commas |

### **Status Options:**
- `Draft` - Not published yet
- `Published` - Will appear on website

## 🔑 **Step 2: Get Notion API Access**

1. **Go to [notion.so/my-integrations](https://notion.so/my-integrations)**
2. **Click "New integration"**
3. **Name it** "ProgClub Website"
4. **Copy the Internal Integration Token**

## 🗄️ **Step 3: Get Database ID**

1. **Open your Events database** in Notion
2. **Copy the URL** - it looks like: `https://notion.so/workspace/1234567890abcdef...`
3. **Extract the database ID** (the long string after the last `/`)

## 🔧 **Step 4: Set Up GitHub Secrets**

1. **Go to your GitHub repository**
2. **Settings** → **Secrets and variables** → **Actions**
3. **Add these secrets:**

```
NOTION_TOKEN = your_integration_token_here
NOTION_DATABASE_ID = your_database_id_here
```

## 📝 **Step 5: Test the Integration**

1. **Add a test event** in Notion:
   - Title: "Test Event"
   - Date: Today
   - Description: "This is a test"
   - Slug: "test-event"
   - Status: "Published"

2. **Trigger manual sync:**
   - Go to **Actions** tab in GitHub
   - Click **"Sync Notion Content"**
   - Click **"Run workflow"**

3. **Check your website** - the event should appear!

## 🎉 **Step 6: Train Club Officers**

### **How to Add Events:**

1. **Open Notion** (web or mobile app)
2. **Go to Events database**
3. **Click "+ New"**
4. **Fill in details:**
   - **Title:** "Python Workshop"
   - **Date:** 2025-01-22
   - **Description:** "Learn Python basics"
   - **Slug:** "python-workshop"
   - **Status:** "Published"
   - **Resources:** Select "Video", "Slides" if available
   - **ResourceURLs:** "https://youtube.com/..., https://docs.google.com/..."

5. **Save** - it will sync to website in 6 hours (or trigger manual sync)

## 🔄 **Automation**

- **Automatic sync:** Every 6 hours
- **Manual sync:** Go to GitHub Actions → "Sync Notion Content" → "Run workflow"
- **Vercel deployment:** Automatic when content changes

## 🆘 **Troubleshooting**

### **Event not appearing:**
- Check Status is set to "Published"
- Verify slug is unique
- Check GitHub Actions for errors

### **Resources not showing:**
- Make sure ResourceURLs are in correct order (Video, Slides, Recording, Article)
- Check URLs are valid

### **Sync not working:**
- Verify GitHub secrets are set correctly
- Check Notion integration permissions
- Look at GitHub Actions logs

## 📱 **Mobile Usage**

Club officers can use the **Notion mobile app** to:
- Add events on-the-go
- Take photos for events
- Collaborate in real-time
- Get notifications

## 🎯 **Benefits**

- **No coding required** for content updates
- **Real-time collaboration** for club officers
- **Mobile-friendly** content management
- **Automatic website updates**
- **Rich media support** (images, videos, links)

---

**Need help?** Check the GitHub Actions logs or ask for support! 