function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} [Твоё Имя]. Все права защищены.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="https://github.com/[твой-ник]" className="hover:text-primary">GitHub</a>
            <a href="https://linkedin.com/in/[твой-ник]" className="hover:text-primary">LinkedIn</a>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;