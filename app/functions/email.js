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
        alert('تم إرسال رسالتك بنجاح!');
      } else {
        alert('خطأ: ' + result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('خطأ في إرسال الرسالة');
    }
  };