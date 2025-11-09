# Project Videos Folder 🎥

This folder stores **short video demos** for your portfolio projects (< 100MB each).

---

## 📁 Folder Structure

```
public/videos/
├── README.md (this file)
├── project-name-demo.mp4          # Main demo video
├── project-name-feature1.mp4      # Feature showcase
├── project-name-feature2.mp4      # Another feature
└── another-project-demo.mp4
```

---

## 📝 Naming Convention

Use clear, descriptive names that match your project IDs:

### **Format:**
```
{project-id}-{description}.mp4
```

### **Examples:**
```
license-plate-recognition-demo.mp4
license-plate-recognition-detection.mp4
license-plate-recognition-ocr.mp4
careerconnect-dashboard.mp4
careerconnect-matching.mp4
chatbot-conversation.mp4
```

### **Best Practices:**
- ✅ Use lowercase with hyphens
- ✅ Keep names descriptive but concise
- ✅ Match your project ID from Projects.tsx
- ✅ Add meaningful suffixes (-demo, -walkthrough, -features)

---

## 🎬 Video Guidelines

### **File Size:**
- **Maximum:** 100MB per video
- **Recommended:** 20-50MB
- **Why?** Keep repository size manageable and loading fast

### **Format:**
- **Preferred:** `.mp4` (H.264 codec)
- **Alternative:** `.webm` (VP9 codec)
- **Audio:** AAC codec, 128kbps

### **Resolution:**
- **Recommended:** 1280x720 (720p)
- **Maximum:** 1920x1080 (1080p)
- **Aspect Ratio:** 16:9

### **Duration:**
- **Ideal:** 30 seconds to 2 minutes
- **Maximum:** 5 minutes
- **Why?** Short videos engage better and load faster

### **Compression:**
Use these settings for optimal quality/size:
- **Bitrate:** 2-5 Mbps (video)
- **Frame Rate:** 30 fps
- **Codec:** H.264 (High profile)
- **Audio:** 128 kbps AAC

---

## 🛠️ How to Compress Videos

### **Method 1: HandBrake (Free GUI)**

