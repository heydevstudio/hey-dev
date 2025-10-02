function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="md:px-16 flex justify-center items-center h-[5rem] px-6 text-center border-t border-t-[#b0f45a]">
      <p>
        &copy; <span>{currentYear}</span> Hey Dev. Todos los derechos
        reservados.
      </p>
    </footer>
  );
}

export default Footer;
