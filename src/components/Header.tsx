import { HeaderContainer, Secction2, Secction1 } from "./Header.style";

export default function Header() {
  return (
    <HeaderContainer>
      <Secction1>
        {" "}
        <p>logo</p>{" "}
      </Secction1>

      <Secction2>
        <div>
          <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div>
          <p>Img Linkedin</p>
          <p>Image Github</p>
        </div>
      </Secction2>
    </HeaderContainer>
  );
}
