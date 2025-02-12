const Exp_prop = (props) => {
  return (
    <>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <div className="shadow-2xl rounded-3xl border-2 bg-[#e1e1e1] dark:bg-transparent border-[#00040f] h-[350px] max-sm:h-[300px] p-8 flex flex-col items-center justify-center hover:bg-gradient-to-tl from-[#e1e1e1] to-[#fff] dark:from-[#00040F] dark:to-[#0B274C] transition duration-300">
          
          {/* Image Section */}
          <div className="w-full flex justify-center">
            <img 
              src={props.img} 
              alt={props.title} 
              className="rounded-lg w-[220px] h-[120px] object-cover"
            />
          </div>

          {/* Title Section */}
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200 text-2xl tracking-wide font-semibold text-center mt-4">
            {props.title}
          </h1>
          
        </div>
      </a>
    </>
  );
};

export default Exp_prop;
