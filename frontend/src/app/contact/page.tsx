import { Mail, LinkedinIcon, Phone, MessageSquare, Github} from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24 md:pt-20">
      <section className="space-y-4 text-center mt-4 md:mt-0">
        <p className="text-3xl md:text-6xl">Contact Me Here</p>

        <div className="flex justify-center items-center space-x-2">
          <Mail className="w-5 h-5 md:w-6 md:h-6" />
          <span className="text-base md:text-xl">vijaykrishnavk92@gmail.com</span>
        </div>

        <a 
          href="https://www.linkedin.com/in/vijaya-krishna-k-139487297/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex justify-center items-center space-x-2 hover:text-blue-500 transition-colors"
        >
          <LinkedinIcon className="w-5 h-5 md:w-6 md:h-6" />
          <span className="text-base md:text-xl">My LinkedIn</span>
        </a>

        <div className="flex justify-center items-center space-x-2">
          <Phone className="w-5 h-5 md:w-6 md:h-6" />
          <span className="text-base md:text-xl">+919611747756</span>
        </div>

        <div className="flex justify-center items-center space-x-2">
          <MessageSquare className="w-5 h-5 md:w-6 md:h-6" />
          <span className="text-base md:text-xl">WhatsApp me +919481194676</span>
        </div>
        {/* GitHub */}
      <a href="https://github.com/vijayakrishna92" target="_blank" rel="noopener noreferrer"
         className="flex justify-center items-center space-x-2 hover:text-blue-500 transition-colors">
        <Github className="w-5 h-5 md:w-6 md:h-6" />
        <span className="text-base md:text-xl">GitHub</span>
      </a>

      {/* DagsHub */}
      <a href="https://dagshub.com/vijaykrishnavk92" target="_blank" rel="noopener noreferrer"
         className="flex justify-center items-center space-x-2 hover:text-blue-500 transition-colors">
        <Github className="w-5 h-5 md:w-6 md:h-6" />
        <span className="text-base md:text-xl">DagsHub</span>
      </a>
      </section>
    </div>
  );
}
