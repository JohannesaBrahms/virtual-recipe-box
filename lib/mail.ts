import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const fromEmail = 'onboarding@resend.dev';

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const passworddResetLink = `http://localhost:3000/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: fromEmail,
    to: email,
    subject: 'Reset your password',
    html: `<p>Click <a href="${passworddResetLink}">here</a> to reset your password.</p>`,
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: fromEmail,
    to: email,
    subject: 'Confirm your email',
    html: `<p>Click <a href="${confirmLink}">here</a> to confim email.</p>`,
  });
};

export const sendTwoFactorEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: fromEmail,
    to: email,
    subject: '2FA Code',
    html: `<p>Here is your 2Fa code: ${token}`,
  });
};
