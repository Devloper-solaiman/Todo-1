
const Navbar = () => {
    return (
        <div className="flex justify-center mt-2">
            <div className="inline-flex justify-center items-center text-xl bg-gray-300 gap-6 px-6 py-3 rounded-lg shadow-md font-semibold">
                <ul><li className="hover:text-blue-700 cursor-pointer transition-colors duration-300"><a href="/">Home</a></li></ul>
                <ul><li className="hover:text-blue-700 cursor-pointer transition-colors duration-300"><a href="/contact">Contact</a></li></ul>
                <ul><li className="hover:text-blue-700 cursor-pointer transition-colors duration-300"><a href="/todo">ToDo</a></li></ul>
            </div>
        </div>
    );
};

export default Navbar;