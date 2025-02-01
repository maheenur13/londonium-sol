import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const SERVICE_ID = 'contact_service';
const PUBLIC_KEY = '2SUAJnVFgpoi5lKDg';
const TEMPLATE_ID = 'contact_form';

export const sendToEmailJs = async (data: any): Promise<boolean> => {
    try {
        const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, { ...data }, PUBLIC_KEY);
        if (response.status === 200) {
            Swal.fire({
                title: 'Message Sent',
                icon: 'success',
                timer: 3000,
                text: 'Thank you for reaching out! We have received your message and will get back to you shortly.',
            });
            return true;
        } else {
            return false;
        }
    } catch (error: any) {
        Swal.fire({
            title: 'Something went wrong!',
            icon: 'error',
            timer: 3000,
            text: String(error),
        });
        return false;
    }
};
