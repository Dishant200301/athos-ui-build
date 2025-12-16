# SEO Setup Documentation for Athos Collagen Website

## Files Created

### 1. sitemap.xml
Located at: `public/sitemap.xml`

**Purpose:** Helps search engines discover and index all pages on your website.

**What it contains:**
- All 8 pages of your website
- Last modification dates
- Update frequency for each page
- Priority ratings (0.0 to 1.0)

**Priority Levels:**
- 1.0 - Home page (highest priority)
- 0.9 - Main product pages (Fish Collagen Peptide, Fish Gelatin)
- 0.8 - About page
- 0.7 - Application pages
- 0.6 - Contact and Inquiry pages

### 2. robots.txt
Located at: `public/robots.txt`

**Purpose:** Instructs search engine crawlers how to access your site.

**What it does:**
- Allows all search engines to crawl all pages
- Points to your sitemap location
- Sets a crawl delay to prevent server overload

## How to Use

### Step 1: Update Domain Name
**IMPORTANT:** Replace `https://athoscollagen.com/` with your actual domain in both files:
- `public/sitemap.xml` (all `<loc>` tags)
- `public/robots.txt` (Sitemap line)

### Step 2: Submit to Search Engines

#### Google Search Console
1. Go to https://search.google.com/search-console
2. Add your property (website)
3. Verify ownership
4. Go to "Sitemaps" in the left menu
5. Submit: `https://yourdomain.com/sitemap.xml`

#### Bing Webmaster Tools
1. Go to https://www.bing.com/webmasters
2. Add your site
3. Verify ownership
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`

### Step 3: Update Sitemap Regularly
When you:
- Add new pages
- Update content significantly
- Change page structure

Update the `<lastmod>` date in sitemap.xml to the current date.

## SEO Best Practices Implemented

✅ **Dynamic Page Titles** - Each page has unique, descriptive titles
✅ **Meta Descriptions** - All pages have compelling descriptions
✅ **XML Sitemap** - Helps search engines discover all pages
✅ **Robots.txt** - Guides search engine crawlers
✅ **Semantic HTML** - Proper heading structure (H1, H2, etc.)
✅ **Mobile Responsive** - All pages work on mobile devices
✅ **Fast Loading** - Optimized images and code

## Additional SEO Recommendations

### 1. Add Schema Markup
Consider adding structured data for:
- Organization information
- Product details
- Contact information

### 2. Optimize Images
- Use descriptive alt text (already done)
- Compress images for faster loading
- Use WebP format (already done for many images)

### 3. Create Quality Content
- Regular blog posts about collagen benefits
- Customer testimonials
- Case studies
- FAQ section

### 4. Build Backlinks
- Get listed in industry directories
- Partner with health and wellness websites
- Guest posting on relevant blogs

### 5. Monitor Performance
Use these tools:
- Google Analytics - Track visitor behavior
- Google Search Console - Monitor search performance
- PageSpeed Insights - Check loading speed

## Sitemap Update Schedule

- **Home Page:** Update weekly (content changes frequently)
- **Product Pages:** Update monthly (stable content)
- **About Page:** Update monthly (rarely changes)
- **Application Pages:** Update monthly (stable content)
- **Contact/Inquiry:** Update monthly (rarely changes)

## Technical SEO Checklist

✅ HTTPS enabled (ensure SSL certificate)
✅ Mobile-friendly design
✅ Fast page load times
✅ Clean URL structure
✅ Proper heading hierarchy
✅ Alt text for images
✅ Meta tags on all pages
✅ Sitemap created
✅ Robots.txt created
⬜ Submit to search engines (action required)
⬜ Set up Google Analytics (recommended)
⬜ Set up Google Search Console (recommended)

## Contact Information for SEO

Make sure your business information is consistent across:
- Website footer
- Contact page
- Google My Business
- Social media profiles
- Business directories

**Current Contact Info:**
- Email: inquiry@athoscollagen.com
- (Add phone, address when available)

## Next Steps

1. Replace domain name in sitemap.xml and robots.txt
2. Deploy website to production
3. Submit sitemap to Google Search Console
4. Submit sitemap to Bing Webmaster Tools
5. Set up Google Analytics
6. Monitor search performance monthly
7. Update sitemap when adding new content

## Questions?

If you need help with:
- Submitting to search engines
- Setting up analytics
- Adding more pages to sitemap
- SEO optimization

Feel free to ask!
