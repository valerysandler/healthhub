import nodemailer from 'nodemailer';

export async function sendEmail(email: string) {
  try {
    // Создание объекта для отправки почты
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // Замените на адрес SMTP-сервера
      port: 587, // Замените на порт SMTP-сервера
      secure: false, // Установите true, если используете SSL
      auth: {
        user: 'valerysandler@gmail.com', // Замените на ваше имя пользователя
        pass: 'kbcqmlstdgcdecux', // Замените на ваш пароль
      },
    });

    // Настройка письма
    const mailOptions = {
      from: 'HealthHub', // Замените на ваше имя пользователя
      to: email, // Замените на адрес получателя
      subject: 'Поздравляем с регистрацией в HealthHub',
      text: 'Добро пожаловать в HealthHub! Спасибо за регистрацию.',
    };

    // Отправка письма
    const info = await transporter.sendMail(mailOptions);

    console.log('Письмо успешно отправлено:', info.response);
  } catch (error) {
    console.error('Ошибка при отправке письма:', error);
  }
}

