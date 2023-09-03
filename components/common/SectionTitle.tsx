interface Props {
  title: string;
}

const SectionTitle: React.FC<Props> = ({ title }) => {
  return (
    <h5 className="text-zinc-200 text-center font-bold mb-8">
      {title}
    </h5>
  );
};

export default SectionTitle;
