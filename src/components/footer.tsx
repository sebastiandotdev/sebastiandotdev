import Image from "next/image";
import nextImg from 'static/nextjs.svg'

export default function Footer() {
  return (
    <>
      <footer className="rounded-lg backdrop-blur-lg w-full xl:w-[1120px] mx-auto mt-10">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="text-sm sm:text-center text-secondary">
              Sebastián García - Hecho con{" "}
            </span>
            <Image
              src={nextImg}
              alt="Nextjs herramienta frontend portafolio"
              className="size-8"
            />
          </div>
          <small className="text-secondary">
            © Todos los derecho reservado a{" "}
            <a
              href="https://midu.dev"
              target="_blank"
              className="hover:underline hover:text-white"
            >
              @midudev
            </a>
          </small>
        </div>
      </footer>
    </>
  );
}
