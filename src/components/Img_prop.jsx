const Image = ({ img }) => {
  return (
    <div className="flex items-center justify-center">
      <img src={img} alt="Skill Icon" className="w-[120px] h-[120px] object-contain" />
    </div>
  );
};

export default Image;
