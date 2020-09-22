import { useEffect, useState } from "react";
import { Row, Col, Progress } from "antd";
import MyCard from "../components/myCard";

const Album = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      });
  }, []);

  return (
    <body>
      {loading ? (
        <Progress
          className="progress"
          type="circle"
          percent={100}
          format={() => "Done"}
        />
      ) : (
        <div className="container">
          <div>
            <Row className="album-grid">
              {data.map((item) => (
                <Col>
                  <MyCard item={item} />
                </Col>
              ))}
            </Row>
          </div>
        </div>
      )}
    </body>
  );
};

export default Album;
