import { Link } from "react-router-dom";
function Home() {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Navbar */}
            <header className="bg-rose-100 shadow-md">
                <nav className="container mx-auto flex justify-between items-center py-4 px-6">
                    <div className="text-2xl font-bold text-green-500">Foodies</div>
                    <ul className="hidden md:flex space-x-6">
                        <li><a href="#home" className="hover:text-green-500 test-white font-bold">Home</a></li>
                        <li><Link to="/login" className="hover:text-green-500 font-bold">
                            Login
                        </Link></li>
                        <li><Link to="/profile" className="hover:text-green-500 font-bold">
                            Profile
                        </Link></li>
                        <li><a href="#specialties" className="hover:text-green-500 font-bold">Specialties</a></li>
                        <li><a href="#contact" className="hover:text-green-500 font-bold">Contact</a></li>
                    </ul>
                    <button className="md:hidden bg-green-500 text-white px-4 py-2 rounded">Menu</button>
                </nav>
            </header>

            {/* Hero Section */}
            <div id="home" className="w-full bg-cover bg-center h-[80vh] relative"
                style={{ backgroundImage: "url('https://images5.alphacoders.com/423/423321.jpg')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
                    <h1 className="text-5xl font-bold mb-4">Delicious Meals Delivered To You</h1>
                    <p className="text-lg mb-6">Order your favorite dishes from the best restaurants near you.</p>
                    <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg text-lg font-semibold">
                        Order Now
                    </button>
                </div>
            </div>

            {/* Specialties Section */}
            <div id="specialties" className="py-16 px-8">
                <h2 className="text-3xl font-bold text-center mb-10">Our Specialties</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { name: 'Pizza', img: 'https://images7.alphacoders.com/596/596343.jpg' },
                        { name: 'Burger', img: 'https://www.wallpaperflare.com/static/211/4/925/food-burgers-burger-white-background-wallpaper.jpg' },
                        { name: 'Pasta', img: 'http://www.pngall.com/wp-content/uploads/2018/04/Pasta-PNG-Image.png' },
                    ].map((item, index) => (
                        <div key={index} className="bg-yellow-200 rounded-lg shadow-md overflow-hidden">
                            <img src={item.img} alt={item.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                                <p className="text-gray-600">Enjoy the best {item.name} made with love and fresh ingredients.</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Form */}
            <div id="contact" className="py-16 px-8 bg-yellow-200">
                <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
                <form className="max-w-lg mx-auto bg-gray-100 p-8 rounded-lg shadow-lg">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            rows="4"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                            placeholder="Enter your message"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded font-semibold">
                        Submit
                    </button>
                </form>
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 text-white w-full py-6 text-center">
                <p>&copy; 2024 Foodies. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;
