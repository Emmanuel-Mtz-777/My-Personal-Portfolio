export default function ProjectCard({ project }) {
  const { title, description, github, image, repository } = project;

  return (
    <article
      className="
        w-full max-w-[720px]
        flex flex-col gap-6
        px-4 py-6
        rounded-3xl
        bg-[#1c2430]
      "
    >
      <h3 className="text-lg sm:text-2xl font-bold text-white">
        {title}
      </h3>
      
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div className="
          w-full md:w-auto
          flex-shrink-0 
          flex items-center justify-center
        ">
          <img
            src={image}
            alt={`Captura de pantalla de ${title}`}
            className="
              w-full max-w-[300px] h-[180px]
              md:w-[300px] md:h-[300px]
              object-cover rounded-3xl
              transition duration-300
              hover:scale-100 hover:border-2 hover:border-white
            "
          />
        </div>
        
        <div className="flex flex-col justify-center flex-1">
          <p className="text-sm md:text-base text-white/80 mb-4 leading-relaxed">
            {description}
          </p>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex w-fit
              text-sm md:text-base font-semibold
              border px-4 py-2 md:px-5 md:py-2.5
              rounded-xl
              text-gray-300 bg-gray-800 border-gray-500
              transition duration-300
              hover:bg-white hover:text-black hover:scale-110
            "
          >
            {repository}
          </a>
        </div>
      </div>
    </article>
  );
}