import NavBar from './_components/navbar';

const LandingLayout = ({ children }: any) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default LandingLayout;
