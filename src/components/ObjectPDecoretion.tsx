import '../components/styles/decoretion.css';

interface DecorationProps {
  style?: React.CSSProperties;
}

const ObjectPDecoretion = ({ style }: DecorationProps) => {
  return <div className="decorationP" style={style} />;
};

export default ObjectPDecoretion;
