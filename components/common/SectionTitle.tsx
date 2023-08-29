interface Props {
  title: string;
}

const SectionTitle: React.FC<Props> = ({ title }) => {
  return (
    <h5 className="text-zinc-200 text-base lg:text-4xl text-center font-bold">
      {title}
    </h5>
  );
};

export default SectionTitle;
