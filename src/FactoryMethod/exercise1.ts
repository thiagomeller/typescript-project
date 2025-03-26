abstract class BaseNotification {
  abstract send(message: string): void;
}

class Email {
  createNotification(): EmailNotifications {
    return new EmailNotifications();
  }
}

class EmailNotifications extends BaseNotification {
  send(message: string): void {
    console.log(`Email notification: ${message}`);
  }
}

class SMS {
  createNotification(): EmailNotifications {
    return new SMSNotifications();
  }
}

class SMSNotifications extends BaseNotification {
  send(message: string): void {
    console.log(`SMS notification: ${message}`);
  }
}

const email1 = new Email();
const emailnot = email1.createNotification();
emailnot.send("mensagem email");

const sms1 = new SMS();
const smsnot = sms1.createNotification();
smsnot.send("mensagem sms");
