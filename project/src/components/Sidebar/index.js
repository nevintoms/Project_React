import React, {useState, useEffect} from "react"
import "./style.css"
import Card from "../UI/Card";
import blogPost from "../../data/blog.json";
import { NavLink } from "react-router-dom";

const Sidebar = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const posts = blogPost.data
        setPosts(posts);
    }, posts);


    return (
        <div className="sidebarContainer">
            <Card style={{marginBottom: "20px", padding: '20px', boxSizing: 'border-box'}}>
                <div className="cardHeader">
                    <span>About-Us</span>
                </div>
                <div className="profileImageContainer">
                    <img src={require('../../images/blog-post-length.jpg')} alt="PostImagge" />  
                </div>
                <div className="cardBody">
                    <p className="personalBio">My name is Nevin Toms........I would like to be a front end developer ...:)</p>
                </div>
            </Card>

            <Card>
                <div className="cardHeader">
                    <span>Social Network</span>
                </div>
            </Card>

            <Card style={{marginBottom: "20px", padding: '20px', boxSizing: 'border-box'}}>
                <div className="cardHeader">
                    <span>Recent Post</span>
                </div>

                <div className="recentPosts">
                    {
                        posts.map(post => {
                            return(
                                <NavLink to={`/post/${post.id}`}>
                                    <div className="recentPost">
                                        <h3>{post.blogTitle}</h3> 
                                        <span>{post.postedOn}</span>
                                    </div>
                                </NavLink>
                                
                            );
                        })
                    }
                </div>
            </Card>

        </div>
    );
}
export default Sidebar;