1. Download [HandBrake](https://handbrake.fr/)
2. Open your video
3. Use these settings:
   - Preset: "Web" → "Gmail Large 3 Minutes 720p30"
   - Format: MP4
   - Codec: H.264
   - Frame Rate: 30 fps
   - Quality: RF 22-24
4. Start encode

**Result:** Small file size with good quality!

### **Method 2: FFmpeg (Command Line)**

```bash
# Compress to 720p, ~3-5 Mbps, under 50MB
ffmpeg -i input.mp4 -vf scale=1280:720 -c:v libx264 -preset medium -crf 23 -c:a aac -b:a 128k output.mp4

# Extra compression (if still too large)
ffmpeg -i input.mp4 -vf scale=1280:720 -c:v libx264 -preset medium -crf 26 -b:v 2M -c:a aac -b:a 96k output.mp4

# Check file size
ls -lh output.mp4
```

**CRF Values:**
- 18-22: High quality (larger files)
- 23-26: Good quality (balanced)
- 27-30: Lower quality (smaller files)

### **Method 3: Online Compressor**

Use [FreeConvert](https://www.freeconvert.com/video-compressor) or [Clideo](https://clideo.com/compress-video):
1. Upload your video
2. Select target size (e.g., 50MB)
3. Download compressed version

---

## 📋 How to Add Video to Your Project

### **Step 1: Prepare Your Video**

1. Record your project demo
2. Compress to < 100MB (see above)
3. Name it properly: `project-id-demo.mp4`

### **Step 2: Add to This Folder**

```bash
# Copy video to the videos folder
cp ~/Downloads/my-video.mp4 public/videos/license-plate-recognition-demo.mp4
```

### **Step 3: Add to Your Project**

Open `src/components/Projects.tsx` and add:

```typescript
{
  id: '5',
  title: t('projects.licenseplaterecognition.title'),
  // ... existing fields ...
  
  videoUrl: '/videos/license-plate-recognition-demo.mp4',
  videoDescription: 'Real-time detection demo with 95%+ accuracy',
}
```

### **Step 4: Commit and Push**

```bash
git add public/videos/license-plate-recognition-demo.mp4
git commit -m "Add video demo for license plate recognition project"
git push
```

**Done!** Video will now appear in your project modal.

---

## 🎯 Example Complete Setup

### **Folder Structure:**
```
public/videos/
├── license-plate-recognition-demo.mp4      (45MB - Main demo)
├── license-plate-recognition-rtsp.mp4      (30MB - Phone streaming)
├── careerconnect-matching.mp4              (52MB - Job matching)
├── chatbot-conversation.mp4                (28MB - Interactive demo)
```

### **In Projects.tsx:**

```typescript
// License Plate Recognition - Main Demo
{
  id: '5',
  title: t('projects.licenseplaterecognition.title'),
  videoUrl: '/videos/license-plate-recognition-demo.mp4',
  videoDescription: 'Real-time license plate detection and OCR with YOLOv8',
}

// CareerConnect - Job Matching
{
  id: '4',
  title: t('projects.careerconnect.title'),
  videoUrl: '/videos/careerconnect-matching.mp4',
  videoDescription: 'AI-powered job-candidate matching achieving 94.7% MRR',
}
```

---

## ⚠️ Important Notes

### **Repository Size:**
- Keep total videos folder under **500MB**
- Git repositories work best when kept small
- For videos > 100MB, use **YouTube** instead

### **Git LFS (Large File Storage):**

If you have many videos or larger files, consider using Git LFS:

```bash
# Install Git LFS
git lfs install

# Track video files
git lfs track "public/videos/*.mp4"
git lfs track "public/videos/*.webm"

# Add .gitattributes
git add .gitattributes

# Now add your videos
git add public/videos/
git commit -m "Add project videos with LFS"
```

### **Deployment:**
- Videos in `/public/` are served as static files
- Works on Vercel, Netlify, GitHub Pages
- Ensure your hosting supports large static files

---

## 📊 Size Reference

**Approximate sizes for common durations (720p, CRF 23):**

| Duration | File Size | Best For |
|----------|-----------|----------|
| 30 sec   | ~15-20MB  | Quick feature demos |
| 1 min    | ~25-35MB  | Feature highlights |
| 2 min    | ~40-60MB  | Complete walkthroughs |
| 3 min    | ~60-90MB  | Detailed demonstrations |
| 5 min    | ~100-150MB| Use YouTube instead! |

---

## 🔄 Alternative: Use YouTube for Longer Videos

**When to use YouTube instead:**
- ✅ Videos longer than 3 minutes
- ✅ Multiple videos per project
- ✅ Want to avoid repo bloat
- ✅ Need analytics on views
- ✅ Want adaptive quality streaming

**How to use YouTube:**
```typescript
{
  id: '5',
  title: t('projects.licenseplaterecognition.title'),
  youtubeUrl: 'YOUR_VIDEO_ID',  // Much simpler!
  videoDescription: 'Full project walkthrough',
}
```

---

## 🎥 Recording Tips

### **Screen Recording Tools:**
- **OBS Studio** (Free, professional)
- **Loom** (Easy, quick)
- **QuickTime** (Mac)
- **ShareX** (Windows)

### **What to Show:**
1. **Opening** (5 sec): Project name/logo
2. **Main Features** (80% of video)
3. **Key Results** (metrics, speed, accuracy)
4. **Closing** (5 sec): GitHub link/call-to-action

### **Pro Tips:**
- 🎤 Record voiceover explaining features
- 🖱️ Show keyboard shortcuts with overlay
- ✂️ Cut mistakes and pauses
- 🎵 Add subtle background music (optional)
- 📏 Export in 16:9 aspect ratio

---

## ✅ Checklist Before Adding Video

Before committing your video:

- [ ] Video is compressed to < 100MB
- [ ] Format is .mp4 or .webm
- [ ] Resolution is 720p or 1080p
- [ ] Aspect ratio is 16:9
- [ ] Filename follows naming convention
- [ ] Video demonstrates key features
- [ ] Duration is under 5 minutes
- [ ] Audio is clear (if included)
- [ ] Tested playback locally
- [ ] Total videos folder is < 500MB

---

## 🆘 Troubleshooting

### **Video is too large (> 100MB):**
1. Reduce resolution to 720p
2. Increase CRF value (23 → 26)
3. Reduce bitrate (5M → 2M)
4. Trim unnecessary parts
5. Consider using YouTube instead

### **Video won't play:**
- Check codec is H.264
- Verify audio codec is AAC
- Try converting with HandBrake
- Test in multiple browsers

### **Git push fails (file too large):**
- Use Git LFS (see above)
- Or remove video and use YouTube
- Check hosting provider limits

### **Video looks pixelated:**
- Increase bitrate (2M → 4M)
- Reduce CRF value (26 → 23)
- Export at higher resolution
- Check source video quality

---

## 📚 Quick Reference Commands

```bash
# Create videos folder (if needed)
mkdir -p public/videos

# Compress video with FFmpeg
ffmpeg -i input.mp4 -vf scale=1280:720 -c:v libx264 -crf 23 -c:a aac -b:a 128k public/videos/project-demo.mp4

# Check video file size
ls -lh public/videos/project-demo.mp4

# Check total folder size
du -sh public/videos/

# Add video to git
git add public/videos/project-demo.mp4

# Check file size before commit
git ls-files -s public/videos/

# If using Git LFS
git lfs track "public/videos/*.mp4"
git add .gitattributes
```

---

## 🎓 Learning Resources

**Video Compression:**
- [HandBrake Guide](https://handbrake.fr/docs/)
- [FFmpeg Documentation](https://ffmpeg.org/documentation.html)
- [Video Compression Explained](https://www.adobe.com/creativecloud/video/discover/video-compression.html)

**Git LFS:**
- [Git LFS Tutorial](https://git-lfs.github.com/)
- [GitHub LFS Documentation](https://docs.github.com/en/repositories/working-with-files/managing-large-files)

---

**Ready to add your project videos? Follow the steps above and make your portfolio come alive!** 🚀

*For YouTube/Vimeo videos, see VIDEO_FEATURE_GUIDE.md or QUICK_VIDEO_SETUP.md*
