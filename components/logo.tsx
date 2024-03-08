import Image from 'next/image';

export const Logo = () => {
  return (
    <div>
      <Image src="/logo.svg" alt="Logo" height={64} width={64} />
    </div>
  );
};
