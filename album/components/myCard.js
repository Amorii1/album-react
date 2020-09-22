import { Image, Card } from "antd";
const { Meta } = Card;
const MyCard = (props) => {
  return (
    <Card  key={props.item.id} hoverable cover={<Image className="pics" src={props.item.download_url} />}>
      <Meta title={props.item.author} />
    </Card>
  );
};
export default MyCard;
