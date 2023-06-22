import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto'>
            <div className='my-5'>
                <h3>Question: Differences between uncontrolled and controlled components?</h3>
                <p>Answer: Controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
            </div>
            <div className='my-5'>
                <h3>Question: How to validate React props using PropTypes?</h3>
                <p>Answer: PropTypes is a built-in library used to validate the data types of props passed to a component. The library provides a way to ensure that the props passed to a component are of the expected type and shape, and can help prevent bugs caused by invalid props. To validate props using PropTypes, you need to first import the PropTypes library into your component file.</p>
            </div>
            <div className='my-5'>
                <h3>Question: Difference between nodejs and express js?</h3>
                <p>Answer: Node.js is a server-side JavaScript runtime environment that allows developers to build server-side applications using JavaScript.
                Express.js is a web application framework for Node.js that provides a set of tools and features for building web applications and APIs. 
                </p>
            </div>
            <div className='my-5'>
                <h3>Quesiton: What is a custom hook, and why will you create a custom hook?</h3>
                <p>Answer: Custom hooks are created by defining a function that uses existing React hooks, such as useState or useEffect, to provide a specific behavior or functionality. The function can then be used in any component that needs that functionality, allowing you to reuse code across multiple components.</p>
            </div>
        </div>
    );
};

export default Blog;