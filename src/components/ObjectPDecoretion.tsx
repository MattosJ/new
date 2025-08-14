import '../components/styles/decoretion.css';

interface DecorationProps {
  style?: React.CSSProperties;
}
  // <ObjectPDecoretion style={{position : 'absolute', bottom:'-60px' , right:'48%', backgroundColor : '#FEC820'}} />
const ObjectPDecoretion = ({ style }: DecorationProps) => {
  return <div className="decorationP" style={style} />;
};

export default ObjectPDecoretion;
