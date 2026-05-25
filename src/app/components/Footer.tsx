export const dynamic = "force-dynamic";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="flex h-[5rem] items-center justify-center border-t border-t-[#b0f45a] px-6 text-center md:px-16">
      <p>
        &copy; <span>{currentYear}</span> Hey Dev. Todos los derechos
        reservados.
      </p>
    </footer>
  );
}

export default Footer;
