// Full logo shown on the admin login / create-first-user screens.
export function Logo() {
  return <>
    <img className="af-brand--dark" src="/logo.png" alt="Atlantic Fortis" style={{ width: 220, height: "auto" }} />
    <img className="af-brand--light" src="/logo-light.png" alt="Atlantic Fortis" style={{ width: 220, height: "auto" }} />
  </>;
}
