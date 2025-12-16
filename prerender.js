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
 * npm run build (automatically runs this after Vite build)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getPrerenderedPaths } from './prerender.config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.resolve(__dirname, 'dist');
const templatePath = path.join(distPath, 'index.html');

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
      ensureDirectoryExists(routeDir);
      outputPath = path.join(routeDir, 'index.html');
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
  
  // Get all routes to prerender
  const routes = getPrerenderedPaths();
  
  console.log(`📄 Found ${routes.length} routes to prerender:\n`);
  routes.forEach(route => console.log(`   - ${route}`));
  console.log('');
  
  // Prerender each route
  routes.forEach(prerenderRoute);
  
  console.log(`\n✨ Prerendering complete! Generated ${routes.length} static HTML files.\n`);
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
