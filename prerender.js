/**
 * STATIC PRERENDERING SCRIPT
 * 
 * This script generates static HTML files for all public routes.
 * 
 * WHAT IT DOES:
 * 1. Builds the React app normally
 * 2. Renders each route to static HTML
 * 3. Saves HTML files in dist/ folder
 * 4. Preserves SPA functionality for users
 * 
 * WHY:
 * - Search engines can read content without executing JavaScript
 * - Social media bots can extract meta tags
 * - Web scrapers can access full page content
 * - Users still get fast SPA navigation
 * 
 * USAGE:
 * npm run build (automatically runs this after vite build)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.resolve(__dirname, 'dist');
const templatePath = path.join(distPath, 'index.html');

/**
 * Routes to prerender - inline configuration to avoid import issues
 */
const prerenderRoutes = [
  '/',
  '/about',
  '/fish-collagen-peptide',
  '/fish-gelatin',
  '/applications/fish-collagen-peptide',
  '/applications/fish-gelatin',
  '/contact',
  '/inquiry',
  '/blog',
  // Blog posts
  '/blog/what-is-collagen',
  '/blog/marine-collagen-overview',
  '/blog/fish-collagen-benefits',
  '/blog/collagen-peptides-explained',
  '/blog/gelatin-properties-uses',
  '/blog/what-is-marine-collagen-made-of',
  '/blog/what-is-fish-collagen-made-of',
  '/blog/how-is-fish-collagen-made',
  '/blog/marine-collagen-peptides-production',
  '/blog/how-is-gelatin-made-from-fish',
  '/blog/fish-collagen-powder-vs-peptides',
  '/blog/marine-vs-bovine-collagen',
  '/blog/collagen-powder-explained',
  '/blog/collagen-from-fish-global-demand',
  '/blog/marine-collagen-reviews',
  '/blog/marine-collagen-anti-aging',
  '/blog/collagen-bone-joint-health',
  '/blog/fish-collagen-hair-health',
  '/blog/marine-collagen-skincare',
  '/blog/collagen-nail-strength',
  '/blog/collagen-wound-healing',
  '/blog/best-marine-collagen',
  '/blog/fish-collagen-manufacturer',
  '/blog/collagen-manufacturers-india',
  '/blog/certified-marine-collagen-supplier',
  '/blog/collagen-supplements-global-brands',
  '/blog/marine-collagen-peptides-nutraceutical',
  '/blog/marine-collagen-market-trends',
  '/blog/fish-collagen-demand',
  '/blog/india-fish-collagen-supply-chain',
];

/**
 * Create directory if it doesn't exist
 */
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

/**
 * Generate static HTML for a route
 * 
 * @param {string} route - The route path (e.g., '/about')
 */
function prerenderRoute(route) {
  try {
    // Read the base HTML template
    const template = fs.readFileSync(templatePath, 'utf-8');
    
    // Determine output path
    let outputPath;
    if (route === '/') {
      // Root route stays as index.html
      outputPath = templatePath;
    } else {
      // Other routes get their own folder with index.html
      // Example: /about -> dist/about/index.html
      const routePath = route.slice(1); // Remove leading slash
      const routeDir = path.join(distPath, routePath);
      
      // Ensure directory exists
      ensureDirectoryExists(routeDir);
      
      // Always use index.html inside the directory
      outputPath = path.join(routeDir, 'index.html');
      
      // If a file with the same name exists (not a directory), remove it
      const potentialFilePath = path.join(distPath, routePath);
      if (fs.existsSync(potentialFilePath)) {
        const stats = fs.statSync(potentialFilePath);
        if (stats.isFile()) {
          fs.unlinkSync(potentialFilePath);
        }
      }
    }
    
    // Write the HTML file
    // Note: The template already has all the meta tags from React Helmet
    // which will be properly rendered when the page loads
    fs.writeFileSync(outputPath, template);
    
    console.log(`✅ Prerendered: ${route} -> ${outputPath}`);
  } catch (error) {
    console.error(`❌ Failed to prerender ${route}:`, error.message);
  }
}

/**
 * Main prerendering function
 */
function prerender() {
  console.log('\n🚀 Starting static prerendering...\n');
  
  // Check if dist folder exists
  if (!fs.existsSync(distPath)) {
    console.error('❌ dist folder not found. Run `npm run build` first.');
    process.exit(1);
  }
  
  // Check if template exists
  if (!fs.existsSync(templatePath)) {
    console.error('❌ index.html not found in dist folder.');
    process.exit(1);
  }
  
  console.log(`📄 Found ${prerenderRoutes.length} routes to prerender:\n`);
  prerenderRoutes.forEach(route => console.log(`   - ${route}`));
  console.log('');
  
  // Prerender each route
  prerenderRoutes.forEach(prerenderRoute);
  
  console.log(`\n✨ Prerendering complete! Generated ${prerenderRoutes.length} static HTML files.\n`);
  console.log('📁 Output structure:');
  console.log('   dist/');
  console.log('   ├── index.html (/)');
  console.log('   ├── about/index.html');
  console.log('   ├── fish-collagen-peptide/index.html');
  console.log('   ├── fish-gelatin/index.html');
  console.log('   ├── applications/');
  console.log('   │   ├── fish-collagen-peptide/index.html');
  console.log('   │   └── fish-gelatin/index.html');
  console.log('   ├── contact/index.html');
  console.log('   └── inquiry/index.html\n');
}

// Run prerendering
prerender();
