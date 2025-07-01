export async function sendEmail (formData)  {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
  
      const result = await response.json();
      console.log(result)
      
      if (result.success) {
        alert('Message sent successfully');
      } else {
        alert('Error: ' + result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message');
    }
  };