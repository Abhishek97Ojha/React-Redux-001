import React, { useContext } from 'react'
import './Home.css'
import { MyContext } from '../App';
const Home = () => {
    const context=useContext(MyContext);
  return (
    <div className='home' style={context.theme}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, unde eaque veniam reprehenderit consequuntur ut fugit odit sint suscipit neque eos ducimus id omnis iure voluptatibus provident, ea quas! Asperiores veniam ipsa dolor, soluta ratione culpa, accusamus architecto molestiae voluptate dicta quaerat voluptatibus suscipit quas porro laborum provident omnis nam molestias! Itaque quod eius voluptates exercitationem repellendus, sequi, non voluptate animi adipisci harum quas illo nulla repellat excepturi. Consequuntur, animi. Veniam, laudantium cum laboriosam odit distinctio excepturi ea maiores repudiandae quia cupiditate quod deleniti. Culpa corporis aliquam necessitatibus repudiandae labore voluptatibus hic facilis magnam. Libero ratione architecto recusandae dicta dolore.</div>
  )
}

export default Home