import profile from "../../../assets/images/profile.png";

const Header = () => {

  return (
    <header className="flex justify-between iteems-center p-4 mx-4 border-b-2">
      <h1 className="text-4xl font-bold">
        Knowledge cafe</h1>
      <img src={profile}></img>
    </header>
  );
};

export default Header;