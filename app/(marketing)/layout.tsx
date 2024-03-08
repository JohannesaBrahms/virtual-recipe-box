import NavBar from './_components/navbar';

const HomeLayout = ({ children }: any) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default HomeLayout;
