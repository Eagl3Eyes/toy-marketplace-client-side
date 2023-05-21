import TitleHooks from "../Hooks/TitleHooks"
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();

export default function Blogs() {

    TitleHooks('Blogs')
    return (
        <div className="flex-row justify-center">
            <div className="hero" data-aos="zoom-in" data-aos-easing="ease-in-back"
                data-aos-delay="100">
                <div className="hero-content w-[90%]  flex-col lg:flex-row text-white">
                    <img src="https://www.4me.com/wp-content/uploads/2020/06/4me-icon-personal-access-token.png" className=' w-[1000px] hover:scale-[120%] transition duration-500 ease-in-out' />
                    <div className="text-black text-center other bg-no-repeat bg-center bg-contain max-[700px]:py-[8em] max-[480px]:py-[3em] py-[15em]">
                        <h1 className="text-3xl max-[730px]:text-4xl max-[650px]:text-3xl font-bold">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                        <div className='py-3'>
                            <h1 className='font-semibold'>
                                An access token is like a key that allows a client application to access a user’s data from an API server. A refresh token is like a backup key that can be used to get a new access token when the old one expires.
                                <br />
                                When a user logs in or authenticates for the first time, the server validates their credentials and issues an access token and a refresh token. The access token is then included in subsequent requests to the protected resources to verify the users authorization. The access token has a shorter lifespan to enhance security and reduce the impact if it gets compromised.
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero" data-aos="zoom-out" data-aos-easing="ease-in-back"
                data-aos-delay="100">
                <div className="hero-content w-[90%]  flex-col lg:flex-row text-white">
                    <div className="text-black text-center other bg-no-repeat bg-center bg-contain max-[700px]:py-[8em] max-[480px]:py-[3em] py-[15em]">
                        <h1 className="text-3xl max-[730px]:text-4xl max-[650px]:text-3xl font-bold">Compare SQL and NoSQL databases?</h1>
                        <div className='py-3'>
                            <h1 className='font-semibold'>
                                SQL databases can be likened to a meticulously organized filing cabinet, where data is stored in a structured manner with well-defined relationships between different data elements. In SQL databases, data is stored in tables with predefined schemas, and the relationships between tables are established through primary and foreign keys. It ensures consistency and enforces data integrity.
                                <br />
                                On the other hand, NoSQL databases resemble a large, versatile box where you can store various types of data without stringent concerns about their structure or relationships. Data in NoSQL databases is often stored in flexible formats like JSON or BSON (Binary JSON). This flexibility allows for easy storage and retrieval of data, without the need for predefined schemas or rigid data models.
                            </h1>
                        </div>
                    </div>
                    <img src="https://img.freepik.com/premium-vector/database-storing-large-data-cloud-mass-sharing-information_68708-2949.jpg?w=826" className='max-w-sm hover:scale-[110%] transition duration-500 ease-in-out' />
                </div>
            </div>

            <div className="hero" data-aos="zoom-in" data-aos-easing="ease-in-back"
                data-aos-delay="100">
                <div className="hero-content w-[90%]  flex-col lg:flex-row text-white">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" className='max-w-sm hover:scale-[120%] transition duration-500 ease-in-out' />
                    <div className="text-black text-center other bg-no-repeat bg-center bg-contain max-[700px]:py-[8em] max-[480px]:py-[3em] py-[15em]">
                        <h1 className="text-3xl max-[730px]:text-4xl max-[650px]:text-3xl font-bold">What is express js? What is Nest JS?</h1>
                        <div className='py-3'>
                            <h1 className='font-semibold'>
                                Express.js is a minimalistic and flexible web framework for Node.js. It provides a simple yet powerful set of features for building web applications and APIs. Express.js focuses on being lightweight and un opinionated, allowing developers to have more control and freedom in designing their applications architecture. It provides routing, middleware, and a range of plugins to handle various aspects of web development. With its simplicity and extensive community support, Express.js is widely used for creating fast and scalable server-side applications.
                                <br />
                                NestJS is a progressive, opinionated Node.js framework built with TypeScript. It takes inspiration from Angular and follows a modular architecture that promotes code reusability, maintainability, and scalability. NestJS leverages decorators, dependency injection, and TypeScript features to provide a structured and strongly typed development experience. It offers a comprehensive set of features like modules, controllers, providers, middleware, and more. NestJS also provides out-of-the-box support for creating RESTful APIs, GraphQL APIs, and real-time applications using WebSockets. Its focus on developer ergonomics and architectural patterns makes it a popular choice for building complex and enterprise-grade applications.
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero" data-aos="zoom-out" data-aos-easing="ease-in-back"
                data-aos-delay="100">
                <div className="hero-content w-[90%]  flex-col lg:flex-row text-white">
                    <div className="text-black text-center other bg-no-repeat bg-center bg-contain max-[700px]:py-[8em] max-[480px]:py-[3em] py-[15em]">
                        <h1 className="text-3xl max-[730px]:text-4xl max-[650px]:text-3xl font-bold">What is MongoDB aggregate and how does it work?</h1>
                        <div className='py-3'>
                            <h1 className='font-semibold'>
                                MongoDB aggregation is a method to analyze and process data stored in MongoDB. It involves grouping the data and performing calculations on those groups to generate a result. Its like sorting your data into different categories and then performing operations, such as counting or calculating averages, on each category to get meaningful insights from your data.
                            </h1>
                        </div>
                    </div>
                    <img src="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png" className='max-w-sm hover:scale-[110%] transition duration-500 ease-in-out' />
                </div>
            </div>
        </div>
    )
}