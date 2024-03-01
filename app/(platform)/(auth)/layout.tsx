import NavBar from './_components/navbar';

const AuthLayout = ({ children }: any) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default AuthLayout;
