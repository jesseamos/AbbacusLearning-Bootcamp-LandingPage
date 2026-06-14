import { Twitter, Instagram, Linkedin, Youtube, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  const socials = [
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/abaccuslearning"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/abaccuslearning/"
    },
    {
      name: "Linkedin",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/abbacus-learning-9247503a2/"
    },
    {
      name: "Youtube",
      icon: Youtube,
      url: "https://www.youtube.com/@AbbacusLearning"
    }
  ]
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <a href="#top" className="flex items-center gap-2 pl-2 group">
              <span className="grid h-[20px] w-[20px] md:h-[40px] md:w-[40px] place-items-center overflow-hidden rounded-[10px] bg-gradient-brand">
                <img
                  src="abbacus-logo.jpeg"
                  alt="AbbacusLearning Logo"
                  width={40}
                  height={40}
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="font-bold tracking-tight text-neutral-900 dark:text-white text-sm sm:text-base">
                <img
                  src="logo-text.png"
                  alt="AbbacusLearning Logo"
                  className="md:h-[25px] md:w-[120px] h-[20px] w-[80px] object-contain"
                />
              </span>
            </a>
          </div>
          <p className="mt-3 text-sm text-gradient-brand font-semibold">Your Future Counts.</p>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            Helping young Africans go from using AI to building with it.
          </p>
          <div className="mt-5 flex gap-2">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.url}
                className="grid place-items-center h-9 w-9 rounded-full border border-border hover:bg-secondary hover:text-brand-purple transition"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#about" className="hover:text-foreground">About</a></li>
            {/* <li><a href="#curriculum" className="hover:text-foreground">Curriculum</a></li> */}
            <li><a href="#mentorship" className="hover:text-foreground">Mentorship</a></li>
            <li><a href="#testimonials" className="hover:text-foreground">Testimonials</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Get in touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-brand-purple" /><a href="mailto:abaccus29@gmail.com">abaccus29@gmail.com</a></li>
            <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-brand-blue" /><a href="https://chat.whatsapp.com/G3aVPY9CmonGSdczV8QkW5">WhatsApp Community</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row justify-between gap-2 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} AbbacusLearning. All rights reserved.</span>
          <span>Made with intent in Africa.</span>
        </div>
      </div>
    </footer>
  );
}
