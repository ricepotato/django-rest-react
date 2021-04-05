import React from "react";
import { connect } from "react-redux";
import { getPosts, deletePost } from "../Redux/actions";
import { Card, Row, Col, message } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

class ListPosts extends React.Component {
  componentDidMount() {
    this.props.getPosts();
  }

  deletePost = (id) => {
    this.props.deletePost(id, this, info);
  };

  info() {
    message.info("Post Deleted");
  }

  render() {
    const posts = this.props.posts;
    console.log(posts);

    return (
      <Col span={12} offset={6}>
        {posts.map((p) => (
          <Row gutter={[48, 48]}>
            <Col span={24}>
              <Card
                key={p.id}
                title={p.title}
                style={{ width: "100%" }}
                actions={[
                  <DeleteOutlined
                    key="delete"
                    onClick={() => this.deletePost(p.id)}
                  ></DeleteOutlined>,
                ]}
              >
                <p>{p.content}</p>
              </Card>
            </Col>
          </Row>
        ))}
      </Col>
    );
  }
}

const mapStateToProps = (state) => ({ posts: state.posts });
const mapDispatchToProps = { getPosts, deletePosts };
export default connect(mapStateToProps, mapDispatchToProps)(ListPosts);