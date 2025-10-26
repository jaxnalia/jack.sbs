import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
  try {
    const formData = await request.json();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      return json({ success: false, message: 'Missing required fields' }, { status: 400 });
    }

    // Submit to Web3Forms with hidden access key
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: '8426b9e2-56a6-4ef9-a2e1-a0ff22cd20b9',
        name: formData.name,
        email: formData.email,
        businessType: formData.businessType,
        message: formData.message,
        subject: 'New Contact Form Submission'
      })
    });

    const result = await response.json();
    
    if (result.success) {
      return json({ success: true, message: 'Message sent successfully!' });
    } else {
      return json({ success: false, message: 'Failed to send message. Please try again.' }, { status: 400 });
    }
  } catch (error) {
    console.error('Error in contact API:', error);
    return json({ success: false, message: 'An error occurred. Please try again.' }, { status: 500 });
  }
};
