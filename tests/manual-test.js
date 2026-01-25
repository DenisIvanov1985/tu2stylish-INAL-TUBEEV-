/**
 * Manual Testing Script
 * Tests all links, buttons, forms, and UX elements
 */

const BASE_URL = 'http://localhost:3000';

async function testAllLinks() {
  console.log('\n🔗 TESTING ALL LINKS...\n');

  const pages = [
    '/',
    '/projects',
    '/projects/mill-basin-marina',
    '/projects/bosphorus-residence',
    '/projects/pearl-tower-penthouse',
    '/admin',
    '/admin/projects',
    '/admin/requests',
    '/privacy',
    '/terms',
    '/accessibility',
  ];

  const results = [];

  for (const page of pages) {
    try {
      const response = await fetch(`${BASE_URL}${page}`);
      const status = response.status;
      const ok = status === 200;
      results.push({ page, status, ok });
      console.log(`${ok ? '✅' : '❌'} ${page} - ${status}`);
    } catch (error) {
      results.push({ page, status: 'ERROR', ok: false, error: error.message });
      console.log(`❌ ${page} - ERROR: ${error.message}`);
    }
  }

  return results;
}

async function testAPIEndpoints() {
  console.log('\n📡 TESTING API ENDPOINTS...\n');

  // Test contact form API
  try {
    const response = await fetch(`${BASE_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        phone: '+1234567890',
        projectType: 'Residential',
        message: 'This is a test message for API validation.',
      }),
    });

    const status = response.status;
    console.log(`${status === 201 ? '✅' : '⚠️'} POST /api/contact - ${status}`);

    if (status !== 201) {
      const data = await response.json();
      console.log('   Response:', JSON.stringify(data));
    }
  } catch (error) {
    console.log(`❌ POST /api/contact - ERROR: ${error.message}`);
  }
}

async function testFormValidation() {
  console.log('\n📝 TESTING FORM VALIDATION...\n');

  // Test with missing required fields
  const invalidRequests = [
    { name: '', email: 'test@test.com', message: 'test' },
    { name: 'Test', email: '', message: 'test' },
    { name: 'Test', email: 'test@test.com', message: '' },
    { name: 'Test', email: 'invalid-email', message: 'test' },
  ];

  for (const data of invalidRequests) {
    try {
      const response = await fetch(`${BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const status = response.status;
      const shouldFail = status >= 400;
      console.log(`${shouldFail ? '✅' : '⚠️'} Invalid data rejected: ${JSON.stringify(data).substring(0, 50)}... - ${status}`);
    } catch (error) {
      console.log(`⚠️ Request failed: ${error.message}`);
    }
  }
}

async function testResponseTimes() {
  console.log('\n⏱️ TESTING RESPONSE TIMES...\n');

  const pages = ['/', '/projects', '/admin', '/privacy'];

  for (const page of pages) {
    const start = Date.now();
    try {
      await fetch(`${BASE_URL}${page}`);
      const time = Date.now() - start;
      const status = time < 500 ? '✅' : time < 1000 ? '⚠️' : '❌';
      console.log(`${status} ${page} - ${time}ms`);
    } catch (error) {
      console.log(`❌ ${page} - ERROR`);
    }
  }
}

async function testContentIntegrity() {
  console.log('\n📄 TESTING CONTENT INTEGRITY...\n');

  const checks = [
    { url: '/', contains: ['TU2STYLISH', 'Mill Basin Marina', 'Request a Consultation'] },
    { url: '/projects', contains: ['Projects', 'All', 'Residential'] },
    { url: '/privacy', contains: ['Privacy Policy', 'Information We Collect'] },
    { url: '/terms', contains: ['Terms of Use', 'Acceptance of Terms'] },
    { url: '/accessibility', contains: ['Accessibility Statement', 'WCAG'] },
  ];

  for (const check of checks) {
    try {
      const response = await fetch(`${BASE_URL}${check.url}`);
      const html = await response.text();

      const missing = check.contains.filter(text => !html.includes(text));

      if (missing.length === 0) {
        console.log(`✅ ${check.url} - All content present`);
      } else {
        console.log(`❌ ${check.url} - Missing: ${missing.join(', ')}`);
      }
    } catch (error) {
      console.log(`❌ ${check.url} - ERROR: ${error.message}`);
    }
  }
}

async function runAllTests() {
  console.log('═══════════════════════════════════════════════════');
  console.log('       TU2STYLISH - MANUAL TESTING SUITE');
  console.log('═══════════════════════════════════════════════════');

  await testAllLinks();
  await testAPIEndpoints();
  await testFormValidation();
  await testResponseTimes();
  await testContentIntegrity();

  console.log('\n═══════════════════════════════════════════════════');
  console.log('                 TESTING COMPLETE');
  console.log('═══════════════════════════════════════════════════\n');
}

runAllTests();
