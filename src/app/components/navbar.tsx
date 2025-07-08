export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <ul className="flex justify-center gap-8 py-4 font-semibold text-blue-600">
        <li><a href="#internados" className="hover:underline">Internados</a></li>
        <li><a href="#liberados" className="hover:underline">Liberados</a></li>
        <li><a href="#aguardando" className="hover:underline">Aguardando</a></li>
      </ul>
    </nav>
  );
}
