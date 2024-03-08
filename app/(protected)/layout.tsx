import NavBar from './_components/navbar';

const ProtectedLayout = ({ children }: any) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default ProtectedLayout;
