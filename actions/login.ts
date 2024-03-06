'use server';

export async function login(formData: FormData) {
  console.log(
    `Email and password submitted: ${formData.get('email')} and ${formData.get('password')}`
  );
  // return await prisma.account.findUnique()
}
